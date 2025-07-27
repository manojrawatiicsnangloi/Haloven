const services = [
  {
    title: "Quick Same-Day Local Moves",
    image: "images/PCM Service 1.webp",
    description:
      "We specialize in fast, same-day local relocations with minimal hassle. Ideal for last-minute or short-distance moves."
  },
  {
    title: "Affordable Hourly or Fixed Pricing",
    image: "images/PCM Service 2.webp",
    description:
      "Choose from flexible hourly rates or fixed-price packages to match your budget—no hidden fees or surprises."
  },
  {
    title: "Packing and Unpacking for Local Moves",
    image: "images/PCM Service 3.webp",
    description:
      "Our packing team ensures your items are securely packed and efficiently unpacked, saving you time and stress."
  },
  {
    title: "Furniture Protection and Handling",
    image: "images/PCM Service 4.webp",
    description:
      "We wrap and protect your furniture with blankets and padding for damage-free delivery—even across short distances."
  },
  {
    title: "Experienced Local Moving Team",
    image: "images/PCM Service 5.webp",
    description:
      "Our trained local movers know the area well, ensuring an efficient and safe move tailored to your schedule."
  },
  {
    title: "Convenient Scheduling and Fast Turnaround",
    image: "images/PCM Service 6.webp",
    description:
      "We work around your timing and guarantee quick turnaround—often completing local moves within hours."
  }
];


  const buttonsContainer = document.getElementById("service-buttons");
  const image = document.getElementById("service-image");
  const title = document.getElementById("service-title");
  const desc = document.getElementById("service-description");

  let activeIndex = 0;

  function renderButtons() {
    buttonsContainer.innerHTML = "";

    services.forEach((service, index) => {
      const btn = document.createElement("button");
      btn.className =
        "w-full flex justify-between items-center px-5 py-3 rounded-md transition font-semibold " +
        (index === activeIndex
          ? "bg-gray-100 border border-lime-400 text-lime-600"
          : "bg-gray-100 hover:bg-gray-200");

      btn.innerHTML = `
        <span>${service.title}</span>
        <span class="${index === activeIndex ? 'text-lime-500' : 'text-black'} text-xl">&rarr;</span>
      `;

      btn.onclick = () => {
        activeIndex = index;
        updateContent();
      };

      buttonsContainer.appendChild(btn);
    });
  }

  function updateContent() {
    const active = services[activeIndex];
    image.src = active.image;
    title.textContent = active.title;
    desc.textContent = active.description;
    renderButtons(); // re-render buttons to reflect active state
  }

  updateContent();
  // Initial load
  renderButtons();
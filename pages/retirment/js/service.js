const services = [
  {
    title: "Personalised Pre-Move Consultation",
    image: "images/PCM Service 1.webp",
    description:
      "We begin each move with a thoughtful consultation to understand your needs, preferences, health considerations, and schedule."
  },
  {
    title: "Gentle Decluttering and Downsizing Support",
    image: "images/PCM Service 2.webp",
    description:
      "Our team helps you sort through belongings with care—supporting decisions on what to keep, gift, donate, or store."
  },
  {
    title: "Professional Packing and Unpacking Services",
    image: "images/PCM Service 3.webp",
    description:
      "We carefully pack fragile, valuable, and everyday items with high-quality materials—and unpack everything to feel like home."
  },
  {
    title: "Furniture Disassembly, Reassembly & Setup",
    image: "images/PCM Service 4.webp",
    description:
      "From beds to dining tables, we disassemble and reassemble furniture with care and place it exactly where you want it."
  },
  {
    title: "Safe, Secure, and Comfortable Transportation",
    image: "images/PCM Service 5.webp",
    description:
      "Our trucks are fitted with hydraulic lifts, non-slip floors, and padded interiors for smooth, secure transport."
  },
  {
    title: "Flexible Scheduling and Gentle Pacing",
    image: "images/PCM Service 6.webp",
    description:
      "We move at your pace with flexible hours, ensuring no one feels rushed. Your well-being is always our top priority."
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
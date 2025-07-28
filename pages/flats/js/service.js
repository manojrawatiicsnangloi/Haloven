const services = [
  {
    title: "Flat & Apartment Removals",
    image: "images/PCM Service 1.webp",
    description:
      "Expert apartment and unit moving services across Perth. We handle everything from high-rise flats to multi-level complexes with care and precision."
  },
  {
    title: "Pre-Move Assessment & Planning",
    image: "images/PCM Service 2.webp",
    description:
      "We assess access, building rules, and logistics ahead of time to ensure a smooth and disruption-free move."
  },
  {
    title: "Packing & Unpacking Services",
    image: "images/PCM Service 3.webp",
    description:
      "Professional packing and unpacking using high-quality materials to ensure the safety of your belongings during transit."
  },
  {
    title: "Furniture Disassembly & Reassembly",
    image: "images/PCM Service 4.webp",
    description:
      "Efficient disassembly and reassembly of bulky furniture for easy transport through stairs or elevators."
  },
  {
    title: "Safe Handling of Shared Spaces",
    image: "images/PCM Service 5.webp",
    description:
      "We use padding, guards, and floor protectors to move respectfully through shared lobbies, lifts, and corridors."
  },
  {
    title: "Flexible Scheduling",
    image: "images/PCM Service 6.webp",
    description:
      "Move on your schedule—weekdays, weekends, after-hours, or public holidays. We work around your building’s access times."
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
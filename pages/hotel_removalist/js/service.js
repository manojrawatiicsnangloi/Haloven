const services = [
  {
    title: "Full-Service Guest Room Furniture Removal",
    image: "images/PCM Service 1.webp",
    description:
      "We manage room relocations including dismantling, padding, and transporting beds, wardrobes, desks, and TVs with zero damage."
  },
  {
    title: "Lobby, Lounge, and Function Area Relocations",
    image: "images/PCM Service 2.webp",
    description:
      "From reception desks to luxury décor, we carefully move and reinstall your public space furnishings to match your hotel's style."
  },
  {
    title: "Kitchen and Hospitality Equipment Moves",
    image: "images/PCM Service 3.webp",
    description:
      "Specialised handling for kitchen equipment like ovens, dishwashers, and refrigeration units using protective packing and tools."
  },
  {
    title: "Office and Admin Equipment Relocation",
    image: "images/PCM Service 4.webp",
    description:
      "We securely transport desks, filing cabinets, computers, and documents, ensuring smooth back-office continuity."
  },
  {
    title: "Back-of-House and Storage Removals",
    image: "images/PCM Service 5.webp",
    description:
      "Efficiently move linen closets, staff lockers, janitorial supplies, and stockroom contents with organisation intact."
  },
  {
    title: "Décor, Art, and Electronics Handling",
    image: "images/PCM Service 6.webp",
    description:
      "Professional relocation of fragile items like artwork, AV systems, lighting, and mirrors with secure packaging and care."
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
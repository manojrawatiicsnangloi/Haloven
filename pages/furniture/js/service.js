const services = [
  {
    title: "House Removalists Perth",
    image: "images/PCM Service 1.webp",
    description:
      "We handle residential moves of all sizes—from single-bedroom flats to large homes. Our team manages packing, transport, and setup with care and speed, seven days a week."
  },
  {
    title: "Furniture Removalists Perth",
    image: "images/PCM Service 2.webp",
    description:
      "From antique cabinets to pianos, we wrap and transport heavy and delicate furniture with professional equipment and techniques for damage-free delivery."
  },
  {
    title: "Office Removalists Perth",
    image: "images/PCM Service 3.webp",
    description:
      "We relocate offices with precision—handling desks, IT systems, and furniture quickly and securely, with flexible scheduling to avoid disruption."
  },
  {
    title: "Flat & Apartment Moves",
    image: "images/PCM Service 4.webp",
    description:
      "Our team is trained to manage lifts, stairs, narrow hallways, and parking challenges for unit and high-rise apartment moves."
  },
  {
    title: "Commercial Removals",
    image: "images/PCM Service 5.webp",
    description:
      "From gyms to warehouses and salons, we manage commercial relocations including equipment, shelves, displays, and more with full care and flexibility."
  },
  {
    title: "Men with Truck Service",
    image: "images/PCM Service 6.webp",
    description:
      "Ideal for light moves, furniture pickups, and short-distance jobs. Choose your movers, and we arrive with a clean, equipped truck at affordable rates."
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
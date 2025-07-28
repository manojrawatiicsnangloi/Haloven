const services = [
  {
    title: "Upright Piano Removal",
    image: "images/PCM Service 1.webp",
    description:
      "Safe and secure transportation for upright pianos using specialised dollies, padded covers, and professional techniques."
  },
  {
    title: "Grand & Baby Grand Piano Moving",
    image: "images/PCM Service 2.webp",
    description:
      "Expert relocation for grand and baby grand pianos, including custom handling, disassembly (if needed), and precise reassembly."
  },
  {
    title: "Digital Piano Transport",
    image: "images/PCM Service 3.webp",
    description:
      "Efficient and protective moving services for digital pianos, ideal for homes, schools, or performance venues."
  },
  {
    title: "Comprehensive Site Assessment",
    image: "images/PCM Service 4.webp",
    description:
      "Pre-move inspections of staircases, narrow corridors, lifts, and entrances to ensure seamless and damage-free piano transport."
  },
  {
    title: "Specialised Moving Equipment",
    image: "images/PCM Service 5.webp",
    description:
      "Use of hydraulic lifts, air-ride vehicles, ramps, and secure strapping systems to safeguard your instrument at every step."
  },
  {
    title: "Post-Move Setup & Placement",
    image: "images/PCM Service 6.webp",
    description:
      "Precise placement of your piano in its new location, ensuring level setup and minimal impact on floors and surroundings."
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
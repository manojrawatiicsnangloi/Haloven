services = [
   {
        "title": "Office Relocation Planning and Consultation",
        "image": "images/PCM Service 1.webp",
        "description": "We develop a custom moving plan based on your office layout, access logistics, and sensitive equipment needs—minimizing downtime and maximising efficiency."
    },
    {
        "title": "Secure Packing and Unpacking",
        "image": "images/PCM Service 2.webp",
        "description": "Sensitive electronics, confidential documents, and office supplies are securely packed, labelled, and unpacked by our trained professionals."
    },
    {
        "title": "Furniture Disassembly and Reassembly",
        "image": "images/PCM Service 3.webp",
        "description": "We disassemble desks, cubicles, and shelves for safer transport, then reassemble them exactly to your new floor plan."
    },
    {
        "title": "IT and Equipment Handling",
        "image": "images/PCM Service 4.webp",
        "description": "Our movers expertly handle computers, servers, and networking devices using specialised materials and secure techniques."
    },
    {
        "title": "Transportation with Modern Fleet",
        "image": "images/PCM Service 5.webp",
        "description": "Our vehicles are equipped with lift gates, padded interiors, and straps to ensure safe and efficient transportation of your office assets."
    },
    {
        "title": "Flexible Scheduling Options",
        "image": "images/PCM Service 6.webp",
        "description": "We accommodate your timeline with after-hours, weekend, and public holiday moves to reduce business disruptions."
    },
    {
        "title": "Commercial Cleaning and Waste Removal",
        "image": "images/PCM Service 1.webp",
        "description": "We offer end-of-lease cleaning and removal of unwanted items to leave your previous location spotless and ready for handover."
    }
]
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
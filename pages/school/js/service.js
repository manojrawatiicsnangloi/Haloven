const services = [
  {
    title: "Comprehensive Move Planning and Consultation",
    image: "images/PCM Service 1.webp",
    description:
      "We collaborate with school administration to assess logistics, schedules, and site-specific challenges for a seamless relocation."
  },
  {
    title: "Secure Packing and Handling of Educational Materials",
    image: "images/PCM Service 2.webp",
    description:
      "From books and student records to lab tools and AV gear, we use premium packing techniques for maximum protection."
  },
  {
    title: "Furniture Disassembly and Reassembly",
    image: "images/PCM Service 3.webp",
    description:
      "Our team dismantles bulky school furniture for safe transit and reassembles it precisely at your new facility."
  },
  {
    title: "Safe Transport with Modern Vehicles",
    image: "images/PCM Service 4.webp",
    description:
      "Our fleet is equipped with hydraulic lifts, padded interiors, and tie-downs to transport school property safely."
  },
  {
    title: "Flexible Scheduling to Minimise Disruption",
    image: "images/PCM Service 5.webp",
    description:
      "We schedule moves during holidays, after-hours, or weekends to ensure minimal disruption to learning."
  },
  {
    title: "Specialised Handling of IT and AV Equipment",
    image: "images/PCM Service 6.webp",
    description:
      "We safely transport computers, servers, smartboards, and AV systems with expert care and secure packing."
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
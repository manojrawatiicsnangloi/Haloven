 const services = [
    {
      title: "House Removalists",
      image: "images/PCM Service 1.webp",
      description:
        "Stress-Free Home Relocations with PCM Removalists. We specialize in smooth, efficient, and affordable house removals across Perth and interstate locations."
    },
    {
      title: "Office Removalists",
      image: "images/PCM Service 2.webp",
      description:
        "Efficient Office Moving Services for your business. We handle furniture, electronics, and documents with minimal disruption to your operations."
    },
    {
      title: "Furniture Removalists",
      image: "images/PCM Service 3.webp",
      description:
        "Professional furniture removals with padding, wrapping, and care. Whether it’s a sofa or a piano, we move it safely."
    },
    {
      title: "Packing Service",
      image: "images/PCM Service 4.webp",
      description:
        "Let our team pack your belongings with precision using high-quality materials. Safe and time-saving packing you can trust."
    },
    {
      title: "Two Men and Truck",
      image: "images/PCM Service 5.webp",
      description:
        "Affordable moving with two men and a truck. Ideal for small to medium moves with professional loading/unloading."
    },
    {
      title: "Cheap Removalists",
      image: "images/PCM Service 6.webp",
      description:
        "Budget-friendly removals without compromising quality. Get value-packed services at competitive rates across Perth."
    },
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

  // Initial load
  renderButtons();
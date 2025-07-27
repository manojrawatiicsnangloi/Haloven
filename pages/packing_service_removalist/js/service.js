


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
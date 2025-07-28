services = [
    
    {
      "title": "Specialised Packing and Custom Crating",
      "description": "Every antique requires unique protection to guard against the rigours of transit. We utilise museum-quality packing materials such as acid-free tissue paper, soft blankets, foam padding, and bubble wrap to safeguard delicate surfaces from scratches, dents, and abrasions. For particularly fragile or valuable items, our skilled team designs and constructs custom-built wooden crates tailored precisely to the shape and dimensions of your antiques. This bespoke crating system offers superior shock absorption and weather resistance, preventing moisture damage and minimizing the risk of shifting during transport.",
      "image": "images/PCM Service 1.webp"
    },
    {
      "title": "Delicate Handling by Experienced Professionals",
      "description": "Handling antiques demands a rare blend of care, knowledge, and respect for craftsmanship. Our removalists are specially trained in antique handling techniques, ensuring every piece is treated as a fragile work of art. Whether you’re entrusting us with an intricate Victorian cabinet, an exquisite porcelain collection, or a rare and delicate grandfather clock, our team carefully plans each lift, move, and load to prevent damage. We understand the balance between cautious handling and efficient operation, maintaining the highest standards of professionalism.",
      "image": "images/PCM Service 2.webp"
    },
    {
      "title": "Climate-Controlled Transportation for Sensitive Items",
      "description": "Many antiques, especially those made of wood, textiles, or canvas, are highly sensitive to fluctuations in temperature and humidity. Our modern, climate-controlled vehicles are equipped to maintain stable environmental conditions throughout transit, reducing the risk of warping, cracking, or fading. This specialised transportation ensures your antiques’ integrity and value are preserved, no matter the distance or weather conditions.",
      "image": "images/PCM Service 3.webp"
    },
    {
      "title": "Expert Disassembly and Reassembly Services",
      "description": "Large or complex antique furniture often requires careful disassembly to navigate narrow staircases, doorways, or tight hallways safely. Our removalists possess the expertise to dismantle and securely pack these pieces, then expertly reassemble them at your new location. This meticulous process minimizes the risk of structural damage and ensures your antiques are restored to their original beauty and functionality.",
      "image": "images/PCM Service 4.webp"
    },
    {
      "title": "Insurance and Valuation Assistance for Peace of Mind",
      "description": "We recognise the importance of protecting your valuable antiques throughout the move. Perth Central Movers provides guidance on comprehensive insurance coverage tailored for antique relocation, giving you financial protection against unforeseen events. Additionally, we can coordinate with professional valuers before transit, helping document the condition and value of your items so that you have full peace of mind throughout the journey.",
      "image": "images/PCM Service 5.webp"
    },
    {
      "title": "Local and Interstate Antique Moving Expertise",
      "description": "Whether your antiques are moving within Perth or being transported interstate, our team has the knowledge, experience, and logistical capabilities to manage all aspects of the move. We carefully plan routes, timing, and handling procedures to guarantee timely, safe delivery regardless of distance. Our commitment to excellence ensures that your antiques receive the same careful treatment whether moving across the street or the country.",
      "image": "images/PCM Service 6.webp"
    },
    {
      "title": "Secure, Climate-Controlled Storage Solutions",
      "description": "During estate settlements, renovations, or when facing extended relocation timelines, your antiques may require temporary, secure storage. Perth Central Movers offers climate-controlled storage facilities that protect your valuables from environmental damage, theft, and deterioration. With 24/7 security monitoring and careful cataloguing, your antiques remain safe and accessible until you’re ready for delivery.",
      "image": "images/PCM Service 1.webp"
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
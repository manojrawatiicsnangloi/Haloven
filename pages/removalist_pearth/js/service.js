services = [
    {
        "title": "Removalists Perth",
        "description": "At Perth Central Movers, we take pride in offering a comprehensive suite of professional removalist services tailored to meet the wide-ranging needs of Perth residents and businesses. Whether you’re relocating from a cosy apartment or shifting an entire corporate office, our highly trained and dedicated team is equipped with the skills, experience, and modern equipment to manage every detail of your move with precision, care, and efficiency.",
        "image": "images/PCM Service 1.webp"
    },
    {
        "title": "Residential Moving",
        "description": "Moving home can be both exciting and overwhelming. We specialise in residential relocations of all sizes from compact studio apartments to large family residences. Our removalists meticulously pack, transport, and unpack your belongings, paying particular attention to delicate and valuable items such as glassware, antiques, and electronics. We customise each move according to your preferred timeline and unique requirements, ensuring a smooth and stress-free transition into your new home. Our friendly team supports you every step of the way, helping you feel confident and relaxed during this major life change.",
        "image": "images/PCM Service 2.webp"
    },
    {
        "title": "Commercial and Office Relocation",
        "description": "Business continuity is critical, and our commercial moving services are designed to minimise downtime and disruption. We handle office moves of all scales, from small startups to large corporate headquarters. Our expert movers efficiently pack and relocate office furniture, IT hardware, sensitive documents, and specialised equipment. We coordinate with your team to schedule the move during off-peak hours, after business hours, or weekends to keep your operations running without interruption. Our goal is to provide a seamless transition so your staff can settle into the new workspace quickly and resume productivity.",
        "image": "images/PCM Service 3.webp"
    },
    {
        "title": "Packing and Unpacking Services",
        "description": "Proper packing is fundamental to a successful move. Our professional packing team utilises premium materials, including reinforced boxes, bubble wrap, and protective padding, to safeguard your belongings throughout the journey. Whether you require a full packing service or assistance with fragile, bulky, or high-value items, we offer flexible options tailored to your needs and budget. Upon arrival at your new location, our unpacking service efficiently organizes and sets up your items in the designated rooms, allowing you to settle in comfortably without the stress of unpacking.",
        "image": "images/PCM Service 4.webp"
    },
    {
        "title": "Furniture Disassembly and Reassembly",
        "description": "Navigating tight corners, staircases, and narrow doorways often requires furniture to be carefully dismantled and reassembled. Our skilled removalists expertly disassemble beds, wardrobes, dining sets, and other bulky pieces to ensure safe transit. Once delivered, we reassemble your furniture precisely according to your instructions, saving you time and the frustration of managing complicated setups.",
        "image": "images/PCM Service 5.webp"
    },
    {
        "title": "Storage Solutions",
        "description": "Sometimes a move isn’t immediate, or you might need to store belongings during renovations or between leases. We offer secure, climate-controlled storage facilities designed to protect your items from damage due to humidity, dust, or temperature fluctuations. Our storage solutions provide flexibility, whether you need short-term or long-term storage, with 24/7 security monitoring for your peace of mind.",
        "image": "images/PCM Service 6.webp"
    },
    {
        "title": "Specialty Moves",
        "description": "Certain items require extra care and expertise due to their size, weight, or fragility. Perth Central Movers specialises in the relocation of delicate pianos, valuable antiques, bulky gym equipment, and other specialty possessions. We carefully plan these moves with customised packing, protective padding, and specialised equipment to ensure the safety and integrity of your treasured belongings.",
        "image": "images/PCM Service 1.webp"
    },
    {
        "title": "Local and Interstate Moves",
        "description": "Whether your move is just around the corner or across state lines, Perth Central Movers offers reliable and professional removalist services that cover both local and interstate relocations. Our modern fleet of trucks is equipped to handle all sizes of moves, and our experienced team navigates every logistical challenge to deliver your belongings on time and in pristine condition, no matter the distance.",
        "image": "images/PCM Service 2.webp"
    },
    {
        "title": "Flexible Scheduling and Competitive Pricing",
        "description": "We understand that every customer’s moving needs and schedules are different. That’s why we offer flexible booking options, including evenings, weekends, and public holidays, to best fit your timetable. Transparency is at the heart of our pricing strategy—we provide clear, upfront quotes with no hidden fees or surprises. Our competitive rates reflect the quality, care, and professionalism you can expect when you choose Perth Central Movers.",
        "image": "images/PCM Service 3.webp"
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
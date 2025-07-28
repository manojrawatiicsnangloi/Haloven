const services = [
  {
    title: "Commercial Relocation Planning and Consultation",
    image: "images/PCM Service 1.webp",
    description: "We assess your workspace, timeline, budget, and special needs to create a fully customised moving strategy."
  },
  {
    title: "Secure Packing and Unpacking",
    image: "images/PCM Service 2.webp",
    description: "We use high-quality materials and careful labelling to ensure safe and organised transport of all business assets."
  },
  {
    title: "Furniture and Equipment Disassembly and Reassembly",
    image: "images/PCM Service 3.webp",
    description: "Our team carefully dismantles, packs, and reassembles office furniture and equipment at the new location."
  },
  {
    title: "Handling of IT Equipment and Sensitive Machinery",
    image: "images/PCM Service 4.webp",
    description: "We securely move computers, servers, and specialised machinery with expert coordination with your IT team."
  },
  {
    title: "Transportation with a Modern and Fully Equipped Fleet",
    image: "images/PCM Service 5.webp",
    description: "We operate a reliable fleet with padded floors, lift gates, and climate controls for safe asset delivery."
  },
  {
    title: "Flexible Scheduling to Suit Your Business Needs",
    image: "images/PCM Service 6.webp",
    description: "We offer after-hours, weekend, and public holiday moves to minimise disruption."
  },
  {
    title: "Commercial Cleaning and Responsible Waste Removal (Optional)",
    image: "images/PCM Service 7.webp",
    description: "We provide cleaning and sustainable disposal of packing materials and obsolete equipment if required."
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
const services =  [
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
const container = document.getElementById("services");

services.forEach((service, index) => {
  const isFirst = index === 0;
  const card = document.createElement("div");
  card.className =
    "relative service-card group border rounded-lg p-5 shadow-sm transition duration-200 bg-white hover:border-blue-500 hover:shadow-lg";
  card.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="text-lime-500 text-xl">${service.icon}</div>
      <h3 class="font-semibold text-lg">${service.title}</h3>
    </div>

    <div class="absolute left-5 right-5 top-full mt-2 bg-white border border-gray-200 rounded-md p-3 shadow-md text-gray-600 text-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200 z-10">
      ${service.description}
    </div>

  `;

  container.appendChild(card);
});
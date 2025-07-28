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


const listContainer = document.getElementById("feature-list");

features.forEach((feature) => {
  const item = document.createElement("div");
  item.className = "flex items-start gap-4";

  item.innerHTML = `
      <img src="${feature.icon}" alt="${feature.title}" class="w-20 h-20  p-2 rounded" />
      <div>
        <p class="font-semibold text-lg">${feature.title}</p>
        <p class="text-gray-700 mt-1">${feature.description}</p>
      </div>
    `;

  listContainer.appendChild(item);
});
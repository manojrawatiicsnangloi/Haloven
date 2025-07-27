const features = [
  {
    title: "Expertise in Educational Relocations",
    image: "images/ic1.webp",
    description:
      "We understand the unique challenges of school moves, from sensitive materials to strict schedules."
  },
  {
    title: "Tailored Moving Plans to Minimise Disruption",
    image: "images/ic2.webp",
    description:
      "Our custom plans fit your academic calendar, reducing downtime and ensuring a smooth transition."
  },
  {
    title: "Careful Handling of Sensitive and Valuable Items",
    image: "images/ic3.webp",
    description:
      "From IT infrastructure to library collections, we use specialised packing to protect your assets."
  },
  {
    title: "Experienced and Professional Removalists",
    image: "images/ic4.webp",
    description:
      "Our trained team works respectfully within school environments while complying with all safety protocols."
  },
  {
    title: "Transparent and Competitive Pricing",
    image: "images/ic5.webp",
    description:
      "We provide upfront quotes with no hidden fees—so you can plan your school’s budget with confidence."
  },
  {
    title: "Modern Equipment and Safe Transport",
    image: "images/ic6.webp",
    description:
      "Our fleet includes vehicles with hydraulic lifts and padded interiors to move school property securely."
  },
  {
    title: "Flexible Scheduling and Reliable Service",
    image: "images/ic7.webp",
    description:
      "We accommodate your schedule—whether it’s school holidays, evenings, or weekends—with punctual, dependable service."
  },
  {
    title: "Comprehensive Services for a Hassle-Free Move",
    image: "images/ic8.webp",
    description:
      "We handle packing, furniture assembly, waste removal, and storage so your staff can focus on education."
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
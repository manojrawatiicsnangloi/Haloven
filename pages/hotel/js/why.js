const features = [
  {
    icon: "images/ic1.webp",
    title: "Expertise in Hospitality Moves",
    description:
      "We’ve relocated everything from boutique hotels to luxury resorts, always tailoring our process to fit your operations."
  },
  {
    icon: "images/ic2.webp",
    title: "Discreet, Low-Impact Service",
    description:
      "We work quietly and respectfully during low-occupancy hours to ensure guest comfort is never compromised."
  },
  {
    icon: "images/ic3.webp",
    title: "Turnkey Project Management",
    description:
      "A single point of contact oversees planning, access, coordination, and supervision from start to finish."
  },
  {
    icon: "images/ic4.webp",
    title: "Specialist Moving Equipment",
    description:
      "We use lift gates, trolleys, wraps, and custom crates to move all hospitality assets securely and efficiently."
  },
  {
    icon: "images/ic5.webp",
    title: "Flexible Scheduling",
    description:
      "We offer overnight, early morning, weekend, and holiday services to match your operational window."
  },
  {
    icon: "images/ic6.webp",
    title: "Transparent Pricing & Insurance",
    description:
      "No hidden costs. Full insurance for peace of mind and detailed quotes for complete clarity."
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
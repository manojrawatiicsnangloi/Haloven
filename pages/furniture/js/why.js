const features = [
  {
    icon: "images/ic1.webp",
    title: "Experienced Local Experts",
    description:
      "Our deep knowledge of Perth’s traffic, access rules, and local areas ensures your move is fast, smooth, and hassle-free."
  },
  {
    icon: "images/ic2.webp",
    title: "Professional Trained Movers",
    description:
      "Every mover is trained in safe lifting, secure packing, and respectful handling of your items—from fragile electronics to family heirlooms."
  },
  {
    icon: "images/ic3.webp",
    title: "No Hidden Costs",
    description:
      "We offer clear, upfront pricing with zero hidden charges—just honest quotes that fit your needs and budget."
  },
  {
    icon: "images/ic4.webp",
    title: "Tailored Moving Solutions",
    description:
      "Whether it's a home, office, or shop—we customise your move plan, resources, and schedule to meet your exact requirements."
  },
  {
    icon: "images/ic5.webp",
    title: "Fully Equipped Trucks & Gear",
    description:
      "Our clean fleet is stocked with padded blankets, straps, ramps, and dollies to protect your items from pickup to delivery."
  },
  {
    icon: "images/ic1.webp",
    title: "Flexible Scheduling",
    description:
      "We move when it suits you—including nights, weekends, and public holidays—because your convenience comes first."
  },
  {
    icon: "images/ic1.webp",
    title: "Comprehensive Insurance Coverage",
    description:
      "Your items are protected throughout the journey with full insurance for complete peace of mind during your move."
  },
  {
    icon: "images/ic1.webp",
    title: "Customer Satisfaction Focused",
    description:
      "We deliver responsive communication, courteous service, and consistent follow-through—earning trust and repeat business from happy clients."
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
const features = [
  {
    "title": "Specialist Expertise in Antique Handling",
    "icon": "images/ic1.webp",
    "description": "Our team undergoes extensive, specialised training focused on the unique demands of antique removal and transportation..."
  },
  {
    "title": "Customised Packing and Crating Solutions",
    "icon": "images/ic2.webp",
    "description": "No two antiques are alike, and that is why we never take a one-size-fits-all approach..."
  },
  {
    "title": "Climate-Controlled Transport for Sensitive Items",
    "icon": "images/ic3.webp",
    "description": "Certain antiques, especially wooden furniture, textiles, fine art, and delicate instruments..."
  },
  {
    "title": "Comprehensive Insurance and Valuation Support",
    "icon": "images/ic4.webp",
    "description": "We understand the monetary and emotional value tied to your antiques..."
  },
  {
    "title": "Experienced and Respectful Removalists",
    "icon": "images/ic5.webp",
    "description": "Our removalists combine professional skill with respectful care..."
  },
  {
    "title": "Secure and Flexible Storage Options",
    "icon": "images/ic1.webp",
    "description": "Sometimes, moving antiques involves temporary storage due to renovations..."
  },
  {
    "title": "Transparent Pricing with No Hidden Costs",
    "icon": "images/ic2.webp",
    "description": "Trust and transparency are fundamental to our business..."
  },
  {
    "title": "Local Knowledge and Logistics Expertise",
    "icon": "images/ic3.webp",
    "description": "Being a locally owned and operated company, we have an intimate understanding of Perth’s geography..."
  },
  {
    "title": "Trusted by Collectors, Museums, and Families",
    "icon": "images/ic4.webp",
    "description": "Over the years, Perth Central Movers has built a strong reputation within the antiques community..."
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
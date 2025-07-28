const features = [
  {
    icon: "images/ic1.webp",
    title: "Extensive Experience in Commercial Moves Across Perth",
    description: "We’ve relocated businesses from many industries, handling sensitive, high-value assets with care."
  },
  {
    icon: "images/ic2.webp",
    title: "Tailored Moving Solutions Designed Around Your Business Needs",
    description: "Every move is uniquely planned according to your operation’s size, pace, and technology."
  },
  {
    icon: "images/ic3.webp",
    title: "Highly Skilled, Professional, and Trustworthy Removal Team",
    description: "Our trained staff ensures safe handling of all items, from electronics to confidential files."
  },
  {
    icon: "images/ic4.webp",
    title: "Modern, Well-Maintained Fleet and Advanced Moving Equipment",
    description: "We invest in trucks and tools to guarantee smooth, safe, and timely moves."
  },
  {
    icon: "images/ic5.webp",
    title: "Competitive and Transparent Pricing with No Hidden Costs",
    description: "We offer value-for-money services with fixed quotes, detailed breakdowns, and no surprises."
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
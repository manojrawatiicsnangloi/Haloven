const features = [
  {
    icon: "images/ic1.webp",
    title: "Specialists in Apartment Relocations",
    description:
      "We focus specifically on flat and unit moves, offering expert solutions for buildings of all shapes and sizes."
  },
  {
    icon: "images/ic2.webp",
    title: "Experienced & Friendly Team",
    description:
      "Our trained professionals are courteous, efficient, and skilled at handling tight spaces and fragile items."
  },
  {
    icon: "images/ic3.webp",
    title: "Customised Moving Plans",
    description:
      "Each move is tailored to your needs—from access conditions to personal preferences and special items."
  },
  {
    icon: "images/ic4.webp",
    title: "Damage-Free Guarantee",
    description:
      "We protect both your belongings and building interiors with lift covers, corner guards, and floor protection."
  },
  {
    icon: "images/ic5.webp",
    title: "Transparent Pricing",
    description:
      "Fixed quotes with no hidden fees—what you see is what you pay, no surprises on moving day."
  },
  {
    icon: "images/ic2.webp",
    title: "Modern Fleet & Equipment",
    description:
      "Our vehicles and tools are purpose-built for safe apartment removals, even in tight or tricky access conditions."
  },
  {
    icon: "images/ic4.webp",
    title: "Flexible Timing Options",
    description:
      "Early mornings, late nights, weekends—your move happens when it’s most convenient for you and your building."
  },
  {
    icon: "images/ic4.webp",
    title: "All-Inclusive Moving Services",
    description:
      "From packing to storage, disposal, and setup—we handle everything so your move is seamless."
  },
  {
    icon: "images/ic5.webp",
    title: "Real-Time Coordination",
    description:
      "Track your move in real-time and stay updated with digital tools for communication and coordination."
  },
  {
    icon: "images/ic1.webp",
    title: "Eco-Friendly & Licensed",
    description:
      "We use recyclable materials, efficient routing, and are fully licensed and insured for complete peace of mind."
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
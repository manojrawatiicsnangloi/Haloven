const features = [
  {
    title: "Specialists in Senior and Retirement Moves",
    image: "images/ic1.webp",
    description:
      "Our team is experienced in senior relocations, providing care, patience, and understanding at every step."
  },
  {
    title: "Personalised, Compassionate Approach",
    image: "images/ic2.webp",
    description:
      "We listen closely to your needs and tailor each move with kindness, patience, and attention to detail."
  },
  {
    title: "Gentle and Respectful Moving Crew",
    image: "images/ic3.webp",
    description:
      "Our trained movers are not only skilled but genuinely caring—offering calm and respectful support throughout the move."
  },
  {
    title: "Flexible Scheduling That Fits Your Routine",
    image: "images/ic4.webp",
    description:
      "We work around your availability—offering weekday, weekend, or holiday moves at a pace that suits you."
  },
  {
    title: "Careful Handling and Safe Transport",
    image: "images/ic5.webp",
    description:
      "Your treasured belongings are packed and moved with premium materials and techniques to prevent any damage."
  },
  {
    title: "Transparent Pricing with Honest Communication",
    image: "images/ic6.webp",
    description:
      "You receive upfront quotes with no hidden charges, ensuring complete clarity and trust in our service."
  },
  {
    title: "Fully Licensed and Insured for Total Confidence",
    image: "images/ic7.webp",
    description:
      "We’re fully insured and accredited, offering complete peace of mind for you and your family."
  },
  {
    title: "Local Knowledge and Community Connection",
    image: "images/ic8.webp",
    description:
      "As a Perth-based team, we know the area, access points, and community requirements—ensuring a smooth move-in process."
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
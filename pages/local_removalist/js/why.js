const features = [
  {
    title: "Expertise in All Office Sizes",
    description:
      "From startups to large corporations, we manage relocations of every scale with experience and precision.",
    icon: "images/ic1.webp"
  },
  {
    title: "Customised Moving Solutions",
    description:
      "We tailor each move to your specific requirements, whether it’s sensitive equipment handling or flexible timings.",
    icon: "images/ic2.webp"
  },
  {
    title: "Professional Moving Team",
    description:
      "Our movers are trained professionals who handle your assets with care, using best practices throughout the process.",
    icon: "images/ic3.webp"
  },
  {
    title: "Modern Fleet & Equipment",
    description:
      "We use top-tier trucks and tools to guarantee safe, efficient, and professional office relocations.",
    icon: "images/ic4.webp"
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. We provide detailed quotes so you know exactly what you're paying for.",
    icon: "images/ic5.webp"
  },
  {
    title: "Flexible Scheduling",
    description:
      "Move your office outside business hours to avoid operational delays and keep your team focused.",
    icon: "images/ic6.webp"
  },
  {
    title: "Fully Insured",
    description:
      "We are fully insured to protect your business assets throughout the relocation process.",
    icon: "images/ic7.webp"
  },
  {
    title: "Exceptional Support",
    description:
      "We communicate every step of the way, providing updates and quick responses to your concerns.",
    icon: "images/ic8.webp"
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
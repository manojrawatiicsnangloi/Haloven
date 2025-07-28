const features = [
  {
    title: "Expertise in Office Moves of All Sizes",
    icon: "images/ic1.webp",
    description: "From startups to large corporates, we manage all scales of office relocations with precision and professionalism."
  },
  {
    title: "Comprehensive and Tailored Moving Solutions",
    icon: "images/ic2.webp",
    description: "We customise each move to suit your business operations, timeline, and relocation needs."
  },
  {
    title: "Highly Trained and Professional Moving Team",
    icon: "images/ic3.webp",
    description: "Our staff are trained in best practices for handling IT gear, furniture, and confidential files securely."
  },
  {
    title: "Modern, Well-Equipped Fleet and Advanced Equipment",
    icon: "images/ic4.webp",
    description: "Our fleet includes trucks with padding, lift gates, and professional-grade moving tools for secure transport."
  },
  {
    title: "Transparent Pricing with No Hidden Fees",
    icon: "images/ic5.webp",
    description: "We provide clear, upfront quotes with no unexpected charges—so you know exactly what to expect."
  },
  {
    title: "Flexible Scheduling Designed to Minimise Business Disruption",
    icon: "images/ic6.webp",
    description: "Evening, weekend, or public holiday moves—our schedules are built around your business hours."
  },
  {
    title: "Fully Insured for Your Peace of Mind",
    icon: "images/ic7.webp",
    description: "We’re fully insured, ensuring your assets are protected from start to finish during the relocation."
  },
  {
    title: "Exceptional Customer Support and Clear Communication",
    icon: "images/ic8.webp",
    description: "We maintain clear, responsive communication throughout your office move for stress-free coordination."
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
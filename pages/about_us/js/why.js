 const features = [
    {
      icon: "images/ic1.webp",
      title: "Experienced & Friendly Team",
      description:
        "Our professional movers are trained to handle your belongings with the utmost care, ensuring everything arrives safely at your new address."
    },
    {
      icon: "images/ic2.webp",
      title: "Tailored Moving Plans",
      description:
        "We understand that every home is different. That's why we offer customized moving solutions to fit your specific needs and budget."
    },
    {
      icon: "images/ic3.webp",
      title: "Packing & Unpacking Services",
      description:
        "Don’t want to pack? We’ve got it covered. We provide high-quality packing materials and can also handle packing and unpacking for you."
    },
    {
      icon: "images/ic4.webp",
      title: "Secure Transport",
      description:
        "Our fully-equipped moving trucks are clean, secure, and designed to handle moves of all sizes."
    },
    {
      icon: "images/ic5.webp",
      title: "Flexible Scheduling",
      description:
        "We work around your preferred timing—whether you’re planning a weekend move or a last-minute relocation."
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
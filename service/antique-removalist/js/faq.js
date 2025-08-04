const faqs = [
  {
    question: "What types of hotels and hospitality venues do you work with?",
    answer:
      "We have experience working with a wide variety of hospitality venues, including boutique hotels, large resorts, serviced apartments, conference centres, motels, and boutique lodges. No matter the size or complexity, we tailor our approach to meet your specific needs."
  },
  {
    question: "How do you minimise disruption to hotel guests during a move or renovation?",
    answer:
      "We coordinate closely with your management team to schedule moves during low occupancy periods, after hours, overnight, or on weekends. Our teams work discreetly and efficiently, respecting noise and cleanliness standards to ensure your guests experience minimal disruption."
  },
  {
    question: "Can you handle moving specialty hotel equipment such as kitchen appliances or AV systems?",
    answer:
      "Yes, we specialise in relocating all types of hotel assets, including commercial kitchen equipment, bar systems, audiovisual gear, IT infrastructure, artwork, and furniture. Our trained staff use specialised equipment and handling procedures to protect delicate and high-value items."
  },
  {
    question: "Do you offer services beyond just moving furniture?",
    answer:
      "Absolutely. Our hotel removalist services include disassembly and reassembly of furniture and fixtures, packing and unpacking, inventory management, waste removal, and even short or long-term storage solutions as needed during renovations or staged moves."
  },
  {
    question: "Are you licensed and insured for commercial moves?",
    answer:
      "Yes, Perth Central Movers is fully licensed and insured. We hold comprehensive public liability and goods-in-transit insurance to protect your property throughout the moving process."
  },
  {
    question: "How far in advance should we book your services?",
    answer:
      "We recommend booking as early as possible to secure your preferred dates, especially for large-scale moves or renovations. However, we also accommodate short-notice moves depending on availability just reach out, and we’ll work to fit your schedule."
  }
];

const faqContainer = document.getElementById("faq-container");

faqs.forEach((item, index) => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item border-b pb-2";

  faqItem.innerHTML = `
      <div class="faq-question font-semibold flex justify-between items-center cursor-pointer" onclick="toggleAccordion(this)">
        <span>${item.question}</span>
        <span class="text-green-600 text-xl font-bold">+</span>
      </div>
      <div class="faq-answer max-h-0 overflow-hidden transition-all duration-300 text-sm mt-2">
        ${item.answer}
      </div>
    `;

  faqContainer.appendChild(faqItem);
});

function toggleAccordion(clicked) {
  const allItems = document.querySelectorAll(".faq-item");
  const answer = clicked.nextElementSibling;
  const icon = clicked.querySelector("span:last-child");

  allItems.forEach((item) => {
    const a = item.querySelector(".faq-answer");
    const i = item.querySelector(".faq-question span:last-child");
    if (a !== answer) {
      a.style.maxHeight = null;
      i.textContent = "+";
    }
  });

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.textContent = "−";
  }
}

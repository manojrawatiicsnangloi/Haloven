const faqs = [
  {
      "question": "1. How much do your removalist services cost in Perth?",
      "answer": "Our pricing depends on several factors, including the size of your move, distance, and any additional services like packing or storage. We provide free, no-obligation quotes with transparent pricing and no hidden fees. Contact us today to get a personalised estimate."
    },
    {
      "question": "2. Do you offer packing and unpacking services?",
      "answer": "Yes, we provide professional packing and unpacking services to make your move easier. Our team uses high-quality packing materials to protect your belongings and can pack everything safely and efficiently."
    },
    {
      "question": "3. How far in advance should I book my move?",
      "answer": "We recommend booking your move at least two weeks in advance to secure your preferred date, especially during peak moving seasons. However, we also accommodate last-minute moves whenever possible."
    },
    {
      "question": "4. Are you insured and licensed?",
      "answer": "Yes, Perth Central Movers is fully licensed and insured. Your belongings are protected throughout the moving process, giving you peace of mind."
    },
    {
      "question": "5. Can you move items that require special handling?",
      "answer": "Absolutely. We have experience moving fragile items, antiques, pianos, and bulky furniture. Our team uses the right equipment and techniques to ensure everything arrives safely."
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

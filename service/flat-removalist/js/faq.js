const faqs = [
  {
      "question": "1. How much does it cost to move from a flat or apartment in Perth?",
      "answer": "The cost of a flat or apartment move depends on factors such as the size of your unit, volume of belongings, number of flights of stairs or elevator usage, access complexity, and additional services like packing or storage. We provide free, no-obligation quotes tailored to your specific move to ensure transparency and affordability."
    },
    {
      "question": "2. Do you offer packing and unpacking services for apartment moves?",
      "answer": "Yes, we provide professional packing and unpacking services. Our experienced team uses high-quality packing materials to secure your delicate items, electronics, and furniture, making the unpacking process at your new home easy and efficient."
    },
    {
      "question": "3. Can you handle moves involving narrow stairwells and small elevators?",
      "answer": "Absolutely. Our team is skilled in navigating tight staircases, narrow corridors, and small or busy elevators common in apartment buildings. We also offer furniture disassembly and reassembly to facilitate smooth access and prevent damage."
    },
    {
      "question": "4. Are you insured for flat and apartment removals?",
      "answer": "Yes, Perth Central Movers is fully licensed and insured. Your belongings are protected throughout the entire moving process, providing you with peace of mind."
    },
    {
      "question": "5. Can you move heavy and bulky items like pianos, safes, or gym equipment?",
      "answer": "Yes, we have the experience and equipment to move heavy or bulky items safely. Please let us know in advance about any special items so we can prepare accordingly."
    },
    {
      "question": "6. Do you offer flexible moving times?",
      "answer": "We understand the importance of flexibility for apartment moves. We offer after-hours, weekend, and public holiday moving options to accommodate building restrictions and your schedule."
    },
    {
      "question": "7. What precautions do you take to protect shared building spaces?",
      "answer": "We use protective materials such as floor runners, corner guards, and padded blankets to prevent damage to walls, floors, and lift interiors. Our team is trained to handle moves with the utmost care and respect for communal areas."
    },
    {
      "question": "8. How far in advance should I book my apartment move?",
      "answer": "Booking at least 2-4 weeks in advance is recommended to secure your preferred moving date, especially during peak seasons. However, we also accommodate last-minute moves when possible—just contact us as soon as you can."
    },
    {
      "question": "9. Can you provide storage options if needed during the move?",
      "answer": "Yes, we can arrange short- or long-term storage solutions through trusted partners to suit your requirements."
    },
    // {
    //   "question": "10. What if I need help disposing of unwanted furniture or packing materials?",
    //   "answer": "We offer responsible disposal and recycling services for unwanted items and packing waste, helping you clear out your old space sustainably."
    // },
    // {
    //   "question": "11. How do you handle delicate or valuable items during the move?",
    //   "answer": "Fragile and valuable items are packed with specialised materials and handled with extra care. If needed, we can also provide customised crating and extra insurance coverage for high-value possessions."
    // },
    // {
    //   "question": "12. Will you provide a written quote and contract?",
    //   "answer": "Yes, we provide clear, written quotes and detailed contracts outlining the scope of work, pricing, and terms to ensure full transparency before your move."
    // }
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

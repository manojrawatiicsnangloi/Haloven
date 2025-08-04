const faqs = [
   {
        "question": "What areas do Perth Central Movers serve?",
        "answer": "We proudly offer removalist services throughout Perth and its surrounding suburbs, including both local and interstate moves. No matter if you’re moving across the street or to another state, we have the resources and expertise to handle your relocation smoothly."
    },
    {
        "question": "How far in advance should I book my move?",
        "answer": "We recommend booking your moving date at least 2 to 4 weeks in advance, especially during peak moving seasons (summer months and end of the financial year). However, we also accommodate last-minute moves whenever possible—just contact us as early as you can to check availability."
    },
    {
        "question": "Do you provide packing services?",
        "answer": "Yes! We offer a range of packing solutions including full packing, partial packing (fragile or valuable items), and supplying professional-grade packing materials. Our experienced team ensures your belongings are packed securely for safe transport."
    },
    {
        "question": "Are my belongings insured during the move?",
        "answer": "Absolutely. Perth Central Movers is fully insured, covering your possessions throughout the packing, transit, and unloading processes. We can also help arrange additional insurance coverage for high-value items if needed."
    },
    {
        "question": "Can you move specialty items like pianos, antiques, or artwork?",
        "answer": "Yes, we specialise in moving delicate and bulky items such as pianos, antiques, artwork, gym equipment, and other valuables. Our trained movers use specialised techniques and equipment to protect and safely transport your unique possessions."
    },
    {
        "question": "Do you offer furniture disassembly and reassembly?",
        "answer": "We do. To navigate tight spaces and ensure the safe transport of your furniture, our team can expertly disassemble larger pieces and reassemble them at your new location, saving you time and effort."
    },
    {
        "question": "What if I need storage during my move?",
        "answer": "If your move requires temporary storage, we offer secure, climate-controlled storage solutions for both short-term and long-term needs. Your belongings will be carefully catalogued and stored until you’re ready for delivery."
    },
    {
        "question": "How do you handle moves in apartment buildings or areas with difficult access?",
        "answer": "Our team has extensive experience managing logistics for moves in apartments, heritage homes, and commercial buildings. We conduct thorough site assessments and coordinate with building management to ensure smooth access and compliance with all regulations."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept various payment methods including credit/debit cards, bank transfers, and cash payments. Payment terms will be discussed during the booking process to suit your convenience."
    },
    {
        "question": "Can you provide an upfront quote?",
        "answer": "Yes, we offer free, no-obligation quotes based on your specific moving requirements. We assess factors such as the volume of items, distance, special handling needs, and any additional services you may require, ensuring transparent pricing with no hidden fees."
    },
    // {
    //     "question": "How long will my move take?",
    //     "answer": "The duration depends on the size and complexity of your move. During our initial consultation, we provide an estimated timeframe. Our team works efficiently to complete your move within the agreed schedule without compromising safety or care."
    // },
    // {
    //     "question": "What measures do you take to protect my property during the move?",
    //     "answer": "Our movers use protective floor coverings, wall padding, and furniture blankets to prevent damage to your home or office during the move. We handle all items carefully and respect your property throughout the process."
    // },
    // {
    //     "question": "Can you accommodate last-minute changes or urgent moves?",
    //     "answer": "We understand that moving plans can change unexpectedly. While advance booking is preferred, we strive to accommodate urgent moves and last-minute adjustments wherever possible—just contact us promptly for assistance."
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

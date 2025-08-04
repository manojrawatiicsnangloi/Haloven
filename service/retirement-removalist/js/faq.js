const faqs =  [
    {
      "question": "What is a retirement move, and how is it different from a regular move?",
      "answer": "A retirement move typically involves relocating a senior or retired individual from a long-term residence to a new living environment such as a retirement village, assisted living facility, or downsized home. These moves often require additional planning, sensitivity, and support to accommodate mobility needs, emotional attachment to possessions, and the desire for a smooth, respectful transition. At Perth Central Movers, we offer tailored services that go beyond just transporting furniturWeee focus on comfort, compassion, and personalised care."
    },
    {
      "question": "Do you help with downsizing and decluttering before the move?",
      "answer": "Yes, absolutely. Downsizing is often one of the most emotional and time-consuming parts of a retirement move. Our friendly team provides gentle assistance with sorting, organising, and decluttering your belongings. We help you identify what to keep, what to pass on to family, and what can be donated or responsibly disposed of, always with respect for your memories and wishes."
    },
    {
      "question": "Can you pack everything for me?",
      "answer": "Yes, we offer a full packing service using high-quality materials to protect your belongings. Whether you need help with fragile china, family heirlooms, clothing, or photo albums, our team carefully labels and packs everything to make the unpacking process simple. We also offer optional unpacking services to help you settle in quickly."
    },
    {
      "question": "Will you help set up furniture and personal items in my new home?",
      "answer": "Absolutely. Once we arrive at your new residence, we’ll reassemble furniture like beds, recliners, and dining tables, and place everything where you want it so your space feels familiar and comfortable from day one. Our team takes time to ensure your new home is ready for living, not just filled with boxes."
    },
    {
      "question": "What if I’m not available during the move? Can my family coordinate on my behalf?",
      "answer": "Yes, we regularly work with family members, carers, and power-of-attorney representatives who coordinate moves on behalf of their loved ones. We’re happy to liaise with your designated family member or aged care facility to plan the move according to everyone’s preferences and needs."
    }
  ]

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

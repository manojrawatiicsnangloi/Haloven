const faqs = [
  {
    question: "What types of businesses do you cater to?",
    answer: "We serve all business types including offices, retail stores, warehouses, schools, and medical clinics across Perth."
  },
  {
    question: "Can you handle large commercial moves?",
    answer: "Absolutely. We’re equipped to move entire buildings or multi-floor offices with detailed planning and coordination."
  },
  {
    question: "Do you offer after-hours or weekend moving services?",
    answer: "Yes. We provide flexible scheduling, including after-hours and weekends, to minimise disruption to your business."
  },
  {
    question: "How do you ensure the safety of sensitive equipment?",
    answer: "Our team uses specialised packing materials and coordinates with your IT staff to move servers, computers, and machinery safely."
  },
  {
    question: "Do you provide packing materials?",
    answer: "Yes. We supply high-quality boxes, crates, wraps, and labels designed for commercial moves."
  },
  {
    question: "What happens if something is damaged during the move?",
    answer: "We are fully insured and take every precaution, but in the rare case of damage, our insurance covers the loss."
  }
];

const faqContainer = document.getElementById('faq-container');

faqs.forEach((item, index) => {
  const faqItem = document.createElement('div');
  faqItem.className = 'faq-item border-b pb-2';
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
  const allItems = document.querySelectorAll('.faq-item');
  const answer = clicked.nextElementSibling;
  const icon = clicked.querySelector('span:last-child');

  allItems.forEach(item => {
    const a = item.querySelector('.faq-answer');
    const i = item.querySelector('.faq-question span:last-child');
    if (a !== answer) {
      a.style.maxHeight = null;
      i.textContent = '+';
    }
  });

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    icon.textContent = '+';
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    icon.textContent = '−';
  }
}
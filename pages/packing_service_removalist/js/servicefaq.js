const faqs =  [
    {
      "question": "Q1: What types of packing services do you offer?",
      "answer": "We offer a full range of packing services, including full-service packing where our team handles everything, partial packing for specific rooms or fragile items, custom crating for delicate or valuable belongings, and specialised commercial packing for offices and businesses. We also provide high-quality packing supplies if you prefer to pack yourself."
    },
    {
      "question": "Q2: How do you ensure my fragile items are protected during packing?",
      "answer": "Our experienced packers use premium materials such as bubble wrap, foam, packing paper, and sturdy boxes tailored to the item’s size and fragility. For very delicate or valuable pieces, we offer custom crating to provide extra protection during transport."
    },
    {
      "question": "Q3: Can you provide eco-friendly packing materials?",
      "answer": "Yes! We are committed to sustainability and offer recyclable and biodegradable packing materials whenever possible, including reusable crates and eco-friendly cushioning."
    },
    {
      "question": "Q4: How much does professional packing cost?",
      "answer": "The cost varies depending on the volume of items, level of service required, and the complexity of packing. We provide free, transparent quotes after assessing your packing needs to ensure no hidden fees."
    },
    {
      "question": "Q5: Can you help me pack just a few fragile or valuable items?",
      "answer": "Absolutely. Our partial packing service is designed for customers who want help with specific rooms or delicate belongings while packing the rest themselves."
    },
    {
      "question": "Q6: Do you offer unpacking services at my new home or office?",
      "answer": "Yes, we provide professional unpacking services where our team will unpack boxes, organise items into rooms, reassemble furniture, and clear packing materials to help you settle in quickly and stress-free."
    },
    {
      "question": "Q7: What if I need to pack items for long-term storage or renovation?",
      "answer": "We offer specialised pre-packing services for storage or renovation projects, using materials and techniques that protect your belongings from dust, moisture, and damage during extended periods."
    },
    {
      "question": "Q8: Can you supply packing materials if I want to pack myself?",
      "answer": "Yes, we offer a full range of professional packing supplies that can be delivered to your home or office. This includes boxes, tape, bubble wrap, stretch wrap, labels, and more."
    },
    {
      "question": "Q9: How far in advance should I book packing services?",
      "answer": "We recommend booking as early as possible to secure your preferred date, especially during peak moving seasons. However, we do accommodate short-notice requests whenever possible."
    },
    {
      "question": "Q10: Are your packing services insured?",
      "answer": "Yes, Perth Central Movers is fully licensed and insured. This means your belongings are protected throughout the packing and moving process for your peace of mind."
    },
    {
      "question": "Q11: How do you handle large or awkwardly shaped items during packing?",
      "answer": "For oversized or uniquely shaped items, we use custom packing materials or build custom crates to ensure maximum protection during transport and handling."
    },
    {
      "question": "Q12: Can you pack office equipment and documents?",
      "answer": "Yes, we offer specialised commercial packing services designed to securely pack IT equipment, sensitive documents, furniture, and office supplies with minimal disruption to your business."
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
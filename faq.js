
  const faqs = [
    {
      question: "What factors affect the cost of hiring removalists?",
      answer: "The cost depends on distance, volume, services (packing, storage), and timing."
    },
    {
      question: "Are there any hidden fees with Perth Central Movers?",
      answer: "No, we provide transparent quotes with no hidden charges."
    },
    {
      question: "Are your removalists experienced and insured?",
      answer: "Yes, all our movers are trained professionals and fully insured."
    },
    {
      question: "Can I book a moving service for a specific time?",
      answer: "Absolutely, you can schedule your move for a specific date and time that works best for you."
    },
    {
      question: "What should I do if I need to reschedule my move?",
      answer: "Just contact our support team in advance and we’ll help reschedule without extra charges."
    },
    {
      question: "How do I get started with Perth Central Movers?",
      answer: "Click on 'Get a Free Quote' and fill in your details. We'll reach out with a personalized plan."
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
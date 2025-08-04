
  const faqs = [
    {
      question: "Why do antiques require specialised removal services?",
      answer: "Antiques are often fragile, valuable, and sometimes irreplaceable. They require expert handling, custom packing, and careful transport to prevent damage such as scratches, cracks, or structural issues. Our specialised service ensures the integrity and condition of your antiques are maintained throughout the move."
    },
    {
      question: "What types of antiques do you move?",
      answer: "NWe handle a wide range of antiques, including Victorian and Edwardian furniture, porcelain and ceramics, fine art and sculptures, grandfather clocks, musical instruments, vintage collectibles, and other delicate or rare items."
    },
    {
      question: "How do you pack antiques for moving?",
      answer: " We use museum-quality packing materials such as acid-free tissue paper, soft blankets, bubble wrap, and custom-built wooden crates tailored to each item’s size and fragility. This bespoke packing protects against shocks, moisture, and temperature changes during transit."
    },
    {
      question: "Do you offer climate-controlled transportation?",
      answer: "Yes. Many antiques are sensitive to temperature and humidity fluctuations. Our climate-controlled vehicles maintain stable conditions to protect your items from warping, cracking, or moisture damage during transport"
    },
    {
      question: "Can you move antiques interstate or only within Perth?",
      answer: "We offer both local and interstate antique moving services. Regardless of the distance, we carefully plan logistics to ensure your antiques arrive safely and on time."
    },
    {
      question: "Are your removalists trained in handling antiques?",
      answer: "Absolutely. Our team is specially trained in antique handling techniques to ensure careful lifting, carrying, and loading. They understand the unique vulnerabilities of antique pieces and work meticulously to avoid damage."
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
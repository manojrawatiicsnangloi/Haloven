const faqs = [
  {
      "question": "1. How much does a local move in Perth typically cost?",
      "answer": "The cost of a local move varies depending on several factors such as the size of your property, the amount of belongings, distance between locations, and any additional services like packing or furniture disassembly. We provide free, no-obligation quotes tailored specifically to your moving needs."
    },
    {
      "question": "2. How far in advance should I book my local move?",
      "answer": "We recommend booking your move at least 2-4 weeks in advance to secure your preferred date and time. However, we also accommodate last-minute moves when possible—just contact us as early as you can."
    },
    {
      "question": "3. Do you offer packing and unpacking services?",
      "answer": "Yes! Our professional team can handle full or partial packing and unpacking. We use high-quality packing materials to ensure your items are protected throughout the move, and we organise boxes for an easy and efficient unpacking process."
    },
    {
      "question": "4. What if I have fragile or valuable items?",
      "answer": "We have extensive experience handling delicate and high-value belongings, including artwork, electronics, antiques, and glassware. Our movers use specialised packing techniques and extra protective materials to keep your valuables safe during transit."
    },
    {
      "question": "5. Can you assist with disassembling and reassembling furniture?",
      "answer": "Absolutely. We carefully disassemble bulky or complex furniture for safe transportation and reassemble everything at your new location to your satisfaction."
    },
    {
      "question": "6. Are your removalists insured and licensed?",
      "answer": "Yes, Perth Central Movers is fully licensed and insured. This means your belongings are protected throughout the moving process, giving you peace of mind."
    },
    {
      "question": "7. Do you move businesses and commercial spaces locally?",
      "answer": "Yes, we provide local removal services for both residential and commercial clients. Whether you’re relocating a home, office, retail store, or warehouse within Perth, we have the expertise to manage your move efficiently."
    },
    {
      "question": "8. What happens if my move takes longer than expected?",
      "answer": "We plan each move carefully to avoid delays, but if unforeseen circumstances arise, we communicate promptly with you and work to resolve the situation with minimal disruption."
    },
    {
      "question": "9. Can you move me on weekends or outside normal business hours?",
      "answer": "Yes, we offer flexible scheduling including evenings, weekends, and public holidays to suit your needs and minimise disruption."
    },
    {
      "question": "10. How do you protect walls and floors during the move?",
      "answer": "Our team uses protective materials like floor runners, corner guards, and padded blankets to prevent damage to your property during packing, loading, and unloading."
    },
    {
      "question": "11. Do you provide storage solutions?",
      "answer": "While we don’t operate our storage facilities, we partner with trusted local storage providers and can arrange secure short-term or long-term storage solutions if required."
    },
    {
      "question": "12. How do I prepare for my local move?",
      "answer": "We recommend decluttering before the move, organising your belongings, labelling boxes clearly, and informing us of any special requirements. Our team is happy to provide personalised advice during your initial consultation."
    },
    {
      "question": "13. What areas do you serve within Perth?",
      "answer": "We cover the entire Perth metropolitan area and surrounding suburbs, ensuring prompt and reliable service wherever you’re moving locally."
    },
    {
      "question": "14. Is there anything I need to know about parking and access on moving day?",
      "answer": "If there are any access restrictions or parking permits required, we advise you to notify us during booking. We can assist with coordinating parking permits or liaising with building managers if necessary."
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
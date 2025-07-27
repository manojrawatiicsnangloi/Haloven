const faqs = [
  {
    "question": "1. How much does it cost to move an office in Perth?",
    "answer": "The cost of an office move depends on several factors, including the size of your office, the distance between locations, the amount of furniture and equipment to be moved, and any additional services like packing or IT equipment handling. We offer free, no-obligation quotes tailored to your specific requirements."
  },
  {
    "question": "2. Do you provide packing and unpacking services for office moves?",
    "answer": "Yes, we offer professional packing and unpacking services. Our trained team uses high-quality packing materials to securely pack your computers, files, electronics, and office supplies, ensuring everything arrives safely and is unpacked efficiently at your new location."
  },
  {
    "question": "3. Can you move sensitive IT equipment and electronics?",
    "answer": "Absolutely. We have extensive experience handling and transporting sensitive IT equipment, including servers, computers, printers, and networking devices. We use specialised packing techniques and equipment to protect your technology during the move."
  },
  {
    "question": "4. How far in advance should I book my office move?",
    "answer": "We recommend booking your office removal at least 2-4 weeks in advance to secure your preferred moving date, especially during busy periods. However, we also accommodate last-minute moves when possible. Just get in touch with us as early as you can."
  },
  {
    "question": "5. Do you offer after-hours or weekend moving services?",
    "answer": "Yes, we understand that minimizing downtime is critical for businesses. That’s why we provide flexible scheduling options, including evenings, weekends, and public holidays, to suit your operational needs."
  },
  {
    "question": "6. Are your office removalists insured and licensed?",
    "answer": "Yes, Perth Central Movers is fully licensed and insured. This ensures that your belongings and equipment are protected throughout the entire moving process, giving you peace of mind."
  },
  {
    "question": "7. What areas do you serve for office removals?",
    "answer": "We provide office removal services throughout Perth and its surrounding suburbs. No matter where your business is located or moving to within the Perth metropolitan area, we’ve got you covered."
  },
  {
    "question": "8. How do you handle fragile or valuable office items?",
    "answer": "Our professional movers are trained to carefully pack, transport, and unpack fragile or high-value items such as artwork, antiques, sensitive electronics, and important documents. We use specialised packing materials and handling techniques to ensure these items arrive safely."
  },
  {
    "question": "9. Can you help with office furniture disassembly and reassembly?",
    "answer": "Yes, our team can disassemble office furniture, cubicles, and shelving for safe transport and then reassemble everything at your new location. We make sure all parts are accounted for and set up according to your specifications."
  },
  {
    "question": "10. What if I need storage solutions during the move?",
    "answer": "If you require short or long-term storage during your office relocation, we can connect you with trusted storage providers or arrange secure storage solutions to suit your needs."
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
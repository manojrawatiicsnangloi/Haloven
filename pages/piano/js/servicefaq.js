const faqs = [
   {
      "question": "Q1: What types of pianos do you move?",
      "answer": "We specialise in moving all types of pianos, including upright pianos, grand pianos, baby grand pianos, and digital pianos. Each type requires specific handling techniques, and our team is fully trained to manage them safely."
    },
    {
      "question": "Q2: How do you ensure the piano is not damaged during the move?",
      "answer": "We use specialised equipment such as heavy-duty piano dollies, padded covers, and reinforced straps to protect your piano. Our experienced movers carefully plan and execute every step, from packing to transport and unloading, to prevent damage."
    },
    {
      "question": "Q3: Do you offer piano moving services for both local and long-distance moves?",
      "answer": "Yes, we provide piano moving services within Perth and surrounding suburbs. For long-distance or interstate moves, please contact us to discuss your specific requirements."
    },
    {
      "question": "Q4: How much does it cost to move a piano?",
      "answer": "The cost depends on several factors, including the type and size of the piano, distance, access difficulties (stairs, narrow hallways), and additional services requested. We provide upfront, transparent quotes tailored to your move with no hidden fees."
    },
    {
      "question": "Q5: Can you move a piano up or down stairs?",
      "answer": "Yes, our team is trained and equipped to move pianos safely up and down stairs, using specialised techniques and equipment to minimise risk to your piano and property."
    },
    {
      "question": "Q6: What preparation should I do before the piano move?",
      "answer": "We recommend clearing the access routes inside and outside your property to ensure smooth transportation. Also, secure loose parts of the piano and inform us of any potential challenges such as parking restrictions or building regulations."
    },
    {
      "question": "Q7: Do you disassemble and reassemble pianos?",
      "answer": "While most pianos are moved fully assembled to maintain integrity, in rare cases where disassembly is necessary, we have the skills to carefully disassemble and reassemble your piano."
    },
    {
      "question": "Q8: Is my piano insured during the move?",
      "answer": "Yes, Perth Central Movers is fully licensed and insured. Your piano is covered against any accidental damage or loss during the move, providing you with peace of mind."
    },
    {
      "question": "Q9: How do you handle moves in apartments or buildings with restricted access?",
      "answer": "We assess access restrictions such as narrow hallways, elevators, stairwells, and parking limitations during our initial consultation. Our team plans the move accordingly, and we use protective materials to prevent damage to shared spaces."
    },
    {
      "question": "Q10: Can you move a piano on short notice?",
      "answer": "We understand that sometimes moves happen unexpectedly. Please contact us as early as possible to check availability. We strive to accommodate urgent moves whenever feasible."
    },
    {
      "question": "Q11: Do you offer storage services for pianos?",
      "answer": "While we primarily focus on relocation, we can connect you with trusted storage partners if you require short-term or long-term piano storage solutions."
    },
    {
      "question": "Q12: What sets Perth Central Movers apart from other piano removalists?",
      "answer": "Our specialised experience in piano relocations, customised moving plans, professional trained team, use of state-of-the-art equipment, flexible scheduling, transparent pricing, and excellent customer service distinguish us as Perth’s trusted piano movers."
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
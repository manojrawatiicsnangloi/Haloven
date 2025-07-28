const faqs = [
  {
      "question": "1. Why do antiques require specialised removal services?",
      "answer": "Antiques are often fragile, valuable, and sometimes irreplaceable. They require expert handling, custom packing, and careful transport to prevent damage such as scratches, cracks, or structural issues. Our specialised service ensures the integrity and condition of your antiques are maintained throughout the move."
    },
    {
      "question": "2. What types of antiques do you move?",
      "answer": "We handle a wide range of antiques, including Victorian and Edwardian furniture, porcelain and ceramics, fine art and sculptures, grandfather clocks, musical instruments, vintage collectibles, and other delicate or rare items."
    },
    {
      "question": "3. How do you pack antiques for moving?",
      "answer": "We use museum-quality packing materials such as acid-free tissue paper, soft blankets, bubble wrap, and custom-built wooden crates tailored to each item’s size and fragility. This bespoke packing protects against shocks, moisture, and temperature changes during transit."
    },
    {
      "question": "4. Do you offer climate-controlled transportation?",
      "answer": "Yes. Many antiques are sensitive to temperature and humidity fluctuations. Our climate-controlled vehicles maintain stable conditions to protect your items from warping, cracking, or moisture damage during transport."
    },
    {
      "question": "5. Can you move antiques interstate or only within Perth?",
      "answer": "We offer both local and interstate antique moving services. Regardless of the distance, we carefully plan logistics to ensure your antiques arrive safely and on time."
    },
    {
      "question": "6. Are your removalists trained in handling antiques?",
      "answer": "Absolutely. Our team is specially trained in antique handling techniques to ensure careful lifting, carrying, and loading. They understand the unique vulnerabilities of antique pieces and work meticulously to avoid damage."
    },
    {
      "question": "7. Do you provide insurance coverage for antiques during the move?",
      "answer": "Yes, we recommend comprehensive insurance coverage tailored specifically for antiques. We can assist in arranging insurance to protect your valuables during packing, transit, and delivery for your peace of mind."
    },
    {
      "question": "8. Can you help with antique furniture disassembly and reassembly?",
      "answer": "Yes. For large or complex pieces, we offer careful disassembly and reassembly to facilitate safe moving through tight spaces like doorways and staircases without risking damage."
    },
    {
      "question": "9. What if I need to store my antiques temporarily?",
      "answer": "We provide secure, climate-controlled storage solutions with 24/7 monitoring to protect your antiques during renovations, estate settlements, or any transition period."
    },
    {
      "question": "10. How far in advance should I book antique moving services?",
      "answer": "We recommend booking as early as possible to ensure availability and allow adequate planning. Ideally, schedule your move at least 2-4 weeks in advance, especially for interstate relocations or moves involving high-value collections."
    },
    {
      "question": "11. How do you ensure fragile artwork and sculptures are transported safely?",
      "answer": "Fragile artworks and sculptures receive customised packing, including specialised crating, cushioning, and secure fastening within transport vehicles. We use materials and methods designed to absorb shocks and prevent movement during transit."
    },
    {
      "question": "12. What areas in Perth do you serve?",
      "answer": "We serve all suburbs of Perth and the wider metropolitan area. For interstate moves, we coordinate with trusted partners to provide seamless service beyond Western Australia."
    },
    {
      "question": "13. How do I get a quote for moving my antiques?",
      "answer": "You can contact Perth Central Movers directly to arrange a free, no-obligation consultation. We’ll assess your antiques, understand your requirements, and provide a detailed, transparent quote with no hidden fees."
    },
    {
      "question": "14. What precautions do you take when moving antiques in heritage or older homes?",
      "answer": "We are experienced in working with heritage and older properties. Our team uses protective measures like floor coverings, wall padding, and gentle manoeuvring techniques to avoid damage to your home while ensuring safe antique relocation."
    },
    {
      "question": "15. Can you move individual antique items, or do I need to move a whole collection?",
      "answer": "We are happy to move individual items or entire collections, depending on your needs. Whether it’s a single cherished piece or an entire estate, we tailor our service to match your requirements."
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
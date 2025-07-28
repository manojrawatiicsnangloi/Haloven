const faqs = [
   {
      "question": "Q1: What types of hotels and hospitality venues do you work with?",
      "answer": "We have experience working with a wide variety of hospitality venues, including boutique hotels, large resorts, serviced apartments, conference centres, motels, and boutique lodges. No matter the size or complexity, we tailor our approach to meet your specific needs."
    },
    {
      "question": "Q2: How do you minimise disruption to hotel guests during a move or renovation?",
      "answer": "We coordinate closely with your management team to schedule moves during low occupancy periods, after hours, overnight, or on weekends. Our teams work discreetly and efficiently, respecting noise and cleanliness standards to ensure your guests experience minimal disruption."
    },
    {
      "question": "Q3: Can you handle moving specialty hotel equipment such as kitchen appliances or AV systems?",
      "answer": "Yes, we specialise in relocating all types of hotel assets, including commercial kitchen equipment, bar systems, audiovisual gear, IT infrastructure, artwork, and furniture. Our trained staff use specialised equipment and handling procedures to protect delicate and high-value items."
    },
    {
      "question": "Q4: Do you offer services beyond just moving furniture?",
      "answer": "Absolutely. Our hotel removalist services include disassembly and reassembly of furniture and fixtures, packing and unpacking, inventory management, waste removal, and even short or long-term storage solutions as needed during renovations or staged moves."
    },
     {
      "title": "Q7: What measures do you take to protect hotel property and interiors?",
      "description": "Our movers use high-quality padding, protective blankets, straps, and covers to safeguard furniture, walls, and floors. We also carefully navigate tight spaces and use equipment designed to prevent damage during loading and unloading.",
      "image": "images/PCM Service 7.webp"
    },
    {
      "title": "Q8: Can you move hotels that are still operational and have guests checked in?",
      "description": "Yes, we specialise in moves that take place while hotels remain operational. We work discreetly and schedule around peak hours and guest activities to minimise interference with daily operations.",
      "image": "images/PCM Service 8.webp"
    },
    {
      "title": "Q9: Do you provide custom crating or packaging for fragile or high-value items?",
      "description": "Yes, we offer custom crating and specialised packing solutions for delicate or valuable assets such as artwork, chandeliers, antiques, and electronics to ensure maximum protection.",
      "image": "images/PCM Service 9.webp"
    },
    {
      "title": "Q10: What if there is damage or loss during the move?",
      "description": "While we take every precaution to avoid incidents, in the rare event of damage or loss, our comprehensive insurance covers your belongings. We work quickly to resolve any issues with transparency and professionalism.",
      "image": "images/PCM Service 10.webp"
    },
    {
      "title": "Q11: Do you provide after-hours or weekend moving services?",
      "description": "Yes, to accommodate the unique needs of hospitality venues, we offer flexible scheduling options including nights, weekends, and public holidays.",
      "image": "images/PCM Service 11.webp"
    },
    {
      "title": "Q12: How do you ensure the move aligns with our hotel’s operational requirements?",
      "description": "We conduct detailed pre-move consultations to understand your operational calendar, access restrictions, and specific needs. Our project managers coordinate closely with your team to create a tailored moving plan that integrates smoothly with your hotel’s workflow.",
      "image": "images/PCM Service 12.webp"
    },
    {
      "title": "Q13: Can you handle moves across multiple hotel locations or stages?",
      "description": "Yes, we are equipped to manage complex, multi-site, or phased relocations with detailed inventory tracking and scheduling to ensure each stage is executed flawlessly.",
      "image": "images/PCM Service 13.webp"
    },
    {
      "title": "Q14: Do you assist with the setup or installation after delivery?",
      "description": "Yes, our service includes furniture reassembly and placement according to your floorplans, helping you get back to full operation as quickly as possible.",
      "image": "images/PCM Service 14.webp"
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
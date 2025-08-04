
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

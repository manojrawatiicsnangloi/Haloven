const createModal = () => {
  const overlay = document.createElement('div');
  overlay.className = "fixed inset-0  flex items-center justify-center z-50";
  overlay.id = "modalOverlay";
  overlay.style.background = 'rgba(0, 0, 0, 0.6)';

  const modal = document.createElement('div');
  modal.className = "bg-[#4A4D52] text-white rounded-lg p-8 w-96 relative";

  const closeX = document.createElement('button');
  closeX.innerHTML = "&times;";
  closeX.className = "absolute top-2 right-3 text-white text-2xl font-bold focus:outline-none";
  closeX.onclick = () => overlay.remove();

  const title = document.createElement('h2');
  title.className = "text-3xl font-bold mb-6 text-center";
  title.textContent = "Get Quick Quote";

  const form = document.createElement('form');
  form.className = "space-y-4";

  const nameInput = document.createElement('input');
  nameInput.type = "text";
  nameInput.placeholder = "Your full Name";
  nameInput.className = "w-full px-4 py-2 rounded text-black bg-white";

  const phoneInput = document.createElement('input');
  phoneInput.type = "tel";
  phoneInput.placeholder = "Phone number";
  phoneInput.className = "w-full px-4 py-2 rounded text-black bg-white";

  const emailInput = document.createElement('input');
  emailInput.type = "email";
  emailInput.placeholder = "Your Email";
  emailInput.className = "w-full px-4 py-2 rounded text-black bg-white";

  const submitBtn = document.createElement('button');
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.className = "bg-[#84BF34] text-white w-full py-2 rounded font-semibold hover:bg-lime-600";

  form.append(nameInput, phoneInput, emailInput, submitBtn);
  modal.append(closeX, title, form);
  overlay.append(modal);
  document.body.appendChild(overlay);

  form.onsubmit = (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    alert(`Submitted:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
    overlay.remove();
  };
};

const logo = {
  src: "images/pcm-logo/PCM.webp",
  alt: "Logo",
  link: "/"
};

const contactLinks = [
  { text: "About Us", href: "/pages/about_us/aboutus.html" },
  { text: "Contact Us", href: "/pages/contact_us/contactus.html" },
  {
    text: "1300 163 694",
    href: "tel:1300163694",
    isPhone: true
  }
];
const navLinks = [
  { text: "Home", href: "/" },
  {
    text: "Moving Home",
    href: "#",
    sublinks: [
      { text: "Antique Removalists", href: "/pages/antique/at.html" },
      { text: "Commercial Removals", href: "/pages/commercial/com.html" },
      { text: "Flats Removals", href: "/pages/flats/fl.html" },
      { text: "Furniture Removals", href: "/pages/furniture/fr.html" },
      { text: "Hotel Melbourne", href: "/pages/hotel/ht.html" },
      { text: "Local Removals", href: "/pages/local/lc.html" },
      { text: "Piano Removals", href: "/pages/piano/pno.html" },
      { text: "Retirement Removals", href: "/pages/retirment/rt.html" },
      { text: "School Removals", href: "/pages/school/sh.html" },
    ]
  },
  {
    text: "Moving Office",
    href: "/pages/office/of.html",
  },
  { text: "Service Removalist", href: "/pages/service_removalist/service_removalist.html" }
];


const buttons = [
  {
    text: "Request call back",
    class:
      "border border-[#84BF34] text-white px-4 py-2 rounded hover:bg-lime-600 transition",
  },
  {
    text: "Get a Quote",
    class:
      "bg-[#84BF34] hover:bg-lime-600 text-black font-bold py-2 px-4 rounded transition"
  }
];

function createLink({ text, href, isPhone = false }) {
  if (isPhone) {
    return `
      <a href="${href}" class="flex items-center gap-2 text-[#84BF34] font-semibold whitespace-nowrap">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 5h2l3 5-3 5H3M21 5h-2l-3 5 3 5h2M7 20h10" />
        </svg>
        ${text}
      </a>`;
  } else {
    return `<a href="${href}" class="hover:text-[#84BF34]">${text}</a>`;
  }
}

function renderNavbar() {
  const contactHTML = contactLinks
    .map((link, i) => {
      const linkHTML = createLink(link);
      const separator =
        i < contactLinks.length - 1
          ? '<span class="border-r border-[#84BF34] h-5"></span>'
          : "";
      return linkHTML + separator;
    })
    .join("");

  const navHTML = navLinks
    .map(link => {
      if (link.sublinks) {
        const half = Math.ceil(link.sublinks.length / 2);
        const firstCol = link.sublinks.slice(0, half);
        const secondCol = link.sublinks.slice(half);

        const renderCol = col =>
          col
            .map(
              sub =>
                `<a href="${sub.href}" class="block px-4 py-2 text-sm text-black hover:text-[#84BF34] whitespace-nowrap">${sub.text}</a>`
            )
            .join("");

        return `
        <div class="relative group">
          <a href="${link.href}" class="hover:text-[#84BF34] flex items-center gap-1">
            ${link.text}
            <svg class="w-3 h-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div class="absolute left-0 top-3 mt-2 hidden group-hover:grid grid-cols-2 gap-4 p-4 bg-white shadow-xl rounded z-50 min-w-[400px]">
            <div class="flex flex-col">${renderCol(firstCol)}</div>
            <div class="flex flex-col">${renderCol(secondCol)}</div>
          </div>
        </div>`;
      } else {
        return `<a href="${link.href}" class="hover:text-[#84BF34]">${link.text}</a>`;
      }
    })
    .join("");

  const buttonHTML = buttons
    .map(btn => `<button class="${btn.class}" onclick="createModal()">${btn.text}</button>`)
    .join("");


  const html = `
    <div class="bg-black text-white shadow-md">
      <div class="xl:mx-4 md:mx-3 flex items-center justify-between py-3">
        <a href="${logo.link}" class="flex items-center gap-2">
          <img src="${logo.src}" alt="${logo.alt}" class="h-20" />
        </a>
        <div class="flex flex-col">
          <div class="hidden lg:flex items-center gap-4 text-sm uppercase font-medium ml-auto">
            ${contactHTML}
          </div>
          <nav class="hidden lg:flex my-3 space-x-6 font-medium uppercase text-sm tracking-wide" style="align-items: self-end;">
            <div class="flex items-center space-x-6 relative">
              ${navHTML}
              ${buttonHTML}
            </div>
          </nav>
        </div>
      </div>
    </div>`;

  document.getElementById("navbar").innerHTML = html;
}

renderNavbar();



// Attach to all buttons with the model-btn class
document.querySelectorAll('.model-btn').forEach(btn => {
  btn.addEventListener('click', createModal);
});




// Footer

document.body.insertAdjacentHTML('afterend', `
    
    <footer class="bg-black text-white py-10 px-6">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">

            <!-- Quick Links -->
            <div>
                <h4 class="text-[#84BF34] font-bold mb-3">Quick Links</h4>
                <ul class="space-y-1 text-sm text-gray-300">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Client Reviews</li>
                    <li>Work With Us</li>
                    <li>Partners</li>
                    <li>Reach Us</li>
                    <li>Video Reviews</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li>FAQ’s</li>
                    <li>Sitemap</li>
                    <li>Premium Services</li>
                    <li>Storage Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <!-- Local Removals -->
            <div>
                <h4 class="text-[#84BF34] font-bold mb-3">Local Removals</h4>
                <ul class="space-y-1 text-sm text-gray-300">
                    <li>Subiaco</li>
                    <li>Mount Lawley</li>
                    <li>Leederville</li>
                    <li>South Perth</li>
                    <li>Cottesloe</li>
                    <li>Claremont</li>
                    <li>East Perth</li>
                    <li>Joondalup</li>
                    <li>Scarborough</li>
                    <li>Fremantle</li>
                    <li>Victoria Park</li>
                    <li>Baldivis</li>
                    <li>Applecross</li>
                    <li>Nedlands</li>
                    <li>Booragoon</li>
                </ul>
            </div>

            <!-- Moving Local -->
            <div>
                <h4 class="text-[#84BF34] font-bold mb-3">Moving Local</h4>
                <ul class="space-y-1 text-sm text-gray-300">
                    <li>House Removalists</li>
                    <li>Furniture Removals</li>
                    <li>Office Relocation</li>
                    <li>Two Men and a Truck</li>
                    <li>Movers and Packers</li>
                    <li>Loading and Unloading</li>
                    <li>Piano Movers</li>
                    <li>Pool Table Movers</li>
                    <li>Safe Removalists</li>
                    <li>Labour Hire</li>
                </ul>
            </div>

            <!-- Contact Info and Logo -->
            <div class="flex flex-col items-start md:items-center space-y-4">
                <img src="images/pcm-logo/PCM.webp" alt="PCM Logo"
                    class="mb-2">
                <div class="flex items-center gap-3">
                    <span class="text-sm font-bold">Follow Us:</span>
                    <a href="#" class="text-[#84BF34] hover:text-white">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-[#84BF34] hover:text-white">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div class="text-sm space-y-2 mt-4 text-gray-300">
                    <p><i class="fas fa-map-marker-alt text-[#84BF34] mr-2"></i>13 Towarri way, Wandi, Perth 6167</p>
                    <p><i class="fas fa-phone text-[#84BF34] mr-2"></i>1300 163 694</p>
                    <p><i class="fas fa-envelope text-[#84BF34] mr-2"></i>perthcentralmovers.com.au</p>
                </div>
            </div>
        </div>
        <!-- Bottom Note -->
        <div class="text-center text-sm text-gray-500 mt-6">
            Design & Developed By : <span class="text-[#84BF34]">Digital Ultra</span>
        </div>        
    </footer>
    `);

const moverSteps = [
  {
    title: "Quick Quote",
    description: "Get an instant, no-obligation quote! Whether moving locally or interstate, we provide fast and accurate cost estimates tailored to your needs.",
    iconPath: "https://cbdmovers.com.au/wp-content/themes/CBDMOVERSNEW/new-design/images/QuickQuote.svg"
  },
  {
    title: "Book Your Move",
    description: "Schedule your move effortlessly. We supply high-quality packing materials, professional equipment, and modern vehicles for a smooth relocation.",
    iconPath: "https://cbdmovers.com.au/wp-content/themes/CBDMOVERSNEW/new-design/images/BookYourMove.svg"
  },
  {
    title: "We Collect & Ship",
    description: "Enjoy secure and efficient collection and shipping of your belongings, including valuables, with just one call to get started.",
    iconPath: "https://cbdmovers.com.au/wp-content/themes/CBDMOVERSNEW/new-design/images/WeCollectShip.svg"
  },
  {
    title: "We Deliver",
    description: "Your household goods and office items are delivered safely to your new doorstep, guaranteed scratch-free and on time.",
    iconPath: "https://cbdmovers.com.au/wp-content/themes/CBDMOVERSNEW/new-design/images/WeDeliver.svg"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("proccess");

  let stepsHTML = moverSteps.map((step, index) => `
    <div class="text-center mb-6 md:mb-0">
      <div class="flex justify-center">
        <div class="relative">
          <div class="bg-red-600 rounded-full h-4 w-4 flex items-center justify-center">
            <span class="text-white font-bold">${index + 1}</span>
          </div>
          <div class=" bg-white rounded-full h-16 w-16 flex items-center justify-center">
            <img src='${step.iconPath}' class='h-10 w-10'>
          </div>
        </div>
      </div>
      <h3 class="text-lg font-semibold mt-2">${step.title}</h3>
      <p class="text-sm text-gray-400 mt-1">${step.description}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="bg-gray-800 text-white py-20 px-4">
    <div class="text-center md:text-left mb-4 md:mb-0">
      <h2 class="text-2xl font-bold text-center">PCM Movers Process</h2>
      <p class="text-sm text-gray-400 mt-1  text-center">Our home and furniture removals provide the unparalleled services of packers and movers along...</p>
    </div>
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      </div>
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-around mt-8">
        ${stepsHTML}
      </div>
    </div>
  `;
});
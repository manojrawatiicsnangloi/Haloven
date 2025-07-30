const testimonials = [
  {
    name: "Sarah Thompson",
    city: "Perth",
    rating: 5,
    timeAgo: "2 days ago",
    image: "images/person-icon.webp",
    comment: "Perth Central Movers made our house move completely stress-free. The team was professional, careful with our furniture, and everything arrived without a single scratch. Highly recommended for anyone looking for reliable Perth removalists!"
  },
  {
    name: "Michael Anderson",
    city: "Perth",
    rating: 5,
    timeAgo: "3 days ago",
    image: "images/person-icon.webp",
    comment: "We hired Perth Central Movers for our office relocation, and they handled everything perfectly. From packing to setting up at the new place, the whole process was smooth and on time. Great service at a fair price."
  },
  {
    name: "Emily Parker",
    city: "Fremantle",
    rating: 4,
    timeAgo: "5 days ago",
    image: "images/person-icon.webp",
    comment: "I booked their men-with-truck service for a small apartment move, and it was fantastic. Quick response, transparent pricing, and very friendly staff. I’ll definitely use them again for my next move."
  },
  {
    name: "James Wilson",
    city: "Perth",
    rating: 5,
    timeAgo: "1 week ago",
    image: "images/person-icon.webp",
    comment: "One of the best moving experiences I’ve ever had. The team was punctual, well-prepared, and extremely careful with our fragile items. Perth Central Movers really live up to their reputation."
  },
  {
    name: "Sophie Bennett",
    city: "Subiaco",
    rating: 5,
    timeAgo: "1 week ago",
    image: "images/person-icon.webp",
    comment: "Perth Central Movers were amazing! The booking process was simple, and the movers were extremely careful with all our belongings. Everything arrived in perfect condition."
  },
  {
    name: "George Mitchell",
    city: "Joondalup",
    rating: 4,
    timeAgo: "2 weeks ago",
    image: "images/person-icon.webp",
    comment: "I needed a last-minute move, and they accommodated us without any hassle. The team was efficient, friendly, and got the job done faster than expected."
  },
  {
    name: "Hannah Lewis",
    city: "Cannington",
    rating: 5,
    timeAgo: "2 weeks ago",
    image: "images/person-icon.webp",
    comment: "From the first call to the final delivery, their customer service was outstanding. The movers were professional and treated our furniture with great care."
  },
  {
    name: "Liam Edwards",
    city: "Bayswater",
    rating: 4,
    timeAgo: "3 weeks ago",
    image: "images/person-icon.webp",
    comment: "I’ve used other movers before, but Perth Central Movers truly stood out. Affordable prices, punctual service, and very well-organized team."
  },
  {
    name: "Isabella Clark",
    city: "Osborne Park",
    rating: 5,
    timeAgo: "3 weeks ago",
    image: "images/person-icon.webp",
    comment: "Our office relocation went smoothly thanks to their professional approach. Zero damage, on-time delivery, and very cooperative staff throughout the process."
  },
  {
    name: "Ethan Wright",
    city: "Perth",
    rating: 5,
    timeAgo: "4 weeks ago",
    image: "images/person-icon.webp",
    comment: "Highly recommend Perth Central Movers for anyone relocating in Perth. They made the entire process stress-free and were incredibly polite and helpful."
  }
];


    // ✅ Dynamically inject slides
    const wrapper = document.getElementById("testimonial-wrapper");
    testimonials.forEach(t => {
      wrapper.innerHTML += `
        <div class="swiper-slide">
          <div class="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto">
            <div class="flex items-center gap-4 mb-4">
               <i class="fas fa-user text-3xl text-gray-400"></i>
              <div>
                <h3 class="font-bold text-sm">${t.name}</h3>
                <div class="text-yellow-500 text-sm">
                  ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t?.rating)}
                  <span class="text-xs text-gray-400 ml-2">${t?.timeAgo}</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-700">${t.comment}</p>
          </div>
        </div>
      `;
    });

    // ✅ Initialize Swiper
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });


    const pcmBlogs = [
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "images/pcm-images/s2.webp"
            },
        ];

        const pcmSliderContainer = document.getElementById('pcm-blog-slider');

        pcmBlogs.forEach(blog => {
            pcmSliderContainer.innerHTML += `
            <div class="swiper-slide bg-white text-gray-900 rounded shadow overflow-hidden">
                <img src="${blog.image}" class="w-full h-48 object-cover" alt="Blog Image">
                <div class="p-4">
                    <h3 class="font-semibold italic">${blog.title}</h3>
                    <p class="text-xs text-gray-500 mb-2">${blog.date}</p>
                    <p class="text-sm text-gray-600 mb-4">${blog.desc}</p>
                    <button
                    onclick="createModal()"
                    class="bg-lime-400 px-6 py-2 text-gray-800 font-semibold rounded flex items-center gap-2 hover:bg-lime-500">
                        Read more...
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>`;
        });

        new Swiper(".pcm-swiper", {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: ".pcm-swiper .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.5,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
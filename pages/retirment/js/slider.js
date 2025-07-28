const testimonials = [
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
      {
        name: "James T. Richmond",
        city: "Perth City",
        timeAgo: "a month ago",
        rating: 5,
        comment: "Moved my entire apartment in just a few hours. Super professional and affordable. I’ll be using them again for sure.",
        image: "https://e7.pngegg.com/pngimages/956/662/png-clipart-elon-musk-elon-musk-speaking-celebrities-corporate-thumbnail.png"
      },
    ];

    // ✅ Dynamically inject slides
    const wrapper = document.getElementById("testimonial-wrapper");
    testimonials.forEach(t => {
      wrapper.innerHTML += `
        <div class="swiper-slide">
          <div class="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto">
            <div class="flex items-center gap-4 mb-4">
              <img src="${t.image}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 class="font-bold text-sm">${t.name}</h3>
                <p class="text-xs text-gray-500">${t.city}</p>
                <div class="text-yellow-500 text-sm">
                  ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
                  <span class="text-xs text-gray-400 ml-2">${t.timeAgo}</span>
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
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
            },
            {
                title: "Practical Tips for Packing Fragile Items",
                date: "28 June 2025",
                desc: "Moving home is exciting, but it can quickly become stressful when you consider all those precious,",
                image: "../../images/pcm-images/s2.webp"
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
                    <button class="bg-lime-400 px-6 py-2 text-gray-800 font-semibold rounded flex items-center gap-2 hover:bg-lime-500">
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
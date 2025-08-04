const whyChooseUsData = [
    {
      img: "./images/pcm-icons/wp2.webp",
      alt: "Big Experience",
      title: "Specialist Expertise in Antique Handling",
      desc: "Our team undergoes extensive, specialised training focused on the unique demands of antique removal and transportation. We understand that antiques are often fragile due to age, materials, and craftsmanship, and require tailored techniques to avoid damage. From centuries-old Victorian furniture and intricate porcelain collections to rare artworks and heirloom musical instruments, we handle every item with the utmost care. Our removalists possess the knowledge to safely lift, carry, and load antiques, preserving their structural integrity and aesthetic beauty throughout the entire moving process."
    },
    {
      img: "images/pcm-icons/Online Quote 2.webp",
      alt: "Goods Insurance",
      title: "Customised Packing and Crating Solutions",
      desc: "No two antiques are alike, and that is why we never take a one-size-fits-all approach. We design bespoke packing and crating solutions that take into account each item's specific size, shape, fragility, and material composition. Our team uses museum-quality packing materials, including acid-free tissue paper, soft blankets, bubble wrap, and custom-built wooden crates to provide superior protection. These tailored solutions guard against shocks, vibrations, moisture ingress, temperature variations, and physical impact, ensuring your antiques remain pristine regardless of distance or transport conditions."
    },
    {
      img: "images/pcm-icons/ic3.webp",
      alt: "Best Price Services",
      title: "Climate-Controlled Transport for Sensitive Items",
      desc: "Certain antiques, especially wooden furniture, textiles, fine art, and delicate instruments, are highly susceptible to damage from fluctuating temperature and humidity. Perth Central Movers is proud to offer climate-controlled transportation options that maintain stable environmental conditions throughout the journey. Our state-of-the-art vehicles regulate temperature and humidity to protect your antiques from warping, cracking, mold growth, and other climate-related risks, whether you are moving across Perth or interstate."
    },
    {
      img: "images/pcm-icons/download.webp",
      alt: "Client Satisfaction",
      title: "Comprehensive Insurance and Valuation Support",
      desc: "We understand the monetary and emotional value tied to your antiques. For your peace of mind, we facilitate access to comprehensive insurance policies that cover your antiques during packing, transport, and delivery. To further protect your interests, we can assist you in obtaining professional valuations before your move. This documentation details the condition and worth of your items, providing vital records for insurance claims if ever necessary."
    },
    {
      img: "images/pcm-icons/ic5.webp",
      alt: "Timely Delivery",
      title: "Experienced and Respectful Removalists",
      desc: "Our removalists combine professional skill with respectful care. Beyond technical expertise, we pride ourselves on courteous, patient, and discreet service. We know that antiques often have sentimental stories attached and are part of your family legacy or business heritage. We treat your belongings, your home, and your privacy with the highest degree of respect, ensuring a calm, trustworthy, and smooth moving experience free of unnecessary stress."
    },
    {
      img: "images/pcm-icons/Commercial Movers.webp",
      alt: "24/7 Service",
      title: "Secure and Flexible Storage Options",
      desc: "Sometimes, moving antiques involves temporary storage due to renovations, estate settlements, or logistical timing. We offer secure, climate-controlled storage facilities equipped with 24/7 security monitoring to keep your valuables safe. Each item is carefully catalogued, organized, and stored in conditions designed to prevent deterioration, so you can rest assured your antiques are protected until you’re ready for delivery or pickup."
    }
  ];

  const why_ch = document.getElementById('whyChooseUsCards');

  for (let i = 0; i < whyChooseUsData.length; i++) {
    const item = whyChooseUsData[i];

    const card = `
      <div class="bg-[#3A3A3A] p-6 rounded-lg hover:bg-[#84bf34] border border-white/20 shadow-md flex flex-col items-start">
        <img src="${item.img}" alt="${item.alt}" class="h-12 mb-4" style="border-radius: 100%" />
        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
        <p class="text-white/80 text-sm">${item.desc}</p>
      </div>
    `;

    why_ch.innerHTML += card;
  }
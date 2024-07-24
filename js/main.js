const procedures = [
    {
        title: "Ultrasound",
        description: "Non-invasive imaging technique using high-frequency sound waves for detailed internal organ visualization.",
        includes: ["Full abdominal scan", "Detailed report", "Expert consultation"],
        originalPrice: 150,
        discountedPrice: 120,
    },
    {
        title: "COVID-19 Check",
        description: "Comprehensive testing package for SARS-CoV-2 virus detection and antibody presence.",
        includes: ["RT-PCR test", "Rapid antigen test", "Antibody test"],
        originalPrice: 200,
        discountedPrice: 180,
    },
    {
        title: "Color Doppler",
        description: "Advanced ultrasound technique to visualize and assess blood flow in vessels and organs.",
        includes: ["Vascular assessment", "3D imaging", "Consultation with specialist"],
        originalPrice: 250,
        discountedPrice: 200,
    },
    {
        title: "Ultrasound",
        description: "Non-invasive imaging technique using high-frequency sound waves for detailed internal organ visualization.",
        includes: ["Full abdominal scan", "Detailed report", "Expert consultation"],
        originalPrice: 150,
        discountedPrice: 120,
    },
    {
        title: "COVID-19 Check",
        description: "Comprehensive testing package for SARS-CoV-2 virus detection and antibody presence.",
        includes: ["RT-PCR test", "Rapid antigen test", "Antibody test"],
        originalPrice: 200,
        discountedPrice: 180,
    },
    {
        title: "Color Doppler",
        description: "Advanced ultrasound technique to visualize and assess blood flow in vessels and organs.",
        includes: ["Vascular assessment", "3D imaging", "Consultation with specialist"],
        originalPrice: 250,
        discountedPrice: 200,
    },
    
];

function createProcedureCard(procedure) {
    const discountPercentage = Math.round((1 - procedure.discountedPrice / procedure.originalPrice) * 100);
    
    return `
        <div class="procedure-card">
            <h3>${procedure.title}</h3>
            <p class="description">${procedure.description}</p>
            <div class="includes">
                <h4>Includes:</h4>
                <ul>
                    ${procedure.includes.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="price-container">
                <div>
                    <span class="price">$${procedure.discountedPrice}</span>
                    <span class="original-price">$${procedure.originalPrice}</span>
                </div>
                <span class="discount-badge">${discountPercentage}% OFF</span>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.services-swipper .swiper-wrapper');
    
    procedures.forEach(procedure => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = createProcedureCard(procedure);
        swiperWrapper.appendChild(slide);
    });

    new Swiper('.services-swipper .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
});

const swiper = new Swiper('.hero-section .swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

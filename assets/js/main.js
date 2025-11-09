const templateID = "template_fn62eo9";
emailjs.init("DieSxLv94d4cyn2zq");
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm('service_hc7284q', 'template_bwrqcrg', this)
            .then(() => {
                alert('Message sent successfully!');
                contactForm.reset();
            }, (error) => {
                alert('Failed to send message: ' + JSON.stringify(error));
            });
    });
}

const swiper = new Swiper(".hero-slider", {
    loop: true,
    speed: 1200,
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: "fade",
});

const typedOptions = {
    typeSpeed: 60,
    backSpeed: 35,
    loop: true,
};

if (document.querySelector('#element')) {
    new Typed('#element', {
        ...typedOptions,
        strings: ['Fast Store', 'Best Deals', 'Top Quality'],
    });
}

if (document.querySelector('#element')) {
    new Typed('#element2', {
        ...typedOptions,
        strings: ['lorem1', 'lorem2', 'lorem3'],
    });
}

if (document.querySelector('#element')) {
    new Typed('#element3', {
        ...typedOptions,
        strings: ['lorem1.', 'lorem2', 'lorem3'],
    });
}

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

const btn = document.getElementById("programsBtn");
const menu = document.getElementById("programsMenu");

btn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("visible");
});

menu.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function () {
    menu.classList.remove("opacity-100", "visible");
});

const testimonials = [
    {
        name: "محمد علي",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "تجربة رائعة جدًا! الخدمة ممتازة والأسعار مناسبة. أنصح الجميع بالتعامل مع هذا الفريق المحترف.",
        stars: 4,
    },
    {
        name: "سارة محمود",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "تعامل راقٍ جدًا وسرعة في الرد والتسليم. الجودة أكثر مما توقعت بصراحة، شكرًا لكم!",
        stars: 5,
    },
    {
        name: "أحمد سمير",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        text: "من أفضل التجارب اللي خضتها، كل شيء منظم وسهل وواضح. أكيد هتعامل معاهم تاني.",
        stars: 4,
    },
    {
        name: "فاطمة حسن",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "خدمة ممتازة واحترافية عالية. التواصل سهل والمتابعة مستمرة حتى النهاية. بالتوفيق دائمًا!",
        stars: 5,
    },
    {
        name: "عمر خالد",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        text: "جودة عالية وسعر منافس. الفريق متعاون جدًا ومستعد للمساعدة في أي وقت. شكرًا جزيلاً!",
        stars: 5,
    },
];

let currentTestimonial = 0;
let autoPlayInterval;

const testimonialElements = {
    image: document.getElementById("clientImage"),
    name: document.getElementById("clientName"),
    text: document.getElementById("clientText"),
    stars: document.getElementById("clientStars"),
    card: document.getElementById("testimonial"),
    dots: document.getElementById("progressDots"),
    nextBtn: document.getElementById("nextBtn"),
    prevBtn: document.getElementById("prevBtn"),
};

function createProgressDots() {
    if (!testimonialElements.dots) return;

    testimonialElements.dots.innerHTML = "";
    testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "w-2.5 h-2.5 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 hover:bg-blue-500";

        if (index === currentTestimonial) {
            dot.classList.remove("w-2.5", "bg-gray-300");
            dot.classList.add("w-8", "bg-blue-700", "rounded-md");
        }

        dot.addEventListener("click", () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            resetAutoPlay();
        });

        testimonialElements.dots.appendChild(dot);
    });
}

function updateProgressDots() {
    if (!testimonialElements.dots) return;

    const dots = testimonialElements.dots.querySelectorAll("div");
    dots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove("w-2.5", "bg-gray-300");
            dot.classList.add("w-8", "bg-blue-700", "rounded-md");
        } else {
            dot.classList.remove("w-8", "bg-blue-700", "rounded-md");
            dot.classList.add("w-2.5", "bg-gray-300");
        }
    });
}

function showTestimonial(index) {
    const t = testimonials[index];
    const { image, name, text, stars, card } = testimonialElements;

    card.classList.add("opacity-0");

    setTimeout(() => {
        image.src = t.image;
        name.textContent = t.name;
        text.textContent = t.text;

        stars.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.className = i < t.stars
                ? "fa-solid fa-star transition-transform duration-200 hover:scale-110"
                : "fa-regular fa-star transition-transform duration-200 hover:scale-110";
            stars.appendChild(star);
        }

        card.classList.remove("opacity-0");
        updateProgressDots();
    }, 300);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextTestimonial, 6000);
}

function initTestimonials() {
    if (!testimonialElements.card) return;

    testimonialElements.card.classList.add("transition-opacity", "duration-300");
    createProgressDots();

    if (testimonialElements.nextBtn) {
        testimonialElements.nextBtn.addEventListener("click", () => {
            nextTestimonial();
            resetAutoPlay();
        });
    }

    if (testimonialElements.prevBtn) {
        testimonialElements.prevBtn.addEventListener("click", () => {
            prevTestimonial();
            resetAutoPlay();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            nextTestimonial();
            resetAutoPlay();
        } else if (e.key === "ArrowRight") {
            prevTestimonial();
            resetAutoPlay();
        }
    });

    testimonialElements.card.addEventListener("mouseenter", () => {
        clearInterval(autoPlayInterval);
    });

    testimonialElements.card.addEventListener("mouseleave", () => {
        resetAutoPlay();
    });

    autoPlayInterval = setInterval(nextTestimonial, 6000);
}

document.addEventListener("DOMContentLoaded", initTestimonials);

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    const overlayTitle = document.getElementById("overlayTitle");
    const overlayDesc = document.getElementById("overlayDesc");
    const closeOverlay = document.getElementById("closeOverlay");

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            const imgSrc = card.getAttribute("data-img");
            const title = card.getAttribute("data-title");
            const desc = card.getAttribute("data-description");

            overlayImg.src = imgSrc;
            overlayTitle.textContent = title;
            overlayDesc.textContent = desc;

            overlay.classList.remove("hidden");
            overlay.classList.add("flex");
        });
    });

    closeOverlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
    });

    // Close when clicking outside the box
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.add("hidden");
            overlay.classList.remove("flex");
        }
    });
});

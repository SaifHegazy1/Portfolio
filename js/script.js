/* Typing Animation */
(function () {
    const typingEl = document.querySelector('.typing');
    if (typingEl && typeof window.Typed === 'function') {
        new window.Typed(typingEl, {
            strings: ["", "Data Analyst", "Data Scientist"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
})();

/* Aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSectoin();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSectoin() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

const hireMeBtn = document.querySelector(".hire-me");
if (hireMeBtn) {
    hireMeBtn.addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSectoin();
        addBackSection(sectionIndex);
    })
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Portfolio modal is handled directly in index.html so the gallery has one consistent behavior. */

/* ==========================================================================
   SCROLL REVEAL for project cards and service cards
   ========================================================================== */
(function () {
    const cards = document.querySelectorAll('.project-card, .service .service-item-inner');
    if (!cards.length) return;

    if (!('IntersectionObserver' in window)) {
        cards.forEach(c => c.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
})();
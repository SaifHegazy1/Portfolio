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

const logoLink = document.querySelector(".logo a[href='#home']");
if (logoLink) {
    logoLink.addEventListener("click", function (event) {
        event.preventDefault();

        removeBackSectoin();
        document.querySelectorAll(".nav a").forEach(link => link.classList.remove("active"));

        const homeNavLink = document.querySelector('.nav a[href="#home"]');
        if (homeNavLink) {
            homeNavLink.classList.add("active");
        }

        this.classList.add("active");
        showSection(this);
        updateNav(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
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
   SCROLL REVEAL for project cards, service cards, section titles, and
   the generic .reveal elements used in the About / Contact sections
   ========================================================================== */
(function () {
    const cards = document.querySelectorAll(
        '.project-card, .service .service-item-inner, .certifications .cert-item-inner, .section-title, .reveal'
    );
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

/* ==========================================================================
   SKILL BAR FILL — animate each progress bar to its target width once
   the skills block scrolls into view, instead of showing it pre-filled
   ========================================================================== */
(function () {
    const bars = document.querySelectorAll('.about .skills .skill-item .progress-in');
    if (!bars.length) return;

    bars.forEach(bar => {
        bar.dataset.target = bar.style.width || getComputedStyle(bar).width;
        bar.style.width = '0%';
    });

    if (!('IntersectionObserver' in window)) {
        bars.forEach(bar => { bar.style.width = bar.dataset.target; });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.target;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    bars.forEach(bar => observer.observe(bar));
})();

/* ==========================================================================
   BACK TO TOP — shows once the active section is scrolled down, and
   scrolls that section (each .section scrolls independently) back to top
   ========================================================================== */
(function () {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    function currentSection() {
        return document.querySelector('.section.active');
    }

    function toggleVisibility() {
        const section = currentSection();
        if (section && section.scrollTop > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('scroll', toggleVisibility);
    });

    btn.addEventListener('click', () => {
        const section = currentSection();
        if (section) {
            section.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    toggleVisibility();
})();
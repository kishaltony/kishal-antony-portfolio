// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when clicking a link

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================================
// DARK / LIGHT MODE
// =========================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


// Remember user's theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML = "☀️";

}


// =========================================
// LANGUAGE BUTTON
// =========================================

const languageBtn = document.getElementById("languageBtn");

let tamilMode = false;

languageBtn.addEventListener("click", () => {

    tamilMode = !tamilMode;

    if (tamilMode) {

        languageBtn.innerHTML = "🌐 தமிழ்";

        changeToTamil();

    } else {

        languageBtn.innerHTML = "🌐 EN";

        changeToEnglish();

    }

});


// =========================================
// LANGUAGE DATA
// =========================================

function changeToTamil() {

    document.querySelector(".small-title").innerText =
        "தரவு • குறியீடு • நுண்ணறிவு";

    document.querySelector(".hero h1").innerHTML =
        'வணக்கம், நான் <span>கிஷால்.</span>';

    document.querySelector(".hero h2").innerHTML =
        'தரவை <strong>பயனுள்ள நுண்ணறிவாக</strong> மாற்றுகிறேன்.';

    document.querySelector(".hero-description").innerText =
        "Python, SQL மற்றும் Data Analytics மீது ஆர்வமுள்ள Data Science ஆர்வலர்.";

    document.querySelector(".primary-btn").innerText =
        "என் பணிகளை பார்க்க →";

    document.querySelector(".secondary-btn").innerText =
        "தொடர்பு கொள்ளுங்கள்";

    document.querySelector("#about h2").innerHTML =
        'தரவு மீது <span>ஆர்வம்.</span>';

    document.querySelector("#about .large-text").innerHTML =
        'Python, SQL மற்றும் Data Visualization மீது ஆர்வமுள்ள <strong>Data Science Enthusiast</strong>. தரவை பகுப்பாய்வு செய்து பயனுள்ள நுண்ணறிவுகளை உருவாக்குவதில் ஆர்வம் கொண்டவன்.';

    document.querySelector("#skills h2").innerHTML =
        'எனது டிஜிட்டல் <span>கருவிகள்.</span>';

    document.querySelector("#education h2").innerHTML =
        'இதுவரை வந்த <span>பயணம்.</span>';

    document.querySelector("#work h2").innerHTML =
        'நான் உருவாக்கிய <span>பணிகள்.</span>';

    document.querySelector(".certifications h2").innerHTML =
        'கற்றல் என்றும் <span>நிற்காது.</span>';

    document.querySelector(".contact-section h2").innerHTML =
        'ஏதாவது <span>உருவாக்குவோம்.</span>';
}


function changeToEnglish() {

    document.querySelector(".small-title").innerText =
        "DATA • CODE • INSIGHTS";

    document.querySelector(".hero h1").innerHTML =
        'Hi, I\'m <span>Kishal.</span>';

    document.querySelector(".hero h2").innerHTML =
        'I turn <strong>data</strong> into meaningful insights.';

    document.querySelector(".hero-description").innerText =
        "A data science enthusiast with an interest in Python, SQL and data analytics. I enjoy transforming information into useful and meaningful insights.";

    document.querySelector(".primary-btn").innerText =
        "Explore My Work →";

    document.querySelector(".secondary-btn").innerText =
        "Let's Connect";

    document.querySelector("#about h2").innerHTML =
        'Curious about <span>data.</span>';

    document.querySelector("#about .large-text").innerHTML =
        'I\'m a motivated and detail-oriented <strong>data science enthusiast</strong> with an interest in Python, SQL and data visualization. My goal is to use analytical and programming skills to discover insights and support data-driven decisions.';

    document.querySelector("#skills h2").innerHTML =
        'My digital <span>toolkit.</span>';

    document.querySelector("#education h2").innerHTML =
        'The road so <span>far.</span>';

    document.querySelector("#work h2").innerHTML =
        'Things I\'ve <span>built.</span>';

    document.querySelector(".certifications h2").innerHTML =
        'Learning never <span>stops.</span>';

    document.querySelector(".contact-section h2").innerHTML =
        'Let\'s build <span>something.</span>';
}


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .experience-card, .certificate, .timeline-item"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(35px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================================
// ADD SHOW STYLE
// =========================================

const style = document.createElement("style");

style.innerHTML = `

    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(style);


// =========================================
// ANIMATED NUMBER COUNTERS
// =========================================

const counters = document.querySelectorAll(".data-stats strong");

let counterStarted = false;

const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !counterStarted) {

                counterStarted = true;

                counters.forEach(counter => {

                    const target = counter.innerText;

                    if (target === "7.0") {

                        animateCounter(counter, 7.0, 1, true);

                    } else if (target === "7+") {

                        animateCounter(counter, 7, 1, false, "+");

                    } else if (target === "3") {

                        animateCounter(counter, 3, 1, false);

                    }

                });

            }

        });

    },

    {
        threshold: 0.5
    }

);


if (counters.length > 0) {

    counterObserver.observe(
        document.querySelector(".data-stats")
    );

}


function animateCounter(
    element,
    target,
    duration,
    decimal = false,
    suffix = ""
) {

    let start = 0;

    const increment = target / 40;

    const timer = setInterval(() => {

        start += increment;

        if (start >= target) {

            start = target;

            clearInterval(timer);

        }

        if (decimal) {

            element.innerText =
                start.toFixed(1);

        } else {

            element.innerText =
                Math.floor(start) + suffix;

        }

    }, duration * 20);

}


// =========================================
// BUTTON HOVER EFFECT
// =========================================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn"
);

buttons.forEach(button => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        button.style.transform =
            `translate(${(x - rect.width / 2) * 0.04}px,
                       ${(y - rect.height / 2) * 0.04}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0, 0)";

    });

});
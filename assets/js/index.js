/* ========== variables to togle to light and dark =========== */
var myHtml = document.getElementById('rowHtml');
var togleThemBtn = document.getElementById('theme-toggle-button')

if (localStorage.getItem('theme') == 'dark') {
    myHtml.classList.add('dark');
}
else {
    myHtml.classList.remove('dark');
}

togleThemBtn.addEventListener('click', function () {
    toggleTheme();

    if (myHtml.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
});

// function to change to light to dark ....
function toggleTheme() {
    myHtml.classList.toggle('dark')
}


/* ============================================================ */


/* ========= variables to  Settings Toggle Button ===========*/
var settingsToggleBtn = document.getElementById('settings-toggle');
var settingsSidebar = document.getElementById('settings-sidebar');
var closeSettingsBtn = document.getElementById('close-settings');


settingsToggleBtn.addEventListener('click', function (e) {
    showSidebar()
});

closeSettingsBtn.addEventListener('click', function () {
    closeSidebar();
});

document.addEventListener('click', function (e) {
    if (!settingsSidebar.contains(e.target) && !settingsToggleBtn.contains(e.target)) {
        closeSidebar();
    }
});


// function to show sidebar and close.........

function showSidebar() {
    settingsToggleBtn.style.right = '20rem';
    settingsSidebar.classList.remove('translate-x-full')
}

function closeSidebar() {
    settingsToggleBtn.style.right = '0px';
    settingsSidebar.classList.add('translate-x-full')
}

/* ========= variables to  choose btn font ===========*/

var btnAlexandria = document.getElementById('btnAlexandria');
var btnTajawal = document.getElementById('btnTajawal');
var btnCairo = document.getElementById('btnCairo');
var resetSettingsBtn = document.getElementById('reset-settings');


// if to checked to font and show hem 
if (localStorage.getItem('selectedFont') == 'alexandria') {
    activeAlexandria();
}
else if (localStorage.getItem('selectedFont') == 'tajawal') {
    activeTajawal();
}
else {
    activeCairo();
}

btnAlexandria.addEventListener('click', function () {
    activeAlexandria();
});

btnTajawal.addEventListener('click', function () {
    activeTajawal();
});

btnCairo.addEventListener('click', function () {
    activeCairo();
});

resetSettingsBtn.addEventListener('click', function () {
    activeTajawal();
    closeSidebar();
});


// function to show active and add font to body.........
function activeAlexandria() {
    btnAlexandria.classList.add('active');
    btnTajawal.classList.remove('active');
    btnCairo.classList.remove('active');
    document.body.classList.remove('font-tajawal');
    document.body.classList.remove('font-cairo');
    document.body.classList.add('font-alexandria');
    localStorage.setItem('selectedFont', 'alexandria');
}

function activeTajawal() {
    btnTajawal.classList.add('active');
    btnAlexandria.classList.remove('active');
    btnCairo.classList.remove('active');
    document.body.classList.remove('font-alexandria');
    document.body.classList.remove('font-cairo');
    document.body.classList.add('font-tajawal');
    localStorage.setItem('selectedFont', 'tajawal');

}

function activeCairo() {
    btnCairo.classList.add('active');
    btnAlexandria.classList.remove('active');
    btnTajawal.classList.remove('active');
    document.body.classList.remove('font-tajawal');
    document.body.classList.remove('font-alexandria');
    document.body.classList.add('font-cairo');
    localStorage.setItem('selectedFont', 'cairo');

}



/* ========= variables to  choose btn for color ===========*/

var btnPurple = document.getElementById('btnPurple');
var btnPink = document.getElementById('btnPink');
var btnGreen = document.getElementById('btnGreen');
var btnBlue = document.getElementById('btnBlue');
var btnRed = document.getElementById('btnRed');
var btnAmber = document.getElementById('btnAmber');




btnPurple.addEventListener('click', function () {
    addColorPurple(this);
    toggleActiveButton(btnPurple);

});

btnPink.addEventListener('click', function () {
    addColorPink(this);
    toggleActiveButton(btnPink);
});

btnGreen.addEventListener('click', function () {
    addColorGreen(this);
    toggleActiveButton(btnGreen);
});

btnBlue.addEventListener('click', function () {
    addColorBlue(this);
    toggleActiveButton(btnBlue);
});

btnRed.addEventListener('click', function () {
    addColorRed(this);
    toggleActiveButton(btnRed);
});

btnAmber.addEventListener('click', function () {
    addColorAmber(this);
    toggleActiveButton(btnAmber);
});

function addColorPurple(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `;

}

function addColorPink(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

function addColorGreen(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

function addColorBlue(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

function addColorRed(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

function addColorAmber(button) {
    var primaryColor = button.getAttribute('data-primary');
    var secondaryColor = button.getAttribute('data-secondary');
    var accentColor = button.getAttribute('data-accent');
    var colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    localStorage.setItem('selectedTheme', JSON.stringify(colors));

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

var savedTheme = localStorage.getItem('selectedTheme')

if (savedTheme) {
    var colors = JSON.parse(savedTheme)

    switch (true) {
        case (colors.primary == '#6366f1'):
            applyColorTheme(colors)
            toggleActiveButton(btnPurple);
            break;
        case (colors.primary == '#ec4899'):
            applyColorTheme(colors)
            toggleActiveButton(btnPink);
            break;
        case (colors.primary == '#10b981'):
            applyColorTheme(colors)
            toggleActiveButton(btnGreen);
            break;
        case (colors.primary == '#3b82f6'):
            applyColorTheme(colors)
            toggleActiveButton(btnBlue);
            break;
        case (colors.primary == '#ef4444'):
            applyColorTheme(colors)
            toggleActiveButton(btnRed);
            break;
        case (colors.primary == '#f59e0b'):
            applyColorTheme(colors)
            toggleActiveButton(btnAmber);
            break;
    }
}

function applyColorTheme(colors) {

    myHtml.style.cssText = `
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-accent: ${colors.accent};
    `
}

function toggleActiveButton(activeButton) {
    var allButtons = [btnPurple, btnPink, btnGreen, btnBlue, btnRed, btnAmber];
    var classesToToggle = ['ring-2', 'ring-primary', 'ring-offset-2',
        'ring-offset-white', 'dark:ring-offset-slate-900'];

    for (var i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];

        if (button === activeButton) {
            for (var j = 0; j < classesToToggle.length; j++) {
                button.classList.add(classesToToggle[j]);
            }
        } else {
            for (var j = 0; j < classesToToggle.length; j++) {
                button.classList.remove(classesToToggle[j]);
            }
        }
    }
}






/* ========= variables to  choose bnt nav and taps ===========*/

var btnAll = document.getElementById('btnAll');
var btnWeb = document.getElementById('btnWeb');
var btnApplication = document.getElementById('btnApplication');
var btnDesign = document.getElementById('btnDesign');
var btnCommerce = document.getElementById('btnCommerce');

var myElementsWeb = Array.from(document.getElementsByClassName('web'))
var myElementsApp = Array.from(document.getElementsByClassName('app'))
var myElementsDesign = Array.from(document.getElementsByClassName('design'))
var myElementsEcommerce = Array.from(document.getElementsByClassName('ecommerce'))




btnAll.addEventListener('click', function () {
    // remove
    removeClassWebActive();
    removeClassApplicationActive();
    removeClassCommerceActive();
    removeClassDesignActive();

    // add
    addClassAllActive();

    // display all elements 
    displayAllElements();
});

btnWeb.addEventListener('click', function () {
    // remove
    removeClassAllActive();
    removeClassApplicationActive();
    removeClassCommerceActive();
    removeClassDesignActive();
    // add
    addClassWebActive();

    // display all elements 
    displayElementsWeb();
});


btnApplication.addEventListener('click', function () {
    // remove
    removeClassAllActive();
    removeClassWebActive();
    removeClassCommerceActive();
    removeClassDesignActive();
    // add
    addClassApplicationActive();

    // display all elements 
    displayElementApp();
});


btnDesign.addEventListener('click', function () {
    // remove
    removeClassAllActive();
    removeClassWebActive();
    removeClassCommerceActive();
    removeClassApplicationActive()
    // add
    addClassDesignActive();

    // display all elements 
    displayElementDesign();
});

btnCommerce.addEventListener('click', function () {
    // remove
    removeClassAllActive();
    removeClassWebActive();
    removeClassDesignActive();
    removeClassDesignActive()
    // add
    addClassCommerceActive();

    // display all elements 
    displayElementCommerce();
});


// function to show active and diplay Elements.........

/* ==== btn All ======= */
function addClassAllActive() {
    btnAll.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
    btnAll.classList.add('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
}

function removeClassAllActive() {
    btnAll.classList.remove('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
    btnAll.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
}

function displayAllElements() {
    for (var i = 0; i < myElementsWeb.length; i++) {
        myElementsWeb[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }

    for (var i = 0; i < myElementsApp.length; i++) {
        myElementsApp[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }
    for (var i = 0; i < myElementsDesign.length; i++) {
        myElementsDesign[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }
    for (var i = 0; i < myElementsEcommerce.length; i++) {
        myElementsEcommerce[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `
    }
}


/* ======= btn Web ======== */
function addClassWebActive() {
    btnWeb.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
    btnWeb.classList.add('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
}

function removeClassWebActive() {
    btnWeb.classList.remove('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
    btnWeb.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');

}
function displayElementsWeb() {
    for (var i = 0; i < myElementsWeb.length; i++) {
        myElementsWeb[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }

    for (var i = 0; i < myElementsApp.length; i++) {
        myElementsApp[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsDesign.length; i++) {
        myElementsDesign[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsEcommerce.length; i++) {
        myElementsEcommerce[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `
    }
}

/* ======= btn Application ======== */
function addClassApplicationActive() {
    btnApplication.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
    btnApplication.classList.add('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
}

function removeClassApplicationActive() {
    btnApplication.classList.remove('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
    btnApplication.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
}

function displayElementApp() {
    for (var i = 0; i < myElementsWeb.length; i++) {
        myElementsWeb[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }

    for (var i = 0; i < myElementsApp.length; i++) {
        myElementsApp[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }
    for (var i = 0; i < myElementsDesign.length; i++) {
        myElementsDesign[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsEcommerce.length; i++) {
        myElementsEcommerce[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `
    }
}

/* ======= btn Design ======== */
function addClassDesignActive() {
    btnDesign.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
    btnDesign.classList.add('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
}

function removeClassDesignActive() {
    btnDesign.classList.remove('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
    btnDesign.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
}

function displayElementDesign() {
    for (var i = 0; i < myElementsWeb.length; i++) {
        myElementsWeb[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }

    for (var i = 0; i < myElementsApp.length; i++) {
        myElementsApp[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsDesign.length; i++) {
        myElementsDesign[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `;
    }
    for (var i = 0; i < myElementsEcommerce.length; i++) {
        myElementsEcommerce[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `
    }
}

/* ======= btn Commerce ======== */
function addClassCommerceActive() {
    btnCommerce.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');
    btnCommerce.classList.add('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
}

function removeClassCommerceActive() {
    btnCommerce.classList.remove('active', 'font-bold', 'transition-all', 'duration-300', 'hover:shadow-lg', 'hover:shadow-primary/50', 'bg-linear-to-r',
        'from-primary', 'to-secondary', 'text-white', 'shadow-lg', 'shadow-primary/50');
    btnCommerce.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'font-bold', 'transition-all', 'duration-300',
        'hover:bg-slate-100', 'dark:hover:bg-slate-700', 'border', 'border-slate-300', 'dark:border-slate-700');

}

function displayElementCommerce() {
    for (var i = 0; i < myElementsWeb.length; i++) {
        myElementsWeb[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }

    for (var i = 0; i < myElementsApp.length; i++) {
        myElementsApp[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsDesign.length; i++) {
        myElementsDesign[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;
        `;
    }
    for (var i = 0; i < myElementsEcommerce.length; i++) {
        myElementsEcommerce[i].style.cssText = `
            transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;
        `
    }
}


/* ========= variables to click bnt Navigation Buttons && Carousel Indicators ===========*/

var nextBtn = document.getElementById('next-testimonial');
var prevBtn = document.getElementById('prev-testimonial');
var indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
var track = document.getElementById('testimonials-carousel');
var slider = Array.from(document.querySelectorAll('.testimonial-card'))

var currentIndex = 0;

nextBtn.addEventListener('click', function () {
    if (currentIndex < indicators.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }

    updateCarousel();
});



prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = indicators.length - 1;
    }

    updateCarousel();
});



function updateCarousel() {
    var width = slider[0].offsetWidth;

    track.style.transform = `translateX(${currentIndex * width}px)`;

    for (var i = 0; i < indicators.length; i++) {
        if (i == currentIndex) {
            indicators[i].classList.remove('bg-slate-400', 'dark:bg-slate-600')
            indicators[i].classList.add('active', 'bg-accent', 'scale-125');
            indicators[i].setAttribute('aria-selected', 'true');
        }
        else {
            indicators[i].classList.add('bg-slate-400', 'dark:bg-slate-600')
            indicators[i].classList.remove('active', 'bg-accent', 'scale-125');
            indicators[i].setAttribute('aria-selected', 'false');
        }
    }
}


/* ========= variables of navlinks and section ===========*/
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('#header .nav-links a ');

/* ========= variables div of  Scroll to Top Button ===========*/
var scrollToTopBtn = document.getElementById('scroll-to-top');
var heroSection = document.getElementById('hero-section');
// heroSection.classList.add('opacity-100', 'visible');

// function to show in navbar.........
window.onscroll = function () {
    var top = window.scrollY;
    for (var i = 0; i < sections.length; i++) {
        var offset = sections[i].offsetTop - 100;
        var height = sections[i].offsetHeight;
        var id = sections[i].getAttribute('id');

        if (top >= offset && top < offset + height) {
            var activeLink = document.querySelector('#header .nav-links a[href="#' + id + '"]');

            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active');
            }

            if (activeLink) {
                activeLink.classList.add('active');
            }
            break;
        }
    };

    // function to Scroll to Top Button.........
    if (heroSection) {
        var heroOffest = heroSection.offsetTop - 100;
        var heroHight = heroSection.offsetHeight;

        if (top >= heroOffest && top < heroOffest + heroHight) {
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
        else {
            scrollToTopBtn.classList.add('opacity-100', 'visible');
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        }
    }
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





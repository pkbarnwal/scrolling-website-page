function selectElementByClass(className){
    return document.querySelector(`.${className}`)
}

const selections =[
    selectElementByClass('home'),
    selectElementByClass('about'),
    selectElementByClass('services'),
    selectElementByClass('downloads'),
    selectElementByClass('contact'),
]

const navItems ={
    home: selectElementByClass('homeNavItem'),
    about: selectElementByClass('aboutNavItem'),
    services: selectElementByClass('servicesNavItem'),
    downloads: selectElementByClass('downloadsNavItem'),
    contact: selectElementByClass('contactNavItem'),
}
const observerOptions ={
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};
function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const navItem = navItems[entry.target.id];
            navItem.classList.add('active');
            Object.values(navItems).forEach((item) =>{
                if (item != navItem){
                    item.classList.remove('active');
                }
            });
        }
    });
}

const observer = new IntersectionObserver(observerCallback,observerOptions);

selections.forEach((sec) => observer.observe(sec));
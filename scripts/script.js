const buttonSideMenu = document.getElementById('button-side-menu');
const sideMenu = document.getElementById('side-menu');

buttonSideMenu.addEventListener('click',function(){
    if (sideMenu.classList.contains('active')){
        sideMenu.classList.add('noActive');
        setTimeout(()=>{
            sideMenu.classList.remove('active','noActive');
        },1300);
    }else{
        sideMenu.classList.add('active');
        sideMenu.classList.remove('noActive');
    };
});
let isScrolling = false;
const sections = document.querySelectorAll('.section');
let index = 0;
const fullpageContainer = document.querySelector('.fullpage-container');
function disableScroll() {
    fullpageContainer.classList.add('noScroll');
}
function enableScroll() {
    fullpageContainer.classList.remove('noScroll');
}
document.addEventListener('wheel', function(event) {
    if (isScrolling) {
        return;
    }
    if (event.deltaY > 0 && index < sections.length - 1) {
        index++;
    } else if (event.deltaY < 0 && index > 0) {
        index--;
    } else {
        return;
    }
    disableScroll();
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
        enableScroll();
        isScrolling = false;
    }, 1300); 
});

const carouselItems = document.querySelectorAll('.carousel-item');
const carouselText = document.querySelector('.carousel-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


const descriptions = [
    "Взбодрись в автопутешествии",
    "Организуй вечеринку",
    "Поблагодари себя за тренировку",
    "Проведи красивое свидание с собой",
    "Отметь начало уик-энда"
];

let currentIndex = 2;

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('center', 'left', 'right');
        if (index === currentIndex) {
            item.classList.add('center'); 
        } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
            item.classList.add('left'); 
        } else if (index === (currentIndex + 1) % carouselItems.length) {
            item.classList.add('right'); 
        };
    });
    carouselText.textContent = descriptions[currentIndex];
};

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

updateCarousel();
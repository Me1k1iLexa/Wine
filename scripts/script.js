const buttonSideMenu = document.getElementById('button-side-menu');
const sideMenu = document.getElementById('side-menu');

buttonSideMenu.addEventListener('click',function(){
    if (sideMenu.classList.contains('active')){
        sideMenu.classList.add('noActive');
        setTimeout(()=>{
            sideMenu.classList.remove('active','noActive');
        },1300);
        
        console.log('Отключилось');
    }else{
        sideMenu.classList.add('active');
        sideMenu.classList.remove('noActive');
        console.log('Включилось');
    };
});
let isScrolling = false;
const sections = document.querySelectorAll('.section');
console.log('Количество секций = ', sections);
let index = 0;

document.addEventListener('wheel', function(event) {
    if (isScrolling) {
        console.log('повторная прокрутка');
        return;
    }

    if (event.deltaY > 0 && index < sections.length - 1) {
        index++;
        console.log('Прокрутка вниз');
    } else if (event.deltaY < 0 && index > 0) {
        index--;
        console.log('Прокрутка вверх');
    } else {
        console.log('Нет секций для прокрутки');
        return;
    }

    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    console.log('скролл сработал');

    setTimeout(() => {
        isScrolling = false;
        console.log('таймер закончился');
    }, 400); 
});
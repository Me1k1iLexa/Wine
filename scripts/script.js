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

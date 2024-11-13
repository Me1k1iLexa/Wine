function updViewport(){
    const fullHeight = window.innerHeight;
    const dynamicHeight = window.visualViewport.height;
    const diff = fullHeight - dynamicHeight;
    document.documentElement.style.setProperty('--vh-diff', '${diff}px');
};

document.addEventListener('DOMContentLoaded',updViewport);

var resizeTimeout;
window.addEventListener('resize',()=>{
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(()=>{
        updViewport();
    }, 200);
});

document.addEventListener('fullscreenchange', updViewport);
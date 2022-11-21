let banners = ['/src/image/Banner bielshop.png', '/src/image/Banner bielshop1.png'];
let currentBanner = 0;

function changeBanner() {
    currentBanner = (bannercurrentBanner + 1) % 2;
    document.querySelector('.destaque img').src = banners[currentBanner];
}

let timer = setInterval(changeBanner, 4000);
let controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className === 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(changeBanner, 4000);
        controle.className = 'pause';
    }

    return false;
};
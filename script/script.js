document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navMobile = document.getElementById('nav-mobile');

    console.log('burger:', burger);
    console.log('navMobile:', navMobile);

    burger.addEventListener('click', () => {
        console.log('clic burger');
        burger.classList.toggle('actif');
        navMobile.classList.toggle('ouverte');
        console.log('classes nav:', navMobile.className);
    });
});
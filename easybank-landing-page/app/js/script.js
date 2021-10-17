const btnBurger=document.querySelector('.toggle');
const menu=document.querySelector('.nav-mobile');
const overlay=document.querySelector('.overlay');

const changeVisibility=()=> {
  btnBurger.classList.toggle('open');
  menu.classList.toggle('hidden');
  overlay.classList.toggle('show');
}

btnBurger.addEventListener('click', changeVisibility);
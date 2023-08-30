
let btnMob = document.querySelector('.btn_mobile')
let menuMob = document.querySelector('.navbar_menu')

btnMob.addEventListener('click', () => {
	btnMob.classList.toggle('active')
	menuMob.classList.toggle('menuMobile')
})
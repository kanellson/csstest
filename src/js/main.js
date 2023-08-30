let itemMenu = document.querySelector('.navbar_menu > ul')
let itemsMenu = document.querySelectorAll('.navbar_menu > ul > li > a')

// itemMenu.addEventListener('click', (e) => {
// 	e.preventDefault()
// 	if(e.target.closest('.item_submenu')) {
// 		let itemSubmenu = e.target.closest('.item_submenu');
// 		openSubmenu(itemSubmenu)
// 	}	
// })

// function openSubmenu(itemSubmenu) {
// 	let ItemSubMenu = itemSubmenu.querySelector('.submenu')
// 	console.log(ItemSubMenu);
// }



itemsMenu.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault()	
		
		item.classList.toggle('show_submenu');
	})	
})



let btnMob = document.querySelector('.btn_mobile')
let menuMob = document.querySelector('.navbar_menu')

btnMob.addEventListener('click', () => {
	btnMob.classList.toggle('active')
	menuMob.classList.toggle('menuMobile')
})
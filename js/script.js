const screenWidth = window.screen.width;

const footerBurgerCross = document.querySelector('.footer-burger')
const footerFixedBurgerOpen = document.querySelector('.footer-fixed')

function hrefCloseBurger(event) {
	if (event.target == event.target.closest('a')){
		footerBurgerCross.classList.toggle('cross')
		footerFixedBurgerOpen.classList.toggle('footer-fixed__burger-open')
		document.body.style.overflow = null
	}
}


footerBurgerCross.addEventListener('click', () => {
	footerBurgerCross.classList.toggle('cross')
	footerFixedBurgerOpen.classList.toggle('footer-fixed__burger-open')
	let ul = document.querySelector('.footer-menu')
	if (footerBurgerCross.matches('.cross')) {
		document.body.style.overflow = 'hidden'
		ul.addEventListener('click', hrefCloseBurger, {once: true})
	} else{
		console.log('f')
		ul.removeEventListener('click', hrefCloseBurger)
		document.body.style.overflow = null
	}
})

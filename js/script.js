const screenWidth = window.screen.width;
const divPortfolio = document.querySelector('.container-portfolio');

let heightPortfolio = divPortfolio.clientHeight;

const divFooter = document.querySelector('.footer')

let heightFooter = divFooter.clientHeight

function changeHeightPortfolioDiv(height, width, div, screenConst = 1000) {
	if (width < 1000) {
		let changeHeightPortfolio = height - (screenConst - width)*1.6579
		div.style.height = `${changeHeightPortfolio}px`
	}
}

function changeHeightFooterDiv(height, width, div, screenConst = 1000) {
	if (width < 1000) {
		let changeHeightPortfolio = height - (screenConst - width)*0.388
		div.style.height = `${changeHeightPortfolio}px`
	}
}
changeHeightPortfolioDiv(heightPortfolio, screenWidth, divPortfolio)
changeHeightFooterDiv(heightFooter, screenWidth, divFooter)


const footerBurgerCross = document.querySelector('.footer-burger')
const footerFixedBurgerOpen = document.querySelector('.footer-fixed')
const ruEngLogo = document.querySelector('.container-name p:last-child')

footerBurgerCross.addEventListener('click', () => {
	footerBurgerCross.classList.toggle('cross')
	footerFixedBurgerOpen.classList.toggle('footer-fixed__burger-open')
	ruEngLogo.classList.toggle('ruEngLogo')
	if (footerBurgerCross.matches('.cross')) {
		document.body.style.overflow = 'hidden'
	} else{
		document.body.style.overflow = null
	}
})
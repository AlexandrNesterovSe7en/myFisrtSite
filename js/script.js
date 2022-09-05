const screenWidth = window.screen.width;
const divPortfolio = document.querySelector('.container-portfolio');

let heightPortfolio = divPortfolio.clientHeight;

const divFooter = document.querySelector('.footer')

let heightFooter = divFooter.clientHeight

function changeHeightPortfolioDiv(height, width, div, screenConst = 1000) {
	if (width < 1000) {
		console.log('asdf')
		let changeHeightPortfolio = height - (screenConst - width)*1.6579
		div.style.height = `${changeHeightPortfolio}px`
	}
}

function changeHeightFooterDiv(height, width, div, screenConst = 1000) {
	if (width < 1000) {
		console.log('asdf')
		let changeHeightPortfolio = height - (screenConst - width)*0.388
		div.style.height = `${changeHeightPortfolio}px`
	}
}
changeHeightPortfolioDiv(heightPortfolio, screenWidth, divPortfolio)
changeHeightFooterDiv(heightFooter, screenWidth, divFooter)

// скрывает менюшку
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.footer-fixed');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})
// конец скрытия менюшки

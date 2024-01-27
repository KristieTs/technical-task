//transparent header
const headerEl = document.querySelector('.main-header')

document.addEventListener('scroll', ()=>{
    headerEl.classList.add('transparent-header')
})


// nav
const navEl = document.querySelector('.navigation')
const iEl = document.querySelector('#i')

const burgerClick=()=>{
	navEl.classList.toggle('active')
	headerEl.classList.toggle('header-noscroll')
	navEl.classList=='navigation active'?
	document.body.style.overflow = 'hidden'
	:document.body.style.overflow = 'scroll'
	iEl.classList == 'fa-solid fa-bars'?
	iEl.setAttribute('class', 'fa-solid fa-x')
	:iEl.setAttribute('class', 'fa-solid fa-bars')
}


// FAQs
const liEls = document.querySelectorAll('.FAQs-wrapper li >span')
const svgEls = document.querySelectorAll('.FAQs-wrapper li svg')
const displayDivs= document.querySelectorAll('.FAQs-wrapper li>div')
const primDegree = 0

liEls.forEach(liEl => {
  liEl.addEventListener('click', ()=>{
    displayDivs.forEach(displayDiv=>{
      if(displayDiv.style.display == 'block'){
        displayDiv.style.display = 'none'
        svgEls[displayDiv.getAttribute('data-id')-1].style.transform = 	`rotate(${primDegree}deg)`
      }else if(displayDiv.getAttribute('data-id')==liEl.getAttribute('data-id')){
        displayDiv.style.display= 'block'
        svgEls[displayDiv.getAttribute('data-id')-1].style.transform  = `rotate(${primDegree+180}deg)`
      }
    })
  })  
})


//slider
const sliderDivs = document.querySelectorAll('.slider')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const dots = document.querySelectorAll('.dot')

let i = 0
function slideRight() {
	i++
	if(i > sliderDivs.length-1){
		i = 0
	}
	sliderDivs.forEach(sliderDiv =>{
		dots.forEach(dot =>{
			dot.classList.remove('white')
			dot.addEventListener('click', ()=>{
				sliderDiv.classList.remove('flex')
				sliderDivs[dot.getAttribute('data-id')].classList.add('flex')
				sliderDivs[dot.getAttribute('data-id')].classList.add('fade-in')
				dots.forEach(dot => {
					dot.classList.remove('white')
				})
				dots[dot.getAttribute('data-id')].classList.add('white')
			})
		})
		dots[i].classList.add('white')
		sliderDiv.classList.remove('flex')
		sliderDivs[i].classList.remove('fade-in')
	})
	sliderDivs[i].classList.add('flex')
	sliderDivs[i].classList.add('fade-in')
}
setInterval(slideRight, 2000)

btnRight.addEventListener('click', ()=>{
	slideRight()
})

btnLeft.addEventListener('click', ()=>{
	i--
	if(i < 0){
		i = sliderDivs.length - 1
	}
	sliderDivs.forEach(sliderDiv=>{
		dots.forEach(dot =>{
			dot.classList.remove('white')
		})
		dots[i].classList.add('white')
		sliderDiv.classList.remove('flex')
		sliderDivs[i].classList.remove('fade-in')
	})
	sliderDivs[i].classList.add('flex')
	sliderDivs[i].classList.add('fade-in')
})
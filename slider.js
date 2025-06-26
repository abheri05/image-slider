const slides = document.querySelectorAll(".list .item")
const thumbnails = document.querySelectorAll(".thumbnails .thumb")

const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let counterIndex = 0;

function showSlide(index){
  for(let i=0 ; i < slides.length; i++){
    slides[i].style.opacity = '0'
    slides[i].style.zIndex = '0'
  }
  slides[index].style.opacity= "1";
  slides[index].style.zIndex = '1'

  for(let i =0 ; i< thumbnails.length ; i++){
    thumbnails[i].classList.remove('active')
  }
  thumbnails[index].classList.add("active")
}

nextBtn.addEventListener("click" ,function(){
  counterIndex++ ;
  if(counterIndex >= slides.length){
    counterIndex = 0
  }
  showSlide(counterIndex)
})

prevBtn.addEventListener("click", function(){
  counterIndex-- ;
  if(counterIndex < 0){
    counterIndex = slides.length - 1;
  }
  showSlide(counterIndex)
})

showSlide(counterIndex)
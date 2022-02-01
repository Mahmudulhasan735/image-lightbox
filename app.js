const images = document.querySelectorAll('.image')
const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup img')
const popupClose = document.querySelector('.popup a')
const backdrop = document.querySelector('.backdrop')

images.forEach((image, index) =>{
    image.addEventListener('click',(e)=>{
        popup.style.display = 'block'
        popupImg.setAttribute('src', e.target.src)
        backdrop.style.display = 'block'
    })
})

popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none'
    backdrop.style.display = 'none'
})

/* ---------Mobile nav--------- */

const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function(){
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})

/* --------- Video nav --------- */

const videoStoryButton = document.querySelector('#video-story-button')
const videoFile = document.querySelector('#video-story')


videoStoryButton.addEventListener('click', function() {

    if (videoFile.paused) {
        videoFile.play()
    } else {
        videoFile.pause()
    }

    
})


const progressBar = document.querySelector('#progress-bar')

const body = document.querySelector('body')



const animateProgressBar = () => {
    let scrollMouse = -body.getBoundingClientRect().top;
    console.log(scrollMouse)


    let progressWidth = (scrollMouse / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100 ;
    

    let value = Math.floor(progressWidth)
    console.log(value)

    progressBar.style.width = value + "%"
}

window.addEventListener('scroll', animateProgressBar)
animateProgressBar()
handleScroll = () => {
    const nav = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white')
        } else {
            nav.classList.remove('bg-white')
        }
    })
}

window.addEventListener('DOMContentLoaded', handleScroll)
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.a-icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
            answer.style.marginTop = "0px";
            accordian.style.backgroundColor = "white";
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.marginTop = "25px";
            accordian.style.backgroundColor = "#E7E7E7";
        }
    });
});


/* ========== Accordian End ========== */

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }
/* ========== Navbar Start ========== */
let menuBtn = document.getElementById("menuBtn");
let optionBtn = document.getElementById("optionBtn");
let xBtn = document.getElementById("xBtn");

menuBtn.addEventListener("click", function() {
    xBtn.classList.toggle("hidden");
    optionBtn.classList.toggle("hidden");
});

/* ========== Navbar End ========== */

/* ========== Accordian Start ========== */
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.a-icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

    })
})

/* ========== Accordian End ========== */

// Your code goes here

//  NAV ---------------------
const navFun = document.querySelectorAll('.nav-link');
const navMouseOver = navFun.forEach(event => {
    event.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '2rem';
    console.log('Nav Hover Activated');
    })
});

const navMouseOverEnd = navFun.forEach(event => {
    event.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '1.6rem';
    })
})


//  FUN BUS LOGO 

// const logoFun = document.querySelector('.logo-heading');
// logoFun.addEventListener('')


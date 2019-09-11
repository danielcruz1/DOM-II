// Your code goes here

//  1. NAV & h's---------------------


const navFun = document.querySelectorAll('.nav-link');

navFun.forEach(element => {
    element.style.fontFamily = 'Indie Flower, cursive';
    element.style.fontSize = '2.5rem';

    element.addEventListener('mouseover', (event) => {
    element.style.transform = 'scale(1.1)';
    element.style.transition = ' transform .25s';
    })

    element.addEventListener('mouseout', (event) => {
    element.style.transform = 'scale(1)';
    element.style.transition = ' transform .25s';   
    })
})

const scaleUp = document.querySelectorAll('h2');
    scaleUp.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = ' transform .5s';
        })

        element.addEventListener('mouseleave', (event) => {
        element.style.transform = 'scale(1)';
        element.style.transition = ' transform .5s';   
        })
})

//  2. FUN BUS LOGO 

const logoFun = document.querySelector('.logo-heading');
logoFun.addEventListener('mouseover', (event) => {
    console.log('Hover over Logo');
    logoFun.style.transform = 'scale(1.5)';
    logoFun.style.transition = ' transform .5s';
    logoFun.style.color = 'red';
})

logoFun.addEventListener('mouseout', (event) => {
    console.log('Hover over Logo Off');
    logoFun.style.transform = 'scale(1)';
    logoFun.style.transition = ' transform .5s';   
    logoFun.style.color = 'black';
})

// 3. FUN BUS TOP IMAGE

const topImg = document.querySelector('.intro img');
topImg.addEventListener('dblclick', (event) => {
    console.log('Who clicked on this?');
    alert('The wheels on the bus go round and round...');
})

// 4. IMAGES

const swiperImg = document.querySelectorAll('img');
swiperImg.forEach(image => {
    image.addEventListener('contextmenu', (event) => {
        image.src = '/img/swiper.jpg';
        console.log('Swiper Alert')
    })
})

// 5. DRAG

const dragImg = document.querySelectorAll('img');
dragImg.forEach(image => {
    image.addEventListener('drag', (event) => {
        image.src = '/img/nonono.jpg';
        console.log('TSK TSK')
    })
})

// 6. COPY COPYRIGHT

const footerCopy = document.querySelector('.footer p');
footerCopy.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

//  7. RESIZE

window.addEventListener('resize', (event) => {
    const changeTitle = document.querySelector('.logo-heading');
    changeTitle.textContent = "It's Morphin' Time!!!";
  })

// 8. 


// preventDefault 

// const linksDisabled = document.querySelectorAll('.nav-link');
// linksDisabled.forEach(event => {
//     event.addEventListener('click', (event) =>{
//     console.log('Link Disabled');
//     event.preventDefault();
//     })
// })

// stopPropagation

const destinationFun = document.querySelectorAll('.destination');
const buttonFun = document.querySelectorAll('.btn');

buttonFun.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log('Button Clicked');
        element.style.backgroundColor = 'red';
        event.stopPropagation();
    })
})

destinationFun.forEach(element => {
    element.addEventListener('click', (event)=> {
        element.style.transform = 'scale(1.2)';
        element.style.transition = 'transform 0.25s';
        console.log('Click to Enlarge')
    })
});

destinationFun.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        element.style.transform = 'scale(1.0)';
        element.style.transition = 'transform 0.25s';
        console.log('Dblclick to Shrink')
    })
});

// 
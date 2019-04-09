// Your code goes here

let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.target.style.cursor = 'pointer';
})
logoHeading.addEventListener('mouseout', (event)=> {
    event.target.style.color = 'black';
})
logoHeading.addEventListener('click', (event) => {
    alert('Thank for Visiting Fun Bus! Subscribe for Updates!');
})

//Victor's event listenters
let button1 = document.querySelectorAll('.destination .btn')[0]
button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Pop!'
})

 let button2 = document.querySelectorAll('.destination .btn')[1]
button2.addEventListener('dblclick', (event) => {
    button2.style.background = 'blue'
    button2.innerHTML = 'Double Click!'
})

let button3 = document.querySelectorAll('.destination .btn')[2]
button3.addEventListener('mouseenter', (event) => {
    button3.style.background = 'green'
    button3.innerHTML = 'Green Version'
  })
  button3.addEventListener('mouseleave', (event) => {
    button3.style.background = '#17A2B8'
    button3.innerHTML = 'Sign Me Up!'
  })

  

//Skylar's event listeners
const linksin = document.querySelectorAll('a');
for (var i=0; i < linksin.length; i++) {
   linksin[i].addEventListener('mouseover', (event) => {
       event.target.style.color = 'blue'
       // console.log("target:", event.target);
       });
}
const linksout = document.querySelectorAll('a');
for (var i=0; i < linksout.length; i++) {
   linksout[i].addEventListener('mouseout', (event) => {
       event.target.style.color = 'black'
       // console.log("target:", event.target);
   });}

window.addEventListener('load', (event) => {
       alert("The Page Loaded");
});

//prevent default for nav items
const links = document.querySelectorAll('a');
for (var i=0; i < links.length; i++) {
   linksin[i].addEventListener('click', (event) => {
       event.preventDefault();
       // prevent default refresh on anchors
       });
}

//contact form keys
let inputFields = document.querySelectorAll('.form-contact input');
for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('keyup', (event) => {
    console.log('keyup: ', event.target.value);
    inputFields[i].addEventListener('keydown', (event) => {
    console.log('keydown: ', event.target.value)
    inputFields[i].addEventListener('input', (event) => {
    console.log('input: ', event.target.value)
        })
    })
    })
}

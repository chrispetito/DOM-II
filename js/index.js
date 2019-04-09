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



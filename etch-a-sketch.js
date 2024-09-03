
for(let x=0; x < 16; x++){
    for(let j=0; j < 16; j++){
var div = document.createElement('div');
div.id = 'square';
var container = document.querySelector('#container');
container.appendChild(div);
}
}

var squares = document.querySelectorAll('#square');
    squares.forEach(squares  => {
squares.addEventListener('mouseover', () =>{
    squares.style.backgroundColor = 'blue';
});
    });

var btn = document.querySelector('button');

btn.addEventListener('click',() => {
    squares.forEach(squares  => {
            squares.style.backgroundColor = 'white';
        });
            });
        
    

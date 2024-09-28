  /* Grid on Start */
sqr = 16;



function createGrid(sqr){
  for(let x=0; x < sqr; x++){
    for(let j=0; j < sqr; j++){
var div = document.createElement('div');
div.id = 'square';
div.style.height = "calc(100%/ "+ sqr + ")";
div.style.width = "calc(100%/ "+ sqr +")" ;
var container = document.querySelector('#container');
container.appendChild(div)
}
}
    /* Color MouseOver */
    var squares = document.querySelectorAll('#square');
    squares.forEach(squares  => {
squares.addEventListener('mouseover', () =>{
    squares.style.backgroundColor = 'blue';
});
    });
       /* Reset Grid */ 
var btn = document.getElementById('reset');
btn.addEventListener('click',() => {
    squares.forEach(squares  => {
            squares.style.backgroundColor = 'white';
        });
            });
}
createGrid(sqr);


function clearGrid(){
    container.textContent = "";
}




    

        

  /* Resize Grid */
var btnResize = document.getElementById('resize');

btnResize.addEventListener('click', () => {
    let x = prompt("What size would you like your grid?");
    clearGrid();
    createGrid(x);
});



const squares = Array.from(document.querySelectorAll('.grid div'))

//Challenge: We use what we have learnt in the previous three lessons in order 
//to visually colour a game board in our browser. At the moment the board is empty. 
//Please colour the squares, similar to like you would on a chess board using the 
//for loop.

//Don't forget to share your code in the #share-your-code channel on discord.
for(let i=0; i<squares.length; i++){
    // console.log(typeof(squares[i])) //obj
    // console.log(squares[i]) //div
    //ask, if the current index is even paint it black
    //otherwise, leave it as is
    if(i % 2 === 0){
        //one way - set the bg directly
        squares[i].style.background = 'black'        
    }
    //or another way - add class
    if(i % 2 === 0){
        squares[i].classList.add('even')
    }else{
        squares[i].classList.add('odd')
    }
}

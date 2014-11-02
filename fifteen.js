"use strict";
var puzzle;
var squares;
//var row;
//var col;
var blankSquareX;
var blankSquareY;

window.onload = function(){
	puzzle=document.getElementById("puzzlearea"); 
    squares=puzzle.getElementsByTagName("div");
	
	for(var i=0; i<squares.length; i++){
        //squares[i].className = "puzzlepiece";
        //squares[i].style.position = "relative";
        //squares[i].style.float = "left";
		
		squares[i].className = "puzzlepiece";
		squares[i].style.left = (i%4 * 100) + 'px';
		squares[i].style.top = (parseInt(i/4) * 100) + 'px';
		squares[i].style.backgroundPosition = '-' + squares[i].style.left + ' ' + '-' + squares[i].style.top;
		
		/*squares[i].onmouseover = function(){
			if(isMovable(parseInt(this.innerHTML))){
				squares[i].className("movablepiece");
			}
		}*/
		
		squares[i].onmouseover = function(){
			if (isMovable(parseInt(this.innerHTML)))
			{
				this.style.border = "2px solid red";
				this.style.color = "#006600";
			}
		};
		
		squares[i].onmouseout = function(){
			this.style.border = "2px solid black";
			this.style.color = "#000000";
		};
		
		squares[i].onclick = function(){
			if(isMovable(parseInt(this.innerHTML))){
				squareSlide(this.innerHTML-1);
			}
		};
	}
		
	blankSquareX = '300px';
	blankSquareY = '300px';

	var shuffleSquares = document.getElementById("shufflebutton");
	shuffleSquares.onclick = function(){
		for(var i=0; i<250; i++){
			var randomNum = parseInt(Math.floor(Math.random() * 100)) %4;
			if(randomNum == 0){
				var space = squareMoveUp(blankSquareX, blankSquareY);
				if(space != -1){
					squareSlide(space);
				}
			}
			if(randomNum == 1){
				var space = squareMoveDown(blankSquareX, blankSquareY);
				if(space != -1) 
				{
					squareSlide(space);
				}
			}

			if(randomNum == 2){
				var space = squareMoveLeft(blankSquareX, blankSquareY);
				if(space != -1)
				{
					squareSlide(space);
				}
			}

			if(randomNum == 3){
				var space = squareMoveRight(blankSquareX, blankSquareY);
				if (space != -1){
					squareSlide(space);
				}
			}
		}
	};
};

function squareMoveUp(x,y){
	var row = parseInt(x);
	var col = parseInt(y);
	if(col>0){
		for(var i=0; i<squares.length; i++){
			if(parseInt(squares[i].style.top) + 100 == col && parseInt(squares[i].style.left) == row){
				return i;
			}
		} 
	}
	else {
		return -1;
	}
}
function squareMoveRight(x,y){
	var row = parseInt(x);
	var col = parseInt(y);
	if(row<300){
		for(var i=0; i<squares.length; i++){
			if(parseInt(squares[i].style.left) - 100 == row && parseInt(squares[i].style.top) == col){
				return i;
			}
		}
	}
	else{
		return -1;
	}
}
function squareMoveDown(x,y){
	var row = parseInt(x);
	var col = parseInt(y);
	if (col<300){
		for(var i=0; i<squares.length; i++){
			if(parseInt(squares[i].style.top) - 100 == col && parseInt(squares[i].style.left) == row){
				return i;
			}
		}
	}
	else{
		return -1;
	}
}
function squareMoveLeft(x,y){
	var row = parseInt(x);
	var col = parseInt(y);
	if (row>0){
		for(var i=0; i<squares.length; i++){
			if(parseInt(squares[i].style.left) + 100 == row && parseInt(squares[i].style.top) == col){
				return i;
			} 
		}
	}
	else{
		return -1;
	}
}

function isMovable(pos){
	if(squareMoveUp(blankSquareX, blankSquareY) == (pos-1)){
		return true;
	}
	if(squareMoveRight(blankSquareX, blankSquareY) == (pos-1)){
		return true;
	}
	if(squareMoveDown(blankSquareX, blankSquareY) == (pos-1)){
		return true;
	}
	if(squareMoveLeft(blankSquareX, blankSquareY) == (pos-1)){
		return true;
	}
}

function squareSlide(pos){
	var temp = squares[pos].style.left;
	squares[pos].style.left = blankSquareX;
	blankSquareX = temp;
	
	temp = squares[pos].style.top;
	squares[pos].style.top = blankSquareY;
	blankSquareY = temp;
}
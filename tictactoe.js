alert("connected");
var turn='X';
gamestatus( turn + " Turn to Start!!! ");
document.winner=null;

 var startx= document.getElementById("forX");
 var starto= document.getElementById("forO");

 startx.addEventListener("click", function(){
 	turn='X';
 	reset();
 })

  starto.addEventListener("click", function(){
 	turn='O';
 	reset();
 })


function gamestatus(sts) {
	console.log(sts);
	document.getElementById("status").innerText=sts;
}

function cell_clicked(cell) {
		if (document.winner!=null) {} 
		else if (cell.innerText==="") {
			cell.innerText= turn;
			checker(turn);
			if (document.winner!=null) {} 
			else if (turn==='O') {
			turn='X';
			gamestatus(turn +" Turn to play next");
			}
			else{
			turn='O';
			gamestatus(turn +" Turn to play next");
			}
			
		}
		
		else{
			gamestatus("Invalid Move!!! already occupied");
		}
		checker(turn);
}	

function checker(turn){
		if (check_cell(1,2,3,turn)||
			check_cell(4,5,6,turn)||
			check_cell(7,8,9,turn)||
			check_cell(1,4,7,turn)||
			check_cell(2,5,8,turn)||
			check_cell(9,6,3,turn)||
			check_cell(7,5,3,turn)||
			check_cell(9,5,1,turn)) {
			gamestatus(turn+" Won the Game !!!")
			document.winner= true;
		}
		else if (sq_content(1)!=""&&
				sq_content(2)!=""&&
				sq_content(3)!=""&&
				sq_content(4)!=""&&
				sq_content(5)!=""&&
				sq_content(6)!=""&&
				sq_content(7)!=""&&
				sq_content(8)!=""&&
				sq_content(9)!="") {
			gamestatus("GAME IS DRAW");
			document.winner=true;
		}	
}

function check_cell(x,y,z,turn){
	var	result=false;
	if (sq_content(x)==turn&&sq_content(y)==turn&&sq_content(z)==turn) {
		result=true;
	}
	return result;
}

function sq_content(idnum){
	var content;
	content=document.getElementById("s"+idnum).innerText;
	return content;
}

function reset(){
	for (var i = 1; i <=9; i++) {
		document.getElementById("s"+i).innerText="";		
	}
	document.winner=null;
	gamestatus( turn + " Turn to Start!!! ");
}
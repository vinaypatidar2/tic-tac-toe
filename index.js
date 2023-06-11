let arr_id = []; // to store the id's of elements that gets filled with X/O
let arrid = ['r1c1', 'r1c2', 'r1c3', 'r2c1', 'r2c2', 'r2c3', 'r3c1', 'r3c2', 'r3c3'];
let value = "X";
let arr = []; // to store input data X/O
let check = [];
let winner = 0; // no one wins the match
let count = 0;

const popup = document.getElementById("myPopup");
const win = document.getElementById("winner");
const close = document.getElementById("close");
const board = document.getElementById("board");
const reset = document.getElementById("restart");


const displayValue = (e)=>{
    const id = e.target.getAttribute("id");
    if ( arrid.includes(id) && !arr_id.includes(id)){
        count += 1;
        arr_id.push(id);
        let index = arrid.indexOf(id);
        const button = document.getElementById(id);
        button.innerHTML = value;
        arr[index] = value;
        button.classList.remove("hidden");
        button.classList.add("active");

        if (value==="X"){
            value = "O";
        }
        else{
            value = "X";
        }
        winner = check_win();
        if (winner !== 0){
            win.innerHTML = "PLAYER "+ winner +" WINS";
            popup.classList.add("show");
            
        }
        else if(count === 9){
            win.innerHTML = "MATCH DRAWS!!";
            popup.classList.add("show");

        }

    }

}

function check_win(){
    check[0]= arr[0]+arr[1]+arr[2];
	check[1]= arr[3]+arr[4]+arr[5];
	check[2]= arr[6]+arr[7]+arr[8];
	check[3]= arr[0]+arr[3]+arr[6];
	check[4]= arr[1]+arr[4]+arr[7];
	check[5]= arr[2]+arr[5]+arr[8];
	check[6]= arr[0]+arr[4]+arr[8];
	check[7]= arr[2]+arr[4]+arr[6]; 
    if (check.includes("XXX")){
        return 1;
    }
    else if (check.includes("OOO")){
        return 2;
    }
    else{
        return 0;
    }
}

function restart(){
    arr = [];
    arr_id = [];
    count = 0;
    for(let ids of arrid){
        const btn = document.getElementById(ids);
        btn.innerHTML = "";
    }
}

function closeEvent() {
    win.innerHTML = "";
    popup.classList.remove("show");
    restart();
}

reset.addEventListener("click",restart);
close.addEventListener("click", closeEvent);
board.addEventListener("click",displayValue);
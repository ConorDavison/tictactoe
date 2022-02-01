let player = "X";

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
})

function handleClick(e) {

        if(e.target.innerText === "") {
    e.target.innerText = player;
    switchPlayer();
        }
}

function switchPlayer() {
    player = player === 'X' ? "0" : "X";
}

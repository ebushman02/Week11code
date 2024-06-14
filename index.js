let p = $('#test');
let div = $('.my-class');
let ul = $('ul');

let count = $('#counter');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');
let box9 = $('#box9');
let x = $('#x');
let o = $('#o');
let clear = $('#button');

let turn=0;
counter();
function turns(){
if (turn % 2) {
    $(this).append('<span class="o">O</span>');
}
else {$(this).append('<span class="x">X</span>');
}   
turn += 1;
$(this).prop('disabled', true);
win();
counter();
}


box1.on('click',turns);
box2.on('click',turns);
box3.on('click',turns);
box4.on('click',turns);
box5.on('click',turns);
box6.on('click',turns);
box7.on('click',turns);
box8.on('click',turns);
box9.on('click',turns);
clear.on('click',clearBox);

function xWins() {
    $('#line').after('<br><div class="alert alert-success" role="alert" id="x-wins">X Wins!  Press Clear to Play Again.</div>');
        $('#break').remove();
        box1.prop('disabled', true);
        box2.prop('disabled', true);
        box3.prop('disabled', true);
        box4.prop('disabled', true);
        box5.prop('disabled', true);
        box6.prop('disabled', true);
        box7.prop('disabled', true);
        box8.prop('disabled', true);
        box9.prop('disabled', true);
    
}
function oWins() {
    $('#line').after('<br><div class="alert alert-success" role="alert" id="x-wins">O Wins!  Press Clear to Play Again.</div>');
    $('#break').remove();
        box1.prop('disabled', true);
        box2.prop('disabled', true);
        box3.prop('disabled', true);
        box4.prop('disabled', true);
        box5.prop('disabled', true);
        box6.prop('disabled', true);
        box7.prop('disabled', true);
        box8.prop('disabled', true);
        box9.prop('disabled', true);
}
function draw(){
    $('#line').after('<br><div class="alert alert-success" role="alert" id="x-wins">Draw, Press Clear to Play Again.</div>')
}


console.log(x)
function win(){
if ((box1.text() == "X" && box2.text() == "X" && box3.text() == "X") ||
    (box4.text() == "X" && box5.text() == "X" && box6.text() == "X") ||
    (box7.text() == "X" && box8.text() == "X" && box9.text() == "X") ||
    (box1.text() == "X" && box4.text() == "X" && box7.text() == "X") ||
    (box2.text() == "X" && box5.text() == "X" && box8.text() == "X") ||
    (box3.text() == "X" && box6.text() == "X" && box9.text() == "X") ||
    (box1.text() == "X" && box5.text() == "X" && box9.text() == "X") ||
    (box3.text() == "X" && box5.text() == "X" && box7.text() == "X"))
    {setTimeout(xWins, 200);
        
} else if (
    (box1.text() == "O" && box2.text() == "O" && box3.text() == "O") ||
    (box4.text() == "O" && box5.text() == "O" && box6.text() == "O") ||
    (box7.text() == "O" && box8.text() == "O" && box9.text() == "O") ||
    (box1.text() == "O" && box4.text() == "O" && box7.text() == "O") ||
    (box2.text() == "O" && box5.text() == "O" && box8.text() == "O") ||
    (box3.text() == "O" && box6.text() == "O" && box9.text() == "O") ||
    (box1.text() == "O" && box5.text() == "O" && box9.text() == "O") ||
    (box3.text() == "O" && box5.text() == "O" && box7.text() == "O"))
    {setTimeout(oWins, 200);
    

} else if(turn===9) {
    setTimeout(draw, 200);
    count.text('Draw')
}
}

function clearBox() {
    box1.empty();
    box2.empty();
    box3.empty();
    box4.empty();
    box5.empty();
    box6.empty();
    box7.empty();
    box8.empty();
    box9.empty();
    box1.prop('disabled', false);
    box2.prop('disabled', false);
    box3.prop('disabled', false);
    box4.prop('disabled', false);
    box5.prop('disabled', false);
    box6.prop('disabled', false);
    box7.prop('disabled', false);
    box8.prop('disabled', false);
    box9.prop('disabled', false);
    $('#x-wins').remove();
    $('#o-wins').remove();
    turn = 0;
    counter()
}
function counter(){
    if (turn % 2 && turn < 9){
        count.text('Turn: O')
    }
    else if ((turn == 0 || !(turn % 2)) && turn < 9){
        count.text('Turn: X')
    }

}
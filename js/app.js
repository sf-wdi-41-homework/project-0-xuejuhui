//checking 
console.log("Im working");
var width = 1800;
var car1 = 0;
var car2 = 0;
var car1Win = 0;
var car2Win = 0;
var timeleft = 3;

$(document).ready(function() {
    // starting timer
    var downTimer = setInterval(function() {
        timeleft--;
        if (timeleft > 0)
            document.getElementById("countDownTimer").textContent = timeleft;
        if (timeleft === 0) {
            document.getElementById("countDownTimer").textContent = 'Go';
            clearInterval(downTimer);
            // detect key pressed
            $(window).on('keydown', function(pressed) {
                if (car1 === width || car2 === width) {
                    console.log();
                } else if (pressed.keyCode == 90) {
                    //when key z pressed run function carMove1
                    carMove1();

                } else if (pressed.keyCode == 88) {
                    //when key x pressed run function carMove2
                    carMove2();

                }
            });
        }
    }, 1000);

    // reset button
    $('.reset').on('click', function reset() {
        car1 = 0;
        car2 = 0;
        timeleft = 3;
        downTimer;
        $('.car1').css("left", '0');
        $('.car2').css("left", '0');
    });

})
// function car1 move  x px to the left
function carMove1() {
    $('.car1').animate({
        "left": "+=100px"
    }, 10);
    car1 = car1 + 100;
    checkWin();

}
// function car2 move  x px to the left
function carMove2() {
    $('.car2').animate({
        "left": "+=100px"
    }, 10);
    car2 = car2 + 100;
    checkWin();

}

// check for win
function checkWin() {
    if (car1 === width) {
        alert("Car 1 win")
        car1Win = car1Win + 1
        $('.p1Win').text(`Player 1 Score ${car1Win}`);
        return true;
    } else if (car2 === width) {
        alert("Car2 win")
        car2Win = car2Win + 1
        $('.p2Win').text(`Player 2 Score ${car2Win}`);
        return true;
    }
}
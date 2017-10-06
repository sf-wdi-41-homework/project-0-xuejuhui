console.log("Im working");
var width = 1800;
var car1 = 0;
var car2 = 0;

$(document).ready(function() {
	// detect key pressed
	$(window).on('keydown',function(pressed) {
	if (checkWin()){
	console.log();
}
  else if (pressed.keyCode == 90) {
    console.log('z pressed');
    //when key z pressed run function carMove1
    carMove1();
           
  } else if (pressed.keyCode == 88){
  	console.log('x pressed');
  	//when key x pressed run function carMove2
  	carMove2();

  }
});
})
// function car1 move  x px to the left
function carMove1(){
	  $('.car1').animate({ "left": "+=100px" }, "slow" );
	  car1 = car1 + 100;
	  checkWin();

}
// function car2 move  x px to the left
function carMove2(){
	  $('.car2').animate({ "left": "+=100px" }, 10 );
	  car2 = car2 +100;
	  checkWin();

}
console.log(car1);
console.log(car2);
// check for win
function checkWin(){
	if (car1 === width){
		console.log("car 1 win")
		return true;
	}else if(car2 === width){
		console.log("car2 win")
		return true;
}}

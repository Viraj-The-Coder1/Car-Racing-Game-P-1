Canvas = document.getElementById("Car_Track");
ctx = Canvas.getContext("2d");
Car_1_X = 10;
Car_1_Y = 15;
Car_1_W = 120;
Car_1_H = 70;

Car_2_X = 10;
Car_2_Y = 160;
Car_2_W = 120;
Car_2_H = 70;
function add(){
   bg_img = new Image();
   bg_img.src = "Car Track.jpg";
   bg_img.onload = load_bj_img;
   
   Car_one_img = new Image();
   Car_one_img.src = "Yellow Car.png";
   Car_one_img.onload = load_Car_one;

   Car_two_img = new Image();
   Car_two_img.src = "Pink Car.png";
   Car_two_img.onload = load_Car_two;
}
function load_bj_img(){
   ctx.drawImage(bg_img, 0, 0, Canvas.width, Canvas.height);
}
function load_Car_one(){
   ctx.drawImage(Car_one_img, Car_1_X, Car_1_Y, Car_1_W, Car_1_H);
}
function load_Car_two(){
   ctx.drawImage(Car_two_img, Car_2_X, Car_2_Y, Car_2_W, Car_2_H);
}
window.addEventListener("keydown", myarrowkeysdown);
function myarrowkeysdown(e){
   keyPS = e.keyCode;
   console.log(keyPS);
   if (keyPS == 37){
      Left();
   }
   if (keyPS == 38){
      Up();
   }
   if (keyPS == 39){
      Right();
   }
   if (keyPS == 40){
      Down();
   }
}
function setup() {
    createcanvas(600, 600),
    background( "white");
}


 function draw() {

   stroke ("blue");
   fill ("red");


   // console.log(mouseispressed);
 
   if (mouseispressed) {
   Reflect(mouseX, mouseY, 20, 35);
}

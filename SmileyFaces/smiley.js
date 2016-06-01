//Define the SmileyFace object with the constructor function.
//The arguments are for the position of the SmileyFace object
var SmileyFace = function(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};    
//A method named draw that draws the SmileyFace object
//It doesn't take arguments
SmileyFace.prototype.draw = function() {
     fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
  };
    
    //A method named speak that adds text to the object
    //It takes a string argument named hey
    SmileyFace.prototype.speak = function(hey) {
        text(hey,this.centerX-40, this.centerY+90);
        textSize(14);
        fill(209, 4, 209);
      };
        //A method named name that adds text to the object
        //It takes a string argument named name
       SmileyFace.prototype.name = function(name) {
        textSize(12);
        text(name, this.centerX-15, this.centerY-50);
        fill(5, 2, 2);
        };
        
    //Create an instance of the SmileyFace object named Donut
    var Donut = new SmileyFace(200, 300);
 //Call the methods for the newly created instances and pass arguments where necessary
        Donut.draw();
        Donut.speak("I'm the sage of the six donuts!");
        Donut.name("Donut");
        
    //Create an instance of the SmileyFace object named Bear
    var Bear = new SmileyFace(250, 100);
 //Call the methods for the newly created instances and pass arguments where necessary
        Bear.draw();
        Bear.speak("I'm a hopeless romantic!");
        Bear.name("Bear");
        
    //Create an instance of the SmileyFace object named Stefanos
    var Stefanos = new SmileyFace(80, 120);
    //Call the methods for the newly created instances and pass arguments where necessary
    Stefanos.draw();
    Stefanos.speak("Hey I'm Stefanos");
    Stefanos.name("Stefanos");

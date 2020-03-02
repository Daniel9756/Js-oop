
 

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
 const circe1 = new Function('radius', 
 `this.radius = radius;
 this.draw = function() {
     console.log('draw');
 }`);

const circle = new circe1(1) 
const another = new Circle(4);
import { Rectangle , Square } from "./Squares.js";
import Circle from "./Circle.js";

let rect1 = new Rectangle("blue" , 5 , 8);
console.log(rect1.getArea());


let sqr1  = new Square("pink" , 3 , 3);
console.log(sqr1.getArea());


let Circle1 = new Circle("red" , 5 , 5 , 3);
console.log(Circle1.getArea());

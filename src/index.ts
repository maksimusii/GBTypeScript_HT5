import { MyCircle } from './MyCircle.js';
import { MyRectangle } from './MyRectangle.js'

const circle = new MyCircle(10, 10, 10)
const rectungle = new MyRectangle(10, 20, 100, 200)
console.log(circle.squre())
console.log(circle.move(10, 30))

console.log(rectungle.squre())
console.log(rectungle.move(10, 30))



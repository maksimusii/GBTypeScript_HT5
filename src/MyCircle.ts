import { MyAreaPrimitive2D } from './MyAreaPrimitive2D.js'

export class MyCircle extends MyAreaPrimitive2D  {
  radius: number
  circleX: number
  circleY: number
  constructor(primitive: object, square: number, radius: number, circleX: number, circleY: number){
    super(primitive, square)
    this.radius = radius
    this.circleX = circleX
    this.circleY = circleY
  }
}
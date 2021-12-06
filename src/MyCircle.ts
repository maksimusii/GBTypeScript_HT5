import { MyAreaPrimitive2D } from './MyAreaPrimitive2D.js'

export class MyCircle extends MyAreaPrimitive2D  {
  private radius: number
  
  constructor(posX: number, posY: number, radius: number){
    super(posX, posY)
    this.radius = radius
  }
  public squre(): number {
    return Math.PI * this.radius * this.radius
  }
}
import { MyAreaPrimitive2D } from './MyAreaPrimitive2D.js'

export class MyRectangle extends MyAreaPrimitive2D {
  public widht: number
  public height: number
  
  constructor(posX: number, posY: number, widht: number, height: number){
    super(posX, posY)
    this.widht = widht
    this.height = height
  }
  public squre(): number {
    return this.widht * this.height
  }
}
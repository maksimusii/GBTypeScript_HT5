import { MyAreaPrimitive2D } from './MyAreaPrimitive2D.js'

export class MyRectangle extends MyAreaPrimitive2D {
  public w: number
  public h: number
  public x: number
  public y: number
  constructor (w: number, h: number, x: number, y: number, primitive: object, square: number) {
    super(primitive, square)
    this.w = w
    this.h = h
    this.x = x
    this.y = y
  }
}
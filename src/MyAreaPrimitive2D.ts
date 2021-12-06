import { MyGraphicsPrimitive2D } from './MyGraphicsPrimitive2D.js';

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  public square: number
  constructor(primitive: object, square: number) {
    super(primitive)
    this.square = square
  }
  
}
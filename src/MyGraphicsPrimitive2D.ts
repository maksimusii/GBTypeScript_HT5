export abstract class MyGraphicsPrimitive2D {
  public posX: number
  public posY: number
  
  constructor (posX: number, posY: number) 
  {
    this.posX = posX
    this.posY = posY
  }
  public move(offsetX: number, offsetY: number):  Array<number> {
    const newCoordinates: Array<number> = [offsetX + this.posX, offsetY + this.posY]
    return newCoordinates
  }
}

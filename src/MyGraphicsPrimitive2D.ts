export abstract class MyGraphicsPrimitive2D {
  public primitive: object
  
  constructor (primitive: object) 
  {
    this.primitive = primitive
  }
  public move(offset: object) {
    return `перемещение ${offset}`
  }
}

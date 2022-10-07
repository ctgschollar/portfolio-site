export interface Item {
  name: string,
  type: string,
  height:string,
  cls:string,
  blockWidth?:number
}

export interface Block {
  title: string,
  text?: string[],
  image?:any,
}
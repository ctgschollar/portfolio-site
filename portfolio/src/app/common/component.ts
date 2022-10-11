export interface Item {
  name: string,
  type: string,
  height:string,
  cls:string,
  blockWidth?:number
  navigable?: boolean
}

export interface Block {
  title: string,
  text?: string[],
  image?:any,
}
export class NewsConstructor {

  constructor(
    public title: string,
    public date: string,
    public year: string,
    public location: string,
    public description: string,
    public src: string,
    public open: boolean
  ) {  }
}
export class Homework {
  Name!: string;
  Description!: string;
  Date!: string;
  linkToDownload!: string;
  imagePath!: string;

  constructor(Name: string, Description: string, Date: string, linkToDownload: string,imagePath:string) {
    this.Name = Name;
    this.Description = Description;
    this.Date = Date;
    this.linkToDownload =linkToDownload;
    this.imagePath = imagePath;
  }
}

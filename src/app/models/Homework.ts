export class Homework {
  Name!: string;
  Description!: string;
  Date!: string;
  linkToGitub!: string;
  constructor(Name: string, Description: string, Date: string, linkToGithub: string) {
    this.Name = Name;
    this.Description = Description;
    this.Date = Date;
    this.linkToGitub =linkToGithub;
  }
}

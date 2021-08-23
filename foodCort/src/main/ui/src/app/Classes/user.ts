export class User {
  log: string;
  psw: string;


  constructor(login: string, password: string) {
    this.log = login;
    this.psw = password;
  }

}

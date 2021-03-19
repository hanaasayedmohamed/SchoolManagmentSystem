export interface loginRequest {
  Username: string;
  Password: string;
}
export class logincrentials implements loginRequest {
  Username: string="";
  Password: string ="" ;

  //constructor logincrentials(userName: string, password: string) {
  //  this.Username = userName;
  //  this.Password = password;
  //}
}

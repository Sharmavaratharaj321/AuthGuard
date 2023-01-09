// import { environment } from './../../enviroment/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

enum Role {
  Admin = 1,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  navigate(arg0: string[]): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }
  // apiUrl: any = environment.apiURL;
  private isRole: any = new BehaviorSubject<number>(Role.Admin);
  isRoleStore = this.isRole.asObservable();

  constructor(private http: HttpClient) { }
  // postMoveies(body: any): Observable<any> {
  //   return this.http.post(this.apiUrl, body);
  // }
  // getdata(): Observable<any> {
  //   return this.http.get("./../../assets/token.json");
  // }
  getToken(body: any): Observable<any> {
    return this.http.get("assets/tocken.json").pipe(map((res: any) => {
      if (res[0].token) {
        let jwtData = res[0].token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        if (decodedJwtData) {
          if (decodedJwtData.name == body.Username) {
            localStorage.setItem("name", decodedJwtData.name);
          } else {
            alert("Username Incorrect")
            return false;
          }
          if (decodedJwtData.password == body.Password) {
          } else {
            alert("Password Incorrect")
            return false;
          }
          decodedJwtData.Role == 1 ? alert("This Is Admin Login") : decodedJwtData.Role == 2 ? alert("User") : alert("Others");
          localStorage.setItem("token", res[0].token);
        }
      } return res;
    }))
  }

  IsloggerOut() {
    localStorage.clear();
  }
}

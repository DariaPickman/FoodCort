import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options = {responseType: 'text' as const};
  constructor(private Http: HttpClient) { }


  postAuth(log: string, psw: string){
    return this.Http.post("http://localhost:8081/auth", JSON.stringify({log: log, psw: psw}), this.options);
  }

}


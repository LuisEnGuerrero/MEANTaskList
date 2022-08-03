import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = environment.baseUrl;
  private _user: any = null;

  get user() {
    return this._user;
  }

  constructor(private httpClient: HttpClient ) { }

  login(data: any) {

    const { email, password } = data;
    return this.httpClient.post<any>(`${this.baseURL}/auth/login`, data)
                          .pipe(
                            tap( (res) => {
                              if(res.ok){
                                this._user = {
                                  id: res.id,
                                  username: res.username,
                                  token: res.token,
                                };
                              }else{
                                  this._user = null;
                              };
                            }),
                            map( res => res.ok ),
                            catchError(err => of(err.error.msg))
                          )
  };

  register(data: any) {

    const { email, password } = data;
    return this.httpClient.post<any>(`${this.baseURL}/auth/register`, data)
                          .pipe(
                            tap( (res) => {
                              if(res.ok){
                                this._user = {
                                  id: res.id,
                                  username: res.username,
                                  token: res.token,
                                };
                              }else{
                                  this._user = null;
                              };
                            }),
                            map( res => res.ok ),
                            catchError(err => of(err.error.msg))
                          )
  };

  validarToken(): Observable<boolean> {
    const token = JSON.parse(localStorage.getItem("user")!);

    if(token) {
      return new Observable( (subscriber) => {
        subscriber.next(true);
      });
    }else{
      return new Observable( (subscriber) => {
        subscriber.next(false);
      });
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseURL = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem("user")!);

  get user() {
    return this._user;
  }

  constructor(private httpClient: HttpClient ) { }

  read() {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.get<any>(`${this.baseURL}/task/list`, { headers })
  };

  create(valueTitle: string, valueDetail: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.post<any>(`${this.baseURL}/task/create`, { title: valueTitle, detail: valueDetail }, { headers })
  };

  update(id: string, valueTitle: string, valueDetail: string,) {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.put<any>(`${this.baseURL}/task/update/${id}`, { title: valueTitle, detail: valueDetail }, { headers })
  };

  delete(id: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.delete<any>(`${this.baseURL}/task/delete/${id}`, { headers })
  };

}

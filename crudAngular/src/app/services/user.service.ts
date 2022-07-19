import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/05571193-9ba3-40dd-b589-7c8cdf9cb85c';
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  //Retorna a lista de usuarios READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva usuario no banco CREATE
  postUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user,this.httpOptions);
  }

  //Exclui usuario no banco DELETE
  deleteUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita usuario UPDATE
  updateUser(id:string,user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`,user,this.httpOptions)
  }

  //Lista usuario unico
  getUser(id:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}

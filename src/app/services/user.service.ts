import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getAllGithubUsers():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}?per_page=20`);
  }

  getGithubUserByUsername(username: string):Observable<any>{
    return this.http.get<any>(`${this.url}/${username}`);
  }
}

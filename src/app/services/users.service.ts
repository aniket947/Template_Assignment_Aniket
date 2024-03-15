import { Injectable } from '@angular/core';
import { Template } from '../models/clsTemplate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  allUsers: Template[] | undefined = [];
  selectedUserIndex: number = -1;
  loggedInUser: string | undefined;
  isReload: boolean = true;

  constructor(private httpClient: HttpClient) {

  }

  addUser(data: Template) {
    this.allUsers?.push(data);
  }

  getAllUsers(): Observable<any> {// api call for getting stored users data from json file
    return this.httpClient.get('./assets/users.json');
  }

  getLoginCredentials(): Observable<any>{// api call for getting login data from json file
    return this.httpClient.get('./assets/registeredUsers.json');
  }
}

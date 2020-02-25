import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { users } from 'src/app/core/user.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserById(id: number): Observable<User> {
    console.log(users.find(item => item.id === id), id);
    return of(users.find(item => item.id === id));
  }
}

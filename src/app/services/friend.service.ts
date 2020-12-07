import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

constructor(private http: HttpClient) { }

addUser(friend: Friend){
  let friends = [];
  if(localStorage.getItem('Friends')){
    friends = JSON.parse(localStorage.getItem('Friends'));
    friends = [friend, ...friends];
  }else{
    friends = [friend];
  }
  localStorage.setItem('Friends', JSON.stringify(friends));

}

getAllFriends(): Observable<string[]>{
  return this.http.get<string[]>('http://localhost:5000/api/friend');
}

}

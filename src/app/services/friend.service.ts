import { Injectable } from '@angular/core';
import { Friend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

constructor() { }

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

}

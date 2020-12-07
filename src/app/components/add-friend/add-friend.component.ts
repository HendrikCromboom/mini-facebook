import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Friend } from 'src/app/model/friend';
import { FriendService } from 'src/app/services/friend.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {

  registrationForm: FormGroup;
  friend: Friend;
  userSubmitted: boolean

  constructor(private fb: FormBuilder, private friendService: FriendService, private alertify: AlertifyService) { }

  ngOnInit(): void {

   this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({

      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
      favLang: [null, Validators.required]

    })
  }

  get firstName(){
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName(){
    return this.registrationForm.get('lastName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  get favLang(){
    return this.registrationForm.get('favLang') as FormControl;
  }


  onSubmit(){
    console.log(this.registrationForm);

    this.userSubmitted = true;

    if(this.registrationForm.valid){

     // this.user = Object.assign(this.user, this.registrationForm.value); replaced by interface/model
      this.friendService.addUser(this.friendData());
      this.registrationForm.reset(); // clears form
      this.userSubmitted = false;
      this.alertify.success('Great Succes!');
    }else{
      this.alertify.error('Something wrong...');

    }

  }

  friendData():Friend{
    return this.friend = {
      firstName: this.firstName.value,
      lastName:this.lastName.value,
      email: this.email.value,
      mobile: this.mobile.value,
      favLang: this.favLang.value
    }
  }



}

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Output()
  public onFormData: EventEmitter<User> = new EventEmitter();

  public userForm!: FormGroup;

  constructor( private _fb: FormBuilder ) {
    this.userForm = this._fb.group({
      fullName: [ , Validators.required],
      email:    [ , Validators.required],
      address:  [ , Validators.required]
    });
  }

  submit():void {
    if( this.userForm.invalid ) return;

    this.onFormData.emit( this.userForm.value );
    this.formReset();
  }
  
  formReset():void {
    this.userForm.reset();
    
    for( const key in this.userForm.value ) {
      this.userForm.controls[key].clearValidators();
      this.userForm.controls[key].updateValueAndValidity();
    }
  }

  
  

}

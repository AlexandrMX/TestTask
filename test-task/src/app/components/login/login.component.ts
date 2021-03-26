import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public email: FormControl = new FormControl('');
  public password: FormControl = new FormControl('');
  constructor() { }


  ngOnInit(): void {
}
}

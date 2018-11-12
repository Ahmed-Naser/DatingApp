import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authServive: AuthService) {}

  ngOnInit() {}
  register() {
    this.authServive.register(this.model).subscribe(
      () => {
        console.log('registeration successful');
      },
      error => {
        console.log(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Canceled');
  }
}

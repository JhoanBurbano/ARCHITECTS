import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _userService: UserService
    ) {
    this.signupForm=this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      rol: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  signUp(){
    const USUARIO: Usuario ={
      name: this.signupForm.get('name')?.value,
      lastname: this.signupForm.get('lastname')?.value,
      rol: this.signupForm.get('rol')?.value,
      number: this.signupForm.get('number')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,

    }
    console.log(USUARIO);
      this._userService.signupUser(USUARIO).subscribe(data => {
      this.toastr.success('Usuario registrado', 'El Usuario se registro con éxito.')
      this.router.navigate(['/login']);
      console.log(data)
    }, error =>{
      this.toastr.error('No se pudo registrar el usuario', 'Ocurrio un Error')
      console.log(error)
    })
    this.router.navigate(['/'])
  }



}

import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-matdialogauth',
  templateUrl: './matdialogauth.component.html',
  styleUrls: ['./matdialogauth.component.css']
})
export class MatdialogauthComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl = '';
  form !: FormGroup;
  registerEntreprise !: FormGroup;
  registerCandidat !: FormGroup;
  constructor(

      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit(): void{
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.registerCandidat = this.formBuilder.group ({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        niveau: ['', Validators.required],
        specialite: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        numero: ['', Validators.required],
    });
      this.registerEntreprise = this.formBuilder.group ({
        name: ['', Validators.required],
        domain: ['', Validators.required],
        discription: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
      // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  f(): void { }
  onSubmit(): void {}
 yourFn(event: any): void{
    console.log(event.tab.textLabel);
}
loginFn(event: any): void{
  console.log(event.tab.textLabel);
}
registerFn(event: any): void{
  console.log(event.tab.textLabel);
}
}

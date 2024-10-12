import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../core/shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthentificationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next:(resp:any)=>{
        // this.user=resp.data
        // console.log("list user :"+JSON.stringify(resp.data))
        // this.tokenStorage.saveToken(this.user.token);
       
         },
         complete:()=>{
          // console.log("resp complete")
          this.router.navigate(['/admin'])
          // this.loginMethod(this.user);
          },
      
      error:(error:any)=>{
        console.log("resp error :",(error.error.message))  
        
        
        
        if (error.status == 0) {
          // this.messageService.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: this.translateService.instant('MESSAGE.ERROR0') });
         
          // this.messageService.add({ severity: 'warn', summary: 'Warning', detail: this.translateService.instant('MESSAGE.ERROR0'), life: 7000 });
          } else if (error.status == 500){
              // this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error.error.message), life: 7000 });
            console.log('Erreur : '+JSON.stringify(error.error.message))
          }
          
          else {
              // this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.instant("MESSAGE.ERROR4"), life: 7000 });

            console.log('Une erreur s\'est produite. ')
         
          }
      }
    })
}


  

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}

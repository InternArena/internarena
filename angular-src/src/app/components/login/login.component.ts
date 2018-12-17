import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;
    email: String;

    companyFront: boolean = false;
    userFront: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService) {
    }

    ngOnInit() {
    }
    
    choosing(){//front
        return (this.companyFront == false && this.userFront == false);
    }    
    trueCompany(){//front
        return this.companyFront;
    }
    trueUser(){//front
        return this.userFront;
    }
    onClickUser(){//front
        this.userFront = true;
    }    
    onClickCompany(){//front
        this.companyFront = true;
    }

    onLoginSubmitUser(){
        const user = {
            username: this.username,
            password: this.password
        }
        this.authService.authenticateUser(user).subscribe(data => {
            if(data.success){
                this.authService.storeDataUser(data.token, data.user);
                this.flashMessage.show('You are logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                this.router.navigate(['dashboard']);
            }else{
                this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger', 
                    timeout:3000
                });
                this.router.navigate(['login']);
            }       
        });
    }
    onLoginSubmitCompany(){
        const company = {
            email: this.email,
            password: this.password
        }
        this.authService.authenticateCompany(company).subscribe(data => {
            if(data.success){
                this.authService.storeDataCompany(data.token, data.company);
                this.flashMessage.show('Company logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                this.router.navigate(['dashboard']);
            }else{
                this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger', 
                    timeout:3000
                });
                this.router.navigate(['login']);
            }       
        });
    }
}

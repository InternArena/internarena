import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;

    companyFront: boolean = false;
    userFront: boolean = false;

    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private authService: AuthService,
        private router: Router) { 
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
    onClickUser(){
        this.userFront = true;
    }    
    onClickCompany(){
        this.companyFront = true;
    }

    onRegisterSubmitUser(){
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }
        if(!this.validateService.validateRegisterUser(user)){
            this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }
        if(!this.validateService.validateEmailUser(user.email)){
            this.flashMessage.show('Please valid email', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }
        this.authService.registerUser(user).subscribe(data => {
            if(data.success){
                this.flashMessage.show('Register success', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/login']);
            }else{
                this.flashMessage.show('Register failed', {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/register']);
            }
        });
    }
    onRegisterSubmitCompany(){
        const company = {
            name: this.name,
            email: this.email,
            password: this.password
        }
        if(!this.validateService.validateRegisterCompany(company)){
            this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }
        if(!this.validateService.validateEmailCompany(company.email)){
            this.flashMessage.show('Please valid email', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }
        this.authService.registerCompany(company).subscribe(data => {
            if(data.success){
                this.flashMessage.show('Register success', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/login']);
            }else{
                this.flashMessage.show('Register failed', {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/register']);
            }
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    name: String;
    email: String;
    username: String;
    description: String;
    address: String;
    age: number;

    industry: String;
    site: String;

    companyFront: boolean = false;
    userFront: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService) { 
    }

    ngOnInit() {
    }

    trueCompany(){
        return this.authService.loggedInCompany();
    }
    trueUser(){
        return this.authService.loggedInUser();
    } 
    onEditSubmitUser(){ 
        this.authService.getProfileUser().subscribe(profile => {
            const userProfile = {
                name: this.name,
                email: this.email,
                username: profile.user.username,
                description: this.description,
                address: this.address,
                age: this.age
            };
            this.authService.editProfileUser(userProfile).subscribe(data => {
                if(data.success){
                    this.flashMessage.show('Edit success', {cssClass: 'alert-success', timeout: 3000});
                    this.router.navigate(['/profile']);
                }else{
                    this.flashMessage.show('Edit failed', {cssClass: 'alert-danger', timeout: 3000});
                    this.router.navigate(['/profile']);
                }
            });
        },
        err => {
            console.log(err);
            return false;
        });
    }
    onEditSubmitCompany(){ 
        this.authService.getProfileCompany().subscribe(profile => {
            const companyProfile = {
                name: this.name,
                email: profile.company.email,
                description: this.description,
                industry: this.industry,
                address: this.address,
                site: this.site
            };
            this.authService.editProfileCompany(companyProfile).subscribe(data => {
                if(data.success){
                    this.flashMessage.show('Edit success', {cssClass: 'alert-success', timeout: 3000});
                    this.router.navigate(['/profile']);
                }else{
                    this.flashMessage.show('Edit failed', {cssClass: 'alert-danger', timeout: 3000});
                    this.router.navigate(['/profile']);
                }
            });
        },
        err => {
            console.log(err);
            return false;
        });
    }
}

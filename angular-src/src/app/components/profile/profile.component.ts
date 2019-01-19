import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userProfile: Object;
    companyProfile: Object;

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    ngOnInit() {
        if(this.authService.loggedInCompany()){
            this.authService.getFullProfileCompany().subscribe(profile => {
                console.log(profile.company);
                this.companyProfile = profile.company;
            }, 
            err => {
                console.log(err);
                return false;
            });
        }else if(this.authService.loggedInUser()){
            this.authService.getFullProfileUser().subscribe(profile => {
                console.log(profile.user);
                this.userProfile = profile.user;
            },
            err =>{
                console.log(err);
                return false;
            });
        }
    }
        /*
    onClickEditProfile(){
        this.authService.getFullProfileUser().subscribe(profile =>{
            console.log(1);
            
        },
        err => {
            console.log(err);
            return false;
        });
    } 
         */
}

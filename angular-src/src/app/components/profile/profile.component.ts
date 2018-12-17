import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: Object;
    company: Object;

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    ngOnInit() {
        //console.log(this.authService.loggedInCompany());
        if(this.authService.loggedInCompany()){
            this.authService.getProfileCompany().subscribe(profile => {
                console.log(profile.company);
                this.company = profile.company;
            }, 
            err => {
                console.log(err);
                return false;
            });
        }else if(this.authService.loggedInUser()){
            this.authService.getProfileUser().subscribe(profile => {
                console.log(profile.user);
                this.user = profile.user;
            },
            err =>{
                console.log(err);
                return false;
            });
        }
    }

    
}

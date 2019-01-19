import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.css']
})
export class EditCvComponent implements OnInit {
    name: String;
    education: String;
    description: String;


    companyFront: boolean = false;
    userFront: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService) { 
    }

    ngOnInit() {
    }
    trueUser(){
        return this.authService.loggedInUser();
    } 
    onEditCvSubmitUser(){ 
        this.authService.getProfileUser().subscribe(profile => {
            const cvData = {
                education: this.education,
                description: this.description,
                username: profile.user.username
	        };
            this.authService.editCvUser(cvData).subscribe(data => {
                if(data.success){
                    this.flashMessage.show('Edit cv success', {cssClass: 'alert-success', timeout: 3000});
                    this.router.navigate(['/profile']);
                }else{
                    this.flashMessage.show('Edit cv failed', {cssClass: 'alert-danger', timeout: 3000});
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

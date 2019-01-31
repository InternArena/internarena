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
    skills: String[] = [];
    skillsLevel: number[] = [];
    skillsNr:number = 0;
   
    education:{
	    id_education: number,
	    details: String
    }[];

    name: String;
    skillName: String;
    description: String;
    skillLevel: number = 0;

    userFront: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService) { 
    }

    ngOnInit() {
        this.skillsNr = 0;
    }
    trueUser(){
        return this.authService.loggedInUser();
    } 
    onClickAddSkill(){
        this.skills.push(this.skillName); 
        this.skillsLevel.push(this.skillLevel);
        this.skillName = "";
    }
    updateCVEditor(){
    }
    onEditCvSubmitUser(){
        this.authService.getProfileUser().subscribe(profile => {
            const cvData = {
                name: this.name,
                id_user: profile.user.id_user,
                username: profile.user.username,
		        description: this.description,
                skills: this.skills,
                skillsLevel: this.skillsLevel
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

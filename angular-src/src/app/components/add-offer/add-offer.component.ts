import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
    name: String;
    description: String;
    id_company: number;

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
    onAddOfferSubmit(){
        if(!this.trueCompany()){
            return;
        }
        this.authService.getProfileCompany().subscribe(profile => {
            const jobOffer = {
                name: this.name,
                description: this.description,
                id_company: profile.company.id_company
            };
            ///checker needed
            this.authService.addJobOffer(jobOffer).subscribe(data => {
                if(data.success){
                    this.flashMessage.show('Job offer added', {cssClass: 'alert-success', timeout:3000});
                    this.router.navigate(['/profile']);
                }else{
                    this.flashMessage.show('Job offer failed', {cssClass: 'alert-danger', timeout:3000});
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

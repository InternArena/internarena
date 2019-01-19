import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    jobOffers: {
        id_offer: number,
        name: String,
        description: String,
        id_company: number
    }[];
    
    firstOffer: number = 0;
    offersOnPage: number = 10;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService) { 
    }

    ngOnInit() {
        this.updateJobOffers();        
    }
    firstPage(){
        return (this.firstOffer == 0);
    }
    onClickPrevPage(){
        if(this.firstOffer >= this.offersOnPage){
            this.firstOffer = this.firstOffer - this.offersOnPage;
        }    
        this.updateJobOffers();
    }
    onClickNextPage(){
        this.firstOffer = this.firstOffer + this.offersOnPage;
        this.updateJobOffers();
    }
    updateJobOffers(){
        if(this.authService.loggedInCompany()){
            /*this.authService.getFullProfileCompany().subscribe(profile => {
                console.log(profile.company);
                this.companyProfile = profile.company;
            }, 
            err => {
                console.log(err);
                return false;
            });*/
        }else if(this.authService.loggedInUser()){
            this.authService.getJobOffers(this.firstOffer).subscribe(currentJobOffers => {
                this.jobOffers = currentJobOffers['response'];
                console.log(this.jobOffers);
            },
            err =>{
                console.log(err);
                return false;
            });
        }         
    }
}

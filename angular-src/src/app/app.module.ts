import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { EditCvComponent } from './components/edit-cv/edit-cv.component';
import { TestingComponent } from './components/testing/testing.component';
import { AddTestComponent } from './components/add-test/add-test.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

import { InfoService } from './services/info.service';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'edit-profile', component: EditProfileComponent, canActivate:[AuthGuard]},
    {path:'add-offer', component: AddOfferComponent, canActivate:[AuthGuard]},
    {path:'edit-cv', component: EditCvComponent, canActivate:[AuthGuard]},
    {path:'testing', component: TestingComponent, canActivate:[AuthGuard]},
    {path:'add-test', component: AddTestComponent, canActivate:[AuthGuard]}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        ProfileComponent,
        EditProfileComponent,
        AddOfferComponent,
        EditCvComponent,
        TestingComponent,
        AddTestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}, 
        ValidateService,
        AuthService,
        InfoService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

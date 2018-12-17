import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

const urlPath = 'http://35.231.234.185:8080';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    company: any;

    constructor(private http: Http) { }

    registerUser(user){
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/users/register', user, {headers: headers})
            .map(res => res.json());
    }
    registerCompany(company){
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/companies/register', company, {headers: headers})
            .map(res => res.json());
    }

    authenticateUser(user){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(urlPath + '/users/authenticate', user, {headers: headers})
            .map(res => res.json());
    }
    authenticateCompany(company){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(urlPath + '/companies/authenticate', company, {headers: headers})
            .map(res => res.json());
    }
    
    getProfileUser(){
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/users/profile', {headers: headers})
            .map(res => res.json());
    }
    getProfileCompany(){
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/companies/profile', {headers: headers})
            .map(res => res.json());
    }

    storeDataUser(token, user){
        localStorage.setItem('type', 'user');
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    storeDataCompany(token, company){
        localStorage.setItem('type', 'company');
        localStorage.setItem('id_token', token);
        localStorage.setItem('company', JSON.stringify(company));
        this.authToken = token;
        this.company = company;
    }
    
    loggedIn(){
        return tokenNotExpired('id_token');
    }
    loggedInUser(){
        return (localStorage.getItem('type') == 'user');
    }
    loggedInCompany(){
        return (localStorage.getItem('type') == 'company');
    } 

    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }    

    logout(){
        this.authToken = null;
        this.user = null;
        this.company = null;
        localStorage.clear();
    }
}

webpackJsonp([1,4],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegisterUser = function (user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined)
            return false;
        return true;
    };
    ValidateService.prototype.validateEmailUser = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateRegisterCompany = function (company) {
        if (company.name == undefined ||
            company.email == undefined ||
            company.password == undefined)
            return false;
        return true;
    };
    ValidateService.prototype.validateEmailCompany = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/validate.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var urlPath = 'http://35.231.234.185:8080';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getJobOffers = function (firstOfferIndex) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('FirstOfferIndex', firstOfferIndex);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/users/get-job-offers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editCvUser = function (cvData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/users/edit-cv', cvData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addJobOffer = function (jobOffer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/companies/add-job-offer', jobOffer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/companies/register', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(urlPath + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(urlPath + '/companies/authenticate', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editProfileUser = function (userProfile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/users/edit-full-profile', userProfile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editProfileCompany = function (companyProfile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(urlPath + '/companies/edit-full-profile', companyProfile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFullProfileUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/users/full-profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFullProfileCompany = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/companies/full-profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfileUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfileCompany = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(urlPath + '/companies/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeDataUser = function (token, user) {
        localStorage.setItem('type', 'user');
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeDataCompany = function (token, company) {
        localStorage.setItem('type', 'company');
        localStorage.setItem('id_token', token);
        localStorage.setItem('company', JSON.stringify(company));
        this.authToken = token;
        this.company = company;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loggedInUser = function () {
        return (localStorage.getItem('type') == 'user');
    };
    AuthService.prototype.loggedInCompany = function () {
        return (localStorage.getItem('type') == 'company');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.company = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/auth.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(517);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/main.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(703),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_edit_profile_edit_profile_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_offer_add_offer_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_cv_edit_cv_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_testing_testing_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_test_add_test_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_info_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_validate_service__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_12__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-offer', component: __WEBPACK_IMPORTED_MODULE_13__components_add_offer_add_offer_component__["a" /* AddOfferComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-cv', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_cv_edit_cv_component__["a" /* EditCvComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'testing', component: __WEBPACK_IMPORTED_MODULE_15__components_testing_testing_component__["a" /* TestingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-test', component: __WEBPACK_IMPORTED_MODULE_16__components_add_test_add_test_component__["a" /* AddTestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_offer_add_offer_component__["a" /* AddOfferComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_cv_edit_cv_component__["a" /* EditCvComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_testing_testing_component__["a" /* TestingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_add_test_add_test_component__["a" /* AddTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_22__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_info_service__["a" /* InfoService */],
                __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/app.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddOfferComponent = (function () {
    function AddOfferComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AddOfferComponent.prototype.ngOnInit = function () {
    };
    AddOfferComponent.prototype.trueCompany = function () {
        return this.authService.loggedInCompany();
    };
    AddOfferComponent.prototype.onAddOfferSubmit = function () {
        var _this = this;
        if (!this.trueCompany()) {
            return;
        }
        this.authService.getProfileCompany().subscribe(function (profile) {
            var jobOffer = {
                name: _this.name,
                description: _this.description,
                id_company: profile.company.id_company
            };
            ///checker needed
            _this.authService.addJobOffer(jobOffer).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Job offer added', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this.flashMessage.show('Job offer failed', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddOfferComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-offer',
            template: __webpack_require__(704),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AddOfferComponent);
    return AddOfferComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/add-offer.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTestComponent = (function () {
    function AddTestComponent() {
    }
    AddTestComponent.prototype.ngOnInit = function () {
    };
    AddTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-test',
            template: __webpack_require__(705),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddTestComponent);
    return AddTestComponent;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/add-test.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.firstOffer = 0;
        this.offersOnPage = 10;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.updateJobOffers();
    };
    DashboardComponent.prototype.firstPage = function () {
        return (this.firstOffer == 0);
    };
    DashboardComponent.prototype.onClickPrevPage = function () {
        if (this.firstOffer >= this.offersOnPage) {
            this.firstOffer = this.firstOffer - this.offersOnPage;
        }
        this.updateJobOffers();
    };
    DashboardComponent.prototype.onClickNextPage = function () {
        this.firstOffer = this.firstOffer + this.offersOnPage;
        this.updateJobOffers();
    };
    DashboardComponent.prototype.updateJobOffers = function () {
        var _this = this;
        if (this.authService.loggedInCompany()) {
        }
        else if (this.authService.loggedInUser()) {
            this.authService.getJobOffers(this.firstOffer).subscribe(function (currentJobOffers) {
                _this.jobOffers = currentJobOffers['response'];
                console.log(_this.jobOffers);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(706),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCvComponent = (function () {
    function EditCvComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.skills = [];
        this.skillsNr = 0;
        this.userFront = false;
    }
    EditCvComponent.prototype.ngOnInit = function () {
        this.skillsNr = 0;
    };
    EditCvComponent.prototype.trueUser = function () {
        return this.authService.loggedInUser();
    };
    EditCvComponent.prototype.onClickAddSkill = function () {
        this.skills.push(this.skillName);
        this.skillName = "";
    };
    EditCvComponent.prototype.updateCVEditor = function () {
    };
    EditCvComponent.prototype.onEditCvSubmitUser = function () {
        var _this = this;
        this.authService.getProfileUser().subscribe(function (profile) {
            var cvData = {
                name: _this.name,
                id_user: profile.user.id_user,
                username: profile.user.username,
                description: _this.description,
                skills: _this.skills
            };
            _this.authService.editCvUser(cvData).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Edit cv success', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this.flashMessage.show('Edit cv failed', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditCvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-cv',
            template: __webpack_require__(707),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], EditCvComponent);
    return EditCvComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/edit-cv.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = (function () {
    function EditProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.companyFront = false;
        this.userFront = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.trueCompany = function () {
        return this.authService.loggedInCompany();
    };
    EditProfileComponent.prototype.trueUser = function () {
        return this.authService.loggedInUser();
    };
    EditProfileComponent.prototype.onEditSubmitUser = function () {
        var _this = this;
        this.authService.getProfileUser().subscribe(function (profile) {
            var userProfile = {
                name: _this.name,
                email: _this.email,
                username: profile.user.username,
                description: _this.description,
                address: _this.address,
                age: _this.age
            };
            _this.authService.editProfileUser(userProfile).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Edit success', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this.flashMessage.show('Edit failed', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditProfileComponent.prototype.onEditSubmitCompany = function () {
        var _this = this;
        this.authService.getProfileCompany().subscribe(function (profile) {
            var companyProfile = {
                name: _this.name,
                email: profile.company.email,
                description: _this.description,
                industry: _this.industry,
                address: _this.address,
                site: _this.site
            };
            _this.authService.editProfileCompany(companyProfile).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Edit success', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this.flashMessage.show('Edit failed', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/profile']);
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(708),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], EditProfileComponent);
    return EditProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/edit-profile.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(709),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/home.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.companyFront = false;
        this.userFront = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.choosing = function () {
        return (this.companyFront == false && this.userFront == false);
    };
    LoginComponent.prototype.trueCompany = function () {
        return this.companyFront;
    };
    LoginComponent.prototype.trueUser = function () {
        return this.userFront;
    };
    LoginComponent.prototype.onClickUser = function () {
        this.userFront = true;
    };
    LoginComponent.prototype.onClickCompany = function () {
        this.companyFront = true;
    };
    LoginComponent.prototype.onLoginSubmitUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeDataUser(data.token, data.user);
                _this.flashMessage.show('You are logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent.prototype.onLoginSubmitCompany = function () {
        var _this = this;
        var company = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateCompany(company).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeDataCompany(data.token, data.company);
                _this.flashMessage.show('Company logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(710),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/login.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: "alert-success",
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(711),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedInCompany()) {
            this.authService.getFullProfileCompany().subscribe(function (profile) {
                console.log(profile.company);
                _this.companyProfile = profile.company;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else if (this.authService.loggedInUser()) {
            this.authService.getFullProfileUser().subscribe(function (profile) {
                console.log(profile.user);
                _this.userProfile = profile.user;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(712),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/profile.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.companyFront = false;
        this.userFront = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.choosing = function () {
        return (this.companyFront == false && this.userFront == false);
    };
    RegisterComponent.prototype.trueCompany = function () {
        return this.companyFront;
    };
    RegisterComponent.prototype.trueUser = function () {
        return this.userFront;
    };
    RegisterComponent.prototype.onClickUser = function () {
        this.userFront = true;
    };
    RegisterComponent.prototype.onClickCompany = function () {
        this.companyFront = true;
    };
    RegisterComponent.prototype.onRegisterSubmitUser = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegisterUser(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmailUser(user.email)) {
            this.flashMessage.show('Please valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Register success', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Register failed', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.onRegisterSubmitCompany = function () {
        var _this = this;
        var company = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegisterCompany(company)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmailCompany(company.email)) {
            this.flashMessage.show('Please valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerCompany(company).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Register success', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Register failed', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(713),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/register.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingComponent = (function () {
    function TestingComponent() {
    }
    TestingComponent.prototype.ngOnInit = function () {
    };
    TestingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testing',
            template: __webpack_require__(714),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestingComponent);
    return TestingComponent;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/testing.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var urlPath = 'http://35.231.234.185:8080';
var InfoService = (function () {
    function InfoService(http) {
        this.http = http;
    }
    InfoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], InfoService);
    return InfoService;
    var _a;
}());
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/info.service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vladt/internarena/angular-src/src/environment.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \n    <div class=\"col-md-6\" *ngIf=\"trueCompany()\">\n        <h2 class=\"page-header\">Edit company profile</h2>\n        <form (submit)=\"onAddOfferSubmit()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Description</label>\n                <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<p>\n  add-test works!\n</p>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"!firstPage()\" (click)=\"onClickPrevPage()\" class=\"btn btn-primary\">Previous page</button>\n<p> First Offer on site: {{this.firstOffer + 1}} </p> \n<p> Last Offer on site: {{this.firstOffer + 10}}</p>\n<button (click)=\"onClickNextPage()\" class=\"btn btn-primary\">Next page</button>\n<ul class=\"list-group\">\n    <li *ngFor=\"let i of this.jobOffers\" class=\"list-group-item\">\n        <div class=\"form-group\">\n            <h3>{{i['name']}}</h3>\n            <p>{{i['description']}}</p>\n        </div>\n    </li>\n</ul>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\" *ngIf=\"trueUser()\">\n        <h2 class=\"page-header\">Edit user CV</h2>\n        <form> \n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Description</label>\n                <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n\t    <div class=\"form-group row\">\n                <div class=\"col-lg-4\">\n\t\t    <label for=\"sel1\">Skills:</label>\n\t\t</div>\n                <div class=\"col-lg-4\">\n\t\t    <label for=\"sel2\">Level:</label>\n\t\t</div>\n\t    </div>\n            <div class=\"form-group row\">\n\t\t<!--<input type=\"text\" -->\n                <div class=\"col-lg-4\">\n                    <select [(ngModel)]=\"skillName\" name=\"skillName\" class=\"form-control\" id=\"sel1\">\n                        <option>JAVA</option>\n                        <option>C++</option>\n                \t<option>C</option>\n                        <option>SQL</option>\n                        <option>Python</option>\n                        <option>Javascript</option>\n                    </select>\n\t\t</div>\n                <div class=\"col-lg-4\">\n\t\t    <select [(ngModel)]=\"skillLevel\" name=\"skillLevel\" class=\"form-control\" id=\"sel2\">\n                        <option>Beginer</option>\n                        <option>Intermediate</option>\n                \t<option>Advanced</option>\n                    </select>\n\t\t</div>\n                <div class=\"col-lg-4\">\n               \t    <button (click)=\"onClickAddSkill()\" class=\"btn btn-primary\">Add skill</button>\n                </div>\n            </div>            \n            <ul class=\"list-group\">\n                <li *ngFor=\"let i of this.skills\" class=\"list-group-item\">\n                    <div class=\"form-group\">\n                        <p>{{i}}</p>\n                    </div>\n                </li>\n            </ul>   \n            <input (click)=\"onEditCvSubmitUser()\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit CV\">   \n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\" *ngIf=\"trueUser()\">\n        <h2 class=\"page-header\">Edit user profile</h2>\n        <form (submit)=\"onEditSubmitUser()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Description</label>\n                <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"text\" [(ngModel)]=\"address\" name=\"address\"class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Age</label>\n                <input type=\"number\" [(ngModel)]=\"age\" name=\"age\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"trueCompany()\">\n        <h2 class=\"page-header\">Edit company profile</h2>\n        <form (submit)=\"onEditSubmitCompany()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Description</label>\n                <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Industry</label>\n                <input type=\"text\" [(ngModel)]=\"industry\" name=\"industry\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1 class=\"display-3\">InternArena</h1>\n    <p class=\"lead\">Welcome</p>\n    <div>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n        <a class=\"btn btn-secondary\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3 class=\"text-center\"> For students</h3>\n        </div>\n        <div class=\"col-md-6\">\n            <h3 class=\"text-center\"> For companies</h3>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"choosing()\">\n    <h4>What do you represent?</h4>\n    <button (click)=\"onClickUser()\" class=\"btn btn-primary\">User</button>\n    <button (click)=\"onClickCompany()\" class=\"btn btn-primary\">Company</button>\n</div>\n<div class=\"row\" *ngIf=\"!choosing()\">\n    <div class=\"col-md-6\" *ngIf=\"trueUser()\">\n        <form (submit)=\"onLoginSubmitUser()\">  \n            <h2 class=\"page-header\">User login</h2>\n            <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n        </form>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"trueCompany()\">\n        <form (submit)=\"onLoginSubmitCompany()\">\n            <h2 class=\"page-header\">Company login</h2>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">InternArena</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n            </li>\n        </ul>\n\n    </div>\n</nav>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n    <div *ngIf=\"userProfile\" class=\"col-md-12\">\n        <h2 class=\"page-header\">{{userProfile.name}}</h2>\n        <ul class=\"list-group\">\n            <li *ngIf=\"userProfile.name\" class=\"list-group-item\">Name: {{userProfile.name}}</li>\n            <li *ngIf=\"userProfile.email\" class=\"list-group-item\">Email: {{userProfile.email}}</li>\n            <li *ngIf=\"userProfile.description\" class=\"list-group-item\">About: {{userProfile.description}}</li>\n            <li *ngIf=\"userProfile.address\" class=\"list-group-item\">Address: {{userProfile.address}}</li>\n            <li *ngIf=\"userProfile.age\" class=\"list-group-item\">Age: {{userProfile.age}}</li>\n        </ul>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/edit-profile']\">Edit profile</a>\n        </button>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/edit-cv']\">Edit CV</a>\n        </button>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/testing']\">Take test</a>\n        </button>\n    </div>\n    <div *ngIf=\"companyProfile\" class=\"col-md-12\">\n        <h2 class=\"page-header\">{{companyProfile.name}}</h2>\n        <ul class=\"list-group\">\n            <li *ngIf=\"companyProfile.name\" class=\"list-group-item\">Name: {{companyProfile.name}}</li>\n            <li *ngIf=\"companyProfile.email\" class=\"list-group-item\">Email: {{companyProfile.email}}</li>\n            <li *ngIf=\"companyProfile.description\" class=\"list-group-item\">About: {{companyProfile.description}}</li>\n            <li *ngIf=\"companyProfile.address\" class=\"list-group-item\">Address: {{companyProfile.address}}</li>\n            <li *ngIf=\"companyProfile.industry\" class=\"list-group-item\">Age: {{companyProfile.industry}}</li>\n        </ul>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/edit-profile']\">Edit profile</a>\n        </button>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/add-offer']\">Add offer</a>\n        </button>\n        <button class=\"btn\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/add-test']\">Add test</a>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"choosing()\">\n    <h4>What do you want to register?</h4>\n    <button (click)=\"onClickUser()\" class=\"btn btn-primary\">User</button>\n    <button (click)=\"onClickCompany()\" class=\"btn btn-primary\">Company</button>\n</div>\n<div class=\"row\" *ngIf=\"!choosing()\">\n    <div class=\"col-md-6\" *ngIf=\"trueUser()\">\n        <h2 class=\"page-header\">User Register</h2>\n        <form (submit)=\"onRegisterSubmitUser()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\"class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"trueCompany()\">\n        <h2 class=\"page-header\">Company Register</h2>\n        <form (submit)=\"onRegisterSubmitCompany()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\"class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ })

},[752]);
//# sourceMappingURL=main.bundle.map
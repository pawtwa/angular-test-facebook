(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/core/components/app/app.component.html":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>\n  Test Facebook\n</h1>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/core/components/app/app.component.scss":
/*!********************************************************!*\
  !*** ./src/app/core/components/app/app.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/app/app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/components/app/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-test-facebook';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/core/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/core/components/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home-page/home-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/home-page/home-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-posts-list></app-posts-list>\n"

/***/ }),

/***/ "./src/app/core/components/home-page/home-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/core/components/home-page/home-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/home-page/home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/home-page/home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/core/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/core/components/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/core/components/home-page/home-page.component.ts");




var routes = [
    {
        path: '',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pl */ "./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/core/components/app/app.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/core/components/home-page/home-page.component.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../posts/posts.module */ "./src/app/posts/posts.module.ts");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_4___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _posts_posts_module__WEBPACK_IMPORTED_MODULE_9__["PostsModule"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pl'
                }
            ],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/posts/components/posts-list-item/posts-list-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/posts/components/posts-list-item/posts-list-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-header\">\n    <h5><a [href]=\"getAuthorLink()\">\n        {{ post.author?.name }}\n    </a></h5>\n    <a [href]=\"getPostLink()\">{{ post.created_time | date:\"fullDate\" }}</a>\n  </div>\n  <img [src]=\"post.images[0]\" class=\"card-img-top\" alt=\"pic_2\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">{{ post.body }}\n    </p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/components/posts-list-item/posts-list-item.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/posts/components/posts-list-item/posts-list-item.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2NvbXBvbmVudHMvcG9zdHMtbGlzdC1pdGVtL3Bvc3RzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/posts/components/posts-list-item/posts-list-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/posts/components/posts-list-item/posts-list-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PostsListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListItemComponent", function() { return PostsListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsListItemComponent = /** @class */ (function () {
    function PostsListItemComponent(changeDetector) {
        this.changeDetector = changeDetector;
    }
    PostsListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.changeDetector.detectChanges();
        }, 2000);
    };
    PostsListItemComponent.prototype.getAuthorLink = function () {
        console.log('getAuthorLink');
        // synchro: Model -> View
        return "/author/" + this.post.author.id;
    };
    PostsListItemComponent.prototype.getPostLink = function () {
        return "/posts/" + this.post.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsListItemComponent.prototype, "post", void 0);
    PostsListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts-list-item',
            template: __webpack_require__(/*! ./posts-list-item.component.html */ "./src/app/posts/components/posts-list-item/posts-list-item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./posts-list-item.component.scss */ "./src/app/posts/components/posts-list-item/posts-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PostsListItemComponent);
    return PostsListItemComponent;
}());



/***/ }),

/***/ "./src/app/posts/components/posts-list/posts-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/posts/components/posts-list/posts-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-posts-list-item *ngFor=\"let post of posts; trackBy trackPost\" [post]=\"post\"></app-posts-list-item>"

/***/ }),

/***/ "./src/app/posts/components/posts-list/posts-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/posts/components/posts-list/posts-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvY29tcG9uZW50cy9wb3N0cy1saXN0L0Q6XFxXYXJzenRhdHlcXGFuZ3VsYXItbWFzdGVyLWNsYXNzLTFcXGFuZ3VsYXItdGVzdC1mYWNlYm9vay9zcmNcXGFwcFxccG9zdHNcXGNvbXBvbmVudHNcXHBvc3RzLWxpc3RcXHBvc3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvY29tcG9uZW50cy9wb3N0cy1saXN0L3Bvc3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/components/posts-list/posts-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/posts/components/posts-list/posts-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/posts/services/posts.service.ts");



var PostsListComponent = /** @class */ (function () {
    function PostsListComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.setupPosts();
    };
    PostsListComponent.prototype.trackPost = function (index) {
        return index;
    };
    PostsListComponent.prototype.setupPosts = function () {
        var _this = this;
        this.postsService.getPosts().subscribe({
            next: function (data) {
                _this.posts = data.posts;
            },
            error: function (error) {
                console.error('error', error);
            },
            complete: function () { }
        });
    };
    PostsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts-list',
            template: __webpack_require__(/*! ./posts-list.component.html */ "./src/app/posts/components/posts-list/posts-list.component.html"),
            styles: [__webpack_require__(/*! ./posts-list.component.scss */ "./src/app/posts/components/posts-list/posts-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostsListComponent);
    return PostsListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/posts-list/posts-list.component */ "./src/app/posts/components/posts-list/posts-list.component.ts");
/* harmony import */ var _components_posts_list_item_posts_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-list-item/posts-list-item.component */ "./src/app/posts/components/posts-list-item/posts-list-item.component.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/posts.service */ "./src/app/posts/services/posts.service.ts");






var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__["PostsListComponent"], _components_posts_list_item_posts_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PostsListItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _components_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_3__["PostsListComponent"]
            ],
            providers: [
                _services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/posts/services/posts.service.ts":
/*!*************************************************!*\
  !*** ./src/app/posts/services/posts.service.ts ***!
  \*************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].posts_url);
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])( /*{
          providedIn: 'root'
        }*/),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    posts_url: '/assets/posts.json'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Warsztaty\angular-master-class-1\angular-test-facebook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
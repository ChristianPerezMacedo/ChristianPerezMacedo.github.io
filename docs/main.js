(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrisipo/Desktop/myProjects/pages/ChristianPerezMacedo.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppComponent {
    constructor() {
        this.title = 'me';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 122, vars: 0, consts: [[1, "container"], [1, "short"], [1, "short--profile"], [1, "short--profile--imageContainer"], ["src", "/assets/images/profile.jpg"], [1, "short--profile--fullName"], [1, "short--cards"], [1, "short--cards--jobTitle", "card"], [1, "short--cards--email", "card"], [1, "short--cards--tel", "card"], [1, "short--cards--skills", "card-with-list"], [1, "short--cards--hobbies", "card-with-list"], [1, "short--cards--accomplishments", "card-custom"], [1, "short--cards--accomplishments--fGame"], [1, "short--cards--accomplishments--fGame--details"], [1, "name"], [1, "year"], [1, "short--cards--accomplishments--fGame--about"], [1, "container-images"], ["src", "/assets/images/fgame1.png"], ["src", "/assets/images/fgame2.png"], [1, "short--links"], [1, "short--links--row"], [1, "link-container"], ["src", "/assets/images/svg/linkedin.svg"], ["href", "https://www.linkedin.com/in/christian-perez-macedo-a079a1186/"], ["src", "/assets/images/svg/github.svg"], ["href", "https://github.com/ChristianPerezMacedo"], [1, "fix-container"], [1, "content"], [1, "content--aboutMe", "big-card"], ["src", "/assets/images/svg/meWithCoffe.svg"], [1, "big-card-content"], [1, "title"], [1, "body"], [1, "content--education", "big-card"], ["src", "/assets/images/svg/meWithBook.svg"], [1, "education-details"], [1, "content--experience", "big-card"], ["src", "/assets/images/svg/meWithApp.svg"], [1, "body--job"], [1, "body--job--details"], [1, "body--job--about"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " christian perez macedo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Frontend Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " christianperezmacedo@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tel. +39 3896447924 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HTML and CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Versioning systems: Git & SVN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Scripting languages: Javascript, Typescript, Python, Java, C, C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Frameworks/libraries: Angular, React, Redux, Ionic, Pandas, Numpy, Docker, etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Understanding UI Designs: Visual Hierarchy, Design System, etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Hobbies & interests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Building apps \uD83D\uDE80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cooking good things \uD83C\uDF63");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Reading about neural networks and artificial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " intelligence \uD83E\uDD13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Accomplishments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Friendship game \uD83C\uDFAE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " It is an interactive question game between friends with a ffinal ranking. It is available for android and ios and was built with the purpose of both deepening the knowledge of Ionic and Capacitor and having fun. I used firebase as a backend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Links and Credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " I have a background in Information Technology, with a focus on frontend development and UI design. Additionally, I have also developed firmware and automation operations for data collection and analysis. I'm the kind of person who takes up challenges and every opportunity to learn new things. I am driven to learn quickly and gain a lot of experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Universit\u00E0 degli Studi di Siena ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Master's degree, Computer and automation engineering, 107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Geckosoft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Development of web pages with angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Zucchetti Centro Sistemi Spa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2 yrs 1 mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Software Designer, IOT Department (Internet Of Things) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Firmware development (in C) and hybrid applications for Android and IOS (with Ionic / Angular / Capacitor). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "MB Elettronica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "6 mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Internship, software suite construction (ElectronJs) for the automation of industrial processes and data collection with the aim of optimizing the production process through data analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  max-width: 1200px;\n  width: 100%;\n  z-index: 0;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.fix-container[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n.short[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.short--profile[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.short--profile--imageContainer[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.short--profile--imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: solid 2px #005975;\n  height: 180px;\n  width: 180px;\n}\n.short--profile--fullName[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.short--cards[_ngcontent-%COMP%]   Title[_ngcontent-%COMP%] {\n  background-color: #FFF2C4;\n}\n.short--cards--email[_ngcontent-%COMP%] {\n  background-color: #DFF3FA;\n  text-transform: lowercase !important;\n}\n.short--cards--tel[_ngcontent-%COMP%] {\n  background-color: #DFF3FA;\n}\n.short--cards--skills[_ngcontent-%COMP%] {\n  background-color: #E8F5E9;\n}\n.short--cards--hobbies[_ngcontent-%COMP%] {\n  background-color: #DFF3FA;\n}\n.short--cards--accomplishments[_ngcontent-%COMP%] {\n  background-color: #DFF3FA;\n}\n.short--cards--accomplishments--fGame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.short--cards--accomplishments--fGame--details[_ngcontent-%COMP%] {\n  margin-block: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: normal;\n}\n.short--cards--accomplishments--fGame--about[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: normal;\n  color: #828282;\n  line-height: 13px;\n  text-align: justify;\n}\n.short--cards--accomplishments--fGame--about[_ngcontent-%COMP%]   .container-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 20px;\n}\n.short--cards--accomplishments--fGame--about[_ngcontent-%COMP%]   .container-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 230px;\n}\n.short--links[_ngcontent-%COMP%] {\n  color: #007BAF;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 18px;\n  margin-bottom: 10px;\n  margin-top: 36px;\n}\n.short--links--row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: row;\n}\n.content[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  position: sticky;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content--aboutMe[_ngcontent-%COMP%] {\n  margin-inline: 18px;\n  background-color: #A6E4F8;\n}\n.content--education[_ngcontent-%COMP%] {\n  margin-left: calc(18px + 100px);\n  margin-right: 18px;\n  background-color: #C8E6C9;\n}\n.content--education[_ngcontent-%COMP%]   .education-details[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  color: #828282;\n  margin-top: 8px;\n}\n.content--education[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.content--experience[_ngcontent-%COMP%] {\n  margin-left: calc(18px + 50px);\n  margin-right: 18px;\n  background-color: #FFF2C4;\n}\n.content--experience[_ngcontent-%COMP%]   .body--job[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.content--experience[_ngcontent-%COMP%]   .body--job--details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.content--experience[_ngcontent-%COMP%]   .body--job--details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  color: #039FCE;\n}\n.content--experience[_ngcontent-%COMP%]   .body--job--about[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  line-height: 15px;\n  font-size: 12px;\n  text-align: justify;\n  color: #828282;\n}\n.big-card[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-inline: auto;\n  margin-top: 20px;\n  display: flex;\n  border-radius: 8px;\n  padding: 16px;\n  box-sizing: border-box;\n}\n.big-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.big-card[_ngcontent-%COMP%]   .big-card-content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.big-card[_ngcontent-%COMP%]   .big-card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #005975;\n  margin-bottom: 16px;\n}\n.big-card[_ngcontent-%COMP%]   .big-card-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  color: #007BAF;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: justify;\n}\n.card[_ngcontent-%COMP%], .card-custom[_ngcontent-%COMP%], .card-with-list[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 8px;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  margin-block: 4px;\n  max-width: 350px;\n  color: #007BAF;\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.card-custom[_ngcontent-%COMP%], .card-with-list[_ngcontent-%COMP%] {\n  text-transform: none !important;\n  align-items: flex-start !important;\n  box-sizing: border-box;\n  height: auto !important;\n  justify-content: flex-start !important;\n  padding: 8px;\n  flex-direction: column;\n}\n.card-with-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-top: 8px;\n}\n.card-with-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  margin-inline-start: -20px;\n}\n.link-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n.link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  margin-right: 16px;\n  text-decoration: underline;\n  color: #007BAF;\n}\n.link-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFKRjtBQVBFO0VBREY7SUFFSSxlQUFBO0VBVUY7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsbUJBQUE7QUFFTjtBQURNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBR1I7QUFBSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUVOO0FBQ1k7RUFDTix5QkFBQTtBQUNOO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBQ047QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQVE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQVU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFEWTtFQUNFLGFBQUE7QUFHZDtBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFHSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFETjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFISjtBQUtFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0FBSko7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFITjtBQUtJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBSE47QUFNRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpKO0FBTU07RUFDRSxtQkFBQTtBQUpSO0FBS1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFIVjtBQUlVO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBRlo7QUFLUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFIVjtBQVVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtBQVJGO0FBVUU7RUFDRSxlQUFBO0FBUko7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFUSjtBQVVJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBUk47QUFXSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVE47QUFjQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQVpGO0FBZUE7RUFDRSwrQkFBQTtFQUdBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBZEY7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFoQko7QUFpQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQWZOO0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQWhCSjtBQWtCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFoQkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5maXgtY29udGFpbmVyIHtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnNob3J0IHtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gICYtLXByb2ZpbGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgJi0taW1hZ2VDb250YWluZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzAwNTk3NTtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmLS1mdWxsTmFtZSB7XG4gICAgICBjb2xvcjogIzRGNEY0RjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG4gICYtLWNhcmRzIHtUaXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMkM0O1xuICAgIH1cbiAgICAmLS1lbWFpbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZGM0ZBO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmLS10ZWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjNGQTtcbiAgICB9XG4gICAgJi0tc2tpbGxzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEY1RTk7XG4gICAgfVxuICAgICYtLWhvYmJpZXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjNGQTtcbiAgICB9XG4gICAgJi0tYWNjb21wbGlzaG1lbnRzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNERkYzRkE7XG4gICAgICAmLS1mR2FtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAmLS1kZXRhaWxzIHtcbiAgICAgICAgICBtYXJnaW4tYmxvY2s6IDhweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgJi0tYWJvdXQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAgICAgICAuY29udGFpbmVyLWltYWdlcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtLWxpbmtzIHtcbiAgICBjb2xvcjogIzAwN0JBRjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAmLS1yb3cge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICB9XG59XG5cbi5jb250ZW50IHtcbiAgdG9wOiAuMjVyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYtLWFib3V0TWUge1xuICAgIG1hcmdpbi1pbmxpbmU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2RTRGODtcbiAgfVxuICAmLS1lZHVjYXRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDE4cHggKyAxMDBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZDOTtcbiAgICAuZWR1Y2F0aW9uLWRldGFpbHMge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgICAuYm9keSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuICAmLS1leHBlcmllbmNlIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxOHB4ICsgNTBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYyQzQ7XG4gICAgLmJvZHkge1xuICAgICAgJi0tam9iIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgJi0tZGV0YWlscyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgPiBkaXYgPiBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMzlGQ0U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtLWFib3V0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJpZy1jYXJkIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgaW1nIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cblxuICAuYmlnLWNhcmQtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMDA1OTc1O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuYm9keSB7XG4gICAgICBjb2xvcjogIzAwN0JBRjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJsb2NrOiA0cHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG5cbiAgY29sb3I6ICMwMDdCQUY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY2FyZC1jdXN0b20ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIEBleHRlbmQgLmNhcmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC13aXRoLWxpc3Qge1xuICBAZXh0ZW5kIC5jYXJkLWN1c3RvbTtcbiAgdWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBsaSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogLTIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzAwN0JBRjtcbiAgfVxuICBpbWcge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
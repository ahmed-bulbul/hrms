(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "/Y1t":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/register/register.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y1t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <a routerLink=\"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\r\n        <div class=\"container\">\r\n\r\n            <!-- Account Logo -->\r\n            <div class=\"account-logo\">\r\n                <a routerLink=\"/dashboard\"><img src=\"assets/img/w_logo.png\" alt=\"Dreamguy's Technologies\"></a>\r\n            </div>\r\n            <!-- /Account Logo -->\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n                    <h3 class=\"account-title\">Register</h3>\r\n                    <p class=\"account-subtitle\">Access to our dashboard</p>\r\n\r\n                    <!-- Account Form -->\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input class=\"form-control\" formControlName=\"username\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" type=\"text\">\r\n                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" formControlName=\"email\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" type=\"email\">\r\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input class=\"form-control\" formControlName=\"firstName\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" type=\"text\">\r\n                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input class=\"form-control\" formControlName=\"lastName\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" type=\"text\">\r\n                            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input class=\"form-control\" formControlName=\"phone\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" type=\"number\">\r\n                            <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 4 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Repeat Password</label>\r\n                            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button [disabled]=\"loading\" class=\"btn btn-primary account-btn\" type=\"submit\">\r\n                                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                Register\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Already have an account? <a routerLink=\"/login/login\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";
      /***/
    },

    /***/
    "0OiK":
    /*!************************************************************!*\
      !*** ./src/app/login/components/login/login.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function OiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center-screen {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(to bottom right, rgb(255,255,255, 0.3) 30% , rgb(102, 126, 234, 0.5) 50%, rgb(118, 75, 162, 0.3)), url(/src/assets/img/ROIKBN.jpg);\r\n}\r\n\r\ndiv.main-wrapper {\r\n  background-image: linear-gradient(to bottom right, rgb(255,255,255, 0.3) 30% , rgb(102, 126, 234, 0.5) 50%, rgb(118, 75, 162, 0.3)), url('ROIKBN.jpg');\r\n}\r\n\r\ndiv.account-content {\r\n  background-image: linear-gradient(to bottom right, rgb(255,255,255, 0.3) 30% , rgb(102, 126, 234, 0.5) 50%, rgb(118, 75, 162, 0.3)), url('ROIKBN.jpg');\r\n}\r\n\r\n.account-box {\r\n  background-color: #fff;\r\n  border: 2px solid #ededed;\r\n  border-radius: 4px;\r\n  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  width: 350px;\r\n  height: 100%;\r\n}\r\n\r\ncompany-title {\r\n  font-size: 26px;\r\n  font-weight: 500;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.account-title {\r\n  font-size: 20px;\r\n}\r\n\r\n.login-box-ct .login-box-title {\r\n  padding-right: 0;\r\n}\r\n\r\n.login-box-ct .login-box-form {\r\n  padding-left: 0;\r\n}\r\n\r\n.login-box-ct .login-box-title .account-box {\r\n  margin-right: 0;\r\n}\r\n\r\n.login-box-ct .login-box-form .account-box {\r\n  margin-left: 0;\r\n}\r\n\r\n.login-box-title .account-box {\r\n  background-image: linear-gradient(to bottom, white 30%, rgb(102, 126, 234, 0.5) 50%), url(/assets/img/login-page/login-bg-img-1.png);\r\n  background-image: linear-gradient(to bottom, white 30%, rgb(102, 126, 234, 0.5) 50%), url('login-bg-img-1.png');\r\n  /* background-position: center; */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // Start --------------------- */\r\n\r\n.btn-ripple {\r\n  position: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 700px;\r\n\t\theight: 700px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 700px;\r\n\t\theight: 700px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // End ------------------------- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxvS0FBb0s7QUFDdEs7O0FBQ0E7RUFDRSxzSkFBbUs7QUFDcks7O0FBQ0E7RUFDRSxzSkFBbUs7QUFDcks7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLG9JQUFvSTtFQUNwSSwrR0FBdUk7RUFDdkksaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBR0EsK0VBQStFOztBQUMvRTtFQUNFLGtCQUFrQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQzs7RUFFQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7Q0FDYjtDQUNBOztFQUVDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtDQUNYO0FBQ0Q7O0FBYkE7Q0FDQzs7RUFFQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7Q0FDYjtDQUNBOztFQUVDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtDQUNYO0FBQ0Q7O0FBQ0EsaUZBQWlGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigyNTUsMjU1LDI1NSwgMC4zKSAzMCUgLCByZ2IoMTAyLCAxMjYsIDIzNCwgMC41KSA1MCUsIHJnYigxMTgsIDc1LCAxNjIsIDAuMykpLCB1cmwoL3NyYy9hc3NldHMvaW1nL1JPSUtCTi5qcGcpO1xyXG59XHJcbmRpdi5tYWluLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigyNTUsMjU1LDI1NSwgMC4zKSAzMCUgLCByZ2IoMTAyLCAxMjYsIDIzNCwgMC41KSA1MCUsIHJnYigxMTgsIDc1LCAxNjIsIDAuMykpLCB1cmwoc3JjL2Fzc2V0cy9pbWcvUk9JS0JOLmpwZyk7XHJcbn1cclxuZGl2LmFjY291bnQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDI1NSwyNTUsMjU1LCAwLjMpIDMwJSAsIHJnYigxMDIsIDEyNiwgMjM0LCAwLjUpIDUwJSwgcmdiKDExOCwgNzUsIDE2MiwgMC4zKSksIHVybChzcmMvYXNzZXRzL2ltZy9ST0lLQk4uanBnKTtcclxufVxyXG5cclxuXHJcbi5hY2NvdW50LWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuY29tcGFueS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWJveC1jdCAubG9naW4tYm94LXRpdGxlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubG9naW4tYm94LWN0IC5sb2dpbi1ib3gtZm9ybSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubG9naW4tYm94LWN0IC5sb2dpbi1ib3gtdGl0bGUgLmFjY291bnQtYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gtY3QgLmxvZ2luLWJveC1mb3JtIC5hY2NvdW50LWJveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4ubG9naW4tYm94LXRpdGxlIC5hY2NvdW50LWJveCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMzAlLCByZ2IoMTAyLCAxMjYsIDIzNCwgMC41KSA1MCUpLCB1cmwoL2Fzc2V0cy9pbWcvbG9naW4tcGFnZS9sb2dpbi1iZy1pbWctMS5wbmcpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDMwJSwgcmdiKDEwMiwgMTI2LCAyMzQsIDAuNSkgNTAlKSwgdXJsKHNyYy9hc3NldHMvaW1nL2xvZ2luLXBhZ2UvbG9naW4tYmctaW1nLTEucG5nKTtcclxuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSaXBwbGUgRWZmZWN0IEJ1dHRvbiAvLyBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmJ0bi1yaXBwbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG5cdDAlIFxyXG5cdHtcclxuXHRcdHdpZHRoOiAwcHg7XHJcblx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHR9XHJcblx0MTAwJVxyXG5cdHtcclxuXHRcdHdpZHRoOiA3MDBweDtcclxuXHRcdGhlaWdodDogNzAwcHg7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJpcHBsZSBFZmZlY3QgQnV0dG9uIC8vIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "4CqG":
    /*!***********************************************************!*\
      !*** ./src/app/login/components/login/login.component.ts ***!
      \***********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function CqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "aHNZ");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "0OiK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/all-modules/employees/services/employee.service */
      "AuF9");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/login.service */
      "d//k");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, toastr, loginService, router, hrcremp) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.loginService = loginService;
          this.router = router;
          this.hrcremp = hrcremp;
          this.loading = false;
          this.submitted = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.initButtonRippleEffect();

            if (this.loginService.isLoggedIn) {
              this.router.navigate(['dashboard']);
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.loginForm = this.formBuilder.group({
              username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loginData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.submitted = true;
                      this.loading = true;

                      if (!this.loginForm.invalid) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      loginData = Object.assign(this.loginForm.value);
                      console.log("Above Generate Token");
                      this.loginService.generateToken(loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(1300)).subscribe(function (data) {
                        console.log("Inside Generate Token"); //login...

                        _this.loginService.loginUser(data.token);

                        _this.loginService.getCurrentUser().subscribe(function (user) {
                          //  return;
                          console.log("Inside Current User");

                          _this.loginService.setUser(user);

                          if (_this.loginService.getUserRole() == "ROLE_USER") {
                            console.log("Inside Fetching ROLE");
                            _this.loading = false; // this.toastr.success('You are now authenticated','success');

                            _this.toastr.success('You are now authenticated', 'Success', {
                              positionClass: 'toast-custom'
                            });

                            _this.router.navigate(['dashboard']);

                            _this.loginService.loginStatusSubject.next(true);
                          } else if (_this.loginService.getSuperAdminRole().authority == "ROLE_SUPER_ADMIN" || _this.loginService.getAdminRole().authority == "ROLE_ADMIN") {
                            _this.loading = false;

                            _this.router.navigate(['admindashboard']);

                            _this.loginService.loginStatusSubject.next(true);
                          } else {
                            _this.loading = false;

                            _this.loginService.logout();
                          }
                        });
                      }, function (error) {
                        _this.loading = false;
                        console.log('Error !');
                        console.log(error);

                        _this.toastr.error('' + error.error.message);
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initButtonRippleEffect",
          value: function initButtonRippleEffect() {
            var createRipple = function createRipple(e) {
              var button = e.currentTarget;
              var x = e.clientX - e.target.getBoundingClientRect().left;
              var y = e.clientY - e.target.getBoundingClientRect().top; // Create span element

              var ripple = document.createElement("span"); // Position the span element

              ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 0.8s linear infinite;";
              ripple.style.left = "".concat(x, "px");
              ripple.style.top = "".concat(y, "px"); // Add span to the button 

              button.appendChild(ripple); // Remove span after 0.3s

              setTimeout(function () {
                ripple.remove();
              }, 800);
            };

            var elements = document.querySelectorAll('.btn-ripple');
            elements.forEach(function (element) {
              element.addEventListener('click', function (e) {
                createRipple(e);
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]])], LoginComponent);
      /***/
    },

    /***/
    "6Ufc":
    /*!*********************************************************************!*\
      !*** ./src/app/login/components/lockscreen/lockscreen.component.ts ***!
      \*********************************************************************/

    /*! exports provided: LockscreenComponent */

    /***/
    function Ufc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function () {
        return LockscreenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lockscreen.component.html */
      "aEvV");
      /* harmony import */


      var _lockscreen_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lockscreen.component.css */
      "jYLZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LockscreenComponent = /*#__PURE__*/function () {
        function LockscreenComponent() {
          _classCallCheck(this, LockscreenComponent);
        }

        _createClass(LockscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LockscreenComponent;
      }();

      LockscreenComponent.ctorParameters = function () {
        return [];
      };

      LockscreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lockscreen',
        template: _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lockscreen_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LockscreenComponent);
      /***/
    },

    /***/
    "AuF9":
    /*!********************************************************************!*\
      !*** ./src/app/all-modules/employees/services/employee.service.ts ***!
      \********************************************************************/

    /*! exports provided: EmployeeService */

    /***/
    function AuF9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(http) {
          _classCallCheck(this, EmployeeService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        } // Get Employee  Api Call


        _createClass(EmployeeService, [{
          key: "getEmployees",
          value: function getEmployees() {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/empList"));
          } // get empList list view 

        }, {
          key: "getEmpListView",
          value: function getEmpListView(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // Get Employee via paginations

        }, {
          key: "sendGetRequest",
          value: function sendGetRequest(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // create HrCrEmp  Api Call

        }, {
          key: "createEmploy",
          value: function createEmploy(emp) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmp/create"), emp);
          } //update HrCrEmp Api Call

        }, {
          key: "updateEmploy",
          value: function updateEmploy(data) {
            // return this.http.put(`${baseUrl}/hrCrEmp/update`, data);
            return this.http.put("".concat(this.baseUrl, "/hrCrEmp/edit"), data);
          } // Get employee By id 

        }, {
          key: "getEmployeeById",
          value: function getEmployeeById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/get/").concat(id)); //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
          } // Get employee By id 

        }, {
          key: "findEmployeeById",
          value: function findEmployeeById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/find/").concat(id)); //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
          } //get employee by loginCode

        }, {
          key: "getEmployeeByLoginCode",
          value: function getEmployeeByLoginCode(loginCode) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmp/findByLoginCode/").concat(loginCode));
          } //upload profile image file

        }, {
          key: "uploadProfileImage",
          value: function uploadProfileImage(id, formData) {
            return this.http.post("".concat(this.baseUrl, "/multimedia/profile/").concat(id), formData);
          } // Get ALKP Search By Keyword Api Call

        }, {
          key: "getAlkpSearchByKeyword",
          value: function getAlkpSearchByKeyword(keyword) {
            return this.http.get("".concat(this.baseUrl, "/alkp/search/").concat(keyword));
          } //save employee assignemnt data 

        }, {
          key: "saveEmployeeAssignemntData",
          value: function saveEmployeeAssignemntData(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/create"), data);
          } //save employee assignemnt data 
          //  public saveEmployeeAssignemntData2(data){
          //   return this.http.post(`${baseUrl}/hrCrEmpAssgnmnt/save`,data);
          // }
          //update employeeAssignment 

        }, {
          key: "updateEmployeeAssignment",
          value: function updateEmployeeAssignment(data) {
            return this.http.put("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/edit"), data);
          } // get last assignment by HrCrEmpId

        }, {
          key: "getLastAssignmentByHrCrEmpId",
          value: function getLastAssignmentByHrCrEmpId(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/getByHrCrEmp/").concat(id));
          } // get employee assignment By Id 

        }, {
          key: "getEmployeeAssignmentByHrCrEmpId",
          value: function getEmployeeAssignmentByHrCrEmpId(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/getByHrCrEmpId/").concat(id));
          } //save or update emp bank and payroll tabs data 

        }, {
          key: "saveOrUpdateBankAndPayroll",
          value: function saveOrUpdateBankAndPayroll(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpAssgnmnt/saveBankAndPayroll"), data);
          } // get designation

        }, {
          key: "getDesignations",
          value: function getDesignations() {
            return this.http.get("".concat(this.baseUrl, "/designation/getAll"));
          } // Get All ALKP Api Call 

        }, {
          key: "getALLDivisions",
          value: function getALLDivisions(id) {
            return this.http.get("".concat(this.baseUrl, "/address/division/").concat(id));
          }
        }, {
          key: "fetchAllDivision",
          value: function fetchAllDivision() {
            return this.http.get("".concat(this.baseUrl, "/address/division/getAll"));
          }
        }, {
          key: "getDistrictByDivId",
          value: function getDistrictByDivId(id) {
            return this.http.get("".concat(this.baseUrl, "/address/division/").concat(id));
          }
        }, {
          key: "getAllDistrict",
          value: function getAllDistrict(apiURL, queryParams) {
            console.log("@getAllDistrict");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getAllUpazila",
          value: function getAllUpazila(apiURL, queryParams) {
            console.log("@getAllUpazila");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getAllUnions",
          value: function getAllUnions(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } // save hrCrEmpEdu informations

        }, {
          key: "saveHrCrEmpEdu",
          value: function saveHrCrEmpEdu(data) {
            return this.http.post("".concat(this.baseUrl, "/hrCrEmpEdu/create"), data);
          } //find by empId

        }, {
          key: "findhrCrEmpEduByEmpId",
          value: function findhrCrEmpEduByEmpId(empId) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpEdu/find/").concat(empId));
          } //find byId

        }, {
          key: "findhrCrEmpEduById",
          value: function findhrCrEmpEduById(id) {
            return this.http.get("".concat(this.baseUrl, "/hrCrEmpEdu/get/").concat(id));
          } //edit employee education 

        }, {
          key: "edithrCrEmpEducation",
          value: function edithrCrEmpEducation(data) {
            return this.http.put("".concat(this.baseUrl, "/hrCrEmpEdu/edit"), data);
          } //delete emp education

        }, {
          key: "deleteHrCrEmpEducation",
          value: function deleteHrCrEmpEducation(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/hrCrEmpEdu/delete/").concat(id));
          } //Get Raw Attendance data from Device

        }, {
          key: "getAllRawAttendanceData",
          value: function getAllRawAttendanceData() {
            return this.http.get("".concat(this.baseUrl, "/attn/findAllBySrcType"));
          }
        }, {
          key: "getAllRawAttendanceData2",
          value: function getAllRawAttendanceData2(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } //Post viaHrAttn

        }, {
          key: "createAttnViaHr",
          value: function createAttnViaHr(data) {
            return this.http.post("".concat(this.baseUrl, "/AttnViaHr/save"), data);
          } //Get viaHrAttn Attendance data from

        }, {
          key: "getAllViaHrAttnData",
          value: function getAllViaHrAttnData() {
            return this.http.get("".concat(this.baseUrl, "/AttnViaHr/findAllBySrcType"));
          }
        }, {
          key: "getAllViaHrAttnData2",
          value: function getAllViaHrAttnData2(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          }
        }, {
          key: "getSearchAttn",
          value: function getSearchAttn(apiURL, queryParams) {
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
          } //Leave related api
          //crearte leave tenc

        }, {
          key: "createLeave",
          value: function createLeave(data) {
            return this.http.post("".concat(this.baseUrl, "/leaveTrnse/save"), data);
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EmployeeService);
      /***/
    },

    /***/
    "DkQn":
    /*!*************************************************************!*\
      !*** ./src/app/login/components/forgot/forgot.component.ts ***!
      \*************************************************************/

    /*! exports provided: ForgotComponent */

    /***/
    function DkQn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
        return ForgotComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot.component.html */
      "x3aY");
      /* harmony import */


      var _forgot_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot.component.css */
      "m8g+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ForgotComponent = /*#__PURE__*/function () {
        function ForgotComponent() {
          _classCallCheck(this, ForgotComponent);
        }

        _createClass(ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotComponent;
      }();

      ForgotComponent.ctorParameters = function () {
        return [];
      };

      ForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: _raw_loader_forgot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ForgotComponent);
      /***/
    },

    /***/
    "IUDT":
    /*!*****************************************************************!*\
      !*** ./src/app/login/components/register/register.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function IUDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "/Y1t");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "PzOX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utils/_helpers */
      "ur0Y");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/login.service */
      "d//k");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, loginService, route, router, toastr) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.route = route;
          this.router = router;
          this.toastr = toastr;
          this.loading = false;
          this.submitted = false;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.params['id'];
            this.isAddMode = !this.id;
            this.initializeForm();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            var _this2 = this;

            var formOptions = {
              validators: Object(src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'confirmPassword')
            };
            this.form = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              // role: ['', Validators.required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }, formOptions);

            if (!this.isAddMode) {
              this.loginService.getById(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (x) {
                return _this2.form.patchValue(x);
              });
            }
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            console.log("OK" + this.isAddMode); // stop here if form is invalid

            if (this.form.invalid) {
              return;
            }

            this.loading = true;

            if (this.isAddMode) {
              this.createUser();
            }
          }
        }, {
          key: "createUser",
          value: function createUser() {
            var _this3 = this;

            this.loginService.register(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function () {
              _this3.toastr.success("Successfully Registered");

              _this3.router.navigate(['../'], {
                relativeTo: _this3.route
              });
            }, function (error) {
              _this3.toastr.error(error.error.message);
            }).add(function () {
              return _this3.loading = false;
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], RegisterComponent);
      /***/
    },

    /***/
    "PzOX":
    /*!******************************************************************!*\
      !*** ./src/app/login/components/register/register.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function PzOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Qltk":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/otp/otp.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qltk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\r\n        <div class=\"container\">\r\n\r\n            <!-- Account Logo -->\r\n            <div class=\"account-logo\">\r\n                <a routerLink=\"/dashboard\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\r\n            </div>\r\n            <!-- /Account Logo -->\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n                    <h3 class=\"account-title\">OTP</h3>\r\n                    <p class=\"account-subtitle\">Verification your account</p>\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"otp-wrap\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Enter</button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Not yet received? <a >Resend OTP</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/login/login.component */
      "4CqG");
      /* harmony import */


      var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/forgot/forgot.component */
      "DkQn");
      /* harmony import */


      var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/otp/otp.component */
      "jZLg");
      /* harmony import */


      var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/lockscreen/lockscreen.component */
      "6Ufc");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/register/register.component */
      "IUDT");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_8__["OtpComponent"], _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
      })], LoginModule);
      /***/
    },

    /***/
    "aEvV":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/lockscreen/lockscreen.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aEvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\r\n        <div class=\"container\">\r\n\r\n            <!-- Account Logo -->\r\n            <div class=\"account-logo\">\r\n                <a routerLink=\"/dashboard\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\r\n            </div>\r\n            <!-- /Account Logo -->\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n\r\n                    <!-- Lock User Img -->\r\n                    <div class=\"lock-user\">\r\n                        <img alt=\"\" src=\"assets/img/profiles/avatar-2.jpg\" class=\"rounded-circle\">\r\n                        <h4>John Doe</h4>\r\n                    </div>\r\n                    <!-- /Lock User Img -->\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input class=\"form-control\" type=\"password\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\">Enter</button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Sign in as a different user? <a routerLink=\"/login/register\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";
      /***/
    },

    /***/
    "aHNZ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/login/login.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aHNZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"account-content\">\r\n    <!-- <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a> -->\r\n    <div class=\"center-screen\">\r\n        <div class=\"container\">\r\n    \r\n    \r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-12\">\r\n                    <div style=\"height:0px;\">\r\n                        <!-- for background image display helper -->\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n\r\n                    <div class=\"row login-box-ct\">\r\n\r\n\r\n                        <div class=\"col-6 login-box-title\">\r\n                    \r\n                            <div class=\"account-box\">\r\n                                <div class=\"account-wrapper\">\r\n                                    <!-- Account Logo -->\r\n                                    <div class=\"account-logo\">\r\n                                        <a href=\"javascript:\"><img src=\"assets/img/w_logo.png\" alt=\"Dreamguy's Technologies\"></a>\r\n                                    </div>\r\n                                    <h3 class=\"company-title\">Digi-Tech Industries Ltd</h3>\r\n                                    <h4 class=\"account-title\">( Smart HRMS )</h4>\r\n                                    <p class=\"account-subtitle\">Manage Your Resource Smartly</p>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-6 login-box-form\">\r\n                        \r\n                            <div class=\"account-box\">\r\n                                <div class=\"account-wrapper\">\r\n\r\n                                    <h3 class=\"account-title\">Login</h3>\r\n                                    <p class=\"account-subtitle\">Access your account</p>\r\n                            \r\n                                    <!-- Account Form -->\r\n                                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Username</label>\r\n                                            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" formControlName=\"username\"  type=\"text\">\r\n                                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col\">\r\n                                                    <label>Password</label>\r\n                                                </div>\r\n                                                <div class=\"col-auto\">\r\n                                                    <!-- <a class=\"text-muted\" routerLink = \"/login/forgot\"> -->\r\n                                                        <!-- Forgot password? -->\r\n                                                    <!-- </a> -->\r\n                                                </div>\r\n                                            </div>\r\n                                            <input class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" formControlName=\"password\" formControlName=\"password\" type=\"password\">\r\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 4 characters</div>\r\n                                            </div>\r\n                                        \r\n                                        </div>\r\n                                        <div class=\"form-group text-center\">\r\n                                            <button [disabled]=\"loading\" class=\"btn btn-primary account-btn btn-ripple\" type=\"submit\">\r\n                                                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                                    Login\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"account-footer\">\r\n                                            <!-- <p>Don't have an account yet? <a routerLink = \"/login/register\">Register</a></p> -->\r\n                                        </div>\r\n                                    </form>\r\n                                    <!-- /Account Form -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
        return LoginRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/forgot/forgot.component */
      "DkQn");
      /* harmony import */


      var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/lockscreen/lockscreen.component */
      "6Ufc");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/login/login.component */
      "4CqG");
      /* harmony import */


      var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/otp/otp.component */
      "jZLg");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/register/register.component */
      "IUDT");

      var routes = [{
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
      }, {
        path: 'forgot',
        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'otp',
        component: _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_6__["OtpComponent"]
      }, {
        path: 'lockscreen',
        component: _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockscreenComponent"]
      }];

      var LoginRoutingModule = function LoginRoutingModule() {
        _classCallCheck(this, LoginRoutingModule);
      };

      LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginRoutingModule);
      /***/
    },

    /***/
    "jYLZ":
    /*!**********************************************************************!*\
      !*** ./src/app/login/components/lockscreen/lockscreen.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function jYLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "jZLg":
    /*!*******************************************************!*\
      !*** ./src/app/login/components/otp/otp.component.ts ***!
      \*******************************************************/

    /*! exports provided: OtpComponent */

    /***/
    function jZLg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpComponent", function () {
        return OtpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_otp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./otp.component.html */
      "Qltk");
      /* harmony import */


      var _otp_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp.component.css */
      "zmkH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OtpComponent = /*#__PURE__*/function () {
        function OtpComponent() {
          _classCallCheck(this, OtpComponent);
        }

        _createClass(OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OtpComponent;
      }();

      OtpComponent.ctorParameters = function () {
        return [];
      };

      OtpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_otp_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OtpComponent);
      /***/
    },

    /***/
    "m8g+":
    /*!**************************************************************!*\
      !*** ./src/app/login/components/forgot/forgot.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function m8g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "x3aY":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/components/forgot/forgot.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x3aY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"account-content\">\r\n    <a routerLink = \"/login/joblist\" class=\"btn btn-primary apply-btn\">Apply Job</a>\r\n    <div class=\"container\">\r\n\r\n        <!-- Account Logo -->\r\n        <div class=\"account-logo\">\r\n            <a routerLink=\"/dashboard\"><img src=\"assets/img/logo2.png\" alt=\"Dreamguy's Technologies\"></a>\r\n        </div>\r\n        <!-- /Account Logo -->\r\n\r\n        <div class=\"account-box\">\r\n            <div class=\"account-wrapper\">\r\n                <h3 class=\"account-title\">Forgot Password?</h3>\r\n                <p class=\"account-subtitle\">Enter your email to get a password reset link</p>\r\n\r\n                <!-- Account Form -->\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label>Email Address</label>\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-primary account-btn\" type=\"submit\">Reset Password</button>\r\n                    </div>\r\n                    <div class=\"account-footer\">\r\n                        <p>Remember your password? <a routerLink = \"/login/login\">Login</a></p>\r\n                    </div>\r\n                </form>\r\n                <!-- /Account Form -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "zmkH":
    /*!********************************************************!*\
      !*** ./src/app/login/components/otp/otp.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function zmkH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map
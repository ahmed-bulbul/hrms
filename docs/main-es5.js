(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\NEW HRMS\Frontend\hrms_frontend_v2\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3owW":
    /*!*************************************!*\
      !*** ./src/app/guard/user.guard.ts ***!
      \*************************************/

    /*! exports provided: UserGuard */

    /***/
    function owW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
        return UserGuard;
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


      var _login_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login/services/login.service */
      "d//k");

      var UserGuard = /*#__PURE__*/function () {
        function UserGuard(login, router) {
          _classCallCheck(this, UserGuard);

          this.login = login;
          this.router = router;
        }

        _createClass(UserGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.login.isLoggedIn() && this.login.getUserRole() == 'ROLE_USER') {
              console.log("UURRLL" + this.router.url);
              return true;
            }

            this.router.navigate(['login']);
            return false;
          }
        }]);

        return UserGuard;
      }();

      UserGuard.ctorParameters = function () {
        return [{
          type: _login_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      UserGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], UserGuard);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        baseUrl: 'http://localhost:9001/hrms_api',
        // baseUrl:"http://localhost:8080/hrms_api",
        contextPath: ''
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'smarthr';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Minified Sidebar
            $(document).on('click', '#toggle_btn', function () {
              if ($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
              } else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
              }

              return false;
            });
            $(document).on('mouseover', function (e) {
              e.stopPropagation();

              if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                var targ = $(e.target).closest('.sidebar').length;

                if (targ) {
                  $('body').addClass('expand-menu');
                  $('.subdrop + ul').slideDown();
                } else {
                  $('body').removeClass('expand-menu');
                  $('.subdrop + ul').slideUp();
                }

                return false;
              }
            });
            $('body').append('<div class="sidebar-overlay"></div>');
            $(document).on('click', '#mobile_btn', function () {
              var $wrapper = $('.main-wrapper');
              $wrapper.toggleClass('slide-nav');
              $('.sidebar-overlay').toggleClass('opened');
              $('html').addClass('menu-opened');
              $('#task_window').removeClass('opened');
              return false;
            });
            $(".sidebar-overlay").on("click", function () {
              var $wrapper = $('.main-wrapper');
              $('html').removeClass('menu-opened');
              $(this).removeClass('opened');
              $wrapper.removeClass('slide-nav');
              $('.sidebar-overlay').removeClass('opened');
              $('#task_window').removeClass('opened');
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _guard_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./guard/auth.interceptor */
      "wJCG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); // Bootstrap DataTable


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          closeButton: true
        })],
        providers: [_guard_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["authInterceptorProviders"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "d//k":
    /*!*************************************************!*\
      !*** ./src/app/login/services/login.service.ts ***!
      \*************************************************/

    /*! exports provided: LoginService */

    /***/
    function dK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http, toastr) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.toastr = toastr;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
          this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        } //current user : which is loogedin


        _createClass(LoginService, [{
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.http.get("".concat(this.baseUrl, "/currentUser"));
          } //generate Token

        }, {
          key: "generateToken",
          value: function generateToken(loginData) {
            return this.http.post("".concat(this.baseUrl, "/generateToken"), loginData);
          } //login user : set token in local storage

        }, {
          key: "loginUser",
          value: function loginUser(token) {
            localStorage.setItem('token', token); // this.loginStatusSubject.next(true);

            return true;
          } //isLoogedIn: user is loggedin or not

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var tokenStr = localStorage.getItem('token');

            if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
              return false;
            } else {
              return true;
            }
          } //logout:: remove token from localstorage

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('activeTabName');

            if (this.clearTimeout) {
              clearTimeout(this.clearTimeout);
            }

            this.toastr.warning('Goodbye', 'logout');
            return true;
          } //getToken

        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          } //set userDetail

        }, {
          key: "setUser",
          value: function setUser(user) {
            localStorage.setItem('user', JSON.stringify(user));
          } //getUser

        }, {
          key: "getUser",
          value: function getUser() {
            var userStr = localStorage.getItem('user');

            if (userStr != null) {
              return JSON.parse(userStr);
            } else {
              this.logout();
              return null;
            }
          } //get user role
          // public getUserRole() {
          //   let user = this.getUser();
          //   return user.authorities[0].authority;
          // }
          //get superadmin role

        }, {
          key: "getSuperAdminRole",
          value: function getSuperAdminRole() {
            var superAdmin = this.getUser();

            function findSuperAdmin(roleSuperAdmin) {
              return roleSuperAdmin.authority === 'ROLE_SUPER_ADMIN';
            }

            return superAdmin.authorities.find(findSuperAdmin);
          } // get admin role

        }, {
          key: "getAdminRole",
          value: function getAdminRole() {
            var admin = this.getUser();

            function findAdmin(roleAdmin) {
              console.warn(roleAdmin.authority);
              return roleAdmin.authority === 'ROLE_ADMIN';
            } // console.warn(admin.authorities.find(findAdmin).authority);


            return admin.authorities.find(findAdmin);
          } //get user role

        }, {
          key: "getUserRole",
          value: function getUserRole() {
            console.log("OK COMMING.....");
            var hrCremp = this.getUser();
            console.log("ROLE" + hrCremp.authorities[0].authority); // return hrCremp.authorities[0].authority;
            //return user.authorities;

            return hrCremp.authorities[0].roleName;
          } // Register User

        }, {
          key: "register",
          value: function register(user) {
            return this.http.post("".concat(this.baseUrl, "/user/register"), user);
          } // Get By Id 

        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.baseUrl, "/user/get/").concat(id));
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], LoginService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guard_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guard/user.guard */
      "3owW");

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | errorpages-errorpages-module */
          "errorpages-errorpages-module").then(__webpack_require__.bind(null,
          /*! ./errorpages/errorpages.module */
          "9ckT")).then(function (m) {
            return m.ErrorpagesModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | all-modules-all-modules-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~login-login-module"), __webpack_require__.e("all-modules-all-modules-module")]).then(__webpack_require__.bind(null,
          /*! ./all-modules/all-modules.module */
          "HYfV")).then(function (m) {
            return m.AllModulesModule;
          });
        },
        canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]]
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~all-modules-all-modules-module~login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wJCG":
    /*!*******************************************!*\
      !*** ./src/app/guard/auth.interceptor.ts ***!
      \*******************************************/

    /*! exports provided: AuthInterceptor, authInterceptorProviders */

    /***/
    function wJCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
        return authInterceptorProviders;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _login_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../login/services/login.service */
      "d//k");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(login, router, toastr) {
          _classCallCheck(this, AuthInterceptor);

          this.login = login;
          this.router = router;
          this.toastr = toastr;
        }

        _createClass(AuthInterceptor, [{
          key: "handleAuthError",
          value: function handleAuthError(err) {
            //handle your auth error or rethrow
            if (err.status === 403) {
              //navigate /delete cookies or whatever
              this.toastr.error('you are not athorized or token has been expired', 'error');
              this.router.navigate(['error/error403']); // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err.message); // or EMPTY may be appropriate here
            } else if (err.status == 500) {
              this.router.navigate(['error/error500']);
            } else if (err.status == 401) {
              this.login.logout();
              this.router.navigate(['login']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }
        }, {
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            //add the jwt token (LocalStorage) request
            var authReq = req;
            var token = this.login.getToken();

            if (token != null) {
              authReq = authReq.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (x) {
              return _this.handleAuthError(x);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], AuthInterceptor);
      var authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
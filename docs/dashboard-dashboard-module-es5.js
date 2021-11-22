(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "1nQK":
    /*!**********************************************************************************!*\
      !*** ./node_modules/angular-morris-js/__ivy_ngcc__/esm2015/angular-morris-js.js ***!
      \**********************************************************************************/

    /*! exports provided: MorrisChartDirective, MorrisJsModule */

    /***/
    function nQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisChartDirective", function () {
        return MorrisChartDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisJsModule", function () {
        return MorrisJsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MorrisChartDirective = /*#__PURE__*/function () {
        function MorrisChartDirective(elementRef, ngZone) {
          _classCallCheck(this, MorrisChartDirective);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.window = window;
          this.type = 'Line';
          this.clickChart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MorrisChartDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._options = Object.assign({}, this.options);
            this._options.element = this.elementRef.nativeElement;
            this._options.data = this.data;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            if (!this.window.Morris) {
              throw new Error('Please include node_modules/morris.js/morris.js');
            } else {
              this.ngZone.runOutsideAngular(function () {
                _this.chartInstance = new _this.window.Morris[_this.type](_this._options);

                _this.chartInstance.on('click', function (i, row) {
                  _this.clickChart.emit({
                    event: event,
                    i: i,
                    row: row
                  });
                });
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["data"] && !changes["data"].firstChange || changes["options"] && !changes["options"].firstChange) {
              Object.assign(this.chartInstance.options, this.options);
              this.chartInstance.setData(this.data);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.chartInstance.el.empty instanceof Function) {
              this.chartInstance.el.empty();
            }
          }
        }]);

        return MorrisChartDirective;
      }();

      MorrisChartDirective.ɵfac = function MorrisChartDirective_Factory(t) {
        return new (t || MorrisChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MorrisChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MorrisChartDirective,
        selectors: [["", "mk-morris-js", ""]],
        inputs: {
          type: "type",
          options: "options",
          data: "data"
        },
        outputs: {
          clickChart: "clickChart"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MorrisChartDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MorrisChartDirective.propDecorators = {
        "type": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "options": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "data": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "clickChart": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisChartDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mk-morris-js]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MorrisJsModule = function MorrisJsModule() {
        _classCallCheck(this, MorrisJsModule);
      };

      MorrisJsModule.ɵfac = function MorrisJsModule_Factory(t) {
        return new (t || MorrisJsModule)();
      };

      MorrisJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MorrisJsModule
      });
      MorrisJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MorrisJsModule, {
          declarations: [MorrisChartDirective],
          exports: [MorrisChartDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisJsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MorrisChartDirective],
            exports: [MorrisChartDirective]
          }]
        }], null, null);
      })(); //# sourceMappingURL=angular-morris-js.js.map

      /***/

    },

    /***/
    "2PL2":
    /*!***********************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/admin-dashboard/admin-dashboard.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function PL2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "MGuQ");
      /* harmony import */


      var _admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-dashboard.component.css */
      "V0n0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/admin-dashboard.service */
      "AYTy");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent(_dashboardService) {
          _classCallCheck(this, AdminDashboardComponent);

          this._dashboardService = _dashboardService;
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._countTotalEmployees();

            this._getTotalEmployeesPresentToday();

            this._getEmployeesJoinedThisMonth();
          }
        }, {
          key: "_countTotalEmployees",
          value: function _countTotalEmployees() {
            var _this2 = this;

            this._dashboardService.getTotalEmployees().subscribe(function (data) {
              _this2.empTotal = data;
            });
          }
        }, {
          key: "_getTotalEmployeesPresentToday",
          value: function _getTotalEmployeesPresentToday() {
            var _this3 = this;

            this._dashboardService.getTotalEmployeesPresentToday().subscribe(function (data) {
              _this3.empPresent = data;
            });
          }
        }, {
          key: "_getEmployeesJoinedThisMonth",
          value: function _getEmployeesJoinedThisMonth() {
            var _this4 = this;

            this._dashboardService.getTotalEmployeesJoinedThisMonth().subscribe(function (data) {
              _this4.empThisMonth = data;
            });
          }
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ctorParameters = function () {
        return [{
          type: _services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardService"]
        }];
      };

      AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-admin-dashboard",
        template: _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardService"]])], AdminDashboardComponent);
      /***/
    },

    /***/
    "AYTy":
    /*!***************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/services/admin-dashboard.service.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminDashboardService */

    /***/
    function AYTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardService", function () {
        return AdminDashboardService;
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


      var src_app_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helper */
      "rmPI");

      var AdminDashboardService = /*#__PURE__*/function () {
        function AdminDashboardService(http) {
          _classCallCheck(this, AdminDashboardService);

          this.http = http;
        }

        _createClass(AdminDashboardService, [{
          key: "getTotalEmployees",
          value: function getTotalEmployees() {
            return this.http.get("".concat(src_app_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/api/v1/adminDashboard/getTotalEmployee"));
          }
        }, {
          key: "getTotalEmployeesPresentToday",
          value: function getTotalEmployeesPresentToday() {
            return this.http.get("".concat(src_app_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/api/v1/adminDashboard/getPresentEmployeeToday"));
          }
        }, {
          key: "getTotalEmployeesJoinedThisMonth",
          value: function getTotalEmployeesJoinedThisMonth() {
            return this.http.get("".concat(src_app_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/api/v1/adminDashboard/totalEmployeesJoinedLastMonth"));
          }
        }]);

        return AdminDashboardService;
      }();

      AdminDashboardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AdminDashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AdminDashboardService);
      /***/
    },

    /***/
    "C3Jh":
    /*!***********************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.module.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function C3Jh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "vG3P");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.component */
      "VqlG");
      /* harmony import */


      var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/admin-dashboard/admin-dashboard.component */
      "2PL2");
      /* harmony import */


      var _components_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/employee-dashboard/employee-dashboard.component */
      "YCd9");
      /* harmony import */


      var angular_morris_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-morris-js */
      "1nQK");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"], _components_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], angular_morris_js__WEBPACK_IMPORTED_MODULE_7__["MorrisJsModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "IqOy":
    /*!***************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function IqOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "MGuQ":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/dashboard/components/admin-dashboard/admin-dashboard.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MGuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Welcome Admin!</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item active\">Dashboard</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card dash-widget\">\r\n                <div class=\"card-body\">\r\n                    <span class=\"dash-widget-icon\"><i class=\"fa fa-cubes\"></i></span>\r\n                    <div class=\"dash-widget-info\">\r\n                        <h3>{{empTotal.totalEmp}}</h3>\r\n                        <span>Total Employees</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card dash-widget\">\r\n                <div class=\"card-body\">\r\n                    <span class=\"dash-widget-icon\"><i class=\"fa fa-usd\"></i></span>\r\n                    <div class=\"dash-widget-info\">\r\n                        <h3>{{empThisMonth.lastMonthJoinedEmployees}}</h3>\r\n                        <span>New Employees</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card dash-widget\">\r\n                <div class=\"card-body\">\r\n                    <span class=\"dash-widget-icon\"><i class=\"fa fa-diamond\"></i></span>\r\n                    <div class=\"dash-widget-info\">\r\n                        <h3>{{empPresent.presentEmployee}}</h3>\r\n                        <span>Total Present Today</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card dash-widget\">\r\n                <div class=\"card-body\">\r\n                    <span class=\"dash-widget-icon\"><i class=\"fa fa-user\"></i></span>\r\n                    <div class=\"dash-widget-info\">\r\n                        <h3>{{empTotal.totalEmp - empPresent.presentEmployee}}</h3>\r\n                        <span>Total Absent Today</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Total Revenue</h3>\r\n                            <div mk-morris-js [options]=\"chartOptions\" [data]=\"chartData\" type=\"Bar\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Sales Overview</h3>\r\n                            <div mk-morris-js [options]=\"lineOption\" [data]=\"lineData\" type=\"Line\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card-group m-b-30\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex justify-content-between mb-3\">\r\n                            <div>\r\n                                <span class=\"d-block\">New Employees</span>\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"text-success\">+10%</span>\r\n                            </div>\r\n                        </div>\r\n                        <h3 class=\"mb-3\">10</h3>\r\n                        <div class=\"progress mb-2\" style=\"height: 5px;\">\r\n                            <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 70%;\"\r\n                                aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                        <p class=\"mb-0\">Overall Employees 218</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex justify-content-between mb-3\">\r\n                            <div>\r\n                                <span class=\"d-block\">Earnings</span>\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"text-success\">+12.5%</span>\r\n                            </div>\r\n                        </div>\r\n                        <h3 class=\"mb-3\">$1,42,300</h3>\r\n                        <div class=\"progress mb-2\" style=\"height: 5px;\">\r\n                            <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 70%;\"\r\n                                aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                        <p class=\"mb-0\">Previous Month <span class=\"text-muted\">$1,15,852</span></p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex justify-content-between mb-3\">\r\n                            <div>\r\n                                <span class=\"d-block\">Expenses</span>\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"text-danger\">-2.8%</span>\r\n                            </div>\r\n                        </div>\r\n                        <h3 class=\"mb-3\">$8,500</h3>\r\n                        <div class=\"progress mb-2\" style=\"height: 5px;\">\r\n                            <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 70%;\"\r\n                                aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                        <p class=\"mb-0\">Previous Month <span class=\"text-muted\">$7,500</span></p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"d-flex justify-content-between mb-3\">\r\n                            <div>\r\n                                <span class=\"d-block\">Profit</span>\r\n                            </div>\r\n                            <div>\r\n                                <span class=\"text-danger\">-75%</span>\r\n                            </div>\r\n                        </div>\r\n                        <h3 class=\"mb-3\">$1,12,000</h3>\r\n                        <div class=\"progress mb-2\" style=\"height: 5px;\">\r\n                            <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 70%;\"\r\n                                aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                        <p class=\"mb-0\">Previous Month <span class=\"text-muted\">$1,42,000</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Statistics Widget -->\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 col-xl-4 d-flex\">\r\n            <div class=\"card flex-fill dash-statistics\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Statistics</h5>\r\n                    <div class=\"stats-list\">\r\n                        <div class=\"stats-info\">\r\n                            <p>Today Leave <strong>4 <small>/ 65</small></strong></p>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 31%\"\r\n                                    aria-valuenow=\"31\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"stats-info\">\r\n                            <p>Pending Invoice <strong>15 <small>/ 92</small></strong></p>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 31%\"\r\n                                    aria-valuenow=\"31\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"stats-info\">\r\n                            <p>Completed Projects <strong>85 <small>/ 112</small></strong></p>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 62%\"\r\n                                    aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"stats-info\">\r\n                            <p>Open Tickets <strong>190 <small>/ 212</small></strong></p>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 62%\"\r\n                                    aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"stats-info\">\r\n                            <p>Closed Tickets <strong>22 <small>/ 212</small></strong></p>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\"\r\n                                    aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-6 col-xl-4 d-flex\">\r\n            <div class=\"card flex-fill\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Task Statistics</h4>\r\n                    <div class=\"statistics\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-6 text-center\">\r\n                                <div class=\"stats-box mb-4\">\r\n                                    <p>Total Tasks</p>\r\n                                    <h3>385</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-6 text-center\">\r\n                                <div class=\"stats-box mb-4\">\r\n                                    <p>Overdue Tasks</p>\r\n                                    <h3>19</h3>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"progress mb-4\">\r\n                        <div class=\"progress-bar bg-purple\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">30%</div>\r\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"18\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">22%</div>\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 24%\" aria-valuenow=\"12\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">24%</div>\r\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 26%\" aria-valuenow=\"14\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">21%</div>\r\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"14\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">10%</div>\r\n                    </div>\r\n                    <div>\r\n                        <p><i class=\"fa fa-dot-circle-o text-purple mr-2\"></i>Completed Tasks <span\r\n                                class=\"float-right\">166</span></p>\r\n                        <p><i class=\"fa fa-dot-circle-o text-warning mr-2\"></i>Inprogress Tasks <span\r\n                                class=\"float-right\">115</span></p>\r\n                        <p><i class=\"fa fa-dot-circle-o text-success mr-2\"></i>On Hold Tasks <span\r\n                                class=\"float-right\">31</span></p>\r\n                        <p><i class=\"fa fa-dot-circle-o text-danger mr-2\"></i>Pending Tasks <span\r\n                                class=\"float-right\">47</span></p>\r\n                        <p class=\"mb-0\"><i class=\"fa fa-dot-circle-o text-info mr-2\"></i>Review Tasks <span\r\n                                class=\"float-right\">5</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-6 col-xl-4 d-flex\">\r\n            <div class=\"card flex-fill\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Today Absent <span class=\"badge bg-inverse-danger ml-2\">5</span></h4>\r\n                    <div class=\"leave-info-box\">\r\n                        <div class=\"media align-items-center\">\r\n                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                    src=\"assets/img/profiles/avatar-17.jpg\"></a>\r\n                            <div class=\"media-body\">\r\n                                <div class=\"text-sm my-0\">Martin Lewis</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row align-items-center mt-3\">\r\n                            <div class=\"col-6\">\r\n                                <h6 class=\"mb-0\">4 Sep 2019</h6>\r\n                                <span class=\"text-sm text-muted\">Leave Date</span>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\">\r\n                                <span class=\"badge bg-inverse-danger\">Pending</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"leave-info-box\">\r\n                        <div class=\"media align-items-center\">\r\n                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                    src=\"assets/img/profiles/avatar-18.jpg\"></a>\r\n                            <div class=\"media-body\">\r\n                                <div class=\"text-sm my-0\">Martin Lewis</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row align-items-center mt-3\">\r\n                            <div class=\"col-6\">\r\n                                <h6 class=\"mb-0\">4 Sep 2019</h6>\r\n                                <span class=\"text-sm text-muted\">Leave Date</span>\r\n                            </div>\r\n                            <div class=\"col-6 text-right\">\r\n                                <span class=\"badge bg-inverse-success\">Approved</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"load-more text-center\">\r\n                        <a class=\"text-dark\">Load More</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <!-- /Statistics Widget -->\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Invoices</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-nowrap custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Invoice ID</th>\r\n                                    <th>Client</th>\r\n                                    <th>Due Date</th>\r\n                                    <th>Total</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0001</a></td>\r\n                                    <td>\r\n                                        <h2><a>Global Technologies</a></h2>\r\n                                    </td>\r\n                                    <td>11 Mar 2019</td>\r\n                                    <td>$380</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-warning\">Partially Paid</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0002</a></td>\r\n                                    <td>\r\n                                        <h2><a>Delta Infotech</a></h2>\r\n                                    </td>\r\n                                    <td>8 Feb 2019</td>\r\n                                    <td>$500</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-success\">Paid</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0003</a></td>\r\n                                    <td>\r\n                                        <h2><a>Cream Inc</a></h2>\r\n                                    </td>\r\n                                    <td>23 Jan 2019</td>\r\n                                    <td>$60</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-danger\">Unpaid</span>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/invoice/invoicelist\">View all invoices</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Payments</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table table-nowrap mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Invoice ID</th>\r\n                                    <th>Client</th>\r\n                                    <th>Payment Type</th>\r\n                                    <th>Paid Date</th>\r\n                                    <th>Paid Amount</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0001</a></td>\r\n                                    <td>\r\n                                        <h2><a>Global Technologies</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>11 Mar 2019</td>\r\n                                    <td>$380</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0002</a></td>\r\n                                    <td>\r\n                                        <h2><a>Delta Infotech</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>8 Feb 2019</td>\r\n                                    <td>$500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/accounts/invoice-view\">#INV-0003</a></td>\r\n                                    <td>\r\n                                        <h2><a>Cream Inc</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>23 Jan 2019</td>\r\n                                    <td>$60</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/payment/paymentllist\">View all payments</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Clients</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Status</th>\r\n                                    <th class=\"text-right\">Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-5.jpg\"></a>\r\n                                            <a routerLink=\"/employees/employeeprofile\">Barry Cuda <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>barrycuda@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-11.jpg\"></a>\r\n                                            <a routerLink=\"/employees/employeeprofile\">Tressa Wexler\r\n                                                <span>Manager</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>tressawexler@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-7.jpg\"></a>\r\n                                            <a routerLink=\"/employees/employeeprofile\">Ruby Bartlett\r\n                                                <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>rubybartlett@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-6.jpg\"></a>\r\n                                            <a routerLink=\"/employees/employeeprofile\"> Misty Tison <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>mistytison@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-14.jpg\"></a>\r\n                                            <a routerLink=\"/employees/employeeprofile\"> Daniel Deacon\r\n                                                <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>danieldeacon@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/clients/clientspage\">View all clients</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Recent Projects</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Project Name </th>\r\n                                    <th>Progress</th>\r\n                                    <th class=\"text-right\">Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/projects/projectview\">Office Management</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>1</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>9</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" data-toggle=\"tooltip\"\r\n                                                title=\"65%\" style=\"width: 65%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/projects/projectview\">Project Management</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>2</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>5</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" data-toggle=\"tooltip\"\r\n                                                title=\"15%\" style=\"width: 15%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/projects/projectview\">Video Calling App</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>3</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>3</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" data-toggle=\"tooltip\"\r\n                                                title=\"49%\" style=\"width: 49%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/projects/projectview\">Hospital Administration</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>12</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>4</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" data-toggle=\"tooltip\"\r\n                                                title=\"88%\" style=\"width: 88%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/projects/projectview\">Digital Marketplace</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>7</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>14</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" data-toggle=\"tooltip\"\r\n                                                title=\"100%\" style=\"width: 100%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-right\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/projects/projectpage\">View all projects</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "RMkp":
    /*!******************************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/employee-dashboard/employee-dashboard.component.css ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RMkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n/* for analog clock */\r\n\r\n.clock{\r\n\tposition: relative;\r\n\twidth: 170px;\r\n\theight: 170px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n\tborder: 3px solid rgb(159, 157, 157);\r\n\tbox-shadow: inset 0 0 30px rgba(0,0,0,0.1),\r\n\t                  0 20px 20px rgba(0,0,0,.2),\r\n\t\t\t\t\t  0 0 0 4px rgba(255,255,255,1);\r\n\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n.clock::before\r\n{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground: #848484;\r\n\tborder: 2px solid #fff;\r\n\tz-index: 100000;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.sec-hand{\r\n\twidth: 1px;\r\n\theight: 50%;\r\n\tbackground: #ff6767;\r\n\ttransform-origin: 50% 80%;\r\n\tposition: absolute;\r\n\ttop: 10%;\r\n\tleft: 50%;\r\n\tborder-radius: 100% 100% 0 0;\r\n}\r\n\r\n.min-hand{\r\n\twidth: 3px;\r\n\theight: 40%;\r\n\tbackground: #d6d6d6;\r\n\ttransform-origin: 50% 80%;\r\n\tposition: absolute;\r\n\ttop: 18%;\r\n\tleft: calc(50% - 1px);\r\n\tborder-radius: 100% 100% 0 0;\r\n}\r\n\r\n.hr-hand\r\n{\r\n\twidth: 5px;\r\n\theight: 25%;\r\n\tbackground: #848484;\r\n\ttransform-origin: 50% 80%;\r\n\tposition: absolute;\r\n\ttop: 30%;\r\n\tleft: calc(50% + -2px);\r\n\tborder-radius: 100% 100% 0 0;\r\n}\r\n\r\n.num{\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tleft: calc(50% - 0.5em);\r\n}\r\n\r\n.num div{\r\n\twidth: 1em;\r\n\tline-height: 2em;\r\n\tcolor: rgb(133,131,131);\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.num1\r\n{\r\n\ttransform: rotate(30deg);\r\n}\r\n\r\n.num1 div\r\n{\r\n\ttransform: rotate(-30deg);\r\n}\r\n\r\n.num2\r\n{\r\n\ttransform: rotate(60deg);\r\n}\r\n\r\n.num2 div\r\n{\r\n\ttransform: rotate(-60deg);\r\n}\r\n\r\n.num3\r\n{\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.num3 div\r\n{\r\n\ttransform: rotate(-90deg);\r\n}\r\n\r\n.num4\r\n{\r\n\ttransform: rotate(120deg);\r\n}\r\n\r\n.num4 div\r\n{\r\n\ttransform: rotate(-120deg);\r\n}\r\n\r\n.num5\r\n{\r\n\ttransform: rotate(150deg);\r\n}\r\n\r\n.num5 div\r\n{\r\n\ttransform: rotate(-150deg);\r\n}\r\n\r\n.num6\r\n{\r\n\ttransform: rotate(180deg);\r\n}\r\n\r\n.num6 div\r\n{\r\n\ttransform: rotate(-180deg);\r\n}\r\n\r\n.num7\r\n{\r\n\ttransform: rotate(210deg);\r\n}\r\n\r\n.num7 div\r\n{\r\n\ttransform: rotate(-210deg);\r\n}\r\n\r\n.num8\r\n{\r\n\ttransform: rotate(240deg);\r\n}\r\n\r\n.num8 div\r\n{\r\n\ttransform: rotate(-240deg);\r\n}\r\n\r\n.num9\r\n{\r\n\ttransform: rotate(270deg);\r\n}\r\n\r\n.num9 div\r\n{\r\n\ttransform: rotate(-270deg);\r\n}\r\n\r\n.num10\r\n{\r\n\ttransform: rotate(300deg);\r\n}\r\n\r\n.num10 div\r\n{\r\n\ttransform: rotate(-300deg);\r\n}\r\n\r\n.num11\r\n{\r\n\ttransform: rotate(330deg);\r\n}\r\n\r\n.num11 div\r\n{\r\n\ttransform: rotate(-330deg);\r\n}\r\n\r\n.num12\r\n{\r\n\ttransform: rotate(360deg);\r\n}\r\n\r\n.num12 div\r\n{\r\n\ttransform: rotate(-360deg);\r\n}\r\n\r\n/* for digital clock */\r\n\r\n:host{\r\n\tdisplay: flex;\r\n\tjustify-items: center;\r\n\talign-items: center;\r\n\theight: auto;\r\n\twidth: auto;\r\n\t/* background-color: #bbe1fa; */\r\n}\r\n\r\n.digitalClock\r\n{\r\n\tmargin-top: 40px;\r\n\tposition: relative;\r\n\twidth: auto;\r\n\theight:auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground-color: #fdfdfd;\r\n\tborder: 3px solid rgb(159, 157, 157);\r\n\tborder-radius: 5px;\r\n\tbox-shadow: inset 0 0 15px black\r\n\t                  0 20px 20px rgba(0, 0, 0, .4);\r\n    \r\n\tcolor: rgb(72, 70, 70);\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.digitalTime\r\n{\r\n display: flex;\r\n}\r\n\r\n.dayTitle\r\n{\r\n\tfont-size: 16px;\r\n}\r\n\r\n.img-design\r\n{\r\n\twidth: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.center-clock{\r\n\t/* display: flex; */\r\n\tjustify-content: center;\r\n\talign-items: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkOztBQUVBLHFCQUFxQjs7QUFDckI7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG9DQUFvQztDQUNwQzs7b0NBRW1DOztDQUVuQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IscUJBQXFCO0NBQ3JCLDRCQUE0QjtBQUM3Qjs7QUFDQTs7Q0FFQyxVQUFVO0NBQ1YsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLHdCQUF3QjtBQUN6Qjs7QUFDQTs7Q0FFQyx5QkFBeUI7QUFDMUI7O0FBRUE7O0NBRUMsd0JBQXdCO0FBQ3pCOztBQUNBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFFQTs7Q0FFQyx3QkFBd0I7QUFDekI7O0FBQ0E7O0NBRUMseUJBQXlCO0FBQzFCOztBQUVBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFDQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMseUJBQXlCO0FBQzFCOztBQUNBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7O0FBQ0E7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFDQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMseUJBQXlCO0FBQzFCOztBQUNBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7O0FBQ0E7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFDQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMseUJBQXlCO0FBQzFCOztBQUNBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyx5QkFBeUI7QUFDMUI7O0FBQ0E7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBLHNCQUFzQjs7QUFFdEI7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osV0FBVztDQUNYLCtCQUErQjtBQUNoQzs7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixvQ0FBb0M7Q0FDcEMsa0JBQWtCO0NBQ2xCO2dEQUMrQzs7Q0FFL0Msc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjs7QUFHQTs7Q0FFQyxhQUFhO0FBQ2Q7O0FBQ0E7O0NBRUMsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxXQUFXO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6ImVtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi8qIGZvciBhbmFsb2cgY2xvY2sgKi9cclxuLmNsb2Nre1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTcwcHg7XHJcblx0aGVpZ2h0OiAxNzBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgcmdiKDE1OSwgMTU3LCAxNTcpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAzMHB4IHJnYmEoMCwwLDAsMC4xKSxcclxuXHQgICAgICAgICAgICAgICAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLC4yKSxcclxuXHRcdFx0XHRcdCAgMCAwIDAgNHB4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcblxyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNsb2NrOjpiZWZvcmVcclxue1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0YmFja2dyb3VuZDogIzg0ODQ4NDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cdHotaW5kZXg6IDEwMDAwMDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zZWMtaGFuZHtcclxuXHR3aWR0aDogMXB4O1xyXG5cdGhlaWdodDogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNmZjY3Njc7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogNTAlIDgwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAwIDA7XHJcbn1cclxuXHJcbi5taW4taGFuZHtcclxuXHR3aWR0aDogM3B4O1xyXG5cdGhlaWdodDogNDAlO1xyXG5cdGJhY2tncm91bmQ6ICNkNmQ2ZDY7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogNTAlIDgwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxOCU7XHJcblx0bGVmdDogY2FsYyg1MCUgLSAxcHgpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAwIDA7XHJcbn1cclxuLmhyLWhhbmRcclxue1xyXG5cdHdpZHRoOiA1cHg7XHJcblx0aGVpZ2h0OiAyNSU7XHJcblx0YmFja2dyb3VuZDogIzg0ODQ4NDtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDMwJTtcclxuXHRsZWZ0OiBjYWxjKDUwJSArIC0ycHgpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAwIDA7XHJcbn1cclxuXHJcbi5udW17XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDAuNWVtKTtcclxufVxyXG4ubnVtIGRpdntcclxuXHR3aWR0aDogMWVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAyZW07XHJcblx0Y29sb3I6IHJnYigxMzMsMTMxLDEzMSk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5udW0xXHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbn1cclxuLm51bTEgZGl2XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xyXG59XHJcblxyXG4ubnVtMlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG59XHJcbi5udW0yIGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxufVxyXG5cclxuLm51bTNcclxue1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4ubnVtMyBkaXZcclxue1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuXHJcbi5udW00XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcbi5udW00IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XHJcbn1cclxuXHJcbi5udW01XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG59XHJcbi5udW01IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTE1MGRlZyk7XHJcbn1cclxuXHJcbi5udW02XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5udW02IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbn1cclxuXHJcbi5udW03XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG59XHJcbi5udW03IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTIxMGRlZyk7XHJcbn1cclxuXHJcbi5udW04XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG59XHJcbi5udW04IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XHJcbn1cclxuXHJcbi5udW05XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG59XHJcbi5udW05IGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTI3MGRlZyk7XHJcbn1cclxuXHJcbi5udW0xMFxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxufVxyXG4ubnVtMTAgZGl2XHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzAwZGVnKTtcclxufVxyXG5cclxuLm51bTExXHJcbntcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG59XHJcbi5udW0xMSBkaXZcclxue1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC0zMzBkZWcpO1xyXG59XHJcblxyXG4ubnVtMTJcclxue1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbn1cclxuLm51bTEyIGRpdlxyXG57XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbn1cclxuXHJcbi8qIGZvciBkaWdpdGFsIGNsb2NrICovXHJcblxyXG46aG9zdHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR3aWR0aDogYXV0bztcclxuXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlMWZhOyAqL1xyXG59XHJcbi5kaWdpdGFsQ2xvY2tcclxue1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDphdXRvO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgcmdiKDE1OSwgMTU3LCAxNTcpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCBibGFja1xyXG5cdCAgICAgICAgICAgICAgICAgIDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgXHJcblx0Y29sb3I6IHJnYig3MiwgNzAsIDcwKTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLmRpZ2l0YWxUaW1lXHJcbntcclxuIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRheVRpdGxlXHJcbntcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pbWctZGVzaWduXHJcbntcclxuXHR3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlci1jbG9ja3tcclxuXHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "V0n0":
    /*!************************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/admin-dashboard/admin-dashboard.component.css ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V0n0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "VqlG":
    /*!**************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard.component.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function VqlG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "uyBo");
      /* harmony import */


      var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.css */
      "IqOy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(ngZone, router) {
          var _this5 = this;

          _classCallCheck(this, DashboardComponent);

          this.ngZone = ngZone;
          this.router = router;

          window.onresize = function (e) {
            _this5.ngZone.run(function () {
              _this5.innerHeight = window.innerHeight + "px";
            });
          };

          this.getScreenHeight();
        }

        _createClass(DashboardComponent, [{
          key: "getScreenHeight",
          value: function getScreenHeight() {
            this.innerHeight = window.innerHeight + "px";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.navigateByUrl("/dashboard/employee");
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = event.target.innerHeight + "px";
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("window: resize", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DashboardComponent);
      /***/
    },

    /***/
    "YCd9":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/components/employee-dashboard/employee-dashboard.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: EmployeeDashboardComponent */

    /***/
    function YCd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDashboardComponent", function () {
        return EmployeeDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employee_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employee-dashboard.component.html */
      "bIsU");
      /* harmony import */


      var _employee_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-dashboard.component.css */
      "RMkp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/login/services/login.service */
      "d//k");
      /* harmony import */


      var src_app_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helper */
      "rmPI");
      /* harmony import */


      var _services_employee_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/employee-dashboard.service */
      "cRb6");

      var EmployeeDashboardComponent = /*#__PURE__*/function () {
        function EmployeeDashboardComponent(empDeshbrd, login) {
          _classCallCheck(this, EmployeeDashboardComponent);

          this.empDeshbrd = empDeshbrd;
          this.login = login;
          this.daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          this.monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          this.date = new Date();
        }

        _createClass(EmployeeDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setInterval(function () {
              var date = new Date();

              _this6.updateClock(date);
            }, 1000);
            this.day = this.daysArray[this.date.getDay()];
            this.dateCount = this.date.getDate();
            this.month = this.monthArray[this.date.getMonth()];
            this.year = this.date.getFullYear();
            this.lastSevenDaysAttn();
            this.lodeLoginUser();
          }
        }, {
          key: "updateClock",
          value: function updateClock(date) {
            //for analog
            this.secHand.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
            this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
            this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)'; //for digital

            var hours = date.getHours();
            this.ampm = hours >= 12 ? 'PM' : 'AM';
            this.hour = hours % 12; //make hour in 12 hour formate

            this.hour = this.hour ? this.hour : 12; // if the hour is 0 thn 12 is assign

            this.hour = this.hour < 10 ? '0' + this.hour : this.hour; // if houtr is single digite thn add 0 before it

            var minutes = date.getMinutes();
            this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
            var seconds = date.getSeconds();
            this.second = seconds < 10 ? '0' + seconds : seconds.toString();
          }
        }, {
          key: "lastSevenDaysAttn",
          value: function lastSevenDaysAttn() {
            var _this7 = this;

            this.empDeshbrd.getLastSevenDaysAttn().subscribe(function (data) {
              _this7.last7DaysAttn = data;
              console.log(_this7.last7DaysAttn);
            });
          }
        }, {
          key: "lodeLoginUser",
          value: function lodeLoginUser() {
            this.user = this.login.getUser();
            this.profileImageUrl = src_app_helper__WEBPACK_IMPORTED_MODULE_5__["default"] + this.user.pic_;
          }
        }]);

        return EmployeeDashboardComponent;
      }();

      EmployeeDashboardComponent.ctorParameters = function () {
        return [{
          type: _services_employee_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeDashboardService"]
        }, {
          type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      };

      EmployeeDashboardComponent.propDecorators = {
        hrHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['hrHand', {
            "static": false
          }]
        }],
        minHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['minHand', {
            "static": false
          }]
        }],
        secHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['secHand', {
            "static": false
          }]
        }]
      };
      EmployeeDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-dashboard',
        template: _raw_loader_employee_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_employee_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeDashboardService"], src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])], EmployeeDashboardComponent);
      /***/
    },

    /***/
    "bIsU":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/dashboard/components/employee-dashboard/employee-dashboard.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bIsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"welcome-box\">\r\n                <div class=\"welcome-img\">\r\n                    <img class=\"img-design\" [src]=\"profileImageUrl\" onerror=\"this.src='assets/img/profiles/avatar-5.jpg'\" alt=\"\">\r\n                </div>\r\n                <div class=\"welcome-det\">\r\n                   <div>\r\n                       <h3>Welcome, {{user.firstName}}</h3>\r\n                  </div>\r\n                  <div class=\"dayTitle\">\r\n                    {{day}}, {{dateCount}} {{month}} {{year}}\r\n                    \r\n                </div>\r\n                   \r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8 col-md-8\">\r\n            <section class=\"dash-section\">\r\n                <h1 class=\"dash-sec-title\">Notifications</h1>\r\n             \r\n            </section>\r\n\r\n          \r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-4\">\r\n            <div class=\"dash-sidebar\">\r\n                <section>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"center-clock\">\r\n\r\n                                <div class=\"row\">\r\n\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"clock\">\r\n                                          <div class=\"num num1\"><div>1</div></div>\r\n                                          <div class=\"num num2\"><div>2</div></div>\r\n                                          <div class=\"num num3\"><div>3</div></div>\r\n                                          <div class=\"num num4\"><div>4</div></div>\r\n                                          <div class=\"num num5\"><div>5</div></div>\r\n                                          <div class=\"num num6\"><div>6</div></div>\r\n                                          <div class=\"num num7\"><div>7</div></div>\r\n                                          <div class=\"num num8\"><div>8</div></div>\r\n                                          <div class=\"num num9\"><div>9</div></div>\r\n                                          <div class=\"num num10\"><div>10</div></div>\r\n                                          <div class=\"num num11\"><div>11</div></div>\r\n                                          <div class=\"num num12\"><div>12</div></div>\r\n                                          <div class=\"hr-hand\" #hrHand></div>\r\n                                          <div class=\"min-hand\" #minHand></div>\r\n                                          <div class=\"sec-hand\" #secHand></div>\r\n                                      </div>\r\n                                    </div>\r\n    \r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"center-clock\">\r\n                                        \r\n                                            <div class=\"digitalClock\">\r\n                                               \r\n                                                <div class=\"digitalTime\">\r\n                                                    <div>{{hour}} : &nbsp;</div>\r\n                                                    <div>{{minute}} : &nbsp;</div>\r\n                                                    <div>{{second}}  &nbsp;</div>\r\n                                                    <div>{{ampm}}</div>\r\n                                                    &nbsp;&nbsp; | &nbsp;&nbsp;{{dateCount}} {{month}} {{year}}\r\n                                                </div>\r\n          \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                   \r\n                                </div>\r\n                            </div>\r\n                            \r\n\r\n                        </div>\r\n                    </div>\r\n                   \r\n                   \r\n                    \r\n                \r\n                </section>\r\n                <section>\r\n                    <h3 >My Last 7 Days Attendance</h3>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <table class=\"table table-sm\">\r\n                                <thead>\r\n                                  <tr>\r\n                                   \r\n                                    <th scope=\"col\">Date</th>\r\n                                    <th scope=\"col\">In </th>\r\n                                    <th scope=\"col\">Out </th>\r\n                                    <th scope=\"col\">Status</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let row of last7DaysAttn;let i = index\" style=\"font-size: 12px;\">\r\n                       \r\n                                     \r\n                                        <td>{{row.createDate| date}}</td>\r\n                                        <td>{{row.inTime}}</td>\r\n                                        <td>{{row.outTime}}</td>\r\n                                        <td *ngIf=\"row.isColor==1\" style=\"color: green;\">\r\n                                            {{row.attnDayStsFinalType}}\r\n                                        </td>\r\n                                        <td *ngIf=\"row.isColor==2\" style=\"color: #5c592d;\">\r\n                                            {{row.attnDayStsFinalType}}\r\n                                        </td>\r\n                                        \r\n                                        <td *ngIf=\"row.isColor==null\" style=\"color: rgb(228, 19, 36);\">\r\n                                            {{row.attnDayStsFinalType}}\r\n                                        </td>\r\n                                        <td *ngIf=\"row.isColor==4\" style=\"color: rgb(251, 182, 54);\">\r\n                                            {{row.attnDayStsFinalType}}\r\n                                        </td>\r\n                                        <td *ngIf=\"row.isColor==3\" style=\"color: rgb(251, 182, 54);\">\r\n                                            {{row.attnDayStsFinalType}}\r\n                                        </td>\r\n                                 \r\n                                    </tr>\r\n                                  \r\n                                </tbody>\r\n                              </table>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                </section>\r\n              \r\n            \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "cRb6":
    /*!******************************************************************************!*\
      !*** ./src/app/all-modules/dashboard/services/employee-dashboard.service.ts ***!
      \******************************************************************************/

    /*! exports provided: EmployeeDashboardService */

    /***/
    function cRb6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeDashboardService", function () {
        return EmployeeDashboardService;
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


      var src_app_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helper */
      "rmPI");

      var EmployeeDashboardService = /*#__PURE__*/function () {
        function EmployeeDashboardService(http) {
          _classCallCheck(this, EmployeeDashboardService);

          this.http = http;
        } // Get last 7 day attn  


        _createClass(EmployeeDashboardService, [{
          key: "getLastSevenDaysAttn",
          value: function getLastSevenDaysAttn() {
            return this.http.get("".concat(src_app_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/attnProc/lastSevenDaysAttn"));
          }
        }]);

        return EmployeeDashboardService;
      }();

      EmployeeDashboardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EmployeeDashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EmployeeDashboardService);
      /***/
    },

    /***/
    "uyBo":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/dashboard/dashboard.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uyBo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";
      /***/
    },

    /***/
    "vG3P":
    /*!*******************************************************************!*\
      !*** ./src/app/all-modules/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function vG3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "VqlG");
      /* harmony import */


      var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/admin-dashboard/admin-dashboard.component */
      "2PL2");
      /* harmony import */


      var _components_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/employee-dashboard/employee-dashboard.component */
      "YCd9");

      var routes = [{
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [{
          path: "admin",
          component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]
        }, {
          path: "employee",
          component: _components_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDashboardComponent"]
        }]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
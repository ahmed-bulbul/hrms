(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leavereports-leavereports-module"], {
    /***/
    "+aVV":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/leavereports/leavereports.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aVV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "9kvG":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kvG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"page-header\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"page-title\">Leave Report</h3>\r\n\t\t\t\t\t\t\t\t<ul class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Leave Report</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">PDF</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row mb-4\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control floating\" type=\"text\">\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Employee</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus\">\r\n\t\t\t\t\t\t\t\t<select class=\"select  form-control\">\r\n\t\t\t\t\t\t\t\t\t<option>Select Department</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Finance</option>\r\n\t\t\t\t\t\t\t\t\t<option>Hr & Finance</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">From</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">To</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-success btn-block\"> Search </a>  \r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Employee</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Leave Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>No.of Days</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Remaining Leave</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Leaves</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Leave Taken</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Leave Carry Forward</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let fees of lstFees;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-2.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/profilelist\">{{fees.name1}} <span>#{{fees.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-info btn-sm\">{{fees.leavetype}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-danger btn-sm\">{{fees.noofdays}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-warning btn-sm\"><b>{{fees.remainingleave}}</b></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-success btn-sm\"><b>{{fees.totalleaves}}</b></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{fees.totalleavetaken}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{fees.leavecarryforward}}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";
      /***/
    },

    /***/
    "CtdO":
    /*!*******************************************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LeavereportsListComponent */

    /***/
    function CtdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavereportsListComponent", function () {
        return LeavereportsListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leavereports_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leavereports-list.component.html */
      "9kvG");
      /* harmony import */


      var _leavereports_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leavereports-list.component.css */
      "dbnT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _all_modules_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../all-modules.service */
      "IhMt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LeavereportsListComponent = /*#__PURE__*/function () {
        function LeavereportsListComponent(srvModuleService) {
          _classCallCheck(this, LeavereportsListComponent);

          this.srvModuleService = srvModuleService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
          this.url = "leavereports";
        }

        _createClass(LeavereportsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Floating Label
            if ($('.floating').length > 0) {
              $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
              }).trigger('blur');
            }

            this.loadFees(); // for data table configuration

            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              dom: "lrtip"
            };
          } // Get Fees List  Api Call

        }, {
          key: "loadFees",
          value: function loadFees() {
            var _this = this;

            this.srvModuleService.get(this.url).subscribe(function (data) {
              _this.lstFees = data;

              _this.dtTrigger.next();
            });
          } // destroy data table when leaving

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return LeavereportsListComponent;
      }();

      LeavereportsListComponent.ctorParameters = function () {
        return [{
          type: _all_modules_service__WEBPACK_IMPORTED_MODULE_6__["AllModulesService"]
        }];
      };

      LeavereportsListComponent.propDecorators = {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], {
            "static": true
          }]
        }]
      };
      LeavereportsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leavereports-list',
        template: _raw_loader_leavereports_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leavereports_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_6__["AllModulesService"]])], LeavereportsListComponent);
      /***/
    },

    /***/
    "Fcm1":
    /*!*********************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function Fcm1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "KQSM":
    /*!*****************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports.module.ts ***!
      \*****************************************************************/

    /*! exports provided: LeavereportsModule */

    /***/
    function KQSM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavereportsModule", function () {
        return LeavereportsModule;
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _leavereports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./leavereports-routing.module */
      "VCX3");
      /* harmony import */


      var _leavereports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leavereports.component */
      "vRv3");
      /* harmony import */


      var _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leavereports-list/leavereports-list.component */
      "CtdO");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "oW1M");
      /* harmony import */


      var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/sharing/sharing.module */
      "0jEk");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");

      var LeavereportsModule = function LeavereportsModule() {
        _classCallCheck(this, LeavereportsModule);
      };

      LeavereportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_leavereports_component__WEBPACK_IMPORTED_MODULE_5__["LeavereportsComponent"], _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_6__["LeavereportsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leavereports_routing_module__WEBPACK_IMPORTED_MODULE_4__["LeavereportsRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_9__["PickListModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_8__["SharingModule"]]
      })], LeavereportsModule);
      /***/
    },

    /***/
    "VCX3":
    /*!*************************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: LeavereportsRoutingModule */

    /***/
    function VCX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavereportsRoutingModule", function () {
        return LeavereportsRoutingModule;
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


      var _leavereports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leavereports.component */
      "vRv3");
      /* harmony import */


      var _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./leavereports-list/leavereports-list.component */
      "CtdO");

      var routes = [{
        path: "",
        component: _leavereports_component__WEBPACK_IMPORTED_MODULE_3__["LeavereportsComponent"],
        children: [{
          path: "leave-reports",
          component: _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_4__["LeavereportsListComponent"]
        }]
      }];

      var LeavereportsRoutingModule = function LeavereportsRoutingModule() {
        _classCallCheck(this, LeavereportsRoutingModule);
      };

      LeavereportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeavereportsRoutingModule);
      /***/
    },

    /***/
    "dbnT":
    /*!********************************************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.css ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function dbnT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZXJlcG9ydHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "vRv3":
    /*!********************************************************************!*\
      !*** ./src/app/all-modules/leavereports/leavereports.component.ts ***!
      \********************************************************************/

    /*! exports provided: LeavereportsComponent */

    /***/
    function vRv3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavereportsComponent", function () {
        return LeavereportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leavereports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leavereports.component.html */
      "+aVV");
      /* harmony import */


      var _leavereports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leavereports.component.css */
      "Fcm1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LeavereportsComponent = /*#__PURE__*/function () {
        function LeavereportsComponent(ngZone) {
          var _this2 = this;

          _classCallCheck(this, LeavereportsComponent);

          this.ngZone = ngZone;

          window.onresize = function (e) {
            _this2.ngZone.run(function () {
              _this2.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(LeavereportsComponent, [{
          key: "getScreenHeight",
          value: function getScreenHeight() {
            this.innerHeight = window.innerHeight + 'px';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.innerHeight = event.target.innerHeight + 'px';
          }
        }]);

        return LeavereportsComponent;
      }();

      LeavereportsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      LeavereportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leavereports',
        template: _raw_loader_leavereports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leavereports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], LeavereportsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=leavereports-leavereports-module-es5.js.map
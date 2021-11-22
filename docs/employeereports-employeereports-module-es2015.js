(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employeereports-employeereports-module"],{

/***/ "96Fy":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/employeereports/employeereports-list/employeereports-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"page-header\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"page-title\">Employee Report</h3>\r\n\t\t\t\t\t\t\t\t<ul class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Employee Report</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-auto\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">PDF</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row mb-4\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control floating\" type=\"text\" (input)=\"searchEmployee($event.target.value)\">\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Employee</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus\">\r\n\t\t\t\t\t\t\t\t<select class=\"select  form-control\" (input)=\"searchDepartment($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select Department</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Finance</option>\r\n\t\t\t\t\t\t\t\t\t<option>Hr & Finance</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">From</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">To</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-success btn-block\"> Search </a>  \r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Employee Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Employee Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Designation</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Joining Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>DOB</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Martial Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Gender</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Terminated Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Relieving Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Salary</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Contact Number</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Emercency Contact Details</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Experience</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstEmployee\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-2.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/profilelist\" class=\"text-primary\">{{item.name1}} <span>{{item.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.employeetype}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-info\">{{item.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.designation}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.joiningdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.dob}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.marritalstatus}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.gender}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.terminateddate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.relievingdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.salary}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.address}}\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.contactnumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.contactnumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.experience}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><button class=\"btn btn-outline-success btn-sm\">{{item.status}}</button></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n                \r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->");

/***/ }),

/***/ "CmBZ":
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeereportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeereportsModule", function() { return EmployeereportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employeereports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employeereports-routing.module */ "R0tK");
/* harmony import */ var _employeereports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeereports.component */ "LuK5");
/* harmony import */ var _employeereports_list_employeereports_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employeereports-list/employeereports-list.component */ "PGex");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "oW1M");
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sharing/sharing.module */ "0jEk");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ "iHf9");











let EmployeereportsModule = class EmployeereportsModule {
};
EmployeereportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_employeereports_component__WEBPACK_IMPORTED_MODULE_4__["EmployeereportsComponent"], _employeereports_list_employeereports_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeereportsListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _employeereports_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeereportsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__["PickListModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__["SharingModule"],
        ]
    })
], EmployeereportsModule);



/***/ }),

/***/ "LuK5":
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeereportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeereportsComponent", function() { return EmployeereportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employeereports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employeereports.component.html */ "oJHw");
/* harmony import */ var _employeereports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employeereports.component.css */ "wokS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeereportsComponent = class EmployeereportsComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.innerHeight = window.innerHeight + 'px';
            });
        };
        this.getScreenHeight();
    }
    getScreenHeight() {
        this.innerHeight = window.innerHeight + 'px';
    }
    ngOnInit() {
    }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
    }
};
EmployeereportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
EmployeereportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employeereports',
        template: _raw_loader_employeereports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employeereports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], EmployeereportsComponent);



/***/ }),

/***/ "PGex":
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports-list/employeereports-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EmployeereportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeereportsListComponent", function() { return EmployeereportsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employeereports_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employeereports-list.component.html */ "96Fy");
/* harmony import */ var _employeereports_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employeereports-list.component.css */ "kIi7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../all-modules.service */ "IhMt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










let EmployeereportsListComponent = class EmployeereportsListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]("en-US");
        // public lstUseralljobs: any[];
        this.url = "employeereport";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadEmployee();
    }
    // Get department list  Api Call
    LoadEmployee() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstEmployee = data;
            this.dtTrigger.next();
            this.rows = this.lstEmployee;
            this.srch = [...this.rows];
        });
    }
    //search by designation
    searchEmployee(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.name1.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by jobtype
    searchDepartment(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.department.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
EmployeereportsListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
EmployeereportsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: false },] }]
};
EmployeereportsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employeereports-list',
        template: _raw_loader_employeereports_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employeereports_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
], EmployeereportsListComponent);



/***/ }),

/***/ "R0tK":
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeereportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeereportsRoutingModule", function() { return EmployeereportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employeereports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employeereports.component */ "LuK5");
/* harmony import */ var _employeereports_list_employeereports_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeereports-list/employeereports-list.component */ "PGex");





const routes = [
    {
        path: "",
        component: _employeereports_component__WEBPACK_IMPORTED_MODULE_3__["EmployeereportsComponent"],
        children: [
            {
                path: "employee-reports",
                component: _employeereports_list_employeereports_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeereportsListComponent"]
            }
        ]
    }
];
let EmployeereportsRoutingModule = class EmployeereportsRoutingModule {
};
EmployeereportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeereportsRoutingModule);



/***/ }),

/***/ "kIi7":
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports-list/employeereports-list.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXJlcG9ydHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oJHw":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/employeereports/employeereports.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "wokS":
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/employeereports/employeereports.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=employeereports-employeereports-module-es2015.js.map
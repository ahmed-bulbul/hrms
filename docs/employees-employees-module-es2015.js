(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "DKai":
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/employees/components/all-employees/all-employees.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AllEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEmployeesComponent", function() { return AllEmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_employees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-employees.component.html */ "PB4B");
/* harmony import */ var _all_employees_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-employees.component.css */ "iZIs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AllEmployeesComponent = class AllEmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AllEmployeesComponent.ctorParameters = () => [];
AllEmployeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-employees',
        template: _raw_loader_all_employees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_employees_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AllEmployeesComponent);



/***/ }),

/***/ "PB4B":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/employees/components/all-employees/all-employees.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>all-employees works!</p>\r\n");

/***/ }),

/***/ "YMQh":
/*!***********************************************************!*\
  !*** ./src/app/all-modules/employees/employees.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees-routing.module */ "e/yp");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees.component */ "H3EQ");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "oW1M");
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sharing/sharing.module */ "0jEk");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ "iHf9");
/* harmony import */ var _components_all_employees_all_employees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/all-employees/all-employees.component */ "DKai");
/* harmony import */ var _components_all_employees_employee_page_content_employee_page_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/all-employees/employee-page-content/employee-page-content.component */ "Wddu");
/* harmony import */ var _components_all_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/all-employees/employee-list/employee-list.component */ "msUU");
/* harmony import */ var _components_holidays_holidays_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/holidays/holidays.component */ "wU91");
/* harmony import */ var _components_all_employees_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/all-employees/employee-profile/employee-profile.component */ "aSFI");
/* harmony import */ var _components_attendance_admin_attendance_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/attendance-admin/attendance-admin.component */ "Sp4O");
/* harmony import */ var _components_attendance_employee_attendance_employee_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/attendance-employee/attendance-employee.component */ "/VXB");
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/departments/departments.component */ "dfUu");
/* harmony import */ var _components_designation_designation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/designation/designation.component */ "KL8J");
/* harmony import */ var _components_leave_settings_leave_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/leave-settings/leave-settings.component */ "QAzK");
/* harmony import */ var _components_leaves_admin_leaves_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/leaves-admin/leaves-admin.component */ "8GDL");
/* harmony import */ var _components_overtime_overtime_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/overtime/overtime.component */ "ZuW2");
/* harmony import */ var _components_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/timesheet/timesheet.component */ "P8UC");
/* harmony import */ var _components_all_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/all-employees/add-employee/add-employee.component */ "gDfP");
/* harmony import */ var _components_attendance_row_admin_attendance_row_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/attendance-row-admin/attendance-row-admin.component */ "Fpll");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





























let EmployeesModule = class EmployeesModule {
};
EmployeesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"], _components_all_employees_all_employees_component__WEBPACK_IMPORTED_MODULE_11__["AllEmployeesComponent"], _components_all_employees_employee_page_content_employee_page_content_component__WEBPACK_IMPORTED_MODULE_12__["EmployeePageContentComponent"], _components_all_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"], _components_all_employees_employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeProfileComponent"], _components_holidays_holidays_component__WEBPACK_IMPORTED_MODULE_14__["HolidaysComponent"], _components_leaves_admin_leaves_admin_component__WEBPACK_IMPORTED_MODULE_21__["LeavesAdminComponent"], _components_leave_settings_leave_settings_component__WEBPACK_IMPORTED_MODULE_20__["LeaveSettingsComponent"], _components_attendance_admin_attendance_admin_component__WEBPACK_IMPORTED_MODULE_16__["AttendanceAdminComponent"], _components_attendance_employee_attendance_employee_component__WEBPACK_IMPORTED_MODULE_17__["AttendanceEmployeeComponent"], _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_18__["DepartmentsComponent"], _components_designation_designation_component__WEBPACK_IMPORTED_MODULE_19__["DesignationComponent"], _components_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_23__["TimesheetComponent"], _components_overtime_overtime_component__WEBPACK_IMPORTED_MODULE_22__["OvertimeComponent"], _components_all_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_24__["AddEmployeeComponent"], _components_attendance_row_admin_attendance_row_admin_component__WEBPACK_IMPORTED_MODULE_25__["AttendanceRowAdminComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__["SharingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__["PickListModule"],
            _employees_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmployeesRoutingModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_10__["PickListModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["NgSelectModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
        ]
    })
], EmployeesModule);



/***/ }),

/***/ "iZIs":
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/employees/components/all-employees/all-employees.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr.new2 {\r\n    border-top: 1px dotted #ddd;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1lbXBsb3llZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJhbGwtZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoci5uZXcyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2RkZDtcclxuICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=employees-employees-module-es2015.js.map
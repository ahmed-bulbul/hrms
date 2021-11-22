(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-approval-module"],{

/***/ "0kJu":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/approval/components/approvalProcess/create/create.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Approval Process</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Approval</li>\n                    <li class=\"breadcrumb-item active\">Approval Process</li>\n                    <li class=\"breadcrumb-item active\">Create</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/approval/approval-process\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n                    <form novalidate (ngSubmit)=\"myFormSubmit()\" [formGroup]=\"myForm\">\n                        \n                       \n\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Code</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"code\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Process Name</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"processName\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Sequence</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"sequence\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\n                            <div class=\"col-md-10\">\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\n                            </div>\n                        </div>\n\n                        \n                        <div class=\"text-right\">\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/approval/approval-process\"><i class=\"fa fa-share\"></i> Cancel</a>\n                            &nbsp; &nbsp;\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\n                            </button>\n                            &nbsp; &nbsp;\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                            </button>\n                        </div>\n\n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n");

/***/ }),

/***/ "6wYt":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/approval/components/approvalProcess/approval-process/approval-process.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Approval Process List</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Approval</li>\n                    <li class=\"breadcrumb-item active\">Approval Process</li>\n                    <li class=\"breadcrumb-item active\">List</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-white\">Excel</button>\n                    <button class=\"btn btn-white\">PDF</button>\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- Search Filter -->\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\n        <div class=\"card-body p-3\">\n\n            <div class=\"row filter-row\">\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <input type=\"text\" class=\"form-control floating\" >\n                        <label class=\"focus-label\">Code</label>\n                    </div>\n                </div>\n\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <a class=\"btn btn-success btn-block\" > Search </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- /Search Filter -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                        <a routerLink=\"/approval/approval-process/create\" class=\"btn btn-outline-primary\"><i\n                                class=\"fa fa-plus\"></i> New\n                            &nbsp;&nbsp;&nbsp;</a>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"table-responsive\">\n\n                        <div class=\"d-flex justify-content-start pb-1\">\n                            <div class=\"pgn-displayDataInfo\">\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) *\n                                    configPgn.pageSize) + (1) ) }} to {{configPgn.pngDiplayLastSeq}} of\n                                    {{configPgn.totalItem}} ) entries</span>\n                            </div>\n                        </div>\n\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\">\n                            <thead>\n                                <tr>\n                                    <th>SL</th>\n                                    <th>Code</th>\n                                    <th>Process Name</th>\n                                    <th>Sequence</th>\n                                    <th>Remarks</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let thisObj of listData | paginate : configPgn; let i = index\"\n                                    [class.active]=\"i == currentIndex\">\n\n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}</td>\n                                    <td class=\"d-none\">{{thisObj.id}}</td>\n                                    <td>{{thisObj.code}}</td>\n                                    <td>{{thisObj.processName}}</td>\n                                    <td>{{thisObj.sequence}}</td>\n                                    <td>{{thisObj.remarks}}</td>\n                                   \n                                    <td>\n                                      \n                                        <!-- <a data-toggle=\"tooltip\" data-placement=\"left\" title=\"view\"\n                                            class=\"btn btn-sm btn-primary\"\n                                            routerLink=\"/sim/requisition/show/{{thisObj.id}}\"><i\n                                                class=\"fa fa-eye m-r-5\"></i></a>  -->\n                                                &nbsp;\n                                        <a class=\"btn btn-sm btn-info\"\n                                            routerLink=\"./edit/{{thisObj.id}}\"><i\n                                                class=\"fa fa-pencil m-r-5\"></i></a>&nbsp;&nbsp;\n                                              \n                                        <!-- <a class=\"btn btn-sm btn-danger\" data-toggle=\"modal\"\n                                            data-target=\"#delete_entity\" (click)=\"tempId = thisObj.id\">\n                                            <i class=\"fa fa-trash-o m-r-5\"></i>\n                                        </a> -->\n                                        <a class=\"btn btn-sm btn-danger\"  \n                                        data-toggle=\"modal\"\n                                        data-target=\"#delete_entity\" \n                                        (click)=\"tempId = thisObj.id\">\n                                        <i class=\"fa fa-trash-o m-r-5\"></i>\n                                       </a>\n                                    </td>\n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <div class=\"d-flex justify-content-end \">\n\n                            <div class=\"\" >\n                                Items per Page\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" >\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\n                                        {{ size }}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <div class=\"pgn-pageSliceCt\">\n                                <pagination-controls responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\"\n                                    (pageChange)=\"handlePageChange($event)\">\n                                </pagination-controls>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n<ngx-spinner bdColor=\"rgba(255,255,255,0.5)\" size=\"medium\" color=\"#667eea\" type=\"ball-clip-rotate\" [fullScreen]=\"false\">\n    <p style=\"color: black\"> Processing... </p>\n</ngx-spinner>\n\n<!-- Delete Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_entity\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Item</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteEnityData(tempId)\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Modal -->");

/***/ }),

/***/ "HlxZ":
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/edit/edit.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "LkdN":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/approval/components/approvalStep/approval-step/approval-step.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>approval-step works!</p>\n");

/***/ }),

/***/ "SA4c":
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalStep/approval-step/approval-step.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC1zdGVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SXIh":
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/create/create.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Voa0":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/approval/components/approvalProcess/edit/edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Approval Process</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Approval</li>\n                    <li class=\"breadcrumb-item active\">Approval Process</li>\n                    <li class=\"breadcrumb-item active\">Edit</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/approval/approval-process\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n                    <form novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\n                        \n                       \n\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Code</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"code\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Process Namee</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"processName\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Sequence</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"number\" class=\"form-control\"  formControlName=\"sequence\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Remarks</label>\n                            <div class=\"col-md-10\">\n                                <textarea type=\"text\" class=\"form-control\"  formControlName=\"remarks\"></textarea>\n                            </div>\n                        </div>\n\n                        \n                        <div class=\"text-right\">\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/approval/approval-process\"><i class=\"fa fa-share\"></i> Cancel</a>\n                            &nbsp; &nbsp;\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\n                            </button>\n                            &nbsp; &nbsp;\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                            </button>\n                        </div>\n\n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n");

/***/ }),

/***/ "X654":
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/create/create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create.component.html */ "0kJu");
/* harmony import */ var _create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.component.css */ "SXIh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_approval_process_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/approval-process.service */ "yDGq");









let CreateComponent = class CreateComponent {
    constructor(formBuilder, datePipe, route, router, approvalProcessService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.approvalProcessService = approvalProcessService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.myForm = this.formBuilder.group({
            code: [""],
            processName: [""],
            sequence: [""],
            remarks: [""],
        });
    }
    myFormSubmit() {
        let apiURL = this.baseUrl + "/approvalProc/save";
        let formData = {};
        formData = this.myForm.value;
        formData.rActiveOperation = "Create";
        this.approvalProcessService.sendPostRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.router.navigate(["/approval/approval-process"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
        });
    }
    resetFormValues() {
        this.myForm.reset();
        //this.setFormDefaultValues();
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_approval_process_service__WEBPACK_IMPORTED_MODULE_8__["ApprovalProcessService"] }
];
CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _service_approval_process_service__WEBPACK_IMPORTED_MODULE_8__["ApprovalProcessService"]])
], CreateComponent);



/***/ }),

/***/ "bmbf":
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalStep/approval-step/approval-step.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ApprovalStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalStepComponent", function() { return ApprovalStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approval_step_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approval-step.component.html */ "LkdN");
/* harmony import */ var _approval_step_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval-step.component.css */ "SA4c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ApprovalStepComponent = class ApprovalStepComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApprovalStepComponent.ctorParameters = () => [];
ApprovalStepComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approval-step',
        template: _raw_loader_approval_step_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approval_step_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ApprovalStepComponent);



/***/ }),

/***/ "fOUw":
/*!****************************************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/approval-process/approval-process.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ApprovalProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProcessComponent", function() { return ApprovalProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approval_process_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approval-process.component.html */ "6wYt");
/* harmony import */ var _approval_process_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval-process.component.css */ "wAYX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_all_modules_sim_services_sim_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/all-modules/sim/services/sim.service */ "CKSP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_approval_process_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/approval-process.service */ "yDGq");












let ApprovalProcessComponent = class ApprovalProcessComponent {
    constructor(spinnerService, route, router, toastr, simService, formBuilder, approvalProcessService) {
        this.spinnerService = spinnerService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.simService = simService;
        this.formBuilder = formBuilder;
        this.approvalProcessService = approvalProcessService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].baseUrl;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]("en-US");
        this.listData = [];
        this.configPgn = {
            // my props
            pageNum: 1,
            pageSize: 5,
            totalItem: 50,
            pageSizes: [5, 10, 25, 50, 100, 200, 500, 1000],
            pgnDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 50
        };
    }
    ngOnInit() {
        //get list data
        this.getListData();
    }
    getListData() {
        let apiURL = this.baseUrl + "/approvalProc/getAll";
        let queryParams = {};
        const params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
        queryParams = params;
        this.spinnerService.show();
        this.approvalProcessService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.configPgn.totalItem = response.totalItems;
            this.configPgn.totalItems = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
    getUserQueryParams(page, pageSize) {
        let params = {};
        if (page) {
            params[`pageNum`] = page - 0;
        }
        if (pageSize) {
            params[`pageSize`] = pageSize;
        }
        return params;
    }
    deleteEnityData(dataId) {
        let apiURL = this.baseUrl + "/approvalProc/delete/" + dataId;
        console.log(apiURL);
        let formData = {};
        this.spinnerService.show();
        this.approvalProcessService.sendDeleteRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            $("#delete_entity").modal("hide");
            this.toastr.success("Successfully item is deleted", "Success");
            this.getListData();
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
    // pagination handling methods start -----------------------------------------------------------------------
    setDisplayLastSequence() {
        this.configPgn.pngDiplayLastSeq = (((this.configPgn.pageNum - 1) * this.configPgn.pageSize) + this.configPgn.pageSize);
        if (this.listData.length < this.configPgn.pageSize) {
            this.configPgn.pngDiplayLastSeq = (((this.configPgn.pageNum - 1) * this.configPgn.pageSize) + this.configPgn.pageSize);
        }
        if (this.configPgn.totalItem < this.configPgn.pngDiplayLastSeq) {
            this.configPgn.pngDiplayLastSeq = this.configPgn.totalItem;
        }
    }
    handlePageChange(event) {
        this.configPgn.pageNum = event;
        // set for ngx
        this.configPgn.currentPage = this.configPgn.pageNum;
        this.getListData();
    }
    handlePageSizeChange(event) {
        this.configPgn.pageSize = event.target.value;
        this.configPgn.pageNum = 1;
        // set for ngx
        this.configPgn.itemsPerPage = this.configPgn.pageSize;
        this.getListData();
    }
};
ApprovalProcessComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: src_app_all_modules_sim_services_sim_service__WEBPACK_IMPORTED_MODULE_9__["SimService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _service_approval_process_service__WEBPACK_IMPORTED_MODULE_11__["ApprovalProcessService"] }
];
ApprovalProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-approval-process',
        template: _raw_loader_approval_process_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approval_process_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
        src_app_all_modules_sim_services_sim_service__WEBPACK_IMPORTED_MODULE_9__["SimService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _service_approval_process_service__WEBPACK_IMPORTED_MODULE_11__["ApprovalProcessService"]])
], ApprovalProcessComponent);



/***/ }),

/***/ "hCfj":
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/edit/edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.component.html */ "Voa0");
/* harmony import */ var _edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.component.css */ "HlxZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_approval_process_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/approval-process.service */ "yDGq");










let EditComponent = class EditComponent {
    constructor(formBuilder, datePipe, route, router, approvalProcessService, spinnerService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.approvalProcessService = approvalProcessService;
        this.spinnerService = spinnerService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        this.myFormData = {};
    }
    ngOnInit() {
        this.initializeForm();
        this.getFormData();
    }
    initializeForm() {
        this.myForm = this.formBuilder.group({
            id: [""],
            code: [""],
            processName: [""],
            sequence: [""],
            remarks: [""],
        });
    }
    getFormData() {
        let id = this.route.snapshot.params.id;
        let apiURL = this.baseUrl + "/approvalProc/get/" + id;
        let queryParams = {};
        this.spinnerService.show();
        this.approvalProcessService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.myFormData = response;
            console.log(this.myFormData);
            this.spinnerService.hide();
            this.myForm.patchValue(this.myFormData);
        }, (error) => {
            console.log(error);
        });
    }
    resetFormValues() {
        this.getFormData();
    }
    saveUpdatedFormData() {
        let apiURL = this.baseUrl + "/approvalProc/save";
        //alert(this.myForm.value.id)
        console.log(apiURL);
        let formData = {};
        formData = this.myForm.value;
        this.spinnerService.show();
        this.approvalProcessService.sendPostRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.router.navigate(["/approval/approval-process"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_approval_process_service__WEBPACK_IMPORTED_MODULE_9__["ApprovalProcessService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _service_approval_process_service__WEBPACK_IMPORTED_MODULE_9__["ApprovalProcessService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], EditComponent);



/***/ }),

/***/ "hnRK":
/*!*************************************************************!*\
  !*** ./src/app/all-modules/approval/approval.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "jzy5":
/*!************************************************************!*\
  !*** ./src/app/all-modules/approval/approval.component.ts ***!
  \************************************************************/
/*! exports provided: ApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalComponent", function() { return ApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approval_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approval.component.html */ "nG4v");
/* harmony import */ var _approval_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval.component.css */ "hnRK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ApprovalComponent = class ApprovalComponent {
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
ApprovalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ApprovalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approval',
        template: _raw_loader_approval_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approval_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], ApprovalComponent);



/***/ }),

/***/ "nG4v":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/approval/approval.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n   \r\n    </div>\r\n    <!-- /Page Wrapper -->");

/***/ }),

/***/ "oV/K":
/*!*********************************************************!*\
  !*** ./src/app/all-modules/approval/approval.module.ts ***!
  \*********************************************************/
/*! exports provided: ApprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalModule", function() { return ApprovalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "oW1M");
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ "0jEk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/picklist */ "iHf9");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _approval_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./approval-routing.module */ "rwwS");
/* harmony import */ var _components_approvalProcess_approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/approvalProcess/approval-process/approval-process.component */ "fOUw");
/* harmony import */ var _components_approvalStep_approval_step_approval_step_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/approvalStep/approval-step/approval-step.component */ "bmbf");
/* harmony import */ var _approval_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./approval.component */ "jzy5");
/* harmony import */ var _components_approvalProcess_create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/approvalProcess/create/create.component */ "X654");
/* harmony import */ var _components_approvalProcess_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/approvalProcess/edit/edit.component */ "hCfj");

















let ApprovalModule = class ApprovalModule {
};
ApprovalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_approval_component__WEBPACK_IMPORTED_MODULE_13__["ApprovalComponent"], _components_approvalProcess_approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_11__["ApprovalProcessComponent"], _components_approvalStep_approval_step_approval_step_component__WEBPACK_IMPORTED_MODULE_12__["ApprovalStepComponent"], _components_approvalProcess_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"], _components_approvalProcess_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _approval_routing_module__WEBPACK_IMPORTED_MODULE_10__["ApprovalRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__["SharingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_picklist__WEBPACK_IMPORTED_MODULE_7__["PickListModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ApprovalModule);



/***/ }),

/***/ "rwwS":
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/approval/approval-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ApprovalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalRoutingModule", function() { return ApprovalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _approval_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approval.component */ "jzy5");
/* harmony import */ var _components_approvalProcess_approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/approvalProcess/approval-process/approval-process.component */ "fOUw");
/* harmony import */ var _components_approvalProcess_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/approvalProcess/create/create.component */ "X654");
/* harmony import */ var _components_approvalProcess_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/approvalProcess/edit/edit.component */ "hCfj");
/* harmony import */ var _components_approvalStep_approval_step_approval_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/approvalStep/approval-step/approval-step.component */ "bmbf");








const routes = [
    {
        path: '',
        component: _approval_component__WEBPACK_IMPORTED_MODULE_3__["ApprovalComponent"],
        children: [
            {
                path: "approval-process",
                component: _components_approvalProcess_approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalProcessComponent"]
            },
            {
                path: "approval-process/create",
                component: _components_approvalProcess_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
            },
            {
                path: "approval-process/edit/:id",
                component: _components_approvalProcess_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]
            },
            {
                path: "approval-step",
                component: _components_approvalStep_approval_step_approval_step_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalStepComponent"]
            },
        ]
    }
];
let ApprovalRoutingModule = class ApprovalRoutingModule {
};
ApprovalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ApprovalRoutingModule);



/***/ }),

/***/ "wAYX":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/all-modules/approval/components/approvalProcess/approval-process/approval-process.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFsLXByb2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJhcHByb3ZhbC1wcm9jZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "yDGq":
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/approval/service/approval-process.service.ts ***!
  \**************************************************************************/
/*! exports provided: ApprovalProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProcessService", function() { return ApprovalProcessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ApprovalProcessService = class ApprovalProcessService {
    constructor(http) {
        this.http = http;
    }
    sendGetRequest(apiURL, queryParams) {
        console.log("@sendGetRequest");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    sendPostRequest(apiURL, formData) {
        console.log("@sendPostRequest");
        return this.http.post(apiURL, formData);
    }
    sendPutRequest(apiURL, formData) {
        console.log("@sendPutRequest");
        return this.http.put(apiURL, formData);
    }
    sendDeleteRequest(apiURL, formData) {
        console.log("@sendDeleteRequest");
        return this.http.delete(apiURL, formData);
    }
};
ApprovalProcessService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApprovalProcessService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ApprovalProcessService);



/***/ })

}]);
//# sourceMappingURL=approval-approval-module-es2015.js.map
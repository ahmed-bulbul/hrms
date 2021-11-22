(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payroll-payroll-module"],{

/***/ "/jV3":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-view/salary-view.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Payslip</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Payslip</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <div class=\"btn-group btn-group-sm\">\r\n                    <button class=\"btn btn-white\">CSV</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"payslip-title\">{{payslipData.payslipNarration}}</h4>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <!--<img src=\"assets/img/logo2.png\" class=\"inv-logo\" alt=\"\"> -->\r\n                            <ul class=\"list-unstyled mb-0\">\r\n                                <li>{{payslipData.orgName}}</li>\r\n                                <li>{{payslipData.orgAddress}}</li>\r\n                                <li>{{payslipData.orgAddressLine2}}</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <div class=\"invoice-details\">\r\n                                <h3 class=\"text-uppercase\">{{payslipData.payslipNum}}</h3>\r\n                                <ul class=\"list-unstyled\">\r\n                                    <li>Salary Month: <span>{{payslipData.monthFullName}}, {{payslipData.salaryYear}}</span></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 m-b-20\">\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>\r\n                                    <h5 class=\"mb-0\"><strong>{{payslipData.empName}}</strong></h5>\r\n                                </li>\r\n                                <li><span>{{payslipData.empDesignation}}</span></li>\r\n                                <li>Employee Code: {{payslipData.empCode}}</li>\r\n                                <li>Joining Date: {{payslipData.joiningDate}}</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div>\r\n                                <h4 class=\"m-b-10\"><strong>Earnings</strong></h4>\r\n                                <table class=\"table table-bordered\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <strong>Basic Pay</strong> \r\n                                                <span class=\"float-right\">{{payslipData.basicSalary | number : '1.2-2'}}</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <strong>House Rent Allowance</strong> \r\n                                                <span class=\"float-right\">{{payslipData.houseRentAlwAmt | number : '1.2-2'}}</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Conveyance</strong> <span class=\"float-right\">0.00</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Other Allowance</strong> <span class=\"float-right\">0.00</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <strong>Total Earnings</strong> \r\n                                                <span class=\"float-right\"><strong>{{payslipData.totalEarnings | number : '1.2-2'}}</strong></span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div>\r\n                                <h4 class=\"m-b-10\"><strong>Deductions</strong></h4>\r\n                                <table class=\"table table-bordered\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><strong>AIT</strong> <span class=\"float-right\">0.00</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Food Deduction</strong> <span class=\"float-right\">0.00</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Absent Deduction</strong> <span class=\"float-right\">{{payslipData.absentDeduction | number : '1.2-2'}}</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <strong>Total Deductions</strong>\r\n                                                <span class=\"float-right\"><strong>{{payslipData.totalDeductions | number : '1.2-2'}}</strong></span>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <p><strong>Net Pay: {{payslipData.netPayable | number : '1.2-2'}}</strong> ( {{payslipData.netPayableStr}} )</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->");

/***/ }),

/***/ "1t0Z":
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/salary-process-parameter.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n\r\n/* ---------------------- Ripple Effect Button // Start --------------------- */\r\n\r\n\r\n\r\n/* .btn-ripple {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 12px 36px;\r\n\tmargin: 10px 0;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 18px;\r\n\tletter-spacing: 2px;\r\n\tborder-radius: 40px;\r\n\toverflow: hidden;\r\n\tbackground: linear-gradient(90deg, #0162c8, #55e7fc);\r\n} */\r\n\r\n\r\n\r\n.btn-ripple {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n.btn-ripple span {\r\n\tposition: absolute;\r\n\tbackground: #fff;\r\n\ttransform: translate(-50%, -50%);\r\n\tpointer-events: none;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation: animate 1s linear infinite;\r\n\t        animation: animate 1s linear infinite;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* ---------------------- Ripple Effect Button // End ------------------------- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeS1wcm9jZXNzLXBhcmFtZXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkOzs7O0FBSUEsZ0VBQWdFOzs7O0FBQ2hFO0NBQ0MscUJBQXFCO0NBQ3JCLDhCQUE4QjtJQUMzQixnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBRVYsMkVBQTJFO0NBQzNFOzs7O0FBSUQsK0VBQStFOzs7O0FBQy9FOzs7Ozs7Ozs7Ozs7O0dBYUc7Ozs7QUFDSDtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7Ozs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0NBQ2hDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsNkNBQXFDO1NBQXJDLHFDQUFxQztBQUN0Qzs7OztBQUNBO0NBQ0M7O0VBRUMsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0NBQ2I7Q0FDQTs7RUFFQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7Q0FDWDtBQUNEOzs7O0FBYkE7Q0FDQzs7RUFFQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7Q0FDYjtDQUNBOztFQUVDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtDQUNYO0FBQ0Q7Ozs7QUFDQSxpRkFBaUYiLCJmaWxlIjoic2FsYXJ5LXByb2Nlc3MtcGFyYW1ldGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PSBQdXJwYWxlIENvbG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5pbnB1dC5mb3JtLWNvbnRyb2wsIHNlbGVjdC5mb3JtLWNvbnRyb2wsIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG5cdGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzY2N2VlYTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICM3MDVDQkE7XHJcblx0b3V0bGluZTogMDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7IFxyXG4gfVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJpcHBsZSBFZmZlY3QgQnV0dG9uIC8vIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAuYnRuLXJpcHBsZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAxMnB4IDM2cHg7XHJcblx0bWFyZ2luOiAxMHB4IDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAxNjJjOCwgIzU1ZTdmYyk7XHJcbn0gKi9cclxuLmJ0bi1yaXBwbGUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYnRuLXJpcHBsZSBzcGFuIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YW5pbWF0aW9uOiBhbmltYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG5cdDAlIFxyXG5cdHtcclxuXHRcdHdpZHRoOiAwcHg7XHJcblx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHR9XHJcblx0MTAwJVxyXG5cdHtcclxuXHRcdHdpZHRoOiA1MDBweDtcclxuXHRcdGhlaWdodDogNTAwcHg7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJpcHBsZSBFZmZlY3QgQnV0dG9uIC8vIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiJdfQ== */");

/***/ }),

/***/ "2bCU":
/*!********************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/edit/salary-process-job-edit.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxhcnktcHJvY2Vzcy1qb2ItZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "38S/":
/*!***************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/create/payroll-element-value-create.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PayrollElementValueCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollElementValueCreateComponent", function() { return PayrollElementValueCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_element_value_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-element-value-create.component.html */ "7gu9");
/* harmony import */ var _payroll_element_value_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-element-value-create.component.css */ "uALH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/payroll.service */ "bNXq");










let PayrollElementValueCreateComponent = class PayrollElementValueCreateComponent {
    constructor(formBuilder, datePipe, payrollService, route, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.payrollService = payrollService;
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
    }
    ngOnInit() {
        this.initializeForm();
        this.setFormDefaultValues();
        this.initButtonsRippleEffect();
        this.loadData();
    }
    initializeForm() {
        this.myForm = this.formBuilder.group({
            empTitle: [""],
            elementTitle: [""],
            elementAmount: [""],
            activeStartDate: [""],
            activeEndDate: [""],
            isActive: [""],
        });
    }
    setFormDefaultValues() {
        var dt = new Date();
        var year = dt.getFullYear();
        // // multiple
        // this.myForm.patchValue({
        //   year: year,
        // });
        // // single
        // this.myForm.controls.year.setValue(year);
    }
    resetFormValues() {
        this.myForm.reset();
        this.setFormDefaultValues();
    }
    initButtonsRippleEffect() {
        var createRipple = function (e) {
            const button = e.currentTarget;
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            // Create span element
            let ripple = document.createElement("span");
            // Position the span element
            ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            // Add span to the button 
            button.appendChild(ripple);
            // Remove span after 0.3s
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        };
        const elements = document.querySelectorAll('.btn-ripple');
        elements.forEach(element => {
            element.addEventListener('click', function (e) {
                createRipple(e);
            });
        });
    }
    myFormSubmit() {
        let apiURL = this.baseUrl + "/api/payrollElValue/create";
        let formData = {};
        formData = this.myForm.value;
        formData.rActiveOperation = "Create";
        // process date
        formData.activeStartDate = (formData.activeStartDate) ? this.datePipe.transform(formData.activeStartDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        formData.activeEndDate = (formData.activeEndDate) ? this.datePipe.transform(formData.activeEndDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        this.spinnerService.show();
        this.payrollService.sendPostRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.router.navigate(["/payroll/element-value/list"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
    loadData() {
        let apiURL = this.baseUrl + "/salaryProcess/start";
        let queryParams = {};
        queryParams.abc = "OK";
        // this.payrollService.sendGetRequest(apiURL, queryParams).subscribe(
        //   (response: any) => {
        //   console.log(response);
        //   },
        //   (error) => console.log(error)
        // );
    }
};
PayrollElementValueCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
PayrollElementValueCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll-element-value-create',
        template: _raw_loader_payroll_element_value_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_element_value_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
], PayrollElementValueCreateComponent);



/***/ }),

/***/ "4vJ/":
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/edit/payroll-element-value-edit.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PayrollElementValueEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollElementValueEditComponent", function() { return PayrollElementValueEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_element_value_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-element-value-edit.component.html */ "nl7P");
/* harmony import */ var _payroll_element_value_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-element-value-edit.component.css */ "zkrG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/payroll.service */ "bNXq");










let PayrollElementValueEditComponent = class PayrollElementValueEditComponent {
    constructor(formBuilder, datePipe, payrollService, route, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.payrollService = payrollService;
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.myFormData = {};
    }
    ngOnInit() {
        this.initializeForm();
        this.setFormDefaultValues();
        this.initButtonsRippleEffect();
        this.getFormData();
    }
    ngOnDestroy() {
        //
    }
    initializeForm() {
        this.myForm = this.formBuilder.group({
            id: [""],
            empTitle: [""],
            elementTitle: [""],
            elementAmount: [""],
            activeStartDate: [""],
            activeEndDate: [""],
            isActive: [""],
        });
    }
    setFormDefaultValues() {
        //
    }
    resetFormValues() {
        this.myForm.reset();
        this.setFormDefaultValues();
    }
    initButtonsRippleEffect() {
        var createRipple = function (e) {
            const button = e.currentTarget;
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            // Create span element
            let ripple = document.createElement("span");
            // Position the span element
            ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            // Add span to the button 
            button.appendChild(ripple);
            // Remove span after 0.3s
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        };
        const elements = document.querySelectorAll('.btn-ripple');
        elements.forEach(element => {
            element.addEventListener('click', function (e) {
                createRipple(e);
            });
        });
    }
    convertToISODateString(dateStr_DD_MM_YYYY) {
        let dateComponents = dateStr_DD_MM_YYYY.split('-');
        return dateComponents[2] + "-" + dateComponents[1] + dateComponents[0];
    }
    /**
     * Read form data from API
     */
    getFormData() {
        let id = this.route.snapshot.params.id;
        let apiURL = this.baseUrl + "/api/payrollElValue/get/" + id;
        let queryParams = {};
        queryParams.rEntityName = "PayrollElementValue";
        queryParams.rActiveOpetation = "read";
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.myFormData = response;
            // process date fields
            this.myFormData.activeStartDate = (this.myFormData.activeStartDate) ? this.datePipe.transform(this.myFormData.activeStartDate, "dd-MM-yyyy") : null;
            this.myFormData.activeEndDate = (this.myFormData.activeEndDate) ? this.datePipe.transform(this.myFormData.activeEndDate, "dd-MM-yyyy") : null;
            this.spinnerService.hide();
            this.myForm.patchValue(this.myFormData);
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Save form data
     */
    saveUpdatedFormData() {
        let apiURL = this.baseUrl + "/api/payrollElValue/update/" + this.myForm.value.id;
        console.log(apiURL);
        let formData = {};
        formData = this.myForm.value;
        formData.rEntityName = "PayrollElementValue";
        formData.rActiveOperation = "update";
        // process date fields
        formData.activeStartDate = (formData.activeStartDate) ? this.datePipe.transform(this.convertToISODateString(formData.activeStartDate), "yyyy-MM-dd") : null;
        formData.activeEndDate = (formData.activeEndDate) ? this.datePipe.transform(this.convertToISODateString(formData.activeEndDate), "yyyy-MM-dd") : null;
        this.spinnerService.show();
        this.payrollService.sendPutRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.router.navigate(["/payroll/element-value/list"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
};
PayrollElementValueEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
PayrollElementValueEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll-element-value-edit',
        template: _raw_loader_payroll_element_value_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_element_value_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
        _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
], PayrollElementValueEditComponent);



/***/ }),

/***/ "7gu9":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/element-value/create/payroll-element-value-create.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Payroll Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Payroll Element</li>\n                    <li class=\"breadcrumb-item active\">Create</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n                    <form novalidate (ngSubmit)=\"myFormSubmit()\" [formGroup]=\"myForm\">\n                        \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Employee</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"empTitle\">\n                            </div>\n                        </div>\n                        \n                         <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Element Title</label>\n                            <div class=\"col-md-10\">\n                                <select class=\"form-control\" formControlName=\"elementTitle\">\n                                    <option value=\"\">Select</option>\n                                    <option value=\"HRA\">House Rent Allowance</option>\n                                    <option value=\"MDL_ALW\">Medical Allowance</option>\n                                    <option value=\"OT_ALW\">Overtime Allowance</option>\n                                    <option value=\"LTA\">Leave Travel Allowance</option>\n                                    <option value=\"EA\">Entertainment Allowance</option>\n                                    <option value=\"UCA_ALW\">Uniform Allowance / Corporate Attire</option>\n                                    <option value=\"FAMILY_ALW\">Family Allowance</option>\n                                    <option value=\"EDA\">Education Allowance</option>\n                                    <option value=\"PRJ_ALW\">Project Allowance</option>\n                                    <option value=\"HOSTEL_ALW\">Hostel Allowance</option>\n                                    <option value=\"CHILD_EDU_ALW\">Children's education Allowance</option>\n                                    <option value=\"CHILD_HOSTEL_ALW\">Children's hostel Allowance</option>\n                                    <option value=\"PROF_ALW\">Professional pursuit/research Allowance</option>\n                                </select>\n                            </div>\n                        </div>\n                      \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Amount</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"elementAmount\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\n                            <div class=\"col-md-10\">\n                                <div class=\"cal-icon\">\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"activeStartDate\" bsDatepicker>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">End Date</label>\n                            <div class=\"col-md-10\">\n                                <div class=\"cal-icon\">\n                                    <input type=\"text\" class=\"form-control\"  formControlName=\"activeEndDate\" bsDatepicker>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"text-right\">\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Cancel</a>\n                            &nbsp; &nbsp;\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\n                            </button>\n                            &nbsp; &nbsp;\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                            </button>\n                        </div>\n\n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n");

/***/ }),

/***/ "C7sr":
/*!************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/show/payroll-element-value-show.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\n\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n\r\n\r\n\r\n#formERP fieldset.fieldsetBorder {\r\n\tborder: 1px solid;\r\n\tborder-color: rgba(31, 31, 31, 0.25); /*1f1f1f*/\r\n\tborder-radius: 5px;\r\n\tmargin: 1px;\r\n\tmargin-bottom: 7px;\r\n\tpadding-left: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP fieldset.fieldsetWithoutBorder {\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP fieldset legend {\r\n\t/* border: 1px solid; */\r\n\t/* border-color: rgba(31, 31, 31, 0.25); */\r\n\twidth: auto;\r\n\tborder-radius: 5px;\r\n    font-size: 15px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n\tmargin-left: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP .logBox .form-group {\r\n\tfloat: left;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP .logBox .form-group label {\r\n\tmin-width: 170px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP .logBox .form-group div {\r\n\tborder: 1px solid;\r\n\tborder-radius: 3px;\r\n\tborder-color: rgba(31, 31, 31, 0.25);\r\n\tpadding-left: 3px;\r\n\tpadding-right: 3px;\r\n\tpadding-top: 1px;\r\n\tpadding-bottom: 1px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 5px;\r\n\tmin-height: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#formERP .logBox {\r\n\tfont-size: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtZWxlbWVudC12YWx1ZS1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7Ozs7OztBQU1BLGdFQUFnRTs7Ozs7O0FBQ2hFO0NBQ0MscUJBQXFCO0NBQ3JCLDhCQUE4QjtJQUMzQixnQkFBZ0I7QUFDcEI7Ozs7OztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFVBQVU7Q0FFViwyRUFBMkU7Q0FDM0U7Ozs7OztBQUdEO0NBQ0MsaUJBQWlCO0NBQ2pCLG9DQUFvQyxFQUFFLFNBQVM7Q0FDL0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOzs7Ozs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7Ozs7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsMENBQTBDO0NBQzFDLFdBQVc7Q0FDWCxrQkFBa0I7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQixnQkFBZ0I7QUFDakI7Ozs7OztBQUVBO0NBQ0MsV0FBVztBQUNaOzs7Ozs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOzs7Ozs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsb0NBQW9DO0NBQ3BDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7Ozs7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InBheXJvbGwtZWxlbWVudC12YWx1ZS1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IFB1cnBhbGUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LmZvcm0tY29udHJvbCwgc2VsZWN0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcbiBcclxuXHJcbiNmb3JtRVJQIGZpZWxkc2V0LmZpZWxkc2V0Qm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7IC8qMWYxZjFmKi9cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbiNmb3JtRVJQIGZpZWxkc2V0LmZpZWxkc2V0V2l0aG91dEJvcmRlciB7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4jZm9ybUVSUCBmaWVsZHNldCBsZWdlbmQge1xyXG5cdC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xyXG5cdC8qIGJvcmRlci1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjI1KTsgKi9cclxuXHR3aWR0aDogYXV0bztcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbiBcclxuI2Zvcm1FUlAgLmxvZ0JveCAuZm9ybS1ncm91cCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNmb3JtRVJQIC5sb2dCb3ggLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdG1pbi13aWR0aDogMTcwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI2Zvcm1FUlAgLmxvZ0JveCAuZm9ybS1ncm91cCBkaXYge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC4yNSk7XHJcblx0cGFkZGluZy1sZWZ0OiAzcHg7XHJcblx0cGFkZGluZy1yaWdodDogM3B4O1xyXG5cdHBhZGRpbmctdG9wOiAxcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDFweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiNmb3JtRVJQIC5sb2dCb3gge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "CEnB":
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/show/payroll-element-value-show.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PayrollElementValueShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollElementValueShowComponent", function() { return PayrollElementValueShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_element_value_show_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-element-value-show.component.html */ "n0xR");
/* harmony import */ var _payroll_element_value_show_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-element-value-show.component.css */ "C7sr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/payroll.service */ "bNXq");










let PayrollElementValueShowComponent = class PayrollElementValueShowComponent {
    constructor(formBuilder, datePipe, payrollService, route, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.payrollService = payrollService;
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.myFormData = {};
        // translate fields
        this.titleDecode = {
            HRA: "House Rent Allowance",
            MDL_ALW: "Medical Allowance",
            OT_ALW: "Overtime Allowance",
            LTA: "Leave Travel Allowance",
            EA: "Entertainment Allowance",
            UCA_ALW: "Uniform Allowance / Corporate Attire",
            FAMILY_ALW: "Family Allowance",
            EDA: "Education Allowance",
            PRJ_ALW: "Project Allowance",
            HOSTEL_ALW: "Hostel Allowance",
            CHILD_EDU_ALW: "Children's education Allowance",
            CHILD_HOSTEL_ALW: "Children's hostel Allowance",
            PROF_ALW: "Professional pursuit/research Allowance"
        };
    }
    ngOnInit() {
        this.initializeForm();
        this.setFormDefaultValues();
        this.initButtonsRippleEffect();
        this.getFormData();
    }
    ngOnDestroy() {
        //
    }
    initializeForm() {
        this.myForm = this.formBuilder.group({
            empTitle: [""],
            elementTitle: [""],
            elementAmount: [""],
            activeStartDate: [""],
            activeEndDate: [""],
            isActive: [""],
        });
    }
    setFormDefaultValues() {
        //
    }
    resetFormValues() {
        this.myForm.reset();
        this.setFormDefaultValues();
    }
    initButtonsRippleEffect() {
        var createRipple = function (e) {
            const button = e.currentTarget;
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            // Create span element
            let ripple = document.createElement("span");
            // Position the span element
            ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            // Add span to the button 
            button.appendChild(ripple);
            // Remove span after 0.3s
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        };
        const elements = document.querySelectorAll('.btn-ripple');
        elements.forEach(element => {
            element.addEventListener('click', function (e) {
                createRipple(e);
            });
        });
    }
    /**
     * Read form data from API
     */
    getFormData() {
        let id = this.route.snapshot.params.id;
        let apiURL = this.baseUrl + "/api/payrollElValue/get/" + id;
        let queryParams = {};
        queryParams.rEntityName = "PayrollElementValue";
        queryParams.rActiveOpetation = "read";
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.myFormData = response;
            this.spinnerService.hide();
            this.myForm.patchValue(this.myFormData);
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Save form data
     */
    saveUpdatedFormData() {
        let apiURL = this.baseUrl + "/api/payrollElValue/create";
        let formData = {};
        formData = this.myForm.value;
        formData.rActiveOperation = "Create";
        // process date
        formData.activeStartDate = (formData.activeStartDate) ? this.datePipe.transform(formData.activeStartDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        formData.activeEndDate = (formData.activeEndDate) ? this.datePipe.transform(formData.activeEndDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        this.spinnerService.show();
        this.payrollService.sendPostRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.router.navigate(["/payroll/element-value/list"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
};
PayrollElementValueShowComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
PayrollElementValueShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll-element-value-show',
        template: _raw_loader_payroll_element_value_show_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_element_value_show_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
        _service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
], PayrollElementValueShowComponent);



/***/ }),

/***/ "DRj9":
/*!*******************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.module.ts ***!
  \*******************************************************/
/*! exports provided: PayrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollModule", function() { return PayrollModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll-routing.module */ "P3ti");
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payroll.component */ "vcem");
/* harmony import */ var _components_employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-salary/employee-salary.component */ "qEV7");
/* harmony import */ var _components_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/salary-view/salary-view.component */ "lhB7");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _components_payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/payroll-items/payroll-items.component */ "GRz6");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "oW1M");
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sharing/sharing.module */ "0jEk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/picklist */ "iHf9");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_salary_process_batch_job_list_salary_process_job_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/salary-process/batch-job/list/salary-process-job-list.component */ "vPU7");
/* harmony import */ var _components_salary_process_batch_job_create_salary_process_job_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/salary-process/batch-job/create/salary-process-job-create.component */ "ltR1");
/* harmony import */ var _components_salary_process_batch_job_edit_salary_process_job_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/salary-process/batch-job/edit/salary-process-job-edit.component */ "yPgr");
/* harmony import */ var _components_salary_process_batch_job_show_salary_process_job_show_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/salary-process/batch-job/show/salary-process-job-show.component */ "qRAE");
/* harmony import */ var _components_element_value_list_payroll_element_value_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/element-value/list/payroll-element-value-list.component */ "wGdy");
/* harmony import */ var _components_element_value_show_payroll_element_value_show_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/element-value/show/payroll-element-value-show.component */ "CEnB");
/* harmony import */ var _components_element_value_create_payroll_element_value_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/element-value/create/payroll-element-value-create.component */ "38S/");
/* harmony import */ var _components_element_value_edit_payroll_element_value_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/element-value/edit/payroll-element-value-edit.component */ "4vJ/");
/* harmony import */ var _components_salary_process_salary_process_parameter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/salary-process/salary-process-parameter.component */ "h6gE");
























let PayrollModule = class PayrollModule {
};
PayrollModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_4__["PayrollComponent"], _components_employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeSalaryComponent"], _components_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_6__["SalaryViewComponent"], _components_payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_8__["PayrollItemsComponent"], _components_salary_process_salary_process_parameter_component__WEBPACK_IMPORTED_MODULE_23__["PayrollSalaryProcessComponent"], _components_salary_process_batch_job_list_salary_process_job_list_component__WEBPACK_IMPORTED_MODULE_15__["SalaryProcessJobListComponent"], _components_salary_process_batch_job_create_salary_process_job_create_component__WEBPACK_IMPORTED_MODULE_16__["SalaryProcessJobCreateComponent"], _components_salary_process_batch_job_edit_salary_process_job_edit_component__WEBPACK_IMPORTED_MODULE_17__["SalaryProcessJobEditComponent"], _components_salary_process_batch_job_show_salary_process_job_show_component__WEBPACK_IMPORTED_MODULE_18__["SalaryProcessJobShowComponent"], _components_element_value_list_payroll_element_value_list_component__WEBPACK_IMPORTED_MODULE_19__["PayrollElementValueListComponent"], _components_element_value_show_payroll_element_value_show_component__WEBPACK_IMPORTED_MODULE_20__["PayrollElementValueShowComponent"], _components_element_value_create_payroll_element_value_create_component__WEBPACK_IMPORTED_MODULE_21__["PayrollElementValueCreateComponent"], _components_element_value_edit_payroll_element_value_edit_component__WEBPACK_IMPORTED_MODULE_22__["PayrollElementValueEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payroll_routing_module__WEBPACK_IMPORTED_MODULE_3__["PayrollRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__["SharingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            primeng_picklist__WEBPACK_IMPORTED_MODULE_12__["PickListModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], PayrollModule);



/***/ }),

/***/ "DvGM":
/*!********************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/list/salary-process-job-list.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n.page-header {\r\n    margin-bottom: 1.1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeS1wcm9jZXNzLWpvYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzYWxhcnktcHJvY2Vzcy1qb2ItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Eccb":
/*!********************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/show/salary-process-job-show.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxhcnktcHJvY2Vzcy1qb2Itc2hvdy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GRz6":
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/payroll-items/payroll-items.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PayrollItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollItemsComponent", function() { return PayrollItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-items.component.html */ "jDtM");
/* harmony import */ var _payroll_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-items.component.css */ "dHaw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../all-modules.service */ "IhMt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







let PayrollItemsComponent = class PayrollItemsComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        // dtOptions: DataTables.Settings = {};
        this.urlAdd = "payrollAddition";
        this.urlOver = "payrollOvertime";
        this.urlDeduct = "payrollDeduction";
        this.allAddPayroll = [];
        this.allOverPayroll = [];
        this.allDeductPayroll = [];
    }
    ngOnInit() {
        //get add payroll
        this.getAddPayroll();
        //get over payroll
        this.getOverpayroll();
        //get deduct payroll
        this.getDeductPayroll();
        // Add payroll Form Validation And Getting Values
        this.addPayrollForm = this.formBuilder.group({
            addPayrollName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            addPayrollCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            addPayrollUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Edit payroll Form Validation And Getting Values
        this.editPayrollForm = this.formBuilder.group({
            editPayrollName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            editPayrollCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            editPayrollUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Add overTime Form Validation And Getting Values
        this.addOverForm = this.formBuilder.group({
            addOverName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            addOverRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Edit overtime Form Validation And Getting Values
        this.editOverForm = this.formBuilder.group({
            editOverName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            editOverRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Add deduction Form Validation And Getting Values
        this.addDeductForm = this.formBuilder.group({
            addDeductName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            addDeductUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Edit deduction Form Validation And Getting Values
        this.editDeductForm = this.formBuilder.group({
            editDeductName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            editDeductunit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // //data table configuration
        // this.dtOptions = {
        //   // ... skipped ...
        //   dom: "lrtip",
        // };
    }
    // get payroll
    getAddPayroll() {
        this.allModuleService.get(this.urlAdd).subscribe((data) => {
            this.allAddPayroll = data;
            $("#datatable1").DataTable().clear();
        });
    }
    // get overtime
    getOverpayroll() {
        this.allModuleService.get(this.urlOver).subscribe((data) => {
            this.allOverPayroll = data;
            $("#datatable2").DataTable().clear();
        });
    }
    // get deducts
    getDeductPayroll() {
        this.allModuleService.get(this.urlDeduct).subscribe((data) => {
            this.allDeductPayroll = data;
            $("#datatable3").DataTable().clear();
        });
    }
    // Add payroll Modal Api Call
    addPayroll() {
        if (this.addPayrollForm.valid) {
            let obj = {
                name: this.addPayrollForm.value.addPayrollName,
                category: this.addPayrollForm.value.addPayrollCategory,
                unitCost: this.addPayrollForm.value.addPayrollUnit,
            };
            this.allModuleService.add(obj, this.urlAdd).subscribe((data) => { });
            this.getAddPayroll();
            $("#add_addition").modal("hide");
            this.addPayrollForm.reset();
            this.toastr.success("Payroll added", "Success");
        }
    }
    // Edit payroll Modal Api Call
    editPayroll() {
        let obj = {
            name: this.editPayrollForm.value.editPayrollName,
            category: this.editPayrollForm.value.editPayrollCategory,
            unitCost: this.editPayrollForm.value.editPayrollUnit,
            id: this.editAddId,
        };
        this.allModuleService.update(obj, this.urlAdd).subscribe((data1) => { });
        this.getAddPayroll();
        $("#edit_addition").modal("hide");
        this.toastr.success("Payroll edited", "Success");
    }
    editAdd(value) {
        this.editAddId = value;
        const index = this.allAddPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allAddPayroll[index];
        this.editPayrollForm.setValue({
            editPayrollName: toSetValues.name,
            editPayrollCategory: toSetValues.category,
            editPayrollUnit: toSetValues.unitCost,
        });
    }
    // Delete payroll Modal Api Call
    deletePayroll() {
        this.allModuleService
            .delete(this.tempAddId, this.urlAdd)
            .subscribe((data) => {
            this.getAddPayroll();
            $("#delete_addition").modal("hide");
        });
        this.toastr.success("Payroll deleted", "Success");
    }
    // Add overtime Modal Api Call
    addOver() {
        if (this.addOverForm.valid) {
            let obj = {
                name: this.addOverForm.value.addOverName,
                rate: this.addOverForm.value.addOverRate,
            };
            this.allModuleService.add(obj, this.urlOver).subscribe((data) => { });
            this.getOverpayroll();
            $("#add_overtime").modal("hide");
            this.addOverForm.reset();
            this.toastr.success("Overtime added", "Success");
        }
    }
    // Edit overtime Modal Api Call
    editOverSubmit() {
        let obj = {
            name: this.editOverForm.value.editOverName,
            rate: this.editOverForm.value.editOverRate,
            id: this.editOverId,
        };
        this.allModuleService.update(obj, this.urlOver).subscribe((data1) => { });
        this.getOverpayroll();
        $("#edit_overtime").modal("hide");
        this.toastr.success("Overtime edited", "Success");
    }
    editOver(value) {
        this.editOverId = value;
        const index = this.allOverPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allOverPayroll[index];
        this.editOverForm.setValue({
            editOverName: toSetValues.name,
            editOverRate: toSetValues.rate,
        });
    }
    // Delete overtime Modal Api Call
    deleteOver() {
        this.allModuleService
            .delete(this.tempOverId, this.urlOver)
            .subscribe((data) => {
            this.getOverpayroll();
            $("#delete_overtime").modal("hide");
        });
        this.toastr.success("Overtime deleted", "Success");
    }
    // Add deduction Modal Api Call
    addDeducts() {
        if (this.addDeductForm.valid) {
            let obj = {
                name: this.addDeductForm.value.addDeductName,
                unitCost: this.addDeductForm.value.addDeductUnit,
            };
            this.allModuleService.add(obj, this.urlDeduct).subscribe((data) => { });
            this.getDeductPayroll();
            $("#add_deduction").modal("hide");
            this.addDeductForm.reset();
            this.toastr.success("Deduction added", "Success");
        }
    }
    // Edit deduction Modal Api Call
    editDeductSubmit() {
        let obj = {
            name: this.editDeductForm.value.editDeductName,
            unitCost: this.editDeductForm.value.editDeductunit,
            id: this.editDeductId,
        };
        this.allModuleService.update(obj, this.urlDeduct).subscribe((data1) => { });
        this.getDeductPayroll();
        $("#edit_deduction").modal("hide");
        this.toastr.success("Deducts edited", "Success");
    }
    editDeduct(value) {
        this.editDeductId = value;
        const index = this.allDeductPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allDeductPayroll[index];
        this.editDeductForm.setValue({
            editDeductName: toSetValues.name,
            editDeductunit: toSetValues.unitCost,
        });
    }
    // Delete deduction Modal Api Call
    deleteDeduct() {
        this.allModuleService
            .delete(this.tempDeductId, this.urlDeduct)
            .subscribe((data) => {
            this.getDeductPayroll();
            $("#delete_deduction").modal("hide");
        });
        this.toastr.success("Deduction deleted", "Success");
    }
};
PayrollItemsComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
PayrollItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payroll-items",
        template: _raw_loader_payroll_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
], PayrollItemsComponent);



/***/ }),

/***/ "MtI5":
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-view/salary-view.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic2FsYXJ5LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "NsIt":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/element-value/list/payroll-element-value-list.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Payroll Element</h3>\n                <ul class=\"breadcrumb\">\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-white\">Excel</button>\n                    <button class=\"btn btn-white\">PDF</button>\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- Search Filter -->\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\n        <div class=\"card-body p-3\">\n\n            <div class=\"row filter-row\">\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <input type=\"text\" class=\"form-control floating\" (input)=\"searchByEmpCode($event.target.value)\">\n                        <label class=\"focus-label\">Employee Code</label>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFromDate($event)\">\n                        </div>\n                        <label class=\"focus-label\">From</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByToDate($event)\">\n                        </div>\n                        <label class=\"focus-label\">To</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <a  class=\"btn btn-success btn-block\" (click)=\"searchBySearchButton()\" > Search </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- /Search Filter -->\n\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                         <a routerLink = \"/payroll/element-value/create\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> New &nbsp;&nbsp;&nbsp;</a>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"table-responsive\">\n\n                        <div class=\"d-flex justify-content-start pb-1\">\n                            <div class=\"pgn-displayDataInfo\">\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (1) ) }}  to {{configPgn.pngDiplayLastSeq}} of {{configPgn.totalItem}} ) entries</span>\n                            </div>\n                        </div>\n\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\" >\n                            <thead>\n                                <tr>\n                                    <th>SL</th>\n                                    <th class=\"d-none\">TB_ROW_ID</th>\n                                    <th>Employee</th>\n                                    <th>Element Title</th>\n                                    <th>Amount</th>\n                                    <th>Start Date</th>\n                                    <th>End Date</th>\n                                    <th>Status</th>\n                                    <th>Creation Time</th>\n                                    <th>Creation User</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let thisObj of listData | paginate : configPgn; let i = index\" [class.active]=\"i == currentIndex\">\n                                \n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}</td>\n                                    <td class=\"d-none\">{{thisObj.id}}</td>\n                                    <td>{{thisObj.empTitle}}</td>\n                                    <td>{{titleDecode[thisObj.elementTitle]}}</td>\n                                    <td>{{thisObj.elementAmount}}</td>\n                                    <td>{{thisObj.activeStartDate}}</td>\n                                    <td>{{thisObj.activeEndDate}}</td>\n                                    <td>{{thisObj.isActive}}</td>\n                                    <td>{{thisObj.creationDateTime}}</td>\n                                    <td>{{thisObj.creationUser}}</td>\n                                    <td>\n                                        <a class=\"btn btn-sm btn-primary\" routerLink = \"/payroll/element-value/show/{{thisObj.id}}\"><i class=\"fa fa-eye m-r-5\"></i>View</a> &nbsp;\n                                        <a class=\"btn btn-sm btn-info\" routerLink = \"/payroll/element-value/edit/{{thisObj.id}}\"><i class=\"fa fa-pencil m-r-5\"></i></a>&nbsp;&nbsp;\n                                        <!-- <a class=\"btn btn-sm btn-danger\" (click)=\"deleteEnityData(thisObj.id)\"><i class=\"fa fa-trash-o m-r-5\"></i></a>&nbsp;&nbsp; -->\n                                        <a class=\"btn btn-sm btn-danger\"  \n                                            data-toggle=\"modal\"\n                                            data-target=\"#delete_entity\" \n                                            (click)=\"tempId = thisObj.id\">\n                                            <i class=\"fa fa-trash-o m-r-5\"></i>\n                                        </a>\n                                    </td>\n                                    \n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                        <div class=\"d-flex justify-content-end \">\n\n                            <div class=\"\" [formGroup]=\"myFromGroup\">\n                                Items per Page\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" formControlName=\"pageSize\">\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\n                                        {{ size }}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <div class=\"pgn-pageSliceCt\">\n                                <pagination-controls \n                                    responsive=\"true\" \n                                    previousLabel=\"Prev\" \n                                    nextLabel=\"Next\" \n                                    (pageChange)=\"handlePageChange($event)\">\n                                </pagination-controls>\n                            </div>\n                            \n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n\n\n\n<!-- Delete Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_entity\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Item</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteEnityData(tempId)\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Modal -->\n");

/***/ }),

/***/ "P3ti":
/*!***************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PayrollRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollRoutingModule", function() { return PayrollRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll.component */ "vcem");
/* harmony import */ var _components_employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-salary/employee-salary.component */ "qEV7");
/* harmony import */ var _components_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/salary-view/salary-view.component */ "lhB7");
/* harmony import */ var _components_payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/payroll-items/payroll-items.component */ "GRz6");
/* harmony import */ var _components_salary_process_salary_process_parameter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/salary-process/salary-process-parameter.component */ "h6gE");
/* harmony import */ var _components_salary_process_batch_job_list_salary_process_job_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/salary-process/batch-job/list/salary-process-job-list.component */ "vPU7");
/* harmony import */ var _components_element_value_list_payroll_element_value_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/element-value/list/payroll-element-value-list.component */ "wGdy");
/* harmony import */ var _components_element_value_create_payroll_element_value_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/element-value/create/payroll-element-value-create.component */ "38S/");
/* harmony import */ var _components_element_value_edit_payroll_element_value_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/element-value/edit/payroll-element-value-edit.component */ "4vJ/");
/* harmony import */ var _components_element_value_show_payroll_element_value_show_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/element-value/show/payroll-element-value-show.component */ "CEnB");













const routes = [
    {
        path: "",
        component: _payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"],
        children: [
            {
                path: "employee-salary",
                component: _components_employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeSalaryComponent"]
            },
            {
                path: "payslip/:id",
                component: _components_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_5__["SalaryViewComponent"]
            },
            {
                path: "payroll-items",
                component: _components_payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_6__["PayrollItemsComponent"]
            },
            {
                path: "salary-process",
                component: _components_salary_process_salary_process_parameter_component__WEBPACK_IMPORTED_MODULE_7__["PayrollSalaryProcessComponent"]
            },
            {
                path: "salary-process-list",
                component: _components_salary_process_batch_job_list_salary_process_job_list_component__WEBPACK_IMPORTED_MODULE_8__["SalaryProcessJobListComponent"]
            },
            {
                path: "element-value/list",
                component: _components_element_value_list_payroll_element_value_list_component__WEBPACK_IMPORTED_MODULE_9__["PayrollElementValueListComponent"]
            },
            {
                path: "element-value/create",
                component: _components_element_value_create_payroll_element_value_create_component__WEBPACK_IMPORTED_MODULE_10__["PayrollElementValueCreateComponent"]
            },
            {
                path: "element-value/edit/:id",
                component: _components_element_value_edit_payroll_element_value_edit_component__WEBPACK_IMPORTED_MODULE_11__["PayrollElementValueEditComponent"]
            },
            {
                path: "element-value/show/:id",
                component: _components_element_value_show_payroll_element_value_show_component__WEBPACK_IMPORTED_MODULE_12__["PayrollElementValueShowComponent"]
            }
        ]
    }
];
let PayrollRoutingModule = class PayrollRoutingModule {
};
PayrollRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PayrollRoutingModule);



/***/ }),

/***/ "Uc8D":
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/employee-salary/employee-salary.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n.pgn-pageSizeOption {\r\n\tpadding: 3px;\r\n}\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXNhbGFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUdBLGdFQUFnRTs7QUFDaEU7Q0FDQyxxQkFBcUI7Q0FDckIsOEJBQThCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBRVYsMkVBQTJFO0NBQzNFIiwiZmlsZSI6ImVtcGxveWVlLXNhbGFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5wZ24tcGFnZVNpemVPcHRpb24ge1xyXG5cdHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IFB1cnBhbGUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LmZvcm0tY29udHJvbCwgc2VsZWN0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcbiAiXX0= */");

/***/ }),

/***/ "Vv7c":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-process/batch-job/list/salary-process-job-list.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Salary Process</h3>\n                <ul class=\"breadcrumb\">\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-white\">Excel</button>\n                    <button class=\"btn btn-white\">PDF</button>\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- Search Filter -->\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\n        <div class=\"card-body p-3\">\n\n            <div class=\"row filter-row\">\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <input type=\"text\" class=\"form-control floating\" (input)=\"searchByEmpCode($event.target.value)\">\n                        <label class=\"focus-label\">Employee Code</label>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFromDate($event)\">\n                        </div>\n                        <label class=\"focus-label\">From</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <div class=\"cal-icon\">\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByToDate($event)\">\n                        </div>\n                        <label class=\"focus-label\">To</label>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12\">\n                    <a  class=\"btn btn-success btn-block\" (click)=\"searchBySearchButton()\" > Search </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- /Search Filter -->\n\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                         <a routerLink = \"/payroll/salary-process/\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> New &nbsp;&nbsp;&nbsp;</a>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"table-responsive\">\n\n                        <div class=\"d-flex justify-content-start pb-1\">\n                            <div class=\"pgn-displayDataInfo\">\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (1) ) }}  to {{configPgn.pngDiplayLastSeq}} of {{configPgn.totalItem}} ) entries</span>\n                            </div>\n                        </div>\n\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\" >\n                            <thead>\n                                <tr>\n                                    <th>SL</th>\n                                    <th class=\"d-none\">TB_ROW_ID</th>\n                                    <th>Year</th>\n                                    <th>Month</th>\n                                    <th>Total Payable Day</th>\n                                    <th>Total Disburse Day</th>\n                                    <th>Proc From Date</th>\n                                    <th>Proc To Date</th>\n                                    <th>Status</th>\n                                    <th>Job Start Time</th>\n                                    <th>Job End Time</th>\n                                    <th>Job Run User</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let thisObj of listData | paginate : configPgn; let i = index\" [class.active]=\"i == currentIndex\">\n                                \n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}</td>\n                                    <td class=\"d-none\">{{thisObj.id}}</td>\n                                    <td>{{thisObj.year}}</td>\n                                    <td>{{thisObj.month}}</td>\n                                    <td>{{thisObj.totalPayableDay}}</td>\n                                    <td>{{thisObj.totalDisburseDay}}</td>\n                                    <td>{{thisObj.procFromDate}}</td>\n                                    <td>{{thisObj.procToDate}}</td>\n                                    <td>\n                                        <i class=\"fa fa-spinner fa-pulse\"></i>\n                                    </td>\n                                    <td>{{thisObj.jobStartTime}}</td>\n                                    <td>{{thisObj.jobEndTime}}</td>\n                                    <td>{{thisObj.jobRunUser}}</td>\n                                    <td><a class=\"btn btn-sm btn-primary\" routerLink = \"/payroll/payslip/{{thisObj.id}}\">View</a></td>\n                                    \n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                        <div class=\"d-flex justify-content-end \">\n\n                            <div class=\"\" [formGroup]=\"myFromGroup\">\n                                Items per Page\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" formControlName=\"pageSize\">\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\n                                        {{ size }}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <div class=\"pgn-pageSliceCt\">\n                                <pagination-controls \n                                    responsive=\"true\" \n                                    previousLabel=\"Prev\" \n                                    nextLabel=\"Next\" \n                                    (pageChange)=\"handlePageChange($event)\">\n                                </pagination-controls>\n                            </div>\n                            \n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n");

/***/ }),

/***/ "Xi7W":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-process/salary-process-parameter.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Salary Process</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Salary Process</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a class=\"btn add-btn\" routerLink=\"/payroll/salary-process-list\"><i class=\"fa fa-share\"></i> Back To List</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Process Parameters</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        \r\n                         <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Year</label>\r\n                            <div class=\"col-md-10\">\r\n                                <select class=\"select form-control\" formControlName=\"year\" (change)=\"onChangeYear($event.target.value)\">\r\n                                    <option value=\"\">Select Year</option>\r\n                                    <option value=\"2021\" selected>2021</option>\r\n                                    <option value=\"2022\">2022</option>\r\n                                    <option value=\"2023\">2023</option>\r\n                                    <option value=\"2024\">2024</option>\r\n                                    <option value=\"2025\">2025</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                         <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Month</label>\r\n                            <div class=\"col-md-10\">\r\n                                <select class=\"select form-control\" formControlName=\"month\" (change)=\"onChangeMonth($event.target.value)\">\r\n                                    <option value=\"\" selected>Select Month</option>\r\n                                    <option value=\"01\">January</option>\r\n                                    <option value=\"02\">February</option>\r\n                                    <option value=\"03\">March</option>\r\n                                    <option value=\"04\">April</option>\r\n                                    <option value=\"05\">May</option>\r\n                                    <option value=\"06\">Jun</option>\r\n                                    <option value=\"07\">July</option>\r\n                                    <option value=\"08\">August</option>\r\n                                    <option value=\"09\">September</option>\r\n                                    <option value=\"10\">October</option>\r\n                                    <option value=\"11\">November</option>\r\n                                    <option value=\"12\">December</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                      \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Total Payable Day</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"totalPayableDay\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Total Disburse Day</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"totalDisburseDay\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Process From Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"fromDate\" bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Process To Date</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"cal-icon\">\r\n                                    <input type=\"text\" class=\"form-control\"  formControlName=\"toDate\" bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"text-right\">\r\n\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\r\n                                <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\r\n                            </button>\r\n                            &nbsp; &nbsp; &nbsp;\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\r\n                                <i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i> Start Process\r\n                            </button>\r\n                        </div>\r\n\r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\r\n");

/***/ }),

/***/ "bNXq":
/*!****************************************************************!*\
  !*** ./src/app/all-modules/payroll/service/payroll.service.ts ***!
  \****************************************************************/
/*! exports provided: PayrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollService", function() { return PayrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helper */ "rmPI");





let PayrollService = class PayrollService {
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
    // Get PayrollElement Assignment By EmpId
    getPayrollElementAssignmentByEmpId(empId) {
        return this.http.get(`${src_app_helper__WEBPACK_IMPORTED_MODULE_4__["default"]}/empPayrollAssignment/get/${empId}`);
    }
};
PayrollService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PayrollService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PayrollService);



/***/ }),

/***/ "cEfs":
/*!************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/list/payroll-element-value-list.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n.content .page-header {\r\n\tmargin-bottom: 1.075rem;\r\n}\r\n/* ================= Purpale Color =========================== */\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtZWxlbWVudC12YWx1ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUlBLGdFQUFnRTtBQUNoRTtDQUNDLHFCQUFxQjtDQUNyQiw4QkFBOEI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUVWLDJFQUEyRTtDQUMzRSIsImZpbGUiOiJwYXlyb2xsLWVsZW1lbnQtdmFsdWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNvbnRlbnQgLnBhZ2UtaGVhZGVyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjA3NXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PSBQdXJwYWxlIENvbG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5pbnB1dC5mb3JtLWNvbnRyb2wsIHNlbGVjdC5mb3JtLWNvbnRyb2wsIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG5cdGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzY2N2VlYTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7IFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICM3MDVDQkE7XHJcblx0b3V0bGluZTogMDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7IFxyXG4gfVxyXG4gIl19 */");

/***/ }),

/***/ "dHaw":
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/payroll-items/payroll-items.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJwYXlyb2xsLWl0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "gjYH":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/payroll.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->");

/***/ }),

/***/ "h6gE":
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/salary-process-parameter.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PayrollSalaryProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollSalaryProcessComponent", function() { return PayrollSalaryProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_process_parameter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-process-parameter.component.html */ "Xi7W");
/* harmony import */ var _salary_process_parameter_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-process-parameter.component.css */ "1t0Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/payroll.service */ "bNXq");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");










let PayrollSalaryProcessComponent = class PayrollSalaryProcessComponent {
    constructor(formBuilder, datePipe, payrollService, route, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.payrollService = payrollService;
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
    }
    ngOnInit() {
        this.basicForm = this.formBuilder.group({
            year: [""],
            month: [""],
            totalPayableDay: [""],
            totalDisburseDay: [""],
            fromDate: [""],
            toDate: [""],
        });
        this.initializeForm();
        this.loadData();
        var createRipple = function (e) {
            const button = e.currentTarget;
            // Get position of X
            // let x = e.clientX - e.target.offsetLeft;
            // Get position of Y 
            // let y = e.clientY - e.target.offsetTop;
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            // Create span element
            let ripple = document.createElement("span");
            // Position the span element
            ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            // Add span to the button 
            button.appendChild(ripple);
            // Remove span after 0.3s
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        };
        // document.querySelector(".btn-ripple").addEventListener('click',createRipple.bind(event));
        const elements = document.querySelectorAll('.btn-ripple');
        elements.forEach(element => {
            // element.addEventListener('click',createRipple.bind(event));
            element.addEventListener('click', function (e) {
                createRipple(e);
            });
        });
    }
    initializeForm() {
        this.setFormDefaultValues();
    }
    basicFormSubmit() {
        let apiURL = this.baseUrl + "/salaryProcess/start";
        let formData = {};
        formData.abc = "OK";
        formData = this.basicForm.value;
        // process date
        formData.procFromDate = (formData.fromDate) ? this.datePipe.transform(formData.fromDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        formData.procToDate = (formData.toDate) ? this.datePipe.transform(formData.toDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
        this.spinnerService.show();
        this.payrollService.sendPostRequest(apiURL, formData).subscribe((response) => {
            console.log(response);
            // this.router.navigateByUrl('/reports/attendance-jsr-rpt');
            this.spinnerService.hide();
            this.router.navigate(["/payroll/salary-process-list"], { relativeTo: this.route });
        }, (error) => {
            console.log(error);
            this.spinnerService.hide();
        });
    }
    loadData() {
        let apiURL = this.baseUrl + "/salaryProcess/start";
        let queryParams = {};
        queryParams.abc = "OK";
        // this.payrollService.sendGetRequest(apiURL, queryParams).subscribe(
        //   (response: any) => {
        //   console.log(response);
        //   },
        //   (error) => console.log(error)
        // );
    }
    daysInThisMonth(now) {
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }
    getMonthFirstDate(date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay;
    }
    getMonthLastDate(date) {
        var date = new Date();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return lastDay;
    }
    onChangeYear(value) {
        console.log(value);
    }
    onChangeMonth(value) {
        console.log(value);
        console.log(parseInt(value));
        let year = this.basicForm.get('year').value;
        let month = parseInt(value);
        var monthFirstDayDate = new Date(year, month - 1, 1); // start from 0-11
        let daysInMonth = this.daysInThisMonth(monthFirstDayDate);
        this.basicForm.controls.totalPayableDay.setValue(daysInMonth);
        this.basicForm.controls.totalDisburseDay.setValue(daysInMonth);
        this.basicForm.controls.fromDate.setValue(this.getMonthFirstDate(monthFirstDayDate));
        this.basicForm.controls.toDate.setValue(this.getMonthLastDate(monthFirstDayDate));
    }
    setFormDefaultValues() {
        var dt = new Date();
        var year = dt.getFullYear();
        // multiple
        this.basicForm.patchValue({
            year: year,
        });
        // single
        this.basicForm.controls.year.setValue(year);
    }
    resetFormValues() {
        this.basicForm = this.formBuilder.group({
            year: [""],
            month: [""],
            totalPayableDay: [""],
            totalDisburseDay: [""],
            fromDate: [""],
            toDate: [""],
        });
        this.setFormDefaultValues();
    }
};
PayrollSalaryProcessComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_8__["PayrollService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
PayrollSalaryProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payroll-salary-process",
        template: _raw_loader_salary_process_parameter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_process_parameter_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _service_payroll_service__WEBPACK_IMPORTED_MODULE_8__["PayrollService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], PayrollSalaryProcessComponent);



/***/ }),

/***/ "i3Y9":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/employee-salary/employee-salary.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Employee Salary</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Salary</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <div class=\"btn-group btn-group\">\r\n                    <button class=\"btn btn-white\">Excel</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\r\n        <div class=\"card-body p-3\">\r\n\r\n            <div class=\"row filter-row\">\r\n                <div class=\"col-sm-6 col-md-2 col-lg-3 col-xl-3 col-xxl-2 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <input type=\"text\" class=\"form-control floating\" (input)=\"searchByEmpName($event.target.value)\">\r\n                        <label class=\"focus-label\">Employee Name</label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <input type=\"text\" class=\"form-control floating\" (input)=\"searchByEmpCode($event.target.value)\">\r\n                        <label class=\"focus-label\">Employee Code</label>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFromDate($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">From</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByToDate($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">To</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12\">\r\n                    <a  class=\"btn btn-success btn-block\" (click)=\"searchBySearchButton()\" > Search </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n\r\n                    <div class=\"table-responsive\">\r\n\r\n                        <div class=\"d-flex justify-content-start pb-1\">\r\n                            <div class=\"pgn-displayDataInfo\">\r\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((pngConfig.pageNum-1) * pngConfig.pageSize) + (1) ) }}  to {{pngConfig.pngDiplayLastSeq}} of {{pngConfig.totalItem}} ) entries</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\" >\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>SL</th>\r\n                                    <th class=\"d-none\">TB_ROW_ID</th>\r\n                                    <th>Employee</th>\r\n                                    <th>Employee Code</th>\r\n                                    <th>Salary Disburse Date</th>\r\n                                    <th>Gross Salary</th>\r\n                                    <th>Net Pay Amount</th>\r\n                                    <th>Payslip</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let thisObj of listData | paginate : pngConfig; let i = index\" [class.active]=\"i == currentIndex\">\r\n                                \r\n                                    <td>{{ ( ((pngConfig.pageNum-1) * pngConfig.pageSize) + (i+1) ) }}</td>\r\n                                    <td class=\"d-none\">{{thisObj.id}}</td>\r\n                                    <td>{{thisObj.empName}}</td>\r\n                                    <td>{{thisObj.empCode}}</td>\r\n                                    <td>{{thisObj.salaryDayMonthYear}}</td>\r\n                                    <td>{{thisObj.prlElmntGross}}</td>\r\n                                    <td>{{thisObj.netPayableAmount}}</td>\r\n                                    <td><a class=\"btn btn-sm btn-primary\" routerLink = \"/payroll/payslip/{{thisObj.id}}\">{{thisObj.paySlipNum}}</a></td>\r\n                                    \r\n                                </tr>\r\n\r\n                                <tr *ngIf=\"listData.length === 0\">\r\n                                    <td colspan=\"10\">\r\n                                        <h5 style=\"text-align: center;\">No data found</h5>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n\r\n                        <div class=\"d-flex justify-content-end \">\r\n\r\n                            <div class=\"\" [formGroup]=\"myFromGroup\">\r\n                                Items per Page\r\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" formControlName=\"pageSize\">\r\n                                    <option *ngFor=\"let size of pngConfig.pageSizes\" [value]=\"size\">\r\n                                        {{ size }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <div class=\"pgn-pageSliceCt\">\r\n                                <pagination-controls \r\n                                    responsive=\"true\" \r\n                                    previousLabel=\"Prev\" \r\n                                    nextLabel=\"Next\" \r\n                                    (pageChange)=\"handlePageChange($event)\">\r\n                                </pagination-controls>\r\n                            </div>\r\n                            \r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\r\n");

/***/ }),

/***/ "iNto":
/*!************************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/create/salary-process-job-create.component.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxhcnktcHJvY2Vzcy1qb2ItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "jDtM":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/payroll-items/payroll-items.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Payroll Items</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Payroll Items</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Page Tab -->\r\n    <div class=\"page-menu\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <ul class=\"nav nav-tabs nav-tabs-bottom\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab_additions\">Additions</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab_overtime\">Overtime</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab_deductions\">Deductions</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Tab -->\r\n\r\n    <!-- Tab Content -->\r\n    <div class=\"tab-content\">\r\n\r\n        <!-- Additions Tab -->\r\n        <div class=\"tab-pane show active\" id=\"tab_additions\">\r\n\r\n            <!-- Add Addition Button -->\r\n            <div class=\"text-right mb-4 clearfix\">\r\n                <button class=\"btn btn-primary add-btn\" type=\"button\" data-toggle=\"modal\" data-target=\"#add_addition\"><i\r\n                        class=\"fa fa-plus\"></i> Add Addition</button>\r\n            </div>\r\n            <!-- /Add Addition Button -->\r\n\r\n            <!-- Payroll Additions Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Category</th>\r\n                                <th>Default/Unit Amount</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let addPayroll of allAddPayroll;let i = index\">\r\n                                <th>{{addPayroll.name}}</th>\r\n                                <td>{{addPayroll.category}}</td>\r\n                                <td>{{addPayroll.unitCost}}</td>\r\n                                <td class=\"text-right\">\r\n                                    <div class=\"dropdown dropdown-action\">\r\n                                        <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                            aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#edit_addition\" (click)=\"editAdd(addPayroll.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#delete_addition\" (click)=\"tempAddId = addPayroll.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                                Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allAddPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Additions Table -->\r\n\r\n        </div>\r\n        <!-- Additions Tab -->\r\n\r\n        <!-- Overtime Tab -->\r\n        <div class=\"tab-pane\" id=\"tab_overtime\">\r\n\r\n            <!-- Add Overtime Button -->\r\n            <div class=\"text-right mb-4 clearfix\">\r\n                <button class=\"btn btn-primary add-btn\" type=\"button\" data-toggle=\"modal\" data-target=\"#add_overtime\"><i\r\n                        class=\"fa fa-plus\"></i> Add Overtime</button>\r\n            </div>\r\n            <!-- /Add Overtime Button -->\r\n\r\n            <!-- Payroll Overtime Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Rate</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let overPayroll of allOverPayroll;let i = index\">\r\n                                <th>{{overPayroll.name}}</th>\r\n                                <td>{{overPayroll.rate}}</td>\r\n                                <td class=\"text-right\">\r\n                                    <div class=\"dropdown dropdown-action\">\r\n                                        <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                            aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#edit_overtime\" (click)=\"editOver(overPayroll.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#delete_overtime\" (click)=\"tempOverId = overPayroll.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                                Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allOverPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Overtime Table -->\r\n\r\n        </div>\r\n        <!-- /Overtime Tab -->\r\n\r\n        <!-- Deductions Tab -->\r\n        <div class=\"tab-pane\" id=\"tab_deductions\">\r\n\r\n            <!-- Add Deductions Button -->\r\n            <div class=\"text-right mb-4 clearfix\">\r\n                <button class=\"btn btn-primary add-btn\" type=\"button\" data-toggle=\"modal\"\r\n                    data-target=\"#add_deduction\"><i class=\"fa fa-plus\"></i> Add Deduction</button>\r\n            </div>\r\n            <!-- /Add Deductions Button -->\r\n\r\n            <!-- Payroll Deduction Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Default/Unit Amount</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let deductPayroll of allDeductPayroll;let i = index\">\r\n                                <th>{{deductPayroll.name}}</th>\r\n                                <td>{{deductPayroll.unitCost}}</td>\r\n                                <td class=\"text-right\">\r\n                                    <div class=\"dropdown dropdown-action\">\r\n                                        <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                            aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#edit_deduction\" (click)=\"editDeduct(deductPayroll.id)\"><i class=\"fa fa-pencil m-r-5\"></i>\r\n                                                Edit</a>\r\n                                            <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                                data-target=\"#delete_deduction\" (click)=\"tempDeductId = deductPayroll.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                                Delete</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allDeductPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Deduction Table -->\r\n\r\n        </div>\r\n        <!-- /Deductions Tab -->\r\n\r\n    </div>\r\n    <!-- Tab Content -->\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Addition Modal -->\r\n<div id=\"add_addition\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Addition</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addPayroll()\" [formGroup]=\"addPayrollForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\"\r\n                        formControlName=\"addPayrollName\">\r\n                        <div\r\n                                    *ngIf=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\"\r\n                                        class=\"text-danger\"> *Name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"select form-control\" [class.invalid]=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\"\r\n                        formControlName=\"addPayrollCategory\">\r\n                            <option>Select a category</option>\r\n                            <option>Monthly remuneration</option>\r\n                            <option>Additional remuneration</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\">\r\n                        <small\r\n                            *ngIf=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\"\r\n                            class=\"text-danger\"> *Category is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"unit_calculation\" class=\"check\">\r\n                            <label for=\"unit_calculation\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">$</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\"\r\n                            formControlName=\"addPayrollUnit\">\r\n                            <div\r\n                            *ngIf=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\">\r\n                            <small\r\n                                *ngIf=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\"\r\n                                class=\"text-danger\"> *Category is required</small>\r\n                        </div>\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\" id=\"addition_no_emp\"\r\n                                value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"addition_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\" id=\"addition_all_emp\"\r\n                                value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"addition_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\"\r\n                                id=\"addition_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"addition_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Addition Modal -->\r\n\r\n<!-- Edit Addition Modal -->\r\n<div id=\"edit_addition\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Addition</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editPayroll()\" [formGroup]=\"editPayrollForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\"\r\n                        formControlName=\"editPayrollName\">\r\n                        <div\r\n                        *ngIf=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\">\r\n                        <small\r\n                            *ngIf=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"select form-control\" [class.invalid]=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\"\r\n                        formControlName=\"editPayrollCategory\">\r\n                            <option>Select a category</option>\r\n                            <option>Monthly remuneration</option>\r\n                            <option>Additional remuneration</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\">\r\n                        <small\r\n                            *ngIf=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\"\r\n                            class=\"text-danger\"> *Category is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"edit_unit_calculation\" class=\"check\">\r\n                            <label for=\"edit_unit_calculation\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">$</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\"\r\n                            formControlName=\"editPayrollUnit\">\r\n                            <div\r\n                            *ngIf=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\">\r\n                            <small\r\n                                *ngIf=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\"\r\n                                class=\"text-danger\"> *Unit is required</small>\r\n                        </div>\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_no_emp\" value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"edit_addition_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"edit_addition_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"edit_addition_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Addition Modal -->\r\n\r\n<!-- Delete Addition Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_addition\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Addition</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deletePayroll()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Addition Modal -->\r\n\r\n<!-- Add Overtime Modal -->\r\n<div id=\"add_overtime\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Overtime</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addOver()\" [formGroup]=\"addOverForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\"\r\n                        formControlName=\"addOverName\">\r\n                        <div\r\n                                    *ngIf=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\"\r\n                                        class=\"text-danger\"> *Name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate Type <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"select form-control\">\r\n                            <option>-</option>\r\n                            <option>Daily Rate</option>\r\n                            <option>Hourly Rate</option>\r\n                        </select>\r\n                       \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\"\r\n                        formControlName=\"addOverRate\">\r\n                        <div\r\n                        *ngIf=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\">\r\n                        <small\r\n                            *ngIf=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\"\r\n                            class=\"text-danger\"> *Rate is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Overtime Modal -->\r\n\r\n<!-- Edit Overtime Modal -->\r\n<div id=\"edit_overtime\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Overtime</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editOverSubmit()\" [formGroup]=\"editOverForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\"\r\n                        formControlName=\"editOverName\">\r\n                        <div\r\n                        *ngIf=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\">\r\n                        <small\r\n                            *ngIf=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate Type <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"select form-control\">\r\n                            <option>-</option>\r\n                            <option>Daily Rate</option>\r\n                            <option>Hourly Rate</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\"\r\n                        formControlName=\"editOverRate\">\r\n                        <div\r\n                        *ngIf=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\">\r\n                        <small\r\n                            *ngIf=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\"\r\n                            class=\"text-danger\"> *Rate is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Overtime Modal -->\r\n\r\n<!-- Delete Overtime Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_overtime\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Overtime</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteOver()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Overtime Modal -->\r\n\r\n<!-- Add Deduction Modal -->\r\n<div id=\"add_deduction\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Deduction</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addDeducts()\" [formGroup]=\"addDeductForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\"\r\n                        formControlName=\"addDeductName\">\r\n                        <div\r\n                        *ngIf=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\">\r\n                        <small\r\n                            *ngIf=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"unit_calculation_deduction\" class=\"check\">\r\n                            <label for=\"unit_calculation_deduction\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">$</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\"\r\n                            formControlName=\"addDeductUnit\">\r\n                            <div\r\n                        *ngIf=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\">\r\n                        <small\r\n                            *ngIf=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\"\r\n                            class=\"text-danger\"> *Unit is required</small>\r\n                    </div>\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\" id=\"deduction_no_emp\"\r\n                                value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"deduction_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\"\r\n                                id=\"deduction_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"deduction_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\"\r\n                                id=\"deduction_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"deduction_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Deduction Modal -->\r\n\r\n<!-- Edit Deduction Modal -->\r\n<div id=\"edit_deduction\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Deduction</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editDeductSubmit()\" [formGroup]=\"editDeductForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\"\r\n                        formControlName=\"editDeductName\">\r\n                        <div\r\n                        *ngIf=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\">\r\n                        <small\r\n                            *ngIf=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"edit_unit_calculation_deduction\" class=\"check\">\r\n                            <label for=\"edit_unit_calculation_deduction\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">$</span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\"\r\n                            formControlName=\"editDeductunit\">\r\n                            <div\r\n                        *ngIf=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\">\r\n                        <small\r\n                            *ngIf=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\"\r\n                            class=\"text-danger\"> *Unit is required</small>\r\n                    </div>\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_no_emp\" value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Addition Modal -->\r\n\r\n<!-- Delete Deduction Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_deduction\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Deduction</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteDeduct()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Deduction Modal -->");

/***/ }),

/***/ "ktGS":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-process/batch-job/show/salary-process-job-show.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>salary-process-job-show works!</p>\n");

/***/ }),

/***/ "lhB7":
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-view/salary-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SalaryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryViewComponent", function() { return SalaryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-view.component.html */ "/jV3");
/* harmony import */ var _salary_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-view.component.css */ "MtI5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/payroll.service */ "bNXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SalaryViewComponent = class SalaryViewComponent {
    constructor(payrollService, spinnerService, route) {
        this.payrollService = payrollService;
        this.spinnerService = spinnerService;
        this.route = route;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.payslipData = {};
    }
    ngOnInit() {
        this.loadPayslipData();
    }
    loadPayslipData() {
        this.payslipId = this.route.snapshot.params.id;
        let apiURL = this.baseUrl + "/getEmpPayslip/" + this.payslipId;
        let queryParams = {};
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.payslipData = response;
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
};
SalaryViewComponent.ctorParameters = () => [
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_6__["PayrollService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SalaryViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-view',
        template: _raw_loader_salary_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_payroll_service__WEBPACK_IMPORTED_MODULE_6__["PayrollService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], SalaryViewComponent);



/***/ }),

/***/ "ltR1":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/create/salary-process-job-create.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SalaryProcessJobCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessJobCreateComponent", function() { return SalaryProcessJobCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_process_job_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-process-job-create.component.html */ "rhXv");
/* harmony import */ var _salary_process_job_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-process-job-create.component.css */ "iNto");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SalaryProcessJobCreateComponent = class SalaryProcessJobCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalaryProcessJobCreateComponent.ctorParameters = () => [];
SalaryProcessJobCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-process-job-create',
        template: _raw_loader_salary_process_job_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_process_job_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SalaryProcessJobCreateComponent);



/***/ }),

/***/ "mHbd":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-process/batch-job/edit/salary-process-job-edit.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>salary-process-job-edit works!</p>\n");

/***/ }),

/***/ "n0xR":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/element-value/show/payroll-element-value-show.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Payroll Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Payroll Element</li>\n                    <li class=\"breadcrumb-item active\">Show</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n\n                    <form id=\"formERP\" novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\n                        \n                        <fieldset class=\"row fieldsetWithoutBorder\">\n                            <legend></legend>\n                            <div class=\"col-12\">\n    \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Employee</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myFormData.empTitle}}</span>\n                                    </div>\n                                </div>\n                                \n                                 <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Element Title</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{titleDecode[myFormData.elementTitle]}}</span>\n                                    </div>\n                                </div>\n                              \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Amount</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myFormData.elementAmount}}</span>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">Start Date</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myFormData.activeStartDate}}</span>\n                                    </div>\n                                </div>\n        \n                                <div class=\"form-group row\">\n                                    <label class=\"col-form-label col-md-2\">End Date</label>\n                                    <div class=\"col-md-10\">\n                                        <span>: &nbsp;</span><span>{{myFormData.activeEndDate}}</span>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </fieldset>\n\n\n                        <fieldset class=\"row fieldsetBorder logBox\">\n                            <legend>System Log Information</legend>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">ID</label>\n                                <div class=\"\">\n                                    <span>{{myFormData.id}}</span>\n                                </div>\n                            </div>\n                           \n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Creation Time</label>\n                                <div class=\"\">\n                                    <span>{{myFormData.creationDateTime}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Creation User</label>\n                                <div class=\"\">\n                                    <span>{{myFormData.creationUser}}</span>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Last Update Time</label>\n                                <div class=\"\">\n                                    <span>{{myFormData.lastUpdateDateTime}}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-form-label\">Last Update User</label>\n                                <div class=\"\">\n                                    <span>{{myFormData.lastUpdateUser}}</span>\n                                </div>\n                            </div>\n\n                        </fieldset>\n\n                        <div class=\"text-right\">\n                            <a class=\"btn btn-primary btn-ripple\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Close</a>\n                            &nbsp;\n                        </div>\n\n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n");

/***/ }),

/***/ "nl7P":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/element-value/edit/payroll-element-value-edit.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Payroll Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Payroll Element</li>\n                    <li class=\"breadcrumb-item active\">Edit</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n                    <form novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\n                        \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">ID</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"id\" readonly disabled>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Employee</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"empTitle\">\n                            </div>\n                        </div>\n                        \n                         <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Element Title</label>\n                            <div class=\"col-md-10\">\n                                <select class=\"form-control\" formControlName=\"elementTitle\">\n                                    <option value=\"\">Select</option>\n                                    <option value=\"HRA\">House Rent Allowance</option>\n                                    <option value=\"MDL_ALW\">Medical Allowance</option>\n                                    <option value=\"OT_ALW\">Overtime Allowance</option>\n                                    <option value=\"LTA\">Leave Travel Allowance</option>\n                                    <option value=\"EA\">Entertainment Allowance</option>\n                                    <option value=\"UCA_ALW\">Uniform Allowance / Corporate Attire</option>\n                                    <option value=\"FAMILY_ALW\">Family Allowance</option>\n                                    <option value=\"EDA\">Education Allowance</option>\n                                    <option value=\"PRJ_ALW\">Project Allowance</option>\n                                    <option value=\"HOSTEL_ALW\">Hostel Allowance</option>\n                                    <option value=\"CHILD_EDU_ALW\">Children's education Allowance</option>\n                                    <option value=\"CHILD_HOSTEL_ALW\">Children's hostel Allowance</option>\n                                    <option value=\"PROF_ALW\">Professional pursuit/research Allowance</option>\n                                </select>\n                            </div>\n                        </div>\n                      \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Amount</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"elementAmount\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">Start Date</label>\n                            <div class=\"col-md-10\">\n                                <div class=\"cal-icon\">\n                                    <input type=\"text\" class=\"form-control datetimepicker\" formControlName=\"activeStartDate\" \n                                    bsDatepicker\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-form-label col-md-2\">End Date</label>\n                            <div class=\"col-md-10\">\n                                <div class=\"cal-icon\">\n                                    <input type=\"text\" class=\"form-control\"  formControlName=\"activeEndDate\" \n                                    bsDatepicker \n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\">\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"text-right\">\n                            <a class=\"btn btn-warning btn-ripple\" routerLink=\"/payroll/element-value/list\"><i class=\"fa fa-share\"></i> Cancel</a>\n                            &nbsp; &nbsp; &nbsp;\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                            </button>\n                        </div>\n\n                       \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n");

/***/ }),

/***/ "qEV7":
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/employee-salary/employee-salary.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmployeeSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSalaryComponent", function() { return EmployeeSalaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_salary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-salary.component.html */ "i3Y9");
/* harmony import */ var _employee_salary_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-salary.component.css */ "Uc8D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/payroll.service */ "bNXq");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let EmployeeSalaryComponent = class EmployeeSalaryComponent {
    constructor(payrollService, spinnerService) {
        this.payrollService = payrollService;
        this.spinnerService = spinnerService;
        // cores
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
        // list
        this.listData = [];
        this.pngConfig = {
            // my props
            pageNum: 1,
            pageSize: 10,
            totalItem: 50,
            pageSizes: [3, 5, 10, 25, 50, 100, 200, 500, 1000],
            pngDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 50
        };
    }
    ngOnInit() {
        // set init params
        this.myFromGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]()
        });
        this.myFromGroup.get('pageSize').setValue(this.pngConfig.pageSize);
        // bind event & action
        this.bindFromFloatingLabel();
        // get List Data
        this.getListData();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            //
        }, 1000);
    }
    bindFromFloatingLabel() {
        var self = this;
        // for floating label
        if ($(".floating").length > 0) {
            $(".floating")
                .on("focus blur", function (e) {
                $(this)
                    .parents(".form-focus")
                    .toggleClass("focused", e.type === "focus" || this.value.length > 0);
            })
                .trigger("blur");
        }
        $('.filter-row').find('input, select, textarea').keyup(function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                self.getSearchData();
            }
        });
    }
    // list & search methods --------------------------------------------------------------------------------------
    searchByFromDate(val) {
        let myFromDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcFromDate = myFromDateIso;
        console.log(myFromDateIso);
        this.bindFromFloatingLabel();
    }
    searchByToDate(val) {
        let myToDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcToDate = myToDateIso;
        console.log(myToDateIso);
        this.bindFromFloatingLabel();
    }
    searchByEmpName(val) {
        console.log(val);
        this.srcEmpName = val;
    }
    searchByEmpCode(val) {
        console.log(val);
        this.srcEmpCode = val;
    }
    searchBySearchButton() {
        console.log(this.srcFromDate);
        console.log(this.srcToDate);
        console.log(this.srcEmpName);
        console.log(this.srcEmpCode);
        // call get list method
        this.getListData();
    }
    getSearchData() {
        this.getListData();
    }
    getUserQueryParams(page, pageSize) {
        let params = {};
        if (page) {
            params[`pageNum`] = page - 0;
        }
        if (pageSize) {
            params[`pageSize`] = pageSize;
        }
        // push other attributes
        if (this.srcEmpCode) {
            params[`empCode`] = this.srcEmpCode;
        }
        if (this.srcEmpName) {
            params[`empName`] = this.srcEmpName;
        }
        if (this.srcFromDate && this.srcToDate) {
            params[`fromDate`] = this.srcFromDate;
            params[`toDate`] = this.srcToDate;
        }
        return params;
    }
    getListData() {
        let apiURL = this.baseUrl + "/empSalary";
        let queryParams = {};
        const params = this.getUserQueryParams(this.pngConfig.pageNum, this.pngConfig.pageSize);
        queryParams = params;
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.pngConfig.totalItem = response.totalItems;
            this.pngConfig.totalItems = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
    // pagination handling methods start -----------------------------------------------------------------------
    setDisplayLastSequence() {
        this.pngConfig.pngDiplayLastSeq = (((this.pngConfig.pageNum - 1) * this.pngConfig.pageSize) + this.pngConfig.pageSize);
        if (this.listData.length < this.pngConfig.pageSize) {
            this.pngConfig.pngDiplayLastSeq = (((this.pngConfig.pageNum - 1) * this.pngConfig.pageSize) + this.pngConfig.pageSize);
        }
        if (this.pngConfig.totalItem < this.pngConfig.pngDiplayLastSeq) {
            this.pngConfig.pngDiplayLastSeq = this.pngConfig.totalItem;
        }
    }
    handlePageChange(event) {
        this.pngConfig.pageNum = event;
        // set for ngx
        this.pngConfig.currentPage = this.pngConfig.pageNum;
        this.getListData();
    }
    handlePageSizeChange(event) {
        this.pngConfig.pageSize = event.target.value;
        this.pngConfig.pageNum = 1;
        // set for ngx
        this.pngConfig.itemsPerPage = this.pngConfig.pageSize;
        this.getListData();
    }
    // pagination handling methods end -------------------------------------------------------------------------
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
EmployeeSalaryComponent.ctorParameters = () => [
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_4__["PayrollService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
EmployeeSalaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-employee-salary",
        template: _raw_loader_employee_salary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_salary_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_payroll_service__WEBPACK_IMPORTED_MODULE_4__["PayrollService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], EmployeeSalaryComponent);



/***/ }),

/***/ "qRAE":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/show/salary-process-job-show.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SalaryProcessJobShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessJobShowComponent", function() { return SalaryProcessJobShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_process_job_show_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-process-job-show.component.html */ "ktGS");
/* harmony import */ var _salary_process_job_show_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-process-job-show.component.css */ "Eccb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SalaryProcessJobShowComponent = class SalaryProcessJobShowComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalaryProcessJobShowComponent.ctorParameters = () => [];
SalaryProcessJobShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-process-job-show',
        template: _raw_loader_salary_process_job_show_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_process_job_show_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SalaryProcessJobShowComponent);



/***/ }),

/***/ "rhXv":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/payroll/components/salary-process/batch-job/create/salary-process-job-create.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>salary-process-job-create works!</p>\n");

/***/ }),

/***/ "u1j9":
/*!***********************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "uALH":
/*!****************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/create/payroll-element-value-create.component.css ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\n\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtZWxlbWVudC12YWx1ZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZDs7Ozs7O0FBTUEsZ0VBQWdFOzs7Ozs7QUFDaEU7Q0FDQyxxQkFBcUI7Q0FDckIsOEJBQThCO0lBQzNCLGdCQUFnQjtBQUNwQjs7Ozs7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUVWLDJFQUEyRTtDQUMzRSIsImZpbGUiOiJwYXlyb2xsLWVsZW1lbnQtdmFsdWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IFB1cnBhbGUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LmZvcm0tY29udHJvbCwgc2VsZWN0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcbiAiXX0= */");

/***/ }),

/***/ "vPU7":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/list/salary-process-job-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SalaryProcessJobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessJobListComponent", function() { return SalaryProcessJobListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_process_job_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-process-job-list.component.html */ "Vv7c");
/* harmony import */ var _salary_process_job_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-process-job-list.component.css */ "DvGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_all_modules_payroll_service_payroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/all-modules/payroll/service/payroll.service */ "bNXq");










let SalaryProcessJobListComponent = class SalaryProcessJobListComponent {
    constructor(payrollService, spinnerService) {
        this.payrollService = payrollService;
        this.spinnerService = spinnerService;
        // cores
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.everyFiveSeconds = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, 11000); // 11 second
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US");
        // list
        this.listData = [];
        this.configPgn = {
            // my props
            pageNum: 1,
            pageSize: 10,
            totalItem: 50,
            pageSizes: [3, 5, 10, 25, 50, 100, 200, 500, 1000],
            pgnDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 50
        };
    }
    ngOnInit() {
        // set init params
        this.myFromGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
        this.myFromGroup.get('pageSize').setValue(this.configPgn.pageSize);
        // bind event & action
        this.bindFromFloatingLabel();
        // get List Data
        this.getListData();
        this.subscription = this.everyFiveSeconds.subscribe(() => {
            this.getListData();
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            //
        }, 1000);
    }
    bindFromFloatingLabel() {
        var self = this;
        // for floating label
        if ($(".floating").length > 0) {
            $(".floating")
                .on("focus blur", function (e) {
                $(this)
                    .parents(".form-focus")
                    .toggleClass("focused", e.type === "focus" || this.value.length > 0);
            })
                .trigger("blur");
        }
        $('.filter-row').find('input, select, textarea').keyup(function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                self.getSearchData();
            }
        });
    }
    // list & search methods --------------------------------------------------------------------------------------
    searchByFromDate(val) {
        let myFromDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcFromDate = myFromDateIso;
        console.log(myFromDateIso);
        this.bindFromFloatingLabel();
    }
    searchByToDate(val) {
        let myToDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcToDate = myToDateIso;
        console.log(myToDateIso);
        this.bindFromFloatingLabel();
    }
    searchByEmpCode(val) {
        console.log(val);
        this.srcEmpCode = val;
    }
    searchBySearchButton() {
        console.log(this.srcFromDate);
        console.log(this.srcToDate);
        console.log(this.srcEmpCode);
        // call get list method
        this.getListData();
    }
    getSearchData() {
        this.getListData();
    }
    getUserQueryParams(page, pageSize) {
        let params = {};
        if (page) {
            params[`pageNum`] = page - 0;
        }
        if (pageSize) {
            params[`pageSize`] = pageSize;
        }
        // push other attributes
        if (this.srcEmpCode) {
            params[`empCode`] = this.srcEmpCode;
        }
        if (this.srcFromDate && this.srcToDate) {
            params[`fromDate`] = this.srcFromDate;
            params[`toDate`] = this.srcToDate;
        }
        return params;
    }
    getListData() {
        let apiURL = this.baseUrl + "/api/salaryProcessJP/getList";
        let queryParams = {};
        const params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
        queryParams = params;
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.configPgn.totalItem = response.totalItems;
            this.configPgn.totalItems = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
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
    // pagination handling methods end -------------------------------------------------------------------------
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.subscription.unsubscribe();
    }
};
SalaryProcessJobListComponent.ctorParameters = () => [
    { type: src_app_all_modules_payroll_service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
SalaryProcessJobListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-process-job-list',
        template: _raw_loader_salary_process_job_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_process_job_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_all_modules_payroll_service_payroll_service__WEBPACK_IMPORTED_MODULE_9__["PayrollService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], SalaryProcessJobListComponent);



/***/ }),

/***/ "vcem":
/*!**********************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.component.ts ***!
  \**********************************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll.component.html */ "gjYH");
/* harmony import */ var _payroll_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll.component.css */ "u1j9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PayrollComponent = class PayrollComponent {
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
PayrollComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
PayrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll',
        template: _raw_loader_payroll_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], PayrollComponent);



/***/ }),

/***/ "wGdy":
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/list/payroll-element-value-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PayrollElementValueListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollElementValueListComponent", function() { return PayrollElementValueListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_element_value_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-element-value-list.component.html */ "NsIt");
/* harmony import */ var _payroll_element_value_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-element-value-list.component.css */ "cEfs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_payroll_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/payroll.service */ "bNXq");











let PayrollElementValueListComponent = class PayrollElementValueListComponent {
    constructor(payrollService, spinnerService, route, router, toastr) {
        this.payrollService = payrollService;
        this.spinnerService = spinnerService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        // cores
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US");
        // list
        this.listData = [];
        // translate fields
        this.titleDecode = {
            HRA: "House Rent Allowance",
            MDL_ALW: "Medical Allowance",
            OT_ALW: "Overtime Allowance",
            LTA: "Leave Travel Allowance",
            EA: "Entertainment Allowance",
            UCA_ALW: "Uniform Allowance / Corporate Attire",
            FAMILY_ALW: "Family Allowance",
            EDA: "Education Allowance",
            PRJ_ALW: "Project Allowance",
            HOSTEL_ALW: "Hostel Allowance",
            CHILD_EDU_ALW: "Children's education Allowance",
            CHILD_HOSTEL_ALW: "Children's hostel Allowance",
            PROF_ALW: "Professional pursuit/research Allowance"
        };
        this.configPgn = {
            // my props
            pageNum: 1,
            pageSize: 10,
            totalItem: 50,
            pageSizes: [3, 5, 10, 25, 50, 100, 200, 500, 1000],
            pgnDiplayLastSeq: 10,
            // ngx plugin props
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 50
        };
    }
    ngOnInit() {
        // set init params
        this.myFromGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]()
        });
        this.myFromGroup.get('pageSize').setValue(this.configPgn.pageSize);
        // bind event & action
        this.bindFromFloatingLabel();
        // get List Data
        this.getListData();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            //
        }, 1000);
    }
    bindFromFloatingLabel() {
        var self = this;
        // for floating label
        if ($(".floating").length > 0) {
            $(".floating")
                .on("focus blur", function (e) {
                $(this)
                    .parents(".form-focus")
                    .toggleClass("focused", e.type === "focus" || this.value.length > 0);
            })
                .trigger("blur");
        }
        $('.filter-row').find('input, select, textarea').keyup(function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                self.getSearchData();
            }
        });
    }
    // list & search methods --------------------------------------------------------------------------------------
    searchByFromDate(val) {
        let myFromDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcFromDate = myFromDateIso;
        console.log(myFromDateIso);
        this.bindFromFloatingLabel();
    }
    searchByToDate(val) {
        let myToDateIso = this.pipe.transform(val, "yyyy-MM-dd");
        this.srcToDate = myToDateIso;
        console.log(myToDateIso);
        this.bindFromFloatingLabel();
    }
    searchByEmpCode(val) {
        console.log(val);
        this.srcEmpCode = val;
    }
    searchBySearchButton() {
        console.log(this.srcFromDate);
        console.log(this.srcToDate);
        console.log(this.srcEmpCode);
        // call get list method
        this.getListData();
    }
    getSearchData() {
        this.getListData();
    }
    getUserQueryParams(page, pageSize) {
        let params = {};
        if (page) {
            params[`pageNum`] = page - 0;
        }
        if (pageSize) {
            params[`pageSize`] = pageSize;
        }
        // push other attributes
        if (this.srcEmpCode) {
            params[`empCode`] = this.srcEmpCode;
        }
        if (this.srcFromDate && this.srcToDate) {
            params[`fromDate`] = this.srcFromDate;
            params[`toDate`] = this.srcToDate;
        }
        return params;
    }
    getListData() {
        let apiURL = this.baseUrl + "/api/payrollElValue/getList";
        let queryParams = {};
        const params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
        queryParams = params;
        this.spinnerService.show();
        this.payrollService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.configPgn.totalItem = response.totalItems;
            this.configPgn.totalItems = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
    deleteEnityData(dataId) {
        let apiURL = this.baseUrl + "/api/payrollElValue/delete/" + dataId;
        console.log(apiURL);
        let formData = {};
        formData.rEntityName = "PayrollElementValue";
        formData.rActiveOperation = "delete";
        this.spinnerService.show();
        this.payrollService.sendDeleteRequest(apiURL, formData).subscribe((response) => {
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
    // pagination handling methods end -------------------------------------------------------------------------
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
PayrollElementValueListComponent.ctorParameters = () => [
    { type: _service_payroll_service__WEBPACK_IMPORTED_MODULE_10__["PayrollService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
PayrollElementValueListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll-element-value-list',
        template: _raw_loader_payroll_element_value_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_element_value_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_payroll_service__WEBPACK_IMPORTED_MODULE_10__["PayrollService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
], PayrollElementValueListComponent);



/***/ }),

/***/ "yPgr":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/salary-process/batch-job/edit/salary-process-job-edit.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SalaryProcessJobEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryProcessJobEditComponent", function() { return SalaryProcessJobEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_process_job_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-process-job-edit.component.html */ "mHbd");
/* harmony import */ var _salary_process_job_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-process-job-edit.component.css */ "2bCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SalaryProcessJobEditComponent = class SalaryProcessJobEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalaryProcessJobEditComponent.ctorParameters = () => [];
SalaryProcessJobEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-process-job-edit',
        template: _raw_loader_salary_process_job_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_process_job_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SalaryProcessJobEditComponent);



/***/ }),

/***/ "zkrG":
/*!************************************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/components/element-value/edit/payroll-element-value-edit.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\n\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtZWxlbWVudC12YWx1ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7Ozs7OztBQU1BLGdFQUFnRTs7Ozs7O0FBQ2hFO0NBQ0MscUJBQXFCO0NBQ3JCLDhCQUE4QjtJQUMzQixnQkFBZ0I7QUFDcEI7Ozs7OztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFVBQVU7Q0FFViwyRUFBMkU7Q0FDM0UiLCJmaWxlIjoicGF5cm9sbC1lbGVtZW50LXZhbHVlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gUHVycGFsZSBDb2xvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaW5wdXQuZm9ybS1jb250cm9sLCBzZWxlY3QuZm9ybS1jb250cm9sLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICM2NjdlZWE7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNzA1Q0JBO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpOyBcclxuIH1cclxuICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=payroll-payroll-module-es2015.js.map
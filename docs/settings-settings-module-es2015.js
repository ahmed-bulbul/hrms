(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "/UcY":
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/settings/theme-settings/theme-settings.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoidGhlbWUtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "03ai":
/*!*********************************************************!*\
  !*** ./src/app/all-modules/settings/settings.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "RffP");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "eO32");
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-settings/company-settings.component */ "96S2");
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localization/localization.component */ "AlOF");
/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "yplk");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-password/change-password.component */ "jV4M");
/* harmony import */ var _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leave-type/leave-type.component */ "ZnaM");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _systems_components_users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./systems/components/users/create-user/create-user.component */ "Y6Xc");
/* harmony import */ var _systems_components_users_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./systems/components/users/show-users/show-users.component */ "lMgg");
/* harmony import */ var _common_components_alkp_create_alkp_create_alkp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/components/alkp/create-alkp/create-alkp.component */ "Gt5b");
/* harmony import */ var _common_components_alkp_show_alkp_show_alkp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/components/alkp/show-alkp/show-alkp.component */ "PhVo");
/* harmony import */ var _common_components_all_org_mst_all_org_mst_all_org_mst_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/components/all-org-mst/all-org-mst/all-org-mst.component */ "Th6G");
/* harmony import */ var _leave_components_leave_config_leave_config_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leave/components/leave-config/leave-config.component */ "UJyA");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _common_components_bas_address_create_edit_bas_address_create_edit_bas_address_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/components/bas-address/create-edit-bas-address/create-edit-bas-address.component */ "aDTx");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _leave_components_leave_assign_leave_assign_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leave/components/leave-assign/leave-assign.component */ "o6oY");
/* harmony import */ var _systems_components_sys_res_def_sys_res_def_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./systems/components/sys-res-def/sys-res-def.component */ "Wf0y");
/* harmony import */ var _systems_components_list_sys_res_def_list_sys_res_def_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./systems/components/list-sys-res-def/list-sys-res-def.component */ "H3Op");

























let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_5__["CompanySettingsComponent"], _localization_localization_component__WEBPACK_IMPORTED_MODULE_6__["LocalizationComponent"], _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_7__["ThemeSettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"], _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_9__["LeaveTypeComponent"], _systems_components_users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_12__["CreateUserComponent"], _systems_components_users_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_13__["ShowUsersComponent"], _common_components_alkp_create_alkp_create_alkp_component__WEBPACK_IMPORTED_MODULE_14__["CreateAlkpComponent"], _common_components_alkp_show_alkp_show_alkp_component__WEBPACK_IMPORTED_MODULE_15__["ShowAlkpComponent"], _common_components_all_org_mst_all_org_mst_all_org_mst_component__WEBPACK_IMPORTED_MODULE_16__["AllOrgMstComponent"], _leave_components_leave_config_leave_config_component__WEBPACK_IMPORTED_MODULE_17__["LeaveConfigComponent"], _common_components_bas_address_create_edit_bas_address_create_edit_bas_address_component__WEBPACK_IMPORTED_MODULE_19__["CreateEditBasAddressComponent"], _leave_components_leave_assign_leave_assign_component__WEBPACK_IMPORTED_MODULE_22__["LeaveAssignComponent"], _systems_components_sys_res_def_sys_res_def_component__WEBPACK_IMPORTED_MODULE_23__["SysResDefComponent"], _systems_components_list_sys_res_def_list_sys_res_def_component__WEBPACK_IMPORTED_MODULE_24__["ListSysResDefComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectModule"],
        ]
    })
], SettingsModule);



/***/ }),

/***/ "0Mz5":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/settings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar -->\r\n<div class=\"sidebar\" id=\"sidebar\">\r\n    <div class=\"sidebar-inner slimscroll\">\r\n        <div class=\"sidebar-menu\">\r\n            <ul>\r\n                <li> \r\n                    <a routerLink=\"/dashboard\"><i class=\"la la-home\"></i> <span>Back to Home</span></a>\r\n                </li>\r\n                <li class=\"menu-title\">Settings</li>\r\n                <li [ngClass]=\"{'active' : urlComplete.subUrl === 'system-users'}\"> \r\n                    <a routerLink = \"/settings/system-users\"><i class=\"la la-users\"></i> <span>System Users</span></a>\r\n                </li>\r\n                <li [ngClass]=\"{'active' : urlComplete.subUrl === 'system-menu'}\"> \r\n                    <a routerLink = \"/settings/system-menu\"><i class=\"la la-bars\"></i> <span>System Menu</span></a>\r\n                </li>\r\n                <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'list-sys-resDef'}\"> \r\n                    <a routerLink = \"/settings/list-sys-resDef\"><i class=\"la la-cogs\"></i> <span>System Resource Def</span></a>\r\n                </li>\r\n                <li [ngClass]=\"{'active' : urlComplete.subUrl === 'alkp'}\"> \r\n                    <a routerLink = \"/settings/alkp\"><i class=\"la la-search\"></i> <span>All Lookup</span></a>\r\n                </li>\r\n                <li [ngClass]=\"{'active' : urlComplete.subUrl === 'all-org-mst'}\"> \r\n                    <a routerLink = \"/settings/all-org-mst\"><i class=\"la la-search\"></i> <span>All Org Mst</span></a>\r\n                </li>\r\n                <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'leave-assign'}\"> \r\n                    <a routerLink = \"/settings/leave-assign\"><i class=\"la la-cogs\"></i> <span>Leave Assign</span></a>\r\n                </li>\r\n                <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'leave-config'}\"> \r\n                    <a routerLink = \"/settings/leave-config\"><i class=\"la la-cogs\"></i> <span>Leave Config</span></a>\r\n                </li>\r\n                <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'change-password'}\"> \r\n                    <a routerLink = \"/settings/change-password\"><i class=\"la la-lock\"></i> <span>Change Password</span></a>\r\n                </li>\r\n                <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'dev-tools'}\"> \r\n                    <a routerLink = \"/settings/dev-tools\"><i class=\"la la-yelp\"></i> <span>Dev Tools</span></a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Sidebar -->\r\n<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n");

/***/ }),

/***/ "2shl":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/theme-settings/theme-settings.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n\r\n            <!-- Page Header -->\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h3 class=\"page-title\">Theme Settings</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Page Header -->\r\n\r\n            <form (ngSubmit)=\"submitThemeSettings()\" [formGroup]=\"themeSettings\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-lg-3 col-form-label\">Website Name</label>\r\n                    <div class=\"col-lg-9\">\r\n                        <input name=\"website_name\" class=\"form-control\" value=\"Dreamguy's Technologies\" type=\"text\" [class.invalid]=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\"\r\n                        formControlName=\"websiteName\">\r\n                        <div\r\n                        *ngIf=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\">\r\n                        <small\r\n                            *ngIf=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\"\r\n                            class=\"text-danger\"> *Website name is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-lg-3 col-form-label\">Light Logo</label>\r\n                    <div class=\"col-lg-7\">\r\n                        <input type=\"file\" class=\"form-control\" [class.invalid]=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\"\r\n                        formControlName=\"lightLogo\">\r\n                        <div\r\n                        *ngIf=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\">\r\n                        <small\r\n                            *ngIf=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\"\r\n                            class=\"text-danger\"> *Light logo is required</small>\r\n                    </div>\r\n                        <span class=\"form-text text-muted\">Recommended image size is 40px x 40px</span>\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                        <div class=\"img-thumbnail float-right\"><img src=\"assets/img/logo2.png\" alt=\"\" width=\"40\"\r\n                                height=\"40\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-lg-3 col-form-label\">Favicon</label>\r\n                    <div class=\"col-lg-7\">\r\n                        <input type=\"file\" class=\"form-control\" [class.invalid]=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\"\r\n                        formControlName=\"favicon\">\r\n                        <div\r\n                        *ngIf=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\">\r\n                        <small\r\n                            *ngIf=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\"\r\n                            class=\"text-danger\"> *Favicon is required</small>\r\n                    </div>\r\n                        <span class=\"form-text text-muted\">Recommended image size is 16px x 16px</span>\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                        <div class=\"settings-image img-thumbnail float-right\"><img src=\"assets/img/logo2.png\"\r\n                                class=\"img-fluid\" width=\"16\" height=\"16\" alt=\"\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->");

/***/ }),

/***/ "4EXP":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/leave-type/leave-type.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Leave Type</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Leave Type</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_leavetype\"><i\r\n                        class=\"fa fa-plus\"></i> Add Leave Type</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table datatable mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Leave Type</th>\r\n                            <th>Leave Days</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let leaveType of allLeaveType;let i = index\">\r\n                            <td>\r\n                                {{ 1 + i}}\r\n                            </td>\r\n                            <td>{{leaveType.leaveType}}</td>\r\n                            <td>{{leaveType.leaveDays}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \r\n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a  class=\"dropdown-item\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a  class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#edit_leavetype\" (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                            Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allLeaveType.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Leavetype Modal -->\r\n<div id=\"add_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Leave Type</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addLeave()\" [formGroup]=\"addLeaveType\">\r\n                    <div class=\"form-group\">\r\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\"\r\n                        formControlName=\"addLeaveType\">\r\n                        <div\r\n                        *ngIf=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\">\r\n                        <small\r\n                            *ngIf=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\"\r\n                            class=\"text-danger\"> *Leave type is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\"\r\n                        formControlName=\"addLeaveDays\">\r\n                        <div\r\n                        *ngIf=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\">\r\n                        <small\r\n                            *ngIf=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\"\r\n                            class=\"text-danger\"> *Leave days is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Leavetype Modal -->\r\n\r\n<!-- Edit Leavetype Modal -->\r\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Leave Type</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editLeave()\" [formGroup]=\"editLeaveType\">\r\n                    <div class=\"form-group\">\r\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\r\n                        formControlName=\"editLeave\">\r\n                        <div\r\n                        *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\">\r\n                        <small\r\n                            *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\r\n                            class=\"text-danger\"> *Leave type is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\r\n                        formControlName=\"editLeaveDays\">\r\n                        <div\r\n                        *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\">\r\n                        <small\r\n                            *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\r\n                            class=\"text-danger\"> *Leave days is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Leavetype Modal -->\r\n\r\n<!-- Delete Leavetype Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Leave Type</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteLeave()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Leavetype Modal -->");

/***/ }),

/***/ "4JZM":
/*!***************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/users/show-users/show-users.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJzaG93LXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "7kjN":
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/settings/company-settings/company-settings.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJjb21wYW55LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "8lgK":
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/sys-res-def/sys-res-def.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n/* ================= Default Template Color ================== */\r\n\r\n\r\nxx-.form-control {\r\n    border-color: #e3e3e3;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n    border-color: #ccc;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n/* ================= Green Color ============================= */\r\n\r\n\r\nxx-input.form-control {\r\n    border-color: #d4cdcd;\r\n    border-left: 3px solid green;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n\tborder-color: #37a000;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n/* ================== Blue Color ============================== */\r\n\r\n\r\nxx-input.form-control {\r\n    border-color: #66afe9;\r\n    border-left: 3px solid #66afe9;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n   border-color: #66afe9;\r\n   outline: 0;\r\n   box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n}\r\n\r\n\r\n/* .ng-select.custom {\r\n    border-color: #667eea;\r\n\t\r\n}\r\n.ng-select.custom .ng-select-container  {            \r\n    min-height: 100px;\r\n    border-radius: 0;\r\n   \r\n}\r\n.ng-select.custom ::ng-deep .ng-select-container  {            \r\n    min-height: 0px;\r\n    border-radius: 0;\r\n}\r\nng-select.ng-invalid.ng-touched .ng-select-container {\r\n    border-color: #dc3545;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px #fde6e8;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5cy1yZXMtZGVmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7OztBQUdBLGdFQUFnRTs7O0FBQ2hFO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7OztBQUlBLGdFQUFnRTs7O0FBQ2hFO0NBQ0MscUJBQXFCO0NBQ3JCLDhCQUE4QjtJQUMzQixnQkFBZ0I7QUFDcEI7OztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFVBQVU7Q0FFViwyRUFBMkU7Q0FDM0U7OztBQUlELGdFQUFnRTs7O0FBQ2hFO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7OztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFVBQVU7Q0FFViwyRUFBMkU7Q0FDM0U7OztBQUlELGlFQUFpRTs7O0FBQ2pFO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7OztBQUVBO0dBQ0cscUJBQXFCO0dBQ3JCLFVBQVU7R0FFViwyRUFBMkU7QUFDOUU7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHIiwiZmlsZSI6InN5cy1yZXMtZGVmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IERlZmF1bHQgVGVtcGxhdGUgQ29sb3IgPT09PT09PT09PT09PT09PT09ICovXHJcbnh4LS5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxueHgtLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMCBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IFB1cnBhbGUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LmZvcm0tY29udHJvbCwgc2VsZWN0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IEdyZWVuIENvbG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbnh4LWlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNGNkY2Q7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbnh4LS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzM3YTAwMDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PSBCbHVlIENvbG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG54eC1pbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjZhZmU5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbnh4LS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICBib3JkZXItY29sb3I6ICM2NmFmZTk7XHJcbiAgIG91dGxpbmU6IDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7IFxyXG59XHJcblxyXG5cclxuLyogLm5nLXNlbGVjdC5jdXN0b20ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xyXG5cdFxyXG59XHJcbi5uZy1zZWxlY3QuY3VzdG9tIC5uZy1zZWxlY3QtY29udGFpbmVyICB7ICAgICAgICAgICAgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgIFxyXG59XHJcbi5uZy1zZWxlY3QuY3VzdG9tIDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciAgeyAgICAgICAgICAgIFxyXG4gICAgbWluLWhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5uZy1zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgM3B4ICNmZGU2ZTg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "96S2":
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/settings/company-settings/company-settings.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySettingsComponent", function() { return CompanySettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company-settings.component.html */ "rB0X");
/* harmony import */ var _company_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-settings.component.css */ "7kjN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






let CompanySettingsComponent = class CompanySettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.companySettings = this.formBuilder.group({
            companyName: ["Walton Digi-Tech Industries Ltd", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            contactPerson: ["S.M. Rezaul Alam", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: ["Basundhara,Dhaka", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ["Bangladesh", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ["Dhaka", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ["Dhaka", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            postalCode: ["1212", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ["hrms@waltonbd.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ["071-654124", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobileNumber: ["8547522541", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fax: ["012-456213", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            website: ["www.waltonbd.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    submitCompany() {
        if (this.companySettings.valid) {
            this.toastr.success("Company Settings is added", "Success");
        }
    }
};
CompanySettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
CompanySettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-company-settings",
        template: _raw_loader_company_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], CompanySettingsComponent);



/***/ }),

/***/ "9C4y":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/systems/components/users/show-users/show-users.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">System Users</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">System Users</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_user\"><i class=\"fa fa-plus\"></i> Add System\n                    User</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                    class=\"table table-striped custom-table datatable mb-0\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Username</th>\n                            <th>email</th>\n                            <th>phone</th>\n                            <th>Status</th>\n                            <th class=\"text-right\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of allUsers;let i = index\">\n                            <td>\n                                {{ 1 + i}}\n                            </td>\n                            <td>{{user.username}}</td>\n                            <td>{{user.email}}</td>\n                            <td>{{user.phone}}</td>\n                            <td>\n                                <div class=\"dropdown action-label\">\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\">\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> Show\n                                    </a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a *ngIf=\"user.enabled==true\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\n                                        <a *ngIf=\"user.enabled==false\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\n                                            Inactive</a>\n                                    </div>\n                                </div>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"dropdown dropdown-action\">\n                                    <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#edit_leavetype\"\n                                            (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                                        <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#delete_leavetype\"\n                                            (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\n                                            Delete</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"allUsers.length === 0\">\n                            <td colspan=\"10\">\n                                <h5 style=\"text-align: center;\">No data found</h5>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<!-- Add Leavetype Modal -->\n<div id=\"add_user\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add User</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"addUser()\" [formGroup]=\"addUserFormGroup\">\n                    <div class=\"form-group\">\n                        <label>Username <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"addUserFormGroup.get('username').invalid && addUserFormGroup.get('username').touched\"\n                            formControlName=\"username\">\n                        <div\n                            *ngIf=\"addUserFormGroup.get('username').invalid && addUserFormGroup.get('username').touched\">\n                            <small\n                                *ngIf=\"addUserFormGroup.get('username').invalid && addUserFormGroup.get('username').touched\"\n                                class=\"text-danger\"> *Username is required</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>User Title <span class=\"text-danger\"></span></label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"userTitle\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Email <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"addUserFormGroup.get('email').invalid && addUserFormGroup.get('email').touched\"\n                            formControlName=\"email\">\n                        <div\n                            *ngIf=\"addUserFormGroup.get('email').invalid && addUserFormGroup.get('email').touched\">\n                            <small\n                                *ngIf=\"addUserFormGroup.get('email').invalid && addUserFormGroup.get('email').touched\"\n                                class=\"text-danger\"> *Email is required & valid</small>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                        <label>Password <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"password\"\n                            [class.invalid]=\"addUserFormGroup.get('password').invalid && addUserFormGroup.get('password').touched\"\n                            formControlName=\"password\">\n                        <div\n                            *ngIf=\"addUserFormGroup.get('password').invalid && addUserFormGroup.get('password').touched\">\n                            <small\n                                *ngIf=\"addUserFormGroup.get('password').invalid && addUserFormGroup.get('password').touched\"\n                                class=\"text-danger\"> *Password is required</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Repeat Password <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"password\"\n                            [class.invalid]=\"addUserFormGroup.get('confirmPassword').invalid && addUserFormGroup.get('confirmPassword').touched\"\n                            formControlName=\"confirmPassword\">\n                        <div\n                            *ngIf=\"addUserFormGroup.get('confirmPassword').invalid && addUserFormGroup.get('confirmPassword').touched\">\n                            <small\n                                *ngIf=\"addUserFormGroup.get('confirmPassword').invalid && addUserFormGroup.get('confirmPassword').touched\"\n                                class=\"text-danger\"> *Password not matched</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Is Group User ? <span class=\"text-danger\"></span></label> <br>\n                        <input (click)=\"selectIsGroupUser()\" formControlName=\"groupUser\" type=\"checkbox\" value=\"1\">\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"groupUser && isGroupUser\">\n                            <label>Group User</label>\n                            <select class=\"select form-control\" formControlName=\"groupUsername\">\n                                <option value=\"\">Select Group User</option>\n                                <option *ngFor=\"let data of groupUser\" [ngValue]='data.username'>{{data.userTitle}}\n                                </option>\n                            </select>\n                    </div>\n\n                    \n              \n                    <div class=\"submit-section\">\n                        <button type=submit class=\"btn btn-primary submit-btn\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Add Leavetype Modal -->\n\n<!-- Edit Leavetype Modal -->\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Edit Leave Type</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"editLeave()\" [formGroup]=\"editLeaveType\">\n                    <div class=\"form-group\">\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                            formControlName=\"editLeave\">\n                        <div *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\">\n                            <small\n                                *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                                class=\"text-danger\"> *Leave type is required</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                            formControlName=\"editLeaveDays\">\n                        <div\n                            *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\">\n                            <small\n                                *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                                class=\"text-danger\"> *Leave days is required</small>\n                        </div>\n                    </div>\n                    <div class=\"submit-section\">\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Edit Leavetype Modal -->\n\n<!-- Delete Leavetype Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Leave Type</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a class=\"btn btn-primary continue-btn\" (click)=\"deleteLeave()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a data-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Leavetype Modal -->");

/***/ }),

/***/ "9Das":
/*!**********************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/all-org-mst/all-org-mst/all-org-mst.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1vcmctbXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoiYWxsLW9yZy1tc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "9lGh":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/localization/localization.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n\r\n            <!-- Page Header -->\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h3 class=\"page-title\">Basic Settings</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Page Header -->\r\n\r\n            <form (ngSubmit)=\"submitLocalisation()\" [formGroup]=\"localisation\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Default Country</label>\r\n                            <select class=\"form-control select\" [class.invalid]=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\"\r\n                            formControlName=\"defaultCountry\">\r\n                                <option value = \"USA\">USA</option>\r\n                                <option value = \"United Kingdom\">United Kingdom</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\">\r\n                            <small\r\n                                *ngIf=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\"\r\n                                class=\"text-danger\"> *Default country is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date Format</label>\r\n                            <select class=\"form-control select\" [class.invalid]=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\"\r\n                            formControlName=\"dateFormat\" [value] = \"15/05/2016\">\r\n                                <option value=\"15/05/2016\">15/05/2016</option>\r\n                                <option value=\"15.05.2016\">15.05.2016</option>\r\n                                <option value=\"15-05-2016\">15-05-2016</option>\r\n                                <option value=\"05/15/2016\">05/15/2016</option>\r\n                                <option value=\"05/15/2016\">05/15/2016</option>\r\n                                <option value=\"2016-05-15\">2016-05-15</option>\r\n                                <option value=\"May 15 2016\">May 15 2016</option>\r\n                                <option selected=\"selected\" value=\"d M Y\">15 May 2016</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\">\r\n                            <small\r\n                                *ngIf=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\"\r\n                                class=\"text-danger\"> *Date format is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Timezone</label>\r\n                            <select class=\"form-control select\" [class.invalid]=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\"\r\n                            formControlName=\"timeZone\">\r\n                                <option value = \"(UTC +5:30) Antarctica/Palmer\">(UTC +5:30) Antarctica/Palmer</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\">\r\n                            <small\r\n                                *ngIf=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\"\r\n                                class=\"text-danger\"> *Time zone is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Default Language</label>\r\n                            <select class=\"form-control select\" [class.invalid]=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\"\r\n                            formControlName=\"deafultLanguage\">\r\n                                <option value = \"English\" >English</option>\r\n                                <option value = \"French\">French</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\">\r\n                            <small\r\n                                *ngIf=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\"\r\n                                class=\"text-danger\"> *Default Language is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Currency Code</label>\r\n                            <select class=\"form-control select\" [class.invalid]=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\"\r\n                            formControlName=\"currencyCode\">\r\n                                <option value = \"USD\">USD</option>\r\n                                <option value = \"Pound\">Pound</option>\r\n                                <option value = \"EURO\">EURO</option>\r\n                                <option value = \"Ringgit\">Ringgit</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\">\r\n                            <small\r\n                                *ngIf=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\"\r\n                                class=\"text-danger\"> *Currency Code is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Currency Symbol</label>\r\n                            <input class=\"form-control\" readonly value=\"$\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"submit-section\">\r\n                            <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->");

/***/ }),

/***/ "AHJ0":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/common/components/bas-address/create-edit-bas-address/create-edit-bas-address.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Address</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">address</li>\n                </ul>\n            </div>\n            \n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"!isAddMode\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                        <a (click)=\"isAddMode = true\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> Add\n                            &nbsp;&nbsp;&nbsp; </a> <br> <br>\n                            <p><span>Adding Address to <b>{{listData? listData[0].allOrgMst.title : null}}</b> </span></p>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Title</th>\n                                    <th>Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let thisObj of listData\">\n                                    <td>{{thisObj.id }}</td>\n                                    <td>{{thisObj.name}}</td>\n                                    <td>{{thisObj.title}}</td>\n                                    <td>{{thisObj.active==true? \"Active\" : \"Inactive\"}}</td>\n\n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"isAddMode\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h3 class=\"card-title d-inline\">Add Org Address</h3>\n                    <button type=\"button\" (click)=\"isAddMode = false\" class=\"close\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"card-body\">\n                \n                   \n                    <form (ngSubmit)=\"formSubmit()\" [formGroup]=\"form\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>Title<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"title\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>name<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"name\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>address<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"address\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>postalCode<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"postalCode\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>addressPhoneNumber<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"addressPhoneNumber\"\n                                        class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>emailAddress<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"emailAddress\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>Is Active</label>\n                                    <select class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.isActive.errors }\"\n                                        formControlName=\"isActive\">\n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"true\">Yes</option>\n                                        <option value=\"false\">No</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && f.isActive.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.isActive.errors.required\">Is active is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label>ID<span class=\"text-danger\"></span></label>\n                                    <input class=\"form-control\" formControlName=\"id\" class=\"form-control\" type=\"text\"\n                                        readonly>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"submit-section\">\n                            <button class=\"btn btn-primary submit-btn\" type=\"submit\">\n                                Save\n                            </button>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<!-- /Page Content -->\n<!-- /Page Content -->\n<ngx-spinner bdColor=\"rgba(255,255,255,0.5)\" size=\"medium\" color=\"#667eea\" type=\"ball-clip-rotate\" [fullScreen]=\"true\">\n    <p style=\"color: black\"> Processing... </p>\n</ngx-spinner>");

/***/ }),

/***/ "AlOF":
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/settings/localization/localization.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationComponent", function() { return LocalizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_localization_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./localization.component.html */ "9lGh");
/* harmony import */ var _localization_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localization.component.css */ "Nhu3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






let LocalizationComponent = class LocalizationComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.localisation = this.formBuilder.group({
            defaultCountry: ["USA", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dateFormat: ["15/05/2016", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            timeZone: ["(UTC +5:30) Antarctica/Palmer", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            deafultLanguage: ["English", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            currencyCode: ["USD", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    submitLocalisation() {
        if (this.localisation.valid) {
            this.toastr.success("Localisation is added", "Success");
        }
    }
};
LocalizationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LocalizationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-localization",
        template: _raw_loader_localization_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_localization_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], LocalizationComponent);



/***/ }),

/***/ "AuF9":
/*!********************************************************************!*\
  !*** ./src/app/all-modules/employees/services/employee.service.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    // Get Employee  Api Call
    getEmployees() {
        return this.http.get(`${this.baseUrl}/hrCrEmp/empList`);
    }
    // get empList list view 
    getEmpListView(apiURL, queryParams) {
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    // Get Employee via paginations
    sendGetRequest(apiURL, queryParams) {
        console.log("@sendGetRequest");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    // create HrCrEmp  Api Call
    createEmploy(emp) {
        return this.http.post(`${this.baseUrl}/hrCrEmp/create`, emp);
    }
    //update HrCrEmp Api Call
    updateEmploy(data) {
        // return this.http.put(`${baseUrl}/hrCrEmp/update`, data);
        return this.http.put(`${this.baseUrl}/hrCrEmp/edit`, data);
    }
    // Get employee By id 
    getEmployeeById(id) {
        return this.http.get(`${this.baseUrl}/hrCrEmp/get/${id}`);
        //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
    }
    // Get employee By id 
    findEmployeeById(id) {
        return this.http.get(`${this.baseUrl}/hrCrEmp/find/${id}`);
        //return this.http.get(`${baseUrl}/hrCrEmp/get/${id}`);
    }
    //get employee by loginCode
    getEmployeeByLoginCode(loginCode) {
        return this.http.get(`${this.baseUrl}/hrCrEmp/findByLoginCode/${loginCode}`);
    }
    //upload profile image file
    uploadProfileImage(id, formData) {
        return this.http.post(`${this.baseUrl}/multimedia/profile/${id}`, formData);
    }
    // Get ALKP Search By Keyword Api Call
    getAlkpSearchByKeyword(keyword) {
        return this.http.get(`${this.baseUrl}/alkp/search/${keyword}`);
    }
    //save employee assignemnt data 
    saveEmployeeAssignemntData(data) {
        return this.http.post(`${this.baseUrl}/hrCrEmpAssgnmnt/create`, data);
    }
    //save employee assignemnt data 
    //  public saveEmployeeAssignemntData2(data){
    //   return this.http.post(`${baseUrl}/hrCrEmpAssgnmnt/save`,data);
    // }
    //update employeeAssignment 
    updateEmployeeAssignment(data) {
        return this.http.put(`${this.baseUrl}/hrCrEmpAssgnmnt/edit`, data);
    }
    // get last assignment by HrCrEmpId
    getLastAssignmentByHrCrEmpId(id) {
        return this.http.get(`${this.baseUrl}/hrCrEmpAssgnmnt/getByHrCrEmp/${id}`);
    }
    // get employee assignment By Id 
    getEmployeeAssignmentByHrCrEmpId(id) {
        return this.http.get(`${this.baseUrl}/hrCrEmpAssgnmnt/getByHrCrEmpId/${id}`);
    }
    //save or update emp bank and payroll tabs data 
    saveOrUpdateBankAndPayroll(data) {
        return this.http.post(`${this.baseUrl}/hrCrEmpAssgnmnt/saveBankAndPayroll`, data);
    }
    // get designation
    getDesignations() {
        return this.http.get(`${this.baseUrl}/designation/getAll`);
    }
    // Get All ALKP Api Call 
    getALLDivisions(id) {
        return this.http.get(`${this.baseUrl}/address/division/${id}`);
    }
    fetchAllDivision() {
        return this.http.get(`${this.baseUrl}/address/division/getAll`);
    }
    getDistrictByDivId(id) {
        return this.http.get(`${this.baseUrl}/address/division/${id}`);
    }
    getAllDistrict(apiURL, queryParams) {
        console.log("@getAllDistrict");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    getAllUpazila(apiURL, queryParams) {
        console.log("@getAllUpazila");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    getAllUnions(apiURL, queryParams) {
        console.log("@sendGetRequest");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    // save hrCrEmpEdu informations
    saveHrCrEmpEdu(data) {
        return this.http.post(`${this.baseUrl}/hrCrEmpEdu/create`, data);
    }
    //find by empId
    findhrCrEmpEduByEmpId(empId) {
        return this.http.get(`${this.baseUrl}/hrCrEmpEdu/find/${empId}`);
    }
    //find byId
    findhrCrEmpEduById(id) {
        return this.http.get(`${this.baseUrl}/hrCrEmpEdu/get/${id}`);
    }
    //edit employee education 
    edithrCrEmpEducation(data) {
        return this.http.put(`${this.baseUrl}/hrCrEmpEdu/edit`, data);
    }
    //delete emp education
    deleteHrCrEmpEducation(id) {
        return this.http.delete(`${this.baseUrl}/hrCrEmpEdu/delete/${id}`);
    }
    //Get Raw Attendance data from Device
    getAllRawAttendanceData() {
        return this.http.get(`${this.baseUrl}/attn/findAllBySrcType`);
    }
    getAllRawAttendanceData2(apiURL, queryParams) {
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    //Post viaHrAttn
    createAttnViaHr(data) {
        return this.http.post(`${this.baseUrl}/AttnViaHr/save`, data);
    }
    //Get viaHrAttn Attendance data from
    getAllViaHrAttnData() {
        return this.http.get(`${this.baseUrl}/AttnViaHr/findAllBySrcType`);
    }
    getAllViaHrAttnData2(apiURL, queryParams) {
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    getSearchAttn(apiURL, queryParams) {
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    }
    //Leave related api
    //crearte leave tenc
    createLeave(data) {
        return this.http.post(`${this.baseUrl}/leaveTrnse/save`, data);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], EmployeeService);



/***/ }),

/***/ "AwIS":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/leave/components/leave-config/leave-config.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Leave Config</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">Leave Config</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_leaveconfig\"><i\n                        class=\"fa fa-plus\"></i> Add Leave Config</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n\n                <div class=\"d-flex justify-content-start pb-1\">\n                    <div class=\"pgn-displayDataInfo\">\n                        <span class=\"page-item disabled\">Displaying ( {{ ( ((pageNum-1) * pageSize) + (1) ) }}  to {{pngDiplayLastSeq}} of {{totalItem}} ) entries</span>\n                    </div>\n                </div>\n                \n                <table id=\"genListTable\" class=\"table table-striped custom-table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Leave Type</th>\n                            <th>Leave Days</th>\n                            <th>Status</th>\n                            <th>Emp Cat</th>\n                            <th>Gender</th>\n                            <th>Marital Sts</th>\n                            <th>Carry Max Days</th>\n                            <th>Carry Enable</th> \n                            <th>Leave Prd</th>\n                            <th class=\"text-right\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody >\n                        \n                        <tr *ngFor=\"let option of hrCrLeaveConfList | paginate : {\n                                itemsPerPage: pageSize,\n                                currentPage: pageNum,\n                                totalItems: totalItem\n                            };let i = index\" [class.active]=\"i == currentIndex\">    \n                            <td>\n                                {{ 1 + i}}\n                            </td>\n                            <td>{{option.alkpLeaveType.title}}</td>\n                            <td>{{option.leaveDays}}</td>\n                            <td>\n                                <div class=\"dropdown action-label\">\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i>     {{option.isActive }}\n                                    </a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a  class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-success\"></i> true</a>\n                                        <a  class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\n                                            false</a>\n                                    </div>\n                                </div>\n                             \n                            </td>\n                            <td>{{option.alkpEmpCat.title}}</td>\n                            <td>{{option.alkpGender.title}}</td>\n                            <td>{{option.alkpMaritalSts.title}}</td>\n                            <td>{{option.carryMaxDays}}</td>\n                            <td>\n                            <div class=\"dropdown action-label\">\n                                <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \n                                    data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                    <i class=\"fa fa-dot-circle-o text-success\"></i>  {{option.isCarryEnable }} \n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                    <a  class=\"dropdown-item\"><i\n                                            class=\"fa fa-dot-circle-o text-success\"></i> true</a>\n                                    <a  class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\n                                        false</a>\n                                </div>\n                            </div>\n                            </td>\n                            <td>{{option.hrLeavePrd.title}}</td>\n                            <td class=\"text-right\">\n                                <div class=\"dropdown dropdown-action\">\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#edit_leavetype\" (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\n                                            Delete</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"hrCrLeaveConfList.length === 0\">\n                            <td colspan=\"10\">\n                                <h5 style=\"text-align: center;\">No data found</h5>\n                            </td>\n                           \n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"d-flex justify-content-end \">\n\n                    <div >\n                        Items per Page\n                        <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" >\n                            <option *ngFor=\"let size of pageSizes\" [value]=\"size\">\n                                {{ size }}\n                            </option>\n                        </select>\n                    </div>\n\n                    <div class=\"pgn-pageSliceCt\">\n                        <pagination-controls \n                            responsive=\"true\" \n                            previousLabel=\"Prev\" \n                            nextLabel=\"Next\" \n                            (pageChange)=\"handlePageChange($event)\">\n                        </pagination-controls>\n                    </div>\n                    \n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<!-- Add Leavetype Modal -->\n<div id=\"add_leaveconfig\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add Leave Config</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"addLeaveConf()\" [formGroup]=\"addLeaveConfig\">\n                    \n                    <div class=\"row filter-row mb-12\"> \n                                        \n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Leave Type<span class=\"text-danger\">*</span></label>\n                                <!-- <input class=\"form-control\" formControlName=\"shift\" class=\"form-control\" type=\"text\"> -->\n                                <select class=\"form-control\" formControlName=\"alkpLeaveType\" class=\"form-control\" type=\"number\">\n                                    <option *ngFor=\"let option of alkpLeave.subALKP\" [value]=\"option.id\" >{{option.title}}</option>\n                                </select>\n                              \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Leave Days<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" formControlName=\"leaveDays\" class=\"form-control\" type=\"number\">\n                               \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Max Carry Days<span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" formControlName=\"carryMaxDays\" class=\"form-control\" type=\"number\">\n                               \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Carry Enable<span class=\"text-danger\">*</span></label>\n                                <br>\n                                <input  formControlName=\"isCarryEnable\"  type=\"checkbox\" value=\"1\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Emp Cat Type<span class=\"text-danger\">*</span></label>\n                                <!-- <input class=\"form-control\" formControlName=\"shift\" class=\"form-control\" type=\"text\"> -->\n                                <select class=\"form-control\" formControlName=\"alkpEmpCat\" class=\"form-control\" type=\"number\">\n                                    <option *ngFor=\"let option of alkpEmpCat.subALKP\" [value]=\"option.id\" >{{option.title}}</option>\n                                </select>\n                              \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Emp Gender<span class=\"text-danger\">*</span></label>\n                                <!-- <input class=\"form-control\" formControlName=\"shift\" class=\"form-control\" type=\"text\"> -->\n                                <select class=\"form-control\" formControlName=\"alkpGender\" class=\"form-control\" type=\"number\">\n                                    <option *ngFor=\"let option of alkpGender.subALKP\" [value]=\"option.id\" >{{option.title}}</option>\n                                </select>\n                              \n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Emp Marital Ststus<span class=\"text-danger\">*</span></label>\n                                <!-- <input class=\"form-control\" formControlName=\"shift\" class=\"form-control\" type=\"text\"> -->\n                                <select class=\"form-control\" formControlName=\"alkpMaritalSts\" class=\"form-control\" type=\"number\">\n                                    <option *ngFor=\"let option of alkpMaritalSts.subALKP\" [value]=\"option.id\" >{{option.title}}</option>\n                                </select>\n                              \n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Leave Prd<span class=\"text-danger\">*</span></label>\n                                <!-- <input class=\"form-control\" formControlName=\"shift\" class=\"form-control\" type=\"text\"> -->\n                                <select class=\"form-control\" formControlName=\"hrLeavePrd\" class=\"form-control\" type=\"number\">\n                                    <option *ngFor=\"let option of leavePrd\" [value]=\"option.id\" >{{option.title}}</option>\n                                </select>\n                              \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-12\">  \n                            <div class=\"form-group\">\n                                <label>Is Active<span class=\"text-danger\">*</span></label>\n                                <br>\n                                <input  formControlName=\"isActive\"  type=\"checkbox\" value=\"1\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-12 col-md-12\">  \n                            <button  class=\"btn btn-primary submit-btn\" type=\"submit\">\n                                Submit\n                                <!-- [disabled]=\"!addEmployeeForm.valid\" -->\n                            </button>\n                        </div>  \t\t\n                     </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Add Leavetype Modal -->\n\n<!-- Edit Leavetype Modal -->\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\n \n</div>\n<!-- /Edit Leavetype Modal -->\n\n<!-- Delete Leavetype Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Leave Type</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" >Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Leavetype Modal -->");

/***/ }),

/***/ "Gt5b":
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/alkp/create-alkp/create-alkp.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateAlkpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAlkpComponent", function() { return CreateAlkpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_alkp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-alkp.component.html */ "kmnk");
/* harmony import */ var _create_alkp_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-alkp.component.css */ "W2Bi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CreateAlkpComponent = class CreateAlkpComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateAlkpComponent.ctorParameters = () => [];
CreateAlkpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-alkp',
        template: _raw_loader_create_alkp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_alkp_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CreateAlkpComponent);



/***/ }),

/***/ "H3Op":
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/list-sys-res-def/list-sys-res-def.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ListSysResDefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSysResDefComponent", function() { return ListSysResDefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_sys_res_def_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-sys-res-def.component.html */ "kJEJ");
/* harmony import */ var _list_sys_res_def_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sys-res-def.component.css */ "ylti");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/system.service */ "Oryf");











let ListSysResDefComponent = class ListSysResDefComponent {
    constructor(spinnerService, systemService, toastr, formBuilder, route, router) {
        this.spinnerService = spinnerService;
        this.systemService = systemService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
        this.listData = [];
        this.listAuthData = [];
        this.listUserData = [];
        this.listRolesData = [];
        //using for form submit
        this.loading = false;
        this.submitted = false;
        this.pngConfig = {
            pageNum: 1,
            pageSize: 10,
            pageSizes: [3, 5, 10, 25, 50, 100, 200, 500, 1000],
            totalItem: 50,
            pngDiplayLastSeq: 10,
            entityName: "",
        };
        this.initConfigDDL();
        this.customInitLoadData();
    }
    ngOnInit() {
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
        this.myGroup.get("pageSize").setValue(this.pngConfig.pageSize);
        // get List Data
        this.getListData();
        this.initializeForm();
        $('body').addClass('mini-sidebar');
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [""],
            systemResource: [""],
            systemResourceName: [""],
            createAuth: [""],
            readAuth: [""],
            updateAuth: [""],
            deleteAuth: [""],
            queryAuth: [""],
            submitAuth: [""],
            crudqsString: ["",],
            othersString: [""],
            fullPrivilegeString: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            visibleToAll: [""],
            username: {},
            role: [""],
        });
    }
    get f() {
        return this.form.controls;
    }
    formSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        let editId = this.form.get("id").value ? this.form.get("id").value : null;
        if (editId == null) {
            this.createSysResAuth();
        }
        else {
            this.updateSysResAuth();
        }
    }
    createSysResAuth() {
        let sysResourceAuth = Object.assign(this.form.value, {
            systemResource: this.resAuthId ? { id: this.resAuthId } : null,
            role: this.getRole.value ? { id: this.getRole.value } : null,
        });
        this.systemService.createSysResAuth(sysResourceAuth).subscribe((data) => {
            this.loading = false;
            this.getAuthData(this.resAuthId);
            this.toastr.success("Successfully created");
        }, (error) => {
            this.toastr.info(error.error.message);
        });
    }
    updateSysResAuth() {
        let sysResourceAuth = Object.assign(this.form.value, {
            systemResource: this.resAuthId ? { id: this.resAuthId } : null,
            role: this.getRole.value ? { id: this.getRole.value } : null,
        });
        this.systemService.updateSysResAuth(sysResourceAuth).subscribe((data) => {
            this.editId = null;
            this.loading = false;
            this.resetTheForm();
            this.getAuthData(this.resAuthId);
            this.toastr.success("Successfully updated");
        }, (error) => {
            this.toastr.info(error.error.message);
        });
    }
    editSysResAuthClickEvent(id) {
        this.systemService
            .getSysResAuthByIds(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe((data) => {
            this.listUserData = data.refFields.username;
            this.form.patchValue(data);
        });
    }
    getListData() {
        let queryParams = {};
        queryParams.pageNum = this.pngConfig.pageNum - 0;
        queryParams.pageSize = this.pngConfig.pageSize;
        this.spinnerService.show();
        this.systemService.getSysResDef(queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.pngConfig.totalItem = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
    actionTableLine(event, thisResObj) {
        var targetEl = event.target;
        $('#genListTable tr').removeClass('selected');
        $(targetEl).closest('tr').addClass('selected');
        $('#authResourcesTxt').text(thisResObj.entityName + ", Backend URL: " + thisResObj.backendUrl);
        if ($('#authResourcesTxt').length == 0) {
            setTimeout(() => {
                $('#authResourcesTxt').text(thisResObj.entityName + ", Backend URL: " + thisResObj.backendUrl);
            }, 500);
        }
        $('.formTitleCt').css({
            'font-size': 'medium',
            'display': 'inline-block',
        });
    }
    //provide permission function
    getAuthData(id) {
        this.resAuthId = id;
        this.tempClose = 1;
        this.systemService.getSysResAuthById(id).subscribe((data) => {
            this.getRoles();
            this.listAuthData = data;
        }, (error) => {
            this.toastr.error("error in fetching SysResAuth data");
        });
    }
    getRoles() {
        this.systemService.getRoles().subscribe((data) => {
            this.listRolesData = data;
        });
    }
    setDisplayLastSequence() {
        this.pngConfig.pngDiplayLastSeq =
            (this.pngConfig.pageNum - 1) * this.pngConfig.pageSize +
                this.pngConfig.pageSize;
        if (this.listData.length < this.pngConfig.pageSize) {
            this.pngConfig.pngDiplayLastSeq =
                (this.pngConfig.pageNum - 1) * this.pngConfig.pageSize +
                    this.pngConfig.pageSize;
        }
        if (this.pngConfig.totalItem < this.pngConfig.pngDiplayLastSeq) {
            this.pngConfig.pngDiplayLastSeq = this.pngConfig.totalItem;
        }
    }
    handlePageChange(event) {
        this.pngConfig.pageNum = event;
        this.getListData();
    }
    handlePageSizeChange(event) {
        this.pngConfig.pageSize = event.target.value;
        this.pngConfig.pageNum = 1;
        this.getListData();
    }
    close() {
        this.tempClose = null;
        this.listAuthData = null;
    }
    //search
    searchEntity(entityName) {
        let queryParams = {};
        queryParams.entityName = entityName;
        this.spinnerService.show();
        this.systemService.getSysResDef(queryParams).subscribe((response) => {
            this.listData = response.objectList;
            this.pngConfig.totalItem = response.totalItems;
            this.setDisplayLastSequence();
            this.spinnerService.hide();
        }, (error) => {
            console.log(error);
        });
    }
    deleteSysResDef() {
        this.systemService.deleteSysResDef(this.tempId).subscribe(() => {
            $("#delete_sysResDef").modal("hide");
            this.toastr.success("Successfully deleted");
            this.listData = this.listData.filter((d) => d.id != this.tempId);
        }, (error) => {
            this.toastr.error("error in deleting data");
        });
    }
    deleteSysResAuth() {
        this.systemService.deleteSysResAuth(this.authTempId).subscribe(() => {
            $("#delete_sysResAuth").modal("hide");
            this.toastr.success("Successfully deleted");
            this.listData = this.listData.filter((d) => d.id != this.tempId);
        }, (error) => {
            this.toastr.error("error in deleting data");
        });
    }
    //catching form data change
    get getRole() {
        return this.form.get("role");
    }
    resetTheForm() {
        this.form.reset();
    }
    // --------------------------- DDL (Dinamic Dropdown List) Methods Start -----------------------------------
    searchDDL(event) {
        let q = event.term;
        this.configDDL.q = q;
        this.configDDL.pageNum = 1;
        this.configDDL.append = false;
        this.getListDataDDL();
    }
    scrollToEndDDL() {
        this.configDDL.pageNum++;
        this.configDDL.append = true;
        this.getListDataDDL();
    }
    clearDDL() {
        this.configDDL.q = "";
    }
    getListDataDDL() {
        let apiURL = this.baseUrl + this.configDDL.dataGetApiPath;
        let queryParams = {};
        queryParams.pageNum = this.configDDL.pageNum;
        queryParams.pageSize = this.configDDL.pageSize;
        if (this.configDDL.q && this.configDDL.q != null) {
            queryParams[this.configDDL.apiQueryFieldName] = this.configDDL.q;
        }
        this.systemService.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            if (this.configDDL.append) {
                this.configDDL.listData = this.configDDL.listData.concat(response.objectList);
            }
            else {
                this.configDDL.listData = response.objectList;
            }
            this.configDDL.totalItem = response.totalItems;
        }, (error) => {
            console.log(error);
        });
    }
    setDefaultParamsDDL() {
        this.initConfigDDL();
    }
    customInitLoadData() {
        this.configDDL.activeFieldName = "ddlUsername";
        this.configDDL.dataGetApiPath = "/api/common/getUser";
        this.configDDL.apiQueryFieldName = "username";
        this.getListDataDDL();
    }
    initConfigDDL() {
        this.configDDL = {
            pageNum: 1,
            pageSize: 10,
            totalItem: 50,
            listData: [],
            append: false,
            q: "",
            activeFieldName: "xxxFieldName",
            dataGetApiPath: '',
            apiQueryFieldName: 'xxxFieldName'
        };
    }
    initSysParamsDDL(event, activeFieldNameDDL, dataGetApiPathDDL, apiQueryFieldNameDDL) {
        console.log("...");
        console.log("ddlActiveFieldName:" + activeFieldNameDDL);
        console.log("dataGetApiPathDDL:" + dataGetApiPathDDL);
        console.log(event.target);
        if (this.configDDL.activeFieldName && this.configDDL.activeFieldName != activeFieldNameDDL) {
            this.setDefaultParamsDDL();
        }
        this.configDDL.activeFieldName = activeFieldNameDDL;
        this.configDDL.dataGetApiPath = dataGetApiPathDDL;
        this.configDDL.apiQueryFieldName = apiQueryFieldNameDDL;
        this.getListDataDDL();
    }
    // --------------------------- DDL (Dinamic Dropdown List) Methods End -------------------------------------
    ngOnDestroy() {
        $('body').removeClass('mini-sidebar');
    }
};
ListSysResDefComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _services_system_service__WEBPACK_IMPORTED_MODULE_10__["SystemService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ListSysResDefComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-list-sys-res-def",
        template: _raw_loader_list_sys_res_def_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_sys_res_def_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        _services_system_service__WEBPACK_IMPORTED_MODULE_10__["SystemService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ListSysResDefComponent);



/***/ }),

/***/ "L9nJ":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/common/components/alkp/show-alkp/show-alkp.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">All Lookup</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">All Lookup</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_leavetype\"><i class=\"fa fa-plus\"></i> Add\n                    Alkp</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                    class=\"table table-striped custom-table datatable mb-0\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Keyword</th>\n                            <th>Title</th>\n                            <th>Status</th>\n                            <th class=\"text-right\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let alkp of alkp;let i = index\">\n                            <td>\n                                {{ 1 + i}}\n                            </td>\n                            <td>{{alkp.keyword}}</td>\n                            <td>{{alkp.title}}</td>\n                            <td>\n                                <div class=\"dropdown action-label\">\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\">\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> Show\n                                    </a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a *ngIf=\"alkp.isActive==true\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\n                                        <a *ngIf=\"alkp.isActive==false\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\n                                            Inactive</a>\n                                    </div>\n                                </div>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"dropdown dropdown-action\">\n                                    <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#edit_leavetype\"\n                                            (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                                        <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#delete_leavetype\"\n                                            (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\n                                            Delete</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"allLeaveType.length === 0\">\n                            <td colspan=\"10\">\n                                <h5 style=\"text-align: center;\">No data found</h5>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<!-- Add Leavetype Modal -->\n<div id=\"add_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add Alkp</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"saveAlkp()\" [formGroup]=\"addAlkp\">\n                    <div class=\"form-group\">\n                        <label>Title <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"addAlkp.get('title').invalid && addAlkp.get('title').touched\"\n                            formControlName=\"title\">\n                        <div *ngIf=\"addAlkp.get('title').invalid && addAlkp.get('title').touched\">\n                            <small *ngIf=\"addAlkp.get('title').invalid && addAlkp.get('title')\" class=\"text-danger\">\n                                *title is required</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Sl. No. <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"addAlkp.get('slNo').invalid && addAlkp.get('slNo').touched\"\n                            formControlName=\"slNo\">\n                        <div *ngIf=\"addAlkp.get('slNo').invalid && addAlkp.get('slNo').touched\">\n                            <small *ngIf=\"addAlkp.get('slNo').invalid && addAlkp.get('slNo')\" class=\"text-danger\">\n                                *slNo is required</small>\n                        </div>\n                    </div>\n                        \n                    <div class=\"form-group\">\n                        <label>Code<span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"addAlkp.get('code').invalid && addAlkp.get('code').touched\"\n                            formControlName=\"code\">\n                        <div *ngIf=\"addAlkp.get('code').invalid && addAlkp.get('code').touched\">\n                            <small *ngIf=\"addAlkp.get('code').invalid && addAlkp.get('code')\" class=\"text-danger\">\n                                *code is required</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"parentAlkp\">\n                        <label>Parent <span class=\"text-danger\">*required if child</span></label>\n                        <select  class=\"select form-control\" formControlName=\"parentId\">\n                            <option value=\"\">Select parent</option>\n                            <option *ngFor=\"let alkp of parentAlkp\" [ngValue]='alkp.id'>{{alkp.title}}</option>\n                          \n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Keyword <span class=\"text-danger\">*required if parent</span></label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"keyword\">\n                    </div>\n                    <div class=\"submit-section\">\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Add Leavetype Modal -->\n\n<!-- Edit Leavetype Modal -->\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Edit Leave Type</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"editLeave()\" [formGroup]=\"editLeaveType\">\n                    <div class=\"form-group\">\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                            formControlName=\"editLeave\">\n                        <div *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\">\n                            <small\n                                *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                                class=\"text-danger\"> *Leave type is required</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\"\n                            [class.invalid]=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                            formControlName=\"editLeaveDays\">\n                        <div\n                            *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\">\n                            <small\n                                *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                                class=\"text-danger\"> *Leave days is required</small>\n                        </div>\n                    </div>\n                    <div class=\"submit-section\">\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Edit Leavetype Modal -->\n\n<!-- Delete Leavetype Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Leave Type</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a class=\"btn btn-primary continue-btn\" (click)=\"deleteLeave()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a data-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Leavetype Modal -->");

/***/ }),

/***/ "Nhu3":
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/settings/localization/localization.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImxvY2FsaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Oryf":
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/services/system.service.ts ***!
  \*************************************************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let SystemService = class SystemService {
    constructor(http) {
        this.http = http;
        this.sysRes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    // get All System User 
    getAllUsers() {
        return this.http.get(`${this.baseUrl}/user/getAll`);
    }
    // // get All paginated System getusers
    // public getAllPaginatedUsers(queryParams){
    //   return this.http.get(`${this.baseUrl}/user/get`,{params: queryParams}).pipe( retry(3));
    // }
    // get All paginated System getusers
    getAllPaginatedUsers(queryParams) {
        return this.http.get(`${this.baseUrl}/api/common/getUser`, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
    }
    // Get All System User whose has no employee created
    getNotEmpUsers() {
        return this.http.get(`${this.baseUrl}/user/notEmp`);
    }
    // get group user api 
    getGroupUser() {
        return this.http.get(`${this.baseUrl}/user/getGroupUser`);
    }
    // create sysResDef
    createSysResDef(reqBody) {
        return this.http.post(`${this.baseUrl}/sysDef/create`, reqBody);
    }
    //update sysResDef
    updateSysResDef(id, reqBody) {
        return this.http.put(`${this.baseUrl}/sysDef/update/${id}`, reqBody);
    }
    // get SysResDef 
    getSysResDef(queryParams) {
        return this.http.get(`${this.baseUrl}/sysDef/get`, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
    }
    //delete SysResDef
    deleteSysResDef(id) {
        return this.http.delete(`${this.baseUrl}/sysDef/delete/${id}`);
    }
    //create SysResAuth 
    createSysResAuth(reqBody) {
        return this.http.post(`${this.baseUrl}/sysAuth/create`, reqBody);
    }
    // get SysResAuth
    getSysResAuth(queryParams) {
        return this.http.get(`${this.baseUrl}/sysAuth/get`, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
    }
    getSysResAuthByIds(id) {
        return this.http.get(`${this.baseUrl}/sysAuth/find/${id}`);
    }
    //get SysAuth By id
    getSysResAuthById(id) {
        return this.http.get(`${this.baseUrl}/sysAuth/get/${id}`);
    }
    //update sysResDef
    updateSysResAuth(reqBody) {
        return this.http.put(`${this.baseUrl}/sysAuth/update`, reqBody);
    }
    //delete SysResDef
    deleteSysResAuth(id) {
        return this.http.delete(`${this.baseUrl}/sysAuth/delete/${id}`);
    }
    //get roles
    getRoles() {
        return this.http.get(`${this.baseUrl}/roles`);
    }
    sendGetRequest(apiURL, queryParams) {
        console.log("@sendGetRequest");
        return this.http.get(apiURL, { params: queryParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
    }
    sendPostRequest(apiURL, formData) {
        console.log("@sendPostRequest");
        return this.http.post(apiURL, formData);
    }
};
SystemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SystemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SystemService);



/***/ }),

/***/ "PhVo":
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/alkp/show-alkp/show-alkp.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShowAlkpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAlkpComponent", function() { return ShowAlkpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_alkp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-alkp.component.html */ "L9nJ");
/* harmony import */ var _show_alkp_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-alkp.component.css */ "aXYT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ "IhMt");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common.service */ "xrk7");










let ShowAlkpComponent = class ShowAlkpComponent {
    constructor(allModuleService, formBuilder, toastr, commonService) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.url = "leaveType";
        this.allLeaveType = [];
    }
    ngOnInit() {
        this.getAlkp();
        this.getParentAlkp();
        this.getLeaveType();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        // Add Provident Form Validation And Getting Values
        this.addLeaveType = this.formBuilder.group({
            addLeaveType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        // Add Provident Form Validation And Getting Values
        this.addAlkp = this.formBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            keyword: [],
            slNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            parentId: []
        });
        // Edit Provident Form Validation And Getting Values
        this.editLeaveType = this.formBuilder.group({
            editLeave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            editLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    getLeaveType() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allLeaveType = data;
            this.dtTrigger.next();
        });
    }
    //get alkp
    getAlkp() {
        this.commonService.getAlkp().subscribe((data) => {
            this.alkp = data;
        });
    }
    // Get parent Alkp
    getParentAlkp() {
        this.commonService.getParentAlkp().subscribe((data) => {
            this.parentAlkp = data;
        });
    }
    // Add Provident Modal Api Call
    addLeave() {
        if (this.addLeaveType.valid) {
            let obj = {
                leaveType: this.addLeaveType.value.addLeaveType,
                leaveDays: this.addLeaveType.value.addLeaveDays,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getLeaveType();
            $("#add_leavetype").modal("hide");
            this.addLeaveType.reset();
            this.toastr.success("Leave type is added", "Success");
        }
    }
    // Add Provident Modal Api Call
    saveAlkp() {
        if (this.addAlkp.valid) {
            let obj = Object.assign(this.addAlkp.value);
            this.commonService.saveAlkp(obj).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                    this.getAlkp();
                    this.toastr.success("Alkp type is added", "Success");
                });
            }, (error) => { this.toastr.error("error " + error.error.message, "Success"); });
            $("#add_leavetype").modal("hide");
            this.addAlkp.reset();
        }
    }
    // Edit Provident Modal Api Call
    editLeave() {
        let obj = {
            leaveType: this.editLeaveType.value.editLeave,
            leaveDays: this.editLeaveType.value.editLeaveDays,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getLeaveType();
        $("#edit_leavetype").modal("hide");
        this.toastr.success("Leave type is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allLeaveType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allLeaveType[index];
        this.editLeaveType.setValue({
            editLeave: toSetValues.leaveType,
            editLeaveDays: toSetValues.leaveDays,
        });
    }
    // Delete Provident Modal Api Call
    deleteLeave() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getLeaveType();
            $("#delete_leavetype").modal("hide");
            this.toastr.success("Leave type is deleted", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ShowAlkpComponent.ctorParameters = () => [
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] }
];
ShowAlkpComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false },] }]
};
ShowAlkpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-alkp',
        template: _raw_loader_show_alkp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_alkp_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
], ShowAlkpComponent);



/***/ }),

/***/ "RffP":
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/settings/settings-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "eO32");
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-settings/company-settings.component */ "96S2");
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localization/localization.component */ "AlOF");
/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "yplk");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "jV4M");
/* harmony import */ var _systems_components_users_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./systems/components/users/show-users/show-users.component */ "lMgg");
/* harmony import */ var _common_components_alkp_show_alkp_show_alkp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/alkp/show-alkp/show-alkp.component */ "PhVo");
/* harmony import */ var _common_components_all_org_mst_all_org_mst_all_org_mst_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/components/all-org-mst/all-org-mst/all-org-mst.component */ "Th6G");
/* harmony import */ var _leave_components_leave_config_leave_config_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leave/components/leave-config/leave-config.component */ "UJyA");
/* harmony import */ var _common_components_bas_address_create_edit_bas_address_create_edit_bas_address_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/components/bas-address/create-edit-bas-address/create-edit-bas-address.component */ "aDTx");
/* harmony import */ var _leave_components_leave_assign_leave_assign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leave/components/leave-assign/leave-assign.component */ "o6oY");
/* harmony import */ var _systems_components_sys_res_def_sys_res_def_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./systems/components/sys-res-def/sys-res-def.component */ "Wf0y");
/* harmony import */ var _systems_components_list_sys_res_def_list_sys_res_def_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./systems/components/list-sys-res-def/list-sys-res-def.component */ "H3Op");
















const routes = [
    {
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: "company-settings",
                component: _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_4__["CompanySettingsComponent"]
            },
            {
                path: "system-users",
                component: _systems_components_users_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_8__["ShowUsersComponent"]
            },
            {
                path: "alkp",
                component: _common_components_alkp_show_alkp_show_alkp_component__WEBPACK_IMPORTED_MODULE_9__["ShowAlkpComponent"]
            },
            {
                path: "all-org-mst",
                component: _common_components_all_org_mst_all_org_mst_all_org_mst_component__WEBPACK_IMPORTED_MODULE_10__["AllOrgMstComponent"]
            },
            {
                path: "bas-address",
                component: _common_components_bas_address_create_edit_bas_address_create_edit_bas_address_component__WEBPACK_IMPORTED_MODULE_12__["CreateEditBasAddressComponent"],
            },
            {
                path: "bas-address/:id",
                component: _common_components_bas_address_create_edit_bas_address_create_edit_bas_address_component__WEBPACK_IMPORTED_MODULE_12__["CreateEditBasAddressComponent"],
            },
            {
                path: "sys-resDef",
                component: _systems_components_sys_res_def_sys_res_def_component__WEBPACK_IMPORTED_MODULE_14__["SysResDefComponent"],
            },
            {
                path: "list-sys-resDef",
                component: _systems_components_list_sys_res_def_list_sys_res_def_component__WEBPACK_IMPORTED_MODULE_15__["ListSysResDefComponent"],
            },
            {
                path: "sys-resDef/:id",
                component: _systems_components_sys_res_def_sys_res_def_component__WEBPACK_IMPORTED_MODULE_14__["SysResDefComponent"],
            },
            {
                path: "localization",
                component: _localization_localization_component__WEBPACK_IMPORTED_MODULE_5__["LocalizationComponent"]
            },
            {
                path: "theme-settings",
                component: _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsComponent"]
            },
            {
                path: "change-password",
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"]
            },
            {
                path: "leave-assign",
                component: _leave_components_leave_assign_leave_assign_component__WEBPACK_IMPORTED_MODULE_13__["LeaveAssignComponent"]
            },
            {
                path: "leave-config",
                component: _leave_components_leave_config_leave_config_component__WEBPACK_IMPORTED_MODULE_11__["LeaveConfigComponent"]
            }
        ]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "Th6G":
/*!*********************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/all-org-mst/all-org-mst/all-org-mst.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AllOrgMstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrgMstComponent", function() { return AllOrgMstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_org_mst_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-org-mst.component.html */ "UJ7b");
/* harmony import */ var _all_org_mst_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-org-mst.component.css */ "9Das");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ "IhMt");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common.service */ "xrk7");










let AllOrgMstComponent = class AllOrgMstComponent {
    constructor(allModuleService, formBuilder, toastr, commonService) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.url = "leaveType";
        this.allLeaveType = [];
    }
    ngOnInit() {
        this.getLeaveType();
        this.getAllOrgMst();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        // Add Provident Form Validation And Getting Values
        this.addOrgFormGroup = this.formBuilder.group({
            orgType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            approvalStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        // Edit Provident Form Validation And Getting Values
        this.editLeaveType = this.formBuilder.group({
            editLeave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            editLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    addAllOrgMst() {
        if (this.addOrgFormGroup.valid) {
            let obj = Object.assign(this.addOrgFormGroup.value);
            this.commonService.saveOrgMst(obj).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                    this.getAllOrgMst();
                    this.toastr.success("Alkp type is added", "Success");
                });
            }, (error) => { this.toastr.error("error " + error.error.message, "Success"); });
            $("#add_organization").modal("hide");
            this.addOrgFormGroup.reset();
        }
    }
    getAllParentOrgMst() {
    }
    getAllOrgMst() {
        this.commonService.getAllOrgMst().subscribe((data) => {
            this.allOrgMst = data;
        });
    }
    getLeaveType() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allLeaveType = data;
            this.dtTrigger.next();
        });
    }
    // Add Provident Modal Api Call
    addLeave() {
        if (this.addLeaveType.valid) {
            let obj = {
                leaveType: this.addLeaveType.value.addLeaveType,
                leaveDays: this.addLeaveType.value.addLeaveDays,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getLeaveType();
            $("#add_leavetype").modal("hide");
            this.addLeaveType.reset();
            this.toastr.success("Leave type is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editLeave() {
        let obj = {
            leaveType: this.editLeaveType.value.editLeave,
            leaveDays: this.editLeaveType.value.editLeaveDays,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getLeaveType();
        $("#edit_leavetype").modal("hide");
        this.toastr.success("Leave type is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allLeaveType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allLeaveType[index];
        this.editLeaveType.setValue({
            editLeave: toSetValues.leaveType,
            editLeaveDays: toSetValues.leaveDays,
        });
    }
    // Delete Provident Modal Api Call
    deleteLeave() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getLeaveType();
            $("#delete_leavetype").modal("hide");
            this.toastr.success("Leave type is deleted", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
AllOrgMstComponent.ctorParameters = () => [
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] }
];
AllOrgMstComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false },] }]
};
AllOrgMstComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-org-mst',
        template: _raw_loader_all_org_mst_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_org_mst_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
], AllOrgMstComponent);



/***/ }),

/***/ "UJ7b":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/common/components/all-org-mst/all-org-mst/all-org-mst.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Organization</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">Organization</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_organization\"><i\n                        class=\"fa fa-plus\"></i> Add Organization</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table datatable mb-0\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Org Type</th>\n                            <th>Title</th>\n                            <th>Address</th>\n                            <th>Status</th>\n                            <th class=\"text-right\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of allOrgMst;let i = index\">\n                            <td>\n                                {{ 1 + i}}\n                            </td>\n                            <td>{{data.orgType}}</td>\n                            <td>{{data.title}}</td>\n                            <td> <a class=\"btn btn-primary\" href=\"\" routerLink=\"/settings/bas-address/{{data.id}}\" > <i\n                                class=\"fa fa-plus-square\"></i>  Address</a> </td>\n                            <td>\n                                <div class=\"dropdown action-label\">\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> Show\n                                    </a>\n                                    <!-- <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a *ngIf=\"data.isActive==true\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\n                                        <a *ngIf=\"data.isActive==false\" class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\n                                            Inactive</a>\n                                    </div> -->\n                                </div>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"dropdown dropdown-action\">\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#edit_leavetype\" (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\n                                            Delete</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"allLeaveType.length === 0\">\n                            <td colspan=\"10\">\n                                <h5 style=\"text-align: center;\">No data found</h5>\n                            </td>\n                           \n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n<!-- Add Leavetype Modal -->\n<div id=\"add_organization\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add Organization</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"addAllOrgMst()\" [formGroup]=\"addOrgFormGroup\">\n\n                    <div class=\"form-group\">\n                        <label>Org Type <span class=\"text-danger\">*</span></label>\n                        <select   class=\"select form-control\" formControlName=\"orgType\">\n                            <option value=\"\">Select Org Type</option>\n                            <option value=\"GROUP\">Group</option>\n                            <option value=\"ORGANIZATION\">Ogranization</option>\n                            <option value=\"OPERATING_UNIT\">Operating unit</option>\n                            <option value=\"PRODUCT\">Product</option>\n                            <option value=\"DEPARTMENT\">Department</option>\n                            <option value=\"SECTION\">Section</option>\n                            <option value=\"SUB_SECTION\">Sub Section</option>\n                            <option value=\"TEAM\">Team</option>\n                            <option value=\"SUB_TEAM\">Sub Team</option>\n                          \n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Title <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addOrgFormGroup.get('title').invalid && addOrgFormGroup.get('title').touched\"\n                        formControlName=\"title\">\n                        <div\n                        *ngIf=\"addOrgFormGroup.get('title').invalid && addOrgFormGroup.get('title').touched\">\n                        <small\n                            *ngIf=\"addOrgFormGroup.get('title').invalid && addOrgFormGroup.get('title').touched\"\n                            class=\"text-danger\"> *Title is required</small>\n                    </div>\n                    </div>\n                   \n\n                    <div class=\"form-group\">\n                        <label>Approval Status <span class=\"text-danger\">*</span></label>\n                        <select  class=\"select form-control\" formControlName=\"approvalStatus\">\n                            <option value=\"\">Select Approval Status</option>\n                            <option value=\"Approved\">Approved</option>\n                            <option value=\"Declined\">Denied</option>\n                        </select>\n                    </div>\n                    <div class=\"submit-section\">\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Add Leavetype Modal -->\n\n<!-- Edit Leavetype Modal -->\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Edit Leave Type</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"editLeave()\" [formGroup]=\"editLeaveType\">\n                    <div class=\"form-group\">\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                        formControlName=\"editLeave\">\n                        <div\n                        *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\">\n                        <small\n                            *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\n                            class=\"text-danger\"> *Leave type is required</small>\n                    </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                        formControlName=\"editLeaveDays\">\n                        <div\n                        *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\">\n                        <small\n                            *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\n                            class=\"text-danger\"> *Leave days is required</small>\n                    </div>\n                    </div>\n                    <div class=\"submit-section\">\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Edit Leavetype Modal -->\n\n<!-- Delete Leavetype Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Leave Type</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteLeave()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Leavetype Modal -->");

/***/ }),

/***/ "UJyA":
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave/components/leave-config/leave-config.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveConfigComponent", function() { return LeaveConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-config.component.html */ "AwIS");
/* harmony import */ var _leave_config_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-config.component.css */ "tByZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/services/common.service */ "xrk7");
/* harmony import */ var _services_leave_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/leave-config.service */ "QMHJ");









let LeaveConfigComponent = class LeaveConfigComponent {
    constructor(formBuilder, toastr, commonService, leaveCnfService) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.commonService = commonService;
        this.leaveCnfService = leaveCnfService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.listData = [];
        this.pageNum = 1;
        this.pageSize = 3;
        this.pageSizes = [3, 5, 10, 25, 50, 100, 200, 500, 1000];
        this.totalItem = 50;
        this.pngDiplayLastSeq = 10;
        this.leavePrd = [];
        this.hrCrLeaveConfList = [];
        this.pngConfig = {
            pageNum: 1,
            pageSize: 5,
            totalItem: 50
        };
    }
    ngOnInit() {
        this.formValidation();
        this.loadAlkpLeave();
        this.loadAlkpEmpCat();
        this.loadAlkpGender();
        this.loadAlkpMaritalSts();
        this.loadLeavePrd();
        this.loadAllLeaveConfig();
    }
    formValidation() {
        // Add Provident Form Validation And Getting Values
        this.addLeaveConfig = this.formBuilder.group({
            alkpLeaveType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            leaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            isCarryEnable: [""],
            carryMaxDays: [""],
            alkpEmpCat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            alkpGender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            alkpMaritalSts: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            hrLeavePrd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            isActive: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    loadAllLeaveConfig() {
        let queryParams = {};
        const params = this.getUserQueryParams(this.pageNum, this.pageSize);
        queryParams = params;
        this.leaveCnfService.getAllLeaveConfig(queryParams).subscribe((data) => {
            this.hrCrLeaveConfList = data.objectList;
            this.totalItem = data.totalItems;
            this.setDisplayLastSequence();
            console.log(this.hrCrLeaveConfList.length);
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
    addLeaveConf() {
        if (this.addLeaveConfig.invalid) {
            this.toastr.info("Please insert valid data");
            return;
        }
        this.hrCrLeaveConf = Object.assign(this.addLeaveConfig.value);
        let obj = {
            alkpLeaveType: {
                id: this.hrCrLeaveConf.alkpLeaveType
            },
            alkpEmpCat: {
                id: this.hrCrLeaveConf.alkpEmpCat
            },
            alkpGender: {
                id: this.hrCrLeaveConf.alkpGender
            },
            alkpMaritalSts: {
                id: this.hrCrLeaveConf.alkpMaritalSts
            },
            leaveDays: this.hrCrLeaveConf.leaveDays,
            carryMaxDays: this.hrCrLeaveConf.carryMaxDays,
            isCarryEnable: this.hrCrLeaveConf.isCarryEnable,
            isActive: this.hrCrLeaveConf.isActive,
            hrLeavePrd: {
                id: this.hrCrLeaveConf.hrLeavePrd,
            }
        };
        this.leaveCnfService.createLeaveCnfg(obj).subscribe(() => {
            $("#add_leaveconfig").modal("hide");
            this.addLeaveConfig.reset();
            this.toastr.success("Successfully Added Leave Config");
            this.loadAllLeaveConfig();
        }, (error) => {
            this.toastr.error("Error in creating Leave Config ");
        });
    }
    loadAlkpLeave() {
        this.commonService.getAlkpByKeyword("LEAVETYPE").subscribe((data) => {
            this.alkpLeave = data;
        });
    }
    loadAlkpEmpCat() {
        this.commonService.getAlkpByKeyword("EMP_CATEGORY").subscribe((data) => {
            this.alkpEmpCat = data;
        });
    }
    loadAlkpGender() {
        this.commonService.getAlkpByKeyword("GENDER").subscribe((data) => {
            this.alkpGender = data;
        });
    }
    loadAlkpMaritalSts() {
        this.commonService.getAlkpByKeyword("MARITAL_STATUS").subscribe((data) => {
            this.alkpMaritalSts = data;
        });
    }
    loadLeavePrd() {
        this.leaveCnfService.getLeavePrd().subscribe((data) => {
            this.leavePrd = data;
        });
    }
    setDisplayLastSequence() {
        this.pngDiplayLastSeq = (((this.pageNum - 1) * this.pageSize) + this.pageSize);
        if (this.listData.length < this.pageSize) {
            this.pngDiplayLastSeq = (((this.pageNum - 1) * this.pageSize) + this.pageSize);
        }
        if (this.totalItem < this.pngDiplayLastSeq) {
            this.pngDiplayLastSeq = this.totalItem;
        }
    }
    handlePageChange(event) {
        this.pageNum = event;
        this.loadAllLeaveConfig();
    }
    handlePageSizeChange(event) {
        this.pageSize = event.target.value;
        this.pageNum = 1;
        this.loadAllLeaveConfig();
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
LeaveConfigComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_leave_config_service__WEBPACK_IMPORTED_MODULE_8__["LeaveConfigService"] }
];
LeaveConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-config',
        template: _raw_loader_leave_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_config_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _services_leave_config_service__WEBPACK_IMPORTED_MODULE_8__["LeaveConfigService"]])
], LeaveConfigComponent);



/***/ }),

/***/ "VJ8R":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/systems/components/users/create-user/create-user.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "W2Bi":
/*!***************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/alkp/create-alkp/create-alkp.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYWxrcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Wf0y":
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/sys-res-def/sys-res-def.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SysResDefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysResDefComponent", function() { return SysResDefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sys_res_def_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sys-res-def.component.html */ "s6jE");
/* harmony import */ var _sys_res_def_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys-res-def.component.css */ "8lgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/system.service */ "Oryf");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");










let SysResDefComponent = class SysResDefComponent {
    constructor(formBuilder, route, router, systemService, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.systemService = systemService;
        this.toastr = toastr;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        this.loading = false;
        this.submitted = false;
        this.paramsConfig = {
            id: '',
            entityName: '',
        };
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        this.paramsConfig.id = this.id;
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            entityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            entityDescription: [''],
            backendUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            clientReqUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            resourceType: ['entity'],
            openUrl: [''],
            chkAuthorization: ['YES'],
            chkAuthorizationChar: [''],
            adminAccessOnly: [''],
            superAdminAccessOnly: [''],
            sequence: ['0'],
            active: [''],
        });
        if (!this.isAddMode) {
            let queryParams = {};
            queryParams.id = this.paramsConfig.id;
            this.systemService.getSysResDef(queryParams)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe((data) => {
                this.form.patchValue(data.objectList[0]);
                console.log("@SysResDef " + data.objectList[0].id);
            });
        }
    }
    get f() { return this.form.controls; }
    formSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        if (this.isAddMode) {
            this.create();
        }
        else {
            this.update();
        }
    }
    create() {
        this.systemService.createSysResDef(this.form.value).subscribe(() => {
            this.router.navigate(["/settings/list-sys-resDef"], {
                relativeTo: this.route,
            });
            this.toastr.success("Successfully created");
        }, (error) => { this.toastr.error("error in creating"); });
    }
    update() {
        this.systemService.updateSysResDef(this.id, this.form.value).subscribe(() => {
            this.router.navigate(["/settings/list-sys-resDef"], {
                relativeTo: this.route,
            });
            this.toastr.success("Successfully updated");
        }, (error) => { this.toastr.error("error in updating"); });
    }
};
SysResDefComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
SysResDefComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sys-res-def',
        template: _raw_loader_sys_res_def_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sys_res_def_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_system_service__WEBPACK_IMPORTED_MODULE_7__["SystemService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
], SysResDefComponent);



/***/ }),

/***/ "Y6Xc":
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/users/create-user/create-user.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-user.component.html */ "VJ8R");
/* harmony import */ var _create_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-user.component.css */ "vzxH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CreateUserComponent = class CreateUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateUserComponent.ctorParameters = () => [];
CreateUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-user',
        template: _raw_loader_create_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CreateUserComponent);



/***/ }),

/***/ "ZnaM":
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave-type/leave-type.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeaveTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeComponent", function() { return LeaveTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-type.component.html */ "4EXP");
/* harmony import */ var _leave_type_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-type.component.css */ "eYdA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../all-modules.service */ "IhMt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");









let LeaveTypeComponent = class LeaveTypeComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.url = "leaveType";
        this.allLeaveType = [];
    }
    ngOnInit() {
        this.getLeaveType();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        // Add Provident Form Validation And Getting Values
        this.addLeaveType = this.formBuilder.group({
            addLeaveType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            addLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editLeaveType = this.formBuilder.group({
            editLeave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            editLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    getLeaveType() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allLeaveType = data;
            this.dtTrigger.next();
        });
    }
    // Add Provident Modal Api Call
    addLeave() {
        if (this.addLeaveType.valid) {
            let obj = {
                leaveType: this.addLeaveType.value.addLeaveType,
                leaveDays: this.addLeaveType.value.addLeaveDays,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getLeaveType();
            $("#add_leavetype").modal("hide");
            this.addLeaveType.reset();
            this.toastr.success("Leave type is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editLeave() {
        let obj = {
            leaveType: this.editLeaveType.value.editLeave,
            leaveDays: this.editLeaveType.value.editLeaveDays,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getLeaveType();
        $("#edit_leavetype").modal("hide");
        this.toastr.success("Leave type is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allLeaveType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allLeaveType[index];
        this.editLeaveType.setValue({
            editLeave: toSetValues.leaveType,
            editLeaveDays: toSetValues.leaveDays,
        });
    }
    // Delete Provident Modal Api Call
    deleteLeave() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getLeaveType();
            $("#delete_leavetype").modal("hide");
            this.toastr.success("Leave type is deleted", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
LeaveTypeComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
LeaveTypeComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: false },] }]
};
LeaveTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-leave-type",
        template: _raw_loader_leave_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_type_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
], LeaveTypeComponent);



/***/ }),

/***/ "aDTx":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/bas-address/create-edit-bas-address/create-edit-bas-address.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CreateEditBasAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBasAddressComponent", function() { return CreateEditBasAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_edit_bas_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-edit-bas-address.component.html */ "AHJ0");
/* harmony import */ var _create_edit_bas_address_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-edit-bas-address.component.css */ "cqEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common.service */ "xrk7");










let CreateEditBasAddressComponent = class CreateEditBasAddressComponent {
    constructor(spinnerService, commonService, formBuilder, route, router, toastr) {
        this.spinnerService = spinnerService;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        this.listData = [];
        this.isAddMode = false;
        //using for form submit
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.allOrgMstId = this.route.snapshot.params["id"];
        this.findByAllOrgMstId(this.allOrgMstId);
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [""],
            title: [""],
            name: [""],
            addressType: [""],
            addressCode: [""],
            address: [""],
            addresses: [""],
            addressLine1: [""],
            addressLine2: [""],
            addressLine3: [""],
            postalCode: [""],
            addressPhoneNumber: [""],
            addressFaxNumber: [""],
            emailAddress: [""],
            isActive: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            allOrgMst: [""],
        });
    }
    get f() {
        return this.form.controls;
    }
    formSubmit() {
        this.submitted = true;
        this.loading = true;
        if (this.form.invalid) {
            return;
        }
        if (this.allOrgMstId == null || this.allOrgMstId == undefined) {
            this.toastr.error("Please select organization");
        }
        if (this.editId == null) {
            this._create();
        }
        else {
            this._update();
        }
    }
    _create() {
        let basAddress = Object.assign(this.form.value, {
            allOrgMst: this.allOrgMstId ? { id: this.allOrgMstId } : null,
        });
        this.spinnerService.show();
        this.commonService.saveAddress(basAddress).subscribe((data) => {
            this.spinnerService.hide();
            this.toastr.success("Successfully added");
            this.findByAllOrgMstId(this.allOrgMstId);
            this.isAddMode = false;
        }, (error) => {
            this.spinnerService.hide();
            this.toastr.error(error.error.message);
        });
    }
    _update() {
    }
    findByAllOrgMstId(id) {
        this.commonService.findAddressByAllOrgMstId(id).subscribe((data) => {
            this.listData = data;
        }, (error) => {
            this.toastr.error(error);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            //
        }, 1000);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
CreateEditBasAddressComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
CreateEditBasAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-edit-bas-address',
        template: _raw_loader_create_edit_bas_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_edit_bas_address_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
], CreateEditBasAddressComponent);



/***/ }),

/***/ "aXYT":
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/alkp/show-alkp/show-alkp.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWxrcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNob3ctYWxrcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "cqEJ":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/common/components/bas-address/create-edit-bas-address/create-edit-bas-address.component.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LWJhcy1hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoiY3JlYXRlLWVkaXQtYmFzLWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "dQlN":
/*!*************************************************************!*\
  !*** ./src/app/all-modules/settings/settings.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "eO32":
/*!************************************************************!*\
  !*** ./src/app/all-modules/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "0Mz5");
/* harmony import */ var _settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.css */ "dQlN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SettingsComponent = class SettingsComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.urlComplete = {
            mainUrl: "",
            subUrl: "",
            childUrl: "",
        };
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                const url = event.url.split("/");
                this.urlComplete.mainUrl = url[1];
                this.urlComplete.subUrl = url[2];
                this.urlComplete.childUrl = url[3];
            }
        });
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.innerHeight = window.innerHeight + "px";
            });
        };
        this.getScreenHeight();
    }
    getScreenHeight() {
        this.innerHeight = window.innerHeight + "px";
    }
    ngOnInit() { }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + "px";
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-settings",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("window: resize", ["$event"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SettingsComponent);



/***/ }),

/***/ "eYdA":
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave-type/leave-type.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLXR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJsZWF2ZS10eXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "eZmm":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/leave/components/leave-assign/leave-assign.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <!-- Page Content -->\n  <div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\"> </h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n                    <li class=\"breadcrumb-item active\">Leave Assign</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_leaveassign\"><i\n                        class=\"fa fa-plus\"></i> Add Leave Assign</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n    \t<!-- Search Filter -->\n        <form >\n            <div class=\"row filter-row mb-4\"> \n            <div class=\"col-sm-6 col-md-3\">  \n                <div class=\"form-group form-focus\">\n                    <div >\n                        <input class=\"form-control floating\"   formControlName=\"empCode\" type=\"text\" >\n                    </div>\n                    <label class=\"focus-label\">Emp Code</label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-3\">  \n                <div class=\"form-group form-focus\">\n                    <div class=\"cal-icon\">\n                        <input class=\"form-control floating datetimepicker\" formControlName=\"executeDate\" type=\"text\" bsDatepicker>\n                    </div>\n                    <label class=\"focus-label\">Date</label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-3\">  \n                <button  class=\"btn btn-primary submit-btn\" type=\"submit\">\n                    Search\n                    <!-- [disabled]=\"!addEmployeeForm.valid\" -->\n                </button>\n            </div>  \t\t\n            </div>\n        </form>\n        <!-- /Search Filter -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n\n                <div class=\"d-flex justify-content-start pb-1\">\n                    <div class=\"pgn-displayDataInfo\">\n                        <span class=\"page-item disabled\">Displaying ( {{ ( ((pageNum2-1) * pageSize2) + (1) ) }}  to {{pngDiplayLastSeq2}} of {{totalItem2}} ) entries</span>\n                    </div>\n                </div>\n                \n                <table id=\"genListTable\" class=\"table table-striped custom-table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Emp Name</th>\n                            <th>Leave Type</th>\n                            <th>Leave Days</th>\n                            <th>Taken Days</th>\n                            <th>Carry Days</th>\n                            <th>Is Closed</th>\n                            <th>Leave Prd</th>\n                          \n                            <th class=\"text-right\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody >\n                        \n                        <tr *ngFor=\"let option of leaveAssignList | paginate : {\n                                itemsPerPage: pageSize2,\n                                currentPage: pageNum2,\n                                totalItems: totalItem2\n                            };let i = index\" [class.active]=\"i == currentIndex\">    \n                            <td>\n                                {{ 1 + i}}\n                            </td>\n                            <td>{{option.hrCrEmp.firstName}}</td>\n                            <td>{{option.leaveType}}</td>\n                            <td>{{option.leaveDays}}</td>\n                            <td>{{option.takenDays}}</td>\n                            <td>{{option.carryDays}}</td>\n                            \n                            <td>\n                                <div class=\"dropdown action-label\">\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{option.isClose}} \n                                    </a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a  class=\"dropdown-item\"><i\n                                                class=\"fa fa-dot-circle-o text-success\"></i> true</a>\n                                        <a  class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\n                                            false</a>\n                                    </div>\n                                </div>\n                                </td>\n                            <td>{{option.hrLeavePrd.title}}</td>\n                           \n                            <td class=\"text-right\">\n                                <div class=\"dropdown dropdown-action\">\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#edit_leavetype\" (click)=\"edit(leaveType.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\n                                            data-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\n                                            Delete</a>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"leaveAssignList.length === 0\">\n                            <td colspan=\"10\">\n                                <h5 style=\"text-align: center;\">No data found</h5>\n                            </td>\n                           \n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"d-flex justify-content-end \">\n\n                    <div >\n                        Items per Page\n                        <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" >\n                            <option *ngFor=\"let size of pageSizes2\" [value]=\"size\">\n                                {{ size }}\n                            </option>\n                        </select>\n                    </div>\n\n                    <div class=\"pgn-pageSliceCt\">\n                        <pagination-controls \n                            responsive=\"true\" \n                            previousLabel=\"Prev\" \n                            nextLabel=\"Next\" \n                            (pageChange)=\"handlePageChange($event)\">\n                        </pagination-controls>\n                    </div>\n                    \n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n<!-- Add Leavetype Modal -->\n<div id=\"add_leaveassign\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add Leave Config</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form (ngSubmit)=\"addLeaveAssignFunc()\" [formGroup]=\"addLeaveAssignForm\">\n\n                    <div class=\"row\">\n        \n                        <label class=\"col-form-label col-md-2\">All Employees </label>\n                        <div class=\"col-md-10\">\n                            <input formControlName=\"isAlEmp\" type=\"checkbox\" value=\"1\">\n        \n                        </div>\n                        <br><br>\n        \n        \n                        <label class=\"col-form-label col-md-2\">Selected Employees </label>\n                        <div class=\"col-md-10\">\n                            <ng-select formControlName=\"empId\" [items]=\"dropdownList\" bindLabel=\"loginCode\" bindValue=\"id\"\n                                placeholder=\"Select\" appendTo=\"body\" [multiple]=\"true\" (scrollToEnd)=\"onSelectAllEmp()\">\n                            </ng-select>\n                            \n                           \n        \n                        </div>\n                        <br><br>\n                        <label class=\"col-form-label col-md-2\">Leave Types </label>\n                        <div class=\"col-md-10\">\n                            <ng-select formControlName=\"leaveType\" [items]=\"leaveList\" bindLabel=\"title\" bindValue=\"id\"\n                                placeholder=\"Select\" appendTo=\"body\" [multiple]=\"true\" (scrollToEnd)=\"onSelectAllEmp()\">\n                            </ng-select>\n        \n                        </div>\n                        <br><br>\n                        <br><br>\n        \n                        <div class=\"text-right\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-ripple\">Start Process</button>\n                        </div>\n        \n                    </div>\n                </form>\n                \n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Add Leavetype Modal -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n<!-- /Page Content -->");

/***/ }),

/***/ "gGot":
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/settings/change-password/change-password.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "ijnS":
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave/components/leave-assign/leave-assign.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWFzc2lnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImxlYXZlLWFzc2lnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "jV4M":
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/settings/change-password/change-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.component.html */ "n/OY");
/* harmony import */ var _change_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component.css */ "gGot");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.changePassword = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    submitChangePassword() {
        if (this.changePassword.valid) {
            this.toastr.success("Password is changed", 'Success');
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "kJEJ":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/systems/components/list-sys-res-def/list-sys-res-def.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n  <!-- Page Header -->\n  <div class=\"page-header\">\n    <div class=\"row align-items-center\">\n      <div class=\"col\">\n        <h3 class=\"page-title\">System Resources Definition</h3>\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/dashboard\">SysResDef</a>\n          </li>\n          <li class=\"breadcrumb-item active\">Add Resourse</li>\n        </ul>\n      </div>\n      <div class=\"col-auto float-right ml-auto\">\n        <a class=\"btn add-btn\" routerLink=\"/settings/sys-resDef\"><i class=\"fa fa-plus\"></i> Add SysDef Resourse</a>\n      </div>\n    </div>\n  </div>\n  <!-- /Page Header -->\n\n  <!-- Search Filter -->\n  <div class=\"row filter-row\">\n    <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n      <div class=\"form-group form-focus\">\n        <input type=\"text\" class=\"form-control floating\" (input)=\"searchEntity($event.target.value)\" />\n        <label class=\"focus-label\">Entity Name</label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n      <a class=\"btn btn-success btn-block\"> Search </a>\n    </div>\n  </div>\n  <!-- /Search Filter -->\n\n  <div class=\"row\">\n    <div id=\"divResListContainer\" [ngClass]=\" resAuthId && tempClose!=null  ? 'col-md-6' : 'col-md-12'\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <div class=\"d-flex justify-content-start pb-1\">\n              <div class=\"pgn-displayDataInfo\">\n                <span class=\"page-item disabled\">Displaying (\n                  {{ (pngConfig.pageNum - 1) * pngConfig.pageSize + 1 }} to\n                  {{ pngConfig.pngDiplayLastSeq }} of {{ pngConfig.totalItem }} )\n                  entries</span>\n              </div>\n            </div>\n\n            <table id=\"genListTable\" class=\"table table-striped custom-table\">\n              <thead>\n                <tr>\n                  <th>SL</th>\n                  <th class=\"d-none\">TB_ROW_ID</th>\n                  <th>Entity Name</th>\n                  <th>Client Url</th>\n                  <th>Backend Url</th>\n                  <th>Permission</th>\n                  <th>Sequence</th>\n                  <th class=\"text-right no-sort\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"\n                    let thisObj of listData\n                      | paginate\n                        : {\n                            itemsPerPage: pngConfig.pageSize,\n                            currentPage: pngConfig.pageNum,\n                            totalItems: pngConfig.totalItem\n                          };\n                    let i = index\n                  \" [class.active]=\"i == currentIndex\">\n                  <td>\n                    {{ (pngConfig.pageNum - 1) * pngConfig.pageSize + (i + 1) }}\n                  </td>\n                  <td class=\"d-none\">{{ thisObj.id }}</td>\n                  <td>{{ thisObj.entityName }}</td>\n                  <td>{{ thisObj.clientReqUrl }}</td>\n                  <td>{{ thisObj.backendUrl }}</td>\n                  <td> <a (click)=\"getAuthData(thisObj.id)\" (click)=\"actionTableLine($event, thisObj)\" class=\"btn btn-sm btn-primary\">Permission</a></td>\n                  <td>{{ thisObj.sequence }}</td>\n                  <td class=\"text-right\">\n                    <div class=\"dropdown dropdown-action\">\n                      <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i\n                          class=\"material-icons\">more_vert</i></a>\n                      <div class=\"dropdown-menu dropdown-menu-right\">\n                        <a class=\"dropdown-item\" routerLink=\"/settings/sys-resDef/{{ thisObj.id }}\"><i\n                            class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                        <a class=\"dropdown-item\" (click)=\"tempId = thisObj.id\" data-toggle=\"modal\"\n                          data-target=\"#delete_sysResDef\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr *ngIf=\"listData.length === 0\">\n                  <td colspan=\"10\">\n                    <h5 style=\"text-align: center\">No data found</h5>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n            <div class=\"d-flex justify-content-end\">\n              <div class=\"\" [formGroup]=\"myGroup\">\n                Items per Page\n                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" formControlName=\"pageSize\">\n                  <option *ngFor=\"let size of pngConfig.pageSizes\" [value]=\"size\">\n                    {{ size }}\n                  </option>\n                </select>\n              </div>\n\n              <div class=\"pgn-pageSliceCt\">\n                <pagination-controls responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\"\n                  (pageChange)=\"handlePageChange($event)\">\n                </pagination-controls>\n              </div>\n            </div>\n            <!-- Delete SysResDef Modal -->\n            <div class=\"modal custom-modal fade\" id=\"delete_sysResDef\" role=\"dialog\">\n              <div class=\"modal-dialog modal-dialog-centered\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body\">\n                    <div class=\"form-header\">\n                      <h3>Delete System Def Resourse</h3>\n                      <p>Are you sure want to delete?</p>\n                    </div>\n                    <div class=\"modal-btn delete-action\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btn btn-primary continue-btn\" (click)=\"deleteSysResDef()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <a data-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /Delete SysResDef Modal -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"divAuthListContainer\" [ngClass]=\" tempClose==null  ? 'd-none' : 'col-md-6'\" *ngIf=\"resAuthId\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-title mb-0\">\n            <div class=\"formTitleCt\"><span>Resources: </span> <span id=\"authResourcesTxt\"></span></div>\n            <button type=\"button\" (click)=close() class=\"close\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          \n        </div> \n        <div class=\"card-body\">\n          <div class=\"addFormAuth\">\n            <form (ngSubmit)=\"formSubmit()\" [formGroup]=\"form\">\n\n              <div class=\"row\">\n                <div class=\"col-sm-4\" *ngIf=\"!editId\">\n                  <div class=\"form-group\" >\n                    <label>Username</label>\n                    <ng-select [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" [items]=\"configDDL.listData\"\n                      formControlName=\"username\" bindLabel=\"userTitle\" bindValue=\"username\" placeholder=\"Select users\"\n                      [searchable]=\"true\" [clearable]=\"true\"\n                      [virtualScroll]=\"true\" [loading]=\"ngSelLoader\" \n                      (search)=\"searchDDL($event)\"\n                      (scrollToEnd)=\"scrollToEndDDL()\"\n                      [clearOnBackspace]=\"true\"\n                      (clear) = \"clearDDL()\"\n                      (click)=\"initSysParamsDDL($event, 'ddlUsername', '/api/common/getUser', 'username')\"\n                      ddlActiveFieldName=\"ddlUsername\"\n                      class=\"custom-ng-select\"\n                      >\n                    </ng-select>\n\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">username is required</div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\"*ngIf=\"editId\">\n                  <div class=\"form-group\" >\n                    <label>Username</label>\n                    <input class=\"form-control\" formControlName=\"username\" class=\"form-control\" type=\"text\" readOnly=\"readOnly\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Visible to All</label>\n                    <select class=\"form-control\" formControlName=\"visibleToAll\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"true\">Yes</option>\n                      <option value=\"false\">No</option>\n                    </select>  \n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Other String</label>\n                    <input class=\"form-control\" formControlName=\"othersString\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\" *ngIf=\"listRolesData\">\n                    <label>Roles</label>\n                    <select class=\"form-control\" formControlName=\"role\">\n                      <option value=\"\">-- Select --</option>\n                      <option *ngFor=\"let data of listRolesData\" [ngValue]='data.id'>{{data.authority}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Create Auth</label>\n                    <select class=\"form-control\" formControlName=\"createAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"C\">Create</option>\n                    </select>  \n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Read Auth</label>\n                    <select class=\"form-control\" formControlName=\"readAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"R\">Read</option>\n                    </select>  \n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Update Auth</label>\n                    <select class=\"form-control\" formControlName=\"updateAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"U\">Update</option>\n                    </select>  \n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Delete Auth</label>\n                    <select class=\"form-control\" formControlName=\"deleteAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"D\">Delete</option>\n                    </select>  \n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Query Auth</label>\n                    <select class=\"form-control\" formControlName=\"queryAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"Q\">Query</option>\n                    </select>  \n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Submit Auth</label>\n                    <select class=\"form-control\" formControlName=\"submitAuth\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"S\">Submit</option>\n                    </select>  \n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>ID</label>\n                    <input class=\"form-control\" formControlName=\"id\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label>Full Preveliges</label>\n                    <select class=\"form-control\" formControlName=\"fullPrivilegeString\" [ngClass]=\"{ 'is-invalid': submitted && f.fullPrivilegeString.errors }\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"E\">Execute</option>\n                      <option value=\"N\">No</option>\n                    </select>  \n                    <div *ngIf=\"submitted && f.fullPrivilegeString.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.fullPrivilegeString.errors.required\">Full Privilege is required</div>\n                  </div>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"submit-section\">\n                <button class=\"btn btn-primary submit-btn\" type=\"submit\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Save\n                    <!-- [disabled]=\"!addEmployeeForm.valid\" -->\n                </button>\n            </div>\n\n            </form>\n          </div>\n          <hr>\n\n          <div class=\"table-responsive\">\n            <div class=\"d-flex justify-content-start pb-1\">\n            </div>\n            <br>\n            <table id=\"genListTable\" class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Username</th>\n                  <th>System Res Name</th>\n                  <th>Full PrivilegeString</th>\n                  <th class=\"text-right no-sort\">Action </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"\n                    let thisObj of listAuthData\n                    let i = index\n                  \" [class.active]=\"i == currentIndex\">\n                  <td>{{thisObj.username}}</td>\n                  <td>{{ thisObj.systemResourceName }}</td>\n                  <td>{{ thisObj.fullPrivilegeString }}</td>\n                  <td class=\"text-right\">\n                    <div class=\"dropdown dropdown-action\">\n                      <a class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i\n                          class=\"material-icons\">more_vert</i></a>\n                      <div class=\"dropdown-menu dropdown-menu-right\">\n                        <a class=\"dropdown-item\" (click)=\"editSysResAuthClickEvent(thisObj.id)\"><i\n                            class=\"fa fa-pencil m-r-5\"></i> Edit</a>\n                        <a class=\"dropdown-item\" (click)=\"authTempId = thisObj.id\" data-toggle=\"modal\"\n                          data-target=\"#delete_sysResAuth\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr *ngIf=\"listData.length === 0\">\n                  <td colspan=\"10\">\n                    <h5 style=\"text-align: center\">No data found</h5>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <!-- Delete SysResDef Modal -->\n            <div class=\"modal custom-modal fade\" id=\"delete_sysResDef\" role=\"dialog\">\n              <div class=\"modal-dialog modal-dialog-centered\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body\">\n                    <div class=\"form-header\">\n                      <h3>Delete System Def Resourse</h3>\n                      <p>Are you sure want to delete?</p>\n                    </div>\n                    <div class=\"modal-btn delete-action\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btn btn-primary continue-btn\" (click)=\"deleteSysResDef()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <a data-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /Delete SysResDef Modal -->\n\n\n            <!-- Delete SysResAuth Modal -->\n\n            <div class=\"modal custom-modal fade\" id=\"delete_sysResAuth\" role=\"dialog\">\n              <div class=\"modal-dialog modal-dialog-centered\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body\">\n                    <div class=\"form-header\">\n                      <h3>Delete System Def Auth</h3>\n                      <p>Are you sure want to delete?</p>\n                    </div>\n                    <div class=\"modal-btn delete-action\">\n                      <div class=\"row\">\n                        <div class=\"col-6\">\n                          <a class=\"btn btn-primary continue-btn\" (click)=\"deleteSysResAuth()\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                          <a data-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- / Delete SysResAuth Modal-->\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Page Content -->\n\n<ngx-spinner bdColor=\"rgba(255,255,255,0.5)\" size=\"medium\" color=\"#667eea\" type=\"ball-clip-rotate\" [fullScreen]=\"false\">\n  <p style=\"color: black\">Processing...</p>\n</ngx-spinner>");

/***/ }),

/***/ "kmnk":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/common/components/alkp/create-alkp/create-alkp.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>create-alkp works!</p>\n");

/***/ }),

/***/ "lMgg":
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/users/show-users/show-users.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ShowUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUsersComponent", function() { return ShowUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-users.component.html */ "9C4y");
/* harmony import */ var _show_users_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-users.component.css */ "4JZM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ "IhMt");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/system.service */ "Oryf");
/* harmony import */ var src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/utils/_helpers */ "ur0Y");
/* harmony import */ var src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/login/services/login.service */ "d//k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













let ShowUsersComponent = class ShowUsersComponent {
    constructor(allModuleService, formBuilder, toastr, systemService, loginService, router, route) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.systemService = systemService;
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.url = "leaveType";
        this.allLeaveType = [];
        this.allUsers = [];
        this.groupUser = [];
        this.isGroupUser = true;
    }
    ngOnInit() {
        this.initializeForm();
        // this.getLeaveType();
        this.getUsers();
        this.getGroupUser();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        // Add Provident Form Validation And Getting Values
        this.addLeaveType = this.formBuilder.group({
            addLeaveType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editLeaveType = this.formBuilder.group({
            editLeave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            editLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    initializeForm() {
        const formOptions = { validators: Object(src_app_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["MustMatch"])('password', 'confirmPassword') };
        this.addUserFormGroup = this.formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            groupUser: [""],
            userTitle: [""],
            groupUsername: [""],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, formOptions);
    }
    getUsers() {
        this.systemService.getAllUsers().subscribe((data) => {
            console.log(data);
            this.allUsers = data;
            this.dtTrigger.next();
        });
    }
    // add user 
    addUser() {
        if (this.addUserFormGroup.invalid) {
            this.toastr.warning("invalid form data");
            return;
        }
        if (this.addUserFormGroup.valid) {
            let obj = Object.assign(this.addUserFormGroup.value);
            this.loginService.register(obj).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                    this.getUsers();
                    $("#add_user").modal("hide");
                    this.toastr.success("System User created successfully", "Success");
                });
            }, (error) => { this.toastr.error("error " + error.error.message, "error"); });
            $("#add_user").modal("hide");
            this.addUserFormGroup.reset();
        }
    }
    //get group users 
    getGroupUser() {
        this.systemService.getGroupUser().subscribe((data) => {
            this.groupUser = data;
        }, (error) => { this.toastr.error("error"); });
    }
    selectIsGroupUser() {
        this.isGroupUser = false;
    }
    // Add Provident Modal Api Call
    addLeave() {
        if (this.addLeaveType.valid) {
            let obj = {
                leaveType: this.addLeaveType.value.addLeaveType,
                leaveDays: this.addLeaveType.value.addLeaveDays,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            // this.getLeaveType();
            $("#add_leavetype").modal("hide");
            this.addLeaveType.reset();
            this.toastr.success("Leave type is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editLeave() {
        let obj = {
            leaveType: this.editLeaveType.value.editLeave,
            leaveDays: this.editLeaveType.value.editLeaveDays,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        //  this.getLeaveType();
        $("#edit_leavetype").modal("hide");
        this.toastr.success("Leave type is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allLeaveType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allLeaveType[index];
        this.editLeaveType.setValue({
            editLeave: toSetValues.leaveType,
            editLeaveDays: toSetValues.leaveDays,
        });
    }
    // Delete Provident Modal Api Call
    deleteLeave() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            //   this.getLeaveType();
            $("#delete_leavetype").modal("hide");
            this.toastr.success("Leave type is deleted", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ShowUsersComponent.ctorParameters = () => [
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"] },
    { type: src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
ShowUsersComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"], { static: false },] }]
};
ShowUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-users',
        template: _raw_loader_show_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_users_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_8__["AllModulesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"],
        src_app_login_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
], ShowUsersComponent);

function first() {
    throw new Error("Function not implemented.");
}


/***/ }),

/***/ "n/OY":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/change-password/change-password.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 offset-md-3\">\r\n\r\n            <!-- Page Header -->\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h3 class=\"page-title\">Change Password</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Page Header -->\r\n\r\n            <form (ngSubmit)=\"submitChangePassword()\" [formGroup]=\"changePassword\">\r\n                <div class=\"form-group\">\r\n                    <label>Old password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\"\r\n                    formControlName=\"oldPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\"\r\n                        class=\"text-danger\"> *Old password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>New password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\"\r\n                    formControlName=\"newPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\"\r\n                        class=\"text-danger\"> *New password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Confirm password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\"\r\n                    formControlName=\"confirmPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\"\r\n                        class=\"text-danger\"> *Confirm password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Update Password</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->");

/***/ }),

/***/ "o6oY":
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave/components/leave-assign/leave-assign.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LeaveAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveAssignComponent", function() { return LeaveAssignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_assign_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-assign.component.html */ "eZmm");
/* harmony import */ var _leave_assign_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-assign.component.css */ "ijnS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/all-modules/employees/services/employee.service */ "AuF9");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/common.service */ "xrk7");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_leave_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/leave-config.service */ "QMHJ");










let LeaveAssignComponent = class LeaveAssignComponent {
    constructor(empServicec, toastr, formBuilder, commonService, leaveCnfService) {
        this.empServicec = empServicec;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.leaveCnfService = leaveCnfService;
        this.dropdownList = [];
        this.leaveList = [];
        this.leaveAssignList = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.listData = [];
        this.listData2 = [];
        //pagination config for all emp
        this.pageNum = 1;
        this.pageSize = 10;
        this.pageSizes = [3, 5, 10, 25, 50, 100, 200, 500, 1000];
        this.totalItem = 50;
        this.pngDiplayLastSeq = 10;
        //pagination config for all leave Assign
        this.pageNum2 = 1;
        this.pageSize2 = 3;
        this.pageSizes2 = [3, 5, 10, 25, 50, 100, 200, 500, 1000];
        this.totalItem2 = 50;
        this.pngDiplayLastSeq2 = 10;
        this.pngConfig = {
            pageNum: 1,
            pageSize: 5,
            totalItem: 50
        };
        this.pngConfig2 = {
            pageNum2: 1,
            pageSize2: 5,
            totalItem2: 50
        };
    }
    ngOnInit() {
        this.loadAllEmployee();
        this.loadAlkpLeave();
        this.loadAllLeaveAssign();
        this.formValidation();
    }
    formValidation() {
        // Add Provident Form Validation And Getting Values
        this.addLeaveAssignForm = this.formBuilder.group({
            empId: [""],
            leaveType: [""],
            isAlEmp: [""]
        });
    }
    loadAllEmployee() {
        let apiURL = this.baseUrl + "/hrCrEmp/empList2";
        let queryParams = {};
        const params = this.getUserQueryParams(this.pageNum, this.pageSize);
        queryParams = params;
        this.empServicec.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.dropdownList = response.objectList;
            // console.log("length=" + this.dropdownList.length);
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
    onSelectAllEmp() {
        this.pageNum++;
        let apiURL = this.baseUrl + "/hrCrEmp/empList2";
        let queryParams = {};
        const params = this.getUserQueryParams(this.pageNum, this.pageSize);
        queryParams = params;
        this.empServicec.sendGetRequest(apiURL, queryParams).subscribe((response) => {
            this.dropdownList = this.dropdownList.concat(response.objectList);
            //console.log("length=" + this.dropdownList.length);
        }, (error) => {
            console.log(error);
        });
    }
    loadAlkpLeave() {
        this.commonService.getAlkpByKeyword("LEAVETYPE").subscribe((data) => {
            this.alkpLeave = data;
            this.leaveList = this.alkpLeave.subALKP;
            console.log(this.leaveList);
        });
    }
    addLeaveAssignFunc() {
        // if (this.addLeaveAssignForm.invalid) {
        //   this.toastr.info("Please insert valid data")
        //   return;
        // }
        let obj;
        if (this.addLeaveAssignForm.value.isAlEmp != null || this.addLeaveAssignForm.value.isAlEmp != false) {
            obj = {
                isAllEmp: this.addLeaveAssignForm.value.isAlEmp,
                leaveTypeIdList: this.addLeaveAssignForm.value.leaveType,
            };
            if (this.addLeaveAssignForm.value.leaveType == null || this.addLeaveAssignForm.value.leaveType == "") {
                this.toastr.info("Please insert valid data");
                return;
            }
        }
        if (this.addLeaveAssignForm.value.isAlEmp == null || this.addLeaveAssignForm.value.isAlEmp == false) {
            obj = {
                hrCrEmpIdList: this.addLeaveAssignForm.value.empId,
                leaveTypeIdList: this.addLeaveAssignForm.value.leaveType,
            };
            if (this.addLeaveAssignForm.value.leaveType == null || this.addLeaveAssignForm.value.leaveType == "" ||
                this.addLeaveAssignForm.value.empId == null || this.addLeaveAssignForm.value.empId == "") {
                this.toastr.info("Please insert valid data");
                return;
            }
        }
        //  obj = {
        //   isAllEmp: this.addLeaveAssignForm.value.isAlEmp,
        //   hrCrEmpIdList: this.addLeaveAssignForm.value.empId,
        //   leaveTypeIdList: this.addLeaveAssignForm.value.leaveType,
        // }
        this.leaveCnfService.createLeaveAssign(obj).subscribe(() => {
            $("#add_leaveassign").modal("hide");
            this.addLeaveAssignForm.reset();
            this.toastr.success("Creating Leave Assign Successfull");
            this.loadAllLeaveAssign();
        }, (error) => {
            this.toastr.error("Error in creating Leave Assign ");
        });
        console.log(this.addLeaveAssignForm.value);
    }
    loadAllLeaveAssign() {
        let queryParams = {};
        const params = this.getUserQueryParams2(this.pageNum2, this.pageSize2);
        queryParams = params;
        this.leaveCnfService.getAllLeaveAssign(queryParams).subscribe((data) => {
            this.leaveAssignList = data.objectList;
            this.totalItem2 = data.totalItems;
            this.setDisplayLastSequence2();
            console.log(this.leaveAssignList);
        });
    }
    getUserQueryParams2(page, pageSize) {
        let params = {};
        if (page) {
            params[`pageNum`] = page - 0;
        }
        if (pageSize) {
            params[`pageSize`] = pageSize;
        }
        return params;
    }
    setDisplayLastSequence2() {
        this.pngDiplayLastSeq2 = (((this.pageNum2 - 1) * this.pageSize2) + this.pageSize2);
        if (this.listData2.length < this.pageSize2) {
            this.pngDiplayLastSeq2 = (((this.pageNum2 - 1) * this.pageSize2) + this.pageSize2);
        }
        if (this.totalItem2 < this.pngDiplayLastSeq2) {
            this.pngDiplayLastSeq2 = this.totalItem2;
        }
    }
    handlePageChange(event) {
        this.pageNum2 = event;
        this.loadAllLeaveAssign();
    }
    handlePageSizeChange(event) {
        this.pageSize2 = event.target.value;
        this.pageNum2 = 1;
        this.loadAllLeaveAssign();
    }
    setDisplayLastSequence() {
        this.pngDiplayLastSeq = (((this.pageNum - 1) * this.pageSize) + this.pageSize);
        if (this.listData.length < this.pageSize) {
            this.pngDiplayLastSeq = (((this.pageNum - 1) * this.pageSize) + this.pageSize);
        }
        if (this.totalItem < this.pngDiplayLastSeq) {
            this.pngDiplayLastSeq = this.totalItem;
        }
    }
};
LeaveAssignComponent.ctorParameters = () => [
    { type: src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _common_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_leave_config_service__WEBPACK_IMPORTED_MODULE_9__["LeaveConfigService"] }
];
LeaveAssignComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-assign',
        template: _raw_loader_leave_assign_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_assign_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_all_modules_employees_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _common_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _services_leave_config_service__WEBPACK_IMPORTED_MODULE_9__["LeaveConfigService"]])
], LeaveAssignComponent);



/***/ }),

/***/ "rB0X":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/company-settings/company-settings.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2\">\r\n\r\n            <!-- Page Header -->\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h3 class=\"page-title\">Company Settings</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Page Header -->\r\n\r\n            <form (ngSubmit)=\"submitCompany()\" [formGroup]=\"companySettings\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Company Name <span class=\"text-danger\">*</span></label>\r\n                            <input class=\"form-control\" type=\"text\" value=\"Dreamguy's Technologies\"\r\n                                [class.invalid]=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\"\r\n                                formControlName=\"companyName\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\"\r\n                                    class=\"text-danger\"> *Company name is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Contact Person</label>\r\n                            <input class=\"form-control \" value=\"Daniel Porter\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\"\r\n                                formControlName=\"contactPerson\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\"\r\n                                    class=\"text-danger\"> *Contact person is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input class=\"form-control \" value=\"3864 Quiet Valley Lane, Sherman Oaks, CA, 91403\"\r\n                                type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('address').invalid && companySettings.get('address').touched\"\r\n                                formControlName=\"address\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('address').invalid && companySettings.get('address').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('address').invalid && companySettings.get('address').touched\"\r\n                                    class=\"text-danger\"> *Address is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Country</label>\r\n                            <select class=\"form-control select\"\r\n                                [class.invalid]=\"companySettings.get('country').invalid && companySettings.get('country').touched\"\r\n                                formControlName=\"country\">\r\n                                <option value=\"Bangladesh\">Bangladesh</option>\r\n                             \r\n                            </select>\r\n                            <div\r\n                                *ngIf=\"companySettings.get('country').invalid && companySettings.get('country').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('country').invalid && companySettings.get('country').touched\"\r\n                                    class=\"text-danger\"> *Country is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>City</label>\r\n                            <input class=\"form-control\" value=\"Sherman Oaks\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('city').invalid && companySettings.get('city').touched\"\r\n                                formControlName=\"city\">\r\n                            <div *ngIf=\"companySettings.get('city').invalid && companySettings.get('city').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('city').invalid && companySettings.get('city').touched\"\r\n                                    class=\"text-danger\"> *City is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>State/Province</label>\r\n                            <select class=\"form-control select\"\r\n                                [class.invalid]=\"companySettings.get('state').invalid && companySettings.get('state').touched\"\r\n                                formControlName=\"state\">\r\n                                <option value=\"Dhaka\">Dhaka</option>\r\n                                <option value=\"Alaska\">Alaska</option>\r\n                                <option value=\"Alabama\">Alabama</option>\r\n                            </select>\r\n                            <div *ngIf=\"companySettings.get('state').invalid && companySettings.get('state').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('state').invalid && companySettings.get('state').touched\"\r\n                                    class=\"text-danger\"> *State is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Postal Code</label>\r\n                            <input class=\"form-control\" value=\"91403\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\"\r\n                                formControlName=\"postalCode\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\"\r\n                                    class=\"text-danger\"> *Postal code is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" value=\"danielporter@example.com\" type=\"email\"\r\n                                [class.invalid]=\"companySettings.get('email').invalid && companySettings.get('email').touched\"\r\n                                formControlName=\"email\">\r\n                            <div *ngIf=\"companySettings.get('email').invalid && companySettings.get('email').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('email').invalid && companySettings.get('email').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Phone Number</label>\r\n                            <input class=\"form-control\" value=\"818-978-7102\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\"\r\n                                formControlName=\"phoneNumber\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\"\r\n                                    class=\"text-danger\"> *Phone number is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Mobile Number</label>\r\n                            <input class=\"form-control\" value=\"818-635-5579\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\"\r\n                                formControlName=\"mobileNumber\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\"\r\n                                    class=\"text-danger\"> *Mobile number is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Fax</label>\r\n                            <input class=\"form-control\" value=\"818-978-7102\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\"\r\n                                formControlName=\"fax\">\r\n                            <div *ngIf=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\">\r\n                                <small *ngIf=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\"\r\n                                    class=\"text-danger\"> *Fax is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Website Url</label>\r\n                            <input class=\"form-control\" value=\"https://www.example.com\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('website').invalid && companySettings.get('website').touched\"\r\n                                formControlName=\"website\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('website').invalid && companySettings.get('website').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('website').invalid && companySettings.get('website').touched\"\r\n                                    class=\"text-danger\"> *Website URL is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->");

/***/ }),

/***/ "s6jE":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/settings/systems/components/sys-res-def/sys-res-def.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">System Resources Definition</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">SysResDef</a></li>\n                    <li class=\"breadcrumb-item active\">Add Resourse</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/settings/list-sys-resDef\"><i class=\"fa fa-share\"></i> Back To\n                    Lists</a>\n\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4 class=\"card-title mb-0\">Insert or Update Data</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form novalidate (ngSubmit)=\"formSubmit()\" [formGroup]=\"form\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Entity Name<span class=\"text-danger\">*</span></label>\n                                    <input formControlName=\"entityName\" class=\"form-control\"\n                                        type=\"text\"  [ngClass]=\"{ 'is-invalid': submitted && f.entityName.errors }\">\n                                        <div *ngIf=\"submitted && f.entityName.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.entityName.errors.required\">Entity Name is required</div>\n                                        </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Backend Url<span class=\"text-danger\">*</span></label>\n                                    <input class=\"form-control\" formControlName=\"backendUrl\" class=\"form-control\"\n                                        type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.backendUrl.errors }\">\n                                        <div *ngIf=\"submitted && f.backendUrl.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.backendUrl.errors.required\">Backend Url is required</div>\n                                        </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Client Url<span class=\"text-danger\">*</span></label>\n                                    <input class=\"form-control\" formControlName=\"clientReqUrl\" class=\"form-control\"\n                                        type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.clientReqUrl.errors }\">\n                                    <div *ngIf=\"submitted && f.clientReqUrl.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.clientReqUrl.errors.required\">Client Url is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Resourse Type</label>\n                                    <select class=\"form-control\" formControlName=\"resourceType\" > \n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"entity\">entity</option>\n                                        <option value=\"menu\">menu</option>\n                                        <option value=\"process\">process</option>\n                                        <option value=\"job scheduler\">job scheduler</option>\n                                        <option value=\"entity + menu\">entity + menu</option>\n                                        <option value=\"others\">others</option>\n                                    </select>\n                                </div>\n                            </div>\n                            \n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Entity Description</label>\n                                    <input formControlName=\"entityDescription\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Open Url</label>\n                                    <input formControlName=\"openUrl\" class=\"form-control\"\n                                        type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Check Authorization</label>\n                                    <select class=\"form-control\" formControlName=\"chkAuthorization\" > \n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"YES\">Yes</option>\n                                        <option value=\"NO\">No</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Check Authorization Char</label>\n                                    <select class=\"form-control\" formControlName=\"chkAuthorizationChar\" > \n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"C\">Create</option>\n                                        <option value=\"R\">Read</option>\n                                        <option value=\"U\">Update</option>\n                                        <option value=\"D\">Delete</option>\n                                        <option value=\"R\">Query</option>\n                                        <option value=\"A\">Approved</option>\n                                        <option value=\"S\">Submit</option>\n                                        <option value=\"I\">Import</option>\n                                        <option value=\"E\">Export</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Admin Access Only</label>\n                                    <select class=\"form-control\" formControlName=\"adminAccessOnly\" > \n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"true\">Yes</option>\n                                        <option value=\"false\">No</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Super Admin Access Only</label>\n                                    <select class=\"form-control\" formControlName=\"superAdminAccessOnly\" > \n                                        <option value=\"\">-- Select --</option>\n                                        <option value=\"true\">Yes</option>\n                                        <option value=\"false\">No</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label>Sequence</label>\n                                    <input formControlName=\"sequence\" class=\"form-control\"\n                                        type=\"number\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"submit-section\" *ngIf=\"isAddMode\">\n                            <button class=\"btn btn-primary submit-btn\" type=\"submit\">\n                                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                                Save\n                            </button>\n                        </div>\n                        <div class=\"submit-section\" *ngIf=\"!isAddMode\">\n                            <button class=\"btn btn-primary submit-btn\" type=\"submit\">\n                                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                                Update\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!-- /Page Content -->\n<ngx-spinner bdColor=\"rgba(255,255,255,0.5)\" size=\"medium\" color=\"#667eea\" type=\"ball-clip-rotate\" [fullScreen]=\"true\">\n    <p style=\"color: black\"> Processing... </p>\n</ngx-spinner>");

/***/ }),

/***/ "tByZ":
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave/components/leave-config/leave-config.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6ImxlYXZlLWNvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "vzxH":
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/users/create-user/create-user.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ylti":
/*!*********************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/systems/components/list-sys-res-def/list-sys-res-def.component.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n/* ================= Default Template Color ================== */\r\n\r\n\r\nxx-.form-control {\r\n    border-color: #e3e3e3;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n    border-color: #ccc;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n}\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n/* ================= Green Color ============================= */\r\n\r\n\r\nxx-input.form-control {\r\n    border-color: #d4cdcd;\r\n    border-left: 3px solid green;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n\tborder-color: #37a000;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\n/* ================== Blue Color ============================== */\r\n\r\n\r\nxx-input.form-control {\r\n    border-color: #66afe9;\r\n    border-left: 3px solid #66afe9;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\nxx-.form-control:focus {\r\n   border-color: #66afe9;\r\n   outline: 0;\r\n   box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n}\r\n\r\n\r\n/* .ng-select.custom {\r\n    border-color: #667eea;\r\n\t\r\n}\r\n.ng-select.custom .ng-select-container  {            \r\n    min-height: 100px;\r\n    border-radius: 0;\r\n   \r\n}\r\n.ng-select.custom ::ng-deep .ng-select-container  {            \r\n    min-height: 0px;\r\n    border-radius: 0;\r\n}\r\nng-select.ng-invalid.ng-touched .ng-select-container {\r\n    border-color: #dc3545;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px #fde6e8;\r\n} */\r\n\r\n\r\ntr.selected td {\r\n    background-color: #66afe9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc3lzLXJlcy1kZWYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZDs7O0FBR0EsZ0VBQWdFOzs7QUFDaEU7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBSUEsZ0VBQWdFOzs7QUFDaEU7Q0FDQyxxQkFBcUI7Q0FDckIsOEJBQThCO0lBQzNCLGdCQUFnQjtBQUNwQjs7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUVWLDJFQUEyRTtDQUMzRTs7O0FBSUQsZ0VBQWdFOzs7QUFDaEU7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUVWLDJFQUEyRTtDQUMzRTs7O0FBSUQsaUVBQWlFOzs7QUFDakU7SUFDSSxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7O0FBRUE7R0FDRyxxQkFBcUI7R0FDckIsVUFBVTtHQUVWLDJFQUEyRTtBQUM5RTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7OztBQUdIO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6Imxpc3Qtc3lzLXJlcy1kZWYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gRGVmYXVsdCBUZW1wbGF0ZSBDb2xvciA9PT09PT09PT09PT09PT09PT0gKi9cclxueHgtLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlM2UzZTM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG54eC0uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gUHVycGFsZSBDb2xvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaW5wdXQuZm9ybS1jb250cm9sLCBzZWxlY3QuZm9ybS1jb250cm9sLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICM2NjdlZWE7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNzA1Q0JBO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpOyBcclxuIH1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gR3JlZW4gQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxueHgtaW5wdXQuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q0Y2RjZDtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxueHgtLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMzdhMDAwO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpOyBcclxuIH1cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09IEJsdWUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbnh4LWlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NmFmZTk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM2NmFmZTk7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxueHgtLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgb3V0bGluZTogMDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gOCUpLCAwIDAgOHB4IHJnYigxMDIgMTc1IDIzMyAvIDYwJSk7XHJcbiAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbn1cclxuXHJcblxyXG4vKiAubmctc2VsZWN0LmN1c3RvbSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0XHJcbn1cclxuLm5nLXNlbGVjdC5jdXN0b20gLm5nLXNlbGVjdC1jb250YWluZXIgIHsgICAgICAgICAgICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgXHJcbn1cclxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyICB7ICAgICAgICAgICAgXHJcbiAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbm5nLXNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggI2ZkZTZlODtcclxufSAqL1xyXG5cclxuXHJcbnRyLnNlbGVjdGVkIHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmFmZTk7XHJcbn0iXX0= */");

/***/ }),

/***/ "yplk":
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/settings/theme-settings/theme-settings.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_theme_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./theme-settings.component.html */ "2shl");
/* harmony import */ var _theme_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-settings.component.css */ "/UcY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






let ThemeSettingsComponent = class ThemeSettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.themeSettings = this.formBuilder.group({
            websiteName: ["Dreamguy's Technologies", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lightLogo: [""],
            favicon: [""],
        });
    }
    submitThemeSettings() {
        if (this.themeSettings.valid) {
            this.toastr.success("Theme settings is added", "Success");
        }
    }
};
ThemeSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ThemeSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-theme-settings",
        template: _raw_loader_theme_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_theme_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ThemeSettingsComponent);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map
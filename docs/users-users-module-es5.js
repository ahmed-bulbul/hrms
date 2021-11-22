(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
    /***/
    "BFmg":
    /*!***********************************************************!*\
      !*** ./src/app/all-modules/users/users-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: UsersRoutingModule */

    /***/
    function BFmg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
        return UsersRoutingModule;
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


      var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users.component */
      "ofeR");
      /* harmony import */


      var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-main/user-main.component */
      "Lx5J");

      var routes = [{
        path: "",
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        children: [{
          path: "user-main",
          component: _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_4__["UserMainComponent"]
        }]
      }];

      var UsersRoutingModule = function UsersRoutingModule() {
        _classCallCheck(this, UsersRoutingModule);
      };

      UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersRoutingModule);
      /***/
    },

    /***/
    "EHzB":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/users/user-main/user-main.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EHzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Users</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Users</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_user\"><i class=\"fa fa-plus\"></i>\r\n                    Add User</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <input type=\"text\" class=\"form-control floating\" (input)=\"searchName($event.target.value)\" (focusout) = \"rerender()\">\r\n                <label class=\"focus-label\">Name</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value = \"\">Select Company</option>\r\n                    <option value = \"Global Technologies\">Global Technologies</option>\r\n                    <option value = \"Delta Infotech\">Delta Infotech</option>\r\n                </select>\r\n                <label class=\"focus-label\">Company</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"select form-control\" (input)=\"searchRole($event.target.value)\">\r\n                    <option value = \"\">Select Roll</option>\r\n                    <option value = \"Web Developer\">Web Developer</option>\r\n                    <option value = \"Web Designer\">Web Designer</option>\r\n                    <option value = \"Android Developer\">Android Developer</option>\r\n                    <option value = \"Ios Developer\">Ios Developer</option>\r\n                </select>\r\n                <label class=\"focus-label\">Role</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a  class=\"btn btn-success btn-block\"> Search </a>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"class=\"table table-striped custom-table datatable\"  id = \"datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Company</th>\r\n                            <th>Created Date</th>\r\n                            <th>Role</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let users of allUsers;let i = index\">\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink = \"/employees/employeeprofile\" class=\"avatar\"><img src=\"assets/img/profiles/avatar-{{ i + 1 }}.jpg\"\r\n                                            alt=\"\"></a>\r\n                                    <a routerLink = \"/employees/employeeprofile\">{{users.name}} <span>{{users.designation}}</span></a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{users.email}}</td>\r\n                            <td>{{users.company}}</td>\r\n                            <td>1 Jan 2013</td>\r\n                            <td>\r\n                                <span class=\"badge bg-inverse-danger\">{{users.role}}</span>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#edit_user\" (click)=\"edit(users.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#delete_user\" (click)=\"tempId = users.id\"><i class=\"fa fa-trash-o m-r-5\"></i>\r\n                                            Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allUsers.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add User Modal -->\r\n<div id=\"add_user\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add User</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addUsersSubmit()\" [formGroup]=\"addUsers\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Username <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\"\r\n                                formControlName=\"addUserName\">\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\"\r\n                                    class=\"text-danger\"> *User name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\" [class.invalid]=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\"\r\n                                formControlName=\"addEmail\">\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Confirm Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Phone </label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Role</label>\r\n                                <select class=\"select form-control\" [class.invalid]=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\"\r\n                                formControlName=\"addRole\">\r\n                                    <option>Admin</option>\r\n                                    <option>Client</option>\r\n                                    <option>Employee</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\"\r\n                                    class=\"text-danger\"> *Role is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company</label>\r\n                                <select class=\"select form-control\" [class.invalid]=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\"\r\n                                formControlName=\"addCompany\">\r\n                                    <option>Global Technologies</option>\r\n                                    <option>Delta Infotech</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\"\r\n                                    class=\"text-danger\"> *Company is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee ID <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control floating\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive m-t-15\">\r\n                        <table class=\"table table-striped custom-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Module Permission</th>\r\n                                    <th class=\"text-center\">Read</th>\r\n                                    <th class=\"text-center\">Write</th>\r\n                                    <th class=\"text-center\">Create</th>\r\n                                    <th class=\"text-center\">Delete</th>\r\n                                    <th class=\"text-center\">Import</th>\r\n                                    <th class=\"text-center\">Export</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Employee</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Holidays</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Leaves</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Events</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add User Modal -->\r\n\r\n<!-- Edit User Modal -->\r\n<div id=\"edit_user\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit User</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editUsersSubmit()\" [formGroup]=\"editUsers\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" value=\"John\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input class=\"form-control\" value=\"Doe\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Username <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\"\r\n                                formControlName=\"editUsersName\">\r\n\r\n                                 <div\r\n                                    *ngIf=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\"\r\n                                        class=\"text-danger\"> *User name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\" [class.invalid]=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\"\r\n                                formControlName=\"editEmail\">\r\n\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Confirm Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Phone </label>\r\n                                <input class=\"form-control\" value=\"9876543210\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Role</label>\r\n                                <select class=\"select form-control\" [class.invalid]=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\"\r\n                                formControlName=\"editRole\">\r\n                                    <option>Admin</option>\r\n                                    <option>Client</option>\r\n                                    <option selected>Employee</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\"\r\n                                    class=\"text-danger\"> *Role is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company</label>\r\n                                <select class=\"select form-control\"  [class.invalid]=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\"\r\n                                formControlName=\"editCompany\">\r\n                                    <option>Global Technologies</option>\r\n                                    <option>Delta Infotech</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\"\r\n                                    class=\"text-danger\"> *Company is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee ID <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" value=\"FT-0001\" class=\"form-control floating\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive m-t-15\">\r\n                        <table class=\"table table-striped custom-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Module Permission</th>\r\n                                    <th class=\"text-center\">Read</th>\r\n                                    <th class=\"text-center\">Write</th>\r\n                                    <th class=\"text-center\">Create</th>\r\n                                    <th class=\"text-center\">Delete</th>\r\n                                    <th class=\"text-center\">Import</th>\r\n                                    <th class=\"text-center\">Export</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Employee</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Holidays</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Leaves</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Events</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit User Modal -->\r\n\r\n<!-- Delete User Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_user\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete User</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteUsers()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete User Modal -->\r\n</div>";
      /***/
    },

    /***/
    "Lx5J":
    /*!********************************************************************!*\
      !*** ./src/app/all-modules/users/user-main/user-main.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserMainComponent */

    /***/
    function Lx5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMainComponent", function () {
        return UserMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-main.component.html */
      "EHzB");
      /* harmony import */


      var _user_main_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-main.component.css */
      "qLHl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _all_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../all-modules.service */
      "IhMt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");

      var UserMainComponent = /*#__PURE__*/function () {
        function UserMainComponent(allModuleService, formBuilder, toastr) {
          _classCallCheck(this, UserMainComponent);

          this.allModuleService = allModuleService;
          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.dtOptions = {};
          this.url = "users";
          this.allUsers = [];
          this.rows = [];
          this.srch = [];
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        }

        _createClass(UserMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
            this.getUsers(); // Add Provident Form Validation And Getting Values

            this.addUsers = this.formBuilder.group({
              addUserName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              addEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              addRole: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              addCompany: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }); // Edit Provident Form Validation And Getting Values

            this.editUsers = this.formBuilder.group({
              editUsersName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editRole: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editCompany: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }); // for data table configuration

            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              dom: "lrtip"
            };
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.dtTrigger.next();
            }, 1000);
          } // manually rendering Data table

        }, {
          key: "rerender",
          value: function rerender() {
            var _this2 = this;

            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then(function (dtInstance) {
              dtInstance.destroy();
            });
            this.allUsers = [];
            this.getUsers();
            setTimeout(function () {
              _this2.dtTrigger.next();
            }, 1000);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this3 = this;

            this.allModuleService.get(this.url).subscribe(function (data) {
              _this3.allUsers = data;
              _this3.rows = _this3.allUsers;
              _this3.srch = _toConsumableArray(_this3.rows);
            });
          } // Add Provident Modal Api Call

        }, {
          key: "addUsersSubmit",
          value: function addUsersSubmit() {
            var _this4 = this;

            if (this.addUsers.valid) {
              var obj = {
                name: this.addUsers.value.addUserName,
                designation: "Web Designer",
                email: this.addUsers.value.addEmail,
                role: this.addUsers.value.addRole,
                company: this.addUsers.value.addCompany
              };
              this.allModuleService.add(obj, this.url).subscribe(function (data) {
                $("#datatable").DataTable().clear();

                _this4.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();
                });

                _this4.dtTrigger.next();
              });
              this.getUsers();
              $("#add_user").modal("hide");
              this.addUsers.reset();
              this.toastr.success("Users is added", "Success");
            } else {
              this.toastr.warning("Mandatory fields required", "");
            }
          } // Edit Provident Modal Api Call

        }, {
          key: "editUsersSubmit",
          value: function editUsersSubmit() {
            var _this5 = this;

            if (this.editUsers.valid) {
              var obj = {
                name: this.editUsers.value.editUsersName,
                designation: "Android Developer",
                email: this.editUsers.value.editEmail,
                company: this.editUsers.value.editCompany,
                role: this.editUsers.value.editRole,
                id: this.editId
              };
              this.allModuleService.update(obj, this.url).subscribe(function (data1) {
                $("#datatable").DataTable().clear();

                _this5.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();
                });

                _this5.dtTrigger.next();
              });
              this.getUsers();
              $("#edit_user").modal("hide");
              this.toastr.success("Users is edited", "Success");
            } else {
              this.toastr.warning("Mandatory fields required", "");
            }
          }
        }, {
          key: "edit",
          value: function edit(value) {
            this.editId = value;
            var index = this.allUsers.findIndex(function (item) {
              return item.id === value;
            });
            var toSetValues = this.allUsers[index];
            this.editUsers.setValue({
              editUsersName: toSetValues.name,
              editEmail: toSetValues.email,
              editRole: toSetValues.role,
              editCompany: toSetValues.company
            });
          } // Delete Provident Modal Api Call

        }, {
          key: "deleteUsers",
          value: function deleteUsers() {
            var _this6 = this;

            this.allModuleService["delete"](this.tempId, this.url).subscribe(function (data) {
              $("#datatable").DataTable().clear();

              _this6.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });

              _this6.dtTrigger.next();
            });
            this.getUsers();
            $("#delete_user").modal("hide");
            this.toastr.success("Users is deleted", "Success");
          } //search by name

        }, {
          key: "searchName",
          value: function searchName(val) {
            var _this$rows;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows = this.rows).push.apply(_this$rows, _toConsumableArray(temp));
          } //search by name

        }, {
          key: "searchStatus",
          value: function searchStatus(val) {
            var _this$rows2;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.company.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows2 = this.rows).push.apply(_this$rows2, _toConsumableArray(temp));
          } //search by name

        }, {
          key: "searchRole",
          value: function searchRole(val) {
            var _this$rows3;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.role.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows3 = this.rows).push.apply(_this$rows3, _toConsumableArray(temp));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return UserMainComponent;
      }();

      UserMainComponent.ctorParameters = function () {
        return [{
          type: _all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      };

      UserMainComponent.propDecorators = {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      UserMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-main",
        template: _raw_loader_user_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_main_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], UserMainComponent);
      /***/
    },

    /***/
    "Zqwr":
    /*!***************************************************!*\
      !*** ./src/app/all-modules/users/users.module.ts ***!
      \***************************************************/

    /*! exports provided: UsersModule */

    /***/
    function Zqwr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
        return UsersModule;
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


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-routing.module */
      "BFmg");
      /* harmony import */


      var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users.component */
      "ofeR");
      /* harmony import */


      var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-main/user-main.component */
      "Lx5J");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var UsersModule = function UsersModule() {
        _classCallCheck(this, UsersModule);
      };

      UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__["UserMainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      })], UsersModule);
      /***/
    },

    /***/
    "ahv6":
    /*!*******************************************************!*\
      !*** ./src/app/all-modules/users/users.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function ahv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "ofeR":
    /*!******************************************************!*\
      !*** ./src/app/all-modules/users/users.component.ts ***!
      \******************************************************/

    /*! exports provided: UsersComponent */

    /***/
    function ofeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./users.component.html */
      "rp3M");
      /* harmony import */


      var _users_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users.component.css */
      "ahv6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(ngZone) {
          var _this7 = this;

          _classCallCheck(this, UsersComponent);

          this.ngZone = ngZone;

          window.onresize = function (e) {
            _this7.ngZone.run(function () {
              _this7.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(UsersComponent, [{
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

        return UsersComponent;
      }();

      UsersComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], UsersComponent);
      /***/
    },

    /***/
    "qLHl":
    /*!*********************************************************************!*\
      !*** ./src/app/all-modules/users/user-main/user-main.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function qLHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1haW4uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "rp3M":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/users/users.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function rp3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<!-- <div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!--   </div> -->\r\n    <!-- /Page Wrapper -->\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=users-users-module-es5.js.map
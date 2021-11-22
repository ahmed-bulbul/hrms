(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i-recruitment-i-recruitment-module"], {
    /***/
    "+VvE":
    /*!*****************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/list/vacancy.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: VacancyListComponent */

    /***/
    function VvE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VacancyListComponent", function () {
        return VacancyListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vacancy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vacancy.component.html */
      "47hU");
      /* harmony import */


      var _vacancy_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vacancy.component.css */
      "FeJz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../service/irecruitment.service */
      "r4Tw");

      var VacancyListComponent = /*#__PURE__*/function () {
        function VacancyListComponent(irecservice, spinnerService, route, router, toastr, datePipe) {
          _classCallCheck(this, VacancyListComponent);

          this.irecservice = irecservice;
          this.spinnerService = spinnerService;
          this.route = route;
          this.router = router;
          this.toastr = toastr;
          this.datePipe = datePipe; // cores

          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]("en-US"); // list

          this.listData = [];
          this.testData = " Hello Test";
          this.currentDate = new Date();
          this.cValue = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.currentDate, 'yyyy,MM,dd', 'en-US');
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

        _createClass(VacancyListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // set init params
            this.myFromGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              pageSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
            });
            this.myFromGroup.get('pageSize').setValue(this.configPgn.pageSize); // bind event & action
            //this.bindFromFloatingLabel();
            // get List Data

            this.getListData();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            setTimeout(function () {//
            }, 1000);
          } // private bindFromFloatingLabel(){
          //   var self = this;
          //   // for floating label
          //   if ($(".floating").length > 0) {
          //     $(".floating")
          //       .on("focus blur", function (e) {
          //         $(this)
          //           .parents(".form-focus")
          //           .toggleClass("focused", e.type === "focus" || this.value.length > 0);
          //       })
          //       .trigger("blur");
          //   }
          //   $('.filter-row').find('input, select, textarea').keyup(function(e){
          //     console.log(e.keyCode)
          //     if(e.keyCode == 13){
          //       self.getSearchData();
          //     }
          //   });
          // }
          // // list & search methods --------------------------------------------------------------------------------------
          // searchByFromDate(val) {
          //   let myFromDateIso = this.pipe.transform(val, "yyyy-MM-dd");
          //   this.srcFromDate = myFromDateIso;
          //   console.log(myFromDateIso);
          //   this.bindFromFloatingLabel();
          // }
          // searchByToDate(val) {
          //   let myToDateIso = this.pipe.transform(val, "yyyy-MM-dd");
          //   this.srcToDate = myToDateIso;
          //   console.log(myToDateIso);
          //   this.bindFromFloatingLabel();
          // }

        }, {
          key: "searchByEmpCode",
          value: function searchByEmpCode(val) {
            console.log(val);
            this.srcEmpCode = val;
          }
        }, {
          key: "searchBySearchButton",
          value: function searchBySearchButton() {
            console.log(this.srcFromDate);
            console.log(this.srcToDate);
            console.log(this.srcEmpCode); // call get list method

            this.getListData();
          }
        }, {
          key: "getSearchData",
          value: function getSearchData() {
            this.getListData();
          }
        }, {
          key: "getUserQueryParams",
          value: function getUserQueryParams(page, pageSize) {
            var params = {};

            if (page) {
              params["pageNum"] = page - 0;
            }

            if (pageSize) {
              params["pageSize"] = pageSize;
            } // push other attributes


            if (this.srcEmpCode) {
              params["empCode"] = this.srcEmpCode;
            }

            if (this.srcFromDate && this.srcToDate) {
              params["fromDate"] = this.srcFromDate;
              params["toDate"] = this.srcToDate;
            }

            return params;
          }
        }, {
          key: "getListData",
          value: function getListData() {
            var _this = this;

            var apiURL = this.baseUrl + "/api/vacancy/getList";
            var queryParams = {};
            var params = this.getUserQueryParams(this.configPgn.pageNum, this.configPgn.pageSize);
            queryParams = params;
            this.spinnerService.show();
            this.irecservice.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this.listData = response.objectList;
              _this.configPgn.totalItem = response.totalItems;
              _this.configPgn.totalItems = response.totalItems;

              _this.setDisplayLastSequence();

              _this.spinnerService.hide();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteEnityData",
          value: function deleteEnityData(dataId) {
            var _this2 = this;

            var apiURL = this.baseUrl + "/api/vacancy/delete/" + dataId;
            console.log(apiURL);
            var formData = {};
            formData.rEntityName = "Vacancy";
            formData.rActiveOperation = "delete";
            this.spinnerService.show();
            this.irecservice.sendDeleteRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this2.spinnerService.hide();

              $("#delete_entity").modal("hide");

              _this2.toastr.success("Successfully item is deleted", "Success");

              _this2.getListData();
            }, function (error) {
              console.log(error);

              _this2.spinnerService.hide();
            });
          } // pagination handling methods start -----------------------------------------------------------------------

        }, {
          key: "setDisplayLastSequence",
          value: function setDisplayLastSequence() {
            this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;

            if (this.listData.length < this.configPgn.pageSize) {
              this.configPgn.pngDiplayLastSeq = (this.configPgn.pageNum - 1) * this.configPgn.pageSize + this.configPgn.pageSize;
            }

            if (this.configPgn.totalItem < this.configPgn.pngDiplayLastSeq) {
              this.configPgn.pngDiplayLastSeq = this.configPgn.totalItem;
            }
          }
        }, {
          key: "handlePageChange",
          value: function handlePageChange(event) {
            this.configPgn.pageNum = event; // set for ngx

            this.configPgn.currentPage = this.configPgn.pageNum;
            this.getListData();
          }
        }, {
          key: "handlePageSizeChange",
          value: function handlePageSizeChange(event) {
            this.configPgn.pageSize = event.target.value;
            this.configPgn.pageNum = 1; // set for ngx

            this.configPgn.itemsPerPage = this.configPgn.pageSize;
            this.getListData();
          } // pagination handling methods end -------------------------------------------------------------------------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// Do not forget to unsubscribe the event
          }
        }]);

        return VacancyListComponent;
      }();

      VacancyListComponent.ctorParameters = function () {
        return [{
          type: _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_10__["IrecruitmentService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      VacancyListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-vacancy',
        template: _raw_loader_vacancy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: [_vacancy_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_irecruitment_service__WEBPACK_IMPORTED_MODULE_10__["IrecruitmentService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], VacancyListComponent);
      /***/
    },

    /***/
    "0jEk":
    /*!*******************************************!*\
      !*** ./src/app/sharing/sharing.module.ts ***!
      \*******************************************/

    /*! exports provided: SharingModule */

    /***/
    function jEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharingModule", function () {
        return SharingModule;
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


      var src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/assets/pipes/custom-date.pipe */
      "5HOg");

      var SharingModule = function SharingModule() {
        _classCallCheck(this, SharingModule);
      };

      SharingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"]],
        exports: [src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomDatePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], SharingModule);
      /***/
    },

    /***/
    "47hU":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/i-recruitment/vacancy/list/vacancy.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Vacancy Element</h3>\n                <ul class=\"breadcrumb\">\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <div class=\"btn-group btn-group\">\n                    <button class=\"btn btn-white\">Excel</button>\n                    <button class=\"btn btn-white\">PDF</button>\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n    <!-- Search Filter -->\n    <div class=\"card mb-2\" style=\"background-color:transparent;\">\n        <div class=\"card-body p-3\">\n\n            <div class=\"row filter-row\">\n\n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-2 col-12\">\n                    <div class=\"form-group form-focus\">\n                        <input type=\"text\" class=\"form-control floating\" (input)=\"searchByEmpCode($event.target.value)\">\n                        <label class=\"focus-label\">Employee Code</label>\n                    </div>\n                </div>\n                \n            \n                <div class=\"col-sm-6 col-md-3 col-lg-3 col-xl-3 col-12\">\n                    <a  class=\"btn btn-success btn-block\" (click)=\"searchBySearchButton()\" > Search </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- /Search Filter -->\n\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <div class=\"card-tools\">\n                         <a routerLink = \"/irecruitment/vacancy/create\" class=\"btn btn-outline-primary\"><i class=\"fa fa-plus\"></i> New &nbsp;&nbsp;&nbsp;</a>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n\n                    <div class=\"table-responsive\">\n\n                        <div class=\"d-flex justify-content-start pb-1\">\n                            <div class=\"pgn-displayDataInfo\">\n                                <span class=\"page-item disabled\">Displaying ( {{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (1) ) }}  to {{configPgn.pngDiplayLastSeq}} of {{configPgn.totalItem}} ) entries</span>\n                            </div>\n                        </div>\n\n                        <table id=\"genListTable\" class=\"table table-striped custom-table\" >\n                            <thead>\n                                <tr >\n                                    <th>SL</th>\n                                    <th class=\"d-none\">TB_ROW_ID</th>\n                                    <th>Title</th>\n                                    \n                                    <th>jobType</th>\n                                    <th>Salary Range (৳)</th>\n                                    \n                                    <th>Experience</th>\n                                    \n                                    <th>Created at</th>\n                                    <th>Deadline</th>\n                                    <th>Status</th>\n                                    <th>Total Vacancy</th>\n                                    <th>Relevant Education</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead> \n                            <tbody>\n\n                                <tr *ngFor=\"let thisObj of listData | paginate : configPgn;  let i = index\" [class.active]=\"i == currentIndex\" >\n                                    <td>{{ ( ((configPgn.pageNum-1) * configPgn.pageSize) + (i+1) ) }}  </td>\n                                    <td *ngIf=\"thisObj.active == 1\" class=\"text-success\"><i class=\"fa fa-toggle-on\"></i> {{thisObj.title}}</td>\n                                    <td *ngIf=\"thisObj.active == 0\" class=\"text-danger\"><i class=\"fa fa-toggle-off\"></i> {{thisObj.title}}</td>\n                                    \n                                    <td>{{thisObj.jobType}}</td>\n                                    <td>{{thisObj.salMin}}  - {{thisObj.salMax}}  </td>\n                                   \n                                    <td>{{thisObj.noExperience}}  year(s)</td>\n                                    \n                                    <td>{{thisObj.creationDateTime | date }} </td>\n                                    <td>{{ thisObj.requiredWithin | date }}</td>\n                                    <td>\n                                        \n                                        <div *ngIf=\"(thisObj.requiredWithin | date: 'yyyy,MM,dd') == (cValue); else template_Expired\" class=\"text-primary\">\n                                            <i class=\"fa fa-exclamation-triangle\"> </i> Last Date\n                                  </div>\n                                  \n                                  <ng-template #template_Expired>\n                                        <div class=\"expired text-success\" *ngIf=\"(thisObj.requiredWithin | date: 'yyyy,MM,dd') > (cValue); else third\">\n                                            <i class=\"fa fa-check\"> </i> Running\n                                        </div>\n                                  </ng-template>\n                                  <ng-template #third> <div class=\"expired text-danger\"><i class=\"fa fa-times \"> </i> Date Over</div></ng-template>\n\n\n                                </td>\n\n\n                                    <td>{{thisObj.vcncyTot}}</td>\n                                    <td>{{thisObj.relevantEducation}}</td>\n\n                                    \n                                    <td>\n                                        <a class=\"btn btn-sm btn-primary\" routerLink = \"/irecruitment/vacancy/show/{{thisObj.id}}\">View</a> &nbsp;\n                                        <a class=\"btn btn-sm btn-info\" routerLink = \"/irecruitment/vacancy/edit/{{thisObj.id}}\"><i class=\"fa fa-pencil m-r-5\"></i></a>&nbsp;&nbsp;\n                                        <!-- <a class=\"btn btn-sm btn-danger\" (click)=\"deleteEnityData(thisObj.id)\"><i class=\"fa fa-trash-o m-r-5\"></i></a>&nbsp;&nbsp; -->\n                                        <a class=\"btn btn-sm btn-danger\"  \n                                            data-toggle=\"modal\"\n                                            data-target=\"#delete_entity\" \n                                            (click)=\"tempId = thisObj.id\">\n                                            <i class=\"fa fa-trash-o m-r-5\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n\n                                <tr *ngIf=\"listData.length === 0\">\n                                    <td colspan=\"10\">\n                                        <h5 style=\"text-align: center;\">No data found</h5>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n                        <div class=\"d-flex justify-content-end \">\n\n                            <div class=\"\" [formGroup]=\"myFromGroup\">\n                                Items per Page\n                                <select (change)=\"handlePageSizeChange($event)\" class=\"pgn-pageSizeOption\" formControlName=\"pageSize\">\n                                    <option *ngFor=\"let size of configPgn.pageSizes\" [value]=\"size\">\n                                        {{ size }}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <div class=\"pgn-pageSliceCt\">\n                                <pagination-controls \n                                    responsive=\"true\" \n                                    previousLabel=\"Prev\" \n                                    nextLabel=\"Next\" \n                                    (pageChange)=\"handlePageChange($event)\">\n                                </pagination-controls>\n                            </div>\n                            \n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n\n\n<!-- Delete Modal -->\n<div class=\"modal custom-modal fade\" id=\"delete_entity\" role=\"dialog\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"form-header\">\n                    <h3>Delete Item</h3>\n                    <p>Are you sure want to delete?</p>\n                </div>\n                <div class=\"modal-btn delete-action\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteEnityData(tempId)\">Delete</a>\n                        </div>\n                        <div class=\"col-6\">\n                            <a  data-dismiss=\"modal\"\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Delete Modal -->\n";
      /***/
    },

    /***/
    "5HOg":
    /*!**********************************************!*\
      !*** ./src/assets/pipes/custom-date.pipe.ts ***!
      \**********************************************/

    /*! exports provided: CustomDatePipe */

    /***/
    function HOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
        return CustomDatePipe;
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

      var CustomDatePipe = /*#__PURE__*/function () {
        function CustomDatePipe() {
          _classCallCheck(this, CustomDatePipe);
        }

        _createClass(CustomDatePipe, [{
          key: "transform",
          value: function transform(value) {
            var myDate = value;
            var changeFormat = myDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
            return new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(changeFormat, 'MMM d, y');
          }
        }]);

        return CustomDatePipe;
      }();

      CustomDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customDate'
      })], CustomDatePipe);
      /***/
    },

    /***/
    "6DIM":
    /*!**************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/edit/edit.component.ts ***!
      \**************************************************************************/

    /*! exports provided: EditComponent */

    /***/
    function DIM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit.component.html */
      "wMib");
      /* harmony import */


      var _edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.component.css */
      "HFEe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/irecruitment.service */
      "r4Tw");

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(formBuilder, datePipe, payrollService, route, router, spinnerService) {
          _classCallCheck(this, EditComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.payrollService = payrollService;
          this.route = route;
          this.router = router;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.myFormData = {};
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.setFormDefaultValues();
            this.initButtonsRippleEffect();
            this.getFormData();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              id: [""],
              title: [""],
              relevantEducation: [""],
              area: [""],
              jobLocation: [""],
              requiredWithin: [""],
              salMax: [""],
              salMin: [""],
              jobType: [""],
              vcncyTot: [""],
              noExperience: [""],
              jobNature: [""],
              spec: [""],
              jobResponsibility: [""],
              othersBenefit: [""],
              vcncMale: [""],
              vcncFemale: [""],
              negotiable: [""],
              ot: [""],
              active: [""]
            });
          }
        }, {
          key: "setFormDefaultValues",
          value: function setFormDefaultValues() {//
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            this.myForm.reset();
            this.setFormDefaultValues();
          }
        }, {
          key: "initButtonsRippleEffect",
          value: function initButtonsRippleEffect() {
            var createRipple = function createRipple(e) {
              var button = e.currentTarget;
              var x = e.clientX - e.target.getBoundingClientRect().left;
              var y = e.clientY - e.target.getBoundingClientRect().top; // Create span element

              var ripple = document.createElement("span"); // Position the span element

              ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
              ripple.style.left = "".concat(x, "px");
              ripple.style.top = "".concat(y, "px"); // Add span to the button 

              button.appendChild(ripple); // Remove span after 0.3s

              setTimeout(function () {
                ripple.remove();
              }, 1000);
            };

            var elements = document.querySelectorAll('.btn-ripple');
            elements.forEach(function (element) {
              element.addEventListener('click', function (e) {
                createRipple(e);
              });
            });
          }
        }, {
          key: "convertToISODateString",
          value: function convertToISODateString(dateStr_DD_MM_YYYY) {
            var dateComponents = dateStr_DD_MM_YYYY.split('-');
            return dateComponents[2] + "-" + dateComponents[1] + dateComponents[0];
          }
          /**
           * Read form data from API
           */

        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this3 = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/api/vacancy/get/" + id;
            var queryParams = {};
            queryParams.rEntityName = "Vacancy";
            queryParams.rActiveOpetation = "read";
            this.spinnerService.show();
            this.payrollService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this3.myFormData = response; // process date fields

              _this3.myFormData.activeStartDate = _this3.myFormData.activeStartDate ? _this3.datePipe.transform(_this3.myFormData.activeStartDate, "dd-MM-yyyy") : null;
              _this3.myFormData.activeEndDate = _this3.myFormData.activeEndDate ? _this3.datePipe.transform(_this3.myFormData.activeEndDate, "dd-MM-yyyy") : null;

              _this3.spinnerService.hide();

              _this3.myForm.patchValue(_this3.myFormData);
            }, function (error) {
              console.log(error);
            });
          }
          /**
           * Save form data
           */

        }, {
          key: "saveUpdatedFormData",
          value: function saveUpdatedFormData() {
            var _this4 = this;

            var apiURL = this.baseUrl + "/api/vacancy/update/" + this.myForm.value.id;
            console.log(apiURL);
            var formData = {};
            formData = this.myForm.value;
            formData.rEntityName = "Vacancy";
            formData.rActiveOperation = "update"; // process date fields

            formData.activeStartDate = formData.activeStartDate ? this.datePipe.transform(this.convertToISODateString(formData.activeStartDate), "yyyy-MM-dd") : null;
            formData.activeEndDate = formData.activeEndDate ? this.datePipe.transform(this.convertToISODateString(formData.activeEndDate), "yyyy-MM-dd") : null;
            this.spinnerService.show();
            this.payrollService.sendPutRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this4.spinnerService.hide();

              _this4.router.navigate(["/irecruitment/vacancy/list"], {
                relativeTo: _this4.route
              });
            }, function (error) {
              console.log(error);

              _this4.spinnerService.hide();
            });
          }
        }]);

        return EditComponent;
      }();

      EditComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      };

      EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])], EditComponent);
      /***/
    },

    /***/
    "7BPC":
    /*!******************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/create/create.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CreateVacancyComponent */

    /***/
    function BPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateVacancyComponent", function () {
        return CreateVacancyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create.component.html */
      "ozGu");
      /* harmony import */


      var _create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create.component.css */
      "9nnN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/irecruitment.service */
      "r4Tw");

      var CreateVacancyComponent = /*#__PURE__*/function () {
        function CreateVacancyComponent(formBuilder, datePipe, irecservice, route, router, spinnerService) {
          _classCallCheck(this, CreateVacancyComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.irecservice = irecservice;
          this.route = route;
          this.router = router;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
        }

        _createClass(CreateVacancyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.setFormDefaultValues();
            this.initButtonsRippleEffect();
            this.loadData();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              title: [""],
              relevantEducation: [""],
              area: [""],
              jobLocation: [""],
              requiredWithin: [""],
              salMax: [""],
              salMin: [""],
              jobType: [""],
              vcncyTot: [""],
              noExperience: [""],
              jobNature: [""],
              spec: [""],
              jobResponsibility: [""],
              othersBenefit: [""],
              vcncMale: [""],
              vcncFemale: [""],
              negotiable: [""],
              ot: [""],
              active: [""]
            });
          }
        }, {
          key: "setFormDefaultValues",
          value: function setFormDefaultValues() {
            var dt = new Date();
            var year = dt.getFullYear(); // // multiple
            // this.myForm.patchValue({
            //   year: year,
            // });
            // // single
            // this.myForm.controls.year.setValue(year);
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            this.myForm.reset();
            this.setFormDefaultValues();
          }
        }, {
          key: "initButtonsRippleEffect",
          value: function initButtonsRippleEffect() {
            var createRipple = function createRipple(e) {
              var button = e.currentTarget;
              var x = e.clientX - e.target.getBoundingClientRect().left;
              var y = e.clientY - e.target.getBoundingClientRect().top; // Create span element

              var ripple = document.createElement("span"); // Position the span element

              ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
              ripple.style.left = "".concat(x, "px");
              ripple.style.top = "".concat(y, "px"); // Add span to the button 

              button.appendChild(ripple); // Remove span after 0.3s

              setTimeout(function () {
                ripple.remove();
              }, 1000);
            };

            var elements = document.querySelectorAll('.btn-ripple');
            elements.forEach(function (element) {
              element.addEventListener('click', function (e) {
                createRipple(e);
              });
            });
          }
        }, {
          key: "myFormSubmit",
          value: function myFormSubmit() {
            var _this5 = this;

            var apiURL = this.baseUrl + "/api/vacancy/create";
            var formData = {};
            formData = this.myForm.value;
            formData.rActiveOperation = "Create"; // process date

            formData.activeStartDate = formData.activeStartDate ? this.datePipe.transform(formData.activeStartDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.activeEndDate = formData.activeEndDate ? this.datePipe.transform(formData.activeEndDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.spinnerService.show();
            this.irecservice.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this5.spinnerService.hide();

              _this5.router.navigate(["/irecruitment/vacancy/list"], {
                relativeTo: _this5.route
              });
            }, function (error) {
              console.log(error);

              _this5.spinnerService.hide();
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var apiURL = this.baseUrl + "/salaryProcess/start";
            var queryParams = {};
            queryParams.abc = "OK"; // this.irecservice.sendGetRequest(apiURL, queryParams).subscribe(
            //   (response: any) => {
            //   console.log(response);
            //   },
            //   (error) => console.log(error)
            // );
          }
        }]);

        return CreateVacancyComponent;
      }();

      CreateVacancyComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      };

      CreateVacancyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])], CreateVacancyComponent);
      /***/
    },

    /***/
    "9ckD":
    /*!***********************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/i-recruitment.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function ckD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpLXJlY3J1aXRtZW50LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "9nnN":
    /*!*******************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/create/create.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function nnN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\ninput.form-group {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n\r\n\r\nlabel {\r\n    font-weight: 600;\r\n    color: #555;\r\n}\r\n\r\n\r\n@media screen and (min-width: 600px) {\r\n\t.my-form .grid {\r\n\t  display: grid;\r\n\t  grid-gap: 1.5rem;\r\n\t}.my-form .grid-2 {\r\n\t\tgrid-template-columns: 1fr 1fr;\r\n\t  }\r\n\t}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkOzs7QUFHQSxnRUFBZ0U7OztBQUNoRTtDQUNDLHFCQUFxQjtDQUNyQiw4QkFBOEI7SUFDM0IsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQiw4QkFBOEI7SUFDM0IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBRVYsMkVBQTJFO0NBQzNFOzs7QUFHQTtJQUNHLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUNDO0NBQ0E7R0FDRSxhQUFhO0dBQ2IsZ0JBQWdCO0NBQ2xCLENBQUM7RUFDQSw4QkFBOEI7R0FDN0I7Q0FDRiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gUHVycGFsZSBDb2xvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaW5wdXQuZm9ybS1jb250cm9sLCBzZWxlY3QuZm9ybS1jb250cm9sLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcclxuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICM2NjdlZWE7XHJcbiAgICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5pbnB1dC5mb3JtLWdyb3VwIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcblxyXG5cclxuIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzU1NTtcclxufVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuXHQubXktZm9ybSAuZ3JpZCB7XHJcblx0ICBkaXNwbGF5OiBncmlkO1xyXG5cdCAgZ3JpZC1nYXA6IDEuNXJlbTtcclxuXHR9Lm15LWZvcm0gLmdyaWQtMiB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0ICB9XHJcblx0fVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    "F+LP":
    /*!*******************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/i-recruitment.module.ts ***!
      \*******************************************************************/

    /*! exports provided: IRecruitmentModule */

    /***/
    function FLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IRecruitmentModule", function () {
        return IRecruitmentModule;
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


      var _i_recruitment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./i-recruitment-routing.module */
      "ld9Y");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _i_recruitment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./i-recruitment.component */
      "ZJ4s");
      /* harmony import */


      var _vacancy_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./vacancy/create/create.component */
      "7BPC");
      /* harmony import */


      var _vacancy_list_vacancy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./vacancy/list/vacancy.component */
      "+VvE");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/sharing/sharing.module */
      "0jEk");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _vacancy_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./vacancy/edit/edit.component */
      "6DIM");
      /* harmony import */


      var _vacancy_show_show_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./vacancy/show/show.component */
      "jcVw");

      var IRecruitmentModule = function IRecruitmentModule() {
        _classCallCheck(this, IRecruitmentModule);
      };

      IRecruitmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_i_recruitment_component__WEBPACK_IMPORTED_MODULE_6__["IRecruitmentComponent"], _vacancy_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateVacancyComponent"], _vacancy_list_vacancy_component__WEBPACK_IMPORTED_MODULE_8__["VacancyListComponent"], _vacancy_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"], _vacancy_show_show_component__WEBPACK_IMPORTED_MODULE_15__["ShowComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _i_recruitment_routing_module__WEBPACK_IMPORTED_MODULE_3__["IRecruitmentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_10__["SharingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_11__["PickListModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], IRecruitmentModule);
      /***/
    },

    /***/
    "FeJz":
    /*!******************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/list/vacancy.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function FeJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* ================= Purpale Color =========================== */\r\n\r\n\r\n\r\n\r\n\r\ninput.form-control, select.form-control, textarea.form-control {\r\n\tborder-color: #667eea;\r\n\tborder-left: 3px solid #667eea;\r\n    box-shadow: none; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.form-control:focus {\r\n\tborder-color: #705CBA;\r\n\toutline: 0;\r\n\tbox-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); \r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhY2FuY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZDs7Ozs7O0FBTUEsZ0VBQWdFOzs7Ozs7QUFDaEU7Q0FDQyxxQkFBcUI7Q0FDckIsOEJBQThCO0lBQzNCLGdCQUFnQjtBQUNwQjs7Ozs7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsVUFBVTtDQUVWLDJFQUEyRTtDQUMzRSIsImZpbGUiOiJ2YWNhbmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09IFB1cnBhbGUgQ29sb3IgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LmZvcm0tY29udHJvbCwgc2VsZWN0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY3ZWVhO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTsgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzcwNUNCQTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2IoMTAyIDE3NSAyMzMgLyA2MCUpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA4JSksIDAgMCA4cHggcmdiKDEwMiAxNzUgMjMzIC8gNjAlKTsgXHJcbiB9XHJcbiAiXX0= */";
      /***/
    },

    /***/
    "HFEe":
    /*!***************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/edit/edit.component.css ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function HFEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Vlhj":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/i-recruitment/i-recruitment.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vlhj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{  }\">\n    <router-outlet></router-outlet>\n    </div>\n    <!-- /Page Wrapper -->";
      /***/
    },

    /***/
    "XPqt":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/i-recruitment/vacancy/show/show.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XPqt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Vacancy Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\"><a routerLink=\"/irecruitment/vacancy/list\">Vacancy</a></li>\n                    <li class=\"breadcrumb-item active\">{{myFormData.title}}</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/irecruitment/vacancy/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <!------->\n\n\n            <div class=\"container card\">\n                <div class=\"row\">\n                  <div class=\"col-lg-8\">\n                    <div class=\"job-content\">\n                      <h3 class=\"text-center text-info mt-4\"><i class=\"fa fa-briefcase\"> </i> {{myFormData.title}}</h3><hr>\n                      \n                      <p><b>No of Vacancies   :   </b>{{myFormData.vcncyTot}}</p>\n                      <p><b>Work Station: </b>{{myFormData.jobLocation}}, {{myFormData.area}}</p>\n                      <p><b> Context: </b> As a Full Stack Developer involved in back-end and front-end developing team. Took part in designing, building, maintaining, reviewing and supporting quality code and services.</p>\n                      \n                      <p><b>Job Description / Responsibilities</b>\n                        \n                    \n                      </p>\n                      <ul>\n                        {{myFormData.jobResponsibility}}\n                      </ul>\n\n\n                      <p><b>Job Nature</b> </p>\n                      <ul>\n                        <li> {{myFormData.jobNature}}</li>\n                      </ul>\n\n\n                      <p><b>Job Type</b></p>\n                      <ul>\n                        <li>{{myFormData.jobType}}</li>\n                      </ul>\n\n\n\n                      <p><b>Educational Requirements</b></p>\n                      <ul>\n                        <li>{{myFormData.relevantEducation}}</li>\n                      </ul>\n\n\n                      <p><b>Experience Requirements</b></p>\n                      <ul>\n                        <li>At least {{myFormData.noExperience}} year(s)</li>\n                          \n                      </ul>\n                      <p><b>Additional Job Requirements</b></p>\n                      <ul>\n                        <li>Both males and females are allowed to apply.</li>\n                        <li>Knowledge on Micro service Architecture implementation using spring and spring cloud.</li>\n                        <li>Should have strong knowledge of REST API.</li>\n                        <li>Should have experience in working on PostgreSQL database concepts such as locking, transactions, indexes, Shading, replication, schema design.</li>\n                        <li>Passion for Automated Testing - unit, integration, regression.</li>\n                        <li>Experienced user of Git, Maven, Jenkins, and CI/CD</li>\n                        <li>Strong logical/critical thinking abilities, especially analyzing existing database schema, application architectures, and developing a good understanding of data models.</li>\n                      </ul> \n                  <p><b>Gender : </b></p>\n                  <ul>\n                    <li *ngIf=\"myFormData.vcncMale==1\">Male <i class=\"fa fa-check text-success\"></i></li>\n                    <li *ngIf=\"myFormData.vcncFemale==1\">Female <i class=\"fa fa-check text-success\"></i></li>\n                  </ul>\n                  \n                  <p><b> Salary Range</b></p>\n                  <ul>\n                    <li>{{myFormData.salMin}}৳ - {{myFormData.salMax}}৳ <span *ngIf=\"myFormData.negotiable==1\" class=\"text-success\">(negotiable)</span></li>\n                  </ul>\n                  <p> <b>Published On</b></p>\n                  <ul>\n                    <i class=\"fa fa-calendar\"> </i> {{ myFormData.creationDateTime | date }}\n                  </ul>\n                <p><b>Application Dead Line</b></p>\n                <ul>\n                  <i class=\"fa fa-calendar\"> </i> {{ myFormData.requiredWithin | date }}\n                </ul>\n               \n                <p><b> Other Benifits</b></p>\n                <ul>\n                  <li>{{myFormData.othersBenefit}} </li>\n                  <li *ngIf=\"myFormData.ot == 1\">This Position will pay Over Time.</li>\n                </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"card mt-2\" style=\"background-color: #ddd;\">\n                      <div class=\"job-summery\">\n                        <h4 class=\"text-center\">Job Summary</h4>\n                        <table>\n                          <tr>\n                            <th>Published On</th>\n                            <td>:</td>\n                            <td> {{ myFormData.creationDateTime | date }}</td>\n                          </tr>\n                          <tr>\n                            <th>Vacancies</th>\n                            <td>:</td>\n                            <td>{{myFormData.vcncyTot}}</td>\n                          </tr>\n                          <tr>\n                            <th>Job Nature</th>\n                            <td>:</td>\n                            <td>{{myFormData.jobNature}}</td>\n                          </tr>\n                          \n                          <tr>\n                            <th>Experience</th>\n                            <td>:</td>\n                            <td>{{myFormData.noExperience}} Year/s</td>\n\n                          </tr>\n                          \n                          \n                          <tr>\n                            <th>Job Location</th>\n                            <td>:</td>\n                            <td>{{myFormData.jobLocation}}</td>\n                          </tr>\n                          <tr>\n                            <th>Area</th>\n                            <td>:</td>\n                            <td>{{myFormData.area}}</td>\n                          </tr>\n                          <tr>\n                            <th>Salary Range</th>\n                            <td>:</td>\n                            <td>{{myFormData.salMin}}৳ - {{myFormData.salMax}}৳  <span *ngIf=\"myFormData.negotiable==1\" class=\"text-success\">(negotiable)</span> </td>\n                          </tr>\n                          <tr>\n                            <th>Closing Date</th>\n                            <td>:</td>\n                            <td>{{ myFormData.requiredWithin | date }}</td>\n                          </tr>\n                         \n                        </table>\n                      </div>\n                     \n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"text-center\">\n                    <div class=\"guide text-center \">                                \n                      <div class=\"rba\">\n                          <h2>\n                            Apply Procedure\n                          </h2>\n                                                     \n                  Candidates possessing the requisite skills and qualifications should feel free to apply with Cover Letter &amp; Complete CV \n                </div>\n                     \n                      \n                    <div class=\"text-center\">\n                     Send your CV to <strong> hrm.corehr1@onedirectionbd.com</strong>  \n                    </div>\n                      <div>\n                          <span class=\"date\">\n                          Application Deadline : <strong>{{ myFormData.requiredWithin | date }}</strong>\n                          </span>\n                      </div>\n                      <div>\n                          <span class=\"date\">\n                           <b><em>(Please mention position along with department name in subject line)</em></b> \n                          </span>\n                      </div>\n                  \n              </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n            <!--------->\n    </div>";
      /***/
    },

    /***/
    "ZJ4s":
    /*!**********************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/i-recruitment.component.ts ***!
      \**********************************************************************/

    /*! exports provided: IRecruitmentComponent */

    /***/
    function ZJ4s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IRecruitmentComponent", function () {
        return IRecruitmentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_i_recruitment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./i-recruitment.component.html */
      "Vlhj");
      /* harmony import */


      var _i_recruitment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./i-recruitment.component.css */
      "9ckD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IRecruitmentComponent = /*#__PURE__*/function () {
        function IRecruitmentComponent() {
          _classCallCheck(this, IRecruitmentComponent);
        }

        _createClass(IRecruitmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResize",
          value: function onResize(event) {}
        }]);

        return IRecruitmentComponent;
      }();

      IRecruitmentComponent.ctorParameters = function () {
        return [];
      };

      IRecruitmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-i-recruitment',
        template: _raw_loader_i_recruitment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_i_recruitment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], IRecruitmentComponent);
      /***/
    },

    /***/
    "fkR1":
    /*!***************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/show/show.component.css ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function fkR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "jcVw":
    /*!**************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/vacancy/show/show.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ShowComponent */

    /***/
    function jcVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowComponent", function () {
        return ShowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show.component.html */
      "XPqt");
      /* harmony import */


      var _show_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show.component.css */
      "fkR1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/irecruitment.service */
      "r4Tw");

      var ShowComponent = /*#__PURE__*/function () {
        function ShowComponent(formBuilder, datePipe, payrollService, route, router, spinnerService) {
          _classCallCheck(this, ShowComponent);

          this.formBuilder = formBuilder;
          this.datePipe = datePipe;
          this.payrollService = payrollService;
          this.route = route;
          this.router = router;
          this.spinnerService = spinnerService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl;
          this.myFormData = {};
        }

        _createClass(ShowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
            this.setFormDefaultValues();
            this.initButtonsRippleEffect();
            this.getFormData();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.myForm = this.formBuilder.group({
              id: [""],
              title: [""],
              relevantEducation: [""],
              area: [""],
              jobLocation: [""],
              requiredWithin: [""],
              salMax: [""],
              salMin: [""],
              jobType: [""],
              vcncyTot: [""],
              noExperience: [""],
              jobNature: [""],
              spec: [""],
              jobResponsibility: [""],
              othersBenefit: [""],
              vcncMale: [""],
              vcncFemale: [""],
              negotiable: [""],
              isOt: [""],
              isActive: [""]
            });
          }
        }, {
          key: "setFormDefaultValues",
          value: function setFormDefaultValues() {//
          }
        }, {
          key: "resetFormValues",
          value: function resetFormValues() {
            this.myForm.reset();
            this.setFormDefaultValues();
          }
        }, {
          key: "initButtonsRippleEffect",
          value: function initButtonsRippleEffect() {
            var createRipple = function createRipple(e) {
              var button = e.currentTarget;
              var x = e.clientX - e.target.getBoundingClientRect().left;
              var y = e.clientY - e.target.getBoundingClientRect().top; // Create span element

              var ripple = document.createElement("span"); // Position the span element

              ripple.style.cssText = "position: absolute; background: #fff; transform: translate(-50%, -50%); pointer-events: none; border-radius: 50%; animation: animate 1s linear infinite;";
              ripple.style.left = "".concat(x, "px");
              ripple.style.top = "".concat(y, "px"); // Add span to the button 

              button.appendChild(ripple); // Remove span after 0.3s

              setTimeout(function () {
                ripple.remove();
              }, 1000);
            };

            var elements = document.querySelectorAll('.btn-ripple');
            elements.forEach(function (element) {
              element.addEventListener('click', function (e) {
                createRipple(e);
              });
            });
          }
          /**
           * Read form data from API
           */

        }, {
          key: "getFormData",
          value: function getFormData() {
            var _this6 = this;

            var id = this.route.snapshot.params.id;
            var apiURL = this.baseUrl + "/api/vacancy/get/" + id;
            var queryParams = {};
            queryParams.rEntityName = "Vacancy";
            queryParams.rActiveOpetation = "read";
            this.spinnerService.show();
            this.payrollService.sendGetRequest(apiURL, queryParams).subscribe(function (response) {
              _this6.myFormData = response;

              _this6.spinnerService.hide();

              _this6.myForm.patchValue(_this6.myFormData);
            }, function (error) {
              console.log(error);
            });
          }
          /**
           * Save form data
           */

        }, {
          key: "saveUpdatedFormData",
          value: function saveUpdatedFormData() {
            var _this7 = this;

            var apiURL = this.baseUrl + "/api/vacancy/create";
            var formData = {};
            formData = this.myForm.value;
            formData.rActiveOperation = "Create"; // process date

            formData.activeStartDate = formData.activeStartDate ? this.datePipe.transform(formData.activeStartDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            formData.activeEndDate = formData.activeEndDate ? this.datePipe.transform(formData.activeEndDate, "yyyy-MM-dd").toString().slice(0, 10) : null;
            this.spinnerService.show();
            this.payrollService.sendPostRequest(apiURL, formData).subscribe(function (response) {
              console.log(response);

              _this7.spinnerService.hide();

              _this7.router.navigate(["/irecruitment/vacancy/list"], {
                relativeTo: _this7.route
              });
            }, function (error) {
              console.log(error);

              _this7.spinnerService.hide();
            });
          }
        }]);

        return ShowComponent;
      }();

      ShowComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      };

      ShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-show',
        template: _raw_loader_show_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _service_irecruitment_service__WEBPACK_IMPORTED_MODULE_9__["IrecruitmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])], ShowComponent);
      /***/
    },

    /***/
    "ld9Y":
    /*!***************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/i-recruitment-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: IRecruitmentRoutingModule */

    /***/
    function ld9Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IRecruitmentRoutingModule", function () {
        return IRecruitmentRoutingModule;
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


      var _i_recruitment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./i-recruitment.component */
      "ZJ4s");
      /* harmony import */


      var _vacancy_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vacancy/create/create.component */
      "7BPC");
      /* harmony import */


      var _vacancy_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vacancy/edit/edit.component */
      "6DIM");
      /* harmony import */


      var _vacancy_list_vacancy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vacancy/list/vacancy.component */
      "+VvE");
      /* harmony import */


      var _vacancy_show_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./vacancy/show/show.component */
      "jcVw");

      var routes = [{
        path: "",
        component: _i_recruitment_component__WEBPACK_IMPORTED_MODULE_3__["IRecruitmentComponent"],
        children: [{
          path: "vacancy/list",
          component: _vacancy_list_vacancy_component__WEBPACK_IMPORTED_MODULE_6__["VacancyListComponent"]
        }, {
          path: "vacancy/create",
          component: _vacancy_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateVacancyComponent"]
        }, {
          path: "vacancy/edit/:id",
          component: _vacancy_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
        }, {
          path: "vacancy/show/:id",
          component: _vacancy_show_show_component__WEBPACK_IMPORTED_MODULE_7__["ShowComponent"]
        }]
      }];

      var IRecruitmentRoutingModule = function IRecruitmentRoutingModule() {
        _classCallCheck(this, IRecruitmentRoutingModule);
      };

      IRecruitmentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IRecruitmentRoutingModule);
      /***/
    },

    /***/
    "ozGu":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/i-recruitment/vacancy/create/create.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ozGu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Vacancy Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\">Create Vacancy</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/irecruitment/vacancy/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n\n                   \n\n                    <form novalidate (ngSubmit)=\"myFormSubmit()\" [formGroup]=\"myForm\">\n                        <h2 class=\"text-center\">Vacancy Form</h2>\n                    <div class=\"row jumbotron\">\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"name-f\">Job Title</label>\n                            <input type=\"text\" class=\"form-control\"  id=\"name-f\" placeholder=\"Enter job title.\" formControlName=\"title\" >\n                           \n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"name-l\">Relevant Education</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name-l\" placeholder=\"Enter Relevant Subject\" formControlName=\"relevantEducation\" >\n                        </div>\n                        \n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"Date\">Job Area</label>\n                            <input type=\"text\"  class=\"form-control\" id=\"Date\" placeholder=\"Job area\" formControlName=\"area\">\n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"address-1\">Job Location</label>\n                            <input type=\"text\" class=\"form-control\"  id=\"address-1\" placeholder=\"Enter job Location\" formControlName=\"jobLocation\">\n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"Date\">Application Deadline</label>\n                            <input type=\"Date\"  class=\"form-control\" id=\"Date\" placeholder=\"\" formControlName=\"requiredWithin\">\n                        </div>\n                        \n\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"State\">Salary Maximum</label>\n                            <input type=\"number\" class=\"form-control\"  id=\"State\" placeholder=\"Enter Maximum Salary\"  min=\"1\" formControlName=\"salMax\">\n                        </div>\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"zip\">Salary Minimum </label> <label class=\"float-right\" for=\"\">\n                                <input type=\"checkbox\" value=\"1\" formControlName=\"negotiable\" />\n                                 (Negotiable)\n                              </label> \n                            <input type=\"number\" class=\"form-control\" id=\"zip\" placeholder=\"Enter Minimum Salary\" min=\"1\" formControlName=\"salMin\">\n                        </div>\n                       \n\n\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Job Type</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter Job Type\" formControlName=\"jobType\">\n                        </div>\n\n\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"State\">Total Vacancy</label>\n                            <input type=\"number\" class=\"form-control\"  id=\"State\" placeholder=\"Enter Total Vacancy\" min=\"1\" formControlName=\"vcncyTot\">\n                        </div>\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"zip\">Year(s) of Experience</label>\n                            <input type=\"number\" class=\"form-control\" id=\"zip\" placeholder=\"Enter No of Experience\" min=\"0\" formControlName=\"noExperience\">\n                        </div>\n                        \n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Job Nature</label>\n                            <select class=\"form-control browser-default custom-select\" formControlName=\"jobNature\">\n                                <option selected>Select Job Nature</option>\n                                <option value=\"Full Time\">Full Time</option>\n                                <option value=\"Part Time\">Part Time</option>\n                                <option value=\"Contractual\">Contractual</option>\n                            </select>\n                           \n                        </div>\n\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Specification</label>\n                            \n                            <textarea class=\"form-control\" formControlName=\"spec\"> </textarea>\n                        </div>\n\n                        <div class=\"col-sm-12 form-group\">\n                            <label for=\"email\">Job Responsibility</label>\n                            <textarea class=\"form-control\" formControlName=\"jobResponsibility\"> </textarea>\n                        </div>\n\n                        <div class=\"col-sm-12 form-group\">\n                            <label for=\"email\">Other Benefit</label>\n                            <textarea class=\"form-control\" formControlName=\"othersBenefit\"> </textarea>\n                        </div>\n\n                      \n\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            <div class=\"checkbox mt-3\" >\n                                <label for=\"\">\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\"  formControlName=\"vcncMale\"/>\n                                  This Position is Eligible for Male\n                                </label>        \n                              </div>\n                              \n                              <div class=\"checkbox\">\n                                  <label >\n                                      <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"vcncFemale\"/>  \n                                      This Position is Eligible for Female\n                                  </label>\n                              </div>\n                        </div>\n\n\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,16,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            <div class=\"checkbox mt-3\" >\n                                <label for=\"\">\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"ot\"  />\n                                  This Position has Over Time opportunity\n                                </label>        \n                              </div>\n                              \n                             \n                        </div>\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            \n                            <div class=\"checkbox mt-3\" >\n                                <label for=\"\">\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"active\"  />\n                                  Publish this Job vacancy Post\n                                </label>        \n                              </div>\n                              \n                        </div>\n\n                       \n                        \n                        <div class=\"col-sm-12\">\n                            <div class=\"text-right\">\n                                <a class=\"btn btn-warning btn-ripple\" routerLink=\"/irecruitment/vacancy/list\"><i class=\"fa fa-share\"></i> Cancel</a>\n                                &nbsp; &nbsp;\n                                <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\n                                    <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\n                                </button>\n                                &nbsp; &nbsp;\n                                <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                                </button>\n                            </div>\n                        </div>\n            \n                       \n                        \n                    </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n";
      /***/
    },

    /***/
    "r4Tw":
    /*!***************************************************************************!*\
      !*** ./src/app/all-modules/i-recruitment/service/irecruitment.service.ts ***!
      \***************************************************************************/

    /*! exports provided: IrecruitmentService */

    /***/
    function r4Tw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IrecruitmentService", function () {
        return IrecruitmentService;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var IrecruitmentService = /*#__PURE__*/function () {
        function IrecruitmentService(http) {
          _classCallCheck(this, IrecruitmentService);

          this.http = http;
        }

        _createClass(IrecruitmentService, [{
          key: "sendGetRequest",
          value: function sendGetRequest(apiURL, queryParams) {
            console.log("@sendGetRequest");
            return this.http.get(apiURL, {
              params: queryParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3));
          }
        }, {
          key: "sendPostRequest",
          value: function sendPostRequest(apiURL, formData) {
            console.log("@sendPostRequest");
            return this.http.post(apiURL, formData);
          }
        }, {
          key: "sendPutRequest",
          value: function sendPutRequest(apiURL, formData) {
            console.log("@sendPutRequest");
            return this.http.put(apiURL, formData);
          }
        }, {
          key: "sendDeleteRequest",
          value: function sendDeleteRequest(apiURL, formData) {
            console.log("@sendDeleteRequest");
            return this.http["delete"](apiURL, formData);
          } // Get PayrollElement Assignment By EmpId

        }, {
          key: "getPayrollElementAssignmentByEmpId",
          value: function getPayrollElementAssignmentByEmpId(empId) {
            return this.http.get("".concat(src_app_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/empPayrollAssignment/get/").concat(empId));
          }
        }]);

        return IrecruitmentService;
      }();

      IrecruitmentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      IrecruitmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], IrecruitmentService);
      /***/
    },

    /***/
    "wMib":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/i-recruitment/vacancy/edit/edit.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"content container-fluid\">\n\n    <!-- Page Header -->\n    <div class=\"page-header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <h3 class=\"page-title\">Vacancy Element</h3>\n                <ul class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Home</a></li>\n                    <li class=\"breadcrumb-item active\"><a routerLink=\"/irecruitment/vacancy/list\">Vacancy</a></li>\n                    <li class=\"breadcrumb-item active\">Update</li>\n                </ul>\n            </div>\n            <div class=\"col-auto float-right ml-auto\">\n                <a class=\"btn add-btn\" routerLink=\"/irecruitment/vacancy/list\"><i class=\"fa fa-share\"></i> Back To List</a>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\"> -->\n                    <!-- <h4 class=\"card-title mb-0\">Payroll Item Value</h4> -->\n                <!-- </div>  -->\n                <div class=\"card-body\">\n\n                   \n\n                    <form novalidate (ngSubmit)=\"saveUpdatedFormData()\" [formGroup]=\"myForm\">\n\n                        <h2 class=\"text-center\">Update Vacancy</h2>\n                        <input type=\"hidden\" class=\"form-control\"  formControlName=\"id\" readonly disabled>\n                    <div class=\"row jumbotron\">\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"name-f\">Job Title</label>\n                            <input type=\"text\" class=\"form-control\"  id=\"name-f\" placeholder=\"Enter job title.\" formControlName=\"title\" >\n                           \n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"name-l\">Relevant Education</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name-l\" placeholder=\"Enter Relevant Subject\" formControlName=\"relevantEducation\" >\n                        </div>\n                        \n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"Date\">Job Area</label>\n                            <input type=\"text\"  class=\"form-control\" id=\"Date\" placeholder=\"Job area\" formControlName=\"area\">\n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"address-1\">Job Location</label>\n                            <input type=\"text\" class=\"form-control\"  id=\"address-1\" placeholder=\"Enter job Location\" formControlName=\"jobLocation\">\n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <label>Application Deadline</label><span style=\"color: gray\"> {{myFormData.requiredWithin | date}} </span>\n                            <input type=\"date\"  class=\"form-control\" placeholder=\"\" formControlName=\"requiredWithin\">\n                            \n                            \n                        </div>\n                        \n\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"State\">Salary Maximum</label>\n                            <input type=\"number\" class=\"form-control\"  id=\"State\" placeholder=\"Enter Maximum Salary\"  min=\"1\" formControlName=\"salMax\">\n                        </div>\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"zip\">Salary Minimum </label> \n                            <label class=\"float-right\" for=\"\">\n                                <input type=\"checkbox\" value=\"1\" formControlName=\"negotiable\" />\n                                 (Negotiable)\n                              </label> \n                            <input type=\"number\" class=\"form-control\" id=\"zip\" placeholder=\"Enter Minimum Salary\" min=\"1\" formControlName=\"salMin\">\n                        </div>\n                       \n\n\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Job Type</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter Job Type\" formControlName=\"jobType\">\n                        </div>\n\n\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"State\">Total Vacancy</label>\n                            <input type=\"number\" class=\"form-control\"  id=\"State\" placeholder=\"Enter Total Vacancy\" formControlName=\"vcncyTot\">\n                        </div>\n                        <div class=\"col-sm-3 form-group\">\n                            <label for=\"zip\">No of Experience</label>\n                            <input type=\"number\" class=\"form-control\" id=\"zip\" placeholder=\"Enter No of Experience\" formControlName=\"noExperience\">\n                        </div>\n                        \n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Job Nature</label>\n                            <select class=\"form-control browser-default custom-select\" formControlName=\"jobNature\">\n                                <option selected>Select Job Nature</option>\n                                <option value=\"Full Time\">Full Time</option>\n                                <option value=\"Part Time\">Part Time</option>\n                                <option value=\"Contractual\">Contractual</option>\n                            </select>\n                           \n                        </div>\n\n                        <div class=\"col-sm-6 form-group\">\n                            <label for=\"email\">Specification</label>\n                            \n                            <textarea class=\"form-control\" formControlName=\"spec\"> </textarea>\n                        </div>\n\n                        <div class=\"col-sm-12 form-group\">\n                            <label for=\"email\">Job Responsibility</label>\n                            <textarea class=\"form-control\" formControlName=\"jobResponsibility\"> </textarea>\n                        </div>\n\n                        <div class=\"col-sm-12 form-group\">\n                            <label for=\"email\">Other Benefit</label>\n                            <textarea class=\"form-control\" formControlName=\"othersBenefit\"> </textarea>\n                        </div>\n\n                      \n\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            <div class=\"checkbox mt-3\" >\n                                <label for=\"\">\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\"  formControlName=\"vcncMale\">\n                                  This Position is Eligible for Male\n                                </label>        \n                              </div>\n                              \n                              <div class=\"checkbox\">\n                                  <label >\n                                      <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"vcncFemale\">  \n                                      This Position is Eligible for Female\n                                  </label>\n                              </div>\n                        </div>\n\n\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,16,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            <div class=\"checkbox mt-3\" >\n                                <label>\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"ot\" >\n                                  This Position has Over Time opportunity\n                                </label>        \n                              </div>\n                              \n                             \n                        </div>\n                        <div class=\"col-sm-4 form-group mt-3\" style=\"box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\">\n                            \n                            <div class=\"checkbox mt-3\" >\n                                <label for=\"\">\n                                  <input type=\"checkbox\" value=\"1\" class=\"form-group\" formControlName=\"active\"  >\n                                  Publish this Job vacancy Post\n                                </label>        \n                              </div>\n                              \n                        </div>\n\n                       \n                        \n                        <div class=\"col-sm-12\">\n                            <div class=\"text-right\">\n                                <a class=\"btn btn-warning btn-ripple\" routerLink=\"/irecruitment/vacancy/list\"><i class=\"fa fa-share\"></i> Cancel</a>\n                                &nbsp; &nbsp;\n                                <button type=\"button\" class=\"btn btn-secondary btn-ripple\" (click)=\"resetFormValues()\">\n                                    <i class=\"fa fa-undo\" aria-hidden=\"true\"></i> Reset\n                                </button>\n                                &nbsp; &nbsp;\n                                <button type=\"submit\" class=\"btn btn-primary btn-ripple\">\n                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Save &nbsp;&nbsp;&nbsp;\n                                </button>\n                            </div>\n                        </div>\n            \n                       \n                        \n                    </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n<!-- /Page Content -->\n\n\n<ngx-spinner bdColor = \"rgba(255,255,255,0.5)\" size = \"medium\" color = \"#667eea\" type = \"ball-clip-rotate\" [fullScreen] = \"false\"><p style=\"color: black\" > Processing... </p></ngx-spinner>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=i-recruitment-i-recruitment-module-es5.js.map
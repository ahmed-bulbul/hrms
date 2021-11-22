(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-assets-module"], {
    /***/
    "8zlg":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/assets/assets.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zlg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <!-- /Page Wrapper -->\r\n\r\n";
      /***/
    },

    /***/
    "Hwti":
    /*!*************************************************************************!*\
      !*** ./src/app/all-modules/assets/assets-main/assets-main.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AssetsMainComponent */

    /***/
    function Hwti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsMainComponent", function () {
        return AssetsMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assets_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assets-main.component.html */
      "UuRP");
      /* harmony import */


      var _assets_main_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assets-main.component.css */
      "bhgq");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AssetsMainComponent = /*#__PURE__*/function () {
        function AssetsMainComponent(allModuleService, formBuilder, toastr) {
          _classCallCheck(this, AssetsMainComponent);

          this.allModuleService = allModuleService;
          this.formBuilder = formBuilder;
          this.toastr = toastr;
          this.dtOptions = {};
          this.url = "assets";
          this.allAssets = [];
          this.rows = [];
          this.srch = [];
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]("en-US");
        }

        _createClass(AssetsMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // for floating label
            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur"); // get assets data from API

            this.getAssets(); // Add Assets Form Validation And Getting Values

            this.addAssets = this.formBuilder.group({
              assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              assetId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              purchaseTo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              warranty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              value: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              assetUser: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              assetStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }); // Edit Assets Form Validation And Getting Values

            this.editAssets = this.formBuilder.group({
              editAssetsName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editPurchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editPurchaseTo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editWarranty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editvalue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editAssetUser: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editAssetId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              editAssetStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
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
            this.allAssets = [];
            this.getAssets();
            setTimeout(function () {
              _this2.dtTrigger.next();
            }, 1000);
          } //get data for data table

        }, {
          key: "getAssets",
          value: function getAssets() {
            var _this3 = this;

            this.allModuleService.get(this.url).subscribe(function (data) {
              _this3.allAssets = data;
              _this3.rows = _this3.allAssets;
              _this3.srch = _toConsumableArray(_this3.rows);
            });
          } // Add Assets Modal Api Call

        }, {
          key: "addAssetsSubmit",
          value: function addAssetsSubmit() {
            var _this4 = this;

            if (this.addAssets.valid) {
              var purchaseDateFormat = this.pipe.transform(this.addAssets.value.purchaseDate, "dd-MM-yyyy");
              var purchaseToDateFormat = this.pipe.transform(this.addAssets.value.purchaseTo, "dd-MM-yyyy");
              var obj = {
                assetName: this.addAssets.value.assetName,
                assetId: this.addAssets.value.assetId,
                purchaseDate: purchaseDateFormat,
                warrenty: this.addAssets.value.warranty,
                Amount: this.addAssets.value.value,
                assetUser: this.addAssets.value.assetUser,
                warrentyEnd: purchaseToDateFormat,
                assetStatus: this.addAssets.value.assetStatus
              };
              this.allModuleService.add(obj, this.url).subscribe(function (data) {
                $("#datatable").DataTable().clear();

                _this4.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();
                });

                _this4.dtTrigger.next();
              });
              this.getAssets();
              $("#add_asset").modal("hide");
              this.addAssets.reset();
              this.toastr.success("Assets is added", "Success");
            } else {
              this.toastr.warning("Mandatory fields required", "");
            }
          } // to know the date picker changes

        }, {
          key: "from",
          value: function from(data) {
            this.editPurchaseDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
          }
        }, {
          key: "to",
          value: function to(data) {
            this.editPurchaseToDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
          } // Edit Assets Modal Api Call

        }, {
          key: "editAssetSubmit",
          value: function editAssetSubmit() {
            var _this5 = this;

            if (this.editAssets.valid) {
              var obj = {
                assetName: this.editAssets.value.editAssetsName,
                assetId: this.editAssets.value.editAssetId,
                purchaseDate: this.editPurchaseDateFormat,
                warrenty: this.editAssets.value.editWarranty,
                Amount: this.editAssets.value.editvalue,
                assetUser: this.editAssets.value.editAssetUser,
                warrentyEnd: this.editPurchaseToDateFormat,
                assetStatus: this.editAssets.value.editAssetStatus,
                id: this.editId
              };
              this.allModuleService.update(obj, this.url).subscribe(function (data1) {
                $("#datatable").DataTable().clear();

                _this5.dtElement.dtInstance.then(function (dtInstance) {
                  dtInstance.destroy();
                });

                _this5.dtTrigger.next();
              });
              this.getAssets();
              $("#edit_asset").modal("hide");
              this.toastr.success("Assets is edited", "Success");
            } else {
              this.toastr.warning("Mandatory fields required", "");
            }
          } // for set values to editassets form

        }, {
          key: "edit",
          value: function edit(value) {
            this.editId = value;
            var index = this.allAssets.findIndex(function (item) {
              return item.id === value;
            });
            var toSetValues = this.allAssets[index];
            this.editAssets.setValue({
              editAssetsName: toSetValues.assetName,
              editPurchaseDate: toSetValues.purchaseDate,
              editPurchaseTo: toSetValues.warrentyEnd,
              editWarranty: toSetValues.warrenty,
              editvalue: toSetValues.Amount,
              editAssetUser: toSetValues.assetUser,
              editAssetId: toSetValues.assetId,
              editAssetStatus: toSetValues.assetStatus
            });
          } // Delete Assets Modal Api Call

        }, {
          key: "deleteAssets",
          value: function deleteAssets() {
            var _this6 = this;

            this.allModuleService["delete"](this.tempId, this.url).subscribe(function (data) {
              $("#datatable").DataTable().clear();

              _this6.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });

              _this6.dtTrigger.next();
            });
            this.getAssets();
            $("#delete_asset").modal("hide");
            this.toastr.success("Assets is deleted", "Success");
          } //search by name

        }, {
          key: "searchName",
          value: function searchName(val) {
            var _this$rows;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.assetUser.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows = this.rows).push.apply(_this$rows, _toConsumableArray(temp));
          } //search by status

        }, {
          key: "searchStatus",
          value: function searchStatus(val) {
            var _this$rows2;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.assetStatus.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows2 = this.rows).push.apply(_this$rows2, _toConsumableArray(temp));
          } //search by purchase

        }, {
          key: "searchByPurchase",
          value: function searchByPurchase(val) {
            var _this$rows3;

            var mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              return d.purchaseDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
            });

            (_this$rows3 = this.rows).push.apply(_this$rows3, _toConsumableArray(temp));

            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
          } //search by warranty

        }, {
          key: "searchByWarranty",
          value: function searchByWarranty(val) {
            var _this$rows4;

            var mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              return d.warrentyEnd.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
            });

            (_this$rows4 = this.rows).push.apply(_this$rows4, _toConsumableArray(temp));

            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
          } //getting the status value

        }, {
          key: "getStatus",
          value: function getStatus(data) {
            this.statusValue = data;
          } //for unsubscribe datatable

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return AssetsMainComponent;
      }();

      AssetsMainComponent.ctorParameters = function () {
        return [{
          type: _all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      };

      AssetsMainComponent.propDecorators = {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      AssetsMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assets-main",
        template: _raw_loader_assets_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assets_main_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], AssetsMainComponent);
      /***/
    },

    /***/
    "IG3l":
    /*!*************************************************************!*\
      !*** ./src/app/all-modules/assets/assets-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AssetsRoutingModule */

    /***/
    function IG3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function () {
        return AssetsRoutingModule;
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


      var _assets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assets.component */
      "RBSh");
      /* harmony import */


      var _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./assets-main/assets-main.component */
      "Hwti");

      var routes = [{
        path: "",
        component: _assets_component__WEBPACK_IMPORTED_MODULE_3__["AssetsComponent"],
        children: [{
          path: "assets-main",
          component: _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMainComponent"]
        }]
      }];

      var AssetsRoutingModule = function AssetsRoutingModule() {
        _classCallCheck(this, AssetsRoutingModule);
      };

      AssetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AssetsRoutingModule);
      /***/
    },

    /***/
    "RBSh":
    /*!********************************************************!*\
      !*** ./src/app/all-modules/assets/assets.component.ts ***!
      \********************************************************/

    /*! exports provided: AssetsComponent */

    /***/
    function RBSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsComponent", function () {
        return AssetsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assets.component.html */
      "8zlg");
      /* harmony import */


      var _assets_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assets.component.css */
      "sBp+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssetsComponent = /*#__PURE__*/function () {
        function AssetsComponent(ngZone) {
          var _this7 = this;

          _classCallCheck(this, AssetsComponent);

          this.ngZone = ngZone;

          window.onresize = function (e) {
            _this7.ngZone.run(function () {
              _this7.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(AssetsComponent, [{
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

        return AssetsComponent;
      }();

      AssetsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      AssetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assets',
        template: _raw_loader_assets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assets_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], AssetsComponent);
      /***/
    },

    /***/
    "UuRP":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/assets/assets-main/assets-main.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UuRP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n                <h3 class=\"page-title\">Assets</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Assets</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-auto float-right ml-auto\">\r\n                <a  class=\"btn add-btn\" data-toggle=\"modal\" data-target=\"#add_asset\"><i class=\"fa fa-plus\"></i>\r\n                    Add Asset</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <input type=\"text\" class=\"form-control floating\" (input)=\"searchName($event.target.value)\" (focusout) = \"rerender()\" />\r\n                <label class=\"focus-label\">Employee Name</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value=\"\"> -- Select -- </option>\r\n                    <option value=\"Pending\"> Pending </option>\r\n                    <option value=\"Approved\"> Approved </option>\r\n                    <option value=\"Returned\"> Returned </option>\r\n                </select>\r\n                <label class=\"focus-label\">Status</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-6\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                (bsValueChange)=\"searchByPurchase($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">From</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-6\">\r\n                    <div class=\"form-group form-focus\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                (bsValueChange)=\"searchByWarranty($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">To</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <a  class=\"btn btn-success btn-block\"> Search </a>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id = \"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Asset User</th>\r\n                            <th>Asset Name</th>\r\n                            <th>Asset Id</th>\r\n                            <th>Purchase Date</th>\r\n                            <th>Warrenty</th>\r\n                            <th>Warrenty End</th>\r\n                            <th>Amount</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-right\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let assets of allAssets;let i = index\">\r\n                            <td>{{assets.assetUser}}</td>\r\n                            <td>\r\n                                <strong>{{assets.assetName}}</strong>\r\n                            </td>\r\n                            <td>{{assets.assetId}}</td>\r\n                            <td>{{assets.purchaseDate | customDate}}</td>\r\n                            <td>{{assets.warrenty}}</td>\r\n                            <td>{{assets.warrentyEnd | customDate}}</td>\r\n                            <td>{{assets.Amount}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \r\n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                        {{assets.assetStatus || statusValue}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Pending')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Approved')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Returned')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Returned</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\" data-target=\"#edit_asset\"\r\n                                            (click)=\"edit(assets.id)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#delete_asset\" (click)=\"tempId = assets.id\"><i\r\n                                                class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allAssets.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Asset Modal -->\r\n<div id=\"add_asset\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Asset</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addAssetsSubmit()\" [formGroup]=\"addAssets\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Name</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\"\r\n                                    formControlName=\"assetName\">\r\n\r\n                                <div *ngIf=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\"\r\n                                        class=\"text-danger\"> *Asset name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Id</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\"\r\n                                    formControlName=\"assetId\">\r\n                            </div>\r\n                            <div *ngIf=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\">\r\n                                <small *ngIf=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\"\r\n                                    class=\"text-danger\"> *Asset Id is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\"\r\n                                    formControlName=\"purchaseDate\">\r\n\r\n                                <div\r\n                                    *ngIf=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase Date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase To</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\"\r\n                                    formControlName=\"purchaseTo\">\r\n\r\n                                <div *ngIf=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\"\r\n                                        class=\"text-danger\"> *Purchase To is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Manufacturer</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Model</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Serial Number</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Supplier</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Condition</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Warranty</label>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"In Months\"\r\n                                    [class.invalid]=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\"\r\n                                    formControlName=\"warranty\">\r\n\r\n                                <div *ngIf=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\"\r\n                                        class=\"text-danger\"> *Warranty is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Value</label>\r\n                                <input placeholder=\"$1800\" class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('value').invalid && addAssets.get('value').touched\"\r\n                                    formControlName=\"value\">\r\n                                <div *ngIf=\"addAssets.get('value').invalid && addAssets.get('value').touched\">\r\n                                    <small *ngIf=\"addAssets.get('value').invalid && addAssets.get('value').touched\"\r\n                                        class=\"text-danger\"> *Value is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset User</label>\r\n                                <select class=\"select form-control\"\r\n                                    [class.invalid]=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\"\r\n                                    formControlName=\"assetUser\">\r\n                                    <option>John Doe</option>\r\n                                    <option>Richard Miles</option>\r\n                                </select>\r\n                                <div *ngIf=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\"\r\n                                        class=\"text-danger\"> *Asset user is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"select form-control\"\r\n                                    [class.invalid]=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\"\r\n                                    formControlName=\"assetStatus\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                    <option>Deployed</option>\r\n                                    <option>Damaged</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\"\r\n                                        class=\"text-danger\"> *Asset status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Asset Modal -->\r\n\r\n<!-- Edit Asset Modal -->\r\n<div id=\"edit_asset\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Asset</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editAssetSubmit()\" [formGroup]=\"editAssets\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Name</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"Dell Laptop\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\"\r\n                                    formControlName=\"editAssetsName\">\r\n\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\"\r\n                                        class=\"text-danger\"> *Asset name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Id</label>\r\n                                <input class=\"form-control\" type=\"text\" readonly\r\n                                    [class.invalid]=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\"\r\n                                    formControlName=\"editAssetId\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\"\r\n                                        class=\"text-danger\"> *Asset id is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\"\r\n                                    formControlName=\"editPurchaseDate\" (bsValueChange)=\"from($event)\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase To</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\"\r\n                                    formControlName=\"editPurchaseTo\" (bsValueChange)=\"to($event)\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\"\r\n                                        class=\"text-danger\"> *Purchase to is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Manufacturer</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Model</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Serial Number</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Supplier</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Condition</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Warranty</label>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"In Months\"\r\n                                    [class.invalid]=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\"\r\n                                    formControlName=\"editWarranty\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\"\r\n                                        class=\"text-danger\"> *Warranty is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Value</label>\r\n                                <input placeholder=\"$1800\" class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\"\r\n                                    formControlName=\"editvalue\">\r\n                                <div *ngIf=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\"\r\n                                        class=\"text-danger\"> *Value is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset User</label>\r\n                                <select class=\"select form-control\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\"\r\n                                    formControlName=\"editAssetUser\">\r\n                                    <option>John Doe</option>\r\n                                    <option>Richard Miles</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\"\r\n                                        class=\"text-danger\"> *Asset user is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"select form-control\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\"\r\n                                    formControlName=\"editAssetStatus\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                    <option>Deployed</option>\r\n                                    <option>Damaged</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\"\r\n                                        class=\"text-danger\"> *Asset status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Edit Asset Modal -->\r\n\r\n<!-- Delete Asset Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_asset\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Asset</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteAssets()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Asset Modal -->";
      /***/
    },

    /***/
    "Z1Zw":
    /*!*****************************************************!*\
      !*** ./src/app/all-modules/assets/assets.module.ts ***!
      \*****************************************************/

    /*! exports provided: AssetsModule */

    /***/
    function Z1Zw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsModule", function () {
        return AssetsModule;
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


      var _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assets-routing.module */
      "IG3l");
      /* harmony import */


      var _assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./assets.component */
      "RBSh");
      /* harmony import */


      var _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assets-main/assets-main.component */
      "Hwti");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "oW1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/sharing/sharing.module */
      "0jEk");

      var AssetsModule = function AssetsModule() {
        _classCallCheck(this, AssetsModule);
      };

      AssetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assets_component__WEBPACK_IMPORTED_MODULE_4__["AssetsComponent"], _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_5__["AssetsMainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetsRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__["SharingModule"]]
      })], AssetsModule);
      /***/
    },

    /***/
    "bhgq":
    /*!**************************************************************************!*\
      !*** ./src/app/all-modules/assets/assets-main/assets-main.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function bhgq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoiYXNzZXRzLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "sBp+":
    /*!*********************************************************!*\
      !*** ./src/app/all-modules/assets/assets.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function sBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NldHMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=assets-assets-module-es5.js.map
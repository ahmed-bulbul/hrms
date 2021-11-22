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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"], {
    /***/
    "06wf":
    /*!*********************************************************************************!*\
      !*** ./src/app/all-modules/reports/invoice-report/invoice-report.component.css ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function wf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoiaW52b2ljZS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "C0fd":
    /*!***********************************************************************************!*\
      !*** ./src/app/all-modules/reports/payslip-jsr-rpt/payslip-jsr-rpt.component.css ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function C0fd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n\tpadding-top: 5px;\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // Start --------------------- */\r\n\r\n.btn-ripple {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n.btn-ripple span {\r\n\tposition: absolute;\r\n\tbackground: #fff;\r\n\ttransform: translate(-50%, -50%);\r\n\tpointer-events: none;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation: animate 1s linear infinite;\r\n\t        animation: animate 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // End ------------------------- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXNsaXAtanNyLXJwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQSwrRUFBK0U7O0FBQy9FO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0NBQ2hDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsNkNBQXFDO1NBQXJDLHFDQUFxQztBQUN0Qzs7QUFDQTtDQUNDOztFQUVDLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtDQUNiO0NBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0NBQ1g7QUFDRDs7QUFiQTtDQUNDOztFQUVDLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtDQUNiO0NBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0NBQ1g7QUFDRDs7QUFDQSxpRkFBaUYiLCJmaWxlIjoicGF5c2xpcC1qc3ItcnB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJpcHBsZSBFZmZlY3QgQnV0dG9uIC8vIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uYnRuLXJpcHBsZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idG4tcmlwcGxlIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcblx0MCUgXHJcblx0e1xyXG5cdFx0d2lkdGg6IDBweDtcclxuXHRcdGhlaWdodDogMHB4O1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHQxMDAlXHJcblx0e1xyXG5cdFx0d2lkdGg6IDUwMHB4O1xyXG5cdFx0aGVpZ2h0OiA1MDBweDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmlwcGxlIEVmZmVjdCBCdXR0b24gLy8gRW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIl19 */";
      /***/
    },

    /***/
    "CpC3":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/payslip-jsr-rpt/payslip-jsr-rpt.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CpC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      Hi.....\r\n      <div *ngIf=\"dataLocalUrl != undefined\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <!--<h5>Report Display</h5>-->\r\n            <iframe\r\n              [attr.src]=\"dataLocalUrl\"\r\n              type=\"application/pdf\"\r\n              style=\"\r\n                width: 100%;\r\n                height: 100%;\r\n                min-width: 700px;\r\n                min-height: 750px;\r\n              \"\r\n            ></iframe>\r\n            <!--<h5>object whit local url</h5>\r\n                        <object [attr.data]=\"dataLocalUrl\" type=\"application/pdf\" width=\"100%\" height=\"100%\"></object>\r\n                        <h5>embed whit local url</h5>\r\n                        <embed [attr.src]=\"dataLocalUrl\" type=\"application/pdf\" width=\"100%\" height=\"100%\">-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Page Content -->\r\n";
      /***/
    },

    /***/
    "FDur":
    /*!*********************************************************************************!*\
      !*** ./src/app/all-modules/reports/expense-report/expense-report.component.css ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function FDur(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoiZXhwZW5zZS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "HGh0":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HGh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Edit Invoice</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Edit Invoice</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form  [formGroup]=\"editInvoiceForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"select form-control\" name=\"client\" [class.invalid]=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                            formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option>Global Technologies</option>\r\n                                <option>Delta Infotech</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"select form-control\" [class.invalid]=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option selected>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                            formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"select form-control\" name=\"tax\" [class.invalid]=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                            formControlName=\"tax\">\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option selected>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\"[class.invalid]=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                            formControlName=\"client_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                                class=\"text-danger\"> *Client address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" [class.invalid]=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                            formControlName=\"billing_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                                class=\"text-danger\"> *Billing address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Invoice date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                formControlName=\"invoice_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"(onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                    class=\"text-danger\"> *Invoice date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Due Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                formControlName=\"due_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                    class=\"text-danger\"> *Due date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody formArrayName=\"items\">\r\n                                    <tr *ngFor=\"let item of editInvoiceForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                        <td>{{i+1}}</td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                        </td>\r\n                                        <td><a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\"><i\r\n                                                    class=\"fa fa-plus\"></i></a></td>\r\n                                         <td *ngIf=\"i != 0\">\r\n                                            <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                <i class=\"fa fa-trash-o\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    \r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\">Total</td>\r\n                                        <td style=\"text-align: right; width: 230px\"><input class=\"form-control text-right\"  readonly type=\"text\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">Tax</td>\r\n                                        <td style=\"text-align: right;width: 230px\">\r\n                                            <input class=\"form-control text-right\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; width: 230px\">\r\n                                            <input class=\"form-control text-right\" type=\"text\"[class.invalid]=\"editInvoiceForm.get('discount').invalid && editInvoiceForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                            style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                            <input class=\"form-control text-right\"  readonly type=\"text\" [class.invalid]=\"editInvoiceForm.get('grandTotal').invalid && editInvoiceForm.get('grandTotal').touched\"\r\n                                            formControlName=\"grandTotal\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n";
      /***/
    },

    /***/
    "I2X2":
    /*!********************************************************************************!*\
      !*** ./src/app/all-modules/reports/expense-report/expense-report.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ExpenseReportComponent */

    /***/
    function I2X2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseReportComponent", function () {
        return ExpenseReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_expense_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./expense-report.component.html */
      "dLGJ");
      /* harmony import */


      var _expense_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./expense-report.component.css */
      "FDur");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _all_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../all-modules.service */
      "IhMt");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ExpenseReportComponent = /*#__PURE__*/function () {
        function ExpenseReportComponent(allModuleService) {
          _classCallCheck(this, ExpenseReportComponent);

          this.allModuleService = allModuleService;
          this.dtOptions = {};
          this.url = "expenseReport";
          this.allExpensesReport = [];
          this.rows = [];
          this.srch = [];
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
        }

        _createClass(ExpenseReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
            this.getExpensesReport(); // for data table configuration

            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              dom: "lrtip"
            };
          }
        }, {
          key: "getExpensesReport",
          value: function getExpensesReport() {
            var _this = this;

            this.allModuleService.get(this.url).subscribe(function (data) {
              _this.allExpensesReport = data;

              _this.dtTrigger.next();

              _this.rows = _this.allExpensesReport;
              _this.srch = _toConsumableArray(_this.rows);
            });
          } //search by status

        }, {
          key: "searchStatus",
          value: function searchStatus(val) {
            var _this$rows;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.purchasedBy.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows = this.rows).push.apply(_this$rows, _toConsumableArray(temp));
          } //search by purchase

        }, {
          key: "searchByFrom",
          value: function searchByFrom(val) {
            var _this$rows2;

            var mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              return d.purchaseDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
            });

            (_this$rows2 = this.rows).push.apply(_this$rows2, _toConsumableArray(temp));

            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
          } //search by warranty

        }, {
          key: "searchByTo",
          value: function searchByTo(val) {
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
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return ExpenseReportComponent;
      }();

      ExpenseReportComponent.ctorParameters = function () {
        return [{
          type: _all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"]
        }];
      };

      ExpenseReportComponent.propDecorators = {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      ExpenseReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-expense-report",
        template: _raw_loader_expense_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expense_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_all_modules_service__WEBPACK_IMPORTED_MODULE_4__["AllModulesService"]])], ExpenseReportComponent);
      /***/
    },

    /***/
    "JNng":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/reports.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JNng(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";
      /***/
    },

    /***/
    "L48G":
    /*!*******************************************************************************************!*\
      !*** ./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.css ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function L48G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaW52b2ljZS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJlZGl0LWludm9pY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "UcOA":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/attendance-jsr-rpt/attendance-jsr-rpt.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UcOA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <div class=\"row\">\r\n        \r\n         <div class=\"col-sm-12\">\r\n            <div *ngIf=\"dataLocalUrl != undefined\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <!--<h5>Report Display</h5>-->\r\n                        <iframe [attr.src]=\"dataLocalUrl\" type=\"application/pdf\" style=\"width: 100%; height: 100%; min-width: 700px; min-height: 750px;\"></iframe>\r\n                        <!--<h5>object whit local url</h5>\r\n                        <object [attr.data]=\"dataLocalUrl\" type=\"application/pdf\" width=\"100%\" height=\"100%\"></object>\r\n                        <h5>embed whit local url</h5>\r\n                        <embed [attr.src]=\"dataLocalUrl\" type=\"application/pdf\" width=\"100%\" height=\"100%\">-->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "Vc9h":
    /*!*******************************************************!*\
      !*** ./src/app/all-modules/reports/reports.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReportsModule */

    /***/
    function Vc9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _payslip_jsr_rpt_payslip_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payslip-jsr-rpt/payslip-jsr-rpt.component */
      "jhlR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reports-routing.module */
      "rni8");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reports.component */
      "lt7y");
      /* harmony import */


      var _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./expense-report/expense-report.component */
      "I2X2");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./invoice-report/invoice-report.component */
      "xc/3");
      /* harmony import */


      var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/sharing/sharing.module */
      "0jEk");
      /* harmony import */


      var _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./edit-invoice-report/edit-invoice-report.component */
      "vQJF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap */
      "oW1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _attendance_jsr_rpt_attendance_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./attendance-jsr-rpt/attendance-jsr-rpt.component */
      "gciY");

      var ReportsModule = function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      };

      ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"], _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_6__["ExpenseReportComponent"], _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceReportComponent"], _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_10__["EditInvoiceReportComponent"], _attendance_jsr_rpt_attendance_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_13__["AttendanceJsrRptCompnent"], _payslip_jsr_rpt_payslip_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_1__["PayslipJsrRptCompnent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportsRoutingModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_9__["SharingModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot()]
      })], ReportsModule);
      /***/
    },

    /***/
    "ZMCS":
    /*!***********************************************************!*\
      !*** ./src/app/all-modules/reports/reports.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ZMCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "dLGJ":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/expense-report/expense-report.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dLGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Expense Report</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Expense Report</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value = \"\">Select buyer</option>\r\n                    <option value = \"Loren Gatlin\">Loren Gatlin</option>\r\n                    <option value = \"Tarah Shropshire\">Tarah Shropshire</option>\r\n                </select>\r\n                <label class=\"focus-label\">Purchased By</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFrom($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"  [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByTo($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a  class=\"btn btn-success btn-block\"> Search </a>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Purchase From</th>\r\n                            <th>Purchase Date</th>\r\n                            <th>Purchased By</th>\r\n                            <th>Amount</th>\r\n                            <th>Paid By</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-right\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expensesReport of allExpensesReport;let i = index\">\r\n                            <td>\r\n                                <strong>{{expensesReport.item}}</strong>\r\n                            </td>\r\n                            <td>{{expensesReport.purchaseFrom}}</td>\r\n                            <td>{{expensesReport.purchaseDate | customDate}}</td>\r\n                            <td>\r\n                                <a routerLink = \"/employees/employeeprofile\" class=\"avatar avatar-xs\">\r\n                                    <img src=\"assets/img/profiles/avatar-{{ i + 1 }}.jpg\" alt=\"\">\r\n                                </a>\r\n                                <h2><a routerLink = \"/employees/employeeprofile\">{{expensesReport.purchasedBy}}</a></h2>\r\n                            </td>\r\n                            <td>{{expensesReport.amount}}</td>\r\n                            <td>{{expensesReport.paidBy}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\" \r\n                                        data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Pending\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#edit_leave\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\"\r\n                                            data-target=\"#delete_approve\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allExpensesReport.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "eujr":
    /*!*****************************************************************************************!*\
      !*** ./src/app/all-modules/reports/attendance-jsr-rpt/attendance-jsr-rpt.component.css ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function eujr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\r\n\tpadding: 30px;\r\n\tpadding-top: 5px;\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // Start --------------------- */\r\n\r\n.btn-ripple {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n.btn-ripple span {\r\n\tposition: absolute;\r\n\tbackground: #fff;\r\n\ttransform: translate(-50%, -50%);\r\n\tpointer-events: none;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation: animate 1s linear infinite;\r\n\t        animation: animate 1s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes animate {\r\n\t0% \r\n\t{\r\n\t\twidth: 0px;\r\n\t\theight: 0px;\r\n\t\topacity: 0.5;\r\n\t}\r\n\t100%\r\n\t{\r\n\t\twidth: 500px;\r\n\t\theight: 500px;\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n/* ---------------------- Ripple Effect Button // End ------------------------- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UtanNyLXJwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQSwrRUFBK0U7O0FBQy9FO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0NBQ2hDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsNkNBQXFDO1NBQXJDLHFDQUFxQztBQUN0Qzs7QUFDQTtDQUNDOztFQUVDLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtDQUNiO0NBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0NBQ1g7QUFDRDs7QUFiQTtDQUNDOztFQUVDLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtDQUNiO0NBQ0E7O0VBRUMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0NBQ1g7QUFDRDs7QUFDQSxpRkFBaUYiLCJmaWxlIjoiYXR0ZW5kYW5jZS1qc3ItcnB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMzBweDtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJpcHBsZSBFZmZlY3QgQnV0dG9uIC8vIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uYnRuLXJpcHBsZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idG4tcmlwcGxlIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcblx0MCUgXHJcblx0e1xyXG5cdFx0d2lkdGg6IDBweDtcclxuXHRcdGhlaWdodDogMHB4O1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdH1cclxuXHQxMDAlXHJcblx0e1xyXG5cdFx0d2lkdGg6IDUwMHB4O1xyXG5cdFx0aGVpZ2h0OiA1MDBweDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmlwcGxlIEVmZmVjdCBCdXR0b24gLy8gRW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuIl19 */";
      /***/
    },

    /***/
    "gciY":
    /*!****************************************************************************************!*\
      !*** ./src/app/all-modules/reports/attendance-jsr-rpt/attendance-jsr-rpt.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: AttendanceJsrRptCompnent */

    /***/
    function gciY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceJsrRptCompnent", function () {
        return AttendanceJsrRptCompnent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_attendance_jsr_rpt_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./attendance-jsr-rpt.component.html */
      "UcOA");
      /* harmony import */


      var _attendance_jsr_rpt_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./attendance-jsr-rpt.component.css */
      "eujr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/reports.service */
      "y8/s");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AttendanceJsrRptCompnent = /*#__PURE__*/function () {
        function AttendanceJsrRptCompnent(formBuilder, _reportService, domSanitizer, activatedRoute) {
          _classCallCheck(this, AttendanceJsrRptCompnent);

          this.formBuilder = formBuilder;
          this._reportService = _reportService;
          this.domSanitizer = domSanitizer;
          this.activatedRoute = activatedRoute;
          this.empAttnData = {
            rptFileName: 'EmpDailyAttendanceRpt',
            newWindow: true,
            userId: 'xxxx',
            startDate: '',
            endDate: ''
          };
        }

        _createClass(AttendanceJsrRptCompnent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.basicForm = this.formBuilder.group({
              txt: [""]
            });
            this.empAttnData.startDate = this.activatedRoute.snapshot.queryParamMap.get('fromDate');
            this.empAttnData.endDate = this.activatedRoute.snapshot.queryParamMap.get('toDate');
            this.loadReport();
          }
        }, {
          key: "basicFormSubmit",
          value: function basicFormSubmit() {
            console.log("");
          }
        }, {
          key: "loadReport",
          value: function loadReport() {
            var _this2 = this;

            this._reportService.employeeAttendanceRpt(this.empAttnData.rptFileName, this.empAttnData.userId, this.empAttnData.startDate, this.empAttnData.endDate).subscribe(function (response) {
              // this.dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file3));
              var file = new Blob([response], {
                type: 'application/pdf'
              });
              var fileURL = URL.createObjectURL(file);

              if (_this2.empAttnData.newWindow && false) {
                window.open(fileURL);
              } else {
                _this2.dataLocalUrl = _this2.domSanitizer.bypassSecurityTrustResourceUrl(fileURL);
              }
            });
          }
        }]);

        return AttendanceJsrRptCompnent;
      }();

      AttendanceJsrRptCompnent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _service_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      AttendanceJsrRptCompnent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-basic-inputs",
        template: _raw_loader_attendance_jsr_rpt_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_attendance_jsr_rpt_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _service_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], AttendanceJsrRptCompnent);
      /***/
    },

    /***/
    "jhlR":
    /*!**********************************************************************************!*\
      !*** ./src/app/all-modules/reports/payslip-jsr-rpt/payslip-jsr-rpt.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PayslipJsrRptCompnent */

    /***/
    function jhlR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayslipJsrRptCompnent", function () {
        return PayslipJsrRptCompnent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payslip_jsr_rpt_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payslip-jsr-rpt.component.html */
      "CpC3");
      /* harmony import */


      var _payslip_jsr_rpt_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payslip-jsr-rpt.component.css */
      "C0fd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/reports.service */
      "y8/s");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PayslipJsrRptCompnent = /*#__PURE__*/function () {
        function PayslipJsrRptCompnent(formBuilder, _reportService, domSanitizer, activatedRoute) {
          _classCallCheck(this, PayslipJsrRptCompnent);

          this.formBuilder = formBuilder;
          this._reportService = _reportService;
          this.domSanitizer = domSanitizer;
          this.activatedRoute = activatedRoute;
          this.empPayslipData = {
            rptFileName: 'PaySlip',
            newWindow: true,
            payslipId: ''
          };
        }

        _createClass(PayslipJsrRptCompnent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadReport();
          }
        }, {
          key: "loadReport",
          value: function loadReport() {
            var _this3 = this;

            this._reportService.payslipRpt(this.empPayslipData.rptFileName, this.empPayslipData.payslipId).subscribe(function (response) {
              // this.dataLocalUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file3));
              var file = new Blob([response], {
                type: 'application/pdf'
              });
              var fileURL = URL.createObjectURL(file);

              if (_this3.empPayslipData.newWindow && false) {
                window.open(fileURL);
              } else {
                _this3.dataLocalUrl = _this3.domSanitizer.bypassSecurityTrustResourceUrl(fileURL);
              }
            });
          }
        }]);

        return PayslipJsrRptCompnent;
      }();

      PayslipJsrRptCompnent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _service_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      PayslipJsrRptCompnent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-basic-inputs",
        template: _raw_loader_payslip_jsr_rpt_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payslip_jsr_rpt_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _service_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], PayslipJsrRptCompnent);
      /***/
    },

    /***/
    "lt7y":
    /*!**********************************************************!*\
      !*** ./src/app/all-modules/reports/reports.component.ts ***!
      \**********************************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function lt7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reports.component.html */
      "JNng");
      /* harmony import */


      var _reports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports.component.css */
      "ZMCS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent(ngZone) {
          var _this4 = this;

          _classCallCheck(this, ReportsComponent);

          this.ngZone = ngZone;

          window.onresize = function (e) {
            _this4.ngZone.run(function () {
              _this4.innerHeight = window.innerHeight + 'px';
            });
          };

          this.getScreenHeight();
        }

        _createClass(ReportsComponent, [{
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

        return ReportsComponent;
      }();

      ReportsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reports',
        template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window: resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], ReportsComponent);
      /***/
    },

    /***/
    "pwPc":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-modules/reports/invoice-report/invoice-report.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pwPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Invoice Report</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Invoice Report</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option  value = \"\">Select Client</option>\r\n                    <option  value = \"Global Technologies\">Global Technologies</option>\r\n                    <option  value = \"Delta Infotech\">Delta Infotech</option>\r\n                </select>\r\n                <label class=\"focus-label\">Client</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchFromDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"form-group form-focus\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchToDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a  class=\"btn btn-success btn-block\"> Search </a>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Invoice Number</th>\r\n                            <th>Client</th>\r\n                            <th>Created Date</th>\r\n                            <th>Due Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-right\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let invoice of invoices;let i=index;\">\r\n                            <td>{{i+1}}</td>\r\n                            <td><a routerLink = \"/accounts/invoice-view\">{{invoice.number}}</a></td>\r\n                            <td>{{invoice.client}}</td>\r\n                            <td>{{invoice.invoice_date | customDate}}</td>\r\n                            <td>{{invoice.due_date | customDate}}</td>\r\n                            <td>{{invoice.grandTotal}}</td>\r\n                            <td class=\"text-center\">\r\n                                <span class=\"badge bg-inverse-success\">{{invoice.status}}</span>\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" routerLink = \"/reports/edit-invoice-report\" [queryParams]=\"{id: invoice.id}\"><i\r\n                                                class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                        <a class=\"dropdown-item\" routerLink = \"/reports/edit-invoice-report\" [queryParams]=\"{id: invoice.id}\"><i\r\n                                                class=\"fa fa-eye m-r-5\"></i> View</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-file-pdf-o m-r-5\"></i>\r\n                                            Download</a>\r\n                                        <a class=\"dropdown-item\"  data-toggle=\"modal\" (click)=\"deleteInvoice(invoice)\" data-target=\"#delete_estimate\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"invoices.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";
      /***/
    },

    /***/
    "rni8":
    /*!***************************************************************!*\
      !*** ./src/app/all-modules/reports/reports-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ReportsRoutingModule */

    /***/
    function rni8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function () {
        return ReportsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _payslip_jsr_rpt_payslip_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payslip-jsr-rpt/payslip-jsr-rpt.component */
      "jhlR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reports.component */
      "lt7y");
      /* harmony import */


      var _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./expense-report/expense-report.component */
      "I2X2");
      /* harmony import */


      var _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invoice-report/invoice-report.component */
      "xc/3");
      /* harmony import */


      var _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-invoice-report/edit-invoice-report.component */
      "vQJF");
      /* harmony import */


      var _attendance_jsr_rpt_attendance_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./attendance-jsr-rpt/attendance-jsr-rpt.component */
      "gciY");

      var routes = [{
        path: "",
        component: _reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"],
        children: [{
          path: "expense-report",
          component: _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseReportComponent"]
        }, {
          path: "invoice-report",
          component: _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceReportComponent"]
        }, {
          path: "edit-invoice-report",
          component: _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_7__["EditInvoiceReportComponent"]
        }, {
          path: "attendance-jsr-rpt",
          component: _attendance_jsr_rpt_attendance_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceJsrRptCompnent"]
        }, {
          path: "payslip-jsr-rpt",
          component: _payslip_jsr_rpt_payslip_jsr_rpt_component__WEBPACK_IMPORTED_MODULE_1__["PayslipJsrRptCompnent"]
        }]
      }];

      var ReportsRoutingModule = function ReportsRoutingModule() {
        _classCallCheck(this, ReportsRoutingModule);
      };

      ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], ReportsRoutingModule);
      /***/
    },

    /***/
    "vQJF":
    /*!******************************************************************************************!*\
      !*** ./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: EditInvoiceReportComponent */

    /***/
    function vQJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditInvoiceReportComponent", function () {
        return EditInvoiceReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_invoice_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-invoice-report.component.html */
      "HGh0");
      /* harmony import */


      var _edit_invoice_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-invoice-report.component.css */
      "L48G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/all-modules/all-modules.service */
      "IhMt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var EditInvoiceReportComponent = /*#__PURE__*/function () {
        function EditInvoiceReportComponent(router, route, allModulesService, toastr, formBuilder) {
          _classCallCheck(this, EditInvoiceReportComponent);

          this.router = router;
          this.route = route;
          this.allModulesService = allModulesService;
          this.toastr = toastr;
          this.formBuilder = formBuilder;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
          this.dateStatus = false;
          this.tax = 5;
        }

        _createClass(EditInvoiceReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //getting edit id of selected estimate list
            this.id = parseInt(this.route.snapshot.queryParams["id"]); //editestimate form value

            this.editInvoiceForm = this.formBuilder.group({
              client: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              project: [""],
              email: [""],
              tax: [""],
              client_address: [""],
              billing_address: [""],
              invoice_date: [""],
              due_date: [""],
              other_information: [""],
              status: [],
              totalamount: "",
              discount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              grandTotal: [""],
              items: this.formBuilder.array([])
            }); //get estimates

            this.getEstimate(); //adding items

            this.addItems();
          } // get method for estimate

        }, {
          key: "getEstimate",
          value: function getEstimate() {
            var _this5 = this;

            this.allModulesService.get("invoiceReport").subscribe(function (res) {
              _this5.allInvoices = res; //passing edit id

              _this5.edit(_this5.id);
            });
          } //for adding new rows

        }, {
          key: "itemsList",
          get: function get() {
            return this.editInvoiceForm.get("items");
          }
        }, {
          key: "newItem",
          value: function newItem() {
            return this.formBuilder.group({
              item: "",
              description: "",
              unit_cost: "",
              qty: "",
              amount: ""
            });
          }
        }, {
          key: "addItems",
          value: function addItems() {
            this.itemsList.push(this.newItem());
          } //for calculating changing price

        }, {
          key: "changePrice",
          value: function changePrice(i) {
            var qty = this.itemsList.at(i).get("qty").value;
            var price = this.itemsList.at(i).get("unit_cost").value;
            var amount = Number(qty) * Number(price);
            this.itemsList.at(i).get("amount").patchValue(amount);
            var total = 0;
            this.editInvoiceForm.get("items").value.forEach(function (index) {
              total += index.amount;
            });
            this.total = total;
            this.editInvoiceForm.get("totalamount").setValue(total);
            this.percentageTaxValue = this.total * Number(this.tax) / 100;
            this.percentageDiscountValue = this.total * Number(this.editInvoiceForm.value.discount) / 100;
            this.grandTotal = Number(this.total) + Number(this.percentageTaxValue) - Number(this.percentageDiscountValue);
            this.editInvoiceForm.get("grandTotal").setValue(this.grandTotal);
          } // to know the date picker changes

        }, {
          key: "selected",
          value: function selected(data) {
            this.dateStatus = data;
          } // for edit data using update method

        }, {
          key: "savesend",
          value: function savesend() {
            var _this6 = this;

            if (!this.editInvoiceForm.valid) {
              this.toastr.error("", "Please enter mandatory field!");
            } else {
              var params = this.editInvoiceForm.value;
              params["status"] = 0;
              params["id"] = 2;

              if (this.dateStatus) {
                this.estimateDateFormat = this.pipe.transform(this.editInvoiceForm.value.invoice_date, "dd-MM-yyyy");
                this.expiryToDateFormat = this.pipe.transform(this.editInvoiceForm.value.due_date, "dd-MM-yyyy");
              } else {
                this.estimateDateFormat = this.editInvoiceForm.value.invoice_date;
                this.expiryToDateFormat = this.editInvoiceForm.value.due_date;
              }

              var getItems = this.editInvoiceForm.get("items").value;
              var amount = this.editInvoiceForm.value.totalamount.toString();
              var obj = {
                number: "#INV-0001",
                client: this.editInvoiceForm.value.client,
                project: this.editInvoiceForm.value.project,
                invoice_date: this.estimateDateFormat,
                email: this.editInvoiceForm.value.email,
                tax: this.editInvoiceForm.value.tax,
                client_address: this.editInvoiceForm.value.client_address,
                due_date: this.expiryToDateFormat,
                billing_address: this.editInvoiceForm.value.billing_address,
                other_information: this.editInvoiceForm.value.other_information,
                status: "Pending",
                totalamount: amount,
                id: this.id,
                discount: this.editInvoiceForm.value.discount,
                grandTotal: this.editInvoiceForm.value.grandTotal,
                items: [{
                  item: getItems[0].item,
                  description: getItems[0].description,
                  unit_cost: getItems[0].unit_cost,
                  qty: getItems[0].qty,
                  amount: getItems[0].amount
                }]
              };
              this.allModulesService.update(obj, "invoiceReport").subscribe(function (res) {
                _this6.router.navigate(["/reports/invoice-report"]);

                _this6.toastr.success("", "Edited successfully!");
              });
            }
          } //remove row from table

        }, {
          key: "removeItems",
          value: function removeItems(i) {
            this.itemsList.removeAt(i);
          } // set values to form

        }, {
          key: "edit",
          value: function edit(value) {
            this.editId = value;
            var index = this.allInvoices.findIndex(function (item) {
              return item.id === value;
            });
            var toSetValues = this.allInvoices[index];
            this.editInvoiceForm.setValue({
              client: toSetValues.client,
              project: toSetValues.project,
              email: toSetValues.email,
              tax: toSetValues.tax,
              client_address: toSetValues.client_address,
              billing_address: toSetValues.billing_address,
              invoice_date: toSetValues.invoice_date,
              due_date: toSetValues.due_date,
              other_information: toSetValues.other_information,
              status: toSetValues.status,
              totalamount: toSetValues.totalamount,
              discount: toSetValues.discount,
              grandTotal: toSetValues.grandTotal,
              items: [{
                item: toSetValues.items[0].item,
                description: toSetValues.items[0].description,
                unit_cost: toSetValues.items[0].unit_cost,
                qty: toSetValues.items[0].qty,
                amount: toSetValues.items[0].amount
              }]
            });
          }
        }]);

        return EditInvoiceReportComponent;
      }();

      EditInvoiceReportComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      EditInvoiceReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-edit-invoice-report",
        template: _raw_loader_edit_invoice_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_invoice_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], EditInvoiceReportComponent);
      /***/
    },

    /***/
    "xc/3":
    /*!********************************************************************************!*\
      !*** ./src/app/all-modules/reports/invoice-report/invoice-report.component.ts ***!
      \********************************************************************************/

    /*! exports provided: InvoiceReportComponent */

    /***/
    function xc3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceReportComponent", function () {
        return InvoiceReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invoice_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invoice-report.component.html */
      "pwPc");
      /* harmony import */


      var _invoice_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice-report.component.css */
      "06wf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/all-modules/all-modules.service */
      "IhMt");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var InvoiceReportComponent = /*#__PURE__*/function () {
        function InvoiceReportComponent(router, allModulesService) {
          _classCallCheck(this, InvoiceReportComponent);

          this.router = router;
          this.allModulesService = allModulesService;
          this.dtOptions = {};
          this.invoices = [];
          this.rows = [];
          this.srch = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(InvoiceReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur"); // for data table configuration

            this.dtOptions = {
              // ... skipped ...
              pageLength: 10,
              dom: "lrtip"
            }; //get all invoices

            this.getAllInvoices();
          } //get all invoices

        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            var _this7 = this;

            this.allModulesService.get("invoiceReport").subscribe(function (res) {
              _this7.invoices = res;

              _this7.dtTrigger.next();

              _this7.rows = _this7.invoices;
              _this7.srch = _toConsumableArray(_this7.rows);
            });
          } //getting id for selected row

        }, {
          key: "deleteInvoice",
          value: function deleteInvoice(estimate) {
            this.id = estimate.id;
          } // delete method for deleting rows

        }, {
          key: "delete",
          value: function _delete() {
            var _this8 = this;

            var id = Number(this.id);
            this.allModulesService["delete"](id, "invoiceReport").subscribe(function (res) {
              _this8.router.navigate(["/reports/edit-invoice-report"]);

              _this8.getAllInvoices();

              _this8.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
              });
            });
          } //search by from date

        }, {
          key: "searchFromDate",
          value: function searchFromDate(val) {
            var _this$rows4;

            var mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              return d.invoice_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
            });

            (_this$rows4 = this.rows).push.apply(_this$rows4, _toConsumableArray(temp));

            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
          } //search by to date

        }, {
          key: "searchToDate",
          value: function searchToDate(val) {
            var _this$rows5;

            var mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              return d.due_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
            });

            (_this$rows5 = this.rows).push.apply(_this$rows5, _toConsumableArray(temp));

            $(".floating").on("focus blur", function (e) {
              $(this).parents(".form-focus").toggleClass("focused", e.type === "focus" || this.value.length > 0);
            }).trigger("blur");
          } //search by status

        }, {
          key: "searchStatus",
          value: function searchStatus(val) {
            var _this$rows6;

            this.rows.splice(0, this.rows.length);
            var temp = this.srch.filter(function (d) {
              val = val.toLowerCase();
              return d.client.toLowerCase().indexOf(val) !== -1 || !val;
            });

            (_this$rows6 = this.rows).push.apply(_this$rows6, _toConsumableArray(temp));
          } // for unsubscribe datatable

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return InvoiceReportComponent;
      }();

      InvoiceReportComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"]
        }];
      };

      InvoiceReportComponent.propDecorators = {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], {
            "static": false
          }]
        }]
      };
      InvoiceReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-invoice-report",
        template: _raw_loader_invoice_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_5__["AllModulesService"]])], InvoiceReportComponent);
      /***/
    },

    /***/
    "y8/s":
    /*!****************************************************************!*\
      !*** ./src/app/all-modules/reports/service/reports.service.ts ***!
      \****************************************************************/

    /*! exports provided: ReportsService */

    /***/
    function y8S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
        return ReportsService;
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


      var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_helper */
      "rmPI");

      var ReportsService = /*#__PURE__*/function () {
        function ReportsService(http) {
          _classCallCheck(this, ReportsService);

          this.http = http;
        } //test reports


        _createClass(ReportsService, [{
          key: "getTestReports",
          value: function getTestReports() {
            return this.http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/reports/myAttendanceRpt2"), {
              responseType: 'blob'
            });
          }
        }, {
          key: "employeeAttendanceRpt",
          value: function employeeAttendanceRpt(rptFileName, userId, startDate, endDate) {
            var httpOptions = {
              responseType: 'arraybuffer'
            };
            var param = {
              'rptFileName': rptFileName,
              'userId': userId,
              'startDate': startDate,
              'endDate': endDate
            }; // return this.http.get(`${baseUrl}/reports/myAttendanceRpt`,{params: param, responseType:'blob'});
            // let queryString = "rptFileName=" + rptFileName + "&userId="+userId +"&startDate"+startDate+"&endDate="+endDate+"&outputFileName="+rptFileName;

            return this.http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/reports/myAttendanceRpt?rptFileName=").concat(rptFileName, "&userId=").concat(userId, "&startDate=").concat(startDate, "&endDate=").concat(endDate, "&outputFileName=").concat(rptFileName), httpOptions);
          }
        }, {
          key: "payslipRpt",
          value: function payslipRpt(rptFileName, payslipId) {
            var httpOptions = {
              responseType: 'arraybuffer'
            };
            var param = {
              'rptFileName': rptFileName,
              'payslipId': payslipId
            };
            return this.http.get("".concat(_helper__WEBPACK_IMPORTED_MODULE_3__["default"], "/reports/payslipReport?rptFileName=").concat(rptFileName, "&payslipId=").concat(payslipId, "&outputFileName=").concat(rptFileName), httpOptions);
          }
        }]);

        return ReportsService;
      }();

      ReportsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ReportsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reports-reports-module-es5.js.map
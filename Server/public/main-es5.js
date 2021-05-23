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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+VzF":
    /*!****************************************!*\
      !*** ./src/app/services/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function VzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./storage.service */
      "n90K");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router, storage) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
          this.storage = storage;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.storage.load('user'); // tslint:disable-next-line: curly

            if (user) return true;
            this.router.navigateByUrl('/');
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! G:\Developer\‏‏projects\TaskTeam\TaskTeam\Front\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0cZH":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/rename-project-modal/rename-project-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: RenameProjectModalComponent */

    /***/
    function cZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenameProjectModalComponent", function () {
        return RenameProjectModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../project-form/project-form.component */
      "pUKS");

      var RenameProjectModalComponent = /*#__PURE__*/function () {
        function RenameProjectModalComponent() {
          _classCallCheck(this, RenameProjectModalComponent);
        }

        _createClass(RenameProjectModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeMoal",
          value: function closeMoal() {
            $('#renmaeProjectMoadl').modal('hide');
          }
        }]);

        return RenameProjectModalComponent;
      }();

      RenameProjectModalComponent.ɵfac = function RenameProjectModalComponent_Factory(t) {
        return new (t || RenameProjectModalComponent)();
      };

      RenameProjectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RenameProjectModalComponent,
        selectors: [["app-rename-project-modal"]],
        inputs: {
          project: "project"
        },
        decls: 11,
        vars: 1,
        consts: [["id", "renmaeProjectMoadl", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "project", "closeModalEv"]],
        template: function RenameProjectModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rename project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-project-form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeModalEv", function RenameProjectModalComponent_Template_app_project_form_closeModalEv_10_listener() {
              return ctx.closeMoal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.project);
          }
        },
        directives: [_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_1__["ProjectFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5hbWUtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenameProjectModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-rename-project-modal',
            templateUrl: './rename-project-modal.component.html',
            styleUrls: ['./rename-project-modal.component.css']
          }]
        }], function () {
          return [];
        }, {
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9TUh":
    /*!******************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
      \******************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function TUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent() {
          _classCallCheck(this, ResetPasswordComponent);
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)();
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 20,
        vars: 0,
        consts: [[1, "layout-main"], [1, "main-contain"], [1, "container"], [1, "h1"], [1, "card", "text-center"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "form-group"], ["for", "newPass"], ["type", "text", "id", "newPass", "placeholder", "Enter new password", 1, "form-control"], ["for", "confrimPass"], ["type", "text", "id", "confrimPass", "placeholder", "Enter password again", 1, "form-control"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter new password for your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_1__["MenuLoginComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        styles: [".layout-main[_ngcontent-%COMP%] {\r\n  background-color: #bacef4;\r\n  min-height: 100vh;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]::after {\r\n  content: \":\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LW1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWNlZjQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5sYWJlbDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiOlwiO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9d+g":
    /*!***************************************************************!*\
      !*** ./src/app/components/add-member/add-member.component.ts ***!
      \***************************************************************/

    /*! exports provided: AddMemberComponent */

    /***/
    function dG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function () {
        return AddMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddMemberComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function AddMemberComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function AddMemberComponent_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid email address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddMemberComponent_p_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.emailInputMsg);
        }
      }

      function AddMemberComponent_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r10.toLowerCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r10);
        }
      }

      function AddMemberComponent_p_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a permission.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddMemberComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddMemberComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Add member");
        }
      }

      var AddMemberComponent = /*#__PURE__*/function () {
        function AddMemberComponent(memberService, projectService, fb) {
          _classCallCheck(this, AddMemberComponent);

          this.memberService = memberService;
          this.projectService = projectService;
          this.fb = fb;
          this.addMemberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.projectMembers = [];
          this.currentProject = null;
          this.isWasSubmit = false;
          this.isLoading = false; //  Permission options

          this.options = ['Normal', 'Admin']; // Massages

          this.successMsg = null;
          this.errorMsg = null;
          this.emailInputMsg = null;
          this.addMemberForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
            permission: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }

        _createClass(AddMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Members listener
            this.projectMembersSub = this.memberService.members$.subscribe(function (members) {
              _this.projectMembers = members;

              if (_this.isLoading) {
                _this.isLoading = false;
                _this.isWasSubmit = false;
                _this.successMsg = 'A new member added to the project';

                _this.addMemberForm.reset();
              }
            }); // Current project user listener

            this.currentProjectSub = this.projectService.currentProject$.subscribe(function (project) {
              _this.currentProject = project;
            }); // Error "MemberService" listener

            this.errorMemberSub = this.memberService.errMsg$.subscribe(function (errMsg) {
              _this.resetMsgs();

              _this.isLoading = false;

              if (errMsg.param == 'email') {
                _this.emailInputMsg = errMsg.msg;
              } else {
                _this.errorMsg = errMsg.msg;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.projectMembersSub.unsubscribe();
            this.currentProjectSub.unsubscribe();
            this.errorMemberSub.unsubscribe();
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            // Reset massages
            this.resetMsgs();
            this.isWasSubmit = true;

            if (this.addMemberForm.status == 'VALID') {
              this.isLoading = true;
              var data = this.addMemberForm.value;
              data.projectID = this.currentProject._id;
              this.memberService.createMember(data);
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.addMemberForm.controls[inputName].errors) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "resetMsgs",
          value: function resetMsgs() {
            this.emailInputMsg = null;
            this.successMsg = null;
            this.errorMsg = null;
          }
        }, {
          key: "fc",
          get: function get() {
            return this.addMemberForm.controls;
          }
        }]);

        return AddMemberComponent;
      }();

      AddMemberComponent.ɵfac = function AddMemberComponent_Factory(t) {
        return new (t || AddMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      AddMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddMemberComponent,
        selectors: [["app-add-member"]],
        decls: 27,
        vars: 14,
        consts: [["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["addForm", ""], [1, "form-group"], ["for", "memberMail"], ["type", "email", "id", "memberMail", "placeholder", "example@mail.com", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "Permission"], ["formControlName", "permission", 1, "custom-select", 3, "ngClass"], ["disabled", "", "selected", "", "value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-outline-primary", "mt-1", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["add", ""], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"], [3, "ngValue"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", "mr-1"]],
        template: function AddMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMemberComponent_div_2_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddMemberComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMemberComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter member email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddMemberComponent_p_11_Template, 2, 0, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddMemberComponent_p_12_Template, 2, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Permission member:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose a permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddMemberComponent_option_19_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddMemberComponent_p_21_Template, 2, 0, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddMemberComponent_div_24_Template, 4, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddMemberComponent_ng_template_25_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addMemberForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.emailInputMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailInputMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("permission"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.permission.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r8);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: [".permission[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tZW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhZGQtbWVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVybWlzc2lvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-member',
            templateUrl: './add-member.component.html',
            styleUrls: ['./add-member.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
          }, {
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        baseUrl: '//localhost:3030/api/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BUfL":
    /*!********************************************************************!*\
      !*** ./src/app/pages/forget-password/forget-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgetPasswordComponent */

    /***/
    function BUfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_forget_pass_email_card_forget_pass_email_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/forget-pass-email-card/forget-pass-email-card.component */
      "EmD2");
      /* harmony import */


      var _components_forget_pass_email_sended_forget_pass_email_sended_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/forget-pass-email-sended/forget-pass-email-sended.component */
      "gMoM");

      function ForgetPasswordComponent_app_forget_pass_email_card_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-forget-pass-email-card", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx_r0.isLoading)("isEmailSended", ctx_r0.isEmailSended)("msgErr", ctx_r0.msgErr);
        }
      }

      function ForgetPasswordComponent_app_forget_pass_email_sended_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-forget-pass-email-sended");
        }
      }

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent() {
          _classCallCheck(this, ForgetPasswordComponent);

          this.isLoading = false;
          this.isEmailSended = false;
          this.msgErr = 'Error! sorry';
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
        return new (t || ForgetPasswordComponent)();
      };

      ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetPasswordComponent,
        selectors: [["app-forget-password"]],
        decls: 7,
        vars: 2,
        consts: [[1, "layout-main"], [1, "main-contain", "p-2"], [3, "isLoading", "isEmailSended", "msgErr", 4, "ngIf"], [4, "ngIf"], [3, "isLoading", "isEmailSended", "msgErr"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forget your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgetPasswordComponent_app_forget_pass_email_card_5_Template, 1, 3, "app-forget-pass-email-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgetPasswordComponent_app_forget_pass_email_sended_6_Template, 1, 0, "app-forget-pass-email-sended", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEmailSended);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailSended);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_1__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_forget_pass_email_card_forget_pass_email_card_component__WEBPACK_IMPORTED_MODULE_3__["ForgetPassEmailCardComponent"], _components_forget_pass_email_sended_forget_pass_email_sended_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPassEmailSendedComponent"]],
        styles: ["p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.main-contain[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #87ceeb;\r\n  height: 100vh;\r\n}\r\n\r\n.forget-contain[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.forget-contain[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.forget-contain[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n}\r\n\r\n.header-forget[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%] {\r\n  -webkit-margin-end: 5px;\r\n          margin-inline-end: 5px;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  line-height: 3em;\r\n}\r\n\r\n.header-text[_ngcontent-%COMP%] {\r\n  line-height: 20px;\r\n  line-height: 1.25em;\r\n}\r\n\r\n.main-forget[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.footer-forget[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.footer-forget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdjZWViO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmZvcmdldC1jb250YWluIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9yZ2V0LWNvbnRhaW4gbGFiZWwge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmZvcmdldC1jb250YWluIGJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWRlci1mb3JnZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tbG9jayB7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxufVxyXG5cclxuLmljb24tbG9jayBzdmcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogM2VtO1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbn1cclxuXHJcbi5tYWluLWZvcmdldCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1mb3JnZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvb3Rlci1mb3JnZXQgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "EmD2":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/forget-pass-email-card/forget-pass-email-card.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ForgetPassEmailCardComponent */

    /***/
    function EmD2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPassEmailCardComponent", function () {
        return ForgetPassEmailCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ForgetPassEmailCardComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.msgErr);
        }
      }

      function ForgetPassEmailCardComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgetPassEmailCardComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ForgetPassEmailCardComponent = /*#__PURE__*/function () {
        function ForgetPassEmailCardComponent() {
          _classCallCheck(this, ForgetPassEmailCardComponent);
        }

        _createClass(ForgetPassEmailCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgetPassEmailCardComponent;
      }();

      ForgetPassEmailCardComponent.ɵfac = function ForgetPassEmailCardComponent_Factory(t) {
        return new (t || ForgetPassEmailCardComponent)();
      };

      ForgetPassEmailCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetPassEmailCardComponent,
        selectors: [["app-forget-pass-email-card"]],
        inputs: {
          isLoading: "isLoading",
          msgErr: "msgErr",
          isEmailSended: "isEmailSended"
        },
        decls: 22,
        vars: 4,
        consts: [[1, "forget-contain", "card", "bg-light"], [1, "header-forget", "card-header"], [1, "icon-lock"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 23 32"], ["fill", "currentColor", "d", "M19.65,14.425 L19.65,8.125 C19.65,3.782725 16.1157,0.25 11.775,0.25 C7.43115,0.25 3.9,3.782725 3.9,8.125 L3.9,14.425 C2.162775,14.425 0.75,15.8362 0.75,17.575 L0.75,28.6 C0.75,30.337225 2.162775,31.75 3.9,31.75 L19.65,31.75 C21.387225,31.75 22.8,30.337225 22.8,28.6 L22.8,17.575 C22.8,15.8362 21.387225,14.425 19.65,14.425 Z M11.775,25.45 C10.4709,25.45 9.4125,24.3916 9.4125,23.0875 C9.4125,21.7834 10.4709,20.725 11.775,20.725 C13.0791,20.725 14.1375,21.7834 14.1375,23.0875 C14.1375,24.3916 13.0791,25.45 11.775,25.45 Z M16.5,14.425 L7.05,14.425 L7.05,8.125 C7.05,5.51995 9.16995,3.4 11.775,3.4 C14.38005,3.4 16.5,5.51995 16.5,8.125 L16.5,14.425 Z"], [1, "header-text"], [1, "main-forget", "card-body"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "e.g email@domain.com", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [4, "ngIf"], [1, "footer-forget", "card-footer"], [1, "mr-2"], ["href", "/signup", 1, "btn", "btn-link"], [1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]],
        template: function ForgetPassEmailCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your email address and we'll send you a link to reset your password. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgetPassEmailCardComponent_div_8_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgetPassEmailCardComponent_span_15_Template, 2, 0, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForgetPassEmailCardComponent_span_16_Template, 4, 0, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "footer", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Create free now!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msgErr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        styles: [".forget-contain[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  width: 600px;\r\n  max-width: 100%;\r\n}\r\n\r\n.forget-contain[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.forget-contain[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n}\r\n\r\n.header-forget[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%] {\r\n  -webkit-margin-end: 5px;\r\n          margin-inline-end: 5px;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.header-text[_ngcontent-%COMP%] {\r\n  line-height: 20px;\r\n  line-height: 1.25em;\r\n}\r\n\r\n.main-forget[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.footer-forget[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.footer-forget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.footer-forget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzLWVtYWlsLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmdldC1wYXNzLWVtYWlsLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JnZXQtY29udGFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JnZXQtY29udGFpbiBsYWJlbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uZm9yZ2V0LWNvbnRhaW4gYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWZvcmdldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1sb2NrIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xyXG59XHJcblxyXG4uaWNvbi1sb2NrIHN2ZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbn1cclxuXHJcbi5tYWluLWZvcmdldCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1mb3JnZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvb3Rlci1mb3JnZXQgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb290ZXItZm9yZ2V0IHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassEmailCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forget-pass-email-card',
            templateUrl: './forget-pass-email-card.component.html',
            styleUrls: ['./forget-pass-email-card.component.css']
          }]
        }], function () {
          return [];
        }, {
          isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgErr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isEmailSended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "FJ+L":
    /*!******************************************************************!*\
      !*** ./src/app/services/resolves/one-project.resolve.service.ts ***!
      \******************************************************************/

    /*! exports provided: OneProjectResolveService */

    /***/
    function FJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OneProjectResolveService", function () {
        return OneProjectResolveService;
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


      var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OneProjectResolveService = /*#__PURE__*/function () {
        function OneProjectResolveService(projectService, router) {
          _classCallCheck(this, OneProjectResolveService);

          this.projectService = projectService;
          this.router = router;
        }

        _createClass(OneProjectResolveService, [{
          key: "resolve",
          value: function resolve(route) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var projectID, project;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      projectID = route.params.projectID;

                      if (projectID) {
                        _context.next = 4;
                        break;
                      }

                      this.router.navigateByUrl('/notfound');
                      return _context.abrupt("return", false);

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return this.projectService.getByID(projectID);

                    case 7:
                      _context.next = 9;
                      return _context.sent.toPromise();

                    case 9:
                      project = _context.sent;
                      if (!project) this.router.navigateByUrl('/notfound');
                      return _context.abrupt("return", project);

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](4);
                      console.error(_context.t0);
                      this.router.navigateByUrl('/notfound');

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 14]]);
            }));
          }
        }]);

        return OneProjectResolveService;
      }();

      OneProjectResolveService.ɵfac = function OneProjectResolveService_Factory(t) {
        return new (t || OneProjectResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      OneProjectResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: OneProjectResolveService,
        factory: OneProjectResolveService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OneProjectResolveService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H+hM":
    /*!****************************************************!*\
      !*** ./src/app/pages/setting/setting.component.ts ***!
      \****************************************************/

    /*! exports provided: SettingComponent */

    /***/
    function HHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/img-profile-input/img-profile-input.component */
      "HxIC");
      /* harmony import */


      var _components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/update-password/update-password.component */
      "Himo");

      function SettingComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.msgError);
        }
      }

      function SettingComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function SettingComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
        }
      }

      function SettingComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a first name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A first name should have a capital letter at the beginning and only with letters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A last name should have a capital letter at the beginning of a name and only with letters and spaces ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please write what is your job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter an number phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Number phone. Example 0XXX XXX XXX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter an email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email. Example example@mail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.alreadyUseMsg);
        }
      }

      function SettingComponent_span_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 37);
        }
      }

      function SettingComponent_span_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Loading...");
        }
      }

      var SettingComponent = /*#__PURE__*/function () {
        function SettingComponent(authService, userService, fb, router) {
          _classCallCheck(this, SettingComponent);

          this.authService = authService;
          this.userService = userService;
          this.fb = fb;
          this.router = router;
          this.userLogged = null;
          this.imgUrl = null;
          this.isLoading = false;
          this.isWasSubmit = false;
          this.isChangePass = false; // From groups

          this.userFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}); // From massages

          this.msgError = null;
          this.successMsg = null;
          this.alreadyUseMsg = null;
          this.userFrom = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
            fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Z][a-z]+$')]],
            lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Z][a-z]+\( [A-Z][a-z]+\)*$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^0[1-9][0-9]{7,8}$')]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('( |[0-9]|[a-zA-Z]|-)+')]]
          });
        }

        _createClass(SettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userLoggedSub = this.authService.loggedUser$.subscribe(function (user) {
              _this2.userLogged = user;

              _this2.resetForm();
            });
            this.errSub = this.userService.errUser$.subscribe(function (err) {
              // tslint:disable-next-line: curly
              if (_this2.successMsg) _this2.successMsg = null;

              if (err.param === 'email') {
                _this2.alreadyUseMsg = err.msg;
              } else if (err.param !== 'oldPass') {
                $('.collapse').removeClass('show');
                _this2.msgError = err.msg;
              }

              _this2.isLoading = false;
            });
            this.successMsgSub = this.userService.successMsg$.subscribe(function (res) {
              // tslint:disable-next-line: curly
              if (_this2.msgError) _this2.msgError = null;
              _this2.successMsg = res.msg;

              if (res.param === 'update') {
                setTimeout(function () {
                  _this2.router.navigateByUrl('/profile/' + _this2.userLogged._id);
                }, 1000);
              } else {
                $('.collapse').removeClass('show');
                _this2.isChangePass = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userLoggedSub.unsubscribe();
            this.successMsgSub.unsubscribe();
          }
        }, {
          key: "onGotImgUrl",
          value: function onGotImgUrl(imgUrl) {
            this.imgUrl = imgUrl;
            $('.collapse').removeClass('show');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.msgError) {
              this.msgError = null;
            }

            if (this.alreadyUseMsg) {
              this.alreadyUseMsg = null;
            }

            if (this.userFrom.status === 'VALID') {
              this.isLoading = true;
              var dataForm = this.userFrom.value;
              dataForm._id = this.userLogged._id;
              dataForm.imgUrl = this.imgUrl;
              this.userService.update(dataForm);
            } else {
              this.isWasSubmit = true;
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.userFrom.controls[inputName].errors) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.userFrom.setValue({
              email: this.userLogged.email,
              fName: this.userLogged.fName,
              lName: this.userLogged.lName,
              phone: this.userLogged.phone,
              title: this.userLogged.title
            });
            this.imgUrl = this.userLogged.imgUrl;
          }
        }, {
          key: "fc",
          get: function get() {
            return this.userFrom.controls;
          }
        }]);

        return SettingComponent;
      }();

      SettingComponent.ɵfac = function SettingComponent_Factory(t) {
        return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingComponent,
        selectors: [["app-setting"]],
        decls: 66,
        vars: 28,
        consts: [[1, "layout-main"], [1, "container"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "mb-3", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "button", "data-toggle", "collapse", "data-target", "#imgProfileInput", 1, "btn-profile-img"], ["alt", "Avatar", 3, "src"], ["id", "imgProfileInput", 1, "collapse", "mt-2"], [3, "passImgUrl"], ["type", "button", "data-toggle", "collapse", "data-target", "#passForm", 1, "btn", "btn-primary", "mb-3", 3, "click"], ["class", "collapse my-2", "id", "passForm", "app-update-password", "", 4, "ngIf"], [1, "row"], [1, "form-group", "col"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "fName", "placeholder", "Your first name", "required", "", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lName", "placeholder", "Your last name", "required", "", 1, "form-control", 3, "ngClass"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "What is your job?", "required", "", 1, "form-control", 3, "ngClass"], ["for", "phone"], ["type", "text", "id", "phone", "formControlName", "phone", "placeholder", "Enter your call number", "required", "", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "form-control", 3, "ngClass"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "col"], [1, "btn", "btn-danger", 3, "href"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["id", "passForm", "app-update-password", "", 1, "collapse", "my-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
        template: function SettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingComponent_div_5_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingComponent_div_6_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-img-profile-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passImgUrl", function SettingComponent_Template_app_img_profile_input_passImgUrl_12_listener($event) {
              return ctx.onGotImgUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_14_listener() {
              return ctx.isChangePass = !ctx.isChangePass;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Change password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SettingComponent_div_16_Template, 1, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingComponent_div_23_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SettingComponent_div_24_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SettingComponent_div_30_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SettingComponent_div_31_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SettingComponent_div_37_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SettingComponent_div_43_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SettingComponent_div_44_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SettingComponent_div_50_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SettingComponent_div_51_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SettingComponent_div_52_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SettingComponent_span_56_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SettingComponent_span_57_Template, 2, 0, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SettingComponent_ng_template_58_Template, 1, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_64_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reset form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msgError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userFrom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl ? ctx.imgUrl : "../../../assets/addImg.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChangePass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("fName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.fName.errors == null ? null : ctx.fc.fName.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.fName.errors == null ? null : ctx.fc.fName.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("lName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.lName.errors == null ? null : ctx.fc.lName.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.lName.errors == null ? null : ctx.fc.lName.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.title.errors == null ? null : ctx.fc.title.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.phone.errors == null ? null : ctx.fc.phone.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.phone.errors == null ? null : ctx.fc.phone.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.alreadyUseMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.email.errors == null ? null : ctx.fc.email.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.fc.email.errors == null ? null : ctx.fc.email.errors.email) || (ctx.fc.email.errors == null ? null : ctx.fc.email.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyUseMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/profile/" + ctx.userLogged._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_5__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_7__["ImgProfileInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePasswordComponent"]],
        styles: [".layout-main[_ngcontent-%COMP%] {\r\n  background-color: #bacef4;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]::after {\r\n  content: \":\";\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  color: #c10000;\r\n  font-weight: bold;\r\n  font-size: 90%;\r\n  text-align: left;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 100px;\r\n  height: 100px;\r\n  outline: none;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 100px;\r\n  height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhY2VmNDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmxhYmVsOjphZnRlciB7XHJcbiAgY29udGVudDogXCI6XCI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBjb2xvcjogI2MxMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnRuLXByb2ZpbGUtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuLXByb2ZpbGUtaW1nIGltZyB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-setting',
            templateUrl: './setting.component.html',
            styleUrls: ['./setting.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HcCB":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/table-invitees-management/table-invitees-management.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TableInviteesManagementComponent */

    /***/
    function HcCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableInviteesManagementComponent", function () {
        return TableInviteesManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TableInviteesManagementComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.userID.imgUrl || "./assets/user.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", member_r1.userID.fName, " ", member_r1.userID.lName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.userID.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r1.permission, " ");
        }
      }

      var TableInviteesManagementComponent = /*#__PURE__*/function () {
        function TableInviteesManagementComponent(memberService, projectService, authService) {
          _classCallCheck(this, TableInviteesManagementComponent);

          this.memberService = memberService;
          this.projectService = projectService;
          this.authService = authService;
          this.project = null;
          this.loggedUser = null;
          this.projectMembers = [];
        }

        _createClass(TableInviteesManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.projerctSub = this.projectService.currentProject$.subscribe(function (project) {
              if (project) {
                _this3.project = project;

                _this3.memberService.loadProjectMembers(project._id);
              }
            }); // Members listener

            this.projectMembersSub = this.memberService.members$.subscribe(function (members) {
              _this3.projectMembers = members;
            }); // Get user-logged

            this.authService.loggedUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
              _this3.loggedUser = user;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.projectMembersSub.unsubscribe();
            this.projerctSub.unsubscribe();
          }
        }, {
          key: "onCancel",
          value: function onCancel(MemberID) {
            this.memberService.removeMember(MemberID);
          }
        }]);

        return TableInviteesManagementComponent;
      }();

      TableInviteesManagementComponent.ɵfac = function TableInviteesManagementComponent_Factory(t) {
        return new (t || TableInviteesManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      TableInviteesManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableInviteesManagementComponent,
        selectors: [["app-table-invitees-management"]],
        decls: 12,
        vars: 1,
        consts: [[1, "table-responsive-lg"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "text-left"], [1, "mr-1", 3, "src"], [1, "permission"]],
        template: function TableInviteesManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "promission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableInviteesManagementComponent_tr_11_Template, 8, 5, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectMembers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["img[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border: 1px solid #e0e0e0;\r\n  padding: 1px;\r\n  border-radius: 100%;\r\n  width: 45px;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWludml0ZWVzLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJ0YWJsZS1pbnZpdGVlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogNDVweDtcclxufVxyXG50YWJsZSB0aCxcclxudGFibGUgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableInviteesManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table-invitees-management',
            templateUrl: './table-invitees-management.component.html',
            styleUrls: ['./table-invitees-management.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
          }, {
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Himo":
    /*!*************************************************************************!*\
      !*** ./src/app/components/update-password/update-password.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UpdatePasswordComponent */

    /***/
    function Himo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function () {
        return UpdatePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_validators_confirmed_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/validators/confirmed.validator */
      "mqns");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); // Validators


      var _c0 = ["app-update-password", ""];

      function UpdatePasswordComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.incorrectPassMsg);
        }
      }

      function UpdatePasswordComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter new password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters long");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter new password again ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords must be match");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdatePasswordComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UpdatePasswordComponent = /*#__PURE__*/function () {
        function UpdatePasswordComponent(fb, userService) {
          _classCallCheck(this, UpdatePasswordComponent);

          this.fb = fb;
          this.userService = userService;
          this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.isLoading = false;
          this.isWasSubmit = false;
          this.incorrectPassMsg = null;
          this.passwordForm = this.fb.group({
            oldPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            newPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: Object(src_app_validators_confirmed_validator__WEBPACK_IMPORTED_MODULE_2__["ConfirmedValidator"])('newPass', 'confirmPass')
          });
        }

        _createClass(UpdatePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.errMsgPassSub = this.userService.errUser$.subscribe(function (err) {
              // tslint:disable-next-line: triple-equals
              if (err.param == 'oldPass') {
                _this4.incorrectPassMsg = 'Incorrect password, please check and try again';
                _this4.isLoading = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errMsgPassSub.unsubscribe();
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.isWasSubmit = true;

            if (this.passwordForm.status === 'VALID') {
              this.isLoading = true;
              var _this$passwordForm$va = this.passwordForm.value,
                  oldPass = _this$passwordForm$va.oldPass,
                  newPass = _this$passwordForm$va.newPass,
                  confirmPass = _this$passwordForm$va.confirmPass;
              this.userService.updatePassword(oldPass, newPass, confirmPass);
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.passwordForm.controls[inputName].errors) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "fc",
          get: function get() {
            return this.passwordForm.controls;
          }
        }]);

        return UpdatePasswordComponent;
      }();

      UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) {
        return new (t || UpdatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdatePasswordComponent,
        selectors: [["", "app-update-password", ""]],
        attrs: _c0,
        decls: 29,
        vars: 15,
        consts: [[3, "formGroup", "ngSubmit"], [1, "p-2"], [1, "form-group"], ["for", "oldPass"], ["type", "password", "id", "oldPass", "placeholder", "Enter your password", "formControlName", "oldPass", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "newPass"], ["type", "password", "id", "newPass", "placeholder", "Enter new password", "formControlName", "newPass", 1, "form-control", 3, "ngClass"], ["for", "confirmPass"], ["type", "password", "id", "confirmPass", "placeholder", "Enter again new password", "formControlName", "confirmPass", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]],
        template: function UpdatePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your old password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdatePasswordComponent_div_9_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdatePasswordComponent_div_10_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdatePasswordComponent_div_16_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UpdatePasswordComponent_div_17_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UpdatePasswordComponent_div_23_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdatePasswordComponent_div_24_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UpdatePasswordComponent_span_27_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UpdatePasswordComponent_span_28_Template, 4, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.incorrectPassMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("oldPass"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.oldPass.errors == null ? null : ctx.fc.oldPass.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.incorrectPassMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("newPass"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.newPass.errors == null ? null : ctx.fc.newPass.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.newPass.errors == null ? null : ctx.fc.newPass.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("confirmPass"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.confirmPass.errors == null ? null : ctx.fc.confirmPass.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.confirmPass.errors == null ? null : ctx.fc.confirmPass.errors.confirmedValidator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]::after {\r\n  content: \":\";\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  padding: 0 5px;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYIiwiZmlsZSI6InVwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5sYWJlbDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiOlwiO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-update-password]',
            templateUrl: './update-password.component.html',
            styleUrls: ['./update-password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HxIC":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/img-profile-input/img-profile-input.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ImgProfileInputComponent */

    /***/
    function HxIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgProfileInputComponent", function () {
        return ImgProfileInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _cropper_img_cropper_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../cropper-img/cropper-img.component */
      "tQvK");

      function ImgProfileInputComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose image profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ImgProfileInputComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.imgName);
        }
      }

      function ImgProfileInputComponent_app_cropper_img_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cropper-img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passImgUrl", function ImgProfileInputComponent_app_cropper_img_7_Template_app_cropper_img_passImgUrl_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.OnPassImgUrl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.preImg);
        }
      }

      var ImgProfileInputComponent = /*#__PURE__*/function () {
        function ImgProfileInputComponent() {
          _classCallCheck(this, ImgProfileInputComponent);

          this.passImgUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.urlImg = null;
          this.selectedFile = null;
          this.preImg = null; // For input file label

          this.imgName = null;
        }

        _createClass(ImgProfileInputComponent, [{
          key: "onFileSelected",
          value: function onFileSelected(event) {
            var _this5 = this;

            var files = event.target.files; // tslint:disable-next-line: curly

            if (!files.length) return; // For render component "cropper-img"

            this.preImg = null;
            var file = files[0];
            this.selectedFile = file; // For Update Label input file

            this.imgName = file.name;
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function () {
              _this5.preImg = reader.result;
            };
          }
        }, {
          key: "OnPassImgUrl",
          value: function OnPassImgUrl(urlImg) {
            this.urlImg = urlImg;
            this.passImgUrl.emit(urlImg);
          }
        }]);

        return ImgProfileInputComponent;
      }();

      ImgProfileInputComponent.ɵfac = function ImgProfileInputComponent_Factory(t) {
        return new (t || ImgProfileInputComponent)();
      };

      ImgProfileInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImgProfileInputComponent,
        selectors: [["app-img-profile-input"]],
        outputs: {
          passImgUrl: "passImgUrl"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "custom-file"], ["type", "file", "id", "customFileLangHTML", "accept", "image/*", 1, "custom-file-input", 3, "change"], ["for", "customFileLangHTML", "data-browse", "Choose image", 1, "custom-file-label"], [4, "ngIf"], [1, "mt-3"], [3, "src", "passImgUrl", 4, "ngIf"], [3, "src", "passImgUrl"]],
        template: function ImgProfileInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImgProfileInputComponent_Template_input_change_2_listener($event) {
              return ctx.onFileSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImgProfileInputComponent_span_4_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImgProfileInputComponent_span_5_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImgProfileInputComponent_app_cropper_img_7_Template, 1, 1, "app-cropper-img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preImg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preImg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preImg);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _cropper_img_cropper_img_component__WEBPACK_IMPORTED_MODULE_3__["CropperImgComponent"]],
        styles: [".img-container[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  float: left;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  float: left;\r\n  margin-left: 10px;\r\n}\r\n\r\n.img-profile[_ngcontent-%COMP%] {\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1wcm9maWxlLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoiaW1nLXByb2ZpbGUtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbWctcHJldmlldyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWctcHJvZmlsZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgProfileInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-img-profile-input',
            templateUrl: './img-profile-input.component.html',
            styleUrls: ['./img-profile-input.component.css']
          }]
        }], function () {
          return [];
        }, {
          passImgUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "IacM":
    /*!*************************************************************!*\
      !*** ./src/app/components/task-form/task-form.component.ts ***!
      \*************************************************************/

    /*! exports provided: TaskFormComponent */

    /***/
    function IacM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function () {
        return TaskFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_validators_taskDate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/validators/taskDate.validator */
      "OikZ");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); // Validators


      function TaskFormComponent_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", member_r5.userID._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", member_r5.userID.fName, " ", member_r5.userID.lName, " ");
        }
      }

      function TaskFormComponent_span_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
        }
      }

      function TaskFormComponent_span_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskFormComponent_span_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskFormComponent_span_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TaskFormComponent = /*#__PURE__*/function () {
        function TaskFormComponent(fb, taskService, memberService, projectService) {
          _classCallCheck(this, TaskFormComponent);

          this.fb = fb;
          this.taskService = taskService;
          this.memberService = memberService;
          this.projectService = projectService;
          this.task = null;
          this.currentProject = null;
          this.taskMsg = null;
          this.errMsg = null;
          this.isLoading = false;
          this.isWasSubmit = false; // Form group

          this.createTask = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.createTask = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startDate: [new Date().toISOString().substr(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: [new Date().toISOString().substr(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            owner: ['']
          }, {
            validator: Object(src_app_validators_taskDate_validator__WEBPACK_IMPORTED_MODULE_2__["TaskDateValidator"])('startDate', 'endDate')
          });
        }

        _createClass(TaskFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // Get members project
            this.membersSub = this.memberService.members$.subscribe(function (members) {
              _this6.members = members;
            }); // Get current task to edit (If have...)

            this.taskSub = this.taskService.currentTask$.subscribe(function (currentTask) {
              _this6.task = currentTask;

              if (currentTask) {
                var title = currentTask.title,
                    description = currentTask.description,
                    priority = currentTask.priority,
                    startDate = currentTask.startDate,
                    endDate = currentTask.endDate,
                    owner = currentTask.owner;

                _this6.createTask.patchValue({
                  title: title,
                  description: description,
                  priority: priority,
                  startDate: new Date(startDate).toISOString().substr(0, 10),
                  endDate: new Date(endDate).toISOString().substr(0, 10),
                  owner: owner._id
                });
              }
            }); // Get project user

            this.projectSub = this.projectService.currentProject$.subscribe(function (project) {
              _this6.currentProject = project;
            });
            this.taskMsgSub = this.taskService.taskMsg$.subscribe(function () {
              _this6.resetForm();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.membersSub.unsubscribe();
            this.taskSub.unsubscribe();
            this.projectSub.unsubscribe();
            this.taskMsgSub.unsubscribe();
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            this.isWasSubmit = true;

            if (this.createTask.status === 'VALID') {
              this.isLoading = true;
              var data = this.createTask.value;
              console.log({
                data: data
              });

              if (!this.task) {
                // If is new-task 
                data.projectID = this.currentProject._id;
                this.taskService.create(data);
              } else {
                // Do update
                for (var property in data) {
                  this.task[property] = data[property];
                }

                this.taskService.update(this.task);
              }
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.fc[inputName].errors || this.errMsg) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.createTask.reset();
            this.createTask.patchValue({
              title: '',
              description: '',
              priority: '',
              startDate: new Date().toISOString().substr(0, 10),
              endDate: new Date().toISOString().substr(0, 10),
              owner: ''
            });
            this.isWasSubmit = false;
            this.isLoading = false;
            this.taskService.setCurrentTask(null);
          }
        }, {
          key: "fc",
          get: function get() {
            return this.createTask.controls;
          }
        }]);

        return TaskFormComponent;
      }();

      TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) {
        return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]));
      };

      TaskFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskFormComponent,
        selectors: [["app-task-form"]],
        inputs: {
          task: "task"
        },
        decls: 59,
        vars: 14,
        consts: [["novalidate", "", 1, "modal-body", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "taskName"], ["type", "text", "id", "taskName", "placeholder", "Enter task name", "formControlName", "title", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "m-0", 2, "font-weight", "600"], ["for", "description"], [2, "color", "red", "font-weight", "600"], ["name", "description", "id", "description", "cols", "30", "rows", "1", "placeholder", "Add description to your task", "formControlName", "description", 1, "form-control", 3, "ngClass"], [1, "form-row"], [1, "form-group", "col-md-5", "col-lg-3"], ["for", "startDate"], ["type", "date", "id", "startDate", "formControlName", "startDate", 3, "ngClass"], ["for", "endDate"], ["type", "date", "id", "endDate", "formControlName", "endDate", 3, "ngClass"], [1, "form-group", "col-lg-3"], ["for", "priority"], ["name", "priority", "id", "priority", "formControlName", "priority", 1, "custom-select", 3, "ngClass"], ["disabled", "", "checked", "", "value", ""], ["value", "high"], ["value", "medium"], ["value", "low"], ["name", "priority", "id", "priority", "formControlName", "owner", 1, "custom-select", 3, "ngClass"], ["disabled", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "mr-1", "d-flex", "align-items-center", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "ml-1", 4, "ngIf"], [4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "disabled", "click"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "ml-1"]],
        template: function TaskFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onCreate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*Please enter title.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Task description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*Optional");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "End date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*Invalid end date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Task priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Choose a priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*Please choose priority.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Owner task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*Optional");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Choose a member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TaskFormComponent_option_50_Template, 2, 3, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TaskFormComponent_span_53_Template, 1, 0, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TaskFormComponent_span_54_Template, 2, 0, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TaskFormComponent_span_55_Template, 2, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TaskFormComponent_span_56_Template, 2, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_57_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("startDate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("endDate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("priority"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("owner"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.task);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.task);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".btn-drop[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  white-space: normal;\r\n  font-size: 0.8rem;\r\n  width: 7em;\r\n  height: 3.5em;\r\n  border-radius: 5px;\r\n}\r\n\r\n.priorities[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  width: 8.7em;\r\n  min-width: 8.7em;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.priorities[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0;\r\n  white-space: normal;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  height: 3.5em;\r\n}\r\n\r\n.priorities[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n\r\n\r\n.priority-high[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-high);\r\n}\r\n\r\n.priority-medium[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-medium);\r\n}\r\n\r\n.priority-low[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-low);\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  -webkit-margin-end: 5px;\r\n          margin-inline-end: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"date\"].is-invalid[_ngcontent-%COMP%] {\r\n  border-color: #dc3545;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0YXNrLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZHJvcCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB3aWR0aDogN2VtO1xyXG4gIGhlaWdodDogMy41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucHJpb3JpdGllcyAuZHJvcGRvd24tbWVudSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgd2lkdGg6IDguN2VtO1xyXG4gIG1pbi13aWR0aDogOC43ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucHJpb3JpdGllcyAuZHJvcGRvd24taXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAzLjVlbTtcclxufVxyXG5cclxuLnByaW9yaXRpZXMgLmRyb3Bkb3duLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4vKiBwcmlvcml0aWVzICovXHJcbi5wcmlvcml0eS1oaWdoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoKTtcclxufVxyXG4ucHJpb3JpdHktbWVkaXVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWRpdW0pO1xyXG59XHJcbi5wcmlvcml0eS1sb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdyk7XHJcbn1cclxuLnJvdyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5mb3JtIGxhYmVsIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXS5pcy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-task-form',
            templateUrl: './task-form.component.html',
            styleUrls: ['./task-form.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
          }, {
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
          }, {
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]
          }];
        }, {
          task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ijrn":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/remove-member-modal/remove-member-modal.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: RemoveMemberModalComponent */

    /***/
    function Ijrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveMemberModalComponent", function () {
        return RemoveMemberModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RemoveMemberModalComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function RemoveMemberModalComponent_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Are you sure you want to remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " from the project? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.member.userID.fName, " ", ctx_r1.member.userID.lName, "");
        }
      }

      function RemoveMemberModalComponent_p_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMsg, " ");
        }
      }

      function RemoveMemberModalComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RemoveMemberModalComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RemoveMemberModalComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RemoveMemberModalComponent = /*#__PURE__*/function () {
        function RemoveMemberModalComponent(memberService) {
          _classCallCheck(this, RemoveMemberModalComponent);

          this.memberService = memberService;
          this.isLoading = false;
          this.errorMsg = null;
        }

        _createClass(RemoveMemberModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            // When member removed
            this.succMsgSub = this.memberService.successMsg$.subscribe(function () {
              $('#removeMemberModal').modal('hide');
              _this7.isLoading = false;
            }); // If got error

            this.errMsgSub = this.memberService.errMsg$.subscribe(function () {
              _this7.errorMsg = 'Sorry, we got problem please try later.';
              _this7.isLoading = false;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errMsgSub.unsubscribe();
            this.succMsgSub.unsubscribe();
          }
        }, {
          key: "removeMember",
          value: function removeMember() {
            this.isLoading = true;
            this.memberService.removeMember(this.member._id);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.isLoading = false;
            this.errorMsg = null;
          }
        }]);

        return RemoveMemberModalComponent;
      }();

      RemoveMemberModalComponent.ɵfac = function RemoveMemberModalComponent_Factory(t) {
        return new (t || RemoveMemberModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]));
      };

      RemoveMemberModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RemoveMemberModalComponent,
        selectors: [["app-remove-member-modal"]],
        inputs: {
          member: "member"
        },
        decls: 20,
        vars: 8,
        consts: [["id", "removeMemberModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "m-0", 4, "ngIf"], ["class", "alert alert-danger m-0", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], [4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-danger"], [1, "m-0"], [1, "alert", "alert-danger", "m-0"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sr-only"], [1, "ml-2"]],
        template: function RemoveMemberModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveMemberModalComponent_Template_button_click_6_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RemoveMemberModalComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RemoveMemberModalComponent_p_11_Template, 5, 2, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RemoveMemberModalComponent_p_12_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveMemberModalComponent_Template_button_click_14_listener() {
              return ctx.removeMember();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RemoveMemberModalComponent_div_15_Template, 3, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RemoveMemberModalComponent_span_16_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RemoveMemberModalComponent_span_17_Template, 2, 0, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveMemberModalComponent_Template_button_click_18_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member && !ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1vdmUtbWVtYmVyLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveMemberModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-remove-member-modal',
            templateUrl: './remove-member-modal.component.html',
            styleUrls: ['./remove-member-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]
          }];
        }, {
          member: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "JFIp":
    /*!********************************************************!*\
      !*** ./src/app/pages/home-page/home-page.component.ts ***!
      \********************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function JFIp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _components_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/signin-form/signin-form.component */
      "kYXX");

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(elementRef, userService, authService) {
          _classCallCheck(this, HomePageComponent);

          this.elementRef = elementRef;
          this.userService = userService;
          this.authService = authService;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.userService.loadUsers();
            this.subscription = this.userService.users$.subscribe(function (users) {
              _this8.users = users;
              console.log({
                users: users
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 5,
        vars: 0,
        consts: [[1, "contain"], [1, "mb-3"], ["src", "../../../assets/logo-white.png", "alt", "Task team"], ["app-signin-form", "", 1, "container-login", "text-light"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_3__["SigninFormComponent"]],
        styles: [".contain[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  overflow: hidden;\r\n  padding: 30px 10px 10px;\r\n  height: auto;\r\n  min-height: 100vh;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-image: url('homePageImg.jpg');\r\n}\r\n\r\n.container-login[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  max-width: 100%;\r\n  background-color: #101015b3;\r\n  border-radius: 5px;\r\n  padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix3Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ob21lUGFnZUltZy5qcGdcIik7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4ge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxNWIzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KTJ/":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/project-members-modal/project-members-modal.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProjectMembersModalComponent */

    /***/
    function KTJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectMembersModalComponent", function () {
        return ProjectMembersModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectMembersModalComponent_div_11_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectMembersModalComponent_div_11_div_5_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var member_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.passMemberID(member_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Remove member ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectMembersModalComponent_div_11_div_5_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var member_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.passMemberID(member_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ProjectMembersModalComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectMembersModalComponent_div_11_div_5_Template, 8, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, member_r1.permission == "admin"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/profile/" + member_r1.userID._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.userID.imgUrl ? member_r1.userID.imgUrl : "./assets/profile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", member_r1.userID.fName, " ", member_r1.userID.lName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userMember && ctx_r0.userMember.permission === "admin");
        }
      }

      var ProjectMembersModalComponent = /*#__PURE__*/function () {
        function ProjectMembersModalComponent(memberService) {
          _classCallCheck(this, ProjectMembersModalComponent);

          this.memberService = memberService;
          this.projcetMemberEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.members = [];
          this.userMember = null;
        }

        _createClass(ProjectMembersModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.membersSub = this.memberService.members$.subscribe(function (projectMembers) {
              _this9.members = projectMembers;
            });
            this.userMemberSub = this.memberService.userMember$.subscribe(function (member) {
              _this9.userMember = member;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.membersSub.unsubscribe();
            this.userMemberSub.unsubscribe();
          }
        }, {
          key: "passMemberID",
          value: function passMemberID(memberID) {
            this.projcetMemberEmitter.emit(memberID);
          }
        }]);

        return ProjectMembersModalComponent;
      }();

      ProjectMembersModalComponent.ɵfac = function ProjectMembersModalComponent_Factory(t) {
        return new (t || ProjectMembersModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]));
      };

      ProjectMembersModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectMembersModalComponent,
        selectors: [["project-members-modal"]],
        inputs: {
          memberUser: "memberUser"
        },
        outputs: {
          projcetMemberEmitter: "projcetMemberEmitter"
        },
        decls: 15,
        vars: 1,
        consts: [["id", "membersModal", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], ["class", "list-group-item list-group-item-action d-flex align-items-center justify-content-between", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "justify-content-between", 3, "ngClass"], [1, "d-flex", "align-items-center", "w-100", "h-100", 3, "href"], [1, "mr-2", 3, "src"], [1, "m-0", "p-0"], ["class", "dropdown dropleft", 4, "ngIf"], [1, "dropdown", "dropleft"], ["id", "btnAction", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn-actions"], ["src", "./assets/three-dots-vertical.svg"], ["aria-labelledby", "btnAction", 1, "dropdown-menu"], ["data-toggle", "modal", "data-target", "#removeMemberModal", 1, "dropdown-item", 3, "click"], ["data-toggle", "modal", "data-target", "#memberPermissionModal", 1, "dropdown-item", 3, "click"]],
        template: function ProjectMembersModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectMembersModalComponent_div_11_Template, 6, 8, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border: 1px solid rgb(224, 224, 224);\r\n  padding: 1px;\r\n  border-radius: 100%;\r\n  width: 50px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn-actions[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbWVtYmVycy1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJwcm9qZWN0LW1lbWJlcnMtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEgaW1nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb25zIHtcclxuICB3aWR0aDogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectMembersModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'project-members-modal',
            templateUrl: './project-members-modal.component.html',
            styleUrls: ['./project-members-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]
          }];
        }, {
          memberUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          projcetMemberEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "KtSq":
    /*!*****************************************************************!*\
      !*** ./src/app/components/table-tasks/table-tasks.component.ts ***!
      \*****************************************************************/

    /*! exports provided: TableTasksComponent */

    /***/
    function KtSq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableTasksComponent", function () {
        return TableTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _row_task_row_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../row-task/row-task.component */
      "al0p");

      function TableTasksComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 5);
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r1);
        }
      }

      var TableTasksComponent = function TableTasksComponent() {
        _classCallCheck(this, TableTasksComponent);

        this.tasks = [];
      };

      TableTasksComponent.ɵfac = function TableTasksComponent_Factory(t) {
        return new (t || TableTasksComponent)();
      };

      TableTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableTasksComponent,
        selectors: [["app-table-tasks"]],
        inputs: {
          tasks: "tasks"
        },
        decls: 20,
        vars: 1,
        consts: [[1, "table", "table-bordered", "table-hover"], ["rowspan", "2", "colspan", "2"], ["rowspan", "2"], ["colspan", "2"], ["app-row-task", "", 3, "task", 4, "ngFor", "ngForOf"], ["app-row-task", "", 3, "task"]],
        template: function TableTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Task name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "End");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableTasksComponent_tr_19_Template, 1, 1, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _row_task_row_task_component__WEBPACK_IMPORTED_MODULE_2__["RowTaskComponent"]],
        styles: [".table[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLXRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkIiwiZmlsZSI6InRhYmxlLXRhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGhlYWQgdGgge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableTasksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table-tasks',
            templateUrl: './table-tasks.component.html',
            styleUrls: ['./table-tasks.component.css']
          }]
        }], function () {
          return [];
        }, {
          tasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "LtM/":
    /*!******************************************************************!*\
      !*** ./src/app/pages/create-project/create-project.component.ts ***!
      \******************************************************************/

    /*! exports provided: CreateProjectComponent */

    /***/
    function LtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function () {
        return CreateProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/project-form/project-form.component */
      "pUKS");
      /* harmony import */


      var _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/add-member/add-member.component */
      "9d+g");
      /* harmony import */


      var _components_table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/table-invitees-management/table-invitees-management.component */
      "HcCB");

      function CreateProjectComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function CreateProjectComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function CreateProjectComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your project has been created.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You can add more members by clicking \"Back\" or to end click \"End\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "You can always add more members to the project whenever you want on your project page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/project/" + ctx_r2.createdProject._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var CreateProjectComponent = /*#__PURE__*/function () {
        function CreateProjectComponent(projectService) {
          _classCallCheck(this, CreateProjectComponent);

          this.projectService = projectService;
          this.errorMsg = null;
          this.successMsg = null;
          this.createdProject = null;
        }

        _createClass(CreateProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.projectService.setCurrentProject(null);
            this.createdProjectSub = this.projectService.currentProject$.subscribe(function (createdProject) {
              return _this10.createdProject = createdProject;
            });
            this.errorMsgSub = this.projectService.errMsg$.subscribe(function (errMsg) {
              _this10.errorMsg = errMsg;
            });
            this.successMsgSub = this.projectService.successMsg$.subscribe(function (successMsg) {
              _this10.successMsg = successMsg;
              jquery__WEBPACK_IMPORTED_MODULE_1__('.create-project').slideUp('200');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.add-member').slideDown('200');
              }, 300);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errorMsgSub.unsubscribe();
            this.successMsgSub.unsubscribe();
            this.createdProjectSub.unsubscribe();
          }
        }]);

        return CreateProjectComponent;
      }();

      CreateProjectComponent.ɵfac = function CreateProjectComponent_Factory(t) {
        return new (t || CreateProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]));
      };

      CreateProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateProjectComponent,
        selectors: [["app-create-project"]],
        decls: 30,
        vars: 3,
        consts: [[1, "layout-main"], [1, "container"], [1, "header-page"], [1, "pb-1"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "h3", "top"], [1, "contain", "create-project"], [1, "h3"], [1, "contain", "add-member", 2, "display", "none"], [1, "m-0"], ["type", "button", "data-toggle", "modal", "data-target", "#modal", 1, "btn", "btn-success", "my-3"], [1, "mt-4"], ["class", "modal fade", "id", "modal", "data-backdrop", "static", "aria-hidden", "true", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"], ["id", "modal", "data-backdrop", "static", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "href"]],
        template: function CreateProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateProjectComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateProjectComponent_div_9_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1. Create project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-project-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2. Add members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add team members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Invite members to your project and click on \"Next\" button when you will end");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*You can skip this step now and return to it later.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-add-member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Project members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-table-invitees-management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateProjectComponent_div_29_Template, 21, 1, "div", 13);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdProject);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_3__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_5__["ProjectFormComponent"], _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"], _components_table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_7__["TableInviteesManagementComponent"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.project-form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  -webkit-margin-start: 5px;\r\n          margin-inline-start: 5px;\r\n  font-weight: bold;\r\n  color: rgb(236, 0, 0);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background-color: #343a40;\r\n  vertical-align: middle;\r\n  padding: 5px;\r\n  line-height: 1.5;\r\n  color: #ffffff;\r\n  border: 2px solid #787f85;\r\n}\r\n\r\n.h3.top[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.h3[_ngcontent-%COMP%]:not(.top) {\r\n  border-top: none;\r\n}\r\n\r\n.contain[_ngcontent-%COMP%] {\r\n  border: 1px solid #cccccc;\r\n  padding: 5px;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNyZWF0ZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWZvcm0gc21hbGwge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDIzNiwgMCwgMCk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3ODdmODU7XHJcbn1cclxuXHJcbi5oMy50b3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbn1cclxuLmgzOm5vdCgudG9wKSB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW4ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayBwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-project',
            templateUrl: './create-project.component.html',
            styleUrls: ['./create-project.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OikZ":
    /*!**************************************************!*\
      !*** ./src/app/validators/taskDate.validator.ts ***!
      \**************************************************/

    /*! exports provided: TaskDateValidator */

    /***/
    function OikZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskDateValidator", function () {
        return TaskDateValidator;
      });

      function TaskDateValidator(start, end) {
        return function (formGroup) {
          var startDate = formGroup.controls[start];
          var endDate = formGroup.controls[end];
          var startTimeStamp = new Date(startDate.value);
          var endTimeStamp = new Date(endDate.value);

          if (startTimeStamp > endTimeStamp) {
            startDate.setErrors({
              dateValidator: true
            });
            endDate.setErrors({
              dateValidator: true
            });
          } else {
            startDate.setErrors(null);
            endDate.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "PXo6":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/change-permission-modal/change-permission-modal.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ChangePermissionModalComponent */

    /***/
    function PXo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePermissionModalComponent", function () {
        return ChangePermissionModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ChangePermissionModalComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function ChangePermissionModalComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function ChangePermissionModalComponent_form_12_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r7.toLowerCase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
        }
      }

      function ChangePermissionModalComponent_form_12_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChangePermissionModalComponent_form_12_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChangePermissionModalComponent_form_12_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChangePermissionModalComponent_form_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Member permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePermissionModalComponent_form_12_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.selectOption = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChangePermissionModalComponent_form_12_option_5_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePermissionModalComponent_form_12_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangePermissionModalComponent_form_12_div_8_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChangePermissionModalComponent_form_12_span_9_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChangePermissionModalComponent_form_12_span_10_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePermissionModalComponent_form_12_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
        }
      }

      var ChangePermissionModalComponent = /*#__PURE__*/function () {
        function ChangePermissionModalComponent(memberService) {
          _classCallCheck(this, ChangePermissionModalComponent);

          this.memberService = memberService;
          this.isLoading = false;
          this.errorMsg = null;
          this.successMsg = null; //  Permission options

          this.options = ['Normal', 'Admin'];
        }

        _createClass(ChangePermissionModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.selectOption = this.member ? this.member.permission : 'admin'; // When member removed

            this.succMsgSub = this.memberService.successMsg$.subscribe(function () {
              _this11.successMsg = 'Member\'s permission updated';
              setTimeout(function () {
                $('#memberPermissionModal').modal('hide');
              }, 700);
              setTimeout(_this11.onClose, 1200);
            }); // If got error

            this.errMsgSub = this.memberService.errMsg$.subscribe(function () {
              _this11.errorMsg = 'Sorry, we got problem please try later.';
              _this11.isLoading = false;
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!changes.member.firstChange) {
              var member = changes.member.currentValue;
              this.selectOption = member.permission;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errMsgSub.unsubscribe();
            this.succMsgSub.unsubscribe();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.isLoading = true;
            this.member.permission = this.selectOption;
            console.log(this.member);
            this.memberService.updateMember(this.member);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.isLoading = false;
            this.errorMsg = null;
            this.successMsg = null;
          }
        }]);

        return ChangePermissionModalComponent;
      }();

      ChangePermissionModalComponent.ɵfac = function ChangePermissionModalComponent_Factory(t) {
        return new (t || ChangePermissionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]));
      };

      ChangePermissionModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangePermissionModalComponent,
        selectors: [["app-change-permission-modal"]],
        inputs: {
          member: "member"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 13,
        vars: 3,
        consts: [["id", "memberPermissionModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"], [1, "form-group"], ["for", "Permission"], ["name", "permission", 1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-group", "d-flex"], ["type", "submit", 1, "btn", "btn-danger", "mr-1", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "disabled", "click"], [3, "ngValue"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sr-only"], [1, "ml-2"]],
        template: function ChangePermissionModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePermissionModalComponent_Template_button_click_6_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChangePermissionModalComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChangePermissionModalComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChangePermissionModalComponent_form_12_Template, 13, 7, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member && !ctx.errorMsg && !ctx.successMsg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGVybWlzc2lvbi1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePermissionModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-permission-modal',
            templateUrl: './change-permission-modal.component.html',
            styleUrls: ['./change-permission-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]
          }];
        }, {
          member: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RC11":
    /*!***************************************************************!*\
      !*** ./src/app/components/menu-login/menu-login.component.ts ***!
      \***************************************************************/

    /*! exports provided: MenuLoginComponent */

    /***/
    function RC11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuLoginComponent", function () {
        return MenuLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var MenuLoginComponent = /*#__PURE__*/function () {
        function MenuLoginComponent(authService, router) {
          _classCallCheck(this, MenuLoginComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(MenuLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.userLoggedSub = this.authService.loggedUser$.subscribe(function (user) {
              _this12.userLogged = user;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userLoggedSub.unsubscribe();
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
            this.router.navigate(['/']);
          }
        }]);

        return MenuLoginComponent;
      }();

      MenuLoginComponent.ɵfac = function MenuLoginComponent_Factory(t) {
        return new (t || MenuLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      MenuLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuLoginComponent,
        selectors: [["app-menu-login"]],
        decls: 28,
        vars: 11,
        consts: [[1, "menu-contain"], ["routerLink", "/", "routerLinkActive", "activity"], ["src", "./assets/logo-white.png", "alt", "logo", 1, "logo"], [1, "btn-group", "dropright", "mb-4"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "profile-btn"], ["alt", "profile", 3, "src"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "href"], ["href", "/setting", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", "text-center", 3, "click"], [1, "clean-least"], ["routerLinkActive", "activity", 1, "link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/projects", "routerLinkActive", "activity", 1, "link", 3, "routerLinkActiveOptions"], ["routerLink", "/tasks", "routerLinkActive", "activity", 1, "link", 3, "routerLinkActiveOptions"], ["routerLink", "/createProject", "routerLinkActive", "activity", 1, "link", 3, "routerLinkActiveOptions"]],
        template: function MenuLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuLoginComponent_Template_button_click_13_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "My tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userLogged.imgUrl ? ctx.userLogged.imgUrl : "../../../assets/profile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/profile/" + ctx.userLogged._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + ctx.userLogged._id)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: [".menu-contain[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  left: 0;\r\n  width: 200px;\r\n  height: 100vh;\r\n  \r\n  \r\n  background-color: var(--bgc-menu);\r\n  color: #ffffff;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 85%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 3em;\r\n  height: 100%;\r\n  font-size: 16px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 1.5em;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.link[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n\r\n\r\n.link.activity[_ngcontent-%COMP%] {\r\n  color: goldenrod;\r\n}\r\n\r\n.profile-btn[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  width: 105px;\r\n  height: 105px;\r\n  border: none;\r\n  border-radius: 100%;\r\n  background: #f5f5f5;\r\n  border: 2px solid #bcbcbc;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.profile-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100%;\r\n  margin: 1px;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1lbnUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3NTEwNDk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI5MmY0YzsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtbWVudSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogODUlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubGk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xyXG59XHJcblxyXG4vKiBSb3V0ZSAqL1xyXG4ubGluay5hY3Rpdml0eSB7XHJcbiAgY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxuLnByb2ZpbGUtYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDVweDtcclxuICBoZWlnaHQ6IDEwNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2JjYmNiYztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtYnRuIGltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW46IDFweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu-login',
            templateUrl: './menu-login.component.html',
            styleUrls: ['./menu-login.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "S6Z9":
    /*!************************************************************!*\
      !*** ./src/app/pages/one-project/one-project.component.ts ***!
      \************************************************************/

    /*! exports provided: OneProjectComponent */

    /***/
    function S6Z9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OneProjectComponent", function () {
        return OneProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/member.service */
      "XPT/");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_project_members_modal_project_members_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/project-members-modal/project-members-modal.component */
      "KTJ/");
      /* harmony import */


      var _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/add-task-modal/add-task-modal.component */
      "XTzb");
      /* harmony import */


      var _components_delete_project_modal_delete_project_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/delete-project-modal/delete-project-modal.component */
      "Sbeu");
      /* harmony import */


      var _components_rename_project_modal_rename_project_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/rename-project-modal/rename-project-modal.component */
      "0cZH");
      /* harmony import */


      var _components_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/delete-task-modal/delete-task-modal.component */
      "k7BX");
      /* harmony import */


      var _components_invite_member_modal_invite_member_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/invite-member-modal/invite-member-modal.component */
      "tGUb");
      /* harmony import */


      var _components_remove_member_modal_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../components/remove-member-modal/remove-member-modal.component */
      "Ijrn");
      /* harmony import */


      var _components_change_permission_modal_change_permission_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../components/change-permission-modal/change-permission-modal.component */
      "PXo6");
      /* harmony import */


      var _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../components/table-tasks/table-tasks.component */
      "KtSq");

      function OneProjectComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Admin options ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Invite new members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Rename project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OneProjectComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.taskMsg);
        }
      }

      function OneProjectComponent_section_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading, please wait...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OneProjectComponent_section_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You do not have any tasks in the project yet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "to add task.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OneProjectComponent_app_table_tasks_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-tasks", 41);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tasks", ctx_r4.projectTasks);
        }
      }

      var OneProjectComponent = /*#__PURE__*/function () {
        function OneProjectComponent(memberService, projectService, taskService, route) {
          _classCallCheck(this, OneProjectComponent);

          this.memberService = memberService;
          this.projectService = projectService;
          this.taskService = taskService;
          this.route = route;
          this.isLoading = true;
          this.taskMsg = null;
        }

        _createClass(OneProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            // Sets the project (Save the project for later)
            this.projectService.setCurrentProject(this.route.snapshot.data.project); // Gets the project (When "setCurrentProject" will end)

            this.projectService.currentProject$.pipe( // If have currentProject will do the subscribe
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (currentProject) {
              return currentProject ? true : false;
            })).subscribe(this._projectInitialize.bind(this)); // Listener to project's task

            this.tasksSub = this.taskService.tasks$.subscribe(function (tasks) {
              if (_this13.projectTasks) _this13.isLoading = false;
              _this13.projectTasks = tasks;
            }); // Task massages

            this.taskMsgSub = this.taskService.taskMsg$.subscribe(this._showMessage.bind(this));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.taskMsgSub.unsubscribe();
            this.tasksSub.unsubscribe();
          }
        }, {
          key: "setProjectMember",
          value: function setProjectMember(memberID) {
            this.projectMember = this.memberService.getProjectMemberById(memberID);
          } // Initializing the project (Load members and tasks of project)

        }, {
          key: "_projectInitialize",
          value: function _projectInitialize(project) {
            var _this14 = this;

            this.currentProject = project;
            var projectID = project._id; // Load the project's members

            this.memberService.loadProjectMembers(projectID);
            this.memberService.members$.pipe( // Once the project's members have been received will save the userLogged's member
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (members) {
              return members.length > 0;
            })).subscribe(function (members) {
              // Save userLogged's member for later
              _this14.memberService.saveUserMember(); // When the user's member saved will get from the service it


              _this14.memberService.userMember$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (member) {
                return member ? true : false;
              })).subscribe(function (member) {
                _this14.userMember = member;
              });
            }); // Load the project's tasks

            this.taskService.loadTasks({
              projectID: projectID
            });
          } // Displays received messages for 3 seconds

        }, {
          key: "_showMessage",
          value: function _showMessage(msg) {
            var _this15 = this;

            this.taskMsg = msg; // Will remove the message from the screen after 3 seconds

            setTimeout(function () {
              $('.taskMsg').alert('close'); // After "fade" animation of the message will end

              setTimeout(function () {
                _this15.taskMsg = null;
              }, 2000);
            }, 3000);
          }
        }]);

        return OneProjectComponent;
      }();

      OneProjectComponent.ɵfac = function OneProjectComponent_Factory(t) {
        return new (t || OneProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      OneProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OneProjectComponent,
        selectors: [["app-one-project"]],
        decls: 31,
        vars: 11,
        consts: [[1, "layout-main"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "mr-2"], ["type", "button", "data-toggle", "modal", "data-target", "#membersModal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], ["src", "./assets/people-fill.svg", 1, "mr-1", 2, "width", "1.1rem"], ["type", "button", "data-toggle", "modal", "data-target", "#addTaskModal", 1, "btn", "btn-success", "d-flex", "align-items-center"], ["src", "./assets/task-plus.svg", 1, "mr-1", 2, "width", "1.1rem"], ["class", "nav-item", 4, "ngIf"], [1, "m-2", 2, "font-family", "Chunkfive"], ["class", "taskMsg alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "non-task", 4, "ngIf"], [3, "tasks", 4, "ngIf"], [3, "memberUser", "projcetMemberEmitter"], [3, "project"], [3, "member"], [1, "nav-item"], [1, "dropdown"], ["type", "button", "id", "adminMenu", "data-toggle", "dropdown", 1, "btn", "btn-info", "dropdown-toggle", "d-flex", "align-items-center"], ["src", "./assets/gear.svg", 1, "mr-1"], ["aria-labelledby", "adminMenu", 1, "dropdown-menu"], ["data-toggle", "modal", "data-target", "#delProjectModal", 1, "dropdown-item", "d-flex", "align-items-center"], ["src", "./assets/trash.svg", 1, "mr-1"], ["data-toggle", "modal", "data-target", "#inviteMemberModal", 1, "dropdown-item", "d-flex", "align-items-center"], ["src", "./assets/person-plus.svg", 1, "mr-1"], ["data-toggle", "modal", "data-target", "#renmaeProjectMoadl", 1, "dropdown-item", "d-flex", "align-items-center"], ["src", "./assets/pencil.svg", 1, "mr-1"], ["role", "alert", 1, "taskMsg", "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", 2, "width", "1.5rem", "height", "1.5rem"], [1, "h3", "ml-1"], [1, "non-task"], [1, "m-0", "mr-2"], [1, "m-0", "ml-2"], [3, "tasks"]],
        template: function OneProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OneProjectComponent_li_16_Template, 15, 0, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OneProjectComponent_div_19_Template, 6, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OneProjectComponent_section_20_Template, 4, 0, "section", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OneProjectComponent_section_21_Template, 11, 0, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OneProjectComponent_app_table_tasks_22_Template, 1, 1, "app-table-tasks", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "project-members-modal", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("projcetMemberEmitter", function OneProjectComponent_Template_project_members_modal_projcetMemberEmitter_23_listener($event) {
              return ctx.setProjectMember($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "add-task-modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-delete-project-modal", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-rename-project-modal", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-delete-task-modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-invite-member-modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-remove-member-modal", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-change-permission-modal", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userMember && ctx.userMember.permission === "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentProject.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.projectTasks.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectTasks.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("memberUser", ctx.userMember);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.currentProject);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.currentProject);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("member", ctx.projectMember);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("member", ctx.projectMember);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_6__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_project_members_modal_project_members_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProjectMembersModalComponent"], _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddTaskModalComponent"], _components_delete_project_modal_delete_project_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteProjectModalComponent"], _components_rename_project_modal_rename_project_modal_component__WEBPACK_IMPORTED_MODULE_11__["RenameProjectModalComponent"], _components_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_12__["DeleteTaskModalComponent"], _components_invite_member_modal_invite_member_modal_component__WEBPACK_IMPORTED_MODULE_13__["InviteMemberModalComponent"], _components_remove_member_modal_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_14__["RemoveMemberModalComponent"], _components_change_permission_modal_change_permission_modal_component__WEBPACK_IMPORTED_MODULE_15__["ChangePermissionModalComponent"], _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_16__["TableTasksComponent"]],
        styles: [".non-task[_ngcontent-%COMP%] {\r\n  font-size: 1.6em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoib25lLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub24tdGFzayB7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OneProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-one-project',
            templateUrl: './one-project.component.html',
            styleUrls: ['./one-project.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
          }, {
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sbeu":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/delete-project-modal/delete-project-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: DeleteProjectModalComponent */

    /***/
    function Sbeu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteProjectModalComponent", function () {
        return DeleteProjectModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function DeleteProjectModalComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete project failed, please try again. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DeleteProjectModalComponent = /*#__PURE__*/function () {
        function DeleteProjectModalComponent(projectService, router) {
          _classCallCheck(this, DeleteProjectModalComponent);

          this.projectService = projectService;
          this.router = router;
          this.inputProjectName = '';
          this.isBtnDelDisabled = true;
          this.errMsg = null;
        }

        _createClass(DeleteProjectModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.errorMsgSub = this.projectService.errMsg$.subscribe(function (errMsg) {
              _this16.errMsg = errMsg;
            });
            this.successSub = this.projectService.successMsg$.subscribe(function (success) {
              $('#delProjectModal').modal('hide');

              _this16.router.navigateByUrl('/projects');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errorMsgSub.unsubscribe();
            this.successSub.unsubscribe();
          }
        }, {
          key: "onInputChage",
          value: function onInputChage() {
            if (this.inputProjectName == this.project.title) {
              this.isBtnDelDisabled = false;
            } else {
              this.isBtnDelDisabled = true;
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            this.projectService.removeProject(this.project._id);
          }
        }]);

        return DeleteProjectModalComponent;
      }();

      DeleteProjectModalComponent.ɵfac = function DeleteProjectModalComponent_Factory(t) {
        return new (t || DeleteProjectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      DeleteProjectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteProjectModalComponent,
        selectors: [["app-delete-project-modal"]],
        inputs: {
          project: "project"
        },
        decls: 21,
        vars: 4,
        consts: [["id", "delProjectModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "inputProjectName", "placeholder", "Enter project name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", "mr-2", 3, "disabled", "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "alert", "alert-danger"]],
        template: function DeleteProjectModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeleteProjectModalComponent_div_10_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteProjectModalComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.inputProjectName = $event;
            })("ngModelChange", function DeleteProjectModalComponent_Template_input_ngModelChange_15_listener() {
              return ctx.onInputChage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteProjectModalComponent_Template_button_click_17_listener() {
              return ctx.onDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To delete the project \"", ctx.project.title, "\", type the name to confirm.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputProjectName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnDelDisabled);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProjectModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-project-modal',
            templateUrl: './delete-project-modal.component.html',
            styleUrls: ['./delete-project-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.title = 'Front';
        } // A function for move from page to page


        _createClass(AppComponent, [{
          key: "goToPage",
          value: function goToPage(pageName) {
            this.router.navigate(["".concat(pageName)]);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W3ir":
    /*!************************************************************!*\
      !*** ./src/app/pages/my-projects/my-projects.component.ts ***!
      \************************************************************/

    /*! exports provided: MyProjectsComponent */

    /***/
    function W3ir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function () {
        return MyProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MyProjectsComponent_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading, please wait...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading, please wait...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProjectsComponent_section_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You have no projects yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create a new one here!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProjectsComponent_table_7_tr_11_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "width": a0
        };
      };

      function MyProjectsComponent_table_7_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyProjectsComponent_table_7_tr_11_span_7_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dataProject_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataProject_r4.project.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r3.getProgress(dataProject_r4.countTasks)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getProgress(dataProject_r4.countTasks), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !dataProject_r4.countTasks.doneTasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", dataProject_r4.countTasks.doneTasks, "/", dataProject_r4.countTasks.countTasks, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/project/" + dataProject_r4.project._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function MyProjectsComponent_table_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remain tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyProjectsComponent_table_7_tr_11_Template, 13, 9, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.dataProjects);
        }
      }

      var MyProjectsComponent = /*#__PURE__*/function () {
        function MyProjectsComponent(projectService, taskService) {
          _classCallCheck(this, MyProjectsComponent);

          this.projectService = projectService;
          this.taskService = taskService;
          this.dataProjects = null;
          this.isLoading = true;
        }

        _createClass(MyProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            // Load projects
            this.projectService.loadUserProjects();
            this.dataProjectsSub = this.projectService.projects$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (projects) {
              var dataProjects = [];
              projects.forEach(function (project) {
                _this17.taskService.getTasksProjectCount(project._id).subscribe(function (countTasks) {
                  dataProjects.push({
                    project: project,
                    countTasks: countTasks
                  });
                });
              });
              return dataProjects;
            })).subscribe(function (dataProjects) {
              if (_this17.dataProjects && _this17.isLoading) _this17.isLoading = false;
              _this17.dataProjects = dataProjects;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dataProjectsSub.unsubscribe();
          }
        }, {
          key: "getProgress",
          value: function getProgress(_ref) {
            var countTasks = _ref.countTasks,
                doneTasks = _ref.doneTasks;
            var precent = countTasks ? (doneTasks / countTasks * 100).toFixed(2) : 0;
            return precent + '%';
          }
        }]);

        return MyProjectsComponent;
      }();

      MyProjectsComponent.ɵfac = function MyProjectsComponent_Factory(t) {
        return new (t || MyProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]));
      };

      MyProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyProjectsComponent,
        selectors: [["app-my-projects"]],
        decls: 8,
        vars: 3,
        consts: [[1, "layout-main"], [1, "container"], [1, "head", "header-page"], ["class", "d-flex align-items-center justify-content-center mt-4 mr-2", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "mt-4", "mr-2"], ["role", "status", 1, "spinner-border", 2, "width", "2rem", "height", "2rem"], [1, "sr-only"], [1, "m-0", "ml-2"], [1, "mt-2"], [1, "h2"], ["href", "/createProject"], [1, "table"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], ["class", "ml-1 mt-2", 4, "ngIf"], [1, "btn", "btn-primary", 3, "href"], [1, "ml-1", "mt-2"]],
        template: function MyProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyProjectsComponent_section_5_Template, 6, 0, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyProjectsComponent_section_6_Template, 5, 0, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyProjectsComponent_table_7_Template, 12, 1, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataProjects && !ctx.dataProjects.length && !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataProjects && ctx.dataProjects.length && !ctx.isLoading);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
        styles: ["td[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im15LXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-my-projects',
            templateUrl: './my-projects.component.html',
            styleUrls: ['./my-projects.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XPT/":
    /*!********************************************!*\
      !*** ./src/app/services/member.service.ts ***!
      \********************************************/

    /*! exports provided: MemberService */

    /***/
    function XPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberService", function () {
        return MemberService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG"); // Environment variables


      var MemberService = /*#__PURE__*/function () {
        function MemberService(http, auth) {
          _classCallCheck(this, MemberService);

          this.http = http;
          this.auth = auth;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
          this.endpoint = 'member';
          this._members$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.members$ = this._members$.asObservable();
          this._userMember$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.userMember$ = this._userMember$.asObservable();
          this.successMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.errMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(MemberService, [{
          key: "loadProjectMembers",
          value: function loadProjectMembers(projectID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getMembers({
                        projectID: projectID
                      });

                    case 2:
                      _context2.sent.subscribe(function (members) {
                        _this18._members$.next(members);
                      }, function (error) {
                        console.error(error);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getMembers",
          value: function getMembers() {
            var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.http.get("".concat(this.BASE_URL).concat(this.endpoint), {
                        params: filter
                      });

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "createMember",
          value: function createMember(member) {
            var _this19 = this;

            console.log('Service: ', member);
            this.http.post("".concat(this.BASE_URL).concat(this.endpoint), member).subscribe(function (createdMember) {
              _this19.successMsg$.next('New member created');

              _this19._members$.next([].concat(_toConsumableArray(_this19._members$.value), [createdMember]));
            }, function (error) {
              if (Array.isArray(error.error)) {
                error = error.error[0];
              } else {
                console.error(error);
                error = {
                  msg: 'We are sorry, we got a problem.\nPlease try again later.',
                  param: 'unknown'
                };
              }

              _this19.errMsg$.next(error);
            });
          }
        }, {
          key: "updateMember",
          value: function updateMember(member) {
            var _this20 = this;

            this.http.put("".concat(this.BASE_URL).concat(this.endpoint), member).subscribe(function (memberUpdated) {
              // Updates member
              var members = _this20._members$.value.map(function (member) {
                return member._id == memberUpdated._id ? memberUpdated : member;
              });

              _this20._members$.next(members);

              _this20.successMsg$.next('Member updated successfully.');
            }, function (error) {
              console.error(error);

              _this20.errMsg$.next('Member updated failed.');
            });
          }
        }, {
          key: "removeMember",
          value: function removeMember(memberID) {
            var _this21 = this;

            this.http["delete"]("".concat(this.BASE_URL).concat(this.endpoint, "/").concat(memberID)).subscribe(function (res) {
              var members = _this21._members$.value.filter(function (member) {
                return member._id != memberID;
              });

              _this21._members$.next(members);

              _this21.successMsg$.next('Member removed.');
            }, function (error) {
              console.error(error);

              _this21.errMsg$.next('Remove meber field.');
            });
          }
        }, {
          key: "getProjectMemberById",
          value: function getProjectMemberById(memberID) {
            var projectMember = this._members$.value.find(function (member) {
              return member._id == memberID;
            });

            return projectMember;
          }
        }, {
          key: "saveUserMember",
          value: function saveUserMember() {
            var _this22 = this;

            this.auth.loggedUser$.subscribe(function (loggedUser) {
              _this22._members$.subscribe(function (members) {
                var userMember = members.find(function (member) {
                  return loggedUser._id == member.userID._id;
                });

                _this22._userMember$.next(userMember);
              });
            });
          }
        }]);

        return MemberService;
      }();

      MemberService.ɵfac = function MemberService_Factory(t) {
        return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: MemberService,
        factory: MemberService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MemberService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XTzb":
    /*!***********************************************************************!*\
      !*** ./src/app/components/add-task-modal/add-task-modal.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddTaskModalComponent */

    /***/
    function XTzb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTaskModalComponent", function () {
        return AddTaskModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../task-form/task-form.component */
      "IacM");

      function AddTaskModalComponent_h4_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddTaskModalComponent_h4_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddTaskModalComponent = /*#__PURE__*/function () {
        function AddTaskModalComponent(taskService) {
          _classCallCheck(this, AddTaskModalComponent);

          this.taskService = taskService;
          this.currentTask = null;
        }

        _createClass(AddTaskModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.taskMsgSub = this.taskService.taskMsg$.subscribe(function (msg) {
              $('#addTaskModal').modal('hide');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.taskMsgSub.unsubscribe();
          }
        }]);

        return AddTaskModalComponent;
      }();

      AddTaskModalComponent.ɵfac = function AddTaskModalComponent_Factory(t) {
        return new (t || AddTaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
      };

      AddTaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddTaskModalComponent,
        selectors: [["add-task-modal"]],
        decls: 10,
        vars: 2,
        consts: [["id", "addTaskModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-scrollable", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-title"]],
        template: function AddTaskModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddTaskModalComponent_h4_4_Template, 2, 0, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddTaskModalComponent_h4_5_Template, 2, 0, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-task-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTask);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _task_form_task_form_component__WEBPACK_IMPORTED_MODULE_3__["TaskFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGFzay1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTaskModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-task-modal',
            templateUrl: './add-task-modal.component.html',
            styleUrls: ['./add-task-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/phone.pipe */
      "uMhb");

      function ProfileComponent_a_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(authService, route, location) {
          _classCallCheck(this, ProfileComponent);

          this.authService = authService;
          this.route = route;
          this.location = location;
          this.userLogged = null;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.userLoggedSub = this.authService.loggedUser$.subscribe(function (user) {
              _this23.userLogged = user;
            });
            this.userProfile = this.route.snapshot.data.user;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userLoggedSub.unsubscribe();
          }
        }, {
          key: "onBack",
          value: function onBack() {
            this.location.back();
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 32,
        vars: 9,
        consts: [[1, "layout-main"], [1, "main-contain"], [1, "details"], [1, "user-img"], ["alt", "User", 3, "src"], [1, "details-row"], [1, "user-name"], [1, "user-title"], [1, "details-row", "mb-2"], ["src", "./assets/telephone.svg", "alt", "telephone", 1, "mr-1"], [1, "title-info"], [1, "info"], ["src", "./assets/email.svg", "alt", "email", 1, "mr-1"], [1, "btn", "btn-primary", "mr-2", 3, "click"], ["class", "btn btn-primary", "href", "/setting", 4, "ngIf"], ["href", "/setting", 1, "btn", "btn-primary"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_29_listener() {
              return ctx.onBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_a_31_Template, 2, 0, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userProfile.imgUrl ? ctx.userProfile.imgUrl : "../../../assets/user.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userProfile.fName, " ", ctx.userProfile.lName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userProfile.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, ctx.userProfile.phone));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userProfile.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProfile._id === ctx.userLogged._id);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"]],
        styles: ["p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.main-contain[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px;\r\n  -webkit-margin-start: 10px;\r\n          margin-inline-start: 10px;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.user-title[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.details-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.details-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 1.5rem;\r\n}\r\n\r\n.title-info[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  -webkit-margin-end: 10px;\r\n          margin-inline-end: 10px;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  background-color: #fff;\r\n  padding: 30px;\r\n  border: 1px solid #000000;\r\n\r\n  border-radius: 10px;\r\n  width: 500px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.user-img[_ngcontent-%COMP%] {\r\n  border: 1px solid #e8e8e8;\r\n  border-radius: 100%;\r\n  padding: 5px;\r\n  -webkit-margin-end: 10px;\r\n          margin-inline-end: 10px;\r\n}\r\n\r\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100%;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .details-row[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMEJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7O0VBRXpCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIC5sYXlvdXQtbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhY2VmNDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSAqL1xyXG5cclxuLm1haW4tY29udGFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udXNlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZGV0YWlscy1yb3cgaW1nIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG59XHJcblxyXG4udGl0bGUtaW5mbyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxufVxyXG4udXNlci1pbWcgaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5tYWluIC5kZXRhaWxzLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/table-tasks/table-tasks.component */
      "KtSq");
      /* harmony import */


      var _components_row_task_row_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/row-task/row-task.component */
      "al0p");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _components_project_row_project_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/project-row/project-row.component */
      "xw+n");
      /* harmony import */


      var _components_forget_pass_email_card_forget_pass_email_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/forget-pass-email-card/forget-pass-email-card.component */
      "EmD2");
      /* harmony import */


      var _components_forget_pass_email_sended_forget_pass_email_sended_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/forget-pass-email-sended/forget-pass-email-sended.component */
      "gMoM");
      /* harmony import */


      var _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/img-profile-input/img-profile-input.component */
      "HxIC");
      /* harmony import */


      var _components_cropper_img_cropper_img_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/cropper-img/cropper-img.component */
      "tQvK");
      /* harmony import */


      var _components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/update-password/update-password.component */
      "Himo");
      /* harmony import */


      var _components_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/signin-form/signin-form.component */
      "kYXX");
      /* harmony import */


      var _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/add-member/add-member.component */
      "9d+g");
      /* harmony import */


      var _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/add-task-modal/add-task-modal.component */
      "XTzb");
      /* harmony import */


      var _components_project_members_modal_project_members_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/project-members-modal/project-members-modal.component */
      "KTJ/");
      /* harmony import */


      var _components_table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/table-invitees-management/table-invitees-management.component */
      "HcCB");
      /* harmony import */


      var _components_delete_project_modal_delete_project_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/delete-project-modal/delete-project-modal.component */
      "Sbeu");
      /* harmony import */


      var _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/task-form/task-form.component */
      "IacM");
      /* harmony import */


      var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/project-form/project-form.component */
      "pUKS");
      /* harmony import */


      var _components_rename_project_modal_rename_project_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/rename-project-modal/rename-project-modal.component */
      "0cZH");
      /* harmony import */


      var _components_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/delete-task-modal/delete-task-modal.component */
      "k7BX");
      /* harmony import */


      var _components_invite_member_modal_invite_member_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/invite-member-modal/invite-member-modal.component */
      "tGUb");
      /* harmony import */


      var _components_change_permission_modal_change_permission_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/change-permission-modal/change-permission-modal.component */
      "PXo6");
      /* harmony import */


      var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pages/home-page/home-page.component */
      "JFIp");
      /* harmony import */


      var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/sign-up/sign-up.component */
      "qTot");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_current_tasks_current_tasks_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pages/current-tasks/current-tasks.component */
      "o8Bt");
      /* harmony import */


      var _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/my-projects/my-projects.component */
      "W3ir");
      /* harmony import */


      var _pages_one_project_one_project_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/one-project/one-project.component */
      "S6Z9");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./pages/create-project/create-project.component */
      "LtM/");
      /* harmony import */


      var _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./pages/setting/setting.component */
      "H+hM");
      /* harmony import */


      var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pages/forget-password/forget-password.component */
      "BUfL");
      /* harmony import */


      var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./pages/reset-password/reset-password.component */
      "9TUh");
      /* harmony import */


      var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./pipes/phone.pipe */
      "uMhb");
      /* harmony import */


      var _services_httpInterceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./services/httpInterceptor */
      "zw5x");
      /* harmony import */


      var _components_remove_member_modal_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/remove-member-modal/remove-member-modal.component */
      "Ijrn"); // Routing Module
      // app component
      // Components
      // Pages
      // Pipes
      // Services


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _services_httpInterceptor__WEBPACK_IMPORTED_MODULE_40__["CustomInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_28__["HomePageComponent"], _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_29__["SignUpComponent"], _pages_current_tasks_current_tasks_component__WEBPACK_IMPORTED_MODULE_31__["CurrentTasksComponent"], _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TableTasksComponent"], _components_row_task_row_task_component__WEBPACK_IMPORTED_MODULE_8__["RowTaskComponent"], _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_9__["MenuLoginComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundComponent"], _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_32__["MyProjectsComponent"], _components_project_row_project_row_component__WEBPACK_IMPORTED_MODULE_10__["ProjectRowComponent"], _pages_one_project_one_project_component__WEBPACK_IMPORTED_MODULE_33__["OneProjectComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _pages_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_35__["CreateProjectComponent"], _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_18__["AddTaskModalComponent"], _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_36__["SettingComponent"], _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgetPasswordComponent"], _components_forget_pass_email_card_forget_pass_email_card_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPassEmailCardComponent"], _components_forget_pass_email_sended_forget_pass_email_sended_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPassEmailSendedComponent"], _components_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_16__["SigninFormComponent"], _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_13__["ImgProfileInputComponent"], _components_cropper_img_cropper_img_component__WEBPACK_IMPORTED_MODULE_14__["CropperImgComponent"], _components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePasswordComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__["ResetPasswordComponent"], _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_17__["AddMemberComponent"], _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_39__["PhonePipe"], _components_project_members_modal_project_members_modal_component__WEBPACK_IMPORTED_MODULE_19__["ProjectMembersModalComponent"], _components_table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_20__["TableInviteesManagementComponent"], _components_delete_project_modal_delete_project_modal_component__WEBPACK_IMPORTED_MODULE_21__["DeleteProjectModalComponent"], _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__["TaskFormComponent"], _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_23__["ProjectFormComponent"], _components_rename_project_modal_rename_project_modal_component__WEBPACK_IMPORTED_MODULE_24__["RenameProjectModalComponent"], _components_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_25__["DeleteTaskModalComponent"], _components_invite_member_modal_invite_member_modal_component__WEBPACK_IMPORTED_MODULE_26__["InviteMemberModalComponent"], _components_remove_member_modal_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_41__["RemoveMemberModalComponent"], _components_change_permission_modal_change_permission_modal_component__WEBPACK_IMPORTED_MODULE_27__["ChangePermissionModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_28__["HomePageComponent"], _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_29__["SignUpComponent"], _pages_current_tasks_current_tasks_component__WEBPACK_IMPORTED_MODULE_31__["CurrentTasksComponent"], _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TableTasksComponent"], _components_row_task_row_task_component__WEBPACK_IMPORTED_MODULE_8__["RowTaskComponent"], _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_9__["MenuLoginComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundComponent"], _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_32__["MyProjectsComponent"], _components_project_row_project_row_component__WEBPACK_IMPORTED_MODULE_10__["ProjectRowComponent"], _pages_one_project_one_project_component__WEBPACK_IMPORTED_MODULE_33__["OneProjectComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _pages_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_35__["CreateProjectComponent"], _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_18__["AddTaskModalComponent"], _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_36__["SettingComponent"], _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgetPasswordComponent"], _components_forget_pass_email_card_forget_pass_email_card_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPassEmailCardComponent"], _components_forget_pass_email_sended_forget_pass_email_sended_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPassEmailSendedComponent"], _components_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_16__["SigninFormComponent"], _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_13__["ImgProfileInputComponent"], _components_cropper_img_cropper_img_component__WEBPACK_IMPORTED_MODULE_14__["CropperImgComponent"], _components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePasswordComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__["ResetPasswordComponent"], _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_17__["AddMemberComponent"], _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_39__["PhonePipe"], _components_project_members_modal_project_members_modal_component__WEBPACK_IMPORTED_MODULE_19__["ProjectMembersModalComponent"], _components_table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_20__["TableInviteesManagementComponent"], _components_delete_project_modal_delete_project_modal_component__WEBPACK_IMPORTED_MODULE_21__["DeleteProjectModalComponent"], _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__["TaskFormComponent"], _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_23__["ProjectFormComponent"], _components_rename_project_modal_rename_project_modal_component__WEBPACK_IMPORTED_MODULE_24__["RenameProjectModalComponent"], _components_delete_task_modal_delete_task_modal_component__WEBPACK_IMPORTED_MODULE_25__["DeleteTaskModalComponent"], _components_invite_member_modal_invite_member_modal_component__WEBPACK_IMPORTED_MODULE_26__["InviteMemberModalComponent"], _components_remove_member_modal_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_41__["RemoveMemberModalComponent"], _components_change_permission_modal_change_permission_modal_component__WEBPACK_IMPORTED_MODULE_27__["ChangePermissionModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _services_httpInterceptor__WEBPACK_IMPORTED_MODULE_40__["CustomInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "al0p":
    /*!***********************************************************!*\
      !*** ./src/app/components/row-task/row-task.component.ts ***!
      \***********************************************************/

    /*! exports provided: RowTaskComponent */

    /***/
    function al0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RowTaskComponent", function () {
        return RowTaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["app-row-task", ""];

      function RowTaskComponent_a_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/profile/" + ctx_r0.task.owner._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.task.owner.imgUrl ? ctx_r0.task.owner.imgUrl : "./assets/profile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.task.owner.fName, " ", ctx_r0.task.owner.lName, "");
        }
      }

      function RowTaskComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "none");
        }
      }

      var RowTaskComponent = /*#__PURE__*/function () {
        function RowTaskComponent(taskService) {
          _classCallCheck(this, RowTaskComponent);

          this.taskService = taskService;
        }

        _createClass(RowTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRemoveTask",
          value: function onRemoveTask() {
            this.taskService.setCurrentTask(this.task);
            $('#deleteTaskModal').modal('show');
          }
        }, {
          key: "onEditTask",
          value: function onEditTask() {
            this.taskService.setCurrentTask(this.task);
            $('#addTaskModal').modal('show');
            console.log('task: ', this.task);
          }
        }, {
          key: "onStatusChange",
          value: function onStatusChange(status) {
            this.task.status = status;
            this.updateTask();
          }
        }, {
          key: "onPriorityChange",
          value: function onPriorityChange(priority) {
            this.task.priority = priority;
            this.updateTask();
          }
        }, {
          key: "updateTask",
          value: function updateTask() {
            var taskToUpdate = Object.assign({}, this.task);
            taskToUpdate.projectID = taskToUpdate.projectID._id;
            taskToUpdate.owner = taskToUpdate.owner._id;
            this.taskService.update(taskToUpdate);
          }
        }, {
          key: "getStatusClass",
          value: function getStatusClass(statusTask) {
            switch (statusTask) {
              case 'on hold':
                return 'status-hold';

              case 'working on it':
                return 'status-working';

              case 'waiting for response':
                return 'status-waiting';

              case 'blocked':
                return 'status-blocked';

              case 'done':
                return 'status-done';

              case 'not started yet':
                return 'status-not-started';
            }
          }
        }, {
          key: "getPriorityClass",
          value: function getPriorityClass(priorityTask) {
            switch (priorityTask) {
              case 'low':
                return 'priority-low';

              case 'medium':
                return 'priority-medium';

              case 'high':
                return 'priority-high';
            }
          }
        }]);

        return RowTaskComponent;
      }();

      RowTaskComponent.ɵfac = function RowTaskComponent_Factory(t) {
        return new (t || RowTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
      };

      RowTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RowTaskComponent,
        selectors: [["", "app-row-task", ""]],
        inputs: {
          task: "task"
        },
        attrs: _c0,
        decls: 53,
        vars: 15,
        consts: [[1, "actions-task-td"], [1, "dropdown"], ["id", "taskMenu", "role", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn-actions"], ["src", "./assets/three-dots-vertical.svg"], ["aria-labelledby", "taskMenu", 1, "dropdown-menu"], ["type", "button", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], ["src", "./assets/trash.svg", 1, "mr-1"], ["src", "./assets/pencil-square.svg", 1, "mr-1"], [1, "title-task"], [1, "td-owner"], ["class", "d-flex align-items-center justify-content-center", 3, "href", 4, "ngIf", "ngIfElse"], ["nonOwner", ""], [1, "status-drop", "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "data-offset", "-11,0", 1, "btn-drop", 3, "ngClass"], [1, "dropdown-menu", "status-drop-menu"], ["type", "button", 1, "dropdown-item", "task-item", "status-hold", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "status-working", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "status-done", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "status-waiting", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "status-blocked", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "priority-low", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "priority-medium", 3, "click"], ["type", "button", 1, "dropdown-item", "task-item", "priority-high", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", 3, "href"], [1, "mr-1", 3, "src"], [1, "m-0", "p-0"]],
        template: function RowTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_6_listener() {
              return ctx.onRemoveTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Remove task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_11_listener() {
              return ctx.onEditTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RowTaskComponent_a_18_Template, 4, 4, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RowTaskComponent_ng_template_19_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_26_listener() {
              return ctx.onStatusChange("on hold");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " On hold ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_28_listener() {
              return ctx.onStatusChange("working on it");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Working on it ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_30_listener() {
              return ctx.onStatusChange("done");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Done ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_32_listener() {
              return ctx.onStatusChange("waiting for response");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Waiting for response ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_34_listener() {
              return ctx.onStatusChange("blocked");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Blocked ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_41_listener() {
              return ctx.onPriorityChange("low");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Low ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_43_listener() {
              return ctx.onPriorityChange("medium");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Medium ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowTaskComponent_Template_button_click_45_listener() {
              return ctx.onPriorityChange("high");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " High ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task.owner)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getStatusClass(ctx.task.status));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.status, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getPriorityClass(ctx.task.priority));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.priority, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 9, ctx.task.startDate, "dd/MM/yyyy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 12, ctx.task.endDate, "dd/MM/yyyy"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["td[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\r\n\r\n.td-owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border: 1px solid #e0e0e0;\r\n  padding: 1px;\r\n  border-radius: 100%;\r\n  width: 45px;\r\n}\r\n\r\n.td-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.td-owner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.title-task[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.table-contain[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n}\r\n\r\n.actions-task-td[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  width: 2px;\r\n  background-color: #efefef;\r\n}\r\n\r\n.actions-task-td[_ngcontent-%COMP%]   .btn-actions[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 49px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n\r\n.btn-drop[_ngcontent-%COMP%] {\r\n  width: 6em;\r\n  height: 3.5em;\r\n  color: #ffffff;\r\n  padding: 2px;\r\n  border-radius: 5px;\r\n  font-weight: 500;\r\n  font-size: 0.8rem;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  white-space: normal;\r\n}\r\n\r\n.status-drop-menu[_ngcontent-%COMP%] {\r\n   width: 6.5em;\r\n  min-width: 6em;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%] {\r\n  width: 6em;\r\n  height: 3.5em;\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  margin: 5px auto;\r\n  padding: 2px;\r\n  font-size: 0.8rem;\r\n  font-weight: 500;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  white-space: normal;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%]:first-child{\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.task-item[_ngcontent-%COMP%]:last-child{\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n\r\n\r\n.status-hold[_ngcontent-%COMP%] {\r\n  background-color: var(--status-hold);\r\n}\r\n\r\n.status-working[_ngcontent-%COMP%] {\r\n  background-color: var(--status-working);\r\n}\r\n\r\n.status-waiting[_ngcontent-%COMP%] {\r\n  background-color: var(--status-waiting);\r\n}\r\n\r\n.status-blocked[_ngcontent-%COMP%] {\r\n  background-color: var(--status-blocked);\r\n}\r\n\r\n.status-done[_ngcontent-%COMP%] {\r\n  background-color: var(--status-done);\r\n}\r\n\r\n.status-not-started[_ngcontent-%COMP%] {\r\n  background-color: var(--status-not-started);\r\n}\r\n\r\n\r\n\r\n.priority-high[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-high);\r\n}\r\n\r\n.priority-medium[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-medium);\r\n}\r\n\r\n.priority-low[_ngcontent-%COMP%] {\r\n  background-color: var(--priority-low);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdy10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7R0FDRyxZQUFZO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkMiLCJmaWxlIjoicm93LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udGQtb3duZXIgaW1nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuXHJcbi50ZC1vd25lciBhIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi50ZC1vd25lciBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZS10YXNrIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbnMtdGFzay10ZCB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5hY3Rpb25zLXRhc2stdGQgLmJ0bi1hY3Rpb25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ5cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIERvcnAtZG93biBib3gqL1xyXG4uYnRuLWRyb3Age1xyXG4gIHdpZHRoOiA2ZW07XHJcbiAgaGVpZ2h0OiAzLjVlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5zdGF0dXMtZHJvcC1tZW51IHtcclxuICAgd2lkdGg6IDYuNWVtO1xyXG4gIG1pbi13aWR0aDogNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuICB3aWR0aDogNmVtO1xyXG4gIGhlaWdodDogMy41ZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW06Zmlyc3QtY2hpbGR7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi50YXNrLWl0ZW06bGFzdC1jaGlsZHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFN0YXR1cyB0YXNrICovXHJcbi5zdGF0dXMtaG9sZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLWhvbGQpO1xyXG59XHJcbi5zdGF0dXMtd29ya2luZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLXdvcmtpbmcpO1xyXG59XHJcbi5zdGF0dXMtd2FpdGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLXdhaXRpbmcpO1xyXG59XHJcbi5zdGF0dXMtYmxvY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLWJsb2NrZWQpO1xyXG59XHJcbi5zdGF0dXMtZG9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzLWRvbmUpO1xyXG59XHJcbi5zdGF0dXMtbm90LXN0YXJ0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1cy1ub3Qtc3RhcnRlZCk7XHJcbn1cclxuXHJcbi8qIHByaW9yaXRpZXMgKi9cclxuLnByaW9yaXR5LWhpZ2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gpO1xyXG59XHJcbi5wcmlvcml0eS1tZWRpdW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZGl1bSk7XHJcbn1cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93KTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-row-task]',
            templateUrl: './row-task.component.html',
            styleUrls: ['./row-task.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
          }];
        }, {
          task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "c3AT":
    /*!*********************************************!*\
      !*** ./src/app/services/project.service.ts ***!
      \*********************************************/

    /*! exports provided: ProjectService */

    /***/
    function c3AT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./member.service */
      "XPT/");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG"); // Environment variables


      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(http, memberService, authService) {
          _classCallCheck(this, ProjectService);

          this.http = http;
          this.memberService = memberService;
          this.authService = authService;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
          this.endpoint = 'project';
          this._projects$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.projects$ = this._projects$.asObservable();
          this._currentProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.currentProject$ = this._currentProject$.asObservable();
          this.errMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.successMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.loadUserProjects();
        }

        _createClass(ProjectService, [{
          key: "loadUserProjects",
          value: function loadUserProjects() {
            var _this24 = this;

            this.authService.loggedUser$.subscribe(function (userLogged) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this25 = this;

                var filter;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        filter = {
                          userID: userLogged._id
                        };
                        _context4.next = 3;
                        return this.memberService.getMembers(filter);

                      case 3:
                        _context4.sent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (members) {
                          var projects = members.map(function (member) {
                            return member.projectID;
                          });
                          return projects;
                        })).subscribe(function (projects) {
                          _this25._projects$.next(projects);
                        }, function (error) {
                          console.error(error);
                        });

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "createProject",
          value: function createProject(data) {
            var _this26 = this;

            this.http.post("".concat(this.BASE_URL).concat(this.endpoint), data).subscribe(function (createdProject) {
              _this26._currentProject$.next(createdProject);

              var projects = _this26._projects$.value;

              _this26._projects$.next([createdProject].concat(_toConsumableArray(projects)));

              _this26.successMsg$.next('New project created.');
            }, function (err) {
              console.error(err);

              _this26.errMsg$.next('We are sorry, we got a problem.\nPlease try again later.');
            });
          }
        }, {
          key: "getByID",
          value: function getByID(projectID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", this.http.get("".concat(this.BASE_URL).concat(this.endpoint, "/").concat(projectID)));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "removeProject",
          value: function removeProject(projectID) {
            var _this27 = this;

            this.http["delete"]("".concat(this.BASE_URL).concat(this.endpoint, "/").concat(projectID)).subscribe(function (res) {
              _this27.successMsg$.next('Project successfully deleted.');
            }, function (error) {
              _this27.errMsg$.next('Delete project failed, please try again.');

              console.error(error);
            });
          }
        }, {
          key: "updateProject",
          value: function updateProject(projectToUpdate) {
            var _this28 = this;

            this.http.put("".concat(this.BASE_URL).concat(this.endpoint), projectToUpdate).subscribe(function (updatedProject) {
              _this28.setCurrentProject(updatedProject);

              _this28.successMsg$.next('Project updated successfully');
            }, function (error) {
              _this28.errMsg$.next('Sorry we got a problem, please try again later');

              console.error(error);
            });
          }
        }, {
          key: "setCurrentProject",
          value: function setCurrentProject(project) {
            this._currentProject$.next(project);
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]));
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dUpr":
    /*!************************************************!*\
      !*** ./src/app/services/cloudinary.service.ts ***!
      \************************************************/

    /*! exports provided: CloudinaryService */

    /***/
    function dUpr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloudinaryService", function () {
        return CloudinaryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configs_cloudinary_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../configs/cloudinary.config.js */
      "k/Ci");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CloudinaryService = /*#__PURE__*/function () {
        function CloudinaryService(http) {
          _classCallCheck(this, CloudinaryService);

          this.http = http;
        }

        _createClass(CloudinaryService, [{
          key: "uploadImg",
          value: function uploadImg(file) {
            var UPLOAD_URL = _configs_cloudinary_config_js__WEBPACK_IMPORTED_MODULE_1__["cloudinaryConfig"].UPLOAD_URL;
            var UPLOAD_PRESET = _configs_cloudinary_config_js__WEBPACK_IMPORTED_MODULE_1__["cloudinaryConfig"].UPLOAD_PRESET;
            var formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_PRESET);
            formData.append('folder', 'TaskTeam');
            return this.http.post(UPLOAD_URL, formData, {
              reportProgress: true,
              observe: 'events'
            });
          }
        }]);

        return CloudinaryService;
      }();

      CloudinaryService.ɵfac = function CloudinaryService_Factory(t) {
        return new (t || CloudinaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CloudinaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CloudinaryService,
        factory: CloudinaryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g/Dx":
    /*!*********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function gDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)();
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        decls: 2,
        vars: 0,
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nav-bar works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gMoM":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/forget-pass-email-sended/forget-pass-email-sended.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ForgetPassEmailSendedComponent */

    /***/
    function gMoM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPassEmailSendedComponent", function () {
        return ForgetPassEmailSendedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ForgetPassEmailSendedComponent = /*#__PURE__*/function () {
        function ForgetPassEmailSendedComponent() {
          _classCallCheck(this, ForgetPassEmailSendedComponent);
        }

        _createClass(ForgetPassEmailSendedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgetPassEmailSendedComponent;
      }();

      ForgetPassEmailSendedComponent.ɵfac = function ForgetPassEmailSendedComponent_Factory(t) {
        return new (t || ForgetPassEmailSendedComponent)();
      };

      ForgetPassEmailSendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetPassEmailSendedComponent,
        selectors: [["app-forget-pass-email-sended"]],
        decls: 21,
        vars: 0,
        consts: [[1, "forget-contain", "card", "bg-light"], [1, "header-forget", "card-header"], [1, "icon-lock"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 23 32"], ["fill", "currentColor", "d", "M19.65,14.425 L19.65,8.125 C19.65,3.782725 16.1157,0.25 11.775,0.25 C7.43115,0.25 3.9,3.782725 3.9,8.125 L3.9,14.425 C2.162775,14.425 0.75,15.8362 0.75,17.575 L0.75,28.6 C0.75,30.337225 2.162775,31.75 3.9,31.75 L19.65,31.75 C21.387225,31.75 22.8,30.337225 22.8,28.6 L22.8,17.575 C22.8,15.8362 21.387225,14.425 19.65,14.425 Z M11.775,25.45 C10.4709,25.45 9.4125,24.3916 9.4125,23.0875 C9.4125,21.7834 10.4709,20.725 11.775,20.725 C13.0791,20.725 14.1375,21.7834 14.1375,23.0875 C14.1375,24.3916 13.0791,25.45 11.775,25.45 Z M16.5,14.425 L7.05,14.425 L7.05,8.125 C7.05,5.51995 9.16995,3.4 11.775,3.4 C14.38005,3.4 16.5,5.51995 16.5,8.125 L16.5,14.425 Z"], [1, "header-text", "font-weight-bold"], [1, "main-forget", "card-body"], [1, "m-0", "mb-1"], [1, "font-weight-bold", "m-0", "mb-1"], [1, "m-0"], [1, "card-footer"], ["href", "/signIn", 1, "card-text"], [1, "text-muted"], ["href", "/forget"]],
        template: function ForgetPassEmailSendedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " An email has been sent. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We sent email to you at");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "lior9631@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Please follow the instructions in the email to get a new password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Return to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2022");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Resend email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".forget-contain[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  width: 600px;\r\n  max-width: 100%;\r\n}\r\n\r\n.header-forget[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.icon-lock[_ngcontent-%COMP%] {\r\n  -webkit-margin-end: 5px;\r\n          margin-inline-end: 5px;\r\n}\r\n\r\n.header-text[_ngcontent-%COMP%] {\r\n  line-height: 20px;\r\n  line-height: 1.25em;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin: 0 15px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzLWVtYWlsLXNlbmRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZm9yZ2V0LXBhc3MtZW1haWwtc2VuZGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ2V0LWNvbnRhaW4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyLWZvcmdldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1sb2NrIHN2ZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaWNvbi1sb2NrIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgc3BhbiB7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciBhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPassEmailSendedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forget-pass-email-sended',
            templateUrl: './forget-pass-email-sended.component.html',
            styleUrls: ['./forget-pass-email-sended.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "i6c7":
    /*!******************************************!*\
      !*** ./src/app/services/task.service.ts ***!
      \******************************************/

    /*! exports provided: TaskService */

    /***/
    function i6c7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // Environment variables


      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
          this.endpoint = 'task';
          this._tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.tasks$ = this._tasks$.asObservable();
          this._currentTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.currentTask$ = this._currentTask$.asObservable();
          this.taskMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.taskErr$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(TaskService, [{
          key: "loadTasks",
          value: function loadTasks() {
            var _this29 = this;

            var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.http.get("".concat(this.BASE_URL).concat(this.endpoint), {
              params: filter
            }).subscribe(function (tasks) {
              _this29._tasks$.next(tasks);
            }, function (error) {
              console.error(error);

              _this29.taskErr$.next(error);
            });
          }
        }, {
          key: "create",
          value: function create(task) {
            var _this30 = this;

            this.http.post("".concat(this.BASE_URL).concat(this.endpoint), task).subscribe(function (createdTask) {
              _this30._tasks$.next([createdTask].concat(_toConsumableArray(_this30._tasks$.value)));

              _this30.taskMsg$.next('Task created');
            }, function (error) {
              console.error(error);

              _this30.taskErr$.next(error);
            });
          }
        }, {
          key: "remove",
          value: function remove(taskID) {
            var _this31 = this;

            this.http["delete"]("".concat(this.BASE_URL).concat(this.endpoint, "/").concat(taskID)).subscribe(function (res) {
              // Update tasks
              var tasks = _this31._tasks$.value.filter(function (task) {
                return task._id != taskID;
              });

              _this31._tasks$.next(tasks);

              _this31.taskMsg$.next('Task deleted');
            }, function (error) {
              console.error(error);

              _this31.taskErr$.next('Sorry, we got a problem.\nPlease try again.');
            });
          }
        }, {
          key: "update",
          value: function update(taskToUpdate) {
            var _this32 = this;

            this.http.put("".concat(this.BASE_URL).concat(this.endpoint), taskToUpdate).subscribe(function (updatedTask) {
              // Update tasks
              var tasks = _this32._tasks$.value.map(function (task) {
                if (task._id != taskToUpdate._id) {
                  return task;
                } else {
                  return updatedTask;
                }
              });

              _this32._tasks$.next(tasks);

              _this32.taskMsg$.next('Task updated');
            }, function (error) {
              console.error(error);

              _this32.taskErr$.next('Sorry, we got a problem.\nPlease try again.');
            });
          }
        }, {
          key: "getTasksProjectCount",
          value: function getTasksProjectCount(projectID) {
            return this.http.get("".concat(this.BASE_URL).concat(this.endpoint, "/countTasks/").concat(projectID));
          }
        }, {
          key: "setCurrentTask",
          value: function setCurrentTask(task) {
            this._currentTask$.next(task);
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k/Ci":
    /*!******************************************!*\
      !*** ./src/configs/cloudinary.config.js ***!
      \******************************************/

    /*! exports provided: cloudinaryConfig */

    /***/
    function kCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloudinaryConfig", function () {
        return cloudinaryConfig;
      });

      var cloudinaryConfig = {
        CLOUD_NAME: 'liorapi',
        UPLOAD_URL: "https://api.cloudinary.com/v1_1/liorapi/image/upload",
        UPLOAD_PRESET: 'apilior'
      };
      /***/
    },

    /***/
    "k7BX":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/delete-task-modal/delete-task-modal.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: DeleteTaskModalComponent */

    /***/
    function k7BX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteTaskModalComponent", function () {
        return DeleteTaskModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DeleteTaskModalComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
        }
      }

      function DeleteTaskModalComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeleteTaskModalComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DeleteTaskModalComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DeleteTaskModalComponent = /*#__PURE__*/function () {
        function DeleteTaskModalComponent(taskService) {
          _classCallCheck(this, DeleteTaskModalComponent);

          this.taskService = taskService;
          this.task = null;
          this.successMsg = null;
          this.errorMsg = null;
          this.isLoading = false;
        }

        _createClass(DeleteTaskModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.successSub = this.taskService.taskMsg$.subscribe(function (msg) {
              _this33.successMsg = msg;
              _this33.isLoading = false;
              $('#deleteTaskModal').modal('hide');

              _this33.taskService.setCurrentTask(null);
            });
            this.errorSub = this.taskService.taskErr$.subscribe(function (errMsg) {
              _this33.errorMsg = errMsg;
              _this33.isLoading = false;
            });
            this.taskSub = this.taskService.currentTask$.subscribe(function (currentTask) {
              _this33.task = currentTask;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.successSub.unsubscribe();
            this.errorSub.unsubscribe();
            this.taskSub.unsubscribe();
          }
        }, {
          key: "removeTask",
          value: function removeTask() {
            this.isLoading = true;
            this.taskService.remove(this.task._id);
          }
        }]);

        return DeleteTaskModalComponent;
      }();

      DeleteTaskModalComponent.ɵfac = function DeleteTaskModalComponent_Factory(t) {
        return new (t || DeleteTaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
      };

      DeleteTaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteTaskModalComponent,
        selectors: [["app-delete-task-modal"]],
        decls: 22,
        vars: 6,
        consts: [["id", "deleteTaskModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "m-0"], [1, "modal-footer", "d-flex"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], [4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "sr-only"], [1, "ml-2"]],
        template: function DeleteTaskModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete this task?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeleteTaskModalComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Are you sure you want to delete this task?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This action cannot be undone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteTaskModalComponent_Template_button_click_16_listener() {
              return ctx.removeTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeleteTaskModalComponent_div_17_Template, 3, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DeleteTaskModalComponent_span_18_Template, 2, 0, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DeleteTaskModalComponent_span_19_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtdGFzay1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteTaskModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-task-modal',
            templateUrl: './delete-task-modal.component.html',
            styleUrls: ['./delete-task-modal.component.css']
          }]
        }], function () {
          return [{
            type: _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kYXX":
    /*!*****************************************************************!*\
      !*** ./src/app/components/signin-form/signin-form.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SigninFormComponent */

    /***/
    function kYXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninFormComponent", function () {
        return SigninFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["app-signin-form", ""];

      function SigninFormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
        }
      }

      function SigninFormComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninFormComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter a valid email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "e.g example@mail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninFormComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninFormComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SigninFormComponent = /*#__PURE__*/function () {
        function SigninFormComponent(fb, authService, router) {
          _classCallCheck(this, SigninFormComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.userLoggedIn = null; // Error

          this.errMsg = null;
          this.isLoading = false;
          this.isWasSubmit = false;
          this.logIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.logIn = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }

        _createClass(SigninFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            this.loggedSub = this.authService.loggedUser$.subscribe(function (user) {
              _this34.userLoggedIn = user;

              if (user) {
                _this34.router.navigate(['/projects']);
              }
            });
            this.errSub = this.authService.errAuth$.subscribe(function (err) {
              _this34.isLoading = false;
              _this34.errMsg = err.msg;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.loggedSub.unsubscribe();
            this.errSub.unsubscribe();
          } // Getter form-controls

        }, {
          key: "isIncorrectData",
          value: function isIncorrectData() {
            return this.errMsg;
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            this.isWasSubmit = true;
            this.errMsg = null;

            if (this.logIn.status === 'VALID') {
              this.isLoading = true;
              var _this$logIn$value = this.logIn.value,
                  email = _this$logIn$value.email,
                  password = _this$logIn$value.password;
              this.authService.login(email, password);
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.logIn.controls[inputName].errors || this.errMsg) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "fc",
          get: function get() {
            return this.logIn.controls;
          }
        }]);

        return SigninFormComponent;
      }();

      SigninFormComponent.ɵfac = function SigninFormComponent_Factory(t) {
        return new (t || SigninFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SigninFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninFormComponent,
        selectors: [["", "app-signin-form", ""]],
        attrs: _c0,
        decls: 26,
        vars: 10,
        consts: [["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["type", "email", "placeholder", "Email", "formControlName", "email", "autocomplete", "on", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "row"], ["id", "btn", "type", "submit", 1, "btn", "btn-primary", "mx-auto", "col-10", 3, "disabled"], [1, "row", "justify-content-center", "mt-3"], [1, "mr-3"], ["href", "/forget"], [1, "row", "justify-content-center", "align-items-center", "mt-3"], [1, "my-0", "mr-4"], ["href", "/signup", 1, "btn", "btn-outline-success"], [1, "alert", "alert-danger"], [1, "m-0"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]],
        template: function SigninFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninFormComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SigninFormComponent_div_5_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SigninFormComponent_div_6_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SigninFormComponent_div_10_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SigninFormComponent_span_13_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SigninFormComponent_span_14_Template, 4, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forget your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reset your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign-Up Free!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.logIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.email.errors == null ? null : ctx.fc.email.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.errMsg && (ctx.fc.email.errors == null ? null : ctx.fc.email.errors.email));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.password.errors == null ? null : ctx.fc.password.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: [".form-group[_ngcontent-%COMP%] {\r\n  min-height: 62px;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 85%;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 130px;\r\n  height: 130px;\r\n  outline: none;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 130px;\r\n  height: 130px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic2lnbmluLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICBtaW4taGVpZ2h0OiA2MnB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbn1cclxuXHJcbi5idG4tcHJvZmlsZS1pbWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJvZmlsZS1pbWcgaW1nIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-signin-form]',
            templateUrl: './signin-form.component.html',
            styleUrls: ['./signin-form.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      "7RJT");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./storage.service */
      "n90K"); // Imports rxjs
      // Environment variables


      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.key = 'user';
          this.END_POINT = 'auth/';
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl; // tslint:disable-next-line: variable-name

          this._loggedUser$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._loadLoggedUser());
          this.loggedUser$ = this._loggedUser$.asObservable();
          this.errAuth$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(AuthService, [{
          key: "_loadLoggedUser",
          value: function _loadLoggedUser() {
            var loggedUser = this.storage.load(this.key) || null;
            return loggedUser;
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this35 = this;

            var data = {
              email: email,
              password: password
            };
            this.http.post("".concat(this.BASE_URL).concat(this.END_POINT, "/login"), data, {
              withCredentials: true
            }).subscribe(function (loggedUser) {
              _this35.storage.store(_this35.key, loggedUser);

              _this35._loggedUser$.next(loggedUser);
            }, function (error) {
              if (Array.isArray(error.error)) {
                error = error.error[0];
              } else {
                console.error(error);
                error = {
                  location: 'body',
                  msg: 'We are sorry, we got a problem.\nPlease try again.',
                  param: 'unknown'
                };
              }

              _this35.errAuth$.next(error);
            });
          }
        }, {
          key: "signUp",
          value: function signUp(user) {
            var _this36 = this;

            this.http.post("".concat(this.BASE_URL).concat(this.END_POINT, "/signup"), user).subscribe(function (loggedUser) {
              _this36.storage.store(_this36.key, loggedUser);

              _this36._loggedUser$.next(loggedUser);
            }, function (error) {
              if (Array.isArray(error.error)) {
                error = error.error[0];
              } else {
                console.error(error);
                error = {
                  location: 'body',
                  msg: 'We are sorry, we got a problem.\nPlease try again.',
                  param: 'unknown'
                };
              }

              _this36.errAuth$.next(error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.http.get("".concat(this.BASE_URL, "/").concat(this.END_POINT, "/logout"));
            this.storage.remove(this.key);

            this._loggedUser$.next(null);
          }
        }, {
          key: "updateUserLogged",
          value: function updateUserLogged(userUpdate) {
            this.storage.store(this.key, userUpdate);

            this._loggedUser$.next(userUpdate);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mqns":
    /*!***************************************************!*\
      !*** ./src/app/validators/confirmed.validator.ts ***!
      \***************************************************/

    /*! exports provided: ConfirmedValidator */

    /***/
    function mqns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function () {
        return ConfirmedValidator;
      });

      function ConfirmedValidator(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              confirmedValidator: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "n90K":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function n90K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "store",
          value: function store(key, value) {
            localStorage.setItem(key, JSON.stringify(value) || null);
          }
        }, {
          key: "load",
          value: function load(key) {
            var data = localStorage.getItem(key);
            return data ? JSON.parse(data) : undefined;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            localStorage.removeItem(key);
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "o8Bt":
    /*!****************************************************************!*\
      !*** ./src/app/pages/current-tasks/current-tasks.component.ts ***!
      \****************************************************************/

    /*! exports provided: CurrentTasksComponent */

    /***/
    function o8Bt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentTasksComponent", function () {
        return CurrentTasksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/menu-login/menu-login.component */
      "RC11");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/add-task-modal/add-task-modal.component */
      "XTzb");
      /* harmony import */


      var _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/table-tasks/table-tasks.component */
      "KtSq");

      function CurrentTasksComponent_section_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading, please wait...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CurrentTasksComponent_section_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have no tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CurrentTasksComponent_section_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentTasksComponent_section_8_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var project_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.scrollToTable(project_r4.projectName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-table-tasks", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "table" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.projectName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "collapse" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tasks", project_r4.tasks);
        }
      }

      function CurrentTasksComponent_section_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentTasksComponent_section_8_div_1_Template, 6, 5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.projects);
        }
      }

      var CurrentTasksComponent = /*#__PURE__*/function () {
        function CurrentTasksComponent(authService, taskService) {
          _classCallCheck(this, CurrentTasksComponent);

          this.authService = authService;
          this.taskService = taskService;
          this.projects = null;
          this.isCollapse = true; // If the table-task collapse

          this.isLoading = true;
        }

        _createClass(CurrentTasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.authService.loggedUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (user) {
              _this37.taskService.loadTasks({
                userID: user._id
              });
            });
            this.taskService.tasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tasks) {
              // Create map tasks by project name
              var mapTasks = _this37.mapsTasks(tasks); // Convert "tasksMap" to array of objects by model {projectName:string, tasks:Task[]}


              var projectsWithTasks = $.map(mapTasks, function (tasks, projectName) {
                return {
                  projectName: projectName,
                  tasks: tasks
                };
              });
              return projectsWithTasks;
            })).subscribe(function (projects) {
              if (_this37.projects) _this37.isLoading = false;
              _this37.projects = projects;
            });
          }
          /** Scroll the screen to the tasks-table when it opens */

        }, {
          key: "scrollToTable",
          value: function scrollToTable(idTable) {
            console.log({
              idTable: '#table' + idTable
            });
            this.isCollapse = !this.isCollapse; // If the tasks-table is close end the function

            if (this.isCollapse) {
              return;
            }

            setTimeout(function () {
              // Get element tasks-table
              var tableEl = document.querySelector('#table' + idTable); // Scroll the window  to the tasks-table

              tableEl.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
                inline: 'nearest'
              });
            }, 300);
          } // Maps the tasks by project names

        }, {
          key: "mapsTasks",
          value: function mapsTasks(tasks) {
            var mapTasks = {};
            tasks.forEach(function (task) {
              if (!(task.projectID.title in mapTasks)) {
                mapTasks[task.projectID.title] = [];
              }

              mapTasks[task.projectID.title].push(task);
            });
            return mapTasks;
          }
        }]);

        return CurrentTasksComponent;
      }();

      CurrentTasksComponent.ɵfac = function CurrentTasksComponent_Factory(t) {
        return new (t || CurrentTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]));
      };

      CurrentTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CurrentTasksComponent,
        selectors: [["app-current-tasks"]],
        decls: 10,
        vars: 3,
        consts: [[1, "layout-main"], [1, "current-tasks"], [1, "container"], [1, "header-page", "mx-0", "my-3", "p-0"], ["class", "d-flex align-items-center", 4, "ngIf"], [4, "ngIf"], ["class", "tables-tasks-contain", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["role", "status", 1, "spinner-border", 2, "width", "1.5rem", "height", "1.5rem"], [1, "h3", "ml-1"], [1, "h2", "mx-0", "my-3", "p-0"], [1, "tables-tasks-contain"], ["class", "table-contain", 3, "id", 4, "ngFor", "ngForOf"], [1, "table-contain", 3, "id"], ["data-toggle", "collapse", 1, "btn-table", "btn", "btn-dark", "btn-block", "dropdown-toggle", 3, "click"], [1, "collapse", 3, "id"], [1, "card", "card-body"], [3, "tasks"]],
        template: function CurrentTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CurrentTasksComponent_section_6_Template, 4, 0, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CurrentTasksComponent_section_7_Template, 3, 0, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CurrentTasksComponent_section_8_Template, 2, 1, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "add-task-modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.projects && !ctx.projects.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects && ctx.projects.length);
          }
        },
        directives: [_components_menu_login_menu_login_component__WEBPACK_IMPORTED_MODULE_4__["MenuLoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_add_task_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_table_tasks_table_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TableTasksComponent"]],
        styles: [".current-tasks[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 1.25rem 0;\r\n}\r\n\r\n.tables-tasks-contain[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n.table-contain[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.table-contain[_ngcontent-%COMP%]:not(:last-of-type) {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.btn-table[_ngcontent-%COMP%] {\r\n  font-family: NotoSansJP;\r\n  letter-spacing: 1px;\r\n  font-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY3VycmVudC10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbnQtdGFza3Mge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5cclxuLnRhYmxlcy10YXNrcy1jb250YWluIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnRuLXRhYmxlIHtcclxuICBmb250LWZhbWlseTogTm90b1NhbnNKUDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentTasksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-current-tasks',
            templateUrl: './current-tasks.component.html',
            styleUrls: ['./current-tasks.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pUKS":
    /*!*******************************************************************!*\
      !*** ./src/app/components/project-form/project-form.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProjectFormComponent */

    /***/
    function pUKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function () {
        return ProjectFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectFormComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter name to your project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectFormComponent_div_13_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
        }
      }

      function ProjectFormComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectFormComponent_div_13_span_2_Template, 1, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
        }
      }

      function ProjectFormComponent_div_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
        }
      }

      function ProjectFormComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectFormComponent_div_14_span_2_Template, 1, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
        }
      }

      var ProjectFormComponent = /*#__PURE__*/function () {
        function ProjectFormComponent(projectService, fb) {
          _classCallCheck(this, ProjectFormComponent);

          this.projectService = projectService;
          this.fb = fb;
          this.closeModalEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.projectFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.isLoading = false;
          this.isUpdating = false;
          this.isWasSubmit = false;
          this.project = null;
          this.projectFrom = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['']
          });
        }

        _createClass(ProjectFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            this.projectSub = this.projectService.currentProject$.subscribe(function (project) {
              if (_this38.isLoading) _this38.isLoading = false;

              if (_this38.isUpdating) {
                _this38.isUpdating = false;

                _this38.closeModalEv.emit();
              }
            });

            if (this.project) {
              this.projectFrom.patchValue({
                title: this.project.title,
                description: this.project.description
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.projectSub.unsubscribe();
          } // Get form-control

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this39 = this;

            this.isWasSubmit = true;
            this.projectService.errMsg$.next(null);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.project-form input').removeClass('is-invalid');

            if (this.projectFrom.status === 'VALID') {
              this.isLoading = true;
              var dataForm = this.projectFrom.value;

              if (!this.project) {
                // If there is still no project
                this.projectService.createProject(dataForm);
              } else {
                // If have a project...
                this.isUpdating = true;
                this.projectService.currentProject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (currProject) {
                  // Update current project
                  currProject.title = dataForm.title;
                  currProject.description = dataForm.description;

                  _this39.projectService.updateProject(currProject);
                });
              }
            }
          }
        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.projectFrom.controls[inputName].errors) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "fc",
          get: function get() {
            return this.projectFrom.controls;
          }
        }]);

        return ProjectFormComponent;
      }();

      ProjectFormComponent.ɵfac = function ProjectFormComponent_Factory(t) {
        return new (t || ProjectFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ProjectFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectFormComponent,
        selectors: [["app-project-form"]],
        inputs: {
          project: "project"
        },
        outputs: {
          closeModalEv: "closeModalEv"
        },
        decls: 15,
        vars: 6,
        consts: [["novalidate", "", 1, "project-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "placeholder", "Enter a name project", "formControlName", "title", "required", "", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "description"], ["name", "description", "id", "description", "cols", "30", "rows", "2", "placeholder", "Add description to your project", "formControlName", "description", 1, "form-control", 3, "ngClass"], ["class", "form-group", 4, "ngIf"], ["class", "form-group d-flex", 4, "ngIf"], [1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "form-group", "d-flex"], [1, "btn", "btn-lg", "btn-primary", "mr-2", 3, "disabled"], ["data-dismiss", "modal", 1, "btn", "btn-lg", "btn-secondary", 3, "disabled"]],
        template: function ProjectFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectFormComponent_p_6_Template, 2, 0, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Project description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(*Optional)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectFormComponent_div_13_Template, 4, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectFormComponent_div_14_Template, 6, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.projectFrom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.title.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.project);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.project-form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  -webkit-margin-start: 5px;\r\n          margin-inline-start: 5px;\r\n  font-weight: bold;\r\n  color: rgb(236, 0, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InByb2plY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvamVjdC1mb3JtIHNtYWxsIHtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYigyMzYsIDAsIDApO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-form',
            templateUrl: './project-form.component.html',
            styleUrls: ['./project-form.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, {
          closeModalEv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "qTot":
    /*!****************************************************!*\
      !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
      \****************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function qTot(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _validators_confirmed_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../validators/confirmed.validator */
      "mqns");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/img-profile-input/img-profile-input.component */
      "HxIC"); // Validators


      function SignUpComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
        }
      }

      function SignUpComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function SignUpComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter an email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email. Example example@mail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.emailUseMsg);
        }
      }

      function SignUpComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter an number phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Number phone. Example 0XXX XXX XXX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please write what is your job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a first name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A first name should have a capital letter at the beginning and only with letters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A last name should have a capital letter at the beginning of a name and only with letters and spaces ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 8 characters long");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password must be match");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_span_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 28);
        }
      }

      function SignUpComponent_span_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Loading...");
        }
      }

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(fb, router, authService) {
          var _this40 = this;

          _classCallCheck(this, SignUpComponent);

          this.fb = fb;
          this.router = router;
          this.authService = authService;
          this.signUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.isWasSubmit = false;
          this.isLoading = false; // Form massages

          this.emailUseMsg = null;
          this.errMsg = null;
          this.successMsg = null; // Profile image

          this.imgUrl = null;

          this.onSignUp = function () {
            if (_this40.errMsg) {
              _this40.errMsg = null;
            }

            if (_this40.emailUseMsg) {
              _this40.emailUseMsg = null;
            }

            if (_this40.signUp.status === 'VALID') {
              _this40.isLoading = true;
              var user = _this40.signUp.value;
              user.imgUrl = _this40.imgUrl;

              _this40.authService.signUp(user);
            } else {
              _this40.isWasSubmit = true;
            }
          };

          this.signUp = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
            fName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Z][a-z]+$')]],
            lName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Z][a-z]+\( [A-Z][a-z]+\)*$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^0[1-9][0-9]{7,8}$')]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            passconfrim: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: Object(_validators_confirmed_validator__WEBPACK_IMPORTED_MODULE_3__["ConfirmedValidator"])('password', 'passconfrim')
          });
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.errSub = this.authService.errAuth$.subscribe(function (err) {
              if (err.param === 'email') {
                _this41.emailUseMsg = err.msg;
              } else {
                _this41.errMsg = err.msg;
              }

              _this41.isLoading = false;
            });
            this.userLoggedSub = this.authService.loggedUser$.subscribe(function (user) {
              if (user) {
                _this41.isLoading = false;

                _this41.router.navigate(['/']);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.errSub.unsubscribe();
            this.userLoggedSub.unsubscribe();
          } // Getter form-controls

        }, {
          key: "GetValidationClass",
          value: function GetValidationClass(inputName) {
            if (!this.isWasSubmit) {
              return '';
            } else if (this.signUp.controls[inputName].errors) {
              return 'is-invalid';
            } else {
              return 'is-valid';
            }
          }
        }, {
          key: "onGotImgUrl",
          value: function onGotImgUrl(imgUrl) {
            this.imgUrl = imgUrl;
            jquery__WEBPACK_IMPORTED_MODULE_2__('.collapse').removeClass('show');
          }
        }, {
          key: "fc",
          get: function get() {
            return this.signUp.controls;
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-sign-up"]],
        decls: 58,
        vars: 31,
        consts: [[1, "container"], ["href", "/"], ["src", "../../../assets/logo.png", "alt", ""], [1, "h1"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["type", "button", "data-toggle", "collapse", "data-target", "#imgProfileInput", 1, "btn-profile-img"], ["alt", "Avatar", 3, "src"], ["id", "imgProfileInput", 1, "collapse", "mt-2"], [3, "passImgUrl"], ["type", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "placeholder", "Number phone", "formControlName", "phone", "required", "", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "What is your job?", "formControlName", "title", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], [1, "col"], ["type", "text", "placeholder", "First name", "formControlName", "fName", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Last name", "formControlName", "lName", 1, "form-control", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "passconfrim", 1, "form-control", 3, "ngClass"], [1, "col", "text-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Join us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSignUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignUpComponent_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_div_8_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-img-profile-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passImgUrl", function SignUpComponent_Template_app_img_profile_input_passImgUrl_13_listener($event) {
              return ctx.onGotImgUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignUpComponent_div_17_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignUpComponent_div_18_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignUpComponent_div_23_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignUpComponent_div_24_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignUpComponent_div_28_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignUpComponent_div_33_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignUpComponent_div_34_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SignUpComponent_div_38_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SignUpComponent_div_39_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SignUpComponent_div_44_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SignUpComponent_div_45_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SignUpComponent_div_49_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SignUpComponent_div_50_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SignUpComponent_span_54_Template, 1, 0, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SignUpComponent_span_55_Template, 2, 0, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SignUpComponent_ng_template_56_Template, 1, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl ? ctx.imgUrl : "../../../assets/addImg.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.emailUseMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.email.errors == null ? null : ctx.fc.email.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.fc.email.errors == null ? null : ctx.fc.email.errors.email) || (ctx.fc.email.errors == null ? null : ctx.fc.email.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailUseMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("phone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.phone.errors == null ? null : ctx.fc.phone.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.phone.errors == null ? null : ctx.fc.phone.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.title.errors == null ? null : ctx.fc.title.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("fName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.fName.errors == null ? null : ctx.fc.fName.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.fName.errors == null ? null : ctx.fc.fName.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("lName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.lName.errors == null ? null : ctx.fc.lName.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.lName.errors == null ? null : ctx.fc.lName.errors.pattern);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.password.errors == null ? null : ctx.fc.password.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.password.errors == null ? null : ctx.fc.password.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.GetValidationClass("passconfrim"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.passconfrim.errors == null ? null : ctx.fc.passconfrim.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fc.passconfrim.errors == null ? null : ctx.fc.passconfrim.errors.confirmedValidator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r18);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_img_profile_input_img_profile_input_component__WEBPACK_IMPORTED_MODULE_7__["ImgProfileInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px;\r\n  height: auto;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100%;\r\n  background-color: #4092ea;\r\n}\r\n\r\n.h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  max-width: 100%;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  background-color: #08192bd9;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n  color: #c10000;\r\n  font-weight: bold;\r\n  font-size: 90%;\r\n  text-align: left;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 130px;\r\n  height: 130px;\r\n  outline: none;\r\n}\r\n\r\n.btn-profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 5px solid black;\r\n  border-radius: 100%;\r\n  width: 130px;\r\n  height: 130px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwOTJlYTtcclxufVxyXG5cclxuLmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MTkyYmQ5O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICBjb2xvcjogI2MxMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnRuLXByb2ZpbGUtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuLXByb2ZpbGUtaW1nIGltZyB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      "7RJT");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG"); // Imports rxjs
      // Environment variables


      var UserService = /*#__PURE__*/function () {
        function UserService(http, auth) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.auth = auth;
          this.endpoint = 'user';
          this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl; // tslint:disable-next-line: variable-name

          this._users$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.users$ = this._users$.asObservable();
          this.errUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.successMsg$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(UserService, [{
          key: "loadUsers",
          value: function loadUsers() {
            var _this42 = this;

            this.http.get(this.BASE_URL + this.endpoint).subscribe(function (users) {
              _this42._users$.next(users);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getByID",
          value: function getByID(userID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", this.http.get("".concat(this.BASE_URL).concat(this.endpoint, "/").concat(userID)));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "update",
          value: function update(user) {
            var _this43 = this;

            this.http.put(this.BASE_URL + this.endpoint, user).subscribe(function (userUpdated) {
              _this43.auth.updateUserLogged(userUpdated);

              _this43.successMsg$.next({
                param: 'update',
                msg: 'User details updated successfully.'
              });
            }, function (error) {
              console.error(error);

              if (Array.isArray(error.error)) {
                error = error.error[0];
              } else {
                console.error(error);
                error = {
                  msg: 'We are sorry, we got a problem.\nPlease try again.',
                  param: 'unknown'
                };
              }

              _this43.errUser$.next(error);
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(oldPass, newPass, confirmPass) {
            var _this44 = this;

            var data = {
              oldPass: oldPass,
              newPass: newPass,
              confirmPass: confirmPass
            };
            this.http.patch("".concat(this.BASE_URL).concat(this.endpoint, "/updatePass"), data).subscribe(function (res) {
              _this44.successMsg$.next({
                param: 'password',
                msg: 'Password updated successfully'
              });
            }, function (err) {
              if (Array.isArray(err.error)) {
                err = err.error[0];
              } else {
                console.error(err);
                err = {
                  param: 'Change',
                  msg: 'Password updated failed. \nPlease try again.'
                };
              }

              _this44.errUser$.next(err);
            });
          }
        }]);

        return UserService;
      }(); // END CLASS


      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "t5ej":
    /*!**************************************************************!*\
      !*** ./src/app/services/resolves/profile.resolve.service.ts ***!
      \**************************************************************/

    /*! exports provided: ProfileResolveService */

    /***/
    function t5ej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileResolveService", function () {
        return ProfileResolveService;
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


      var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProfileResolveService = /*#__PURE__*/function () {
        function ProfileResolveService(userService, router) {
          _classCallCheck(this, ProfileResolveService);

          this.userService = userService;
          this.router = router;
        }

        _createClass(ProfileResolveService, [{
          key: "resolve",
          value: function resolve(route) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var userID, user;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      userID = route.params.userID;

                      if (userID) {
                        _context7.next = 4;
                        break;
                      }

                      this.router.navigateByUrl('/notfound');
                      return _context7.abrupt("return", false);

                    case 4:
                      _context7.prev = 4;
                      _context7.next = 7;
                      return this.userService.getByID(userID);

                    case 7:
                      _context7.next = 9;
                      return _context7.sent.toPromise();

                    case 9:
                      user = _context7.sent;
                      if (!user) this.router.navigateByUrl('/notfound');
                      return _context7.abrupt("return", user);

                    case 14:
                      _context7.prev = 14;
                      _context7.t0 = _context7["catch"](4);
                      console.error(_context7.t0);
                      this.router.navigateByUrl('/notfound');

                    case 18:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[4, 14]]);
            }));
          }
        }]);

        return ProfileResolveService;
      }();

      ProfileResolveService.ɵfac = function ProfileResolveService_Factory(t) {
        return new (t || ProfileResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ProfileResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProfileResolveService,
        factory: ProfileResolveService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileResolveService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tGUb":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/invite-member-modal/invite-member-modal.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: InviteMemberModalComponent */

    /***/
    function tGUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InviteMemberModalComponent", function () {
        return InviteMemberModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-member/add-member.component */
      "9d+g");
      /* harmony import */


      var _table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../table-invitees-management/table-invitees-management.component */
      "HcCB");

      var InviteMemberModalComponent = function InviteMemberModalComponent() {
        _classCallCheck(this, InviteMemberModalComponent);
      };

      InviteMemberModalComponent.ɵfac = function InviteMemberModalComponent_Factory(t) {
        return new (t || InviteMemberModalComponent)();
      };

      InviteMemberModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InviteMemberModalComponent,
        selectors: [["app-invite-member-modal"]],
        decls: 15,
        vars: 0,
        consts: [["id", "inviteMemberModal", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"]],
        template: function InviteMemberModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete this task?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-add-member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-table-invitees-management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__["AddMemberComponent"], _table_invitees_management_table_invitees_management_component__WEBPACK_IMPORTED_MODULE_2__["TableInviteesManagementComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGUtbWVtYmVyLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InviteMemberModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-invite-member-modal',
            templateUrl: './invite-member-modal.component.html',
            styleUrls: ['./invite-member-modal.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tQvK":
    /*!*****************************************************************!*\
      !*** ./src/app/components/cropper-img/cropper-img.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CropperImgComponent */

    /***/
    function tQvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropperImgComponent", function () {
        return CropperImgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! cropperjs */
      "urRO");
      /* harmony import */


      var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cloudinary.service */
      "dUpr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["image"];

      var _c1 = function _c1(a0) {
        return {
          "width.%": a0
        };
      };

      function CropperImgComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.progressUpload));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.progressUpload, "% ");
        }
      }

      var CropperImgComponent = /*#__PURE__*/function () {
        function CropperImgComponent(cloudinary) {
          _classCallCheck(this, CropperImgComponent);

          this.cloudinary = cloudinary;
          this.passImgUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.progressUpload = 0;
          this.isUpload = false;
          this.imageDestination = null;
          this.urlImg = null;
        }

        _createClass(CropperImgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.createCropper();
          }
        }, {
          key: "onUpload",
          value: function onUpload() {
            var _this45 = this;

            this.isUpload = true;
            this.progressLoadSub = this.cloudinary.uploadImg(this.imageDestination).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                _this45.progressUpload = Math.round(event.loaded / event.total * 100);
              } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                _this45.urlImg = event.body.url;

                _this45.passImgUrl.emit(_this45.urlImg);

                _this45.isUpload = false;

                _this45.progressLoadSub.unsubscribe();
              }
            }, function (error) {
              console.error(error);
              _this45.isUpload = false;
            });
          }
        }, {
          key: "createCropper",
          value: function createCropper() {
            var _this46 = this;

            this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_1___default.a(this.imageElement.nativeElement, {
              zoomable: false,
              scalable: false,
              aspectRatio: 1,
              crop: function crop() {
                var canvas = _this46.cropper.getCroppedCanvas({
                  width: 600,
                  height: 600,
                  minWidth: 300,
                  minHeight: 300,
                  maxWidth: 2000,
                  maxHeight: 2000,
                  imageSmoothingEnabled: true,
                  imageSmoothingQuality: 'low'
                });

                _this46.imageDestination = canvas.toDataURL('image/jpeg');
              }
            });
          }
        }]);

        return CropperImgComponent;
      }();

      CropperImgComponent.ɵfac = function CropperImgComponent_Factory(t) {
        return new (t || CropperImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudinary_service__WEBPACK_IMPORTED_MODULE_3__["CloudinaryService"]));
      };

      CropperImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CropperImgComponent,
        selectors: [["app-cropper-img"]],
        viewQuery: function CropperImgComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageElement = _t.first);
          }
        },
        inputs: {
          imageSource: ["src", "imageSource"]
        },
        outputs: {
          passImgUrl: "passImgUrl"
        },
        decls: 10,
        vars: 4,
        consts: [[1, "row"], [1, "col-7"], ["crossorigin", "", 2, "width", "auto", "max-width", "300px", 3, "src"], ["image", ""], [1, "col-4"], [1, "img-preview", 3, "src"], [1, "row", "align-items-center", "mt-3"], ["type", "submit", 1, "btn", "btn-success", "ml-3", 3, "disabled", "click"], ["class", "progress ml-2", "style", "width: 200px", 4, "ngIf"], [1, "progress", "ml-2", 2, "width", "200px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 3, "ngStyle"]],
        template: function CropperImgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CropperImgComponent_Template_button_click_7_listener($event) {
              ctx.onUpload();
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CropperImgComponent_div_9_Template, 3, 4, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageDestination, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpload);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
        styles: [".img-container[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  float: left;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin-left: 10px;\r\n  border: 3px solid black;\r\n  padding: 10px;\r\n  border-radius: 100%;\r\n}\r\n\r\n.img-profile[_ngcontent-%COMP%] {\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3BwZXItaW1nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJjcm9wcGVyLWltZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmltZy1wcmV2aWV3IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctcHJvZmlsZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropperImgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cropper-img',
            templateUrl: './cropper-img.component.html',
            styleUrls: ['./cropper-img.component.css']
          }]
        }], function () {
          return [{
            type: _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_3__["CloudinaryService"]
          }];
        }, {
          imageElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['image', {
              "static": false
            }]
          }],
          imageSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['src']
          }],
          passImgUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uMhb":
    /*!*************************************!*\
      !*** ./src/app/pipes/phone.pipe.ts ***!
      \*************************************/

    /*! exports provided: PhonePipe */

    /***/
    function uMhb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhonePipe", function () {
        return PhonePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhonePipe = /*#__PURE__*/function () {
        function PhonePipe() {
          _classCallCheck(this, PhonePipe);
        }

        _createClass(PhonePipe, [{
          key: "transform",
          value: function transform(phoneNum) {
            var secondChar = phoneNum.charAt(1);
            var formatPhone = '';
            formatPhone += secondChar === '5' || secondChar === '7' ? formatPhone += phoneNum.substr(0, 3) : formatPhone += phoneNum.substr(0, 2);
            formatPhone += '-' + phoneNum.substr(3, 3) + '-' + phoneNum.substr(6);
            return formatPhone;
          }
        }]);

        return PhonePipe;
      }();

      PhonePipe.ɵfac = function PhonePipe_Factory(t) {
        return new (t || PhonePipe)();
      };

      PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "phone",
        type: PhonePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'phone'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent(http) {
          _classCallCheck(this, NotFoundComponent);

          this.http = http;
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.http.get('localhost:3030/404').subscribe(function (err) {
              return console.error(err);
            });
          }
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 4,
        vars: 0,
        consts: [[1, "title"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".title[_ngcontent-%COMP%] {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/home-page/home-page.component */
      "JFIp");
      /* harmony import */


      var _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/sign-up/sign-up.component */
      "qTot");
      /* harmony import */


      var _pages_current_tasks_current_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/current-tasks/current-tasks.component */
      "o8Bt");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/my-projects/my-projects.component */
      "W3ir");
      /* harmony import */


      var _pages_one_project_one_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/one-project/one-project.component */
      "S6Z9");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/create-project/create-project.component */
      "LtM/");
      /* harmony import */


      var _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/setting/setting.component */
      "H+hM");
      /* harmony import */


      var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/forget-password/forget-password.component */
      "BUfL");
      /* harmony import */


      var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/reset-password/reset-password.component */
      "9TUh");
      /* harmony import */


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/auth.guard */
      "+VzF");
      /* harmony import */


      var _services_resolves_profile_resolve_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/resolves/profile.resolve.service */
      "t5ej");
      /* harmony import */


      var _services_resolves_one_project_resolve_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/resolves/one-project.resolve.service */
      "FJ+L"); // Pages
      // Guards
      // Resolves


      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
      }, {
        path: 'tasks',
        pathMatch: 'full',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        component: _pages_current_tasks_current_tasks_component__WEBPACK_IMPORTED_MODULE_4__["CurrentTasksComponent"]
      }, {
        path: 'projects',
        pathMatch: 'full',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        component: _pages_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_6__["MyProjectsComponent"]
      }, {
        path: 'project/:projectID',
        pathMatch: 'full',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        resolve: {
          project: _services_resolves_one_project_resolve_service__WEBPACK_IMPORTED_MODULE_15__["OneProjectResolveService"]
        },
        component: _pages_one_project_one_project_component__WEBPACK_IMPORTED_MODULE_7__["OneProjectComponent"]
      }, {
        path: 'signup',
        pathMatch: 'full',
        component: _pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
      }, {
        path: 'profile/:userID',
        pathMatch: 'full',
        resolve: {
          user: _services_resolves_profile_resolve_service__WEBPACK_IMPORTED_MODULE_14__["ProfileResolveService"]
        },
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
      }, {
        path: 'createProject',
        pathMatch: 'full',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        component: _pages_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_9__["CreateProjectComponent"]
      }, {
        path: 'setting',
        pathMatch: 'full',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        component: _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"]
      }, {
        path: 'forget',
        pathMatch: 'full',
        component: _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPasswordComponent"]
      }, {
        path: 'reset',
        pathMatch: 'full',
        component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"]
      }, {
        path: 'notfound',
        pathMatch: 'full',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
      }, {
        path: '**',
        pathMatch: 'full',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xw+n":
    /*!*****************************************************************!*\
      !*** ./src/app/components/project-row/project-row.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ProjectRowComponent */

    /***/
    function xwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectRowComponent", function () {
        return ProjectRowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["app-project-row", ""];

      var ProjectRowComponent = /*#__PURE__*/function () {
        function ProjectRowComponent() {
          _classCallCheck(this, ProjectRowComponent);
        }

        _createClass(ProjectRowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectRowComponent;
      }();

      ProjectRowComponent.ɵfac = function ProjectRowComponent_Factory(t) {
        return new (t || ProjectRowComponent)();
      };

      ProjectRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectRowComponent,
        selectors: [["", "app-project-row", ""]],
        inputs: {
          project: "project"
        },
        attrs: _c0,
        decls: 6,
        vars: 3,
        template: function ProjectRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.Progress);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.RemainTasks);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LXJvdy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-project-row]',
            templateUrl: './project-row.component.html',
            styleUrls: ['./project-row.component.css']
          }]
        }], function () {
          return [];
        }, {
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zw5x":
    /*!*********************************************!*\
      !*** ./src/app/services/httpInterceptor.ts ***!
      \*********************************************/

    /*! exports provided: CustomInterceptor */

    /***/
    function zw5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function () {
        return CustomInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configs_cloudinary_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../configs/cloudinary.config */
      "k/Ci");

      var CustomInterceptor = /*#__PURE__*/function () {
        function CustomInterceptor() {
          _classCallCheck(this, CustomInterceptor);
        }

        _createClass(CustomInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // tslint:disable-next-line: curly
            if (request.url === _configs_cloudinary_config__WEBPACK_IMPORTED_MODULE_1__["cloudinaryConfig"].UPLOAD_URL) return next.handle(request);
            var copiedReq = request.clone({
              withCredentials: true
            });
            return next.handle(copiedReq);
          }
        }]);

        return CustomInterceptor;
      }();

      CustomInterceptor.ɵfac = function CustomInterceptor_Factory(t) {
        return new (t || CustomInterceptor)();
      };

      CustomInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomInterceptor,
        factory: CustomInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
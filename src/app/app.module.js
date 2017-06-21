"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var Angular2MenuModule = (function () {
    function Angular2MenuModule() {
    }
    return Angular2MenuModule;
}());
Angular2MenuModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule // <-- import the FormsModule before binding with [(ngModel)]
        ],
        declarations: [
            app_component_1.AppComponent, menu_component_1.ng2MenuComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], Angular2MenuModule);
exports.Angular2MenuModule = Angular2MenuModule;
//# sourceMappingURL=app.module.js.map
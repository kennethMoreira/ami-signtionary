(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centro{\r\n    padding: 30px;\r\n    text-align: center;\r\n}\r\n.label{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 0px 30px 0px 30px;\r\n}\r\n.boton{\r\n    font-size: 25px;\r\n    text-align: center;\r\n    margin: auto; display: block;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin>\n  \n  <div>\n      <div class=\"col-lg-12 text-center\" id=\"icono\"><i class=\"fas fa-american-sign-language-interpreting fa-8x\"></i></div>\n      <div class=\"autor\" *ngFor=\"let people of people\">\n          \n          <h1 class=\"centro\" *ngIf=\"people.id=='1'\">Bienvenido {{people.first_name}} {{people.last_name}}</h1>\n      </div>\n      \n    <p class=\"label\">En esta sección podrás subir todo el contenido que se encuentra en nuestra página de Youtube, adicional a esto \n      podrás aceptar, rechazar o dar una retroalimentación (en caso que lo necesite) a los vídeos que nuestros colaboradores\n      suban a nuestra plataforma.\n      <br>\n      <br>\n\n      NOTA: Todos los vídeos deben estar subidos en Youtube.\n      </p>\n      <p>\n        <button routerLink =\"/admin/videos\" class=\"boton btn btn-info\">Ir a los Vídeos</button>\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/services/people.service */ "./src/app/admin/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(servicioPeople) {
        this.servicioPeople = servicioPeople;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem("idUser");
        this.servicioPeople.getPeopleById(id).subscribe(function (data) {
            console.log(data);
            _this.people = data;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/asset.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/asset.service.ts ***!
  \*************************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/asset";
    }
    AssetService.prototype.addAsset = function (asset) {
        return this.http.post(this.API_URL, asset);
    };
    AssetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "./src/app/admin/services/people.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/services/people.service.ts ***!
  \**************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/people";
    }
    PeopleService.prototype.getPeopleById = function (id) {
        return this.http.get("http://modoayuda.com/api/person/" + id);
    };
    PeopleService.prototype.getPeople2 = function () {
        return this.http.get(this.API_URL);
    };
    PeopleService.prototype.addPeople = function (people) {
        return this.http.post(this.API_URL, people);
    };
    PeopleService.prototype.deletePeople = function (id) {
        return this.http.delete(this.API_URL + "/" + id);
    };
    PeopleService.prototype.patchPeople = function (people) {
        return this.http.patch(this.API_URL + "/" + people.id, people);
    };
    PeopleService.prototype.countPeople = function () {
        return this.http.get(this.API_URL + "/count");
    };
    //http://modoayuda.com/api/country?_where=(name,like,~ecuador)
    PeopleService.prototype.likePeople = function (busqueda) {
        return this.http.get(this.API_URL + "?_where=(name,like,~" + busqueda + "~)");
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/admin/services/videos.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/services/videos.service.ts ***!
  \**************************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideosService = /** @class */ (function () {
    function VideosService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/request";
    }
    VideosService.prototype.getVideos = function (p, size) {
        return this.http.get(this.API_URL + "?_p=" + p + "&_size=" + size);
    };
    VideosService.prototype.buscarBD = function (videoBd) {
        return this.http.get(this.API_URL + "?_where=(url,eq," + videoBd + ")");
    };
    VideosService.prototype.existe = function (urlN, id) {
        return this.http.get(this.API_URL + "?_=(url,eq," + urlN + ")/exists");
    };
    VideosService.prototype.addVideo = function (videos) {
        return this.http.post(this.API_URL, videos);
    };
    VideosService.prototype.patchVideo = function (videos) {
        return this.http.patch(this.API_URL + "/" + videos.id, videos);
    };
    VideosService.prototype.deleteVideo = function (videos) {
        return this.http.delete(this.API_URL + "/" + videos.id);
    };
    VideosService.prototype.countVideo = function () {
        return this.http.get(this.API_URL + "/count");
    };
    VideosService.prototype.likeVideo = function (busquedaVideo) {
        return this.http.get(this.API_URL + "?_where=(sign_text,like,~" + busquedaVideo + "~)");
    };
    VideosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VideosService);
    return VideosService;
}());



/***/ }),

/***/ "./src/app/admin/shared/asset.ts":
/*!***************************************!*\
  !*** ./src/app/admin/shared/asset.ts ***!
  \***************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
var Asset = /** @class */ (function () {
    function Asset() {
    }
    return Asset;
}());



/***/ }),

/***/ "./src/app/admin/shared/videos.ts":
/*!****************************************!*\
  !*** ./src/app/admin/shared/videos.ts ***!
  \****************************************/
/*! exports provided: Videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos", function() { return Videos; });
var Videos = /** @class */ (function () {
    function Videos() {
    }
    return Videos;
}());



/***/ }),

/***/ "./src/app/admin/videos/agregar/agregar.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/videos/agregar/agregar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/videos/agregar/agregar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/videos/agregar/agregar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n      <input  class=\"form-control\" placeholder=\"Título del vídeo\" [(ngModel)]=\"nombreVideo\">\n      <input  class=\"form-control\" placeholder=\"URL del vídeo\" [(ngModel)]=\"urlVideo\">\n  \n      \n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n      <button (click)=\"agregarVideo()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Agregar Vídeo</button>\n\n  </div>\n</div>\n    \n"

/***/ }),

/***/ "./src/app/admin/videos/agregar/agregar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/videos/agregar/agregar.component.ts ***!
  \***********************************************************/
/*! exports provided: AgregarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarComponent", function() { return AgregarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/videos */ "./src/app/admin/shared/videos.ts");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/videos.service */ "./src/app/admin/services/videos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarComponent = /** @class */ (function () {
    function AgregarComponent(servicioVideo, router) {
        this.servicioVideo = servicioVideo;
        this.router = router;
    }
    AgregarComponent.prototype.ngOnInit = function () {
    };
    AgregarComponent.prototype.agregarVideo = function () {
        var _this = this;
        var video = new _shared_videos__WEBPACK_IMPORTED_MODULE_1__["Videos"]();
        var urlCargada = this.urlVideo;
        var patron = "https://www.youtube.com/watch?v=";
        var nuevoPatron = "https://www.youtube.com/embed/";
        urlCargada = urlCargada.replace(patron, nuevoPatron);
        video.sign_text = this.nombreVideo;
        video.url = urlCargada;
        video.status = "0";
        video.observations = " ";
        video.sign_set_id = 1;
        video.person_id = 1;
        var cadena = this.urlVideo.substr(0, 32);
        if (cadena == patron) {
            this.servicioVideo.buscarBD(this.urlVideo).subscribe(function (data) {
                if (data.length > 0) {
                    alert("El vídeo ya existe en nuestra BD");
                }
                else {
                    _this.servicioVideo.addVideo(video).subscribe(function (data) {
                        window.location.href = window.location.origin + "/admin/videos";
                        console.log(data);
                    });
                }
            });
        }
        else {
            alert("DEBE SER UN VIDEO DE YOUTUBE");
        }
    };
    AgregarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar',
            template: __webpack_require__(/*! ./agregar.component.html */ "./src/app/admin/videos/agregar/agregar.component.html"),
            styles: [__webpack_require__(/*! ./agregar.component.css */ "./src/app/admin/videos/agregar/agregar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AgregarComponent);
    return AgregarComponent;
}());



/***/ }),

/***/ "./src/app/admin/videos/videos.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/videos/videos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".autor{\r\ncolor: #696969;\r\n}\r\n.modal-dialog {\r\n    max-width: none;\r\n    padding: 20px;\r\n}\r\n.titulo{\r\n    text-align: center;\r\n    padding: 20px;\r\n}\r\n.navbar{\r\n    background-color:#bbe4f0!important;\r\n}\r\n.boton-navbar{\r\n    background: none !important;\r\n    border: none;\r\n}"

/***/ }),

/***/ "./src/app/admin/videos/videos.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/videos/videos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item active\">\n        <button routerLink =\"../../admin\" class=\"nav-link boton-navbar\"  ><</button>\n      </li>\n      <li class=\"nav-item active\">\n        <button routerLink =\"../admin\" class=\"nav-link boton-navbar\" (click)=\"mostrarAprobar()\" >Aprobar Vídeo</button>\n      </li>\n      <li class=\"nav-item active\">\n        <button class=\"nav-link boton-navbar\" (click)=\"mostarAgregar()\">Agregar Vídeo</button>\n      </li>\n      <li>\n        <input class=\"form-control\" placeholder=\"Buscar el vídeo\" [(ngModel)]=\"buscarvideo\">\n      </li>\n      <li>\n        <button (click)=\"busquedaVideo()\" type=\"button\" class=\"btn btn-primnary\" data-toggle=\"modal\" data-target=\"#modalBuscarVideo\">\n          <i class=\"fas fa-search\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"aprobar-video\" [hidden]=!showAprobar>\n\n\n<!--FEEDBACK-->\n<div class=\"modal fade\" id=\"modalFeedbackVideo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Dar Feedback</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <textarea class=\"form-control\" rows=\"5\" placeholder=\"nombreVideo\" [(ngModel)]=\"feedbackEditado\"></textarea>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click)=\"feedVideos()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Feedback</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n<!--EDITAR-->\n<div class=\"modal fade\" id=\"modalEditarVideo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <input placeholder=\"nombreVideo\" [(ngModel)]=\"nombreVideoEditado\">\n        <input placeholder=\"urlVideos\" [(ngModel)]=\"urlVideo\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button (click)=\"patchVideos()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- INICIO MODAL VIDEO-->\n\n<div class=\"modal fade\" id=\"modalReproducirVideo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-video-label\">\n  <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <button type=\"button\" (click) =\"cerrar()\" class=\"close\" data-dismiss=\"modal\"  aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"modal-video\">\n                  <div class=\"embed-responsive embed-responsive-16by9\">\n                      <iframe width=\"560\" height=\"315\" id=\"video\"\n                      src=\"\" \n                      frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                  </div>\n                 \n              </div>\n              \n          </div>\n          <div class=\"modal-footer\">\n              <button (click) =\"aprobar2()\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\"  data-dismiss=\"modal\">\n                  Aprobar\n                </button>\n                <button (click) =\"feedback2()\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modalFeedbackVideo\" data-dismiss=\"modal\">\n                    Dar Feedback\n                  </button>\n                  <button (click)=\"eliminarVideo2()\"  data-dismiss=\"modal\"  class=\"btn btn-danger\">Rechazar</button>\n          </div>\n      </div>\n  </div>\n</div>\n\n<!--FIN MODAL VIDEO-->\n\n\n\n\n\n<!--BUSQUEDA-->\n<div class=\"modal fade\" id=\"modalBuscarVideo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\"> \n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                  <th scope=\"col\">Id</th>\n                  <th scope=\"col\">Video</th>\n                  <th scope=\"col\">Titulo</th>\n                  <th scope=\"col\">Autor</th>\n                  <th scope=\"col\">Estado</th>\n              </tr>\n            </thead>\n            <tbody>\n\n\n                <tr *ngFor=\"let video of videosBusqueda\">\n                    <td>{{video.id}}</td>\n                    <td>{{video.url}}</td>\n                    <td>{{video.sign_text}}</td>\n                    <div *ngFor=\"let people of people\">\n                        <td *ngIf=\"people.id==video.person_id\">{{people.name}} {{people.last_name}}</td>\n                    </div>\n                    <td>\n                        \n                        <button (click) =\"aprobar(video)\" type=\"button\" class=\"btn btn-success\">\n                          Aprobar\n                        </button>\n                      </td>\n                      <td>\n                          <button (click) =\"feedback(video)\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modalFeedbackVideo\" data-dismiss=\"modal\">\n                            Dar Feedback\n                          </button>\n                        </td>\n          \n          \n                    <td><button (click)=\"eliminarVideo(video)\" class=\"btn btn-danger\">Rechazar</button></td>\n               </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!--LISTAR-->\n  <table class=\"table table-striped\" >\n    <thead>\n      <tr>\n        <th scope=\"col\">Video</th>\n        <th scope=\"col\">Titulo</th>\n        <th scope=\"col\">Autor</th>\n        <th colspan=\"3\" scope=\"col\">Acción</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let videoSolo of video\">\n          <td><a (click)=\"playVideo(videoSolo.id, videoSolo)\">{{videoSolo.url}}</a></td>\n          <td><h5>{{videoSolo.sign_text}}</h5></td>\n          <div class=\"autor\" *ngFor=\"let people of people\">\n              <td *ngIf=\"people.id==videoSolo.person_id\">{{people.name}} {{people.last_name}}</td>\n          </div>\n\n          <td> \n            <button (click) =\"reproducir(videoSolo.url, videoSolo)\" type=\"button\" class=\"btn btn-success\"\n            data-toggle=\"modal\" \n            data-target=\"#modalReproducirVideo\" data-dismiss=\"modal\">\n            <i class=\"fas fa-play\"></i>\n            </button>\n          </td>\n<!--\n          <td>\n              <button (click) =\"aprobar(videoSolo)\" type=\"button\" class=\"btn btn-success\">\n                Aprobar\n              </button>\n            </td>\n            <td>\n                <button (click) =\"feedback(videoSolo)\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modalFeedbackVideo\" data-dismiss=\"modal\">\n                  Dar Feedback\n                </button>\n              </td>\n\n\n          <td><button (click)=\"eliminarVideo(videoSolo)\" class=\"btn btn-danger\">Rechazar</button></td>\n      -->    \n        </tr>\n    \n        \n      </tbody>\n      <tfoot>\n          <tr>\n            \n          <ul class=\"pagination \">\n            <li class=\"page-item\">\n                <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n            </li>\n            <li class=\"page-item disabled\">\n                <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n            </li>\n            <li class=\"page-item active\">\n                <a button class=\"page-link\"  > {{paginaActual}} </a>\n            </li>\n            <li class=\"page-item disabled\">\n                <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n            </li>\n            <li>\n                <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n            </li>\n          </ul>\n          \n          </tr>\n        </tfoot>\n    \n    </table>\n  </div>\n\n\n\n  <app-agregar [hidden]=showAprobar></app-agregar>"

/***/ }),

/***/ "./src/app/admin/videos/videos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/videos/videos.component.ts ***!
  \**************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/videos */ "./src/app/admin/shared/videos.ts");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/videos.service */ "./src/app/admin/services/videos.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/people.service */ "./src/app/admin/services/people.service.ts");
/* harmony import */ var _shared_asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/asset */ "./src/app/admin/shared/asset.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/admin/services/asset.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideosComponent = /** @class */ (function () {
    function VideosComponent(servicioVideo, servicioPeople, servicioAsset, router) {
        this.servicioVideo = servicioVideo;
        this.servicioPeople = servicioPeople;
        this.servicioAsset = servicioAsset;
        this.router = router;
        //Mostrar componentes
        this.showAprobar = true;
        this.showAgregar = false;
        this.$play = "https://www.youtube.com/embed/diyavpLFYXI";
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsPorPagina = 15;
        this.calcularPaginacion();
        this.listarVideos();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
        this.servicioPeople.getPeople2().subscribe(function (data) {
            console.log(data);
            _this.people = data;
        });
    };
    VideosComponent.prototype.listarVideos = function () {
        var _this = this;
        this.servicioVideo.getVideos(this.paginaActual, this.itemsPorPagina).subscribe(function (data) {
            console.log(data);
            _this.video = data;
        });
    };
    VideosComponent.prototype.busquedaVideo = function () {
        var _this = this;
        this.servicioVideo.likeVideo(this.buscarvideo).subscribe(function (data) {
            _this.videosBusqueda = data;
            _this.buscarvideo = "";
        });
    };
    VideosComponent.prototype.agregarVideo = function () {
        var _this = this;
        console.log(this.nombreVideo);
        var video = new _shared_videos__WEBPACK_IMPORTED_MODULE_1__["Videos"]();
        var urlCargada = this.urlVideo;
        var patron = "https://www.youtube.com/watch?v=";
        var nuevoPatron = "https://www.youtube.com/embed/";
        urlCargada = urlCargada.replace(patron, nuevoPatron);
        video.sign_text = this.nombreVideo;
        video.url = urlCargada;
        video.status = "0";
        video.observations = " ";
        video.sign_set_id = 1;
        video.person_id = 1;
        this.servicioVideo.addVideo(video).subscribe(function (data) {
            console.log(data);
            _this.listarVideos();
        });
    };
    VideosComponent.prototype.editarVideo = function (video) {
        console.log(video);
        this.videoAEditar = video;
        this.videoAEditar.id = video.id;
        this.nombreVideoEditado = video.sign_text;
        this.servicioVideo.countVideo().subscribe(function (count) {
            console.log(count);
        });
    };
    VideosComponent.prototype.feedback = function (video) {
        console.log(video);
        this.videoAEditar = video;
        this.videoAEditar.id = video.id;
        this.feedbackEditado = video.observations;
        this.urlVideo = video.url;
        this.servicioVideo.countVideo().subscribe(function (count) {
            console.log(count);
        });
    };
    VideosComponent.prototype.patchVideos = function () {
        var _this = this;
        console.log(this.nombreVideoEditado);
        this.videoAEditar.sign_text = this.nombreVideoEditado;
        this.servicioVideo.patchVideo(this.videoAEditar).subscribe(function (data) {
            console.log(data);
            _this.listarVideos();
        });
    };
    VideosComponent.prototype.feedVideos = function () {
        var _this = this;
        console.log(this.feedbackEditado);
        var searchInyection = this.feedbackEditado;
        var changePhrase = searchInyection.replace(/[^a-z0-9 ]/gi, '');
        if (searchInyection == changePhrase) {
            this.videoAEditar.observations = this.feedbackEditado; // Coloco el nuevo feedback
            this.servicioVideo.patchVideo(this.videoAEditar).subscribe(//edito el nuevo feedback
            function (data) {
                console.log(data);
                _this.listarVideos();
            });
        }
        else {
            alert("Existe caracteres que puede dañar la base de datos en el texto ingresado");
        }
    };
    VideosComponent.prototype.aprobar = function (video) {
        var _this = this;
        var asset = new _shared_asset__WEBPACK_IMPORTED_MODULE_4__["Asset"]();
        asset.name = video.url;
        this.servicioAsset.addAsset(asset).subscribe(function (data) {
            console.log(data);
            _this.listarVideos();
        });
        this.eliminarVideo(video); //se elimina el video de la bd request
        alert("El vídeo se ha agregado a la base de datos (asset)");
    };
    VideosComponent.prototype.eliminarVideo = function (video) {
        var _this = this;
        console.log(video);
        this.servicioVideo.deleteVideo(video).subscribe(function (data) {
            console.log(data);
            _this.listarVideos();
        });
    };
    VideosComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicioVideo.countVideo().subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    VideosComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listarVideos();
    };
    VideosComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listarVideos();
        }
    };
    //FUNCIÓN REPRODUCIR
    VideosComponent.prototype.reproducir = function (url, video) {
        var iframe = document.getElementById('video');
        console.log("yeeeeiiii");
        iframe.setAttribute("src", url + "?autoplay=1");
        // id:number;
        // sign_text:string;
        // url:string;
        // status:string;
        // observations:string;
        // sign_set_id:number;
        // person_id:number; 
        this.videoObjModal = new _shared_videos__WEBPACK_IMPORTED_MODULE_1__["Videos"];
        this.videoObjModal = video;
    };
    VideosComponent.prototype.aprobar2 = function () {
        var _this = this;
        var asset = new _shared_asset__WEBPACK_IMPORTED_MODULE_4__["Asset"]();
        asset.name = this.videoObjModal.url;
        this.servicioAsset.addAsset(asset).subscribe(function (data) {
            console.log(data);
            console.log("HECHO");
            _this.listarVideos();
        });
        // var modalVideo = document.getElementById('modalReproducirVideo');
        // modalVideo.setAttribute("display", "none");
        this.eliminarVideo(this.videoObjModal); //se elimina el video de la bd request
        alert("El vídeo se ha agregado a la base de datos.");
    };
    VideosComponent.prototype.feedback2 = function () {
        console.log(this.videoObjModal);
        this.videoAEditar = this.videoObjModal;
        this.videoAEditar.id = this.videoObjModal.id;
        this.feedbackEditado = this.videoObjModal.observations;
        this.urlVideo = this.videoObjModal.url;
        this.servicioVideo.countVideo().subscribe(function (count) {
            console.log(count);
        });
    };
    VideosComponent.prototype.eliminarVideo2 = function () {
        var _this = this;
        console.log(this.videoObjModal);
        this.servicioVideo.deleteVideo(this.videoObjModal).subscribe(function (data) {
            console.log(data);
            _this.listarVideos();
        });
    };
    //FUNCIÓN CERRAR REPRODUCTOR DE VIDEO
    VideosComponent.prototype.cerrar = function () {
        var iframe = document.getElementById('video');
        iframe.setAttribute("src", "");
    };
    //Mostrar/ocultar componentes
    VideosComponent.prototype.mostrarAprobar = function () {
        //alert("test");
        this.showAprobar = true;
        console.log(this.showAprobar);
    };
    VideosComponent.prototype.mostarAgregar = function () {
        this.showAprobar = false;
        console.log(this.showAgregar);
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/admin/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/admin/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_videos_service__WEBPACK_IMPORTED_MODULE_2__["VideosService"],
            _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"],
            _services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_videos_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/videos/videos.component */ "./src/app/admin/videos/videos.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colaboradores/colaboradores.component */ "./src/app/colaboradores/colaboradores.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/permission/permission.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _signset_signset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signset/signset.component */ "./src/app/signset/signset.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "admin/videos", component: _admin_videos_videos_component__WEBPACK_IMPORTED_MODULE_3__["VideosComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: "colaborador", component: _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_8__["ColaboradoresComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "asset", component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_9__["AssetComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "country", component: _country_country_component__WEBPACK_IMPORTED_MODULE_10__["CountryComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "people", component: _people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "permission", component: _permission_permission_component__WEBPACK_IMPORTED_MODULE_12__["PermissionComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "person", component: _person_person_component__WEBPACK_IMPORTED_MODULE_13__["PersonComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "signset", component: _signset_signset_component__WEBPACK_IMPORTED_MODULE_14__["SignsetComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "request", component: _request_request_component__WEBPACK_IMPORTED_MODULE_15__["RequestComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "role", component: _role_role_component__WEBPACK_IMPORTED_MODULE_16__["RoleComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gris{\r\n    background-color: #184b59;\r\n    color: white;\r\n    padding-left: 50px;\r\n       \r\n}\r\n\r\n.plano {\r\n    color: white;\r\n}\r\n\r\n.menu{\r\nmargin-right: 20px;       \r\nfloat: right;\r\n\r\n}\r\n\r\n.supermenu{\r\ncolor: white;\r\nfloat: right;\r\npadding-bottom: 20px;\r\n\r\n}\r\n\r\n.logo{\r\nwidth: 250px;\r\n}\r\n\r\na.logo {\r\n    position: absolute;\r\n    margin-top: -60px;\r\n    margin-left: 140px;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<nav class=\"navbar navbar-dark bg-dark static-top\">\n        <div class=\"container\">\n        <img src=\"assets/images/logo.png\" routerLink =\"/\" class=\"logo navbar-brand\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <a class=\"btn btn-outline-success mr-sm-2\" routerLink=\"/login\">Login</a>\n            <a class=\"btn btn-outline-success my-2 my-sm-0\" routerLink=\"/signup\">Registro</a>\n            <a class=\"btn my-2 my-sm-0 plano\" style=\"color: white\" (click)=\"logout()\">Salir</a>\n        </form>\n    </div>\n</nav>\n\n\n\n  \n  \n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: SafePipe, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, url) {
        if (value && !url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = value.match(regExp);
            if (match && match[2].length == 11) {
                console.log(match[2]);
                var sepratedID = match[2];
                var embedUrl = '//www.youtube.com/embed/' + sepratedID;
                return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
            }
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        AppComponent_1.isLogged = !!localStorage.getItem("idUser");
        console.log(AppComponent_1.isLogged);
    };
    AppComponent.prototype.logout = function () {
        _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"].idUser = "";
        AppComponent_1.isLogged = false;
        this.router.navigate(["/home"]);
    };
    AppComponent.isLogged = !!localStorage.getItem("idUser");
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/videos/videos.component */ "./src/app/admin/videos/videos.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _admin_videos_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/videos/agregar/agregar.component */ "./src/app/admin/videos/agregar/agregar.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./colaboradores/colaboradores.component */ "./src/app/colaboradores/colaboradores.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./permission/permission.component */ "./src/app/permission/permission.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _signset_signset_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signset/signset.component */ "./src/app/signset/signset.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./menu-admin/menu-admin.component */ "./src/app/menu-admin/menu-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//AngularFireStuff


//PRINCIPAL

//ADMIN















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["SafePipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _admin_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__["VideosComponent"],
                _asset_asset_component__WEBPACK_IMPORTED_MODULE_11__["AssetComponent"],
                _admin_videos_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_12__["AgregarComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _colaboradores_colaboradores_component__WEBPACK_IMPORTED_MODULE_16__["ColaboradoresComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_17__["CountryComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_18__["PeopleComponent"],
                _permission_permission_component__WEBPACK_IMPORTED_MODULE_19__["PermissionComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_20__["PersonComponent"],
                _signset_signset_component__WEBPACK_IMPORTED_MODULE_21__["SignsetComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_22__["RequestComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_23__["RoleComponent"],
                _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_24__["MenuAdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"].enablePersistence()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset/asset.component.css":
/*!*******************************************!*\
  !*** ./src/app/asset/asset.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/asset/asset.component.html":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n    Add asset\n  </button>\n  \n  <div>\n    <input placeholder=\"Search asset\" [(ngModel)]=\"buscar\">\n  <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n  </div>\n  <!-- Listar  -->\n  <table class=\"table-sm table-striped\">\n    <thead>\n      <tr>\n        \n        \n        <th scope=\"col\">id</th>\n        <th scope=\"col\">name</th>\n        \n        <th scope=\"col\">Editar</th>\n        <th scope=\"col\">Eliminar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let element of objectArray\">\n        <td>{{ element.id }}</td>\n        <td>{{ element.name }}</td>\n        \n        <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n            Editar\n          </button></td>\n        <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n        \n      </tr>\n  \n      \n    </tbody>\n    <tfoot>\n        <tr>\n          \n        <ul class=\"pagination \">\n          <li class=\"page-item\">\n              <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n          </li>\n          <li class=\"page-item active\">\n              <a button class=\"page-link\"  > {{paginaActual}} </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n          </li>\n          <li>\n              <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n          </li>\n        </ul>\n        \n        </tr>\n      </tfoot>\n  \n  </table>\n  \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"Editname\" [(ngModel)]=\"Editname\">\n         \n  \n  \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- Modal Agregar -->\n  <div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar asset </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        \n        <input placeholder=\"Ingresa url\"    [(ngModel)]=\"name\">\n        \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add asset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n   <!-- Modal Búsqueda -->\n   <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body  modal-lg\">\n          <div class=\"table-responsive\">\n          <table class=\"table-sm table-striped\">\n            <thead>\n              <tr>\n                \n                \n                <th scope=\"col\">id</th>\n                <th scope=\"col\">name</th>\n                \n                <th scope=\"col\">Editar</th>\n                <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of objectArray\">\n                <td>{{ element.id }}</td>\n                <td>{{ element.name }}</td>\n                \n                <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                    Editar\n                  </button></td>\n                <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n                \n              </tr>\n          \n              \n            </tbody>\n            <tfoot>\n                <tr>\n                  \n                <ul class=\"pagination \">\n                  <li class=\"page-item\">\n                      <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                  </li>\n                  <li class=\"page-item active\">\n                      <a button class=\"page-link\"  > {{paginaActual}} </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                  </li>\n                  <li>\n                      <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                  </li>\n                </ul>\n                \n                </tr>\n              </tfoot>\n          \n          </table>\n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/asset/asset.component.ts":
/*!******************************************!*\
  !*** ./src/app/asset/asset.component.ts ***!
  \******************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/asset */ "./src/app/shared/asset.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetComponent = /** @class */ (function () {
    function AssetComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "name";
    }
    AssetComponent.prototype.ngOnInit = function () {
        this.tablaActual = "asset";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    AssetComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    AssetComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    AssetComponent.prototype.agregar = function () {
        var _this = this;
        console.log(this.name);
        var elemeto = new _shared_asset__WEBPACK_IMPORTED_MODULE_2__["Asset"]();
        elemeto.name = this.name;
        this.servicio.add(elemeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.name = "";
    };
    AssetComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Editname = objeto.name;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    AssetComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.name = this.Editname;
        ;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    AssetComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    AssetComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    AssetComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    AssetComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    AssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./asset.component.html */ "./src/app/asset/asset.component.html"),
            styles: [__webpack_require__(/*! ./asset.component.css */ "./src/app/asset/asset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/colaboradores/colaboradores.component.css":
/*!***********************************************************!*\
  !*** ./src/app/colaboradores/colaboradores.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/colaboradores/colaboradores.component.html":
/*!************************************************************!*\
  !*** ./src/app/colaboradores/colaboradores.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lista de Request: </h2>\n\n\n<button (click)=\"statusMe(0)\" type=\"button\" class=\"btn btn-primary\" >\n    Solicitudes Pendientes \n  </button>\n  <button (click)=\"statusMe(1)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAceptadasRequest\">\n    Solicitudes Aceptadas \n  </button> \n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregarRequest\">\n      Agregar Solicitud\n  </button>\n <!-- <div>\n      <input placeholder=\"Request a buscar\" [(ngModel)]=\"buscarRequest\">\n    <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscarRequest\"> Buscar</button>\n  </div>\n  \n\n Modal Tabla-->\n<div  id=\"modalPendienteRequest\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Id</th>\n                <th>Sign Text</th>\n                <th>URL</th>\n                <th>Status</th>\n                <th>Observations</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let colaborador of request\">\n                <td>{{colaborador.id}}</td>\n                <td>{{colaborador.sign_text}}</td>\n                <td>{{colaborador.url}}</td>\n                <td>{{colaborador.status}}</td>                      \n                <td>{{colaborador.observations}}</td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                \n              <ul class=\"pagination \">\n                <li class=\"page-item\">\n                    <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                </li>\n                <li class=\"page-item disabled\">\n                    <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                </li>\n                <li class=\"page-item active\">\n                    <a button class=\"page-link\"  > {{paginaActual}} </a>\n                </li>\n                <li class=\"page-item disabled\">\n                    <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                </li>\n                <li>\n                    <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                </li>\n              </ul>\n              \n              </tr>\n            </tfoot>\n          </table>  \n        </div>\n        \n      \n\n   <!-- Modal Búsqueda \n   <div class=\"modal fade\" id=\"modalBuscarRequest\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            \n              <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th>Sign Text</th>\n                      <th>URL</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let colaborador of request\">\n                      <td>{{colaborador.sign_text}}</td>\n                      <td>{{colaborador.url}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n            \n          </div>\n        </div>\n      </div>\n    </div>-->\n\n<!-- Modal Agregar -->\n<div class=\"modal fade\" id=\"modalAgregarRequest\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar Request </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n        <input placeholder=\"Sign Text\" [(ngModel)]=\"sign_text\">\n        <input placeholder=\"Url\" [(ngModel)]=\"url\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Agregar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div #myModel class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n     <div class=\"modal-header\">\n        <h5 class=\"modal-title \">Title</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Some text in the modal.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/colaboradores/colaboradores.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/colaboradores/colaboradores.component.ts ***!
  \**********************************************************/
/*! exports provided: ColaboradoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresComponent", function() { return ColaboradoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colaboradores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/colaboradores.service */ "./src/app/services/colaboradores.service.ts");
/* harmony import */ var _shared_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/request */ "./src/app/shared/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColaboradoresComponent = /** @class */ (function () {
    function ColaboradoresComponent(servicioColaborador) {
        this.servicioColaborador = servicioColaborador;
    }
    ColaboradoresComponent.prototype.ngOnInit = function () {
        this.itemsPorPagina = 10;
        this.tablaActual = "request";
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    ColaboradoresComponent.prototype.listarRequest = function () {
        var _this = this;
        this.servicioColaborador.getById(this.paginaActual, this.itemsPorPagina, 2, this.statusActual, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.request = data;
        });
    };
    ColaboradoresComponent.prototype.statusMe = function (num) {
        this.statusActual = num;
        this.calcularPaginacion();
        this.listarRequest();
    };
    ColaboradoresComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicioColaborador.countRequest(2, this.statusActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log("filas" + _this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log("paginacio" + _this.paginacion);
        });
    };
    ColaboradoresComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listarRequest();
    };
    ColaboradoresComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listarRequest();
        }
    };
    ColaboradoresComponent.prototype.agregar = function () {
        var _this = this;
        //var youtubeUrl = require('youtube-url'); //error TS2304: Cannot find name 'require'. 
        var urlCargada = this.url;
        //if(youtubeUrl.valid(urlCargada)) //Falta validación de URL
        if (urlCargada) {
            var patron = "https://www.youtube.com/watch?v=";
            var nuevoPatron = "https://www.youtube.com/embed/";
            urlCargada = urlCargada.replace(patron, nuevoPatron);
            var solicitud = new _shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"]();
            solicitud.sign_text = this.sign_text;
            solicitud.url = urlCargada;
            solicitud.status = "0";
            solicitud.observations = "";
            solicitud.sign_set_id = 1;
            solicitud.person_id = 2;
            this.servicioColaborador.addRequest(solicitud).subscribe(function (data) {
                console.log(data);
                _this.listarRequest();
            });
            this.sign_text = "";
            this.url = "";
            this.status = "0";
            this.observations = "";
            this.sign_set_id = 0;
            this.person_id = 0;
        }
        else {
            // this.sign_text="";
            this.url = "[Enlace no válido]";
            this.status = "0";
            this.observations = "";
            this.sign_set_id = 0;
            this.person_id = 0;
        }
    };
    ColaboradoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colaboradores',
            template: __webpack_require__(/*! ./colaboradores.component.html */ "./src/app/colaboradores/colaboradores.component.html"),
            styles: [__webpack_require__(/*! ./colaboradores.component.css */ "./src/app/colaboradores/colaboradores.component.css")]
        }),
        __metadata("design:paramtypes", [_services_colaboradores_service__WEBPACK_IMPORTED_MODULE_1__["ColaboradoresService"]])
    ], ColaboradoresComponent);
    return ColaboradoresComponent;
}());



/***/ }),

/***/ "./src/app/country/country.component.css":
/*!***********************************************!*\
  !*** ./src/app/country/country.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/country/country.component.html":
/*!************************************************!*\
  !*** ./src/app/country/country.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><h2>Lista de países: </h2>\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregarPais\">\n    Agregar País\n  </button>\n  <div>\n      <input placeholder=\"País a buscar\" [(ngModel)]=\"buscarpais\">\n    <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscarPais\"> Buscar</button>\n  </div>\n  \n \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditarPais\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"nombrePaisEditado\" [(ngModel)]=\"nombrePaisEditado\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- Modal Agregar -->\n<div class=\"modal fade\" id=\"modalAgregarPais\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar país </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"Nombre del país\" [(ngModel)]=\"nombrePais\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Agregar país</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n   <!-- Modal Búsqueda -->\n   <div class=\"modal fade\" id=\"modalBuscarPais\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            \n              <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      \n                      <th scope=\"col\">Id</th>\n                      <th scope=\"col\">Pais</th>\n                      <th scope=\"col\">Acciones</th>\n\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let country of countriesBusqueda\">\n                      <td>{{country.id}}</td>\n                      <td>{{country.name}}</td>\n                      <td><button (click) =\"editar(country)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditarPais\" data-dismiss=\"modal\">\n                          Editar\n                        </button></td>\n                      <td><button (click)=\"eliminar(country)\" class=\"btn btn-danger\"data-dismiss=\"modal\">Eliminar </button></td>\n                      \n                    </tr>\n                \n                    \n                  </tbody>\n                  \n                </table>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n\n<!-- Listar países -->\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      \n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Name</th>\n      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let country of countries\">\n      <td>{{country.id}}</td>\n      <td>{{country.name}}</td>\n      <td><button (click) =\"editar(country)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditarPais\">\n          Editar\n        </button></td>\n      <td><button (click)=\"eliminar(country)\" class=\"btn btn-danger\">Eliminar</button></td>\n      \n    </tr>\n\n    \n  </tbody>\n  <tfoot>\n      <tr>\n        \n      <ul class=\"pagination \">\n        <li class=\"page-item\">\n            <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n        </li>\n        <li class=\"page-item active\">\n            <a button class=\"page-link\"  > {{paginaActual}} </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n        </li>\n        <li>\n            <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n        </li>\n      </ul>\n      \n      </tr>\n    </tfoot>\n\n</table>"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/country */ "./src/app/shared/country.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryComponent = /** @class */ (function () {
    function CountryComponent(servicioPais) {
        this.servicioPais = servicioPais;
        this.attributoBusqueda = "name";
    }
    CountryComponent.prototype.ngOnInit = function () {
        this.tablaActual = "country";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listarPais();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    CountryComponent.prototype.listarPais = function () {
        var _this = this;
        this.servicioPais.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.countries = data;
        });
    };
    CountryComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicioPais.like(this.buscarpais, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.countriesBusqueda = data;
            _this.buscarpais = "";
        });
    };
    CountryComponent.prototype.agregar = function () {
        var _this = this;
        console.log(this.nombrePais);
        var country = new _shared_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
        country.name = this.nombrePais;
        this.servicioPais.add(country, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listarPais();
        });
        this.nombrePais = "";
    };
    CountryComponent.prototype.editar = function (country) {
        console.log(country);
        this.countryaEditar = country;
        this.countryaEditar.id = country.id;
        this.nombrePaisEditado = country.name;
        this.servicioPais.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    CountryComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.nombrePaisEditado);
        this.countryaEditar.name = this.nombrePaisEditado;
        this.servicioPais.patch(this.countryaEditar, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listarPais();
        });
    };
    CountryComponent.prototype.eliminar = function (country) {
        var _this = this;
        console.log(country);
        this.servicioPais.delete(country, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listarPais();
        });
    };
    CountryComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicioPais.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    CountryComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listarPais();
    };
    CountryComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listarPais();
        }
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    background-color: white;\n    background-position: 10px 10px; \n    padding-left: 40px;\n    border-radius: 5px;\n    border: 2px solid gray;\n    width: 90%;\n    box-sizing: border-box;\n    height: 40px;\n\n}\n\nli{\n    padding: 20px;\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t\t<div class=\"row align-items-center\">\r\n\t\t  <div class=\"col\">\r\n\t\t\t<input placeholder=\"Buscar...\" type=\"text\" [(ngModel)]=\"searchterm\" (keydown)=\"search($event)\">\r\n\t\t  </div>\r\n\t\t  <div class=\"col\">\r\n\t\t\t<ul *ngFor=\"let club of allclubs\">\r\n\t\t\t  <li>{{club.descripcion }}</li>\r\n\t\t\t\r\n\t\t\t  <iframe id=\"ytplayer\" type=\"text/html\" width=\"640\" height=\"360\"  [src]=\"club.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\r\n\t\t\t</ul>\r\n\t\t\t<div *ngIf=\"allclubs?.length < 1\">\r\n\t\t\t  <p>No se encontraron resultados</p>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: SafePipe, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, url) {
        if (value && !url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = value.match(regExp);
            if (match && match[2].length == 11) {
                console.log(match[2]);
                var sepratedID = match[2];
                var embedUrl = '//www.youtube.com/embed/' + sepratedID;
                return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
            }
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent(afs, sanitizer) {
        this.afs = afs;
        this.sanitizer = sanitizer;
        this.startAt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.endAt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lastKeypress = 0;
        this.startobs = this.startAt.asObservable();
        this.endobs = this.endAt.asObservable();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getallclubs().subscribe(function (clubs) {
            _this.allclubs = clubs;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.startobs, this.endobs).subscribe(function (value) {
            _this.firequery(value[0], value[1]).subscribe(function (clubs) {
                _this.clubs = clubs;
                _this.allclubs = clubs;
            });
        });
    };
    HomeComponent.prototype.search = function ($event) {
        if ($event.timeStamp - this.lastKeypress > 200) {
            var q = $event.target.value;
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");
        }
        this.lastKeypress = $event.timeStamp;
    };
    HomeComponent.prototype.firequery = function (start, end) {
        return this.afs.collection('palabras', function (ref) { return ref.limit(1).orderBy('descripcion').startAt(start).endAt(end); }).valueChanges();
    };
    HomeComponent.prototype.getallclubs = function () {
        return this.afs.collection('palabras', function (ref) { return ref.limit(1).orderBy('descripcion'); }).valueChanges();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <h2 class=\"text-center text-white mb-4\">Bootstrap 4 Login Form</h2>\n          <div class=\"row\">\n              <div class=\"col-md-6 mx-auto\">\n\n                  <!-- form card login -->\n                  <div class=\"card rounded-0\">\n                      <div class=\"card-header\">\n                          <h3 class=\"mb-0\">Login</h3>\n                      </div>\n                      <div class=\"card-body\">\n                          <form class=\"form\" role=\"form\" autocomplete=\"off\" id=\"formLogin\" novalidate=\"\" method=\"POST\">\n                              <div class=\"form-group\">\n                                  <label for=\"uname1\">Usuario</label>\n                                  <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"uname1\" id=\"uname1\" required=\"\">\n                                  <div class=\"invalid-feedback\">Oops, you missed this one.</div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label>Contraseña</label>\n                                  <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control form-control-lg rounded-0\" id=\"pwd1\" required=\"\" autocomplete=\"new-password\">\n                                  <div class=\"invalid-feedback\">Enter your password too!</div>\n                              </div>\n                              <div>\n                                  <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description small text-dark\">No tengo usuarios, quiero <a href=\"/signup\"> Registrarme</a></span>\n                                  </label>\n                              </div>\n                              <button (click)=\"login()\" type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnLogin\">Login</button>\n                          </form>\n                      </div>\n                      <!--/card-block-->\n                  </div>\n                  <!-- /form card login -->\n\n              </div>\n\n\n          </div>\n          <!--/row-->\n\n      </div>\n      <!--/col-->\n  </div>\n  <!--/row-->\n</div>\n<!--/container--> "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(servicioAuth, router) {
        this.servicioAuth = servicioAuth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioAuth.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.servicioAuth.like(this.username).subscribe(function (data) {
            _this.userBusqueda = data;
            _this.userBusqueda.forEach(function (user) {
                if (user.username == _this.username) {
                    _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"].idUser = user.id;
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].isLogged = _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"].isLogged();
                    if (user.role_id == 1) {
                        _this.router.navigate(["/admin"]);
                    }
                    else {
                        _this.router.navigate(["/colaborador"]);
                    }
                    //window.location.href = '/profile';       
                }
                else {
                    console.log("bad username");
                }
            });
            _this.username = "";
            _this.password = "";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-admin/menu-admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/menu-admin/menu-admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-admin/menu-admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/menu-admin/menu-admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"margin-left:25px;\">\n    <a routerLink =\"/asset\" class=\"navbar-brand\">Cargas</a>\n    <a routerLink =\"/country\" class=\"navbar-brand\">Paises</a>\n    <a routerLink =\"/permission\" class=\"navbar-brand\">Permisos</a>\n    <a routerLink =\"/person\" class=\"navbar-brand\">Personas</a>\n    <a routerLink =\"/request\" class=\"navbar-brand\">Solicitudes</a>\n    <a routerLink =\"/role\" class=\"navbar-brand\">Roles</a>\n    <a routerLink =\"/signset\" class=\"navbar-brand\">Tipos de Señas</a>\n    <a routerLink =\"/admin/videos\" class=\"navbar-brand\">Videos</a>\n  </nav>"

/***/ }),

/***/ "./src/app/menu-admin/menu-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/menu-admin/menu-admin.component.ts ***!
  \****************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuAdminComponent = /** @class */ (function () {
    function MenuAdminComponent() {
    }
    MenuAdminComponent.prototype.ngOnInit = function () {
    };
    MenuAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-admin',
            template: __webpack_require__(/*! ./menu-admin.component.html */ "./src/app/menu-admin/menu-admin.component.html"),
            styles: [__webpack_require__(/*! ./menu-admin.component.css */ "./src/app/menu-admin/menu-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuAdminComponent);
    return MenuAdminComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n  Add people\n</button>\n\n<div>\n  <input placeholder=\"Search People\" [(ngModel)]=\"buscar\">\n<button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n</div>\n<!-- Listar  -->\n<table class=\"table-sm table-striped\">\n  <thead>\n    <tr>\n      \n      \n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Apellido</th>\n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">Dirección</th>\n      <th scope=\"col\">Celular</th>\n      <th scope=\"col\">Editar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let people of peopleArray\">\n      <td>{{ people.name }}</td>\n      <td>{{ people.last_name }}</td>\n      <td>{{ people.identification_number }}</td>\n      <td>{{ people.adress }}</td>\n      <td>{{ people.contact_number }}</td>\n      <td><button (click) =\"editar(people)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n          Editar\n        </button></td>\n      <td><button (click)=\"eliminar(people)\" class=\"btn btn-danger\">Eliminar</button></td>\n      \n    </tr>\n\n    \n  </tbody>\n  <tfoot>\n      <tr>\n        \n      <ul class=\"pagination \">\n        <li class=\"page-item\">\n            <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n        </li>\n        <li class=\"page-item active\">\n            <a button class=\"page-link\"  > {{paginaActual}} </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n        </li>\n        <li>\n            <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n        </li>\n      </ul>\n      \n      </tr>\n    </tfoot>\n\n</table>\n\n<!-- Modal Editar -->\n<div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n        <input placeholder=\"EditpeopleName\" [(ngModel)]=\"EditpeopleName\">\n        <input placeholder=\"Editlast\" [(ngModel)]=\"Editlast\">\n        <input placeholder=\"EditpeopleIdentification\" [(ngModel)]=\"EditpeopleIdentification\">\n        <input placeholder=\"EditpeopleAddress\" [(ngModel)]=\"EditpeopleAddress\">\n        <input placeholder=\"EditpeoplePhoneNumber\" [(ngModel)]=\"EditpeoplePhoneNumber\">\n\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal Agregar -->\n<div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar país </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      \n      <input placeholder=\"Ingresa tu nombre\"    [(ngModel)]=\"peopleName\">\n      <input placeholder=\"Ingresa tu apellido\"  [(ngModel)]=\"last\">\n      <input placeholder=\"Ingresa tu Cédula\"    [(ngModel)]=\"peopleIdentification\">\n      <input placeholder=\"Ingresa tu Dirección\" [(ngModel)]=\"peopleAddress\">\n      <input placeholder=\"Ingresa tu Teléfono\"  [(ngModel)]=\"peoplePhoneNumber\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add people</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n <!-- Modal Búsqueda -->\n <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog \" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body  modal-lg\">\n        \n          <table class=\"table-sm table-striped table-responsive \">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Apellido</th>\n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">Dirección</th>\n      <th scope=\"col\">Celular</th>\n      <th scope=\"col\">Editar</th>\n      <th scope=\"col\">Eliminar</th>\n                  \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let people of peopleBusqueda\">\n                  <td>{{ people.name }}</td>\n      <td>{{ people.last_name }}</td>\n      <td>{{ people.identification_number }}</td>\n      <td>{{ people.adress }}</td>\n      <td>{{ people.contact_number }}</td>\n      <td><button (click) =\"editar(people)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n          Editar\n        </button></td>\n      <td><button (click)=\"eliminar(people)\" class=\"btn btn-danger\">Eliminar</button></td>\n                  \n                </tr>\n            \n                \n              </tbody>\n              \n            </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/people */ "./src/app/shared/people.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "name";
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.tablaActual = "people";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    PeopleComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.peopleArray = data;
        });
    };
    PeopleComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.peopleBusqueda = data;
            _this.buscar = "";
        });
    };
    PeopleComponent.prototype.agregar = function () {
        var _this = this;
        console.log(this.peopleName);
        var people = new _shared_people__WEBPACK_IMPORTED_MODULE_1__["People"]();
        people.name = this.peopleName;
        people.last_name = this.last;
        people.identification_number = this.peopleIdentification;
        people.adress = this.peopleAddress;
        people.contact_number = this.peoplePhoneNumber;
        this.servicio.add(people, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.peopleName = "";
        this.last = "";
        this.peopleIdentification = "";
        this.peopleAddress = "";
        this.peoplePhoneNumber = "";
    };
    PeopleComponent.prototype.editar = function (people) {
        console.log(people);
        this.Editpeople = people;
        this.EditpeopleName = people.name;
        this.Editlast = people.last_name;
        this.EditpeopleIdentification = people.identification_number;
        this.EditpeoplePhoneNumber = people.contact_number;
        this.EditpeopleAddress = people.adress;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    PeopleComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editpeople);
        this.Editpeople.name = this.EditpeopleName;
        this.Editpeople.last_name = this.Editlast;
        this.Editpeople.identification_number = this.EditpeopleIdentification;
        this.Editpeople.adress = this.EditpeopleAddress;
        this.Editpeople.contact_number = this.EditpeoplePhoneNumber;
        this.servicio.patch(this.Editpeople, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PeopleComponent.prototype.eliminar = function (people) {
        var _this = this;
        console.log(people);
        this.servicio.delete(people, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PeopleComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    PeopleComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    PeopleComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/permission/permission.component.css":
/*!*****************************************************!*\
  !*** ./src/app/permission/permission.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/permission/permission.component.html":
/*!******************************************************!*\
  !*** ./src/app/permission/permission.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n    Agregar permiso\n  </button>\n  \n<!--   <div>\n    <input placeholder=\"Search asset\" [(ngModel)]=\"buscar\">\n  <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n  </div> -->\n  <!-- Listar  -->\n  <table class=\"table-sm table-striped\">\n    <thead>\n      <tr>\n          \n       \n          \n        \n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Rol</th>        \n        <th scope=\"col\">Asset</th>\n        <th scope=\"col\">Leer</th>\n        <th scope=\"col\">Insertar</th>\n        <th scope=\"col\">Editar</th>\n        <th scope=\"col\">Eliminar</th>\n  \n      \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let element of objectArray\">\n        <td>{{ element.id }}</td>\n        <td>{{ element.role_id }}</td>\n        <td>{{ element.asset_id }}</td>\n        <td>{{ element.can_read }}</td>\n        <td>{{ element.can_insert }}</td>\n        <td>{{ element.can_update }}</td>\n        <td>{{ element.can_delete }}</td>\n\n        \n        <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n            Editar\n          </button></td>\n        <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n        \n      </tr>\n  \n      \n    </tbody>\n    <tfoot>\n        <tr>\n          \n        <ul class=\"pagination \">\n          <li class=\"page-item\">\n              <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n          </li>\n          <li class=\"page-item active\">\n              <a button class=\"page-link\"  > {{paginaActual}} </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n          </li>\n          <li>\n              <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n          </li>\n        </ul>\n        \n        </tr>\n      </tfoot>\n  \n  </table>\n  \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          \n\n\n          <table class=\"table-responsive table-sm table-striped\">\n              <thead>\n                <tr>\n                    \n                 \n                    \n                  \n                  \n                  <th scope=\"col\">rol</th>        \n                  <th scope=\"col\">Asset</th>\n                  <th scope=\"col\">puede leer</th>\n                  <th scope=\"col\">puede insertar</th>\n                  <th scope=\"col\">puede editar</th>\n                  <th scope=\"col\">puede eliminar</th>\n               \n                </tr>\n              </thead>\n              <tbody>\n                <tr >\n                  <td><input placeholder=\"Editedrole_id\" [(ngModel)]=\"Editedrole_id\"></td>\n                  <td><input placeholder=\"Editedasset_id\" [(ngModel)]=\"Editedasset_id\"></td>\n                  <td><input placeholder=\"Editedcan_read\" [(ngModel)]=\"Editedcan_read\"></td>\n                  <td><input placeholder=\"Editedcan_insert\" [(ngModel)]=\"Editedcan_insert\"></td>\n                  <td><input placeholder=\"Editedcan_update\" [(ngModel)]=\"Editedcan_update\"></td>\n                  <td><input placeholder=\"Editedcan_delete\" [(ngModel)]=\"Editedcan_delete\"></td>\n                  \n                  \n                  \n                 \n                </tr>\n              \n            \n                \n              </tbody>\n              \n            </table>\n            \n         \n  \n  \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- Modal Agregar -->\n  <div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar asset </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        \n        \n        <input placeholder=\"Ingresa el rol \"    [(ngModel)]=\"role_id\">\n        <input placeholder=\"Ingresa el id del asset \"    [(ngModel)]=\"asset_id\">\n        <input placeholder=\"Puede leer? \"    [(ngModel)]=\"can_read\">\n        <input placeholder=\"Puede insertar? \"    [(ngModel)]=\"can_insert\">\n        <input placeholder=\"Puede actualizar? \"    [(ngModel)]=\"can_update\">\n        <input placeholder=\"Puede eliminar? \"    [(ngModel)]=\"can_delete\">\n\n        \n        \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add asset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n   <!-- Modal Búsqueda -->\n  <!--  <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body  modal-lg\">\n          <div class=\"table-responsive\">\n          <table class=\"table-sm table-striped\">\n            <thead>\n              <tr>\n                \n                \n                <th scope=\"col\">id</th>\n                <th scope=\"col\">name</th>\n                \n                <th scope=\"col\">Editar</th>\n                <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of objectArray\">\n                <td>{{ element.id }}</td>\n                <td>{{ element.name }}</td>\n                \n                <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                    Editar\n                  </button></td>\n                <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n                \n              </tr>\n              \n          \n              \n            </tbody>\n\n            <tfoot>\n                <tr>\n                  \n                <ul class=\"pagination \">\n                  <li class=\"page-item\">\n                      <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                  </li>\n                  <li class=\"page-item active\">\n                      <a button class=\"page-link\"  > {{paginaActual}} </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                  </li>\n                  <li>\n                      <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                  </li>\n                </ul>\n                \n                </tr>\n              </tfoot>\n          \n          </table>\n          \n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          \n        </div>\n      </div>\n    </div>\n  </div> -->\n  "

/***/ }),

/***/ "./src/app/permission/permission.component.ts":
/*!****************************************************!*\
  !*** ./src/app/permission/permission.component.ts ***!
  \****************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/permission */ "./src/app/shared/permission.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "asset";
    }
    PermissionComponent.prototype.ngOnInit = function () {
        this.tablaActual = "permission";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    PermissionComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    PermissionComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    PermissionComponent.prototype.agregar = function () {
        var _this = this;
        var elemento = new _shared_permission__WEBPACK_IMPORTED_MODULE_2__["Permission"]();
        elemento.role_id = this.role_id;
        elemento.asset_id = this.asset_id;
        elemento.can_read = this.can_read;
        elemento.can_insert = this.can_insert;
        elemento.can_update = this.can_update;
        elemento.can_delete = this.can_delete;
        console.log(elemento);
        this.servicio.add(elemento, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.role_id = 0;
        this.asset_id = 0;
        this.can_read = "";
        this.can_insert = "";
        this.can_update = "";
        this.can_delete = "";
    };
    PermissionComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Editedrole_id = objeto.role_id;
        this.Editedasset_id = objeto.asset_id;
        this.Editedcan_read = objeto.can_read;
        this.Editedcan_insert = objeto.can_insert;
        this.Editedcan_update = objeto.can_update;
        this.Editedcan_delete = objeto.can_delete;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    PermissionComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.role_id = this.Editedrole_id;
        this.Editobject.asset_id = this.Editedasset_id;
        this.Editobject.can_read = this.Editedcan_read;
        this.Editobject.can_read = this.Editedcan_insert;
        this.Editobject.can_update = this.Editedcan_update;
        this.Editobject.can_delete = this.Editedcan_delete;
        ;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PermissionComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PermissionComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    PermissionComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    PermissionComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    PermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.css */ "./src/app/permission/permission.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n    Add person\n  </button>\n  \n  <div>\n    <input placeholder=\"Search person\" [(ngModel)]=\"buscar\">\n  <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n  </div>\n  <!-- Listar  -->\n  <table class=\"table-sm table-striped\">\n    <thead>\n      <tr>\n        \n        \n        <th scope=\"col\">id</th>\n        <th scope=\"col\">Usuario</th>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">Apellido</th>\n        <th scope=\"col\">Nac</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Sexo</th>\n        <th scope=\"col\">Fono</th>\n        <th scope=\"col\">Pais</th>\n        <th scope=\"col\">Rol</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let element of objectArray\">\n        <td>{{ element.id }}</td>\n        <td>{{ element.username }}</td>\n        <td>{{ element.first_name }}</td>\n        <td>{{ element.last_name }}</td>\n        <td>{{ element.birthyear }}</td>\n        <td>{{ element.email }}</td>\n        <td>{{ element.gender }}</td>\n        <td>{{ element.phone_num }}</td>\n        <td>{{ element.country_id }}</td>\n        <td>{{ element.role_id }}</td>\n        \n        <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n            Editar\n          </button></td>\n        <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n        \n      </tr>\n  \n      \n    </tbody>\n    <tfoot>\n        <tr>\n          \n        <ul class=\"pagination \">\n          <li class=\"page-item\">\n              <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n          </li>\n          <li class=\"page-item active\">\n              <a button class=\"page-link\"  > {{paginaActual}} </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n          </li>\n          <li>\n              <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n          </li>\n        </ul>\n        \n        </tr>\n      </tfoot>\n  \n  </table>\n  \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"Edited_username\" [(ngModel)]=\"Edited_username\">\n          <input placeholder=\"Edited_first_name\" [(ngModel)]=\"Edited_first_name\">\n          <input placeholder=\"Edited_last_name\" [(ngModel)]=\"Edited_last_name\">\n          <input placeholder=\"Edited_birthyear\" [(ngModel)]=\"Edited_birthyear\">\n          <input placeholder=\"Edited_email\" [(ngModel)]=\"Edited_email\">\n          <input placeholder=\"Edited_gender\" [(ngModel)]=\"Edited_gender\">\n          <input placeholder=\"Edited_phone_num\" [(ngModel)]=\"Edited_phone_num\">\n          <input placeholder=\"Edited_country_id\" [(ngModel)]=\"Edited_country_id\">\n          <input placeholder=\"Edited_role_id\" [(ngModel)]=\"Edited_role_id\">\n          \n\n  \n  \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- Modal Agregar -->\n  <div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar asset </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        \n        <input placeholder=\"Ingresa username\"    [(ngModel)]=\"username\">\n        <input placeholder=\"Ingresa password\"    [(ngModel)]=\"password\">\n        <input placeholder=\"Ingresa first_name\"    [(ngModel)]=\"first_name\">\n        <input placeholder=\"Ingresa last_name\"    [(ngModel)]=\"last_name\">\n        <input placeholder=\"Ingresa birthyear\"    [(ngModel)]=\"birthyear\">\n        <input placeholder=\"Ingresa email\"    [(ngModel)]=\"email\">\n        <input placeholder=\"Ingresa gender\"    [(ngModel)]=\"gender\">\n        <input placeholder=\"Ingresa phone_num\"    [(ngModel)]=\"phone_num\">\n        <input placeholder=\"Ingresa country_id\"    [(ngModel)]=\"country_id\">\n        <input placeholder=\"Ingresa role_id\"    [(ngModel)]=\"role_id\">\n        \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add person</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n   <!-- Modal Búsqueda -->\n   <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body  modal-lg\">\n          <div class=\"table-responsive\">\n          <table class=\"table-sm table-striped\">\n            <thead>\n              <tr>\n                \n                \n                <th scope=\"col\">id</th>\n                <th scope=\"col\">name</th>\n                \n                <th scope=\"col\">Editar</th>\n                <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of objectArray\">\n                <td>{{ element.id }}</td>\n                <td>{{ element.name }}</td>\n                \n                <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                    Editar\n                  </button></td>\n                <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n                \n              </tr>\n          \n              \n            </tbody>\n            <tfoot>\n                <tr>\n                  \n                <ul class=\"pagination \">\n                  <li class=\"page-item\">\n                      <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                  </li>\n                  <li class=\"page-item active\">\n                      <a button class=\"page-link\"  > {{paginaActual}} </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                  </li>\n                  <li>\n                      <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                  </li>\n                </ul>\n                \n                </tr>\n              </tfoot>\n          \n          </table>\n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/person */ "./src/app/shared/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonComponent = /** @class */ (function () {
    function PersonComponent(servicio) {
        this.servicio = servicio;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.tablaActual = "person";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
        this.attributoBusqueda = "username";
    };
    PersonComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    PersonComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    PersonComponent.prototype.agregar = function () {
        var _this = this;
        var elemento = new _shared_person__WEBPACK_IMPORTED_MODULE_2__["Person"]();
        elemento.id = this.id;
        elemento.username = this.username;
        elemento.password = this.password;
        elemento.first_name = this.first_name;
        elemento.last_name = this.last_name;
        elemento.birthyear = this.birthyear;
        elemento.email = this.email;
        elemento.gender = this.gender;
        elemento.phone_num = this.phone_num;
        elemento.country_id = this.country_id;
        elemento.role_id = this.role_id;
        console.log(elemento);
        this.servicio.add(elemento, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.id = 0;
        this.username = "";
        this.password = "";
        this.first_name = "";
        this.last_name = "";
        this.birthyear = "";
        this.email = "";
        this.gender = "";
        this.phone_num = "";
        this.country_id = 0;
        this.role_id = 0;
    };
    PersonComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Edited_username = objeto.username;
        this.Edited_password = objeto.password;
        this.Edited_first_name = objeto.first_name;
        this.Edited_last_name = objeto.last_name;
        this.Edited_birthyear = objeto.birthyear;
        this.Edited_email = objeto.email;
        this.Edited_email = objeto.gender;
        this.Edited_phone_num = objeto.phone_num;
        this.Edited_country_id = objeto.country_id;
        this.Edited_role_id = objeto.role_id;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    PersonComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.username = this.Edited_username;
        this.Editobject.password = this.Edited_password;
        this.Editobject.first_name = this.Edited_first_name;
        this.Editobject.last_name = this.Edited_last_name;
        this.Editobject.birthyear = this.Edited_birthyear;
        this.Editobject.email = this.Edited_email;
        this.Editobject.gender = this.Edited_gender;
        this.Editobject.phone_num = this.Edited_phone_num;
        this.Editobject.country_id = this.Edited_country_id;
        this.Editobject.role_id = this.Edited_role_id;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PersonComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    PersonComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    PersonComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    PersonComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/*!***********************************************!*\
  !*** ./src/app/request/request.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n  Add request\n</button>\n\n<div>\n  <input placeholder=\"Search asset\" [(ngModel)]=\"buscar\">\n<button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n</div>\n<!-- Listar  -->\n<table class=\"table-sm table-striped\">\n  <thead>\n    <tr>\n      \n      \n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">Texto</th>\n      <th scope=\"col\">Url</th>\n      <th scope=\"col\">Estado</th>\n      <th scope=\"col\">Observaciones</th>\n      <th scope=\"col\">Id Tipo de Seña</th>\n      <th scope=\"col\">Id Persona</th>\n      <th scope=\"col\">Editar</th>\n      <th scope=\"col\">Eliminar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let element of objectArray\">\n      <td>{{ element.id }}</td>\n      <td>{{ element.sign_text }}</td>\n      <td>{{ element.url }}</td>\n      <td>{{ element.status }}</td>\n      <td>{{ element.observations }}</td>\n      <td>{{ element.sign_set_id }}</td>\n      <td>{{ element.person_id }}</td>\n      <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n          Editar\n        </button></td>\n      <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n      \n    </tr>\n\n    \n  </tbody>\n  <tfoot>\n      <tr>\n        \n      <ul class=\"pagination \">\n        <li class=\"page-item\">\n            <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n        </li>\n        <li class=\"page-item active\">\n            <a button class=\"page-link\"  > {{paginaActual}} </a>\n        </li>\n        <li class=\"page-item disabled\">\n            <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n        </li>\n        <li>\n            <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n        </li>\n      </ul>\n      \n      </tr>\n    </tfoot>\n\n</table>\n\n<!-- Modal Editar -->\n<div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n        <input placeholder=\"Editsign_text\" [(ngModel)]=\"Editsign_text\">\n\n        <input placeholder=\"Editurl\" [(ngModel)]=\"Editurl\">\n        <input placeholder=\"Editstatus\" [(ngModel)]=\"Editstatus\">\n        <input placeholder=\"Editobservations\" [(ngModel)]=\"Editobservations\">\n        <input placeholder=\"Editsign_set_id\" [(ngModel)]=\"Editsign_set_id\">\n        <input placeholder=\"Editperson_id\" [(ngModel)]=\"Editperson_id\">\n        \n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal Agregar -->\n<div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar request </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      \n        <input placeholder=\"Seña\" [(ngModel)]=\"sign_text\">\n\n        <input placeholder=\"url\" [(ngModel)]=\"url\">\n        <input placeholder=\"estado\" [(ngModel)]=\"status\">\n        <input placeholder=\"observaciones\" [(ngModel)]=\"observations\">\n        <input placeholder=\"tipo de seña\" [(ngModel)]=\"sign_set_id\">\n        <input placeholder=\"colaborador\" [(ngModel)]=\"person_id\">\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Add request</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n <!-- Modal Búsqueda -->\n <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog \" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body  modal-lg\">\n        <div class=\"table-responsive\">\n        <table class=\"table-sm table-striped\">\n          <thead>\n            <tr>\n              \n                <th scope=\"col\">Id</th>\n                <th scope=\"col\">Texto</th>\n                <th scope=\"col\">Url</th>\n                <th scope=\"col\">Estado</th>\n                <th scope=\"col\">Observaciones</th>\n                <th scope=\"col\">Id Tipo de Seña</th>\n                <th scope=\"col\">Id Persona</th>\n                <th scope=\"col\">Editar</th>\n                <th scope=\"col\">Eliminar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let element of objectArray\">\n              <td>{{ element.id }}</td>\n              <td>{{ element.sign_text }}</td>\n              <td>{{ element.url }}</td>\n              <td>{{ element.status }}</td>\n              <td>{{ element.observations }}</td>\n              <td>{{ element.sign_set_id }}</td>\n              <td>{{ element.person_id }}</td>\n              <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                  Editar\n                </button></td>\n              <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n              \n            </tr>\n        \n            \n          </tbody>\n          <tfoot>\n              <tr>\n                \n              <ul class=\"pagination \">\n                <li class=\"page-item\">\n                    <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                </li>\n                <li class=\"page-item disabled\">\n                    <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                </li>\n                <li class=\"page-item active\">\n                    <a button class=\"page-link\"  > {{paginaActual}} </a>\n                </li>\n                <li class=\"page-item disabled\">\n                    <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                </li>\n                <li>\n                    <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                </li>\n              </ul>\n              \n              </tr>\n            </tfoot>\n        \n        </table>\n      </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/request */ "./src/app/shared/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestComponent = /** @class */ (function () {
    function RequestComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "sign_text";
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.tablaActual = "request";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    RequestComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    RequestComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    RequestComponent.prototype.agregar = function () {
        var _this = this;
        var elemento = new _shared_request__WEBPACK_IMPORTED_MODULE_2__["Request"]();
        elemento.sign_text = this.sign_text;
        elemento.url = this.url;
        elemento.status = this.status;
        elemento.observations = this.observations;
        elemento.sign_set_id = this.sign_set_id;
        elemento.person_id = this.person_id;
        this.servicio.add(elemento, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.sign_text = "";
        this.url = "";
        this.status = "";
        this.observations = "";
        this.sign_set_id = 0;
        this.person_id = 0;
    };
    RequestComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Editsign_text = objeto.sign_text;
        this.Editurl = objeto.url;
        this.Editstatus = objeto.status;
        this.Editobservations = objeto.observations;
        this.Editsign_set_id = objeto.sign_set_id;
        this.Editperson_id = objeto.person_id;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    RequestComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.sign_text = this.Editsign_text;
        this.Editobject.url = this.Editurl;
        this.Editobject.status = this.Editstatus;
        this.Editobject.observations = this.Editobservations;
        this.Editobject.sign_set_id = this.Editsign_set_id;
        this.Editobject.person_id = this.Editperson_id;
        ;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    RequestComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    RequestComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    RequestComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    RequestComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin>\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n    Añadir Rol\n  </button>\n  \n  <div>\n    <input placeholder=\"Search asset\" [(ngModel)]=\"buscar\">\n  <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Buscar</button>\n  </div>\n  <!-- Listar  -->\n  <table class=\"table-sm table-striped\">\n    <thead>\n      <tr>\n        \n        \n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">Descripción</th>\n        <th scope=\"col\">Editar</th>\n        <th scope=\"col\">Eliminar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let element of objectArray\">\n        <td>{{ element.id }}</td>\n        <td>{{ element.name }}</td>\n        <td>{{ element.description }}</td>\n        <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n            Editar\n          </button></td>\n        <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n        \n      </tr>\n  \n      \n    </tbody>\n    <tfoot>\n        <tr>\n          \n        <ul class=\"pagination \">\n          <li class=\"page-item\">\n              <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n          </li>\n          <li class=\"page-item active\">\n              <a button class=\"page-link\"  > {{paginaActual}} </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n          </li>\n          <li>\n              <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n          </li>\n        </ul>\n        \n        </tr>\n      </tfoot>\n  \n  </table>\n  \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"Editname\" [(ngModel)]=\"Editname\">\n\n          <input placeholder=\"Editdescription\" [(ngModel)]=\"Editdescription\">\n  \n  \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- Modal Agregar -->\n  <div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar Rol </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        \n        <input placeholder=\"Ingresa nombre\"    [(ngModel)]=\"name\">\n        <input placeholder=\"Ingresa description\"    [(ngModel)]=\"description\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Añadir Rol</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n   <!-- Modal Búsqueda -->\n   <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body  modal-lg\">\n          <div class=\"table-responsive\">\n          <table class=\"table-sm table-striped\">\n            <thead>\n              <tr>\n                \n                \n                  <th scope=\"col\">Id</th>\n                  <th scope=\"col\">Nombre</th>\n                  <th scope=\"col\">Descripción</th>\n                  <th scope=\"col\">Editar</th>\n                  <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of objectArray\">\n                <td>{{ element.id }}</td>\n                <td>{{ element.name }}</td>\n                <td>{{ element.description }}</td>\n                <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                    Editar\n                  </button></td>\n                <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n                \n              </tr>\n          \n              \n            </tbody>\n            <tfoot>\n                <tr>\n                  \n                <ul class=\"pagination \">\n                  <li class=\"page-item\">\n                      <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                  </li>\n                  <li class=\"page-item active\">\n                      <a button class=\"page-link\"  > {{paginaActual}} </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                  </li>\n                  <li>\n                      <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                  </li>\n                </ul>\n                \n                </tr>\n              </tfoot>\n          \n          </table>\n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/role */ "./src/app/shared/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleComponent = /** @class */ (function () {
    function RoleComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "name";
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.tablaActual = "role";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    RoleComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    RoleComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    RoleComponent.prototype.agregar = function () {
        var _this = this;
        console.log(this.name);
        var elemeto = new _shared_role__WEBPACK_IMPORTED_MODULE_2__["Role"]();
        elemeto.name = this.name;
        elemeto.description = this.description;
        this.servicio.add(elemeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.name = "";
    };
    RoleComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Editname = objeto.name;
        this.Editdescription = objeto.description;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    RoleComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.name = this.Editname;
        this.Editobject.description = this.description;
        ;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    RoleComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    RoleComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    RoleComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    RoleComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/person";
    }
    AuthService.prototype.getUsers = function () {
        return this.http.get(this.API_URL);
    };
    AuthService.prototype.like = function (username) {
        return this.http.get(this.API_URL + "?_where=(username,like,~" + username + ")");
    };
    AuthService.prototype.signUp = function (user) {
        return this.http.post(this.API_URL, user);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
var idUser = "";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isLogged = function () {
        return !!localStorage.getItem("idUser");
    };
    Object.defineProperty(BackendService, "idUser", {
        get: function () {
            return localStorage.getItem("idUser");
        },
        set: function (idUser) {
            localStorage.setItem("idUser", idUser);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());



/***/ }),

/***/ "./src/app/services/colaboradores.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/colaboradores.service.ts ***!
  \***************************************************/
/*! exports provided: ColaboradoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresService", function() { return ColaboradoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColaboradoresService = /** @class */ (function () {
    function ColaboradoresService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/";
    }
    ColaboradoresService.prototype.getById = function (p, size, idPersona, status, tablaActual) {
        //return this.http.get(this.API_URL+tablaActual+"?_p="+p+"&_size="+size+"/findOne?_where=(person_id,eq,"+idPersona+")");
        //return this.http.get(this.API_URL+tablaActual+"?_p="+p+"&_size="+size+"?_where=(person_id,eq,"+idPersona+")");
        return this.http.get(this.API_URL + tablaActual + "?_p=" + p + "&_size=" + size + "&_where=(person_id,eq," + idPersona + ")~and(status,eq," + status + ")");
        //http://www.modoayuda.com/api/request?_where=(person_id,eq,1)
    };
    ColaboradoresService.prototype.get = function (p, size, tabla) {
        return this.http.get(this.API_URL + tabla + "?_p=" + p + "&_size=" + size);
    };
    ColaboradoresService.prototype.addRequest = function (request) {
        return this.http.post(this.API_URL + "request", request);
    };
    ColaboradoresService.prototype.countRequest = function (num, status) {
        return this.http.get(this.API_URL + "request/count?_where=(person_id,eq," + num + ")~and(status,eq," + status + ")");
    };
    ColaboradoresService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColaboradoresService);
    return ColaboradoresService;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.API_URL = "http://modoayuda.com/api/";
    }
    MainService.prototype.getCountries2 = function () {
        return this.http.get(this.API_URL);
    };
    MainService.prototype.getById = function (id, tabla) {
        return this.http.get(this.API_URL + tabla + "/" + id);
    };
    //?_p=2&_size=50
    MainService.prototype.get = function (p, size, tabla) {
        return this.http.get(this.API_URL + tabla + "?_p=" + p + "&_size=" + size);
    };
    MainService.prototype.add = function (objeto, tabla) {
        return this.http.post(this.API_URL + tabla, objeto);
    };
    MainService.prototype.patch = function (objeto, tabla) {
        return this.http.patch(this.API_URL + tabla + "/" + objeto.id, objeto);
    };
    MainService.prototype.delete = function (objeto, tabla) {
        return this.http.delete(this.API_URL + tabla + "/" + objeto.id);
    };
    MainService.prototype.count = function (tabla) {
        return this.http.get(this.API_URL + tabla + "/count");
    };
    MainService.prototype.like = function (busqueda, tabla, atributo) {
        return this.http.get(this.API_URL + tabla + "?_where=(" + atributo + ",like,~" + busqueda + ")");
    };
    MainService.prototype.listarTablas = function () {
        return this.http.get(this.API_URL + "tables");
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/shared/asset.ts":
/*!*********************************!*\
  !*** ./src/app/shared/asset.ts ***!
  \*********************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
var Asset = /** @class */ (function () {
    function Asset() {
    }
    return Asset;
}());



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs';

var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"].isLogged()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth.ts":
/*!********************************!*\
  !*** ./src/app/shared/auth.ts ***!
  \********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
var Auth = /** @class */ (function () {
    function Auth() {
        this.gender = "M";
        this.birthyear = "1990";
        this.country_id = 589;
        this.role_id = 3;
    }
    return Auth;
}());



/***/ }),

/***/ "./src/app/shared/country.ts":
/*!***********************************!*\
  !*** ./src/app/shared/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/shared/people.ts":
/*!**********************************!*\
  !*** ./src/app/shared/people.ts ***!
  \**********************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());



/***/ }),

/***/ "./src/app/shared/permission.ts":
/*!**************************************!*\
  !*** ./src/app/shared/permission.ts ***!
  \**************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission() {
    }
    return Permission;
}());



/***/ }),

/***/ "./src/app/shared/person.ts":
/*!**********************************!*\
  !*** ./src/app/shared/person.ts ***!
  \**********************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/shared/request.ts":
/*!***********************************!*\
  !*** ./src/app/shared/request.ts ***!
  \***********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var Request = /** @class */ (function () {
    function Request() {
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/shared/role.ts":
/*!********************************!*\
  !*** ./src/app/shared/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/shared/signset.ts":
/*!***********************************!*\
  !*** ./src/app/shared/signset.ts ***!
  \***********************************/
/*! exports provided: signset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signset", function() { return signset; });
var signset = /** @class */ (function () {
    function signset() {
    }
    return signset;
}());



/***/ }),

/***/ "./src/app/signset/signset.component.css":
/*!***********************************************!*\
  !*** ./src/app/signset/signset.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signset/signset.component.html":
/*!************************************************!*\
  !*** ./src/app/signset/signset.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin></app-menu-admin>\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAgregar\">\n    Agregar Tipo\n  </button>\n  \n  <div>\n    <input placeholder=\"Search asset\" [(ngModel)]=\"buscar\">\n  <button (click)=\"busqueda()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBuscar\"> Search</button>\n  </div>\n  <!-- Listar  -->\n  <table class=\"table-sm table-striped\">\n    <thead>\n      <tr>\n        \n        \n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">Descripción</th>\n        <th scope=\"col\">Editar</th>\n        <th scope=\"col\">Eliminar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let element of objectArray\">\n        <td>{{ element.id }}</td>\n        <td>{{ element.name }}</td>\n        <td>{{ element.description }}</td>\n        <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\">\n            Editar\n          </button></td>\n        <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n        \n      </tr>\n  \n      \n    </tbody>\n    <tfoot>\n        <tr>\n          \n        <ul class=\"pagination \">\n          <li class=\"page-item\">\n              <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n          </li>\n          <li class=\"page-item active\">\n              <a button class=\"page-link\"  > {{paginaActual}} </a>\n          </li>\n          <li class=\"page-item disabled\">\n              <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n          </li>\n          <li>\n              <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n          </li>\n        </ul>\n        \n        </tr>\n      </tfoot>\n  \n  </table>\n  \n  <!-- Modal Editar -->\n  <div class=\"modal fade\" id=\"modalEditar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          \n          <input placeholder=\"Editname\" [(ngModel)]=\"Editname\">\n\n          <input placeholder=\"Editdescription\" [(ngModel)]=\"Editdescription\">\n  \n  \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"patch()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar Cambios</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <!-- Modal Agregar -->\n  <div class=\"modal fade\" id=\"modalAgregar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar Tipo </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        \n        <input placeholder=\"Ingresa nombre\"    [(ngModel)]=\"name\">\n        <input placeholder=\"Ingresa description\"    [(ngModel)]=\"description\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          <button (click) =\"agregar()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Agregar Tipo</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n   <!-- Modal Búsqueda -->\n   <div class=\"modal fade\" id=\"modalBuscar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultado de la búsqueda </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body  modal-lg\">\n          <div class=\"table-responsive\">\n          <table class=\"table-sm table-striped\">\n            <thead>\n              <tr>\n                \n                \n                <th scope=\"col\">Id</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Descripción</th>\n                <th scope=\"col\">Editar</th>\n                <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of objectArray\">\n                <td>{{ element.id }}</td>\n                <td>{{ element.name }}</td>\n                <td>{{ element.description }}</td>\n                <td><button (click) =\"editar(element)\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEditar\" data-dismiss=\"modal\">\n                    Editar\n                  </button></td>\n                <td><button (click)=\"eliminar(element)\" class=\"btn btn-danger\">Eliminar</button></td>\n                \n              </tr>\n          \n              \n            </tbody>\n            <tfoot>\n                <tr>\n                  \n                <ul class=\"pagination \">\n                  <li class=\"page-item\">\n                      <a button (click)=\"AnteriorPagina()\"class=\"page-link\"  > Página Anterior </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a button class=\"page-link\"  > {{paginaAnterior}} </a>\n                  </li>\n                  <li class=\"page-item active\">\n                      <a button class=\"page-link\"  > {{paginaActual}} </a>\n                  </li>\n                  <li class=\"page-item disabled\">\n                      <a class=\"page-link\"  > {{paginaSiguiente}} </a>\n                  </li>\n                  <li>\n                      <a button (click)=\"SiguientePagina()\"class=\"page-link \"  > Página siguiente </a>\n                  </li>\n                </ul>\n                \n                </tr>\n              </tfoot>\n          \n          </table>\n        </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/signset/signset.component.ts":
/*!**********************************************!*\
  !*** ./src/app/signset/signset.component.ts ***!
  \**********************************************/
/*! exports provided: SignsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignsetComponent", function() { return SignsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _shared_signset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/signset */ "./src/app/shared/signset.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignsetComponent = /** @class */ (function () {
    function SignsetComponent(servicio) {
        this.servicio = servicio;
        this.attributoBusqueda = "name";
    }
    SignsetComponent.prototype.ngOnInit = function () {
        this.tablaActual = "sign_set";
        this.itemsPorPagina = 10;
        this.calcularPaginacion();
        this.listar();
        this.paginaAnterior = 0;
        this.paginaActual = 1;
        this.paginaSiguiente = 2;
    };
    SignsetComponent.prototype.listar = function () {
        var _this = this;
        this.servicio.get(this.paginaActual, this.itemsPorPagina, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.objectArray = data;
        });
    };
    SignsetComponent.prototype.busqueda = function () {
        var _this = this;
        this.servicio.like(this.buscar, this.tablaActual, this.attributoBusqueda).subscribe(function (data) {
            _this.objectBusqueda = data;
            _this.buscar = "";
        });
    };
    SignsetComponent.prototype.agregar = function () {
        var _this = this;
        console.log(this.name);
        var elemeto = new _shared_signset__WEBPACK_IMPORTED_MODULE_2__["signset"]();
        elemeto.name = this.name;
        elemeto.description = this.description;
        this.servicio.add(elemeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
        this.name = "";
    };
    SignsetComponent.prototype.editar = function (objeto) {
        console.log(objeto);
        this.Editobject = objeto;
        this.Editname = objeto.name;
        this.Editdescription = objeto.description;
        this.servicio.count(this.tablaActual).subscribe(function (count) {
            console.log(count);
        });
    };
    SignsetComponent.prototype.patch = function () {
        var _this = this;
        console.log(this.Editobject);
        this.Editobject.name = this.Editname;
        this.Editobject.description = this.description;
        ;
        this.servicio.patch(this.Editobject, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    SignsetComponent.prototype.eliminar = function (objeto) {
        var _this = this;
        console.log(objeto);
        this.servicio.delete(objeto, this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.listar();
        });
    };
    SignsetComponent.prototype.calcularPaginacion = function () {
        var _this = this;
        this.servicio.count(this.tablaActual).subscribe(function (data) {
            console.log(data);
            _this.cuantasFilas = data[0].no_of_rows;
            console.log(_this.cuantasFilas);
            _this.paginacion = Math.ceil(_this.cuantasFilas / _this.itemsPorPagina);
            console.log(_this.paginacion);
        });
    };
    SignsetComponent.prototype.SiguientePagina = function () {
        if (this.paginaSiguiente <= this.paginacion) {
            this.paginaAnterior++;
            this.paginaActual++;
            this.paginaSiguiente++;
        }
        this.listar();
    };
    SignsetComponent.prototype.AnteriorPagina = function () {
        if (this.paginaAnterior > 0) {
            this.paginaAnterior--;
            this.paginaActual--;
            this.paginaSiguiente--;
            this.listar();
        }
    };
    SignsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signset',
            template: __webpack_require__(/*! ./signset.component.html */ "./src/app/signset/signset.component.html"),
            styles: [__webpack_require__(/*! ./signset.component.css */ "./src/app/signset/signset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], SignsetComponent);
    return SignsetComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"text-center text-white mb-4\">Bootstrap 4 Login Form</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6 mx-auto\">\n  \n                    <!-- form card login -->\n                    <div class=\"card rounded-0\">\n                        <div class=\"card-header\">\n                            <h3 class=\"mb-0\">Register</h3>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"form\" role=\"form\" autocomplete=\"off\" id=\"formLogin\" novalidate=\"\" method=\"POST\">\n                                <div class=\"form-group\">\n                                    <label for=\"uname1\">Nombre de usuario</label>\n                                    <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control form-control-lg rounded-0\" name=\"uname1\" id=\"uname1\" required=\"\" autocomplete=\"name\">\n                                    <div class=\"invalid-feedback\">Oops, you missed this one.</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Contraseña</label>\n                                    <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control form-control-lg rounded-0\" id=\"pwd1\" required=\"\" autocomplete=\"new-password\">\n                                    <div class=\"invalid-feedback\">Enter your password too!</div>\n                                </div>\n                                <div class=\"form-group\">\n                                        <label>Nombre</label>\n                                        <input [(ngModel)]=\"first_name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control form-control-lg rounded-0\" autocomplete=\"give-name\" id=\"fname\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                        <label>Apellido</label>\n                                        <input [(ngModel)]=\"last_name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control form-control-lg rounded-0\" autocomplete=\"last-name\" id=\"lname\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                        <label>Correo electrónico</label>\n                                        <input [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control form-control-lg rounded-0\" id=\"email\" autocomplete=\"email\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                        <label>Número de contacto</label>\n                                        <input [(ngModel)]=\"phone_number\" [ngModelOptions]=\"{standalone: true}\" type=\"phone\" class=\"form-control form-control-lg rounded-0\" id=\"phone\" autocomplete=\"tel-national\" required>\n                                </div>\n                                <div>\n                                    <label class=\"custom-control custom-checkbox\">\n                                      <input type=\"checkbox\" class=\"custom-control-input\">\n                                      <span class=\"custom-control-indicator\"></span>\n                                    </label>\n                                </div>\n                                <button (click)=\"signup()\" type=\"submit\" class=\"btn btn-success btn-lg float-right\" id=\"btnLogin\">SignUp</button>\n                            </form>\n                        </div>\n                        <!--/card-block-->\n                    </div>\n                    <!-- /form card login -->\n  \n                </div>\n  \n  \n            </div>\n            <!--/row-->\n  \n        </div>\n        <!--/col-->\n    </div>\n    <!--/row-->\n  </div>\n  <!--/container--> "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(servicioAuth, router) {
        this.servicioAuth = servicioAuth;
        this.router = router;
        this.birthyear = "1990";
        this.gender = "M";
        this.country_id = 589;
        this.role_id = 3;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioAuth.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var user = new _shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"]();
        user.username = this.username;
        user.password = this.password;
        user.first_name = this.first_name;
        user.last_name = this.last_name;
        user.email = this.email;
        user.phone_num = this.phone_num;
        this.servicioAuth.signUp(user).subscribe(function () {
            _this.router.navigate(["/login"]);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBOlRqP2enfcFypDCWWN5myKz3L64M6qfw",
        authDomain: "web-service-ami.firebaseapp.com",
        databaseURL: "https://web-service-ami.firebaseio.com",
        projectId: "web-service-ami",
        storageBucket: "web-service-ami.appspot.com",
        messagingSenderId: "924558952164"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\ami-signtionary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
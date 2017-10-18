var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Inject, ElementRef, forwardRef } from '@angular/core';
import { AngularMasonry } from './masonry';
var AngularMasonryBrick = /** @class */ (function () {
    function AngularMasonryBrick(_element, _parent) {
        this._element = _element;
        this._parent = _parent;
    }
    AngularMasonryBrick.prototype.ngAfterViewInit = function () {
        this._parent.add(this._element.nativeElement);
        this.watchForHtmlChanges();
    };
    AngularMasonryBrick.prototype.ngOnDestroy = function () {
        this._parent.remove(this._element.nativeElement);
    };
    /** When HTML in brick changes dinamically, observe that and change layout */
    AngularMasonryBrick.prototype.watchForHtmlChanges = function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /** Watch for any changes to subtree */
            var self_1 = this;
            var observer = new MutationObserver(function (mutations, observerFromElement) {
                self_1._parent.layout();
            });
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    AngularMasonryBrick = __decorate([
        Directive({
            selector: '[masonry-brick], masonry-brick'
        }),
        __param(1, Inject(forwardRef(function () { return AngularMasonry; }))),
        __metadata("design:paramtypes", [ElementRef,
            AngularMasonry])
    ], AngularMasonryBrick);
    return AngularMasonryBrick;
}());
export { AngularMasonryBrick };
//# sourceMappingURL=brick.js.map
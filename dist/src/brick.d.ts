import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { AngularMasonry } from './masonry';
export declare class AngularMasonryBrick implements OnDestroy, AfterViewInit {
    private _element;
    private _parent;
    constructor(_element: ElementRef, _parent: AngularMasonry);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** When HTML in brick changes dinamically, observe that and change layout */
    private watchForHtmlChanges();
}

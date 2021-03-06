import { OnInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { MasonryOptions } from './masonry-options';
export declare class AngularMasonry implements OnInit, OnDestroy {
    private _element;
    constructor(_element: ElementRef);
    _msnry: any;
    options: MasonryOptions;
    useImagesLoaded: Boolean;
    layoutComplete: EventEmitter<any[]>;
    removeComplete: EventEmitter<any[]>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    layout(): void;
    add(element: HTMLElement): void;
    remove(element: HTMLElement): void;
}

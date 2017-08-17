import { OnInit, OnDestroy, Directive } from "@angular/core";

@Directive({
    selector:'[spy]'
})
export default class Spy implements OnInit,OnDestroy {
    ngOnDestroy(): void {
       console.log('OnDestroy')
    }
    ngOnInit():void {
        console.log('OnInit');
    }
}
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector:"[sizeswitcher]",
    exportAs:"sizeswitcher",
    standalone:true
})
export class sizeswitcher{
@Input()
@HostBinding('class.large')
isLarge=false;

toggle()
{
    this.isLarge=!this.isLarge;
}
}

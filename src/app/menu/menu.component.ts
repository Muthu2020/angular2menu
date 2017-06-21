import { Component,Input } from '@angular/core';


@Component({
  selector: 'sd-menu',
  templateUrl:'./menu.component.html'
})
export class ng2MenuComponent {
    @Input() menuList:any;
}

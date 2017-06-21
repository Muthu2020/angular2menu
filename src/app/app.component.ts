import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  menus = [
    {label:'Home',path:'/home'},
    {label:'About',path:'/about',submenu:[
      {label:'Help',path:'/about'},
      {label:'Sample',path:'/sample'}
    ]},
    {label:'Contact us',path:'/contactus'}
  ];
}

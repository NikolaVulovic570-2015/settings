import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | any;
  
  items = [
    {icon: 'home', name: 'Departments',
    menuLevel1ArrayOfNames: [
      { menuLevel1Name: 'Recruiting', routerLink: '/recruiting' },
      { menuLevel1Name: 'Accounting', routerLink: '/accounting' },
      { menuLevel1Name: 'Safety', routerLink: '/safety' },
      { menuLevel1Name: 'Maintenance', routerLink: '/maintenance' },
    ],  
    menuLevel2Exist: true,
    menuLevel2Title: 'Dispatch', 
    menuLevel2ArrayOfNames: [
      { menuLevel2Name: 'Dispatch Performance', routerLink: '/dispatch-performance' },
      { menuLevel2Name: 'Preboked loads', routerLink: '/preboked-loads' },
      { menuLevel2Name: 'Trucks', routerLink: '/trucks' },
      { menuLevel2Name: 'Filter Drivers', routerLink: '/filter-drivers' },
      { menuLevel2Name: 'Not covered trucks', routerLink: '/not-covered-trucks' }
    ],
    },
    {icon: 'supervisor_account', name: 'Drivers',
      menuLevel1ArrayOfNames: [
        { menuLevel1Name: 'Drivers', routerLink: '/drivers' },
        { menuLevel1Name: 'Drivers info', routerLink: '/drivers-info' },
        { menuLevel1Name: 'Filter drivers', routerLink: '/filter-drivers' },
        { menuLevel1Name: 'Trucks', routerLink: '/trucks' },
      ],  
      menuLevel2Exist: false
    },
    {icon: 'edit', name : 'Tools',
      menuLevel1ArrayOfNames: [
        { menuLevel1Name: 'Available Trucks', routerLink: '/available-trucks' },
        { menuLevel1Name: 'Load Price Estimation', routerLink: '/load-price-estimation' },
        { menuLevel1Name: 'Driver Search', routerLink: '/driver-search' },
        { menuLevel1Name: 'Contract App', routerLink: '/contract-app' },
      ],  
      menuLevel2Exist: false
    },
    {icon: 'compare_arrows', name: 'Companies',
      menuLevel1ArrayOfNames: [
        { menuLevel1Name: 'JDM Expedite, Inc', routerLink: '/jdm-expedite' },
        { menuLevel1Name: 'Five Star Transport', routerLink: '/five-star-transport' },
        { menuLevel1Name: 'Tempo Freight', routerLink: '/tempo-freight' },
        { menuLevel1Name: 'JDM Logistix', routerLink: '/jdm-logistix' },
      ],  
      menuLevel2Exist: false
    },
    {icon: 'settings', name: 'Settings',
      menuLevel1ArrayOfNames: [
        { menuLevel1Name: 'Settings', routerLink: '/settings' },
      ],  
      menuLevel2Exist: false
    },
    {icon: 'question_mark', name: 'Support',
      menuLevel1ArrayOfNames: [
        { menuLevel1Name: 'Support', routerLink: '/support' },
      ],  
      menuLevel2Exist: false
    }
  ];
  expandIndex: number = 0;

  isExpanded: boolean = true;

  showSubMenu: boolean[] = [false, false, false, false, false, false];

  isShowing: boolean = false;

  showSubSubMenu: boolean[] = [false, false, false, false, false];

  companies = new FormControl(['JDM EXPEDITE']);

  companiesList: string[] = ['JDM EXPEDITE', 'JDM LOGISTICS', 'TEMPO FREIGHT', 'FIVE STAR TRANSPORT', 'OXEMON', 'ALL COMPANIES'];

  clickedSubMenu(index: number) {
    let setBooleanValue: boolean =  this.showSubMenu[index] = !this.showSubMenu[index];
    this.showSubMenu = new Array(6).fill(false);
    this.showSubMenu[index] = setBooleanValue;
    this.showSubSubMenu = new Array(5).fill(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  btnsName: string[] = ['Performance', 'Users', 'Trucks', 'Drivers'];
  selectedIndex: number = 0;

  performanceObj: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSettings().subscribe((response: any) => {
      this.performanceObj = response[1];
      console.log(response);
    })
  };

  selectBtn(i: number) {
    this.selectedIndex = i;
  }

}

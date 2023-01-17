import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.scss']
})

export class RpmComponent implements OnInit {

  selectedRpm: number = 0;
  selectedMinimum: number = 0;
  selectedMile: number = 0;
  selectedPerDriver: number = 0;
  selectedWeekly: number = 0;

  rpmOptions: string[] = ['Rate per mile', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];
  minimumOptions: string[] = ['Minimum', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];
  mileOptions: string[] = ['$/mile', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];
  perDriverOptions: string[] = ['Per driver', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];
  weeklyOptions: string[] = ['Weekly', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];

  constructor() { }

  ngOnInit(): void {
  }

  selectedRpmOption(i: number) {
    this.selectedRpm = i;
  }
  selectedMinimumOption(i: number) {
    this.selectedMinimum = i;
  }
  selectedMileOption(i: number) {
    this.selectedMile = i;
  }
  selectedPerDriverOption(i: number) {
    this.selectedPerDriver = i;
  }
  selectedWeeklyOption(i: number) {
    this.selectedWeekly = i;
  }

}

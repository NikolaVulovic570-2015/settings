import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnChanges {
  @Input() allData: any;

  formData: FormGroup | any;
  selected: string = 'soloDrivers';

  data: any;

  daysArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  homeTimeDay: any[] = [{day: 'MON', checked: false}, {day: 'TUE', checked: false}, {day: 'WED', checked: false}, 
  {day: 'THU', checked: false}, {day: 'FRI', checked: false}, {day: 'SAT', checked: false}, {day: 'SUN', checked: false}];

  drivingTimeDay: any[] = [{day: 'MON', checked: false}, {day: 'TUE', checked: false}, {day: 'WED', checked: false}, 
  {day: 'THU', checked: false}, {day: 'FRI', checked: false}, {day: 'SAT', checked: false}, {day: 'SUN', checked: false}];

  constructor(private dataService: DataService, 
              private formBuilder:  FormBuilder) { }

  ngOnChanges(): void {
    if(this.allData) {
      console.log(this.allData)
      let js = JSON.parse(this.allData.data);
      this.data = js.Solo_drivers;
      this.forbiddenDays();
      this.initForm(this.data);
    }
  }

  forbiddenDays() {
    let days = this.data.home_time_forbidden_days.split('-');
    days.pop();
    console.log(days)
    for(let key in days) {

      for(let key2 in this.homeTimeDay) {

        if(days[key] === this.homeTimeDay[key2].day) {
          this.homeTimeDay[key2].checked = true;
        };

        if(days[key] === this.drivingTimeDay[key2].day) {
          this.drivingTimeDay[key2].checked = true;
        };

      }
    }
  }

  selectDay(homeday: boolean, i: number) {
    if(homeday) {
      this.homeTimeDay[i].checked = !this.homeTimeDay[i].checked
    } else {
      this.drivingTimeDay[i].checked = !this.drivingTimeDay[i].checked
    }
  }

  initForm(obj: any) {
    this.formData = this.formBuilder.group({
        'mileage_per_week': obj.mileage_per_week,
        'home_time_duration': obj.home_time_duration,
        'home_time_in_days': obj.home_time_in_days,
        'home_time_forbidden_days': obj.home_time_forbidden_days,
        'minimum_driving_time': obj.minimum_driving_time,
        '34_hourd_reset_not_be_done_on': obj['34_hourd_reset_not_be_done_on'],
        'forbidden_comodity': obj.forbidden_comodity,
        'forbidden_state': obj.forbidden_state,
        'max_weight': obj.max_weight,
        'max_idle_time': obj.max_idle_time,
        'min_saftx_score': obj.min_saftx_score,
        'min_margin_percent_per_truck': obj.min_margin_percent_per_truck,
        'min_dispatcher_montly_rpm_then_average': obj.min_dispatcher_montly_rpm_then_average,
        'min_drivers_paycheckper_week': obj.min_drivers_paycheckper_week,
        'min_paid_for_load_with_max_miles': obj.min_paid_for_load_with_max_miles,
        'Loads_with_max_miles': obj.Loads_with_max_miles
    });

  }

  save() {
    let performanceForm: any = this.formData.value;
    performanceForm.home_time_forbidden_days = '';
    performanceForm['34_hourd_reset_not_be_done_on']  = '';
    for(let key in this.homeTimeDay) {
      if(this.homeTimeDay[key].checked) {
        performanceForm.home_time_forbidden_days += this.homeTimeDay[key].day + '-';
      };

      if(this.drivingTimeDay[key].checked) {
        performanceForm['34_hourd_reset_not_be_done_on'] += this.drivingTimeDay[key].day + '-';
      };
    }

    let dataForServer: any = JSON.parse(this.allData.data);
    console.log(dataForServer)
    if(this.selected === 'soloDrivers') {
      dataForServer.Solo_drivers = performanceForm;
    } else {
      dataForServer.Team_drivers = performanceForm;
    }
    
    console.log(dataForServer)
    let json: any = JSON.stringify(dataForServer);

    this.allData.data = json;
  
    console.log(this.allData)
    this.dataService.setSettings(this.allData);
  };

  onSelect(selected: string) {
    let js = JSON.parse(this.allData.data);
    if(selected === 'soloDrivers') {
      this.data = js.Solo_drivers;
      this.forbiddenDays();
      this.initForm(this.data);
      console.log(this.data);
    } else {
      this.data = js.Team_drivers;
      this.forbiddenDays();
      this.initForm(this.data);
      console.log(this.data);
    }
  }

}

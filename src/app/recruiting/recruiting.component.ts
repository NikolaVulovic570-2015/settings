import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-recruiting',
  templateUrl: './recruiting.component.html',
  styleUrls: ['./recruiting.component.scss']
})
export class RecruitingComponent implements OnInit {


  rpmObj: any;

  btnsName: string[] = ['CONDITIONS', 'USERS & PERMISSIONS'];


  conditionsName: string[] = ['RATE PER MILE', 'OPERATING AREA', 'WEIGHT', 'GROSS', 'UTILIZATION', 'LOAD LENGTH', 'HOS', 'LOAD LEGTH', 'LOAD LEGTH'];
  btnsName1: any[] = [{btnName: 'RATE PER MILE', checked: false}, {btnName: 'OPERATING AREA', checked: false}, {btnName: 'WEIGHT', checked: false}, 
  {btnName: 'GROSS', checked: false}, {btnName: 'UTILIZATION', checked: false}, {btnName: 'LOAD LENGTH', checked: false}, {btnName: 'HOS', checked: false},
  {btnName: 'LOAD LEGTH', checked: false},{btnName: 'LOAD LEGTH', checked: false}];

  conditionsNumber: number[] = [0, 0];

  selectedCondition: number = 0;

  selectedIndex: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSettings().subscribe((response: any) => {
      this.rpmObj = response[1];
      console.log(response);
  })
}

  selectBtn(i: number) {
    this.selectedIndex = i;
  }

selectedBtn(btn: boolean, i: number)  {
  this.selectedCondition = i;
  this.btnsName1[i].checked = !this.btnsName1[i].checked;
}

addComponent(){
  if (this.selectedCondition === 0){
    this.conditionsNumber[0] += 1;
    }
  if (this.selectedCondition === 1){
    this.conditionsNumber[1] += 1;
  }

  console.log(this.conditionsNumber[0] + "and" + this.conditionsNumber[1]);
  }

}
//  selectedBtn(btn: boolean, i: number) {
//    if(btn) {
//      this.btnsName1[i].checked = !this.btnsName1[i].checked
//      this.selectedCondition = this.btnsName1[i];
//    }
//  }
  
 // onSelect(selected: string) {
 //   if(selected === 'ratePerMile') {
  //    console.log("ratePerMile");
 //   }
 // }


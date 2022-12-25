import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  @Input()selectedVehicle: any
  @Input()constValues: any
  insuranceCompany: any;

  constructor() { }

  ngOnInit(): void {
    this.insuranceCompany=this.constValues.insuranceCompany
  }
  filterInsuranceCompany(){
    let val=this.insuranceCompany.filter((e: { limitPrice: number; })=>this.selectedVehicle.price<=e.limitPrice)
    return val[0].name
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  @Input()selectedVehicle: any
  @Input()constValues: any
  insuranceCompany: any;
  submitForm: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.insuranceCompany=this.constValues.insuranceCompany
    this.submitForm=this.fb.group({
      type:[null],
      year:[null],
    })
  }
  filterInsuranceCompany(){
    let val=this.insuranceCompany.filter((e: { maxPrice: number;minPrice: number })=>this.selectedVehicle.price<=e.maxPrice && this.selectedVehicle.price>=e.minPrice)
    return val[0].name
  }
}

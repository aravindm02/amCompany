import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { StaticJson } from '../staticJson';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  filterForm: any;
  vehicleTypeList=[
    {id:'all',name:'All'},
    {id:'fuel',name:'Fuel vehicles'},
    {id:'electric',name:'Electric vehicles'},
  ]
  wishlistCount=0
  vehicleList: { name: string; type: string; yearOfManufacture: string;image:string; wishlist: boolean; price: number; }[] | undefined;
  private constValues = StaticJson.statics;
  showDetails=false;
  selectedVehicle: any;
  manufacturedYearList: { name: string; id: any; }[] |undefined;
  staticValues:any;



  constructor(private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.staticValues=this.constValues
    this.vehicleList=this.staticValues.vehicles
    this.filterForm=this.fb.group({
      type:[null],
      year:[null],
    })
      this.manufacturedYearList= this.constValues.years 
  }
  addWishlist(list?:any){
    this. wishlistCount=0
    this.vehicleList?.forEach(e=>{
      if(e.name==list.name){
        e.wishlist=true
      }
    })
    this.vehicleList?.forEach(e=>{
      e.wishlist? this.wishlistCount+=1 :this.wishlistCount
    })
  }
  removeWishlist(list?:any){
    this. wishlistCount=0
    this.vehicleList?.forEach(e=>{
      if(e.name==list.name){
        e.wishlist=false
      }
    })
    this.vehicleList?.forEach(e=>{
      e.wishlist? this.wishlistCount+=1 :this.wishlistCount
    })
  }
  filter(){
    let val=this.filterForm.getRawValue()
    if(val.type!='all' && val.year!='all' ){
      this.vehicleList=this.constValues.vehicles.filter(e=>e.type==val.type && e.yearOfManufacture==val.year)
    }else if(val.type!='all' || val.year!='all'){
      this.vehicleList=this.constValues.vehicles.filter(e=>e.type==val.type || e.yearOfManufacture==val.year)
    }
    else{
      this.vehicleList=this.constValues.vehicles
    }
 
  }
  routeToVehicleDetails(list?:any){
    this.showDetails=true
    this.selectedVehicle=list
    this.router.navigate(['home/vehicleDetails'])
  }

}

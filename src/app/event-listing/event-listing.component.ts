import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import { CommentStmt } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  i: number;
  events: any;
  value: number;
  pevents: any;
  searchRes: any;
  dtop: boolean = false;
  mphone: boolean = false;
  page1: boolean = true;
  alert: boolean = false;
  searchQuery: string='';
  searchFlag: boolean = false;
  bookingFlag: boolean = false;
  values = [1, 2, 3, 4, 5, 6];
  valueForm: FormGroup;
  finalForm: FormGroup;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  aseat: boolean = false;
  booked: boolean = false;
  Formvalue: number;
  booking: boolean = false;
  allOkay: boolean = false;
  selfName: string='';
  twoName: string = '';
  threeName: string = '';
  fourName: string = '';
  fiveName: string = '';
  sixName: string = '';

  ngOnInit() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      this.mphone = true;
    }
    else if(/Chrome/i.test(navigator.userAgent)){
      this.dtop = true;
    }
    else{
      this.dtop = true;
    }
    this.http.get("http://localhost:4200/assets/data.json")
    .subscribe((response)=>{
      this.events = response;
    })
  }
  book(data: any){
    this.searchFlag=false;
    this.page1 = false;
    this.pevents = data;
    if(this.pevents.savailable<=10){
      this.alert=true;
    }
  }
  search(){
    this.page1 = false;
    this.searchFlag = true;
    this.searchRes = ["", "", "", ""];
    for (var d = 0, len = this.events.length; d < len; d += 1) {
      if (this.events[d].name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          this.searchRes[d] = this.events[d];
      }
    }
    console.log(this.searchRes);
    if(!this.searchRes.length){
      alert("No result found!");
      window.location.reload();
    }
  }
  cancel(){
    window.location.reload();
  }
  fclick(){
    this.page1 = false;
    this.searchFlag = false;
    this.bookingFlag = true;
    this.valueForm = this.fb.group({
      valueControl: [1]
    });
  }
  done(){
    this.booking = true;
  }
  bbook(){
    this.two = this.three = this.four = this.five = this.six = false;
    if(this.valueForm.value.valueControl <= this.pevents.savailable){
      if(this.valueForm.value.valueControl==1){
        this.booked = true;
      }
      else if(this.valueForm.value.valueControl==2){
        this.two = true;
      }
      else if(this.valueForm.value.valueControl==3){
        this.two = true;
        this.three = true;
      }
      else if(this.valueForm.value.valueControl==4){
        this.two = true;
        this.three = true;
        this.four = true;
      }
      else if(this.valueForm.value.valueControl==5){
        this.two = true;
        this.three = true;
        this.four = true;
        this.five = true;
      }
      else{
        this.two = true;
        this.three = true;
        this.four = true;
        this.five = true;
        this.six = true;
      }
    }
    else{
      this.aseat= true;
    }
    
    if(this.finalForm.valid){
      
      this.allOkay = true;
    }
    if(this.allOkay){
      this.done();
    }
  }
}

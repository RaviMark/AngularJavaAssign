import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSourceService } from 'src/app/data-source.service';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Component({
  selector: 'app-user-form',
  templateUrl: './register-bean.component.html',
  styleUrls: ['./register-bean.component.css']
})
export class RegisterBeanComponent implements OnInit {
  url:string="";
  constructor(private fb:FormBuilder,private dataSource:DataSourceService) { }

  ngOnInit() {
  }
  profileForm = this.fb.group(
    {
      firstName : ['',Validators.required],
      lastName: ['',Validators.required],
      email : ['',Validators.required],
      age : ['',Validators.required]
    })
res:any;
    onSubmit() {
     this.dataSource.addRecord(this.profileForm.value).then(res=> {this.res=res.data});
    }
    getRecords(){
    }  
}

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
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
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
      // console.log(this.profileForm.value)
      // this.http.post(this.url, JSON.stringify(this.profileForm.value),httpOptions).subscribe()
     this.dataSource.addRecord(this.profileForm.value).then(res=> {this.res=res.data});
    //  console.log(this.res);
    //  this.dataSource.addRecord(this.profileForm.value).subscribe(res=> {console.log(res)});
    }
    getRecords(){
      // this.datasource.getRecord();
    }  

}

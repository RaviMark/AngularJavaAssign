import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataSourceService } from 'src/app/data-source.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
}) 
export class PreviewComponent implements OnInit {
  res: any;

  constructor(private fb: FormBuilder, private dataSource: DataSourceService) { }

  ngOnInit() {
  }
  City: any = ['First Name', 'Last Name', 'Email', 'Age']

  PreviewForm = this.fb.group({
    type: ['', Validators.required]

  })
  changeCity(e) {
    console.log(e.value)
    this.type.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get type() {
    return this.PreviewForm.get('type');
  }
  onSubmit() {
    console.log("akjsdnbkj")
    this.dataSource.searchRecord(this.PreviewForm.value).then(res=> {this.res=res.data});
    console.log("Response "+this.res)
  }
}
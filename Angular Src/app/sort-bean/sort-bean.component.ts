import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-sort-bean',
  templateUrl: './sort-bean.component.html',
  styleUrls: ['./sort-bean.component.css']
})
export class SortBeanComponent implements OnInit {

  res: any;
  ngOnInit(): void {
  }
  isSubmitted = false;

  // City Names
  Type: any = ['First Name', 'Last Name', 'Email', 'Age']

  constructor(public fb: FormBuilder,private dataSource: DataSourceService) { }

  registrationForm = this.fb.group({
    type: ['', Validators.required]
  })
  changeType(e) {
    console.log(e.value)
    this.type.setValue(e.target.value, {onlySelf: true})
  }

  get type() {
    return this.registrationForm.get('type');
  }

  onSubmit() {
    this.isSubmitted = true;
    this.dataSource.sortRecord(this.registrationForm.value).then(res=> {this.res=res.data});
  }

}

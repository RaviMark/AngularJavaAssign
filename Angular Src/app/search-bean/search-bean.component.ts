import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-search-bean',
  templateUrl: './search-bean.component.html',
  styleUrls: ['./search-bean.component.css']
})
export class SearchBeanComponent implements OnInit {
  res: any;
  ngOnInit(): void {
  }
  isSubmitted = false;

  // City Names
  Type: any = ['First Name', 'Last Name', 'Email', 'Age']

  constructor(public fb: FormBuilder,private dataSource: DataSourceService) { }

  profileForm = this.fb.group(
    {
      firstName : ['**'],
      lastName: ['**'],
      email : ['**'],
      age : ['-1']
    })
    onSubmit() {
     this.dataSource.addRecord(this.profileForm.value).then(res=> {this.res=res.data});
    }
  changeType(e) {
    console.log(e.value)
    this.type.setValue(e.target.value, {onlySelf: true})
  }

  get type() {
    return this.profileForm.get('type');
  }

}

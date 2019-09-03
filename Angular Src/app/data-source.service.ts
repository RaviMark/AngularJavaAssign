import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import axios from 'axios'


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",  
    responseType: 'text' 
  })
};
const options = {
  method: 'get',
  url: 'http://localhost:8080/Assignment/AddPersonServlet',
};
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  sortRecord(data) {
    axios.get(this.sortUrl).then(res=>console.log(res))
    return axios.post(this.sortUrl, JSON.stringify(data))
  }

  searchRecord(data){
    axios.get(this.searchUrl).then(res=>console.log(res))
    return axios.post(this.searchUrl, JSON.stringify(data))
  }

  constructor(private http: HttpClient) { }
  url: any = "http://localhost:8080/Assignment/AddPersonServlet";
  sortUrl :any="http://localhost:8080/Assignment/SortPersonServlet";
  searchUrl:any = "http://localhost:8080/Assignment/SearchPersonServlet";

  addRecord(data) {
    let res;
    axios.get(this.url).then(res=>console.log(res))
    return axios.post(this.url, JSON.stringify(data))
  }
}

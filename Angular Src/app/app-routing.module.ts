import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBeanComponent } from './search-bean/search-bean.component';
import { RegisterBeanComponent } from './register-bean/register-bean.component';
import { SortBeanComponent } from './sort-bean/sort-bean.component';


const routes: Routes = [
  { path: 'register-bean', component: RegisterBeanComponent },
  { path: 'search-bean', component: SearchBeanComponent },
  { path: 'sort-bean', component: SortBeanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

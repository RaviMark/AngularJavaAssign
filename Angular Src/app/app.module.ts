import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterBeanComponent } from './register-bean/register-bean.component';
import { SearchBeanComponent } from './search-bean/search-bean.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './Componets/preview/preview.component';
import { UserFormComponent } from './Componets/user-form/user-form.component';
import { SortBeanComponent } from './sort-bean/sort-bean.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterBeanComponent,
    SearchBeanComponent,
    UserFormComponent,
    PreviewComponent,
    SortBeanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

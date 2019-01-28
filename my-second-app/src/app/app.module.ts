import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AlertifyServiceService } from './services/alertify-service.service';
import { PostFilterPipe } from './post/post-filter.pipe';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent },
  { path: 'posts/:userid', component: PostComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AlertifyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
//import { FlexLayoutModule } from "@angular/flex-layout"; 

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data-service';
 
import { AppRoutingModule }     from './app-routing.module';
 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { ProjectsComponent }      from './projects/projects.component';
//import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { ProjectService }          from './services/project.service';
import { MessageService }       from './services/message.service';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MessagesComponent,
    //HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProjectService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

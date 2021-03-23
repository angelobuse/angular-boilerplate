import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PracTwoComponent } from './prac-two/prac-two.component';
import { PracThreeComponent } from './prac-three/prac-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    AboutComponent,
    ContactComponent,
    PracTwoComponent,
    PracThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

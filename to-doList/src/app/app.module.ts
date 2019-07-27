import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { FilterpipePipe } from './filterpipe.pipe';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { AddtaskComponent } from './addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FilterpipePipe,
    LoginComponent,
    SearchPipe,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { 
        path: 'home', 
        component: DemoComponent
      },
      {
        path:'addtask',
        component:AddtaskComponent
      }
    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

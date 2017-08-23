import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AssignmentUsernameComponent } from './assignment-username/assignment-username.component';
import { AssignmentIncrementingLogComponent } from './assignment-incrementing-log/assignment-incrementing-log.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertWarningComponent,
    AlertSuccessComponent,
    AssignmentUsernameComponent,
    AssignmentIncrementingLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

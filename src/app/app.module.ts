import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginFormModule } from "./shared/components/login-form/login-form.module";
import { RegistrationFormModule } from "./shared/components/registration-form/registration-form.module";
import { CourseFormModule } from "./shared/components/course-form/course-form.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginFormModule,
    RegistrationFormModule,
    CourseFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

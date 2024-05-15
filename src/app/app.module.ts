import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { Homework2Component } from './components/homework2/homework2.component';
import { Homework3Component } from './components/homework3/homework3.component';
import { CapitalizeDirective } from './directives/capitalize-directive.directive';
import { Homework4Component } from './components/homework4/homework4.component';
import { FormsModule } from '@angular/forms';
import { MyFirstModule } from './my-first-module/my-first.module';
import { ProvidersModule } from './providers/providers.module';
import { PipesModule } from './pipes/pipes.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialImplModule } from './material-impl/material-impl.module';
import { RoutingModule } from './routing/routing.module';
import { TestEagerLoadingComponent } from './components/test-eager-loading/test-eager-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Homework2Component,
    Homework3Component,
    CapitalizeDirective,
    Homework4Component,
    TestEagerLoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModule,
    ProvidersModule,
    PipesModule,
    MaterialImplModule,
    RoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

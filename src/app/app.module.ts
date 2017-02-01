import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { TaskCssComponent } from './task-css/task-css.component';
import { GameComponent } from './game/game.component';
import { PascalComponent } from './pascal/pascal.component';

const routes:Routes = [
  {path: 'home', component: HomeTableComponent},
  {path: 'search', component: SearchComponent},
  {path: 'css', component: TaskCssComponent},
  {path: 'pascal', component: PascalComponent},
  {path: 'game', component: GameComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeTableComponent,
    TaskCssComponent,
    GameComponent,
    PascalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

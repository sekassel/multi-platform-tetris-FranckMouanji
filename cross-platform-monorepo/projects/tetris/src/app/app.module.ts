import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameEngineLibModule} from "@game-engine-lib";



import { GameEngineLibService } from "c:/Users/Franck Mouanji/Documents/Agile_software/multi-platform-tetris-FranckMouanji/cross-platform-monorepo/projects/game-engine-lib/src/lib/game-engine-lib.service"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameEngineLibModule
  ],
  providers: [GameEngineLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }

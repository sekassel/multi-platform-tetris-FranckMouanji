import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
// import { Piece } from './components/piece/piece.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class GameEngineLibModule { }
export * from "./components/board/board.component"

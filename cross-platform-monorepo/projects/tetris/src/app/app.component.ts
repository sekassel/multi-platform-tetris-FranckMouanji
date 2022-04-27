import { Component } from '@angular/core';
import { GameEngineLibService } from "c:/Users/Franck Mouanji/Documents/Agile_software/multi-platform-tetris-FranckMouanji/cross-platform-monorepo/projects/game-engine-lib/src/lib/game-engine-lib.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';

  constructor(private engineService: GameEngineLibService) {
    // console.info(engineService.testing);
  }
}

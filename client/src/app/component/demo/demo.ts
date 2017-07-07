import {
  Component,
  OnInit
} from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../model/player';

@Component({
  templateUrl: './html/demo.html',
  styleUrls: ['./html/demo.scss']
})

export class PlayerDemoComponent implements OnInit {

  players: Player[];

  teams: number[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getAllTeams().then( teams => this.teams = teams); // 获取队伍
  }

}

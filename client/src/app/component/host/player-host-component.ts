import {
  Component,
  OnInit
} from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../model/player';

@Component({
  templateUrl: './html/player-host-component.html',
})

export class PlayerHostComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getALLPlayersData().then(players => this.players = players); // 让主页只显示3个
  }

}

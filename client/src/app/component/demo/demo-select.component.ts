import {
  Component,
  OnInit
} from '@angular/core';
import {
  Player
} from '../../model/player';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { PlayerService } from '../../service/player.service';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './html/demo-selected.component.html',
  // styleUrls: ['./html/gundam-detail.component.scss']
})

export class PlayerSelectedComponent implements OnInit {
  players: Player[];
  constructor(
    private route: ActivatedRoute,
    private gundamService: PlayerService,
  ) {}

  ngOnInit(): void {
     this.getNetData();
    // this.route.params.switchMap((params: Params) => this.gundamService.getPlayerByTeams(+params['id']).then(players => this.players = players));
    // this.route.params.switchMap((params: Params) => this.gundamService.getPlayerByTeams(+params['id']).then(players => this.players = players));
  }

  getNetData(): void {
        this.route.params.switchMap((params: Params) => this.gundamService.getPlayerByTeams(+params['id']))
                     .subscribe( players => this.players = players);
  }

  __test(): void {
     const leth = this.players.length;
     const tempNo = Math.ceil(Math.random() * leth) - 1;
     if (this.players[tempNo] === undefined) {
       console.log('没人咯');
       return ;
     }
     console.log(this.players[tempNo].name);
     this.gundamService.pickPlayerByTeam(this.players[tempNo]._id, 1)
     .then( (resp) => {
       console.log(resp);
       this.getNetData();
       });
  }
}

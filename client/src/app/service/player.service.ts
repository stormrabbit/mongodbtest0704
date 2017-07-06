import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {
  private api = 'http://localhost:4000'; // 服务器地址
  private getALLPlayers = '/players'; // 获取全部
  /*
  private getPlayersByTeam = '/players/findByTeam';
  private getPlayerById = '/players/find';
  private addPlayer = '/players/add';
  private removePlayer = '/players/delete';
  private updatePlayer = '/players/update/{0}';
  */
  constructor(private http: Http) {};

   getALLPlayersData(): Promise<Player[]> {
     return this.http.get(this.api + this.getALLPlayers)
            .toPromise()
            .then(response => response.json() as Player[])
            .catch(this.handleError);
   }
   // 获得全部数据
   /*
   getGundams(): Promise<Gundam[]> {
     return this.http.get(this.api + this.gundamList)
              .toPromise()
              .then(response => response.json() as Gundam[])
              .catch(this.handleError);
   }

   // 根据Id查询高达
   getGundamById(id: number): Promise<Gundam> {
     console.log(this.api + this.getGundam + '?id=' + id);
    return this.http.get(this.api + this.getGundam + '?id=' + id)
                    .toPromise()
                    .then( response => response.json() as Gundam)
                    .catch(this.handleError);
   }
   */

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
   }
}
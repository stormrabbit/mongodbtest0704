import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
import {
  AppComponent
} from './component/appcomponent/app.component';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { PlayerHostComponent } from './component/host/player-host-component';
import { GundamHostComponent } from './component/host/gundam-host.component';
import { GundamHostItemComponent } from './component/host-item/gundam-host-item.component';
import { PlayerDemoComponent } from './component/demo/demo';
import { AppRoutingModule } from './app-routing.module';
import { PlayerSelectedComponent } from './component/demo/demo-select.component';
import { HttpModule } from '@angular/http';
import { PlayerService } from './service/player.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GundamDetailComponent,
    GundamHostComponent,
    GundamHostItemComponent,
    PlayerDemoComponent,
    PlayerHostComponent,
    PlayerSelectedComponent
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

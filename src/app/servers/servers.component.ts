import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {

  serverName = '';
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus: string = 'No server that has been created so far'

  allowNewServer = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  
  getServerStatus() {
    return this.serverStatus;
  }

  createServerStatus() {
    this.serverCreationStatus = 'The server has been created, and the name is ' + this.serverName;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

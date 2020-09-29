import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebConf';

  goToGoogle(){
    window.location.href='https://meet.google.com/';
  }

  goToGithub(){
    window.location.href='https://github.com/';
  }
  goToZoom(){
    window.location.href='https://zoom.us/meetings';
  }

  goToWebex(){
    window.location.href='https://www.webex.com/';
  }

  goToWMTeem(){
    window.location.href='https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/group-chat-software';
  }
  
  goToPepix(){
    window.location.href='https://www.pexip.com/?utm_source=GDM&utm_medium=cpc&utm_campaign=Capterra_Web_Conferencing';
  }

  goToBigMarker (){
    window.location.href='https://www.bigmarker.com/signup?partner=capterra';
  }
  goToWorkPlace (){
    window.location.href='https://en-gb.workplace.com/';
  }

  goToAdobeConnect(){
    window.location.href='https://en-gb.workplace.com/';
  }

  goToZoho(){
    window.location.href='https://www.zoho.com/meeting/';
  }
}

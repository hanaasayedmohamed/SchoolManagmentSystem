import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
      styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css']

})
export class AppComponent {
  title = 'Student managment';

  loadedFeature = 'login';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}

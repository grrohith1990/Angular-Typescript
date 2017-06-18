import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`p {
  color:blue;
}`]
})
export class AppComponent {
  loadedFeature = 'recipie';

  onNavigate(feature : string) {
    this.loadedFeature = feature;
  }
}

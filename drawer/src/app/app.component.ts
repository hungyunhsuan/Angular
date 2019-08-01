import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route';

  selectedFeatures: any = [];

  onOpenTabs(event) {
    //console.log(event);
    const target = event.target.text ;
    const index = this.selectedFeatures.indexOf(target);
    this.selectedFeatures.push(target);
    
    if (index !== -1) {
      this.selectedFeatures.pop();
    }
    //console.log(this.selectedFeatures);
  }

  onCloseTabs(tab) {
    const index = this.selectedFeatures.indexOf(tab);
    //console.log(tab);
    if (index !== -1) {
        this.selectedFeatures.splice(index, 1);
    }
  }
}


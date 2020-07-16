import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
// use this to set correct theme class on app holder
  // eg: <div [class]="themeClass">...</div>
  themeClass: string;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    this.themeClass = 'my-light-blue-theme.scss';

    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    console.log(overlayContainerClasses);
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    console.log(themeClassesToRemove);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    console.log(this.themeClass);
    overlayContainerClasses.add(this.themeClass);
  }

}

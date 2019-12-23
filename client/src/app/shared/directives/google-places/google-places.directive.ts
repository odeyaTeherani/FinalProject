/// <reference types="@types/googlemaps" />
import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appGooglePlace]'
})
export class GooglePlacesDirective implements OnInit {
  @Output() locationSelected: EventEmitter<any> = new EventEmitter();
  private readonly inputHtmlElem: HTMLInputElement;

  constructor(elRef: ElementRef) {
    // elRef will get a reference to the element where
    // the directive is placed
    this.inputHtmlElem = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete: any = new google.maps.places.Autocomplete(this.inputHtmlElem);
    // Set the data fields to return when the user selects a place.

    autocomplete.setFields(
      ['formatted_address',
        'id',
        'name',
        'place_id',
        'user_ratings_total']);


    // Event listener to monitor place changes in the input
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // Emit the new address object for the updated place
      this.locationSelected.emit(autocomplete.getPlace());
    });
  }

}

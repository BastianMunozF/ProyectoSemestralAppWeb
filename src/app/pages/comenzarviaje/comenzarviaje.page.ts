import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comenzarviaje',
  templateUrl: './comenzarviaje.page.html',
  styleUrls: ['./comenzarviaje.page.scss'],
})
export class ComenzarviajePage implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor() { }

  async createMap() {

    const coordinates = Geolocation.getCurrentPosition();

    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: (await coordinates).coords.latitude,
          lng: (await coordinates).coords.longitude,
        },
        zoom: 8,
      },
    });
  }

  ngOnInit() { 
  }

}

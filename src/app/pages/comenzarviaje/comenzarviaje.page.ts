import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation'
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

    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  ngOnInit() {
      
  }
}
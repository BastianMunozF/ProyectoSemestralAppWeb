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

  async createMap() {
    let coordenadas = await Geolocation.getCurrentPosition();

    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude,
        },
        zoom: 8,
      },
    });
  }

  constructor() { }

  ngOnInit() {
      
  }
}
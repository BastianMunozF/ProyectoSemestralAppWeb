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
  mapRef!: ElementRef;
  newMap!: GoogleMap;

  constructor() { }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap() {

    const coordinates = await Geolocation.getCurrentPosition();

    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 8,
      },
    });
    this.addMarker();
  }

  async addMarker(){
    const coordinates = await Geolocation.getCurrentPosition();

    const markers: Marker[] = [
      {
        coordinate: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        title: 'Ubicación Actual'
      }
    ];

    await this.newMap.addMarkers(markers);
  }

  ngOnInit() {
      
  }
}
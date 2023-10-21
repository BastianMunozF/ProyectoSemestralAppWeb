import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-comenzarviaje',
  templateUrl: './comenzarviaje.page.html',
  styleUrls: ['./comenzarviaje.page.scss'],
})
export class ComenzarviajePage implements OnInit {

  @ViewChild('map') mapRef!: ElementRef;
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
      apiKey: 'AIzaSyC0fDW4dwRCQCVVNuKE18IBn-gJYpg3T84',
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

  ngOnInit() {}

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@capacitor/google-maps';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {

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

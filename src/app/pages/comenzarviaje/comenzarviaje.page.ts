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
  }

  ngOnInit() { 
  }

}

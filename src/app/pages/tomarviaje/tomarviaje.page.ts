import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard, IonCardContent } from '@ionic/angular';


@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, width: '80px' },
        { offset: 0.72, width: 'var(--width)' },
        { offset: 1, width: '240px' },
      ]);
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }
}



import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapServices } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
   faceSnap!: FaceSnap;

  isSnapped!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapServices: FaceSnapServices,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(): void {
    if (this.isSnapped == true) {
      this.unSnap();
    }
    else {
      this.snap();
    }
  }

  unSnap(): void {
    this.faceSnapServices.snapFaceSnapByID(this.faceSnap.id, 'unsnap');
    this.isSnapped = false;
    this.snapButtonText = "Oh Snap";
  }

  snap(): void {
    this.faceSnapServices.snapFaceSnapByID(this.faceSnap.id, 'snap');
    this.isSnapped = true;
    this.snapButtonText = "Oops, un Snap";
  }

  private getFaceSnap() {
    const faceSnapID = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapServices.getFaceSnapByID(faceSnapID);
  }

  private prepareInterface() {
    this.isSnapped = false;
    this.snapButtonText = "Oh Snap";
  }
}

import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapServices {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            "Super cours d'Angular",
            "Cours sur Angular pour trouver un job !",
            new Date(),
            8,
            "https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg"
        ),
        new FaceSnap(
            "Super cours de Javascript",
            "Cours sur Javascript pour être un maître jedai !",
            new Date(),
            125,
            "https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg"
        ).withLocation("Sud Ouest de la France"),
        new FaceSnap(
            "Super cours d'Anglais",
            "Cours d'Anglais pour travailler partout dans le monde !",
            new Date(),
            250,
            "https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg"
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapByID(faceSnapID: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapID);
        if (!foundFaceSnap) {
            throw new Error('Face Snap not found');
        }
        return foundFaceSnap;
    }

    snapFaceSnapByID(faceSnapID: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapByID(faceSnapID);
        faceSnap.snap(snapType);
    }
}
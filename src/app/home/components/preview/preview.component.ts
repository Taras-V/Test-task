import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {

  public images: string[];
  public selectedImage: string;

  constructor() {

    this.images = [
      '/assets/image/card.jpg',
      '/assets/image/carousel2.webp',
      '/assets/image/carousel3.webp',
      '/assets/image/carousel4.webp',
      '/assets/image/carousel5.jpg',
      '/assets/image/carousel6.webp',
    ];

    this.selectedImage = this.images[0];
  }

  public onSelectImage(image: string): void {
    this.selectedImage = image;
  }
}

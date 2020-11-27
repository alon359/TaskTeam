import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import Cropper from 'cropperjs';
import { Subscription } from 'rxjs';
import { CloudinaryService } from 'src/app/services/cloudinary.service.js';

@Component({
  selector: 'app-img-profile-input',
  templateUrl: './img-profile-input.component.html',
  styleUrls: ['./img-profile-input.component.css']
})
export class ImgProfileInputComponent {
  @Output() passImgUrl: EventEmitter<string> = new EventEmitter();

  urlImg: string = null;
  selectedFile = null;
  preImg = null;

  // For input file label
  imgName = null;

  constructor(private cloudinary: CloudinaryService) { }


  onFileSelected(event) {
    const { files } = event.target;
    // tslint:disable-next-line: curly
    if (!files.length) return;

    // For render component "cropper-img"
    this.preImg = null;

    const file = files[0];
    this.selectedFile = file;

    // For Update Label input file
    this.imgName = file.name;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { this.preImg = reader.result; };
  }

  OnPassImgUrl(urlImg: string) {
    this.urlImg = urlImg;
    this.passImgUrl.emit(urlImg);
  }
}

import { Component, OnInit, ViewChild, Input, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import Cropper from 'cropperjs';

import { CloudinaryService } from '../../services/cloudinary.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.css']
})
export class CropperImgComponent implements OnInit, AfterViewInit {

  @ViewChild('image', { static: false })
  imageElement: ElementRef;
  // tslint:disable-next-line: no-input-rename
  @Input('src') imageSource: string;

  @Output() passImgUrl: EventEmitter<string> = new EventEmitter();

  cropper: Cropper;

  progressUpload = 0;
  isUpload = false;
  imageDestination = null;
  urlImg: string = null;

  progressLoadSub: Subscription;


  constructor(private cloudinary: CloudinaryService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createCropper();
  }

  onUpload() {
    this.isUpload = true;
    this.progressLoadSub = this.cloudinary.uploadImg(this.imageDestination).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressUpload = Math.round(event.loaded / event.total * 100);
        } else if (event.type === HttpEventType.Response) {
          this.urlImg = event.body.url;
          this.passImgUrl.emit(this.urlImg);
          this.isUpload = false;
          this.progressLoadSub.unsubscribe();
        }
      }, error => {
        console.error(error);
        this.isUpload = false;
      });
  }

  createCropper() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas({
          width: 600,
          height: 600,
          minWidth: 300,
          minHeight: 300,
          maxWidth: 2000,
          maxHeight: 2000,
          imageSmoothingEnabled: true,
          imageSmoothingQuality: 'low',
        });
        this.imageDestination = canvas.toDataURL('image/jpeg');
      }
    });
  }


}

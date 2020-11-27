import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { cloudinaryConfig } from '../../configs/cloudinary.config.js';


@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(private http: HttpClient) { }

  uploadImg(file) {
    const UPLOAD_URL = cloudinaryConfig.UPLOAD_URL;
    const UPLOAD_PRESET = cloudinaryConfig.UPLOAD_PRESET;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', 'TaskTeam');

    return this.http.post<any>(UPLOAD_URL, formData, { reportProgress: true, observe: 'events' });

    // }).subscribe(
    //   event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       const totalUpload = Math.round(event.loaded / event.total * 100);
    //       this.progress$.next(totalUpload);
    //     }
    //     else if (event.type === HttpEventType.Response) {
    //       console.log({ event });
    //       this.response$.next(event);
    //     }
    //   }, error => {
    //     console.error(error);
    //   });
  }
}

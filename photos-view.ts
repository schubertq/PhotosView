import {Component, Input} from '@angular/core';

import {NavController} from 'ionic-angular';
import {ViewLargePictureCtrl} from "./view-large-picture";

@Component({
  templateUrl: 'photos-view.html',
  selector: 'photos-view'
})
export class PhotosViewCtrl {
  @Input() images: Array<any>;
  //B
  constructor(private navCtrl:NavController) {

  }

  goToViewLargePictureCtrl(event, statusImages) {
    // 如果photos-view是放在ion-card等组件内部
    // 如果ion-card和photos-view同时监听了click事件
    // 会出现冒泡
    // event.stopPropagation();

    var images: Array<string> = [];
    for (var i = 0; i < statusImages.length; ++i) {
      var image = statusImages[i];
      images.push(image.big);
    }
    this.navCtrl.push(ViewLargePictureCtrl, {
      images: images
    });
  }
}

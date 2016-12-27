import {Component, ViewChild} from '@angular/core';

import {NavParams, Slides} from 'ionic-angular';
import {SocialSharing} from "ionic-native/dist/es5/index";

@Component({
  templateUrl: 'view-large-picture.html'
})

export class ViewLargePictureCtrl {
  @ViewChild('slides') slides: Slides;
  images: Array<string> = [];
  imageSlideOptions = {
    pager: true
  };

  constructor(public navParams: NavParams) {
    this.images = navParams.get('images');
  }

  share() {
    // 图片分享
    SocialSharing.share(
      null,
      null,
      this.images[this.slides.getActiveIndex()],
      null);
  }
}

# PhotosView
Ionic2 九宫格图片展示和查看大图component
===
* 功能如下:
    * 1.九宫格图片展示
    * 2.点击查看大图
    * 3.分享至微信、qq

* 依赖插件:
    * $ ionic plugin add cordova-plugin-x-socialsharing

<img src="https://github.com/schubertq/PhotosView/raw/master/screenshots/p1.png" width = "30%" />
<img src="https://github.com/schubertq/PhotosView/raw/master/screenshots/p2.png" width = "30%" />
<img src="https://github.com/schubertq/PhotosView/raw/master/screenshots/p3.png" width = "30%" />
<img src="https://github.com/schubertq/PhotosView/raw/master/screenshots/p4.png" width = "30%" />
<img src="https://github.com/schubertq/PhotosView/raw/master/screenshots/p5.png" width = "30%" />

* 使用方法:
    * &lt;!--这里直接给一个数组images作为输入,然后将该模板嵌入到你的html文件中--&gt;
    * &lt;photos-view [images]="images"&gt;&lt;/photos-view&gt;
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { imageUrl } from '../interfaces/imageUrl';
@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  photoArray: imageUrl[] = [];
  placeholder = [];
  data = [];
  image;
  results = {};
  index: number;
  img;
  imgArray: string[] = [];

  //image slider
  slider_img;
  i: number = 0;

  constructor(private router: Router, private projectService: ProjectService) { }

  prev() {
    if (this.i <= 0) this.i = this.photoArray.length;
    this.i--;
    return this.setImg();
  }

  next() {
    console.log('slider img' + this.slider_img);
    if (this.i >= this.photoArray.length - 1) this.i = -1;
    this.i++;
    return this.setImg;
  }


  setImg() {
    return this.slider_img.setAttribute('src', `${this.photoArray[this.i]}`);
  }

  setIndex() {

  }


  ngOnInit() {

    this.slider_img = document.querySelector('.slider-img');

    this.projectService.getFilm()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.photoArray.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';
        console.log(this.image);
        console.log(this.photoArray);

        this.photoArray.forEach(p => {
          console.log('photoarray' + this.photoArray)
          // var img = 'https://live.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '.jpg';
          // this.imgArray.push(img);
        });
      }
      );



  }

}


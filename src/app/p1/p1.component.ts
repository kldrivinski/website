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
  slidevisible: boolean = false;
  gridvisible: boolean = true;

  constructor(private router: Router, private projectService: ProjectService) { }

  prev() {
    if (this.i <= 1) this.i = this.imgArray.length;
    this.i--;
    return this.setImg();
  }

  next() {
    if (this.i >= this.imgArray.length - 1) this.i = -1;
    this.i++;
    return this.setImg();
  }


  setImg() {
    return this.slider_img.setAttribute('src', `${this.imgArray[this.i]}`);
  }

  toggleSlider() {
    this.slidevisible = !this.slidevisible;
    this.gridvisible = !this.gridvisible;

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
        this.image = 'https://live.staticflickr.com/' + res.photoset.photo[0].server + '/' + res.photoset.photo[0].id + '_' + res.photoset.photo[0].secret + '.jpg';

        this.photoArray.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.imgArray.push(img);
        });

      }
      );



  }

}


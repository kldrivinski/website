import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { imageUrl } from '../interfaces/imageUrl';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() item: string;
  @Output() newItemEvent = new EventEmitter<string>();

  previews: imageUrl[] = [];
  beyond: imageUrl[] = [];
  beyondImg: string[] = [];

  jt: imageUrl[] = [];
  jtImg: string[] = [];

  mic: imageUrl[] = [];
  micImg: string[] = [];

  people: imageUrl[] = [];
  peopleImg: string[] = [];

  brainworms: imageUrl[] = [];
  brainwormsImg: string[] = [];

  mackinac: imageUrl[] = [];
  mackinacImg: string[] = [];

  pool: imageUrl[] = [];
  poolImg: string[] = [];

  eve: imageUrl[] = [];
  eveImg: string[] = [];

  eloise: imageUrl[] = [];
  eloiseImg: string[] = [];

  road: imageUrl[] = [];
  roadImg: string[] = [];

  placeholder = [];
  data = [];
  image;
  results = {};
  index: number;

  imgArray: string[] = [];

  slider_img;
  i: number = 0;
  slidevisible: boolean = false;
  gridvisible: boolean = true;

  constructor(private router: Router, private projectService: ProjectService) { }



  setIndex(index) {
    this.index = index;
  }

  toggleSlider() {
    this.slidevisible = !this.slidevisible;
    this.gridvisible = !this.gridvisible;
    console.log(this.slidevisible);
    console.log(this.gridvisible);
  }
  nav(index): void {
    console.log(index);
    if (index == 0) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.beyondImg;
    }
    if (index == 1) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.jtImg;

    }
    if (index == 2) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.micImg;

    }
    if (index == 3) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.peopleImg;

    }
    if (index == 4) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.brainwormsImg;

    }
    if (index == 5) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.mackinacImg;

    }
    if (index == 6) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.poolImg;

    }
    if (index == 7) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.eveImg;

    }
    if (index == 8) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.eloiseImg;

    }
    if (index == 9) {
      this.slidevisible = !this.slidevisible;
      this.gridvisible = !this.gridvisible;
      this.imgArray = this.roadImg;

    }
  }

  prev() {
    console.log(this.imgArray);
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
  ngOnInit() {
    this.slider_img = document.querySelector('.slider-img');

    this.projectService.getPhotos()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.previews.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        this.image = 'https://live.staticflickr.com/' + res.photoset.photo[0].server + '/' + res.photoset.photo[0].id + '_' + res.photoset.photo[0].secret + '.jpg';
        console.log(this.image);
        console.log(this.previews);

      }
      );


    this.projectService.getBeyond()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.beyond.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.beyond.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.beyondImg.push(img);
        });
      }
      );

    this.projectService.getJt()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.jt.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.jt.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.jtImg.push(img);
        });
      }
      );

    this.projectService.getMic()
      .subscribe((res: any) => {
        console.log('mic res ' + res.photoset)
        // res.photoset.photo.forEach(ph => {
        //   this.mic.push({
        //     id: ph.id,
        //     server: ph.server,
        //     secret: ph.secret
        //   });
        // });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.mic.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.micImg.push(img);
        });
      }
      );

    this.projectService.getPeople()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.people.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.people.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.peopleImg.push(img);
        });
      }
      );

    this.projectService.getBrainworms()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.brainworms.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.brainworms.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.brainwormsImg.push(img);
        });
      }
      );

    this.projectService.getMackinac()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.mackinac.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.mackinac.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.mackinacImg.push(img);
        });
      }
      );

    this.projectService.getPool()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.pool.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.pool.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.poolImg.push(img);
        });
      }
      );

    this.projectService.getEve()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.eve.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });

        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.eve.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.eveImg.push(img);
        });
      }
      );

    this.projectService.getEloise()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.eloise.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.eloise.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.eloiseImg.push(img);
        });
      }
      );

    this.projectService.getRoad()
      .subscribe((res: any) => {
        res.photoset.photo.forEach(ph => {
          this.road.push({
            id: ph.id,
            server: ph.server,
            secret: ph.secret
          });
        });
        //this.image = 'https://live.staticflickr.com/' + res.photoset.photo[1].server + '/' + res.photoset.photo[1].id + '_' + res.photoset.photo[1].secret + '.jpg';

        this.road.forEach((ph, index) => {
          var img = 'https://live.staticflickr.com/' + ph.server + '/' + ph.id + '_' + ph.secret + '.jpg';
          this.roadImg.push(img);
        });
      }
      );
  }


}

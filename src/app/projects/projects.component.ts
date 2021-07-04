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

  photoArray: imageUrl[] = [];
  placeholder = [];
  data = [];
  image;
  results = {};
  index: number;

  constructor(private router: Router, private projectService: ProjectService) { }



  // photoChange(e): void {
  //   this.projectService.getDesert()
  //     .subscribe((res: any) => {
  //       console.log(res);


  //       setTimeout(() => {
  //         this.photoArray.splice(0, this.photoArray.length)
  //         res.photoset.photo.forEach(ph => {
  //           this.photoArray.push({
  //             id: ph.id,
  //             server: ph.server,
  //             secret: ph.secret
  //           });
  //         });
  //       }, 1000);
  //     });




  // }

  setIndex(index) {
    this.index = index;
  }

  nav(index): void {
    console.log(index);
    if (index == 0) {
      console.log("clicked")
      this.router.navigate(["p1"]);
    }
    if (index == 1) {
      console.log("clicked");
      this.router.navigate(["p2"]);
    }
    else {
      console.log("not a page")
    }
  }
  ngOnInit() {

    this.projectService.getPhotos()
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

      }
      );
  }

}

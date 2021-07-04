import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { imageUrl } from '../interfaces/imageUrl';
@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {

  photoArray: imageUrl[] = [];
  placeholder = [];
  data = [];
  image;
  results = {};
  index: number;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getDesert()
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

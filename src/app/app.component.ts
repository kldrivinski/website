import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private router: Router, private projectService: ProjectService) { }


  nav(): void {
    this.router.navigate([""]);
  }

  ngOnInit() {




  }

}
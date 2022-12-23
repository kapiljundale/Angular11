import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-assignment',
  templateUrl: './dir-assignment.component.html',
  styleUrls: ['./dir-assignment.component.css']
})
export class DirAssignmentComponent implements OnInit {

  showSecret = false;
log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }

}

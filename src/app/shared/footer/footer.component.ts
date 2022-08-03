import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public links: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  swiching() {
    this.links = !this.links;
  }

}

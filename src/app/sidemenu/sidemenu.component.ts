import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }
  opened = true;
  ngOnInit(): void {
  }
  clickHandler(): void {
    this.sidenav.close();
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { MatdialogauthComponent } from '../matdialogauth/matdialogauth.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(MatdialogauthComponent, dialogConfig);

}
}

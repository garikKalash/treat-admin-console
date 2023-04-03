import {Component, OnInit} from '@angular/core';
import {ShelterService} from "./services/shelter.service";
import {Shelter} from "./models/shelter.model";
import {NewShelterDialogComponent} from "./components/new-shelter-dialog/new-shelter-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'treatva-admin';
  shelters : Shelter[] = [];
  selectedShelter: Shelter | undefined;

  newName: string | undefined;
  contact: string | undefined;


  constructor(private shelterService: ShelterService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.shelterService.shelters().subscribe(res=>{
      this.shelters = res;
      this.selectedShelter = this.shelters[0];
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewShelterDialogComponent, {
      data: {name: this.newName, contact: this.contact},
      height: "40%" ,
      width: "50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contact = result;
    });
  }
}

import {Component, Input} from '@angular/core';
import {Shelter} from "../../models/shelter.model";
import {ShelterService} from "../../services/shelter.service";

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent {
  @Input()
  shelter!: Shelter;

  constructor(public shelterService: ShelterService) {
  }

  changeAvailability(){
    this.shelterService.changeAvailability(this.shelter.orgId).subscribe(res => {
     this.shelter.availableInSystem = !this.shelter.availableInSystem;
    });
  }
}

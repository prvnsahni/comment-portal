import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  candidates: Array<any> = ["Manish", "Praveen", "Rambha", "Nand", "XYZ", "ABC"];

  constructor() {
  }

  ngOnInit(): void {
  }

}

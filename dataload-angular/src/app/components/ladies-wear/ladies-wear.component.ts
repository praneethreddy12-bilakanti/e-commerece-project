import { Component, OnInit } from '@angular/core';
import { LadiesWear } from 'src/app/models/ladies-wear';
import { DataLoadService } from 'src/app/services/dataload.service';
@Component({
  selector: 'app-ladies-wear',
  templateUrl: './ladies-wear.component.html',
  styleUrls: ['./ladies-wear.component.css']
})
export class LadiesWearComponent implements OnInit {
  ngOnInit() {

  }
  selectedFile: any;

  message: any;

  dbvalues: LadiesWear = new LadiesWear(0,this.selectedFile, 0, 'ladies dress', 0);

  constructor(private _service: DataLoadService) { }
  selectFile(event) {
    this.selectedFile = event.target.files[0];

  }

  uploaadToLadiesDB() {
    this._service.sendDetailsofLadiesToDB(this.dbvalues).subscribe(response => {
      let result = response;
      if (result > 0) {
        alert("data inserted")
      }

      this._service.uploadLadiesFile(this.selectedFile).subscribe(res => {
        let response = res;

        if (response > 0) {
          alert("file upload successfully")

        }

      });
    });

  }
}
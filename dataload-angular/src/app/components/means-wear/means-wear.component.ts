import { Component, OnInit } from '@angular/core';
import {MeansWear} from 'src/app/models/means-wear';
import { DataLoadService } from 'src/app/services/dataload.service';

@Component({
  selector: 'app-means-wear',
  templateUrl: './means-wear.component.html',
  styleUrls: ['./means-wear.component.css']
})
export class MeansWearComponent implements OnInit {
  selectedFile: any;

  message: any;
  
  ngOnInit(): void {
  }
  
  meansData: MeansWear = new MeansWear(0,this.selectedFile, 0, 'MEANS DRESSES', 0,'select');

  constructor(private _service: DataLoadService) { }
  selectFile(event) {
    this.selectedFile = event.target.files[0];

  }

  uploaadToMeansDB() {
    
    this._service.sendDetailsofMeansToDB(this.meansData).subscribe(response => {
      let result = response;
      console.log("data"+this.meansData.meansDressPorductPrice);
      console.log("data"+this.meansData.dressType);

      if (result > 0) {
        alert("data inserted")
      }

      this._service.uploadMeansFile(this.selectedFile).subscribe(res => {
        let response = res;

        if (response > 0) {
          alert("file upload successfully")

        }

      });
    });

  }
}


import { Component, OnInit } from '@angular/core';
import {Mobiles} from 'src/app/models/mobiles';
import { DataLoadService } from 'src/app/services/dataload.service';
@Component({
  selector: 'app-mobiles-data',
  templateUrl: './mobiles-data.component.html',
  styleUrls: ['./mobiles-data.component.css']
})
export class MobilesDataComponent implements OnInit {
  selectedFile: any;

  message: any;
  constructor(private _service: DataLoadService) { }

  ngOnInit(): void {
  }
  selectFile(event) {
    this.selectedFile = event.target.files[0];

  }
  dbvalues: Mobiles = new Mobiles(0,this.selectFile,0,'MOBILES',0,0);

  uploaadToMobilesDB() {
    console.log(this.dbvalues.mobilesPorductPrice)
    this._service.sendDetailsofMobilesToDB(this.dbvalues).subscribe(response=>
      {
let res=response;
if(res!= null)
{
  alert("data inserted")
}
this._service.uploadMobilesFile(this.selectedFile).subscribe(response=>{
  let respo=response;
  if(respo>0)
  {
    alert("file uploaded successfully")
  }
})
      });
}
}

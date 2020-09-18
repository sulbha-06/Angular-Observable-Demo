import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';  
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-excel-demo',
  templateUrl: './excel-demo.component.html',
  styleUrls: ['./excel-demo.component.css']
})
export class ExcelDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'read-excel-in-angular8';  
  storeData: any;  
  csvData: any;  
  jsonData: any;  
  textData: any;  
  htmlData: any;  
  fileUploaded: File;  
  worksheet: any;  
  obj:any;
  uploadedFile(event) {  
    this.fileUploaded = event.target.files[0];  
    this.readExcel();  
  }  
   readExcel() {  
    let readFile = new FileReader();  
    readFile.onload = (e) => {  
      this.storeData = readFile.result;  
      //console.log("data read from exl ------", this.storeData);
      
      var data = new Uint8Array(this.storeData);  
     // console.log("data is -->", data);
      
      var arr = new Array();  
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);  
      var bstr = arr.join("");  
      var workbook = XLSX.read(bstr, { type: "binary" });  
      var first_sheet_name = workbook.SheetNames[0];  
      this.worksheet = workbook.Sheets[first_sheet_name];  
    }  
    readFile.readAsArrayBuffer(this.fileUploaded);  
  }
  readAsCSV() {  
    this.csvData = XLSX.utils.sheet_to_csv(this.worksheet);  
    const data: Blob = new Blob([this.csvData], { type: 'text/csv;charset=utf-8;' });  
    FileSaver.saveAs(data, "CSVFile" + new Date().getTime() + '.csv');  
  }  
  readAsJson() {  
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });  
    this.jsonData = JSON.stringify(this.jsonData);  
    console.log("this.jsonData is  ---",this.jsonData);
    this.obj = JSON.parse(this.jsonData);
    this.obj.forEach(element => {
      console.log(element.Price);
    });
    console.log("this.jsonData after parsing  ---",this.obj[0].Price);
   // const data: Blob = new Blob([this.jsonData], { type: "application/json" });  
    // FileSaver.saveAs(data, "JsonFile" + new Date().getTime() + '.json');  
  }  
  readAsHTML() {  
    this.htmlData = XLSX.utils.sheet_to_html(this.worksheet);  
    const data: Blob = new Blob([this.htmlData], { type: "text/html;charset=utf-8;" });  
    FileSaver.saveAs(data, "HtmlFile" + new Date().getTime() + '.html');  
  }  
  readAsText() {  
    this.textData = XLSX.utils.sheet_to_txt(this.worksheet);  
    const data: Blob = new Blob([this.textData], { type: 'text/plain;charset=utf-8;' });  
    FileSaver.saveAs(data, "TextFile" + new Date().getTime() + '.txt');  
  }  

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  fileUrl;
  base64String: any = 'hello world';

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([this.base64String], {
      type: 'data:application/pdf;base64',
    });
    // const blob = `data:application/pdf;base64,${this.base64String}`;

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }
  downloadPdf(base64String: any, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement('a');
    link.href = source;
    link.download = `${fileName}.pdf`;
    link.click();
  }
  onClickDownloadPdf() {
    // this.downloadPdf(this.base64String, 'sample');

    // var reader = new FileReader();
    // reader.onload = function(e) {
    //    var bdata = btoa(reader.result);
    //    var datauri = 'data:' + isbContentType + ';base64,' + bdata;
    //    window.open(datauri);
    //    newWindow = setTimeout(function() {
    //        newWindow.document.title = isbFilename;
    //    }, 10);
    // };
    // reader.readAsBinaryString(iobBLOB);

    const blob = new Blob([this.base64String], {
      type: 'data:application/pdf;base64',
    });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

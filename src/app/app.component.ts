import { Component } from '@angular/core';

let gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'app',
  template: `
    <div class="container">   
    <file-upload-section class="col-md-12"></file-upload-section>
  </div> 
  `
})
export class AppComponent {
  public gettingStarted:string = gettingStarted;
  public ngAfterContentInit(): any {
    setTimeout(()=>{
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}

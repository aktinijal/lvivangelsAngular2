import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fileIsOver: boolean = false;
  @Output() public options = {
    readAs: 'DataURL'
  };
 
  private file: File;
 
  public fileOver(fileIsOver): void {
    console.log(fileIsOver)
    this.fileIsOver = fileIsOver;
  }
 
  public onFileDrop(event, file): void {
    console.log('Got file!');
    console.log(event, file)
  }

}

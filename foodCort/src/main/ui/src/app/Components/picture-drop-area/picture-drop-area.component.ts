import {Component, ViewChild, EventEmitter, Output} from '@angular/core';

interface ngAfterViewInit {
}

@Component({
  selector: 'app-picture-drop-area',
  templateUrl: './picture-drop-area.component.html',
  styleUrls: ['./picture-drop-area.component.css']
})
export class PictureDropAreaComponent implements ngAfterViewInit {
  @Output() picture = new EventEmitter();
  @ViewChild('dropArea') dropArea;
  imgUrl=""
  imgName=""
  classObj = {'drop-area': true, 'highlight' : false}
  area:any;
  constructor() { }



  ngAfterViewInit(): void{
    this.area = this.dropArea.nativeElement;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach( eventName =>{
      this.area.addEventListener(eventName, (e) => {e.preventDefault(); e.stopPropagation();});
      document.addEventListener(eventName, (e) => {e.preventDefault(); e.stopPropagation();})
    });

    ['dragenter', 'dragover'].forEach( eventName =>{
      this.area.addEventListener(eventName, () =>this.classObj.highlight=true);
    });
    ['dragleave', 'drop'].forEach( eventName =>{
      this.area.addEventListener(eventName, () =>this.classObj.highlight=false);
    });

    this.area.addEventListener('drop', (e) =>this.handleFiles(e.dataTransfer.files));
  }

  private handleFiles(files: any) {
    this.readFile(files[0])
      .then((url: string)=>{
        this.imgUrl = url;
        this.imgName = files[0].name;
        this.picture.emit(url);
    })
  }

  private readFile(file){
    return new Promise((resolve, reject)=>{
      let fileReader = new FileReader();
      fileReader.addEventListener("load", () => {resolve(fileReader.result)});
      fileReader.readAsDataURL(file);
    })
  }

  clear() {
    this.imgUrl=""
    this.imgName=""
  }
}

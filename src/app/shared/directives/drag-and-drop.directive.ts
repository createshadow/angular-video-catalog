import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
  @Output() filesChangeEmiter = new EventEmitter<FileList>();

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const transfer = evt.dataTransfer;
    console.log(evt);
    if (transfer.files.length > 0) {
      this.filesChangeEmiter.emit(transfer.files);
    }
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
  }
  constructor() { }

}

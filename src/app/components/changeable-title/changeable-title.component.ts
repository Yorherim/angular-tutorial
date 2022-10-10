import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'inst-changeable-title',
  templateUrl: './changeable-title.component.html',
  styleUrls: ['./changeable-title.component.scss'],
})
export class ChangeableTitleComponent implements OnInit {
  @Input() title?: string;
  @Output() newTitleEvent = new EventEmitter<string>();
  @ViewChild('input') inputElement?: ElementRef<HTMLInputElement>;

  editMode = false;
  value = '';

  ngOnInit() {
    this.value = this.title || '';
  }

  enableEditMode() {
    this.editMode = true;
    setTimeout(() => this.inputElement?.nativeElement.focus(), 0);
  }

  disableEditMode() {
    this.editMode = false;
    if (this.value !== this.title) {
      this.updateTitle(this.value);
    }
  }

  updateTitle(newTitle: string) {
    this.newTitleEvent.emit(newTitle);
  }
}

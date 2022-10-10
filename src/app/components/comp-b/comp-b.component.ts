import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeautyLoggerService } from 'src/app/services/beauty-logger.service';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit, OnDestroy {
  value = 0;

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService,
  ) {}

  ngOnInit() {
    this.valueService.value$.subscribe((value) => {
      this.value = value;
    });
  }

  ngOnDestroy() {
    this.valueService.value$.unsubscribe();
  }

  incValue() {
    this.valueService.inc();
    this.beautyLoggerService.log('increment value', 'success');
  }
}

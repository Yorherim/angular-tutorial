import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeautyLoggerService } from 'src/app/services/beauty-logger.service';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'inst-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.scss'],
})
export class InOutComponent implements OnInit {
  value$ = new Observable();

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService,
  ) {}

  ngOnInit() {
    this.value$ = this.valueService.value$;
  }

  decValue() {
    this.valueService.dec();
    this.beautyLoggerService.log('decrement value', 'success');
  }
}

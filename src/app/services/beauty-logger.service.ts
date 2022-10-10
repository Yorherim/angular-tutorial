import { Injectable } from '@angular/core';

type LogType = 'success' | 'error' | 'warning' | 'info';

@Injectable({
  providedIn: 'root',
})
export class BeautyLoggerService {
  log(message: string, type: LogType) {
    console.log(`%c${message}`, this.setStyles(type));
  }

  private setStyles(type: LogType): string {
    switch (type) {
      case 'success':
        return 'background: green; color: white';
      case 'error':
        return 'background: red; color: white';
      case 'warning':
        return 'background: orange; color: white';
      case 'info':
        return 'background: orange; color: white';
      default:
        const _: never = type;
        return '';
    }
  }
}

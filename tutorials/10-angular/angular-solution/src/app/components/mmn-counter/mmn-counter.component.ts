import { Component } from '@angular/core';

@Component({
  selector: 'mmn-counter',
  templateUrl: './mmn-counter.template.html',
  styleUrls: [ './mmn-counter.style.css' ],
})
export class MmnCounterComponent {
  public count = 0;

  public inc (): void {
    this.count++;
  }

  public dec (): void {
    this.count--;
  }
}

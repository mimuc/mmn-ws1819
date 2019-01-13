import { Component } from '@angular/core';

interface Meme {
  name: string;
  link: string;
}

const MEME_API_BASE_URL = 'http://flobe-online.de:3002';

@Component({
  selector: 'mmn-mememuc',
  templateUrl: './mememuc.component.html',
  styleUrls: [ './mememuc.component.css' ],
})
export class MemeMUCComponent { }

import {Component} from '@angular/core';
import {CustomizedMeme} from "./mememuc.component";

@Component({
  selector: 'mmn-memehistory',
  templateUrl: './mememuc.history.component.html',
  styleUrls: [ './mememuc.history.component.css' ],
})
/**
 * the MemeMUCHistoryComponent is a horizontal bar located at the webpage bottom
 */
export class MemeMUCHistoryComponent {
  // TODO this property should contain all saved memes, which already exists in the same-named parent component's property. Use data-binding
  savedMemes: CustomizedMeme[];

}

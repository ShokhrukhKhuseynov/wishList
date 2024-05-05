import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => item.isComplete,
  (item : WishItem) => !item.isComplete
]

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  @Input()
  wishes: WishItem[] = [];

  @Output()
  wishesChange = new EventEmitter<WishItem[]>;

  removeWish(wishText : string) {
    this.wishes = this.wishes.filter((item) => item.wishText !== wishText);
    this.wishesChange.emit(this.wishes);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {

  @Input()
  wishText! : string;

  @Input()
  fulfilled! : boolean;

  @Output()
  fulfilledChange = new EventEmitter<boolean>();

  @Output()
  itemToRemove = new EventEmitter<string>();


  toggleItem() {

    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

  removeWish() {
    this.itemToRemove.emit(this.wishText);
  }

 get cssClasses(){
  // return this.fulfilled ? 'strikeout text-muted' : '';
  //  return this.fulfilled ? ['strikeout', 'muted'] : [];
  return {'strikeout text-muted' : this.fulfilled}
 } 

}

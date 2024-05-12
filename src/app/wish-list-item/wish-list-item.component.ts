import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';
import eventService from 'src/shared/services/eventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {

  @Input()
  wish! : WishItem;

  @Input()
  fulfilled! : boolean;

  @Output()
  fulfilledChange = new EventEmitter<boolean>();

  events = eventService;

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleItem() {

    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }



 get cssClasses(){
  // return this.fulfilled ? 'strikeout text-muted' : '';
  //  return this.fulfilled ? ['strikeout', 'muted'] : [];
  return {'strikeout text-muted' : this.fulfilled}
 } 

}

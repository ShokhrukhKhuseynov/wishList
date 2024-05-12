import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {

  wishText: string = '';

  @Output()
  newWish = new EventEmitter<WishItem>();

  addNewWish() {
    this.newWish.emit(new WishItem(this.wishText));
    this.wishText = "";
  }
  
}

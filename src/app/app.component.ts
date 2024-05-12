import { Component } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';
import eventService from 'src/shared/services/eventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  items : Array<WishItem> = [
    new WishItem("Hello World"),
    new WishItem("Learn Angular", true),
    new WishItem("Make a file")
  ]

  title = 'wishaList';
  
  filter : any;

  events = eventService;

  constructor(){
    this.events.listen('removeWish', this.removeItem.bind(this))
  }
  
  removeItem(wishToRemove: WishItem) {
    const index = this.items.indexOf(wishToRemove);
    this.items.splice(index, 1);
  }

  get getVisibleItems() : WishItem[]{
    return this.items.filter(this.filter);
  }

  printItems(){
    console.log(this.items);
  }



}

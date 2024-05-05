import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

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

  get getVisibleItems() : WishItem[]{
    return this.items.filter(this.filter);
  }

  toggleItem(itemToToggle : WishItem) {
    this.items = this.items.map((item) : WishItem => {

      if(item.wishText === itemToToggle.wishText)
        item = itemToToggle;
      
      return item;
    });
  }

  removeItemFromList(itemToRemove : WishItem) {
    this.items = this.items.filter((item) => !item.equals(itemToRemove));  
  }

 
}

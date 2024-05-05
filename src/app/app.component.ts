import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
removeItem(wishes: WishItem[]) {
  this.items = wishes;
}
  
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

  printItems(){
    console.log(this.items);
  }

 
}

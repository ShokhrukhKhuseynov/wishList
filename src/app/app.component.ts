import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';
import { EventService } from 'src/shared/services/eventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  items : Array<WishItem> = [];

  title = 'wishaList';
  
  filter : any;

  constructor(private events: EventService, private wishService : WishService){

    this.events.listen('removeWish', this.removeItem.bind(this));

    //Can also be in ngOnInit
    this.wishService.getWishes().subscribe((wishes : any) => {
      this.items = wishes;
    }, (error : any) => alert(error.message))
  }

  ngOnInit(): void {
   
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

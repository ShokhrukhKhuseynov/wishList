import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => item.isComplete,
  (item : WishItem) => !item.isComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})

export class WishFilterComponent implements OnInit {

  @Input()
  filterChildComponent : any;

  @Output()
  filterChildComponentChange = new EventEmitter<(item : WishItem) => WishItem | boolean>();

  listFilter: string = "0";

  ngOnInit(): void {
      this.filterChildComponentChange.emit(filters[0]);
  }

  filterItems() {
    this.filterChildComponent = filters[Number.parseInt(this.listFilter)];
    this.filterChildComponentChange.emit(this.filterChildComponent);
  }
}


//   filterItems() {
//     //--1
//     // if(filter == "1"){
//     //   this.visibleItems = this.items.filter((item : WishItem) => item.isComplete);
//     // }
//     // else if(filter == "2"){
//     //   this.visibleItems = this.items.filter((item : WishItem) => !item.isComplete);
//     // }
//     // else{
//     //   this.visibleItems = this.items;
//     // }

//     // --2
//     // this.visibleItems = this.items.filter(filters[Number.parseInt(this.listFilter)]);
// }


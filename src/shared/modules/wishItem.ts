export class WishItem{
    constructor(public wishText : string, public isComplete : boolean = false){

    }

    equals(other : WishItem){
        
        if(!(other instanceof WishItem))
            return false;

        return this.wishText === other.wishText && this.isComplete === other.isComplete;
    }
}
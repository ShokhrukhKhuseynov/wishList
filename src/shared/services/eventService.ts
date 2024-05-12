import { Observable, Subject } from "rxjs";
import { WishItem } from "../modules/wishItem";

class EventService{
    
    private subject = new Subject();

    emit(eventName : string, payload : WishItem){

      this.subject.next({eventName, payload});  
    }

    listen(eventName: string, callback : (event : WishItem) => void){
        this.subject.asObservable().subscribe((nextObj : any) =>{
            if(eventName === nextObj.eventName){
                callback(nextObj.payload);
            }
        })
    }
}

export default new EventService();
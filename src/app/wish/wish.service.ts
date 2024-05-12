import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { WishItem } from 'src/shared/modules/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private httpClient : HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers : new HttpHeaders({
        'ContentType' : 'application/json'
      })
    }
  }

  getWishes(){

    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject:{
        customDataFromURL : 'randomData'
      }
    })

    return this.httpClient.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {

    if(error.status === 0){
      console.error('There is an issue with the client or network:', error.error)
    }
    else{
      console.error('Server-side error:', error.error)
    }

    return throwError(() => new Error('Cannot retrieve data from the server. Please try again'));
  }

  addWish(wish : WishItem){

    let options = this.getStandardOptions();
    options.headers = options.headers.set('AuthenticationToke', 'any-value-for-authentication')
    
    // this.httpClient.post(url, body, options)
    this.httpClient.post('assets/wishes.json', wish, options);
  }
}

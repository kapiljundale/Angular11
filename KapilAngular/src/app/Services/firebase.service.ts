import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url = 'https://angularcrud-f5692-default-rtdb.firebaseio.com/';
  constructor(private _httpClient: HttpClient) { }

  createPost(){
    let PostData={
      title:'this is angular CRUD',
      content:'This is FireBase crud operation with post'
    }
     return this._httpClient.post(this.url +'posts.json', PostData);
  }
}

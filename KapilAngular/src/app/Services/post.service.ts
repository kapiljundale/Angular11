import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { devAPIUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient) { }

getPost():Observable<any> {
  return this._httpClient.get(`${devAPIUrl}posts`);
}

getPostByID(id):Observable<any>{
  return this._httpClient.get(`${devAPIUrl}posts/` + id);
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { HttpResponseHandler } from './http-response-handler.service';

@Injectable()
export class DataService {
  constructor(
    // protected url: string,
    private httpClient: HttpClient,
    // private responseHandler: HttpResponseHandler
  ) {}

  // getOneById(id) {
  //   return this.httpClient.get(this.url + '/' + id);
  // }

  public getAll() {
    console.log("get all function in httpservice");
    return this.httpClient
      .get('/api.publicapis.org/entries')
  }

  // public create(post: any) {
  //   return this.httpClient
  //     .post(`${this.url}`, JSON.stringify(post))
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }

  // public update(post: any) {
  //   return this.httpClient
  //     .patch(`${this.url}/${post.id}`, JSON.stringify(post))
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }

  // public delete(id: any) {
  //   return this.httpClient
  //     .delete(`${this.url}/${id}`)
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }
  /**private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }**/
}
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Category} from '../app/model/category.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn:  'root'
})

export class CategoryServices{
  private REST_API_SERVER = 'http://localhost:3001/category';

  constructor(private http: HttpClient){}

  handleError(error: HttpErrorResponse): Observable<never>{

    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    } else{
      errorMessage = `Error code: ${error.status}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
}

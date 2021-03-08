import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Supplier} from '../app/model/supplier.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn:  'root'
})


export class SupplierServices {
  private REST_API_SERVER = 'http://localhost:3001/supplier';


  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never>{

    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    } else{
      errorMessage = `Error code: ${error.status}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getSupplier(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
}

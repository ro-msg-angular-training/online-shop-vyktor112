import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Product} from '../app/model/product.model';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Result} from '../app/model/result.model';

@Injectable({
  providedIn:  'root'
})

export class ProductService{

  private REST_API_SERVER = 'http://localhost:3001/product';

  constructor(private http: HttpClient){}

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

   getProducts(): Observable<Product[]>{
      return  this.http.get<Product[]>(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }

   getOneProducts(id: string): Observable<Product>{
      return  this.http.get<Product>(this.REST_API_SERVER + `/${id}`).pipe(catchError(this.handleError));
  }

   deleteProduct(id: string): Observable<Result>{
      console.log('am intrat aici', id);
      return  this.http.delete<Result>(this.REST_API_SERVER + `/${id}`).pipe(catchError(this.handleError));
  }
  editOneProduct(id: string, body: Product): Observable<Product>{
    return this.http.put<Product>(this.REST_API_SERVER + `/${id}`, body).pipe(catchError(this.handleError));
  }

  addOneProduct(body: Product): Observable<Product>{
    console.log(body);
    return this.http.post<Product>(this.REST_API_SERVER, body).pipe(catchError(this.handleError));
  }
}

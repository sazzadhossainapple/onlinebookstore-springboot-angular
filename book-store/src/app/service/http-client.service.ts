import { Injectable } from '@angular/core';
import{User} from 'src/app/model/User'
import { from } from 'rxjs';
import {Book} from 'src/app/model/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(    private httpClient:HttpClient
    ) { }

    getUsers()
    {

     

      return this.httpClient.get<User[]>('http://localhost:8080/users/get');
    }

  addUser(newUser: User) {

   
  

    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }

  deleteUser(id) {

   
    
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getBooks() {


    
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  addBook(newBook: Book) {
    
    
    return this.httpClient.post<Book>('http://localhost:8080/books/add', newBook);
  }
  deleteBook(id) {
   
    
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id,);
  }

  updateBook(updatedBook: Book) {
   
    return this.httpClient.put<Book>('http://localhost:8080/books/update', updatedBook);
  }

}

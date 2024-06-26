import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private readonly DB_URL = "http://localhost:48190/api/Quiz";

  constructor(private readonly myClient:HttpClient) { }

  getAllQuizs(){
    return this.myClient.get(this.DB_URL);
  }

  getQuizByID(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }

  AddNewQuiz(Quiz:any){
    return this.myClient.post(this.DB_URL,Quiz);
  }

  updateQuiz(id:any,Quiz:any){
    return this.myClient.put(this.DB_URL+"/"+id,Quiz);
  }

  deleteQuiz(id:any){
    return this.myClient.delete(this.DB_URL+"/"+id);
  }
  
}

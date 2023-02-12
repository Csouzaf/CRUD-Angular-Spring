import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "/assets/courses.json"

  constructor(private HttpClient: HttpClient) { }

  list() {

    return this.HttpClient.get<Course[]>(this.API)

    .pipe(

      first(),
      //Testando o delay
      delay(1000),

      tap(courses => console.log(courses))
    );
  }
}

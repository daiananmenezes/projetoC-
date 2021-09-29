import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Meal } from "../models/meal";

@Injectable({
    providedIn: "root",
})
export class MealService {
    private baseUrl = "http://localhost:5000/api/meal";

    constructor(private http: HttpClient) {}

    list(): Observable<Meal[]> {
        return this.http.get<Meal[]>(`${this.baseUrl}/list`);
    }

    create(meal: Meal): Observable<Meal> {
        return this.http.post<Meal>(`${this.baseUrl}/create`, meal);
    }

    find(id: Number): Observable<Meal> {
        return this.http.get<Meal>(`${this.baseUrl}/getbyid/${id}`);
    }

    update(meal: Meal): Observable<Meal> {
        return this.http.put<Meal>(`${this.baseUrl}/update`, meal);
    }
    
    delete(meal: Meal): Observable<Meal> {
        return this.http.delete<Meal>(`${this.baseUrl}/update/${meal.nome}`);
    }

}

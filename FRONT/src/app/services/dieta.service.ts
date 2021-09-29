import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Diet } from "../models/dieta";

@Injectable({
    providedIn: "root",
})
export class DietService {
    private baseUrl = "http://localhost:5000/api/diet";

    constructor(private http: HttpClient) {}

    list(): Observable<Diet[]> {
        return this.http.get<Diet[]>(`${this.baseUrl}/list`);
    }

    create(diet: Diet): Observable<Diet> {
        return this.http.post<Diet>(`${this.baseUrl}/create`, diet);
    }

    find(id: Number): Observable<Diet> {
        return this.http.get<Diet>(`${this.baseUrl}/getbyid/${id}`);
    }

    update(diet: Diet): Observable<Diet> {
        return this.http.put<Diet>(`${this.baseUrl}/update`, diet);
    }
    
    delete(diet: Diet): Observable<Diet> {
        return this.http.delete<Diet>(`${this.baseUrl}/update/${diet.title}`);
    }

}

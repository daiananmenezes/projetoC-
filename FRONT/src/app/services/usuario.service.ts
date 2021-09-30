import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private baseUrl = "http://localhost:5000/api/user";

    constructor(private http: HttpClient) {}

    list(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseUrl}/list`);
    }

    create(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.baseUrl}/create`, usuario);
    }

    find(id: Number): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.baseUrl}/getbyid/${id}`);
    }

    update(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.baseUrl}/update`, usuario);
    }
    
    delete(nome: string): Observable<Usuario> {
        return this.http.delete<Usuario>(`${this.baseUrl}/delete/${nome}`);
    }

}

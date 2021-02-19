import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../Models/product.model";
import { User } from "../models/user.model";
import { Security } from "../utils/security.util";


@Injectable({
    providedIn: 'root'
})


export class DataService {
    constructor(private http: HttpClient) { }
    public url = 'http://localhost:3000/v1';

    public composeHeaders() {
        const token = Security.getToken();
        const header = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return header;
    }


    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    getProfile() {
        let retorno = this.http.get<User[]>(`${this.url}/accounts`, { headers: this.composeHeaders() });
        console.log(retorno);
        return retorno;
    }

    updateProfile(data) {
        let retorno = this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
        console.log(retorno);
        return retorno;
    }

    authenticate(data) {
        let retorno = this.http.post<Product[]>(`${this.url}/accounts/authenticate`, data);
        return retorno;
    }

    create(data) {
        let retorno = this.http.post<any[]>(`${this.url}/accounts`, data);
        return retorno;
    }

    resetPassaword(data) {
        let retorno = this.http.post<any[]>(`${this.url}/accounts/reset-password`, data);
        return retorno;
    }


    refreshToken() {
        return this.http.post<Product[]>(`${this.url}/accounts/authenticate`,
            null,
            { headers: this.composeHeaders() });
    }
}
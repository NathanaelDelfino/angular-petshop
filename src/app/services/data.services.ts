import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/Models/product.model";

@Injectable({
    providedIn: 'root'
})


export class DataService {
    constructor(private http: HttpClient) { }

    getProducts() {
        let retorno = this.http.get<Product[]>('http://localhost:3000/v1/products');
        console.log(retorno);
        return retorno;
    }
}
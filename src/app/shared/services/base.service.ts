import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel } from '../models/baseModel.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class BaseService<T extends BaseModel> {
    baseUrl:string = ""
    constructor(private http:HttpClient, @Inject('controller') private controller:string) {
        this.baseUrl = environment.baseUrl;

    }  

    get(){
        return this.http.get(`${this.baseUrl}/${this.controller}`)
    }

    find(id:number){
        return this.http.get(`${this.baseUrl}/${this.controller}/${id}`)
    }

    post(obj: T){
        return this.http.post(`${this.baseUrl}/${this.controller}`, obj)
    }

    put(obj: T, id:number){
        return this.http.put(`${this.baseUrl}/${this.controller}/${id}`, obj)
    }

    delete(id:number){
        return this.http.delete(`${this.baseUrl}/${this.controller}/${id}`)
    }
}
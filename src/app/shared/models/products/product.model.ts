import { BaseModel } from "../baseModel.model";

export interface Product extends BaseModel{
    categoryId:number;
    name:string;
    description:string;
    price:number;
    quantity:number;
    weight:number;
    image:string;
}
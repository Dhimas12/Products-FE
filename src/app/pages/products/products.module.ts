import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HoverDirective } from 'src/app/shared/directives/hover.directive';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        ProductListComponent,
        ProductCardComponent,
        ProductFormComponent,
    ],
    declarations: [
        ProductListComponent,
        ProductCardComponent,
        ProductFormComponent
    ],
    providers: [],
})
export class ProductsModule { }
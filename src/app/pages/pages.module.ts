import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoverDirective } from '../shared/directives/hover.directive';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsModule } from './products/products.module';


@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        ProductsModule
    ],
    exports: [
        PagesRoutingModule,
    ],
    declarations: [
        
    ],
    providers: [],
})
export class PagesModule { }

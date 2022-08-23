import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    exports: [
        PagesRoutingModule
    ],
    declarations: [],
    providers: [],
})
export class PagesModule { }

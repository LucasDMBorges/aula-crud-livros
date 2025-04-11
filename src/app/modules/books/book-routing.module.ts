import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book.component";

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},
{
    path: 'home',
    component: BookComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookRoutingModule { }
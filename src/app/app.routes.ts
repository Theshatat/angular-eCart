import { Routes } from '@angular/router';
import { Products } from '../Components/products/products';
import { Home } from '../Components/home/home';
import { NotFound } from '../Components/not-found/not-found';
import { ContactUs } from '../Components/contact-us/contact-us';
import { AboutUs } from '../Components/about-us/about-us';
import { Details } from '../Components/details/details';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home', component:Home},
    {path:'ContactUs', component:ContactUs},
    {path:'AboutUs', component:AboutUs},
    {path:'Products', component:Products},   
    {path:'Products/:id', component:Details},
    {path:'**', component:NotFound},
];

import { Routes } from '@angular/router';
// import { Products } from '../Components/products/products';
import { Home } from '../Components/home/home';
import { NotFound } from '../Components/not-found/not-found';
import { ContactUs } from '../Components/contact-us/contact-us';
import { AboutUs } from '../Components/about-us/about-us';
import { Details } from '../Components/details/details';
import { authGuard } from './guards/auth-guard';
import { Login } from '../Components/login/login';
import { AddProduct } from '../Components/add-product/add-product';
import { EditProduct } from '../Components/edit-product/edit-product';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home', component:Home},
    {path:'ContactUs', component:ContactUs},
    {path:'AboutUs', component:AboutUs},
    {path:'Login', component:Login},
    {path:'add-product', component:AddProduct},
    {path:'Products',
        loadComponent : ()=> import('../Components/products/products').then(m=>m.Products),
         canActivate: [authGuard]},   
    {path:'Products/:id', component:Details},
    {path:'edit-product/:id', component:EditProduct},
    {path:'**', component:NotFound},
];

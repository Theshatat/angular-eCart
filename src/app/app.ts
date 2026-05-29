import { Component, signal } from '@angular/core';
import { Header } from '../Components/header/header';
import { Footer } from '../Components/footer/footer';
import { Order } from '../Components/order/order/order';

@Component({
  selector: 'app-root',
  imports: [Header,Footer,Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-eCart');
}

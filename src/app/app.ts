import { Component, signal } from '@angular/core';
import { Header } from '../Components/header/header';
import { Footer } from '../Components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './Services/LoadingService/loading-service';
// import async pipe to use it in the template
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-eCart');

  isLoading$;
  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.isLoading$;
  }

}

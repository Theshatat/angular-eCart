import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../../Services/LoadingService/loading-service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  
    const loadingService = inject(LoadingService); // Inject the LoadingService it is the same as constructor(private loadingService: LoadingService) {}
    loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
  
};

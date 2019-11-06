import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

export class ApiInterceptor implements HttpInterceptor {
    private count: number = 0;

    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.count++;

        if (this.count == 1) this.spinner.show();

        let handleObs: Observable<HttpEvent<any>> = next.handle(req);

        handleObs
            .subscribe(event => {
                if (event instanceof HttpResponse) {
                    this.count--;
                    if (this.count == 0) this.spinner.hide();
                }
            }, err => {
                this.count--;
                return Observable.throw(err);
            });
        return handleObs;
    }
}

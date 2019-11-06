import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

export class LoadingIndicatorInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];
 
    constructor(private spinner: NgxSpinnerService) { }
 
    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        if(this.requests.length > 0) {
            this.spinner.show();
        } else {
            this.spinner.hide();
        }
    }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.spinner.show();
        return Observable.create(observer => {
            const subscription = next.handle(req)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(req);
                            observer.next(event);
                        }
                    },
                    err => {
                       // alert('error returned');constructor(private spinner: NgxSpinnerService) { }
                        this.removeRequest(req);
                        observer.error(err);
                    },
                    () => {
                        this.removeRequest(req);
                        observer.complete();
                    });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
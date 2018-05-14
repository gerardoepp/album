import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

    private messageSource = new BehaviorSubject<string>("Usuario");
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message) {
        this.messageSource.next(message)
    }

}
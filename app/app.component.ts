import { Component } from '@angular/core';

@Component({
    moduleId: module.id.replace('/build', '/'),
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent { }
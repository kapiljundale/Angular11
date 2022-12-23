import { Component } from "@angular/core";

@Component({
    selector: 'app-demo',
    template: `<h1> This is my server component</h1>
    <h1 class="test1" id="test1">This is h2</h1>
    {{name}} <app-add></app-add>`,
    styleUrls: ['./demo.component.css']
})
export class demoComponent{

    name: string = 'Codemind';

}

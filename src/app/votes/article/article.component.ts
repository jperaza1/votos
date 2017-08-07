import { Component } from '@angular/core';

@Component({
    selector: 'article',
    host:{
        class: 'row'
    },
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent{
    votes:number = 20;
}
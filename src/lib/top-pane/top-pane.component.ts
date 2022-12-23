import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'ui-top-pane',
    templateUrl: './top-pane.component.html',
    styleUrls: ['./top-pane.component.css']
})
export class TopPaneComponent implements OnInit {


    @Input()
    tabs$!: Observable<{ id: string, title: string }[]>;

    @Input()
    selected!: string | undefined;

    @Output()
    tabClick = new EventEmitter<string>();

    @Output()
    menuClick = new EventEmitter();

    constructor(@Inject('logo') public logo: string) {
    }

    ngOnInit(): void {
    }
}







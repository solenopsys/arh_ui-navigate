import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

type Tab = { id: string, title: string };

@Component({
    selector: 'ui-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

    @Input()
    select!: string | undefined;

    @Input()
    tabs$!: Observable<Tab[]>;

    @Output()
    tabClick = new EventEmitter<string>();

}

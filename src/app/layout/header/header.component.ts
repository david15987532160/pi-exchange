import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input()
    set isCollapsed(collapsed: boolean) {
        this._isCollapsed = collapsed;
        this.isCollapsedChange.emit(collapsed);
    }

    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    @Output() isCollapsedChange = new EventEmitter<boolean>();

    private _isCollapsed = false;

    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MENU_ITEMS } from '@app/layout/utils/constants';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
    menuItems = MENU_ITEMS;

    isCollapsed = false;
}

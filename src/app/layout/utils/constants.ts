import { IMenuItem } from '@app/layout/models/menu-item.model';

export const MENU_ITEMS: IMenuItem[] = [
    {
        title: 'Home',
        icon: 'home',
        isOpen: true,
        children: [
            {
                title: 'GIFs',
                url: '/gifs'
            }
        ]
    }
];

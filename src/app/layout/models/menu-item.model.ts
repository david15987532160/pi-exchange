export interface IMenuItem {
    title: string;
    icon?: string;
    url?: string;
    isOpen?: boolean;
    children?: IMenuItem[];
}

import {ActionButton} from "@solenopsys/ui-controls";

export type MenuItemData = {
    name: string,
    link: string,
    icon?: string,
    items?: MenuItemData[],
}

export declare type MenuItem = {
    name: string;
    link: string;
    icon: string;
    submenus: string[]
    items: any[]
}

export declare type Tab ={
    id: string,
    title: string
}

export declare type TabsState = {
    current: string,
    tabs: Tab[],
}

export declare type TopPaneConfig = {
    tabsState: TabsState,
    actions: ActionButton[];
}

import {ActionButton} from "@solenopsys/ui-controls";

export interface MenuItemData {
    name: string,
    link: string,
    icon?: string,
    items?: MenuItemData[],
}

export interface MenuItem {
    name: string;
    link: string;
    icon: string;
    submenus: string[]
    items: any[]
}

export interface Tab {
    id: string,
    title: string
}

export interface TabsState {
    current: string,
    tabs: Tab[],
}

export interface TopPaneConfig  {
    tabsState: TabsState,
    actions: ActionButton[];
}
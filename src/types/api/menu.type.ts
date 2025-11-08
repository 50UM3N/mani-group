export type MenuItemType = {
  id: number;
  title: string;
  url: string;
  children: MenuItemType[];
};

export type MenuType = MenuItemType[];

import menuData from "../utils/menuData";
import Menu from "../models/menu.model";

const MenuService = {
  createMenu(menu) {
    const newId = menuData.menus.length + 1;
    const newMenu = menu;
    newMenu.id = newId;
    menuData.menus.push(newMenu);
    return menu;
  },

  fetchTodaysMenu() {
    const todaysMenu = menuData.menus.map(menu => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.cusine = menu.cusine;
      newMenu.meals = menu.meals;
      return newMenu;
    });
    return todaysMenu;
  },
  deleteAMenu(id) {
    const i = menuData.menus.findIndex(menu => menu.id == id);
    const filteredmenus = menuData.menus
      .slice(0, i)
      .concat(menuData.menus.slice(i + 1, menuData.menus.length));
    menuData.menus = filteredmenus;
    return menuData.menus;
  }
};

export default MenuService;

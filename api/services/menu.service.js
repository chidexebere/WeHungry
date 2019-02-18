import menuData from "../utils/menuData";
import Menu from "../models/menu.model";

const MenuService = {
  createMenu(menu) {
    const menuLength = menuData.menu.length;
    const lastId = menuData.menu[menuLength - 1].id;
    const newId = lastId + 1;
    menu.id = newId;
    menuData.menu.push(menu);
    return menu;
  },

  fetchTodaysMenu() {
    const todaysMenu = menuData.menu.map(menu => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.type = menu.name;
      newMenu.meals = menu.meals;
      return newMenu;
    });
    return todaysMenu;
  }
};

export default MenuService;

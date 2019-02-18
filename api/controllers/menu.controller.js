import MenuService from "../services/menu.service";

const MenuController = {
  createMenu(req, res) {
    /*
            Expect json of the format
            {
                type: "Regular",
                meals: [
                        {
                            name: "Fried Rice",
                            size: "Medium",
                            price: "450"
                        },
                        {
                            name: "Jollof Rice",
                            size: "Large",
                            price: "550"
                        }
                    ]
            }
        */
    const newMenu = req.body;
    const createdMenu = MenuService.createMenu(newMenu);
    return res
      .json({
        status: "success",
        data: createdMenu
      })
      .status(201);
  },
  fetchAllMeals(req, res) {
    const todaysMenu = MenuService.fetchTodaysMenu();
    return res
      .json({
        status: "success",
        data: todaysMenu
      })
      .status(200);
  }
};

export default MenuController;

const Menu = require('../Models/Menu');
const HttpError = require('../Models/httpError');
const { Types } = require('mongoose');

exports.getMenu = async (req, res, next) => {
  let menu;
  try {
    menu = await Menu.find();
  } catch (Err) {
    return next(new HttpError('Fetching menu failed', 500));
  }

  res.status(200).json(menu);
};

exports.postMenu = async (req, res, next) => {
  const { name, mealname, mealprice, mealdescription } = req.body;

  const createMenu = new Menu({
    name,
    meals: [
      { name: mealname, price: +mealprice, description: mealdescription },
    ],
  });

  try {
    await createMenu.save();
  } catch (Err) {
    return next(new HttpError('Updating menu failed', 500));
  }

  res.status(201).json({ menu: createMenu });
};

exports.updateMenu = async (req, res, next) => {
  const { mealname, mealprice, mealdescription } = req.body;

  const { mid } = req.params;

  let foundMenu;
  try {
    foundMenu = await Menu.findById(mid);
  } catch (err) {
    return next(new HttpError('Finding menu failed', 404));
  }

  foundMenu.meals = [
    ...foundMenu.meals,
    {
      name: mealname,
      price: +mealprice,
      description: mealdescription,
      _id: new Types.ObjectId(),
    },
  ];

  try {
    await foundMenu.save();
  } catch (Err) {
    return next(new HttpError('Updating menu failed', 500));
  }

  res.status(201).json({ menu: foundMenu });
};

import db from '../models';

const { groceryItems } = db;

export const addGroceryItem = async (req: any, res: any) => {
  try {
    const { name, price, inventoryCount } = req.body;
    const item = await groceryItems.create({ name, price, inventoryCount });
    res.status(201).send({
      successful: true,
      item
    });
  } catch (error: any) {
    res.status(500).send({
      successful: false,
      message: error.message
    });
  }
};

export const viewGroceryItems = async (req: any, res: any) => {
  try {
    const items = await groceryItems.findAll();
    res.status(200).send({
      successful: true,
      items
    });
  } catch (error: any) {
    res.status(500).send({
      successful: false,
      message: error.message
    });
  }
};

export const updateGroceryItem = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { name, price, inventoryCount } = req.body;
    const item = await groceryItems.update({ name, price, inventoryCount }, { where: { id } });
    res.status(200).send({
      successful: true,
      message: `Updated ${item} record(s)`
    });
  } catch (error: any) {
    res.status(500).send({
      successful: false,
      message: error.message
    });
  }
};

export const deleteGroceryItem = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await groceryItems.destroy({ where: { id } });
    res.status(200).send({
      successful: true,
      message: "Item deleted"
    });
  } catch (error: any) {
    res.status(500).send({
      successful: false,
      message: error.message
    });
  }
};

import db from '../models';

const { groceryItems } = db;

export const listAvailableItems = async (req: any, res: any) => {
  try {
    const items = await groceryItems.findAll({
      where: {
        inventoryCount: {
          [db.Sequelize.Op.gt]: 0
        }
      }
    });
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

export const bookItems = async (req: any, res: any) => {
  try {
    const { items } = req.body;
    const results = [];

    for (const item of items) {
      const { id, quantity } = item;
      const product = await groceryItems.findOne({ where: { id } });

      if (product.inventoryCount >= quantity) {
        await groceryItems.update(
          { inventoryCount: db.Sequelize.literal(`inventoryCount - ${quantity}`) },
          { where: { id } }
        );
        results.push({ id, status: 'Booked', bookedQuantity: quantity });
      } else {
        results.push({ id, status: 'Not enough inventory' });
      }
    }

    res.status(200).send({
      successful: true,
      results
    });
  } catch (error: any) {
    res.status(500).send({
      successful: false,
      message: error.message
    });
  }
};

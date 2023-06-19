const Kot = require('../models/Kotlist');

const KotController = () => {
  const addKot = async (req, res) => {
    const { body } = req;

      try {
        Kot.destroy({
          where: {
            orderid: body.orderid,
          },
        })
        await Kot.create({
          orderid: body.orderid,
          kotjson: body.kotjson,
        });
      
        //const token = authService().issue({ id: user.id });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getKotListById = async (req, res) => {
    const { orderid } = req.query;

    if (orderid) {
      try {
        const order = await Kot
          .findOne({
            where: {
              orderid,
            },
          });

        if (!order) {
          return res.status(200).json({ status: 'success' });
        }

        return res.status(200).json( order.kotjson );

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  

  const getAllKot = async (req, res) => {
    try {
      const orders = await Kot.findAll();

      return res.status(200).json({ orders });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteKot = async (req, res) => { 
    const { orderid } = req.query;
    if (orderid) {
        try {
          const order = await Orders
            .destroy({
              where: {
                orderid
              },
            });
  
          if (!order) {
              return res.status(200).json({ status: 'success' });
          }
  
          return res.status(200).json(order.orderid);
  
        } catch (err) {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        }
     }
    };




  return {
    addKot,
    getKotListById,
    getAllKot,
    deleteKot
  };
};

module.exports = KotController;

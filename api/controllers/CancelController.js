const CancelOrders = require('../models/CancelList');

const CancelController = () => {
  const addCancelOrders = async (req, res) => {
    const { body } = req;

      try {
        CancelOrders.destroy({
          where: {
            orderid: body.orderid,
          },
        })
        await CancelOrders.create({
          orderid: body.orderid,
          orderjson: body.orderjson,
        });
      
        //const token = authService().issue({ id: user.id });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getCancelOrderById = async (req, res) => {
    const { orderid } = req.query;

    if (orderid) {
      try {
        const order = await CancelOrders
          .findOne({
            where: {
              orderid,
            },
          });

        if (!order) {
          return res.status(200).json({ status: 'success' });
        }

        return res.status(200).json( order.orderjson );

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  

  const getAllCancelOrders = async (req, res) => {
    try {
      const orders = await CancelOrders.findAll();

      return res.status(200).json({ orders });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const removeCancelOrdersById = async (req, res) => { 
    const { orderid } = req.query;
    if (orderid) {
        try {
          const order = await CancelOrders
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
    addCancelOrders,
    getCancelOrderById,
    getAllCancelOrders,
    removeCancelOrdersById
  };
};

module.exports = CancelController;

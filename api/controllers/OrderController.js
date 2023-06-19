const Orders = require('../models/Orders');

const OrderController = () => {
  const addOrder = async (req, res) => {
    const { body } = req;

      try {
        Orders.destroy({
          where: {
            orderid: body.orderid,
          },
        })
        await Orders.create({
          orderid: body.orderid,
          orderjson: body.orderjson,
        });
      

        // const user = await Orders.create({
        //   orderid: body.orderid,
        //   orderjson: body.orderjson,
        // });
        //const token = authService().issue({ id: user.id });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getOrderById = async (req, res) => {
    const { orderid } = req.query;
    console.log(orderid);
    
    if (orderid) {
      try {
        const order = await Orders
          .findOne({
            where: {
              orderid,
            },
          });

        if (!order) {
          return res.status(200).json({ status: false });
        }

        return res.status(200).json( order.orderjson );

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  

  const getAll = async (req, res) => {
    try {
      const orders = await Orders.findAll();

      return res.status(200).json({ orders });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteOrder = async (req, res) => { 
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
    addOrder,
    getOrderById,
    getAll,
    deleteOrder
  };
};

module.exports = OrderController;

const CustomerModel = require('../models/Customer');

const CustomerController = () => {
  const addCustomer = async (req, res) => {
    const { body } = req;

      try {
        CustomerModel.destroy({
          where: {
            orderid: body.orderid,
          },
        })
        await CustomerModel.create({
          orderid: body.orderid,
          customerjson: body.customerjson,
        });
      
        //const token = authService().issue({ id: user.id });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getCustomerOrderById = async (req, res) => {
    const { orderid } = req.query;

    if (orderid) {
      try {
        const order = await CustomerModel
          .findOne({
            where: {
              orderid,
            },
          });

        if (!order) {
          return res.status(200).json({ status: false });
        }

        return res.status(200).json( order.customerjson );

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  

  const removeCustomerById = async (req, res) => { 
    const { orderid } = req.query;
    if (orderid) {
        try {
          const order = await CustomerModel
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
    addCustomer,
    getCustomerOrderById,
    removeCustomerById
  };
};

module.exports = CustomerController;

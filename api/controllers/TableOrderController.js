const TableOrder = require('../models/TableOrder');

const TableOrderController = () => {
  const addTableOrder = async (req, res) => {
    const { body } = req;

    try {
        TableOrder.findOne({
          where: {
            orderid: body.orderid,
          },
        }).then(async (order) => { 
          if(order) {
            order.update(body.tableid)
          }else{
            
            await TableOrder.create({
                orderid: body.orderid,
                tableid: body.tableid,
              });
            }

        });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getOrderIdByTableId = async (req, res) => {
    const { tableid } = req.query;

    if (tableid) {
      try {
        const order = await TableOrder
          .findOne({
            where: {
                tableid
            },
          });

        if (!order) {
            return res.status(200).json({ status: false });
        }

        return res.status(200).json(order.orderid);

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const deleteTableOrderMapping = async (req, res) => { 
    const { orderid } = req.query;
    if (orderid) {
        try {
          const order = await TableOrder
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
    addTableOrder,
    getOrderIdByTableId,
    deleteTableOrderMapping
  };
};

module.exports = TableOrderController;

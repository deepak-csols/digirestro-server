const ExtId = require('../models/ExternalOrder');

const ExternalController = () => {
  const addExternal = async (req, res) => {
    const { body } = req;

      try {
        ExtId.destroy({
          where: {
            hotelId: body.hotelId,
          },
        })
        await ExtId.create({
            externalOrderId: body.externalOrderId,
            hotelId: body.hotelId,
        });
      
        //const token = authService().issue({ id: user.id });

        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const getExternalOrderId = async (req, res) => {
    const { hotelId } = req.query;

    if (hotelId) {
      try {
        const order = await ExtId
          .findOne({
            where: {
                hotelId,
            },
          });

        if (!order) {
          return res.status(200).json({ status: false });
        }

        return res.status(200).json( order.externalOrderId );

      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };


 
  return {
    addExternal,
    getExternalOrderId,
    
  };
};

module.exports = ExternalController;

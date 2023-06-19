const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
 
  'POST /order': 'OrderController.addOrder',
  'GET /getorder': 'OrderController.getOrderById',
  'GET /getall': 'OrderController.getAll',
  'DELETE /deleteorder': 'OrderController.deleteOrder',

  'POST /settableid':  'TableOrderController.addTableOrder',
  'GET /gettableid': 'TableOrderController.getOrderIdByTableId',
  'DELETE /deletetableid': 'TableOrderController.deleteTableOrderMapping',

  // 'POST /kot': 'OrderController.addKot',
  // 'GET /getorder': 'OrderController.getKotListById',
  // 'GET /getallorder': 'OrderController.getAll',

  'POST /kot': 'KotController.addKot',
  'GET /getkot': 'KotController.getKotListById',
  'GET /getallkot': 'KotController.getAllKot',
  'DELETE /deletekot': 'KotController.deleteKot',

  //Cancel Orders API
  'POST /cancelorder': 'CancelController.addCancelOrders',
  'GET /getcancelorder': 'CancelController.getCancelOrderById',
  'GET /getallcancelorder': 'CancelController.getAllCancelOrders',
  'DELETE /deletecancelorder': 'CancelController.removeCancelOrdersById',

  //External Order Id
  'POST /externalorderid': 'ExternalController.addExternal',
  'GET /getexternalorderid': 'ExternalController.getExternalOrderId',
  
};

module.exports = publicRoutes;

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "Order-bhfmqtrwdfcijg6ymhaxbzx4hm-dev";
const ORDER_TYPE = "Order";
const PRENDA_ORDER_TABLE = "PrendaOrder-bhfmqtrwdfcijg6ymhaxbzx4hm-dev";
const PRENDA_ORDER_TYPE = "PrendaOrder";

const createOrder = async (payload) => {
  const { order_id, username, email, total } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: order_id,
      __typename: ORDER_TYPE,
      customer: email,
      user: username,
      total: total,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createPrendaOrder = async (payload) => {
  let bookOrders = [];
  for (let i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    bookOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: PRENDA_ORDER_TYPE,
          book_id: cartItem.id,
          order_id: payload.order_id,
          customer: payload.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
  let params = {
    RequestItems: {}
  };
  params["RequestItems"][PRENDA_ORDER_TABLE] = bookOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link books to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // create a new order
    await createOrder(payload);

    // links books with the order
    await createPrendaOrder(payload);

    // Note - You may add another function to email the invoice to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};

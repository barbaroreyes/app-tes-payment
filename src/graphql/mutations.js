/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createPrenda = /* GraphQL */ `
  mutation CreatePrenda(
    $input: CreatePrendaInput!
    $condition: ModelPrendaConditionInput
  ) {
    createPrenda(input: $input, condition: $condition) {
      id
      name
      description
      image
      Categotia
      featured
      price
      orders {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePrenda = /* GraphQL */ `
  mutation UpdatePrenda(
    $input: UpdatePrendaInput!
    $condition: ModelPrendaConditionInput
  ) {
    updatePrenda(input: $input, condition: $condition) {
      id
      name
      description
      image
      Categotia
      featured
      price
      orders {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePrenda = /* GraphQL */ `
  mutation DeletePrenda(
    $input: DeletePrendaInput!
    $condition: ModelPrendaConditionInput
  ) {
    deletePrenda(input: $input, condition: $condition) {
      id
      name
      description
      image
      Categotia
      featured
      price
      orders {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPrendaOrder = /* GraphQL */ `
  mutation CreatePrendaOrder(
    $input: CreatePrendaOrderInput!
    $condition: ModelPrendaOrderConditionInput
  ) {
    createPrendaOrder(input: $input, condition: $condition) {
      id
      prenda_id
      order_id
      order {
        id
        user
        date
        total
        prendas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      prenda {
        id
        name
        description
        image
        Categotia
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updatePrendaOrder = /* GraphQL */ `
  mutation UpdatePrendaOrder(
    $input: UpdatePrendaOrderInput!
    $condition: ModelPrendaOrderConditionInput
  ) {
    updatePrendaOrder(input: $input, condition: $condition) {
      id
      prenda_id
      order_id
      order {
        id
        user
        date
        total
        prendas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      prenda {
        id
        name
        description
        image
        Categotia
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deletePrendaOrder = /* GraphQL */ `
  mutation DeletePrendaOrder(
    $input: DeletePrendaOrderInput!
    $condition: ModelPrendaOrderConditionInput
  ) {
    deletePrendaOrder(input: $input, condition: $condition) {
      id
      prenda_id
      order_id
      order {
        id
        user
        date
        total
        prendas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      prenda {
        id
        name
        description
        image
        Categotia
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      prendas {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      prendas {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      prendas {
        items {
          id
          prenda_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;

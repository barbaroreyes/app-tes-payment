import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listPrendas } from "../graphql/queries";
import { processOrder } from "../graphql/mutations";

const PrendaContext = React.createContext();

const PrendaProvider = ({ children }) => {
  const [prendas, setPrendas] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPrendas();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPrendas = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPrendas,
        authMode: "API_KEY"
      });
      const prendas = data.listPrendas.items;
      const featured = prendas.filter((prenda) => {
        return !!prenda.featured;
      });
      setPrendas(prendas);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PrendaContext.Provider value={{ prendas, featured, loading, checkout }}>
      {children}
    </PrendaContext.Provider>
  );
};

export { PrendaContext, PrendaProvider };

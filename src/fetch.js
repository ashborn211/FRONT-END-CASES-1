import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCoins = (page) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const offset = (page - 1) * 10;
        const response = await axios.get(
          `https://api.coincap.io/v2/assets?limit=10&offset=${offset}`
        );
        setCoins(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins();
  }, [page]);

  return coins;
};

export default useFetchCoins;
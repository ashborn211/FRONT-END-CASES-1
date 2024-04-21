// fetch.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCoins = (page) => {
  const [coins, setCoins] = useState([]);

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

  useEffect(() => {
    fetchCoins();
  }, [page]);

  return coins;
};

export const useFetchCryptoData = (selectedCrypto) => {
  const [data, setData] = useState([]);

  const fetchCryptoData = async () => {
    if (selectedCrypto) {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${selectedCrypto}/history?interval=d1`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, [selectedCrypto]);

  return { fetchCryptoData };
};

export const useFetchCryptoList = (limit) => {
  const [cryptoList, setCryptoList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      setCryptoList(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  return { fetchCryptoList: setCryptoList };
};
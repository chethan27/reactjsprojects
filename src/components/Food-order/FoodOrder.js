import React, { useEffect, useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import './styles.css'

const FoodOrder = () => {

    const [storeData, setStoreData] = useState([]);
    const [dataToRender, setDataToRender] = useState([])

    const fetchDataFromApi = async () => {

        const response = await fetch('https://791bfeeb-7714-4e88-9a11-e730288f2d6d.mock.pstmn.io/order');
        const responseJson = await response.json();
        if (responseJson) {
            console.log(responseJson)
            setStoreData(responseJson)
            setDataToRender(responseJson)
          }
    }

    useEffect(() => {
        fetchDataFromApi();
    }, [])

    const getFilteredData = (data) => {
        setDataToRender(data);
    }

  return (
        <div>
            <Heading storeData = {storeData}  getFilteredData = {getFilteredData} ></Heading>
            <Card storeData = {dataToRender} />
        </div>
  )
}

export default FoodOrder
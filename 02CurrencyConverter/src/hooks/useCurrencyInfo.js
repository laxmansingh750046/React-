import { useEffect, useState } from "react";
// import currencies from "../data/currencies.json"
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=> res.json())
        .then((res)=>{
             res["rates"][[currency]]=1
             setData(res["rates"])}
        )
        // setData(currencies[currency])
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;
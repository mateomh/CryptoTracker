import { createContext, useContext, useEffect, useState } from "react"

interface CryptoContextType {
  currency: string;
  symbol: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const CryptoContextDefault: CryptoContextType = {
  currency: "COP",
  symbol: "#",
  setCurrency: () => {},
}

const Crypto = createContext(CryptoContextDefault);

export const CryptoState = () => {
  return useContext(Crypto);
}

interface CryptoContextProps {
  children: any
}

const CryptoContext:React.FC<CryptoContextProps> = ({children}) => {
  const [currency, setCurrency] = useState("COP");
  const [symbol, setSymbol] = useState("#");

  useEffect(() =>{
    if(currency === "USD") setSymbol("$")
    else if (currency === "COP") setSymbol("#")
  },[currency]);

  return(
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
      {children}
    </Crypto.Provider>
  );

}

export default CryptoContext;


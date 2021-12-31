import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Punklist from "./components/Punklist";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";

function App() {


  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk,setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x2b3392D238d2085d373284B34e53e3A05456a56b&order_direction=asc"
        //"https://testnets.opensea.io/assets/0x2b3392D238d2085d373284B34e53e3A05456a56b/1"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>




        <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )
      }
    </div>
  )
}

export default App;

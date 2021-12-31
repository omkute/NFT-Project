import React, {useEffect,useState} from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./1main.css";

function Main({selectedPunk, punkListData}) {

    const [activePunk,setActivePunk] = useState(punkListData[0]);

    useEffect(() =>{
        setActivePunk(punkListData[selectedPunk]);
    },[punkListData,selectedPunk])

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            
          </div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImgContainer">
            <img
              src=
                {activePunk.owner.profile_img_url}
              alt="ownerimg"
              
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandel">
              <div></div>
              <div className="ownerhandle">@omkute12</div>
            </div>
          </div>
          <div className="ownerLink">
            <img src={instagramLogo} alt="instaLogo" />
          </div>
          <div className="ownerLink">
            <img src={twitterLogo} alt="twitterLogo" />
          </div>
          <div className="ownerLink">
            <img src={moreIcon} alt="moreIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React, { useEffect, useRef, useState } from "react";
import { Container, Button, Col } from "react-bootstrap";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";
import Styles from "./adminpanel.module.scss";
import { ethers } from "ethers";
import erc20abi from "../../assets/ERC20abi.json";
import { textAlign } from "@mui/system";

const AdminPanel = () => {
  const nameForm = useRef(null);

  const [winnerInfo, setWinnerInfo] = useState({
    winnerName: "-",
  });

  const [contractInfo, setContractInfo] = useState({
    address: "-",
    chairperson: "-",
  });

  const [currentAddress, setCurrentAddress] = useState({
    address:"-",
  });

  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );
      // setContractInfo({
      //   address: "-",
      //   chairperson: erc20.chairperson() ,
      // });
    }

    async function fetchCurrentMetamaskAddress() {
      const data = "0xa005965e98ffbee7ef0656d7c199a861c1dc4642";
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const erc20 = new ethers.Contract(data, erc20abi, provider);

      const chairperson = await erc20.chairperson();
      const currentUser = await provider.getSigner().getAddress();
      setContractInfo({
        address: "-",
        chairperson: chairperson,
      });
      // console.log(currentUser);
      setCurrentAddress({
        address: currentUser,
      });
    }
    fetchCurrentMetamaskAddress();
  }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = "0xa005965e98ffbee7ef0656d7c199a861c1dc4642";
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data, erc20abi, provider);

    const chairperson = await erc20.chairperson();

    setContractInfo({
      address: data,
      chairperson: chairperson,
    });
    // alert(e.target.id);
    // alert(chairperson);
  };

  const ActivateStation = async (e) => {
    const form = nameForm.current;

    const data = "0xa005965E98fFbee7Ef0656D7C199a861c1dC4642";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(data, erc20abi, signer);
    await erc20
      .activateStation(`${form["activatePolling"].value}`)
      .catch(function (error) {
        // e.preventDefault();
        alert(`${form["activatePolling"].value}`);
        console.log();
        if (typeof error.data !== "undefined") {
          alert(error.data.message);
        }
      });
  };

  const endElection = async () => {
    const data = "0xa005965E98fFbee7Ef0656D7C199a861c1dC4642";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(data, erc20abi, signer);
    await erc20.endElection().catch(function (error) {
      if (typeof error.data !== "undefined") {
        alert(error.data.message);
      }
    });
  };

  const announceWinner = async () => {
    const data = "0xa005965E98fFbee7Ef0656D7C199a861c1dC4642";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(data, erc20abi, signer);
    const winnerInfo = await erc20.winnerName().catch(function (error) {
      if (typeof error.data !== "undefined") {
        alert(error.data.message);
      }
    });
    setWinnerInfo({
      winnerName: ethers.utils.parseBytes32String(winnerInfo),
    });
    // console.log( ethers.utils.parseBytes32String(winnerInfo));
    // console.log(winnerInfo);
  };

  return (
    <div className={Styles.adminPanel}>
      {currentAddress.address ===
      "0x303C91AB866e9672dDea2b6b4d3715D61E651305" ? (
        <Layout>
          <DetailPage breadCrumbClass={"h-25"} pageTitle={"ADMIN PANEL"}>
            <Container>
              <form ref={nameForm} action="#">
                <div className={Styles.fieldDivs}>
                  <h1>Activate Polling Station</h1>

                  <input placeholder="Address" name="activatePolling" type="text" />
                  <br/>
                  <Button variant="primary" onClick={ActivateStation}>
                    Activate
                  </Button>
                </div>

                <div className={Styles.fieldDivs }>
                  <h1>End Election</h1>
                  <Button variant="primary" onClick={endElection}>
                    End
                  </Button>
                </div>

                <div className={Styles.fieldDivs}>
                  <h1>Announce</h1>

                  <Button variant="primary" onClick={announceWinner}>
                    Announce
                  </Button>
                  <h1>{"Winner: " +winnerInfo.winnerName}</h1>
                </div>
                <div className={Styles.fieldDivs}>
                  <h1>Chairperson</h1>

                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <h1>{"Chair Person Address: " + contractInfo.chairperson}</h1>
                </div>
              </form>
            </Container>
          </DetailPage>
        </Layout>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h6>
            YOU DO NOT HAVE PERMISSION TOO ACCESS THIS PAGE. PLEASE LOGIN AS
            CHAIRPERSON THROUGH METAMASK
            {contractInfo.chairperson}
          </h6>
          <img
            className={Styles.warningImage}
            src="images/adminpanel/warning.webp"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

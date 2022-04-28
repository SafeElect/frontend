import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";
import Styles from "./adminpanel.module.scss";
import { ethers } from "ethers";
import erc20abi from "../../assets/ERC20abi.json";

const AdminPanel = () => {
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    chairperson: "-",
  });

  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );
    }
  }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = "0x5fc27a76AcE2Af24332495d01b77b9eFF4768114";
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

  return (
    <div className={Styles.adminPanel}>
      <Layout>
        <DetailPage breadCrumbClass={"h-25"}>
          <Container>
            <form action="#">
              <div className="d-flex">
                <h1>Activate Polling Station</h1>

                <input type="text" />

                <button>Submit</button>
              </div>
              <div className="d-flex">
                <h1>End Election</h1>

                <button>End</button>
              </div>

              <div className="d-flex">
                <h1>Announce</h1>

                <button>Announce</button>
              </div>
              <div className="d-flex">
                <h1>Chairperson</h1>

                <button onClick={handleSubmit}>Get</button>
                <p>{contractInfo.chairperson}</p>
              </div>
            </form>
          </Container>
        </DetailPage>
      </Layout>
    </div>
  );
};

export default AdminPanel;

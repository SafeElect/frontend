import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";
import Styles from "./vote.module.scss";
import erc20abi from "../../assets/ERC20abi.json";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/router";

function Vote() {
  const [showVote, setVoteShow] = useState(false);
  const [currentIndex, setIndex] = useState();

  const [voterData, setVoterData] = useState({});

  const handleVoteClose = () => setVoteShow(false);
  const handleVoteShow = (e) => {
    setVoteShow(true);
    setIndex(e.target.id);
  };

  const [showTutorial, setTutorialShow] = useState(false);

  const handleTutorialClose = () => setTutorialShow(false);
  const handleTutorialShow = () => setTutorialShow(true);

  const [error, setError] = useState();

  const [contractInfo, setContractInfo] = useState({
    address: "-",
    chairperson: "-",
  });

  const router = useRouter();

  const [items, setItems] = useState([]);



  useEffect(() => {

    if (
      typeof localStorage.items !== "undefined" &&
      typeof localStorage.getItem("items") !== null
    ) {
      const itemsTemp = JSON.parse(localStorage.getItem("items") + "");
  
      setVoterData(itemsTemp);
      // console.log(voterData);
    }
    
    if (
      typeof localStorage.items !== "undefined" &&
      typeof localStorage.getItem("success") !== null
    ) {
      // console.log(localStorage.items);
      console.log(localStorage.getItem("success"));
      if (localStorage.getItem("success") === "false") {
              
        router.push({
          pathname: `/login`,
        });
      }
    } else {
      
      router.push("/login");
    }
  }, []);

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
    const data = "0xa005965E98fFbee7Ef0656D7C199a861c1dC4642";
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
  const vote = async (e) => {
    const data = "0xa005965E98fFbee7Ef0656D7C199a861c1dC4642";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(data, erc20abi, signer);
    await erc20.vote(currentIndex).catch(function (error: any) {
      alert(currentIndex);
      if (typeof error.data !== "undefined") {
        alert(error.data.message);
        setError(error.data.message);
      }
    });
    handleVoteClose();
  };

  return (
    <div className={Styles.votingPage}>
      <Container style={{ height: "100%" }}>
        {/* <h1>{router.query.success}</h1> */}
        <div className={Styles.topInfo}>
          <h1>Voter: { voterData.first + " " + voterData.last}</h1>
          <h2>Gender: {voterData.gender}</h2>
          <h1>City: {voterData.bcity}</h1>
        </div>
        <Container className={Styles.tutorial}>
          <Button
            variant="primary"
            onClick={handleTutorialShow}
            className={Styles.tutorialButton}
          >
            Tutorial
          </Button>
          <h1>{error}</h1>
          <Modal show={showTutorial} onHide={handleTutorialClose}>
            <Modal.Header closeButton>
              <Modal.Title>Voting Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.tutorialBody}>
              <h1>Step 1:</h1>
              <p>
                Go over all of the candidates and their respective information.
              </p>

              <h1>Step 2:</h1>
              <p>Press the Vote Button after you have made your selection.</p>
              <img src="/images/vote/tutorial/vote.PNG" alt="" />

              <h1>Step 3:</h1>
              <p>
                A window will pop up asking you to confirm your selection. If
                you are certain about your vote, press the Vote button. Else,
                press cancel.
              </p>
              <img src="/images/vote/tutorial/confirm.PNG" alt="" />

              <h1>Step 4:</h1>
              <p>
                A Metamask window will open and will ask you to Confirm or
                Reject.
              </p>
              <img
                src="/images/vote/tutorial/metamask.PNG"
                alt=""
                style={{ width: "100%" }}
              />
              <img
                src="/images/vote/tutorial/confirmButtons.PNG"
                alt=""
                style={{ width: "100%" }}
              />

              <h1>Step 5:</h1>
              <p>After pressing confirm, you can leave the pooling booth.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleTutorialClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <form>
          <Row className={Styles.votingPageRow}>
            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>Imran Khan</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br />
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ptiFlag.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="0"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img
                        src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg"
                        alt=""
                      />
                      <h1>Do you want to vote for Imran Khan?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="0">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>

            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>Imran Khan</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br />
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ptiFlag.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="1"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img
                        src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg"
                        alt=""
                      />
                      <h1>Do you want to vote for Imran Khan?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="0">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={Styles.votingPageRow}></Row>
        </form>
      </Container>
    </div>
  );
}

export default Vote;

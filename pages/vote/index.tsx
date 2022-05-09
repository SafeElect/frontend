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
  const [showVote, setVoteShow] = useState();
  // const [currentIndex, setIndex] = useState(0);
  let currentIndex = "0";

  const [voterData, setVoterData] = useState({});

  const handleVoteClose = () => setVoteShow(false);

  const handleVoteShow = (e) => {
    setVoteShow(e.target.id);
    // setIndex(e.target.id);
    currentIndex = e.target.id;
    alert(currentIndex);
  };
  const tempFunc = (e) => {
    alert(e.target.id + " in temp");
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
      // console.log(localStorage.getItem("success"));
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
    await erc20
      .vote(currentIndex)
      .catch(function (error: any) {
        // alert(currentIndex);
        if (typeof error.data !== "undefined") {
          // alert(error.data.message);
          setError(error.data.message);
          alert(error.data.message + ". Please call the polling agent to assist you");
          return Promise.reject("ERROR IN BLOCKCHAIN CALL");
        }
      })
      .then(function () {
        console.log(error);

        //backend stuff
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/addstat", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        console.log(voterData);

        xhr.send(JSON.stringify({
          gender: voterData.gender,
          age: 2022-voterData.bday.slice(0,4),
          bcity: voterData.bcity,
          area: voterData.address,
          votedFor: "Team "+(currentIndex+1),
        }));

        router.push({
          pathname: `/logout`,
        });
      });
    handleVoteClose();
  };

  return (
    <div className={Styles.votingPage}>
      <Container style={{ height: "100%" }}>
        {/* <h1>{router.query.success}</h1> */}
        <div className={Styles.topInfo}>
          <h1>Voter: {voterData.first + " " + voterData.last}</h1>
          <h2>Gender: {voterData.gender}</h2>
          <h1>City: {voterData.bcity}</h1>
        </div>
        <h5>{error}</h5>
        <Container className={Styles.tutorial}>
          <Button
            variant="primary"
            onClick={handleTutorialShow}
            className={Styles.tutorialButton}
          >
            Tutorial
          </Button>

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
                  src="https://i.ibb.co/f9FfCSh/Team1.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>Mithril</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Cloud-Based Web Application
                        Security Network
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
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
                    show={showVote === "0"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/f9FfCSh/Team1.jpg" alt="" />
                      <h1>Do you want to vote for Mithril?</h1>
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
                  src="https://i.ibb.co/zVfPYHB/Team2.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>SafeElect</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> A Reliable And Sustainable
                        Blockchain-Based Electronic Voting System
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
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
                    show={showVote === "1"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/zVfPYHB/Team2.jpg" alt="" />
                      <h1>Do you want to vote for SafeElect?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="1">
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
                  src="https://i.ibb.co/zr9fPMg/Team3.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>EventEco</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Event Management System For
                        Global Sustainability Issues (Eventeco)
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="2"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "2"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/zr9fPMg/Team3.jpg" alt="" />
                      <h1>Do you want to vote for EventEco?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="2">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={Styles.votingPageRow}>
            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/2WxkW7s/Team4.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>AVIR </Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> VR-BASED FIGHTING GAME
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="3"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "3"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/2WxkW7s/Team4.jpg" alt="" />
                      <h1>Do you want to vote for AVIR ?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="3">
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
                  src="https://i.ibb.co/xjNpXVB/Team5.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>Intruvision</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> A Low-Level Network Traffic
                        Analysis Tool
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="4"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "4"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/xjNpXVB/Team5.jpg" alt="" />
                      <h1>Do you want to vote for Intruvision?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="4">
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
                  src="https://i.ibb.co/Gx2vtfD/Team6.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>No Available Quota</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Blockchain Based Digital Content
                        Ownership And Marketplace
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="5"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "5"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/Gx2vtfD/Team6.jpg" alt="" />
                      <h1>Do you want to vote for No Available Quota?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="5">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={Styles.votingPageRow}>
            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/mRg1Qcy/Team7.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>TraackTrails </Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> A Social Network Application For
                        Outdoor Activities (Tracktrails)
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="6"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "6"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/mRg1Qcy/Team7.jpg" alt="" />
                      <h1>Do you want to vote for TraackTrails?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="6">
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
                  src="https://i.ibb.co/xjNpXVB/Team5.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>SEMT</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Cey Defence Software Engineering
                        Management Tool
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="7"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "7"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/xjNpXVB/Team5.jpg" alt="" />
                      <h1>Do you want to vote for SEMT?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="7">
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
                  src="https://i.ibb.co/ysJg11s/Team9.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>SecurePay</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Secure Use Of Cloud Storage With
                        Usb Flash Drive
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="8"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "8"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/ysJg11s/Team9.jpg" alt="" />
                      <h1>Do you want to vote for No Available SecurePay?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="8">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={Styles.votingPageRow}>
            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/bPzr7RT/Team10.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>RecycleIT</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Recycling Search System
                        (Recycleit)
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="9"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "9"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/bPzr7RT/Team10.jpg" alt="" />
                      <h1>Do you want to vote for RecycleIT?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="9">
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
                  src="https://i.ibb.co/KKtm65W/Team11.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>Left-Over</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Leftover Information System
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="10"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "10"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/KKtm65W/Team11.jpg" alt="" />
                      <h1>Do you want to vote for Left-Over?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="10">
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
                  src="https://i.ibb.co/wR9PXb4/Team12.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>PlantC</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Plant Recognition System
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="11"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "11"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/wR9PXb4/Team12.jpg" alt="" />
                      <h1>Do you want to vote for No Available PlantC?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="11">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={Styles.votingPageRow}>
            <Col className={Styles.cardCol}>
              <Card style={{ width: "28rem" }} className={Styles.card}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/zxBzy2j/Team13.jpg"
                  className={Styles.mainImage}
                />

                <Card.Body className={Styles.cardBody}>
                  <Card.Title>IoTeam</Card.Title>
                  <div className="d-flex">
                    <Col xl={{ span: 9 }} lg={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Discription: <br></br> Smart Iot Twin
                        {/* <br />
                        Party: Pakistan Tehreek-e-Insaaf */}
                        {/* <br /> */}
                        {/* City: Mianwali */}
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }} lg={{ span: 3 }}>
                      <img
                        src="/images/vote/ctisLogo.png"
                        alt=""
                        className={Styles.partySymbol}
                      />
                    </Col>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleVoteShow}
                    className={Styles.votingButton}
                    id="9"
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal
                    show={showVote === "9"}
                    onHide={handleVoteClose}
                    className={Styles.confirmVoteModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.ibb.co/zxBzy2j/Team13.jpg" alt="" />
                      <h1>Do you want to vote for IoTeam?</h1>
                    </Modal.Body>
                    <Modal.Footer className={Styles.votingConfirmModalFooter}>
                      <Button variant="secondary" onClick={handleVoteClose}>
                        CLOSE
                      </Button>
                      <Button variant="primary" onClick={vote} id="9">
                        VOTE
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/*MODEL FOR VOTING*/}
                </Card.Body>
              </Card>
            </Col>
            <Col className={Styles.cardCol}></Col>
            <Col className={Styles.cardCol}></Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default Vote;

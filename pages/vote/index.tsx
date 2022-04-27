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

function Vote() {
  const [showVote, setVoteShow] = useState(false);

  const handleVoteClose = () => setVoteShow(false);
  const handleVoteShow = () => setVoteShow(true);

  const [showTutorial, setTutorialShow] = useState(false);

  const handleTutorialClose = () => setTutorialShow(false);
  const handleTutorialShow = () => setTutorialShow(true);

  const [error, setError] = useState();


  const [contractInfo, setContractInfo] = useState({
    address: "-",
    tokenName: "-",
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
    const data = "0xef28cf98a12b789180833067fac05d1065d4adb3";
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data, erc20abi, provider);

    const chairperson = await erc20.chairperson();

    setContractInfo({
      address: data,
      tokenName: chairperson,
    });
    // alert(e.target.id);
    alert(chairperson);
  };
  const vote = async (e) => {
    const data = "0xef28cf98a12b789180833067fac05d1065d4adb3";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(data, erc20abi, signer);
    await erc20.vote(e.target.id).catch(function (error) {
       alert(error.data.message);
      setError(error.data.message);
    });
    handleVoteClose();
  };

  return (
    <div className={Styles.votingPage}>
      <Container style={{height:"100%"}}>
        <Container className={Styles.tutorial}>
          <Button variant="primary" onClick={handleTutorialShow}>
            Tutorial
          </Button>
          <h1>{contractInfo.tokenName}</h1>
          <Modal show={showTutorial} onHide={handleTutorialClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleTutorialClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleTutorialClose}>
                Save Changes
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
                    <Col xl={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br/>
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }}>
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
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal show={showVote} onHide={handleVoteClose} className={Styles.confirmVoteModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg" alt="" />
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
                    <Col xl={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br/>
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }}>
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
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal show={showVote} onHide={handleVoteClose} className={Styles.confirmVoteModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg" alt="" />
                      <h1>Do you want to vote for Imran Khan?</h1> 
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
          </Row>

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
                    <Col xl={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br/>
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }}>
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
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal show={showVote} onHide={handleVoteClose} className={Styles.confirmVoteModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg" alt="" />
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
                    <Col xl={{ span: 9 }} className="d-flex">
                      <Card.Text>
                        Division: NA-257
                        <br />
                        Party: Pakistan Tehreek-e-Insaaf
                        <br/>
                        City: Mianwali
                      </Card.Text>
                    </Col>
                    <Col xl={{ span: 3 }}>
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
                  >
                    Vote
                  </Button>

                  {/*MODEL FOR VOTING*/}
                  <Modal show={showVote} onHide={handleVoteClose} className={Styles.confirmVoteModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Your Vote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/6252e18170380e179cf9f3d5.jpg" alt="" />
                      <h1>Do you want to vote for Imran Khan?</h1> 
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
          </Row>

        </form>
      </Container>
    </div>
  );
}

export default Vote;

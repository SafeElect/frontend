import Head from "next/head";
import Layout from "../../src/components/Layout/Layout";
import styles from "../../styles/Home.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Slide } from "@mui/material";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import "reactjs-popup/dist/index.css";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const VotingPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 5rem 0rem;
}
`;
const CandidateCard = styled.div`
  flex: 1 0 50%;
  margin: 5px;
  height: 250px;
  max-width: 350px;
`;
const CandidateImage = styled.div`
  flex: 1 0 50%;
  img {
    max-width: 250px;
  }
`;
const DialogBox = styled.div`
  .MuiDialogContent-root {
    display: flex;
  }
`;
const candidates = {
  cd1: "Bill Gates",
  cd2: "Tim Cook",
  cd3: "Jeff Bezos",
  cd4: "Elon Musk",
};

function vote() {
  const [open, setOpen] = React.useState(false);
  const [selectedCandidate, setSelectedCandidate] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleVote = () => {
    //TODO
    //send voting data to BE
    //selectedCandidate has the candidate key
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <DetailPage breadCrumbClass="header-height" pageTitle=" ">
          <div className={styles.homePageContainer}>
            <Head>
              <title>Safe Elect</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/vote.png" />
            </Head>
            <VotingPanel>
              {Object.keys(candidates).map((key, i) => (
                <CandidateCard>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                      onClick={() => {
                        setSelectedCandidate(key);
                        handleClickOpen();
                      }}
                    >
                      <CardMedia
                        component="img"
                        width="180"
                        height="150px"
                        image={"/images/vote/" + key + ".jpeg"}
                        alt={key}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {candidates[key]}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </CandidateCard>
              ))}
            </VotingPanel>
            <Dialog
              open={open}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogBox>
                <DialogContent>
                  <CandidateImage>
                    <img
                      src={"/images/vote/" + selectedCandidate + ".jpeg"}
                      alt=""
                    />
                  </CandidateImage>
                  <DialogContentText id="alert-dialog-slide-description">
                    Are you sure that you want to vote for{" "}
                    {candidates[selectedCandidate]}? Once you have voted, the
                    action will be irreversible.
                  </DialogContentText>
                </DialogContent>
              </DialogBox>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Link href="/logout">
                  <Button onClick={handleVote}>Vote</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </DetailPage>
      </Layout>
    </>
  );
}

export default vote;

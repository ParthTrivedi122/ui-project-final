import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from "./Carousel";
import Footer from "./footer";

const App = () => {
  return (
    <Box style={{ backgroundColor: "#f6f6f6" }}>
      <Navbar />
      <Carousel img1={"img/img1.jpg"} img2={"img/img2.jpg"} img3={"img/img3.jpg"} /><br />
      <div style={{
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "HandwritingFont, cursive",
        textTransform: "uppercase",
        color: "#333",
        fontWeight: "bold",
        textDecoration: "underline",
        padding: "10px",
        backgroundColor: "#FFD700",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Trending Products</div>

      <hr style={{ "width": "90%" }} /><br />
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card img={"img/image1.jpg"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          
        </Grid>
      </div>
      <div style={{
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "HandwritingFont, cursive",
        textTransform: "uppercase",
        color: "#333",
        fontWeight: "bold",
        textDecoration: "underline",
        padding: "10px",
        backgroundColor: "#FFD700",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Outdoor Products</div>

      <hr style={{ "width": "90%" }} /><br />
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card />
          </Grid>
          
        </Grid>
      </div>
      <div style={{
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "Times new roman",
        textTransform: "uppercase",
        color: "#333",
        fontWeight: "bold",
        textDecoration: "underline",
        padding: "10px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Special Editions</div>

      <hr style={{ "width": "90%" }} /><br />
      <div style={{"marginTop":"20px"}}>
      <Footer/>
      </div>
    </Box>
  );
}

export default App;

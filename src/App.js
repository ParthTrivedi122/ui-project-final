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
  const styles = {
    centerGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <Box style={{ backgroundColor: "#f6f6f6" }}>
      <Navbar />
      <Carousel img1={"img/img1.jpg"} img2={"img/img2.jpg"} img3={"img/img3.jpg"} /><br />
      <div style={{
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "Times new roman",
        textTransform: "uppercase",
        color: "#333",
        fontWeight: "bold",
        
        padding: "10px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Trending Products</div>

      <hr style={{ "width": "90%" }} /><br />
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={4} className={styles.centerGrid}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card img={"img/image1.jpg"} title={"Roadster"} content={"The Lifestyle Co. Men Slim Fit Pure Cotton Cargos"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image2.jfif"} title={"HERE&NOW"} content={"Men Black Slim Fit Casual Shirt"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image3.jfif"} title={"SASSAFRAS"} content={"Black High Neck Cropped Top"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image4.jpg"} title={"BULLMER"} content={"Graphic Printed Oversized Cotton T-shirt"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image5.jpg"} title={"Antheaa"} content={"Women Blue & Yellow Floral Print A-Line Top"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image6.jpg"} title={"Huetrap"} content={"Men Beige & Black Typography Printed Sustainable T-shirt"}/>
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
        
        padding: "10px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Outdoor Products</div>

      <hr style={{ "width": "90%" }} /><br />
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image7.jpg"} title={"Roadster"} content={"Women Coral Pink Solid Hooded Sweatshirt"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image8.jpg"} title={"Chemistry"} content={"Raglan Sleeves Terry Pullover"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image9.jpg"} title={"H&M"} content={"Jumper"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image10.jpg"} title={" Harbour"} content={"Women Blue Embroidered Pullover Sweater"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image11.jpg"} title={"BRINNS"} content={"Fleece Tailored Jacket"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image12.jpg"} title={"SASSAFRAS"} content={"Men & Women Fluorescent Green Blessed Print V Neck shirt"}/>
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
        
        padding: "10px",
        borderRadius: "8px",
        margin: "20px auto",
        width: "50%",
      }}>Special Editions</div>
       <hr style={{ "width": "90%" }} /><br />
      <div style={{ margin: "0 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image13.jpg"} title={"Anayna"} content={" Pink Ethnic Motifs Printed Tiered Pure Cotton A-Line Midi Dress"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image14.jpg"} title={"Ishin"} content={"Off White Ethnic Motifs A-Line Dress"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image15.jpg"} title={"Sangria"} content={"Orange Ethnic Motifs Printed Cotton Wrap Ethnic Dress"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image16.jpg"} title={"Sangria"} content={"Floral Printed Puffed Sleeves Cotton Wrap Midi Ethnic Dress"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image17.jpg"} title={"WROGN"} content={"Men Coffee Brown Solid Slim Fit Lightweight Tailored Jacket"}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card img={"img/image18.jpg"} title={"The Indian Garage Co"} content={"Men White & Teal Blue Slim Fit Striped Casual Shirt"}/>
          </Grid>
        </Grid>
      </div>

      <div style={{"marginTop":"20px"}}>
      <Footer/>
      </div>
    </Box>
  );
}

export default App;

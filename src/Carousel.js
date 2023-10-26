import React, { useState, useEffect } from "react";
import { Grid, Card, Button, Typography } from '@mui/material';

const Carousel = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: props.img1,
      caption: "Image 1",
    },
    {
      image: props.img2,
      caption: "Image 2",
    },
    {
      image: props.img3,
      caption: "Image 3",
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically advance to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Grid container spacing={3}>
        {slides.map((slide, index) => (
          <Grid key={index} item xs={12} style={{ display: index === activeSlide ? "block" : "none" }}>
            <Card>
              <img
                src={slide.image}
                alt={slide.caption}
                style={{ width: "100%", objectFit: "contain", maxHeight: "80vh" }}
              />
              <Typography variant="h6">{slide.caption}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={prevSlide} style={{ marginRight: "20px" }}>Previous</Button>
        <Button onClick={nextSlide}>Next</Button>
      </div>
    </div>
  );
};

export default Carousel;

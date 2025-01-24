/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function ImgOverlay({ image, text, height, titlePartOne, titlePartTwo }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card className="bg-dark text-white" style={{ marginTop: "100px" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: isMobile ? "150px" : "300px", 
          borderRadius:"4px"
        }}
      >
        <img
          src={image}
          alt="Card image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 35, 0.1), rgba(2, 15, 35, .9))`,
          }}
        >
          <Card.Title style={{ color: "white" }}>
            <Typography
              fontFamily="gotham"
              variant="h3"
              style={{
                textAlign: "center",
                display: "block",
                fontSize: "35px",
                lineHeight: "46px",
                letterSpacing: ".01em",
                fontWeight: 800,
                marginTop: isMobile ? "60px" : "100px",
              }}
            >
              {titlePartOne}{" "}
              <span
                style={{
                  WebkitTextStroke: "1px",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {titlePartTwo}
              </span>
            </Typography>
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text color="primary">{text}</Card.Text>
        </div>
      </div>
    </Card>
  );
}

export default ImgOverlay;

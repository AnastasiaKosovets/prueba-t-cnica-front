import React, { useEffect } from "react";
import "./ProductCard.css";
import Card from "react-bootstrap/Card";

export const ProductCard = ({
  name
}) => {
  useEffect(() => {
  }, []);

  const notFound = `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`;
  return (
    <div className="cardPrD">
      <Card className="productCardDesign" style={{ width: "17rem" }}>
        <Card.Body>
          <Card.Text className="cardText">{name}</Card.Text>
          {/* <Card.Text className="cardText"> */}
          {/* <Card.Img
          variant="top"
          className="pictureDesign"
          style={{ width: "12rem" }}
          src={ortodonciaImg}
          alt={id}
        />{treatmentName}</Card.Text> */}
        </Card.Body>
      </Card>
      {/* <div className="imageDesign">
                <img className="pictureDesign" src={image !== "" ? image : notFound} alt={id} />
            </div>
            <div className="cardText">{name}</div>
            <div className="cardText">{species}</div> */}
    </div>
  );
};

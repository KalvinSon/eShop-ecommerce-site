import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {
  electronics,
  mens_accessories,
  womens_accessories,
  home_appliances,
} from "../products";

import "../styles/Screen/Home.css";

export default function Home() {
  const options = {
    loop: false,
    slideSpeed: 1000,
    margin: 10,
    nav: true,
    singleItem: true,
    transitionStyle: "fade",
    navText: [
      "<i class='fa fa-2x fa-angle-left'></i>",
      "<i class='fa fa-2x fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <h1 className="pt-5"> Electronics Accessories </h1>
      <Row>
        <OwlCarousel className="owl-theme" {...options}>
          {electronics.map((electronic) => (
            <Col>
              <Product product={electronic} />
            </Col>
          ))}
        </OwlCarousel>
      </Row>

      <h1 className="pt-5">Home Appliances</h1>
      <Row>
        <OwlCarousel className="owl-theme" {...options}>
          {home_appliances.map((home_appliance) => (
            <Col>
              <Product product={home_appliance} />
            </Col>
          ))}
        </OwlCarousel>
      </Row>

      <h1 className="pt-5">Men's Accessories</h1>
      <Row>
        <OwlCarousel className="owl-theme" {...options}>
          {mens_accessories.map((mens_accessory) => (
            <Col>
              <Product product={mens_accessory} />
            </Col>
          ))}
        </OwlCarousel>
      </Row>

      <h1 className="pt-5">Women's Accessories</h1>
      <Row>
        <OwlCarousel className="owl-theme" {...options}>
          {womens_accessories.map((womens_accessory) => (
            <Col>
              <Product product={womens_accessory} />
            </Col>
          ))}
        </OwlCarousel>
      </Row>
    </>
  );
}
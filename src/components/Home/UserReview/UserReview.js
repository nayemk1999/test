import React from "react";
import { Card, CardGroup } from "react-bootstrap";

export default function UserReview() {
  return (
    <CardGroup className="mt-5">
      <Card>
        <Card.Img
          style={{ height: "300px", width: "300px" }}
          variant="top"
          src="http://imoblar.com/site/img/demo/profile.jpg"
        />
        <Card.Body>
          <Card.Title style={{ color: "tomato" }}>Reviews</Card.Title>
          <Card.Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          style={{ height: "300px", width: "300px" }}
          variant="top"
          src="http://themesground.com/modern/demo/HTML/img/profileimg.png"
        />
        <Card.Body>
          <Card.Title style={{ color: "tomato" }}>Reviews</Card.Title>
          <Card.Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          style={{ height: "300px", width: "300px" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title style={{ color: "tomato" }}>Reviews</Card.Title>
          <Card.Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

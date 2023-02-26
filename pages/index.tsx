import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ClientCard from "../components/clientCard/ClientCard";
import _Navbar from "@/components/navbar/Navbar";
import Introduction from "@/components/introduction/Introduction";
import Footer from "@/components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "@/components/card/Card";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });
const clients = [
  {
    name: "Client 1",
    imageUrl: "/client1.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Client 2",
    imageUrl: "/client2.jpeg",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Client 3",
    imageUrl: "/client3.jpeg",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#ced4da" }}>
        <_Navbar
          login="Log In"
          signup="Sign Up"
          Useref={"/"}
          Useref2={"/login"}
        />
        <Introduction />
        <Container className="ContainerSet Container">
          <br />
          <br />
          <Row className="cards">
            <Col md={6}>
              <Cards
                title="Create Events"
                src={"/createEvent.jpeg"}
                detail="Create Your Own Event in Our Website"
                buttoninfo="Create Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="manageEvent"
                src={"/createEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="invitationEvent"
                src={"/invitationEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
            <Col md={6}>
              <Cards
                title="rsvpEvent"
                src={"/rsvpEvent.jpeg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                Useref={"/login"}
              />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <h2>Our Clients</h2>
          <div
            style={{
              backgroundImage: "url('/loginback.jpg')",
              backgroundSize: "cover",
              padding: 100,
            }}
          >
            {clients.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                imageUrl={client.imageUrl}
                description={client.description}
              />
            ))}
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}

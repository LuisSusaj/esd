import React, { lazy } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonationForm from "../../components/DonationsForm";
import DonationsContainer from "../../components/DonationsContainer";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const stripePromise = loadStripe("your_stripe_publishable_key");
const Container = lazy(() => import("../../common/Container"));

const Donations: React.FC = () => {
  return (
    <Container>
      <h2>Support Us</h2>
      <Elements stripe={stripePromise}>
        <DonationsContainer />
        {/* <DonationForm /> */}
      </Elements>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Donations;

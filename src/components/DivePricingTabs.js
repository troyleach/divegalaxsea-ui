import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./DivePricingTabs.css";
import "react-tabs/style/react-tabs.css";
import { Grid } from "@material-ui/core";

export default () => (
  <Tabs className="tab-container">
    <TabList>
      <Tab>Diving</Tab>
      <Tab>Training</Tab>
      <Tab>Policies</Tab>
    </TabList>

    <TabPanel>
      <Grid container spacing={4} justify="center">
        <Grid item md={5} xs={12} className="fish-diver-container">
          <img
            className="fish-diver"
            src="fish-diver.jpg"
            alt="Fish and Diver"
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <div className="dive-pricing-paragraphs">
            <p>
              Scuba diving with Dive GalaxSea in Cozumel is the most flexible
              scuba diving excursion you'll ever enjoy. We cater to each
              individual diver by giving them the most exciting, safe, and
              customizable dive tour available on the island. Our guests come
              first as we venture into Cozumel’s coral reefs to explore the
              mesmerizing dive sites. We are here to help you spend your Cozumel
              vacation the way you like. For a detailed description of each
              Cozumel coral reef site and dive site, check out our Interactive
              Cozumel Reef Map. Cozumel reefs and shallow coral formations
              extend along the west coast of the magnificent island, from the
              southern tip to just south of the art-filled, friendly town of San
              Miguel.
            </p>
            <br />
            <p>
              Cozumel’s two main coral reef systems are Colombia Reef and
              Palancar Reef. Both are easily reachable, starting around a depth
              of 30 feet (9 meters). Paradise Reef offers Cozumel snorkelers and
              Cozumel scuba divers a much more accessible coral and limestone
              formation to explore as shallow as 6 - 30 feet (2-9 meters). Come
              safely explore these reefs with our trusted dive team at Dive
              GalaxSea!
            </p>
          </div>
        </Grid>
      </Grid>
    </TabPanel>
    <TabPanel>
      <Grid container spacing={4} justify="center">
        <Grid item md={5} xs={12}>
          <div className="training-paragraphs">
            <p>
              Our SSI dive courses are available across all levels and are
              designed to suit your needs. From first-time divers to
              professional divers, you will learn safety and skills under the
              careful care of our experienced SSI Certified Dive Instructors. We
              can also help certified divers to develop further skills and
              upgrade your certificate level.
            </p>
            <br />
            <p>
              Our training courses include online and offline access to SSI
              electronic training materials, including quizzes, and all
              necessary equipment (see below). Our dive professionals are
              available via email to answer any questions you might have during
              your e-learning and will also conduct an academic review prior to
              in-person final exams. Upon successful completion of your course,
              you will receive your own personal e-logbook and e-certification
              cards. No more forgetting your logbook and leaving your c-card in
              your other wallet - they travel with you on your phone, tablet, or
              laptop!
            </p>
          </div>
        </Grid>
        <Grid item md={5} xs={12} className="diver-path-container">
          <img
            className="diver-career-path"
            src="diver-career-path.jpg"
            alt="Diving career path"
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <div className="training-paragraphs">
            <p>
              Our dive courses go beyond all other dive operators to ensure the
              most comfortable, interactive, fun-filled, and safety-oriented
              training for both new and experienced divers. Courses are offered
              on a private or semi-private basis, fully tailored to your
              vacation schedule. Our goal is to create a competent, aware, and
              knowledgeable diver. Come Dive Cozumel and see for yourself what
              the excitement is about when diving with Dive GalaxSea!
            </p>
          </div>
        </Grid>
        <Grid item md={5} xs={12} className="teacher-training-container">
          <img
            className="training-coach"
            src="teaching.jpg"
            alt="Teacher training a student"
          />
        </Grid>
      </Grid>
    </TabPanel>
    <TabPanel>
      <Grid container spacing={4} justify="center">
        <Grid item md={5} xs={12}>
          <div className="policies-paragraph">
            <h2>Dive Galaxsea policies:</h2>
            <br />
            <p>
              Dive Galaxsea can't thank you enough for your business. We are
              committed to providing a premium diving and snorkeling experience.
              To continue to provide you with the quality of service that is
              expected, please understand and respect our policies as well as
              those of the National Coral Reef Park of Cozumel.
            </p>
          </div>
        </Grid>
        <Grid item md={5} xs={12} className="galaxsea-park-rules-container">
          <div className="marine-park-rules">
            <h2>Marin Park Rules & Regulations:</h2>
            <br />
            <img
              className="galaxsea-park-rules"
              src="cozumel-marine-park-rules.jpg"
              alt="Cozumel Park Rules"
            />
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <div className="policies-deposit-rules">
            <h2>Deposits:</h2>
            <br />
            <p>
              A $50 US per person deposit is required at the time of booking,
              payable via PayPal. The remaining balance is due in full prior to
              departure. The balance can be paid via PayPal or in cash in US
              dollars or Mexican pesos as determined by the current exchange
              rate. Service charges assessed by PayPal, if any, are payable by
              the client and will be added to the balance due. Different rates
              and deposit policies apply to private charters and groups.
            </p>
            <br />
            <h2> Refunds and Cancellations:</h2>
            <br />
            <p>
              Any dive or snorkel trip that is cancelled due to weather
              conditions and cannot be rescheduled is 100% refundable.
              Cancellations may be due to port closure ordered by the Harbor
              Master, inability of a cruise ship passengers to disembark, or
              unsafe conditions as determined by the boat captain or Dive
              GalaxSea. In the event of weather cancellations, every effort will
              be made to reschedule.
            </p>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <div className="policies-deposit-rules">
            <h2>Individual Cancellations: </h2>
            <br />
            <p>
              48 hours prior to departure - 100% refund 24-48 hours prior to
              departure - 50% refund Less than 24 hours or "No Show" - NO REFUND
              Please note that after departure, no refunds will be issued due to
              sea sickness, inability to equalize, or for any other reason the
              client opts not to dive or snorkel.
            </p>
            <br />
            <h2>
              Dive GalaxSea reserves the right to refuse service with NO refunds
              to any client who:
            </h2>
            <br />
            <p>
              Fails to comply with the Marine Park Rules and Regulations Appears
              to be under the influence of alcohol and/or drugs Otherwise
              jeopardizes the health and safety of themselves, other clients,
              staff, and/or crew members.
            </p>
          </div>
        </Grid>
      </Grid>
    </TabPanel>
  </Tabs>
);

// Dive GalaxSea reserves the right to refuse service with NO refunds to any client who:

// Fails to comply with the Marine Park Rules and Regulations
// Appears to be under the influence of alcohol and/or drugs
// Otherwise jeopardizes the health and safety of themselves, other clients, staff, and/or crew members.

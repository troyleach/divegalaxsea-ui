import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./DivePricingTabs.css";
import "react-tabs/style/react-tabs.css";
import { Grid } from "@material-ui/core";
import PricingTable from "./PricingTable";

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
          <div className="p-one">
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
      <h3>
        Our SSI dive courses are available across all levels and are designed to
        suit your needs. From first-time divers to professional divers, you will
        learn safety and skills under the careful care of our experienced SSI
        Certified Dive Instructors. We can also help certified divers to develop
        further skills and upgrade your certificate level.
      </h3>
      <h3>
        Our training courses include online and offline access to SSI electronic
        training materials, including quizzes, and all necessary equipment (see
        below). Our dive professionals are available via email to answer any
        questions you might have during your e-learning and will also conduct an
        academic review prior to in-person final exams. Upon successful
        completion of your course, you will receive your own personal e-logbook
        and e-certification cards. No more forgetting your logbook and leaving
        your c-card in your other wallet - they travel with you on your phone,
        tablet, or laptop!
      </h3>
      <h3>
        Our dive courses go beyond all other dive operators to ensure the most
        comfortable, interactive, fun-filled, and safety-oriented training for
        both new and experienced divers. Courses are offered on a private or
        semi-private basis, fully tailored to your vacation schedule. Our goal
        is to create a competent, aware, and knowledgeable diver. Come Dive
        Cozumel and see for yourself what the excitement is about when diving
        with Dive GalaxSea!
      </h3>
    </TabPanel>
    <TabPanel>
      <Grid item md={6} xs={12}></Grid>
    </TabPanel>
  </Tabs>
);

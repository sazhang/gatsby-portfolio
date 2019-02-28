import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { Section, Container } from "../utils/globalstyles";
import { css } from "@emotion/core";
import tw from "tailwind.macro";

// 404 page
const ErrorPage = () => (
  <Layout>
    <Helmet title={"404"} />
    <Section
      css={css`
        ${tw`min-h-screen`};
      `}
    >
      <Container>
        <div
          css={css`
            ${tw`max-w-md`};
          `}
        >
          <h1>Woops, something's up.</h1>
          <h3>This page does not exist or is no longer reachable.</h3>
          <h3>
            You can return to the <Link to="/">Homepage</Link>.
          </h3>
        </div>
      </Container>
    </Section>
  </Layout>
);

export default ErrorPage;

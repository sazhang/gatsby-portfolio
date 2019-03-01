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
    <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="404 page for Sarah Zhang's portfolio website"
          />
          <meta
            name="keywords"
            content="Sarah Zhang, portfolio, personal, Gatsby, React, Tailwind, Emotion"
          />
          <meta name="author" content="Sarah Zhang" />
          <title>404</title>
          <link rel="canonical" href="https://sarahzhang.co/" />
          <html lang="en" />
        </Helmet>
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

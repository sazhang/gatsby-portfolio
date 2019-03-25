import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/layout";
import { Container, GradientKnockoutTitle } from "../utils/globalstyles";

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
    <Container>
      <GradientKnockoutTitle>Woops, something's up.</GradientKnockoutTitle>
      <h3>
        This page does not exist or is no longer reachable. Return{" "}
        <Link to="/">home</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

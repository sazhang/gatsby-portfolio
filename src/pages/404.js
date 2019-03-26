import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/layout";
import { Container } from "../utils/globalstyles";
import GradientTitle from "../components/gradientTitle";
import css from "@emotion/css";
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
    <Container>
      <GradientTitle text="Woops, something's up." />
      <h3
        css={css`
          ${tw`text-pale-blue`};
        `}
      >
        This page does not exist or is no longer reachable. Return{" "}
        <Link
          to="/"
          css={css`
            ${tw`underline`};
          `}
        >
          home
        </Link>
        .
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

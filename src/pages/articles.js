import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Article Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main>
        <Layout>
          <AnimatedText text="Comming Soon"></AnimatedText>
        </Layout>
      </main>
    </>
  );
};

export default articles;

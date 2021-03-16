import Head from "next/head";

export default function Seo({ siteTitle, title, description }) {
  return (
    <>
      <Head>
        <title>{`${title} | ${siteTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteTitle} />
      </Head>
    </>
  );
}

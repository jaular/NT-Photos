import Head from "next/head";
import NotFound from "@/components/NotFound";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found | NT Photos</title>
      </Head>

      <NotFound text="Sorry! Page not found" />
    </>
  );
}

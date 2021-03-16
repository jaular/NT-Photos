import { useRouter } from "next/router";
import { getQueryPhotos } from "../../../lib/api";
import Seo from "@/components/Seo";
import Grid from "@/components/Grid";
import SearchBox from "@/components/SearchBox";
import Pagination from "@/components/Pagination";
import NotFound from "@/components/NotFound";

export default function Photos({ data, title, numberPage }) {
  const router = useRouter();

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase().toString();
  };

  return (
    <>
      <Seo
        siteTitle="NT Photos"
        title={capitalize(title)}
        description="Free high-resolution images using the official Unsplash API"
      />

      <div>
        <SearchBox />
      </div>

      <section>
        <h2 className="my-8 text-2xl font-bold text-contrast-lower sm:text-3xl">
          {capitalize(title)}
        </h2>
        {data.length > 0 ? (
          <>
            <Grid data={data} />
            <Pagination
              numberPage={numberPage}
              path={encodeURIComponent(router.query.slug)}
            />
          </>
        ) : (
          <NotFound text="Sorry! There are no photos" />
        )}
      </section>

      {/* <Link
        href={{
          pathname: "/s/photos/[slug]",
          query: { slug: `${router.query.slug}`, page: `${numberPage + 1}` },
        }}
      >
        <a className="text-contrast-low">Next</a>
      </Link> */}
    </>
  );
}

export async function getServerSideProps({ params, query }) {
  let data;
  let numberPage;
  const title = await params.slug.split("-").join(" ");

  try {
    numberPage = Number(query.page) || 1;
    const search = params.slug.split("-").join(" ");
    const url = `https://api.unsplash.com/search/photos?page=${numberPage}&per_page=10&query=${encodeURIComponent(
      search
    )}`;
    data = await getQueryPhotos(url);
  } catch (error) {
    data = [];
  }

  return {
    props: {
      data,
      title,
      numberPage,
    },
  };
}

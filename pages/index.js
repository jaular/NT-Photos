import { getCuratedPhotos } from "../lib/api";
import Seo from "@/components/Seo";
import Grid from "@/components/Grid";
import SearchBox from "@/components/SearchBox";
import Pagination from "@/components/Pagination";
import NotFound from "@/components/NotFound";

export default function Home({ data, numberPage }) {
  return (
    <>
      <Seo
        siteTitle="NT Photos"
        title="Latest photos"
        description="Free high-resolution images using the official Unsplash API"
      />

      <div>
        <SearchBox />
      </div>

      <section>
        <h2 className="my-8 text-2xl font-bold text-contrast-lower sm:text-3xl">
          Latest photos
        </h2>
        {data.length > 0 ? (
          <Grid data={data} />
        ) : (
          <NotFound text="Sorry! There are no photos" homeButton={false} />
        )}

        <Pagination numberPage={numberPage} />
      </section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  let data;
  let numberPage;

  try {
    numberPage = Number(query.page) || 1;
    const url = `https://api.unsplash.com/photos?page=${numberPage}&per_page=8`;
    data = await getCuratedPhotos(url);
  } catch (error) {
    data = [];
  }

  return {
    props: {
      data,
      numberPage,
    },
  };
}

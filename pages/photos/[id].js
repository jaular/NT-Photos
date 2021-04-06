import Image from "next/image";
import { useRouter } from "next/router";
import { getPhotoById } from "../../lib/api";
import Seo from "@/components/Seo";
import User from "@/components/User";
import NotFound from "@/components/NotFound";

export default function Photos({ photo }) {
  const router = useRouter();

  return (
    <>
      <Seo
        siteTitle="NT Photos"
        title={
          Object.entries(photo).length === 0
            ? "Photo not found"
            : photo?.alt_description ?? `Photo by ${photo?.user?.name}`
        }
        description="Free high-resolution images using the official Unsplash API"
      />

      <section>
        {Object.entries(photo).length !== 0 ? (
          <div className="flex flex-col w-full md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg bg-contrast-higher aspect-w-14 aspect-h-16">
                <Image
                  className="object-cover object-center rounded-lg"
                  alt={photo.alt_description ?? photo.user.username}
                  src={photo.urls.regular}
                  layout="fill"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full pt-10 md:w-1/2 lg:pl-24 md:pl-16 md:items-start">
              <User
                name={photo.user.name}
                profile={photo.user.profile_image.large}
                link={photo.user.links.html}
                username={photo.user.username}
              />
              <div className="flex justify-center">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-green-600 border border-transparent rounded-md text-contrast-lower sm:text-base hover:bg-green-500 focus:outline-none focus:ring-1 focus:ring-contrast-lower"
                >
                  Back
                </button>

                <a
                  href={photo.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 ml-3 text-sm font-medium border border-transparent rounded-md text-contrast-lower focus:outline-none focus:ring-1 focus:ring-green-500 bg-contrast-higher sm:text-base hover:bg-contrast-high"
                >
                  Unsplash
                </a>
              </div>
            </div>
          </div>
        ) : (
          <NotFound text="Sorry! Photo not found" />
        )}
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  let photo;
  try {
    photo = await getPhotoById(params.id);
  } catch (error) {
    photo = [];
  }

  return {
    props: {
      photo,
    },
  };
}

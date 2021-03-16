import { useRouter } from "next/router";

export default function NotFound({ text, homeButton }) {
  const router = useRouter();

  return (
    <>
      <h4 className="text-base text-center text-contrast-medium md:text-lg">
        {text}
      </h4>
      <div className="flex justify-center">
        <img
          className="w-28 h-28 md:w-36 md:h-36"
          src="/crying_face.svg"
          title="Crying Face"
          alt="Crying Face"
        />
      </div>

      {homeButton && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="items-center justify-center px-4 py-2 mt-2 text-sm font-medium bg-green-600 border border-transparent rounded-md text-contrast-lower sm:text-base hover:bg-green-500 focus:outline-none focus:ring-1 focus:ring-contrast-lower"
          >
            Home
          </button>
        </div>
      )}
    </>
  );
}

NotFound.defaultProps = {
  homeButton: true,
};

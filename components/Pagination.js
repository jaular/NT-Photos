import { useRouter } from "next/router";

export default function Pagination({ numberPage, path }) {
  const router = useRouter();

  const handleDecrement = () => {
    if (numberPage > 2) {
      router.push(`${path}/?page=${numberPage - 1}`);
    } else {
      router.push(`${path}`);
    }
  };

  const handleIncrement = (numberPage) => {
    router.push(`${path}/?page=${numberPage + 1}`);
  };

  return (
    <>
      <div className="flex justify-center pt-8">
        <div className="inline-flex">
          <button
            onClick={() => handleDecrement(numberPage)}
            disabled={numberPage <= 1}
            className={`items-center justify-center px-4 py-2 text-sm font-medium text-contrast-lower border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 ${
              numberPage <= 1
                ? "bg-contrast-higher cursor-not-allowed text-contrast-high"
                : "bg-contrast-higher hover:bg-contrast-high"
            }`}
            title="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="inline-flex ml-3">
          <button
            onClick={() => handleIncrement(numberPage)}
            className="items-center justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-contrast-lower focus:outline-none focus:ring-1 focus:ring-green-500 bg-contrast-higher sm:text-base hover:bg-contrast-high"
            title="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

Pagination.defaultProps = {
  path: "",
};

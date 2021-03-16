import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (inputValue.trim().length > 0) {
      const slug = encodeURIComponent(
        inputValue.split(" ").join("-").toLocaleLowerCase()
      );
      setInputValue("");
      router.push(`/s/photos/${slug}`);
    }
  };

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <div className="w-full max-w-lg lg:max-w-xs">
        <label className="text-sm text-contrast-medium">
          Search
          <input
            className="w-full px-6 py-3 mt-1 text-sm leading-tight border border-transparent rounded-md text-contrast-lower placeholder-contrast-medium bg-contrast-higher focus:outline-none focus:placeholder-opacity-50 focus:ring-1 focus:ring-green-500"
            type="text"
            value={inputValue}
            placeholder="Searching for something?"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
}

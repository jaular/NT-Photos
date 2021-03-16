export default function User({ name, profile, link, username }) {
  return (
    <>
      <div className="flex items-center mb-8 space-x-3">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-full md:w-16 md:h-16"
              src={profile}
              alt={username}
              title={`@${username}`}
            />
            <span
              className="absolute rounded-full shadow-lg bg-contrast-high"
              aria-hidden="true"
            ></span>
          </div>
        </div>
        <div>
          <h1 className="mb-1 font-bold text-contrast-lower text-1xl title-font sm:text-3xl">
            {name}
          </h1>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-relaxed cursor-pointer text-contrast-medium hover:text-contrast-lower sm:text-base"
          >
            @{username}
          </a>
        </div>
      </div>
    </>
  );
}

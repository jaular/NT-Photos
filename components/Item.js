import Link from "next/link";
import Image from "next/image";

export default function Item({ item }) {
  return (
    <>
      <li className="cursor-pointer">
        <Link href={`/photos/${item.id}`}>
          <div className="space-y-4">
            <div className="rounded-lg bg-contrast-higher aspect-w-3 aspect-h-3">
              <div className="transition duration-500 ease-in-out hover:shadow-lg">
                <Image
                  className="object-cover rounded-lg"
                  src={item.urls.small}
                  alt={item.id}
                  title={
                    item.alt_description ??
                    `View the photo by ${item.user.name}`
                  }
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

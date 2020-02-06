import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BackArrow from "public/icons/back.svg";

export default function Banner() {
  const router = useRouter();
  const notHome = router.pathname != "/";

  return (
    <div className="mt-2 mb-8 md:mb-10 bg-white pb-4 sticky top-0">
      <div className="flex items-center">
        {notHome && (
          // FIXME: Check if the previous route is local. If so, pop the
          // current route. Otherwise, go to the homepage.
          <Link href="/" scroll={false}>
            <a className="w-6 md:-ml-10 mr-4">
              <BackArrow />
            </a>
          </Link>
        )}
        <h1 className="font-black text-5xl">TMDbB</h1>
      </div>
      <h3 className="italic text-lg text-gray-600 -mt-1">
        <a
          className="underline"
          href="https://themoviedb.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          The Movie Database
        </a>{" "}
        Browserbbbbb
      </h3>
    </div>
  );
}

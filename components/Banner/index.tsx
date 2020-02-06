import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
import BackArrow from "public/icons/back.svg";

export default function Banner() {
  const router = useRouter();
  const notHome = router.pathname != "/";

  return (
    <div className="mt-2 mb-8 md:mb-10 bg-white pb-4 sticky top-0">
      <div className="flex items-center">
        {notHome && (
          <Link href="/">
            <a className="w-6 mr-4">
              <BackArrow />
            </a>
          </Link>
        )}
        <h1 className="font-black text-5xl">TMDbB</h1>
      </div>
      <h3 className="italic text-lg text-gray-600 -mt-1">
        <a className="underline" href="https://themoviedb.org">
          The Movie Database
        </a>{" "}
        Browserbbbbb
      </h3>
    </div>
  );
}

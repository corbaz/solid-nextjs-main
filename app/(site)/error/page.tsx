import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Error page for Solid Pro",
};

const ErroPage = () => {
  return (
    <section className="overflow-hidden pt-45 pb-25 lg:pt-50 lg:pb-32.5 xl:pt-55 xl:pb-37.5">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
          This Page Does Not Exist
        </h2>
        <p className="mb-7.5">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Link
          href="/"
          className="hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out"
        >
          Return to Home
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ErroPage;

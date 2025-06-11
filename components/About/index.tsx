"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            <Image
              src="/images/about/about-light-01.png"
              alt="About"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/about/about-dark-01.png"
              alt="About"
              className="hidden dark:block"
              fill
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2"
          >
            <span className="font-medium text-black uppercase dark:text-white">
              <span className="bg-meta text-metatitle mr-4 mb-4 inline-flex rounded-full px-4.5 py-1 text-white uppercase">
                New
              </span>{" "}
              SaaS Boilerplate for Next.js
            </span>
            <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
              A Complete Solution for{" "}
              <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                SaaS Startup
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ultricies lacus non fermentum ultrices. Fusce consectetur le.
            </p>

            <div className="mt-7.5 flex items-center gap-5">
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="w-3/4">
                <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                  Next.js 15, React 19 and TypeScript y Tailwind 4
                </h3>
                <p>Ut ultricies lacus non fermentum ultrices.</p>
              </div>
            </div>
            <div className="mt-7.5 flex items-center gap-5">
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="w-3/4">
                <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                  Fully Customizable
                </h3>
                <p>consectetur adipiscing elit fermentum ultricies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

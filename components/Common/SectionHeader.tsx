"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top mx-auto text-center"
    >
      {/* <!-- Section Title Start --> */}
      <div className="bg-zumthor dark:border-strokedark dark:bg-blacksection mb-4 inline-block rounded-full px-4.5 py-1.5 dark:border">
        <span className="text-sectiontitle font-medium text-black dark:text-white">
          {title}
        </span>
      </div>
      <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 dark:text-white">
        {subtitle}
      </h2>
      <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      {/* <!-- Section Title End --> */}
    </motion.div>
  );
};

export default SectionHeader;

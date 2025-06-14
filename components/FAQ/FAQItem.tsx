type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  return (
    <div className="border-stroke dark:border-strokedark flex flex-col border-b last-of-type:border-none">
      <button
        onClick={() => {
          handleFaqToggle(id);
        }}
        className="text-metatitle3 flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-black lg:px-9 lg:py-7.5 dark:text-white"
      >
        {quest}

        {activeFaq === id ? (
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <p
        className={`border-stroke dark:border-strokedark border-t px-6 py-5 lg:px-9 lg:py-7.5 ${
          activeFaq === id ? "block" : "hidden"
        }`}
      >
        {ans}
      </p>
    </div>
  );
};

export default FAQItem;

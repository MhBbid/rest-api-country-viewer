import { useState, useEffect, useRef } from "react";

interface Props {
  countryCount: number;
  cardCount: number;

  currentPage: number;
  setCurrentPage: Function;
}

export default function PageSelector(props: Props) {
  const pageInputRef = useRef<HTMLInputElement | null>(null);
  const [pageCount, setPageCount] = useState<number>(
    props.countryCount / props.cardCount
  );

  function changeCurrentPageHandler(newCurrentPage: number | false) {
    if (
      typeof newCurrentPage == "number" &&
      newCurrentPage > 0 &&
      newCurrentPage <= pageCount
    ) {
      props.setCurrentPage(newCurrentPage);
    }

    pageInputRef.current
      ? (pageInputRef.current.value = (props.currentPage + 1).toString())
      : null;
  }

  useEffect(() => {
    setPageCount(props.countryCount / props.cardCount);
  }, [props.countryCount]);

  useEffect(() => {
    if (pageInputRef.current && !pageInputRef.current.hasAttribute("focus")) {
      pageInputRef.current.value = (props.currentPage + 1).toString();
    }
  }, [props.currentPage, pageInputRef.current?.hasAttribute("focus")]);

  return (
    <div className="flex items-center justify-self-center gap-4 p-4">
      <button
        className="default-fill p-2 hidden sm:block"
        title={props.currentPage != 0 ? "Go to First page" : ""}
        onClick={() => changeCurrentPageHandler(0)}
        disabled={props.currentPage == 0}
      >
        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
        </svg>
      </button>

      <button
        className="default-background default-hover rounded-md p-4 flex justify-center items-center gap-2"
        onClick={() => changeCurrentPageHandler(props.currentPage - 1)}
        disabled={props.currentPage == 0}
      >
        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        Previous page
      </button>

      <div>
        <input
          ref={pageInputRef}
          className="bg-transparent outline-none text-right p-1 w-[3ch] underline-offset-4 focus:underline"
          maxLength={2}
          onBlur={() => {
            pageInputRef.current &&
              changeCurrentPageHandler(
                pageInputRef.current.value != "" &&
                  Number(pageInputRef.current.value) - 1
              );
          }}
          onChange={(e) =>
            (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
          }
          onKeyDown={(e) => e.key === "Enter" && pageInputRef.current?.blur()}
        />
        <label>{`/ ${Math.ceil(props.countryCount / props.cardCount)}`}</label>
      </div>

      <button
        className="default-background default-hover rounded-md p-4 flex justify-center items-center gap-2"
        onClick={() => changeCurrentPageHandler(props.currentPage + 1)}
        disabled={props.currentPage > pageCount - 1}
      >
        Next page
        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>

      <button
        title={!(props.currentPage > pageCount - 1) ? "Go to Last page" : ""}
        className="default-fill p-2 hidden sm:block"
        onClick={() =>
          changeCurrentPageHandler(
            Math.ceil(props.countryCount / props.cardCount - 1)
          )
        }
        disabled={props.currentPage > pageCount - 1}
      >
        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg>
      </button>
    </div>
  );
}

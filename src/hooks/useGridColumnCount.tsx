import { useState, useEffect } from "react";
import { RefObject } from "react";

// credit to Bryant Smith https://stackoverflow.com/a/73884836 who made this hook and that i shamelessly copied

/**
 * @param containerRef Ref to HTMLElement with grid styles applied
 * @param defaultCount Count to return during SSR or if the containerRef is not yet set
 * @returns number of columns visible in the grid (updates on resize or containerRef change)
 */
export const useGridColumnCount = <T extends HTMLElement>(
  containerRef: RefObject<T>,
  defaultCount: number = 1
): number => {
  const [visibleCols, setVisibleCols] = useState(defaultCount);

  useEffect(() => {
    const calcColumns = () => {
      // Abord if no ref
      if (!containerRef.current) return;

      // infer # of cols by parsing the computed grid-template-columns
      // see https://stackoverflow.com/a/58393617/5389588
      const containerComputerStyle = window.getComputedStyle(
        containerRef.current
      );
      const nCols = containerComputerStyle
        .getPropertyValue("grid-template-columns")
        .replace(" 0px", "")
        .split(" ").length;

      // Update
      setVisibleCols(nCols);
    };

    // Do it now
    calcColumns();

    // And on resize
    window.addEventListener("resize", calcColumns);
    return () => {
      window.removeEventListener("resize", calcColumns);
    };
  }, [containerRef, setVisibleCols]);

  return visibleCols;
};

interface Props {
  skeletonCardCount: number;
}

export default function Skeleton(props: Props) {
  const destructuredSkeletonCards = [...Array(props.skeletonCardCount)];

  return (
    <>
      {/* top nav skeleton */}
      <nav className="default-background h-20 flex justify-between items-center nav-side-padding sticky z-50 top-0">
        <h1 className="text-2xl font-extrabold p-3"> Where in the world? </h1>
        <button className="flex items-center gap-2 capitalize p-3">
          theme toggle
        </button>
      </nav>

      <div className="grid homepage-grid py-8 side-padding">
        {/* search filters skeleton */}
        <div className="grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-52 grid-cols-1 grid-rows-2 gap-3">
          <div className="h-14 darker-background rounded-lg w-full cursor-pointer"></div>

          <div className="grid grid-cols-2 gap-2">
            <div className="darker-background rounded-lg h-full w-full cursor-pointer"></div>
            <div className="darker-background rounded-lg h-full w-full cursor-pointer"></div>
          </div>
        </div>

        <div className="h-[100px]"></div>

        {/* country deck skeleton */}
        <div className="grid gap-8 py-8 bento-grid">
          {destructuredSkeletonCards.map((element: any, index: number) => (
            <div
              key={index}
              className="default-background flex flex-col rounded-md overflow-hidden h-full cursor-pointer card-hover focus-visible:scale-105"
              tabIndex={0}
            >
              {/* image skeleton */}
              <div className="darker-background h-52" />

              {/* country info skeleton */}
              <div className="flex flex-col gap-4 p-8">
                <div className="darker-background rounded-lg h-6 w-11/12"></div>
                <div className="h-1"></div>

                <div className="darker-background rounded-xl h-4 w-10/12"></div>
                <div className="darker-background rounded-lg h-4 w-10/12"></div>
                <div className="darker-background rounded-lg h-4 w-9/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

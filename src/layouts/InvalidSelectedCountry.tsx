export default function InvalidSelectedCountry() {
  return (
    <div className="flex flex-col items-center gap-4 my-32">
      <h1 className="text-5xl font-bold text-center">
        The above specified country name is invalid
      </h1>

      <p className="lighter-text text-xl">
        <span className="block text-center">
          Good on you for being tech savvy enough to know how to head to the
          page you have in mind via url.
        </span>

        <span className="block text-center">
          Just remember to write down the name in snake_case and avoid making
          any typos next time
        </span>
      </p>

      <p className="lighter-text text-xs">
        {/* you're reading the source code so i'm pretty sure you already understand
				that even doing this to begin with is a bit of a waste of effort*/}
        (also excuse the lack of effort that went into this page basically
        nobody is going to see this anyway so why bother)
      </p>
    </div>
  );
}

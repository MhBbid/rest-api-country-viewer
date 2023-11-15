import { CountryDetails } from "../util/customTypes";

interface Props {
  countryData: CountryDetails | null | undefined;
}

export default function CountryDetailInfo(props: Props) {
  return (
    <div className="flex flex-col gap-6 px-8">
      <h1 className="text-3xl font-extrabold">
        {props.countryData && props.countryData.name}
      </h1>

      <ul className="flex flex-col gap-1 mx-1">
        <p>
          Native Name:{" "}
          <span className="lighter-text">
            {props.countryData?.nativeName != ""
              ? props.countryData?.nativeName
              : "No Native Name"}
          </span>
        </p>

        <p>
          Capital:{" "}
          <span className="lighter-text">{props.countryData?.capital}</span>
        </p>

        <p>
          Region:{" "}
          <span className="lighter-text">{props.countryData?.region}</span>
        </p>

        <p>
          Subregion:{" "}
          <span className="lighter-text">{props.countryData?.subregion}</span>
        </p>

        <p>
          Top Level Domain:{" "}
          <span className="lighter-text">
            {props.countryData?.tld != undefined &&
              props.countryData.tld.join(" / ")}
          </span>
        </p>

        <p>
          Population:{" "}
          <span className="lighter-text">
            {props.countryData?.population.toLocaleString()}
          </span>
        </p>

        <p>
          Languages:{" "}
          <span className="lighter-text">
            {props.countryData &&
            Object.entries(props.countryData.languages).length > 0
              ? Object.values(props.countryData?.languages).join(", ")
              : "None"}
          </span>
        </p>

        <p>
          Currencies:{" "}
          <span className="lighter-text">
            {props.countryData &&
            Object.entries(props.countryData.currencies).length > 0
              ? Object.entries(props.countryData.currencies).map(
                  (element: any, index: number) =>
                    `${
                      /* vite wouldn't build unless i did this bullshit*/ element
                        ? ""
                        : ""
                    }
                    ${
                      props.countryData &&
                      Object.values(props.countryData.currencies)[index].name
                    }
                      (${
                        props.countryData &&
                        Object.values(props.countryData.currencies)[index]
                          .symbol
                      } ${
                      props.countryData &&
                      Object.keys(props.countryData?.currencies)[index]
                    })${
                      props.countryData &&
                      index <
                        Object.entries(props.countryData?.currencies).length - 1
                        ? ", "
                        : ""
                    } `
                )
              : "None"}
          </span>
        </p>
      </ul>
    </div>
  );
}

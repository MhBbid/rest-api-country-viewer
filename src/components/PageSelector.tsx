interface Props {
  display: string;

  hasPrevious: boolean;
  hasNext: boolean;

  onPrevious: any;
  onNext: any;
}

export default function PageSelector(props: Props) {
  return (
    <div className="flex items-center justify-self-center gap-4 p-4">
      <button
        className="default-background default-hover rounded-md p-4"
        disabled={!props.hasPrevious}
        onClick={props.onPrevious}
      >
        previous page
      </button>

      <h1>{props.display}</h1>

      <button
        className="default-background default-hover rounded-md p-4"
        disabled={!props.hasNext}
        onClick={props.onNext}
      >
        next page
      </button>
    </div>
  );
}

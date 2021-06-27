import React, {
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle,
} from "react";

function FormSearch(props, ref) {
  const [searchString, setSearchString] = useState("");

  const onSubmit = useCallback(() => {
    console.log("Отправка", searchString);
  }, [searchString]);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () => {
        console.log("Отправка формы с ref");
        onSubmit();
      },
    }),
    [onSubmit]
  );

  return (
    <div>
      <div>
        <label className="label">Search:</label>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default forwardRef(FormSearch);

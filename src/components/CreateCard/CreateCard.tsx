import React, { useContext, useState } from "react";
import { ICard } from "../../types/models";
import { cards } from "../../data/cards";
import "./CreateCard.scss";
import { TFunction } from "i18next";
import { ModalContext } from "../../context/ModalContext";

interface CreateCardProps {
  onCreate: (card: ICard) => void;
  t: TFunction;
}

const CreateCard = ({ onCreate, t }: CreateCardProps) => {
  const today = new Date();

  // const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [text, setText] = useState(""); // textarea output
  const maxLength = 500;

  const { closeCreate } = useContext(ModalContext);

  const [data, setData] = useState<ICard>({
    id: ++cards.length,
    title: "",
    description: "",
    place: "",
    year: today.getFullYear(),
    url: "",
    thumbnailUrl: "",
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate(data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const changeAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    setText(event.target.value);
  };

  const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const file = event.target.files;

    console.log("file", file);
    console.log("file length", file?.length);

    if (!file || !file.length) {
      console.error("no image selected");
    } else {
      const imgURL = window.URL.createObjectURL(file[0]);
      setData({ ...data, ["url"]: imgURL, ["thumbnailUrl"]: imgURL });
      console.log("imgURL", imgURL);
      // setImageSrc(imgURL);
      // const img = new window.Image();
      // img.addEventListener("load", handleImageLoad);
      // // img.addEventListener("error", handleImageError);
      // img.src = imgURL;
    }
  };

  return (
    <div className="sides flex flex-row items-center transition-all overflow-y-auto p-4">
      <div className="mdl-title flex flex-col w-[24vw] mr-[8vw] transition-all ">
        <h1 className=" lng-creatingUnit text-4xl mb-[2vh] text-center transition-all select-none">
          {t("creatingUnit")}
        </h1>
        <div className="w-[100%] h-[100%] transition-all">
          <div className="self-center select-none static-cards" />
        </div>
      </div>

      <form action="#" onSubmit={submitHandler} method="post" className="form flex flex-col w-[24vw] transition-all">
        <label htmlFor="title" className="lng-creatingTitle mb-1 pl-1 tracking-wider">
          {t("creatingTitle")}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.title}
          onChange={changeHandler}
          pattern="[\p{L} \-]{2,30}"
          enterKeyHint="next"
          maxLength={80}
          required
        />

        <label htmlFor="url" className="lng-creatingUrl mb-1 pl-1 tracking-wider">
          {t("creatingUrl")}
        </label>
        <div className="fileContainer">
          <input
            type="url"
            id="url"
            name="url"
            className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
            style={{ backgroundColor: "transparent", borderRadius: "8px" }}
            value={data.url}
            onChange={changeHandler}
            enterKeyHint="next"
            required
          />

          <input type="file" accept="image/*" name="file" id="image" onChange={getImage} />
        </div>
        <label htmlFor="description" className="lng-creatingDescription mb-1 pl-1 tracking-wider">
          {t("creatingDescription")}
        </label>
        <div className="textContainer">
          <textarea
            id="description"
            name="description"
            className="border-solid border-2 h-[12vh] border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
            style={{
              backgroundColor: "transparent",
              borderRadius: "8px",
              resize: "vertical",
              minHeight: "100px",
              maxHeight: "250px",
            }}
            value={data.description}
            onChange={changeAreaHandler}
            maxLength={500}
          />
          <output id="charCount">
            {text.length}/{maxLength}
          </output>
        </div>
        <label htmlFor="place" className="lng-creatingPlace mb-1 pl-1 tracking-wider">
          {t("creatingPlace")}
        </label>
        <input
          required
          pattern="[\p{L} \-]{2,16}"
          type="text"
          id="place"
          name="place"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.place}
          onChange={changeHandler}
          maxLength={80}
          enterKeyHint="next"
        />
        <label htmlFor="year" className="lng-creatingYear mb-1 pl-1 tracking-wider">
          {t("creatingYear")}
        </label>
        <input
          type="number"
          id="year"
          name="year"
          min="1900"
          max={today.getFullYear()}
          step="1"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.year}
          onChange={changeHandler}
          enterKeyHint="done"
          required
        />

        <button
          type="submit"
          value="create"
          className="lng-creatingBtn mt-4 py-2 px-3 rounded-lg w-[45%] self-center text-gray-100 transition-all delay-200 duration-300 ease-out">
          {t("creatingBtn")}
        </button>

        <button
          // formMethod="dialog"
          type="button"
          className="close"
          onClick={closeCreate}>
          ×
        </button>
      </form>
    </div>
  );
};

export default CreateCard;

import Image from "next/image";
import { useEffect, useState } from "react";
import __imagePreview from "./__image-uploader__image-preview";
export default function ImageUploader() {
  let counter = 0;
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // initial State
  const [imageSrc, updateImageSrc] = useState([<__imagePreview />]);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  useEffect(() => {
    // console.log(imageSrc);
  }, [imageSrc]);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // Duplicate
  const duplicate = () => {
    updateImageSrc([...imageSrc, <__imagePreview />]);
  };

  return (
    <>
      <div id="ImageUploader">
        {imageSrc.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        {/* Add another image button */}
        <div className="mb-3 text-left">
          <button
            className="border _add_another py-1 px-3 bg-gray-100 focus:outline-none"
            onClick={(e) => {
              e.preventDefault(); // not to refresh the whole page/component
              duplicate();
            }}
          >
            Add Another Image
          </button>
        </div>
      </div>
    </>
  );
}

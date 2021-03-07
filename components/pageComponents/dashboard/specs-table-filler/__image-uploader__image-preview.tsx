import { useState } from "react";
import Image from "next/image";
export default function __imagePreview() {
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // initial State
  const [previewComponent, updatePreviewComponent] = useState(() => {
    return {
      states: {
        imgSrc: null,
      },
      dimensions: {
        width: 100,
        height: 100,
      },
      calls: 0,
    };
  });

  // Preview the image
  const previewImaga = (e: any) => {
    // console.log(e.target.files);

    if (e.target.files[0]) {
      // Prepare this file for preview

      const t = new FileReader();

      // Listen to load events
      t.onload = function (e) {
        updatePreviewComponent({
          ...previewComponent,
          states: { ...previewComponent.states, imgSrc: e.target.result },
        });
      };

      t.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="bg-gray-300 p-3 mb-3">
        <div className="mb-3">
          <input
            type="file"
            name="device-images"
            placeholder="Please, Enter the mobile images"
            className="border inline-block w-full"
            onInput={(e) => {
              previewImaga(e);
            }}
            required
          />
        </div>

        {/* Preview Section */}
        <div className="mb-3 flex justify-center">
          <div className="inline-flex border">
            {previewComponent.states.imgSrc ? (
              <Image
                quality="100"
                className="w-full block border"
                src={previewComponent.states.imgSrc}
                width="700"
                height="450"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        {/* image name / keyword */}
        <div className="mb-3">
          <input
            type="text"
            name={`image-keyword`}
            placeholder="Please, Enter the main keyword of this image"
            className="border inline-block w-full px-3 py-1 bg-gray-100"
            required
          />
        </div>
      </div>
    </>
  );
}

import { useEffect } from "react";

export default function Loader({ showOrHide }) {
  return (
    <>
      <div
        id="Loader"
        className="fixed items-center justify-center w-full bottom-0 overflow-hidden transition-all bg-gray-200"
        style={{ height: showOrHide ? "3px" : "3px", top: 69 }}
      >
        <div className="absolute transition-all progress h-1 bg-yellow-500 w-2"></div>
      </div>
      <style jsx>
        {`
          .progress {
            animation-name: loader;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            transform-origin: center;
          }
          @keyframes loader {
            0% {
              left: 0;
              width: 0;
            }
            50% {
              transform: scaleX(300);
              width: 1px;
            }
            100% {
              left: 100%;
              width: 0;
            }
          }
        `}
      </style>
    </>
  );
}

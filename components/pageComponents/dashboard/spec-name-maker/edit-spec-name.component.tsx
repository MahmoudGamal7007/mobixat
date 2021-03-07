import axios, { AxiosError } from "axios";
import { useEffect, useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import createAbsoluteName from "../../../../libs/functions/create-absolute-spec-name";

export default function EditSpecName({ selectedElements }) {
  const panel = useRef(null);
  const closePanel = () => {
    document.getElementById("EditSpecName").classList.add("hidden");
  };

  const confirm = () => {
    const data = selectedElements.map(function (item, index) {
      // console.log(createAbsoluteName(this[index].en_spec_name));
      return {
        en_spec_name: document
          .querySelector(`[en-data-value="${item.en_spec_name}"]`)
          .textContent.trim(),
        ar_spec_name: document
          .querySelector(`[ar-data-value="${item.ar_spec_name}"]`)
          .textContent.trim(),
        absolute_spec_name: createAbsoluteName(this[index].en_spec_name),
        where: item.en_spec_name,
      };
    }, selectedElements);

    // Fade In the loader next close to the confirm button
    document
      .querySelector("#EditSpecName .loader-container")
      .classList.remove("hidden");

    // console.log(data);

    // Send This data
    axios
      .put("http://localhost:5050/api/create-new-spec-name.api", data)
      .then((data) => {
        // Reload the page in order to show the new update
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  return (
    <>
      <div
        id="EditSpecName"
        className={`fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 hidden`}
      >
        <div className="container mx-auto h-full">
          <div className="w-full h-full flex flex-wrap content-between justify-center pt-14">
            {/* Close Icon */}
            <div className="w-full">
              <button
                className="bg-gray-500 px-2 py-1 m-3 text-white rounded bg-opacity-75"
                onClick={() => {
                  closePanel();
                }}
              >
                X
              </button>
            </div>
            {/* Panel */}
            <div ref={panel} className="w-3/4 bg-white rounded-md py-3 px-5 ">
              <h3 className="text-center text-2xl text-yellow-600 font-bold mb-4 max-h-full">
                Directly Update the needed values
              </h3>
              {/* Selected items */}
              <div>
                {selectedElements.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full mb-4"
                      style={{ minHeight: "34px" }}
                    >
                      <span
                        title="double click to edit"
                        style={{ minHeight: "34px" }}
                        en-data-value={item.en_spec_name}
                        className="inline-block w-1/2 border focus:outline-none rounded-sm py-1 text-center focus:border-green-400"
                        spellCheck="false"
                        onDoubleClick={(e) => {
                          e.currentTarget.setAttribute(
                            "contenteditable",
                            "true"
                          );
                          e.currentTarget.focus();
                        }}
                        onBlur={(e) => {
                          e.currentTarget.setAttribute(
                            "contenteditable",
                            "false"
                          );
                        }}
                      >
                        {item.en_spec_name}
                      </span>
                      <span
                        title="double click to edit"
                        style={{ minHeight: "34px" }}
                        dir="rtl"
                        ar-data-value={item.ar_spec_name}
                        className="inline-block w-1/2 border focus:outline-none rounded-sm py-1 text-center focus:border-green-400"
                        spellCheck="false"
                        onDoubleClick={(e) => {
                          e.currentTarget.setAttribute(
                            "contenteditable",
                            "true"
                          );
                          e.currentTarget.focus();
                        }}
                        onBlur={(e) => {
                          e.currentTarget.setAttribute(
                            "contenteditable",
                            "false"
                          );
                        }}
                      >
                        {item.ar_spec_name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Control Buttons */}
              <div className="mt-5 flex items-center">
                <button
                  className="text-white bg-red-500 px-3 py-1 rounded-sm focus:outline-none mr-3"
                  onClick={() => {
                    closePanel();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-500 px-3 py-1 rounded-sm focus:outline-none"
                  onClick={confirm}
                >
                  Confirm
                </button>

                {/* Loader */}
                <span className="loader-container ml-3 hidden">
                  <AiOutlineLoading3Quarters
                    className="font-bold loading"
                    color="#009"
                  />
                </span>
              </div>
            </div>
            <div className="w-3/4 bg-transparent py-3 "></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #EditSpecName .loader-container {
          animation: rotate 0.5s linear 0s infinite;
          transform-origin: center;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @-moz-keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

/* [
  { ar_spec_name: 'التقنية', en_spec_name: 'Technololgy' },
  { ar_spec_name: 'نطاق الـ 2g', en_spec_name: '2g band' },
  { ar_spec_name: 'نطاق الـ 3g', en_spec_name: '3g band' },
  { ar_spec_name: 'نطاق الـ 4g', en_spec_name: '4g band' },
  { ar_spec_name: 'نطاق الـ 5g', en_spec_name: '5g band' },
  { ar_spec_name: 'السرعة', en_spec_name: 'Speed' },
  { ar_spec_name: 'تم الاعلان في', en_spec_name: 'Announced' },
  { ar_spec_name: 'الحالة', en_spec_name: 'Status' },
  { ar_spec_name: 'الأبعاد', en_spec_name: 'Dimensions' },
  { ar_spec_name: 'الوزن', en_spec_name: 'Weight' },
  { ar_spec_name: 'بنية الهاتف', en_spec_name: 'Build' },
  { ar_spec_name: 'شريحة الهاتف', en_spec_name: 'SIM' },
  { ar_spec_name: 'النوع', en_spec_name: 'Type' },
  { ar_spec_name: 'الحجم', en_spec_name: 'Size' },
  { ar_spec_name: 'الدقة', en_spec_name: 'Resolution' },
  { ar_spec_name: 'الحماية', en_spec_name: 'Protection' },
  { ar_spec_name: 'نظام التشغيل', en_spec_name: 'Operating System' },
  { ar_spec_name: 'نوع المعالج', en_spec_name: 'Chipset' },
  { ar_spec_name: 'وحدة المعالجة المركزية (CPU)', en_spec_name: 'CPU' },
  { ar_spec_name: 'معالج الرسوميات', en_spec_name: 'GPU' },
  { ar_spec_name: 'مدخل كارت ذاكرة', en_spec_name: 'Card slot' },
  { ar_spec_name: 'الداخلية', en_spec_name: 'Internal' },
  { ar_spec_name: 'نوع الكاميرا', en_spec_name: 'Camera Type' },
  { ar_spec_name: 'مميزات', en_spec_name: 'Features' },
  { ar_spec_name: 'الفيديو', en_spec_name: 'Video' },
  {
    ar_spec_name: 'الكاميرا الأمامية (السيلفي)',
    en_spec_name: 'Selfie Camera Type'
  },
  {
    ar_spec_name: 'مميزات الكاميرا الأمامية',
    en_spec_name: 'Selfie Features'
  },
  { ar_spec_name: 'الفيديو (سيلفي)', en_spec_name: 'Selfie Video' },
  { ar_spec_name: 'مكبر الصوت', en_spec_name: 'Loudspeaker' },
  { ar_spec_name: 'فتحة 3.5 مم', en_spec_name: '3.5mm jack' },
  { ar_spec_name: 'الشبكات اللاسلكية (Wi-Fi)', en_spec_name: 'WLAN' },
  { ar_spec_name: 'بلوتوث', en_spec_name: 'Bluetooth' },
  {
    ar_spec_name: 'نظام تحديد المواقع (GPS)',
    en_spec_name: 'Global Positioning System (GPS)'
  },
  {
    ar_spec_name: 'الاتصال قريب المدى (NFC)',
    en_spec_name: 'Near Field Communication (NFC)'
  },
  { ar_spec_name: 'الراديو', en_spec_name: 'Radio' },
  { ar_spec_name: 'مدخل USB', en_spec_name: 'USB' },
  { ar_spec_name: 'المستشعرات', en_spec_name: 'Sensors' },
  { ar_spec_name: 'نوع البطارية', en_spec_name: 'Battery Type' },
  { ar_spec_name: 'الشحن', en_spec_name: 'Charging' },
  { ar_spec_name: 'وضع الإستعداد', en_spec_name: 'Stand-by' },
  { ar_spec_name: 'وضع تشغيل الموسيقى', en_spec_name: 'Music play' },
  { ar_spec_name: 'الألوان', en_spec_name: 'Colors' },
  { ar_spec_name: 'الإصدارات', en_spec_name: 'Models' },
  {
    ar_spec_name: 'معدل الامتصاص النوعي SAR',
    en_spec_name: 'Specific absorption rate (SAR)'
  },
  { ar_spec_name: 'السعر', en_spec_name: 'Price' },
  { ar_spec_name: 'الأداء', en_spec_name: 'Performance' },
  { ar_spec_name: 'الشاشة', en_spec_name: 'Display' },
  { ar_spec_name: 'الكاميرا', en_spec_name: 'Camera' },
  {
    ar_spec_name: 'اختبار مكبر الصوت',
    en_spec_name: 'Loudspeaker Test'
  },
  { ar_spec_name: 'عمر البطارية', en_spec_name: 'Battery life' }
 ];
*/

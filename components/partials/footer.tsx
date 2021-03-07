import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  const pathProps = useRouter();
  return (
    <>
      <footer className="flex bg-gray-100 px-3 py-5 md:px-0">
        <div className="container">
          {/* Privacy Policy */}
          <ul className="flex justify-center">
            <li className="px-2 item-5">
              <Link
                href={`${
                  pathProps.locale == "en" ? "" : pathProps.locale
                }/privacy`}
              >
                <a>Privacy</a>
              </Link>
            </li>
            <li className="px-2 item-4">
              <Link
                href={`${
                  pathProps.locale == "en" ? "" : pathProps.locale
                }/privacy`}
              >
                <a>Privacy</a>
              </Link>
            </li>
            <li className="px-2 item-3">
              <Link
                href={`${
                  pathProps.locale == "en" ? "" : pathProps.locale
                }/privacy`}
              >
                <a>Privacy</a>
              </Link>
            </li>
            <li className="px-2 item-2">
              <Link
                href={`${
                  pathProps.locale == "en" ? "" : pathProps.locale
                }/privacy`}
              >
                <a>Privacy</a>
              </Link>
            </li>
            <li className="px-2 item-1">
              <Link
                href={`${
                  pathProps.locale == "en" ? "" : pathProps.locale
                }/privacy`}
              >
                <a>Privacy</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

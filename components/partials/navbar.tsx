import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAccountCircle, MdClose, MdReorder } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [dropdownMenu, UpdateDropdownMenu] = useState(false);

  return (
    <>
      <nav
        className="flex justify-center py-2 px-4 border border-t-0 border-r-0 border-l-0"
        style={{ backgroundColor: "#091b4c" }}
      >
        <div className="container flex justify-between items-center">
          {/* Icons */}
          <span
            className="icon"
            onClick={() => {
              UpdateDropdownMenu(!dropdownMenu);
            }}
          >
            {dropdownMenu ? (
              <MdReorder color="#fff" style={{ cursor: "pointer" }} size="36" />
            ) : (
              <MdClose color="#fff" style={{ cursor: "pointer" }} size="36" />
            )}
          </span>

          {/* Logo */}
          <Link href={`/${router.locale === "en" ? "" : router.locale}`}>
            <a>
              <Image
                src="/images/logos/mobixat-8/mobixat.png"
                width={200}
                height={51}
              />
            </a>
          </Link>

          {/* Registered User */}
          <MdAccountCircle
            color="white"
            style={{ cursor: "pointer" }}
            size="36"
          />
        </div>
      </nav>
    </>
  );
}

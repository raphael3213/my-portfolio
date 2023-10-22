import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center py-5 text-gray-400 mt-20">
      <Link
        href={"https://github.com/raphael3213/my-portfolio"}
        placeholder="My Portfolio Github Link"
        className="group"
      >
        <h1 className="group-hover:text-emerald-500">
          Designed and Built by Joel Peter Dsouza.
        </h1>
      </Link>
    </div>
  );
}

export default Footer;

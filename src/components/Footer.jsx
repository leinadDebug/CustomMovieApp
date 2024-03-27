import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <small className=" text-white justify-end bottom-6 right-10 flex">
          &copy; Movie App by {}
          <a
            href="https://github.com/leinadDebug"
            className="italic text-blue-400 font-bold underline underline-offset-4"
          >
            {" "}
            leinadDebug
          </a>
        </small>
      </footer>
    </div>
  );
}

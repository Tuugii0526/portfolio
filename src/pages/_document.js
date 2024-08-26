import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <Head />
      <body className="dark:bg-[#030712]
      ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
//odd bg-[#FFFFFF] dark:bg-[#030712]
//even  bg-[#F9FAFB] dark:bg-[#111827]
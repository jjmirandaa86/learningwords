"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import store from "../Redux/store";
import { Provider } from "react-redux";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin=""
        />
         <Provider store={store}>
            {children}
         </Provider>
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="" ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin=""></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="" ></Script>
      </body>
       
    </html>
  );
}

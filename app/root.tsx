import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nbar from "./components/Nbar";



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="roots" content="noindex"/>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta /> 
        <Links />
      </head>
      <body style={{ backgroundColor: '#D1E9F6'}}>
      
        <Nbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import type { MetaFunction } from "@remix-run/cloudflare";
import koike from '.vscode/images/umi.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="relative flex justify-center">
      <img src={koike} className="App-logo" alt="logo" />

      <p> 
          私を一言で表すと、
        </p>
      <h1 className="text-3xl">真面目</h1>
      <p> 
          な人間です。
        </p>
      <ul className="list-disc mt-4 pl-6 space-y-2">
      {/* .marker-border-2{
      background:linear-gradient(transparent 60%, #ffcc99 0%);} */}
      <h2 className="marker-border-2">
        Skills
      </h2>
        

        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix-app-7jy.pages.dev/book"
            rel="noreferrer"
          >
            book
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
      </ul>
    </div>
  );
}

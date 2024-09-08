import type { MetaFunction } from "@remix-run/cloudflare";
import Caro from "~/components/Caro";

export const meta: MetaFunction = () => {
  return [
    { title: "NKのポートフォリオ" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};


export default function Index() {
  const imagesource = 'img/kokuritukyuogizyou.jpg'

  return (
    <div className="font-sans p-4">
      {/* .componentWrapper { margin-left: '20';}
      <div className="componentWrapper"> */}
      <div style={{ display:'block',marginLeft: '200px', marginRight: '200px' ,marginBottom: '50px'}}>
      <Caro  img1={imagesource} img2={imagesource} img3={imagesource} />
      </div>
      <p style={{ textAlign: "center" }}>
        私を一言で表すと、
      </p>
      
      <div style={{textAlign: "center"}} className="text-7xl">
        真面目
      
      </div>
      

      <p style={{ textAlign: "center" }}>
        な人間です。
      </p>
      
       <ul className="list-disc mt-4 pl-6 space-y-2" style={{ textAlign: "center" }}>
        <div className="marker-border-2 text-4xl" style={{ textAlign: "center" ,backgroundImage: "linear-gradient(transparent 40%, #FAFFAF 60%)",
          display: "inline-block",}}>
          Skills
        </div>
        </ul>
        <li style={{ textAlign: "center" }} className="text-4xl">
          java
        </li>
        <p></p>
        <p style={{ textAlign: "center" }}>
            2年間学んでいます。授業でオセロAIを作成しました。
          </p>
        {/* <li style={{ textAlign: "center" }}>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix-app-7jy.pages.dev/book"
            rel="noreferrer"
          >
            book
          </a>
        </li>
        <li style={{ textAlign: "center" }}>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li> */}
      



    </div>
  );
}

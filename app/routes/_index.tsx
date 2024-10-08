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
  const imagesourcesyumi = 'img/kakusigoooooooo.jpg'
  return (
    <div className="font-sans p-4">
      {/* .componentWrapper { margin-left: '20';}
      <div className="componentWrapper"> */}
      <div style={{ display:'block',marginLeft: '200px', marginRight: '200px' ,marginBottom: '50px'}}>
      <Caro  img1={imagesource} img2={imagesourcesyumi} img3={imagesource} />
      </div>
      <p style={{ textAlign: "center" }}>
        私を一言で表すと、情報科学部ディジタルメディア学科山田太郎がいます。
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
          Java
        </li>
        <p></p>
        <p style={{ textAlign: "center" }}>
            2年間学んでいます。
        </p>
        <p style={{ textAlign: "center" }}>
            授業でオセロAIを作成しました。
        </p>
        <p></p>
        <p></p>
        <li style={{ textAlign: "center" }} className="text-4xl">
          Python
        </li>
        <p></p>
        <p style={{ textAlign: "center" }}>
            3年間学んでいます。自然言語処理の勉強や、turtleなどのライブラリを使いました。
        </p>
        <p style={{ textAlign: "center" }}>
            最近では、授業の一環で高校生にPythonを教えたりもしています。
        </p>
        <p></p>
        <p></p>
        <li style={{ textAlign: "center" }} className="text-4xl">
          C++
        </li>
        <p></p>
        <p style={{ textAlign: "center" }}>
            半年間学んでします。ポインターなど初めて扱い、理解する事に苦労しました。
        </p>
        <p></p>
        <p></p>
        <li style={{ textAlign: "center" }} className="text-4xl">
          開発経験
        </li>
        <p></p>
        <p style={{ textAlign: "center" }}>
            今回のwebサイト制作で初めて開発を行いました。
        </p>
        <p style={{ textAlign: "center" }}>
            cloudfrareでサーバーを借り、githubとcloudfrareを連携しました。
        </p>
        <p style={{ textAlign: "center" }}>
            
            以下に私のgithubのリンクを記載します。
        </p>
        <a style={{ textAlign: "center" }}
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://github.com/NARITA20?tab=repositories"
            rel="noreferrer"
          >
            <div style={{ textAlign: "center" }}>
            https://github.com/NARITA20?tab=repositories
            </div>
          </a>
        {/* <li style={{ textAlign: "center" }}>
          
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

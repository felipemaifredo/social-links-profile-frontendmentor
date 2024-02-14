import Image from "next/image"
import "./page.css"
import img from "@/public/avatar-jessica.jpeg"

const dataLinks = [
  { title: "Github", link: "https://www.google.com" },
  { title: "Front End Mentor", link: "https://www.google.com" },
  { title: "LinkedIn", link: "https://www.google.com" },
  { title: "Twitter", link: "https://www.google.com" },
  { title: "Instagram", link: "https://www.google.com" },
]

export default function Home() {

  const RenderLink = (props) => {
    const { title, link } = props

    return (
      <a
        href={link}
        target="_blanck"
      >
        {title}
      </a>
    )
  }

  return (
    <main>
      <div className="social-links-container">
        <Image
          src={img}
          alt="Imagem"
          width={120}
          height={120}
        />
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
        <h2>"Front-end developer and avid reader."</h2>
        {dataLinks.map((datalink) => (
          <RenderLink
            title={datalink.title}
            link={datalink.link}
          />
        ))}
      </div>
    </main>
  );
}

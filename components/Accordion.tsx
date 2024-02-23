import { useState } from "react"
import { markdownToHtmlSync } from "../lib/markdown"

interface Props {
  items: any[]
}

const Item = item => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <li aria-expanded={open}>
      <button onClick={() => setOpen(!open)}>
        <h2>{item?.fields?.Question}</h2>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L9 9L17 1"
            stroke="#212121"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          dangerouslySetInnerHTML={{
            __html: markdownToHtmlSync(item?.fields?.Answer),
          }}
        ></div>
      )}
    </li>
  )
}

const Accordion = ({ items }: Props) => (
  <ul className="vs-accordion">
    {items.map(item => (
      <Item {...item} />
    ))}
  </ul>
)

export default Accordion

import { GetServerSideProps } from "next"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"

const BASE_ID = "app7BQQGtlXjcwjQW"
const TABLE_ID = "tblzNURZGDJm1lXYI"

export const getServerSideProps: GetServerSideProps<Props> = async req => {
  const res = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}?maxRecords=1000`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  )
  const data = await res.json()

  return {
    props: {
      faqs: data.records,
    },
  }
}

interface Props {
  faqs: any[]
}

const FaqPage = ({ faqs }: Props) => {
  return (
    <Layout>
      <main className="vs-generic-page container">
        <h1>Frequently asked questions</h1>
        <Accordion items={faqs} />
      </main>
    </Layout>
  )
}

export default FaqPage

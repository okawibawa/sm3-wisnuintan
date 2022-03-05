import * as React from "react"
import { Helmet } from "react-helmet"

import imgOne from "../images/1.jpg"
import Layout from "../components/layout"

const NotFoundPage = () => {
  // const [name, setName] = React.useState("")

  // // Nama Tamu
  // React.useEffect(() => {
  //   var pathName = typeof window !== "undefined" ? window.location.pathname : ""
  //   var name = pathName.replace("/", "").replace("_", " ")

  //   return setName(name)
  // }, [name])

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Pernikahan Wisnu & Intan | Segera Menikah</title>
        <meta
          name="title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          name="description"
          content="Pernikahan Wisnu & Intan, 18 April 2022."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wisnu.intan.segeramenikah.com"
        />
        <meta
          property="og:title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          property="og:description"
          content="Pernikahan Wisnu & Intan, 18 April 2022."
        />
        <meta property="og:image" content={imgOne} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wisnu.intan.segeramenikah.com"
        />
        <meta
          property="twitter:title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          property="twitter:description"
          content="Pernikahan Wisnu & Intan, 18 April 2022."
        />
        <meta property="twitter:image" content={imgOne} />
      </Helmet>
    </>
  )
}

export default NotFoundPage

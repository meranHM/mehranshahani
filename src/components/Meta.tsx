import Head from "next/head"
import { MetaProps } from "@/types/types"

export default function Meta({ 
    title, 
    description, 
    image = "/metatags-image.webp", 
    url = "https://mehranshahani.com",
    keywords,
    robots,
}: MetaProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {robots && <meta name="robots" content={robots} />}
            <meta name="theme-color" content="#0A0F1D" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}
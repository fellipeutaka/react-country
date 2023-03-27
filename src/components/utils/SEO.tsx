import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SEO(props: SEOProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {props.children}
    </>
  );
}

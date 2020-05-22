import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Layout from "../components/layout";
import GlobalStyle from "../styles/global";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;

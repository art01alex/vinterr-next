import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head> 
                    <meta name="description" content="Vinterr Plus — российский производитель одежды в городе Челябинск"></meta>
                    <meta name="keywords" content="шелк, шерсть, хлопок, вискоза"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
import React from 'react';
import { Document, Head, Main } from '@react-ssr/express';

interface Props {
  crossorigin?: string;
}

type Link = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

export default class extends Document {
  render() {
    return (
      <html lang="en" className="h-100 w-100 pa0 ma0">
        <Head>
          <meta charSet="utf-8" />
          <title> Lista de Tarefas </title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
        </Head>
        <body className="h-100 w-100 pa0 ma0" style={{ background: "#212121" }}>
          <Main />
        </body>
        <script>
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';
          link.integrity = 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        </script>
      </html>
    );
  }
};

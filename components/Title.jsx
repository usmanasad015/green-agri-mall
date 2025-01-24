import { Helmet } from "react-helmet";

function Title({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Green Agrimall | {`${title}`}</title>
    </Helmet>
  );
}

export default Title;

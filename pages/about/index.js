import { Fragment } from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Fragment>
      <h1>This is AboutUS Page</h1>
      <ul>
        <li>
          <Link href="/about/1">Yash</Link>
        </li>
        <li>
          <Link href="/about/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/about/3">Suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutPage;

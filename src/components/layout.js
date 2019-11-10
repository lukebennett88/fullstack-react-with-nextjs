import PropTypes from 'prop-types';
import Head from 'next/head';

import Nav from './nav';
import '../css/tailwind.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="max-w-6xl mx-auto text-black w-full">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;

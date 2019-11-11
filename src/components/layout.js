import PropTypes from 'prop-types';
import Head from 'next/head';

import Nav from './nav';
import '../css/tailwind.css';
import '../lib/mongoose';

const Layout = ({ children }) => {
  return (
    <div className="bg-blue-900 min-h-screen">
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
  children: PropTypes.array,
};

export default Layout;

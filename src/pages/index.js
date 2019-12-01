/*
    Index page (aka home page)
 */
import React from 'react';

import Layout from '../layout';
import Seo from '../shared/components/seo';
import StoriesList from '../shared/components/stories-list';

function IndexPage() {
    return (
        <Layout>
            <Seo title="Home" />
            <StoriesList />
        </Layout>
    );
}

export default IndexPage;

import React from 'react';

import Layout from '../layout';
import Seo from '../shared/components/seo';
import NewsList from '../shared/components/news-list';

function IndexPage() {
    return (
        <Layout>
            <Seo title="Home" />
            <NewsList />
        </Layout>

    );
}

export default IndexPage;

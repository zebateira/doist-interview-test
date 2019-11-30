import React from 'react';

import Layout from '../layout';
import Seo from '../shared/components/seo';

function NotFoundPage() {
    return (
        <Layout>
            <Seo title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
}

export default NotFoundPage;

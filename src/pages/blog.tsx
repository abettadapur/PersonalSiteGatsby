import * as  React from 'react';
import { default as Link } from 'gatsby-link';

export default class BlogPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <script>
                    <h1>Hi people</h1>
                    <p>Welcome to your new Gatsby site.</p>
                    <p>Now go build something great.</p>
                    <Link to="/page-2/">Go to page 2</Link>
            </div>
                );
    }
}
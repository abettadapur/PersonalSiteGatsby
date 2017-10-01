import * as  React from 'react';
import { default as Link } from 'gatsby-link';

import { ProfilePage } from "./profilePage/ProfilePage";

export default class IndexPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <ProfilePage />;
    }
}
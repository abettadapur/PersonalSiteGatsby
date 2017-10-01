import * as React from "react";
import "./ProfilePage.scss";
import { TopNav } from "../../components/topNav/TopNav";

export class ProfilePage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="profile-page">
                <TopNav title="Alex Bettadapur" links={[{
                    title: "Blog",
                    url: "blog"
                }]} />
            </div>
        )
    }
}
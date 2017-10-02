import * as React from "react";
import { default as Link } from "gatsby-link";
import "./TopNav.scss";

export interface ILink {
    title: string;
    url: string;
}

export interface ITopNavProps {
    title: string;
    links: ILink[];
}

export class TopNav extends React.Component<ITopNavProps, {}> {
    public render(): JSX.Element {
        return (
            <header className="header">
                <div className="header-content">
                    <div className="title">
                        <div className="title-text">
                            {this.props.title}
                        </div>
                    </div>
                    <div className="links">
                        {this.props.links.map((link: ILink) => (
                            <div className="link" key={link.url}>
                                <Link to={link.url}>
                                    {link.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        );
    }
}
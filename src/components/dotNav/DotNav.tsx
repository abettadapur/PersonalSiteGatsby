import * as React from "react";
import * as $ from "jquery";
import "./DotNav.scss";

export type IDotNavLink = {
    title: string;
    href: string;
};

export interface IDotNavProps {
    links: IDotNavLink[];
}

export class DotNav extends React.Component<IDotNavProps, {}> {
    public render(): JSX.Element {
        return (
            <nav className="dot-nav">
                {this.props.links.map((link: IDotNavLink) => this.renderDotNavItem({ title: link.title, href: link.href }))}
            </nav>
        );
    }

    private renderDotNavItem(link: IDotNavLink): JSX.Element {
        return (
            <a className="dot-nav-item" onClick={(event) => this.onDotNavItemClicked(event, link)}>
                <div className="dot-title">
                    {link.title}
                </div>
                <div className="dot" />
            </a>
        )
    }

    private onDotNavItemClicked(event: React.MouseEvent<HTMLElement>, link: IDotNavLink): void {
        event.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $("#" + link.href).offset().top
        }, 500);
    }
}
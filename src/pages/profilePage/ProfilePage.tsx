import * as React from "react";
import "./ProfilePage.scss";

import { DotNav } from "../../components/dotNav/DotNav";
import { Me } from "../../components/me/Me";
import { Section } from "../../components/section/Section";
import { TopNav } from "../../components/topNav/TopNav";

export class ProfilePage extends React.Component<{}, {}> {
    private sections = [{
        id: "section1",
        title: "Section 1",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "section2",
        title: "Section 2",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "section3",
        title: "Section 3",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "section4",
        title: "Section 4",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "section5",
        title: "Section 5",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    }];

    public render(): JSX.Element {
        return (
            <div className="profile-page">
                <TopNav title="Alex Bettadapur" links={[{
                    title: "Blog",
                    url: "blog"
                }]} />


                <div className="profile-page-sections">
                    {this.sections.map((section) => (
                        <Section id={section.id}>
                            {section.element}
                        </Section>
                    ))}
                </div>

                <DotNav links={this.sections.map(section => ({ title: section.title, href: section.id }))} />
            </div>
        )
    }
}
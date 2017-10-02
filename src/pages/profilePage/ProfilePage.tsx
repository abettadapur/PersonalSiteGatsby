import * as React from "react";
import "./ProfilePage.scss";

import { DotNav } from "../../components/dotNav/DotNav";
import { Me } from "../../components/me/Me";
import { Section } from "../../components/section/Section";
import { Timeline } from "../../components/timeline/Timeline";
import { TopNav } from "../../components/topNav/TopNav";

type SectionInfo = {
    id: string;
    navTitle: string;
    title: string;
    className?: string;
    backgroundColor?: string;
    element: JSX.Element;
};

export class ProfilePage extends React.Component<{}, {}> {

    private sections: SectionInfo[] = [{
        id: "home",
        navTitle: "Home",
        title: "",
        className: "hero",
        element: <Me title="Alex Bettadapur" imageSrc="http://alex.bettadapur.com/img/me.jpg" />
    },
    {
        id: "about",
        navTitle: "About",
        title: "About",
        backgroundColor: "#333",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "skills",
        navTitle: "Skills",
        title: "Skills",
        backgroundColor: "#333",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "project",
        navTitle: "Project",
        title: "Project",
        backgroundColor: "#333",
        element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
    },
    {
        id: "timeline",
        navTitle: "Timeline",
        title: "Timeline",
        backgroundColor: "#333",
        element: <Timeline items={[{
            title: "Microsoft",
            subTitle: "VSTS",
            content: "Worked at VSTS",
            dateTitle: "2017-present",
            icon: ""
        },
        {
            title: "Microsoft",
            subTitle: "VSTS",
            content: "Worked at VSTS",
            dateTitle: "2017-present",
            icon: ""
        }]} />
    }, {
        id: "contact",
        navTitle: "Contact",
        title: "Contact",
        backgroundColor: "#333",
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
                        <Section
                            id={section.id}
                            className={section.className}
                            title={section.title}
                            backgroundColor={section.backgroundColor}
                        >
                            {section.element}
                        </Section>
                    ))}
                </div>

                <DotNav links={this.sections.map(section => ({ title: section.navTitle, href: section.id }))} />
            </div>
        )
    }
}
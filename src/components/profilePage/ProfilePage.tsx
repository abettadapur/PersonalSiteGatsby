import * as React from "react";
import "./ProfilePage.scss";

import { About } from "../../components/about/About";
import { DotNav } from "../../components/dotNav/DotNav";
import { Me } from "../../components/me/Me";
import { Section } from "../../components/section/Section";
import { Skills, SkillItem } from "../../components/skills/Skills";
import { Timeline, ITimelineItem } from "../../components/timeline/Timeline";
import { TopNav } from "../../components/topNav/TopNav";

import { css } from "@uifabric/utilities/lib/css";

export { ITimelineItem }

type SectionInfo = {
    id: string;
    navTitle: string;
    title: string;
    className?: string;
    backgroundColor?: string;
    element: JSX.Element;
};

export interface IProfilePageProps {
    aboutText: string;
    skills: SkillItem[];
    timelineItems: ITimelineItem[];
}

export interface IProfilePageState {
    isScrollTop: boolean;
}

export class ProfilePage extends React.Component<IProfilePageProps, IProfilePageState> {
    private profilePage: HTMLDivElement;

    constructor(props: IProfilePageProps, context: any) {
        super(props, context);
        this.scrollListener = this.scrollListener.bind(this);

        this.state = { isScrollTop: true };
    }

    public render(): JSX.Element {
        let sections = this.getSections();
        return (
            <div className="profile-page" ref={(element) => this.profilePage = element}>
                <div className={css("profile-nav", { "transparent": this.state.isScrollTop })}>
                    <TopNav title="Alex Bettadapur" links={[{
                        title: "Blog",
                        url: "blog"
                    }]} />
                </div>


                <div className="profile-page-sections">
                    {sections.map((section) => (
                        <Section
                            id={section.id}
                            key={section.id}
                            className={section.className}
                            title={section.title}
                            backgroundColor={section.backgroundColor}
                        >
                            {section.element}
                        </Section>
                    ))}
                </div>

                <DotNav links={sections.map(section => ({ title: section.navTitle, href: section.id }))} />
            </div>
        )
    }

    public componentDidMount(): void {
        window.addEventListener("scroll", this.scrollListener);
    }

    public componentWillUnmount(): void {
        window.removeEventListener("scroll", this.scrollListener);
    }

    private scrollListener(): void {
        let isScrollTop = document.documentElement.scrollTop === 0;
        if (this.state.isScrollTop !== isScrollTop) {
            this.setState({ isScrollTop: isScrollTop });
        }
    }

    private getSections(): SectionInfo[] {
        return [{
            id: "home",
            navTitle: "Home",
            title: "",
            className: "me-section",
            element: <Me title="Alex Bettadapur" imageSrc="http://alex.bettadapur.com/img/me.jpg" />
        },
        {
            id: "about",
            navTitle: "About",
            title: "About",
            backgroundColor: "#333",
            element: <About text={this.props.aboutText} />
        },
        {
            id: "skills",
            navTitle: "Skills",
            title: "Skills",
            backgroundColor: "#333",
            element: <Skills skills={this.props.skills} />
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
            navTitle: "Experience",
            title: "Experience",
            backgroundColor: "#333",
            className: "timeline-section",
            element: <Timeline items={this.props.timelineItems} />
        }, {
            id: "contact",
            navTitle: "Contact",
            title: "Contact",
            backgroundColor: "#333",
            element: <div style={{ backgroundColor: "blue", height: 300, flex: "auto" }} />
        }];
    }
}
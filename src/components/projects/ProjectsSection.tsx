import * as _ from 'lodash';
import * as React from 'react';
import "./ProjectsSection.scss";

import { Divider } from "../divider/Divider";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Tag } from "../tag/Tag";

export type ProjectItem = {
    title: string;
    subtitle: string;
    url: string;
    githubUrl: string;
    tags: string[];
}

export interface IProjectsSectionProps {
    projects: ProjectItem[];
}

export class ProjectsSection extends React.Component<IProjectsSectionProps> {
    private projects: ProjectItem[] = [{
        title: "Ruse",
        subtitle: "A remote controlled music service with Windows desktop and Android client applications. Uses the WAMP socket protocol to allow clients to control a central Google Music player.",
        url: "a",
        githubUrl: "a",
        tags: ["Python", "Android", "WPF", "Websockets"]
    },
    {
        title: "Ruse",
        subtitle: "A remote controlled music service with Windows desktop and Android client applications. Uses the WAMP socket protocol to allow clients to control a central Google Music player.",
        url: "a",
        githubUrl: "a",
        tags: ["Python", "Android", "WPF", "Websockets"]
    }];

    public render(): JSX.Element {
        return (
            <div className="projects-section">
                {
                    _.map(this.projects, (project: ProjectItem) =>

                        <div>
                            <Project
                                {...project}
                            />
                            <Divider />
                        </div>
                    )
                }
            </div>
        );
    }
}

const Project: React.SFC<ProjectItem> = (props) => {
    return (
        <div className="project">
            <div className="project-header">
                <div className="project-title">
                    {props.title}
                </div>
                <div className="project-buttons">
                    {props.url && <PrimaryButton className="project-button">Project Site</PrimaryButton>}
                    {props.githubUrl && <PrimaryButton className="project-button">Github</PrimaryButton>}
                </div>
            </div>
            <div className="project-subtitle">
                {props.subtitle}
            </div>
            <div className="project-tags">
                {
                    _.map(props.tags, (tag: string) => <Tag text={tag} />)
                }
            </div>
        </div>
    );
};
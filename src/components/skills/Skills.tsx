import "./Skills.scss";
import * as React from "react";

import { SkillDot } from "./SkillDot";

export type SkillItem = {
    title: string;
    imageSrc?: string;
    iconClass?: string;
}

export interface ISkillsProps {
    skills: SkillItem[];
}

export class Skills extends React.Component<ISkillsProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="skills">
                {
                    this.props.skills && this.props.skills.map((skill: SkillItem) => (
                        <SkillDot {...skill} />
                    ))
                }
            </div>
        )
    }
}
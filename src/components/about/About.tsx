import * as React from "react";
import "./About.scss";


export interface IAboutProps {
    text: string;
}

export class About extends React.Component<IAboutProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="about">
                {this.props.text}
            </div>
        );
    }
}
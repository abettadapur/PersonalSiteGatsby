import * as React from "react";
import "./Section.scss";

export interface ISectionProps {
    id: string;
}

export class Section extends React.Component<ISectionProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="section" id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}
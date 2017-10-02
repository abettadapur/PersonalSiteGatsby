import * as React from "react";
import "./Section.scss";

export interface ISectionProps {
    id: string;
    title?: string;
    className?: string;
    backgroundColor?: string;
}

export class Section extends React.Component<ISectionProps, {}> {
    public render(): JSX.Element {
        return (
            <div
                className={`section ${this.props.className}`}
                id={this.props.id}
                style={{
                    backgroundColor: this.props.backgroundColor
                }}
            >
                {
                    this.props.title && <div className="section-title">
                        <div>
                            {this.props.title}
                            <div className="section-title-underline" />
                        </div>
                    </div>
                }
                <div className="section-content">
                    {this.props.children}
                </div>
            </div >
        )
    }
}
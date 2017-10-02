import "./Me.scss";
import * as React from "react";

export interface IMeProps {
    title: string;
    imageSrc: string;
}

export class Me extends React.Component<IMeProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="me-container">
                <div className="me">
                    <div className="me-picture">
                        <img src={this.props.imageSrc} />
                    </div>
                    <div className="me-description">
                        <div className="me-title">
                            {this.props.title}
                        </div>
                        <div className="me-blurb">
                            Description about me
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
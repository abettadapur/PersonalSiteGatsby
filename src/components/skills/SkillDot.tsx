import "./SkillDot.scss";
import * as React from "react";
import { AssetResolver } from "../../assets/AssetResolver";
import { Callout, DirectionalHint } from "office-ui-fabric-react/lib/Callout";
import { autobind } from "@uifabric/utilities/lib/autobind";

export interface ISkillDotProps {
    title: string;
    imageSrc?: string;
    iconClass?: string;
}

export interface ISkillDotState {
    hover: boolean;
}

export class SkillDot extends React.Component<ISkillDotProps, ISkillDotState> {
    private skillDot: HTMLElement;

    constructor(props: ISkillDotProps, context: any) {
        super(props, context);
        this.state = { hover: false };
    }

    public render(): JSX.Element {
        return (
            <div className="skill-dot" ref={element => this.skillDot = element} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="skill-dot-image">
                    {this.renderImage()}
                </div>
                {this.renderPopup()}
            </div>
        )
    }

    private renderImage(): JSX.Element {
        if (this.props.imageSrc) {
            return <img src={AssetResolver.resolveAsset(this.props.imageSrc)} />;
        } else if (this.props.iconClass) {
            return <i className={`fa fa-${this.props.iconClass}`} />;
        }
    }

    private renderPopup(): JSX.Element {
        if (this.state.hover && this.skillDot) {
            return (
                <Callout className="skill-callout" target={this.skillDot} directionalHint={DirectionalHint.topCenter}>
                    <div className="callout-content">
                        {this.props.title}
                    </div>
                </Callout>
            );

        }
    }

    @autobind
    private onMouseEnter(): void {
        this.setState({ hover: true });
    }

    @autobind
    private onMouseLeave(): void {
        this.setState({ hover: false });
    }
}
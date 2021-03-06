import * as React from "react";
import { AssetResolver } from "../../assets/AssetResolver";
import { Dot } from "../dot/Dot";
import { Tag } from "../tag/Tag";
import "./Timeline.scss";

export interface ITimelineItem {
    id: number;
    title: string;
    subTitle: string;
    content: string;
    dateTitle: string;
    icon?: string;
    imageSrc?: string;
    tags: string[];
}

export interface ITimelineProps {
    items: ITimelineItem[];
}

export class Timeline extends React.Component<ITimelineProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="timeline">
                {this.props.items.map((item: ITimelineItem) => this.renderTimelineItem(item))}
            </div>
        );
    }

    private renderTimelineItem(item: ITimelineItem): JSX.Element {
        return (
            <div className="timeline-item" key={item.id}>
                <div className="timeline-date-title">
                    {item.dateTitle}
                </div>
                <div className="timeline-img">
                    {this.renderImage(item)}
                </div>
                <div className="timeline-content">
                    <div className="timeline-title">
                        {item.title}
                    </div>
                    <div className="timeline-subtitle">
                        {item.subTitle}
                    </div>
                    <div className="timeline-description">
                        {item.content}
                    </div>
                    <div className="timeline-tags">
                        {item.tags && item.tags.map(tag => (
                            <Tag text={tag} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    private renderImage(item: ITimelineItem): JSX.Element {
        return (
            <Dot
                imageSrc={item.imageSrc}
                iconClass={item.icon}
            />
        );
    }
}
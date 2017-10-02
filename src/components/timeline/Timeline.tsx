import * as React from "react";
import "./Timeline.scss";

export interface ITimelineItem {
    title: string;
    subTitle: string;
    content: string;
    dateTitle: string;
    icon: string;
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
            <div className="timeline-item">
                <div className="timeline-date-title">
                    {item.dateTitle}
                </div>
                <div className="timeline-img">
                    <i className="fa fa-graduation-cap" />
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
                </div>
            </div>
        )
    }
}
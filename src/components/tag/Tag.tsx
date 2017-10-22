import * as React from 'react';
import "./Tag.scss";

export const Tag: React.SFC<{ text: string }> = (props) => (
    <div className="tag-item">
        {props.text}
    </div>
)
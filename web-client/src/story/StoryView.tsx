import * as React from "react";
import { Story } from "../proto/story/story_pb";

export interface IStoryViewProps {
    story: Story;
}

const StoryView: React.SFC<IStoryViewProps> = (props) => {
    const url = `http://localhost:8900/article-proxy?q=${encodeURIComponent(props.story.url)}`;
    return (
        <iframe
            frameBorder="0"
            style={{
                height: "100vh",
                width: "100%",
            }}
            src={url}
        />
    );
};

export default StoryView;
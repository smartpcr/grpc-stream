import React from "react";
import { Story } from "../proto/story/story_pb";

export interface IStoryListProps {
    stories: Story[];
    selected?: Story;
    onStorySelect: (id: number) => void;
}

const StoryList: React.SFC<IStoryListProps> = (props: IStoryListProps): JSX.Element => {
    return (
        <table>
            <tbody>
                {props.stories.map((story, index) => {
                    return <tr key={index}>
                        <td>{story.getTitle()}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
};

export default StoryList;

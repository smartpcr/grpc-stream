import { StoryActionTypes as ActionTypes } from "./StoryActionTypes";
import { action } from "typesafe-actions";

export function addStory(story: Story) {
    return action(ActionTypes.ADD_STORY, story);
}
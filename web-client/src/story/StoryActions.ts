import { StoryActionTypes as ActionTypes } from "./StoryActionTypes";
import { action } from "typesafe-actions";
import { Story } from "../proto/story/story_pb";

export function addStory(story: Story) {
    return action(ActionTypes.ADD_STORY, story);
}

export function getStories() {
    return action(ActionTypes.GET_STORIES);
}

export function onStoriesError(err: Error) {
    return action(ActionTypes.ON_STORIES_ERROR, err);
}

export function selectStory(storyId: number) {
    return action(ActionTypes.SELECT_STORY, storyId);
}
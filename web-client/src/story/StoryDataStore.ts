import { Story } from "../proto/story/story_pb";

export type StoryState = {
    readonly stories: { [storyId: number]: Story },
    readonly error?: Error,
    readonly loading: boolean,
    readonly selected?: Story
};

export const initialState: StoryState = {
    stories: {},
    loading: false
};
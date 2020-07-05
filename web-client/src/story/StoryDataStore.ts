import { Story } from "../proto/story/story_pb";

export type StoryState = {
    readonly stories: { [storyId: number]: Story.AsObject },
    readonly error?: Error,
    readonly loading: boolean,
    readonly selected?: Story.AsObject
};

export const initialState: StoryState = {
    stories: {},
    loading: false
};
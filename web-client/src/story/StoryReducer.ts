import { StoryState, initialState } from "./StoryDataStore";
import * as actions from "./StoryActions";
import { StoryActionTypes as ActionTypes } from "./StoryActionTypes";
import { ActionType } from "typesafe-actions";
import { Story } from "../proto/story/story_pb";

export type Actions = ActionType<typeof actions>;

export default function storyReducer(state: StoryState = initialState, action: Actions): StoryState {
    switch (action.type) {
        case ActionTypes.GET_STORIES:
            return { ...state, loading: true };
        case ActionTypes.ADD_STORY:
            const story: Story.AsObject = action.payload.toObject();
            const selected = state.selected ?? story;
            if (story.id) {
                return {
                    ...state,
                    loading: false,
                    stories: { ...state.stories, [story.id]: story },
                    selected
                };
            }
            return state;
        case ActionTypes.SELECT_STORY:
            return { ...state, selected: state.stories[action.payload] };
        case ActionTypes.ON_STORIES_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
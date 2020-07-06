import { StoryState } from "./story/StoryDataStore";
import { combineReducers, applyMiddleware, createStore } from "redux";
import storyReducer from "./story/StoryReducer";
import { newGrpcMiddleware } from "./middleware/grpc";
import { StoryActionTypes } from "./story/StoryActionTypes";

// tslint:disable-next-line: no-empty-interface
interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
    stories: StoryState;
}

const reducers = combineReducers<RootState>({
    stories: storyReducer
});

export default createStore(
    reducers,
    applyMiddleware(
        newGrpcMiddleware()
    )
);

export type RootAction =
    | StoryActionTypes;
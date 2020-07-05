import { createStoreHook } from "react-redux";

interface IStoreEnhancerState {
}

export interface RootState extends IStoreEnhancerState {
    stories: StoryState;
}

const reducers = combineReducers<RootState>({
    stories
});

export default createStoreHook(
    reducer,
    applyMiddleware(
        newGrpcMiddleware()
    )
);
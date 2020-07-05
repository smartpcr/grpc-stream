import { Dispatch, Action } from "redux";
import * as Actions from "./StoryActions";
import { grpcRequest } from "../middleware/grpc";
import { ListStoriesRequest, ListStoriesResponse } from "../proto/story/story_pb";
import { Code } from "grpc-web-client/dist/typings/Code";
import { Metadata } from "grpc-web-client/dist/typings/metadata";
import { News } from "../proto/story/story_pb_service";

export function listStories() {
    return async (dispatch: Dispatch) => {
        try {
            grpcRequest<ListStoriesRequest, ListStoriesResponse>({
                request: new ListStoriesRequest(),
                onStart: () => dispatch(Actions.getStories()),
                onEnd: (code: Code, message: string | undefined, trailers: Metadata): Action | void => {
                    // tslint:disable-next-line: no-console
                    console.log(code, message, trailers);
                    return;
                },
                host: "https://localhost:5003",
                methodDescriptor: News.ListStories,
                onMessage: message => {
                    const story = message.getStory();
                    if (story) {
                        dispatch(Actions.addStory(story));
                    }
                    return;
                }
            });
        } catch (err) {
            dispatch(Actions.onStoriesError(err));
        }
    };
}

export function selectStory(storyId: number) {
    return (dispatch: Dispatch) => {
        dispatch(Actions.selectStory(storyId));
    };
}
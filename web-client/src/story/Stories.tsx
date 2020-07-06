import React from "react";
import { Story } from "../proto/story/story_pb";
import * as ActionCreators from "./StoryActionCreators";
import { Container, Row, Col } from "reactstrap";
import { RootState } from "../Store";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import StoryList from "./StoryList";
import StoryView from "./StoryView";

export interface IStoriesProps {
    stories: Story[];
    loading: boolean;
    error?: Error;
    selected?: Story;
    actionCreators: typeof ActionCreators;

    fetchStories: () => void;
    selectStory: (id: number) => void;
}

class Stories extends React.Component<IStoriesProps> {
    public componentDidMount() {
        this.props.actionCreators.fetchStories();
    }

    public render(): JSX.Element {
        return (
            <Container>
                <h3>News with gRPC-Web</h3>
                <Row>
                    <Col lg={4}>
                        <StoryList
                            selected={this.props.selected}
                            stories={this.props.stories}
                            onStorySelect={this.props.selectStory}
                        />
                    </Col>
                    <Col lg={8}>
                        {this.props.selected && <StoryView story={this.props.selected}/>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state: RootState): Partial<IStoriesProps> {
    return {
        stories: Object.keys(state.stories.stories).map(key => state.stories.stories[key]),
        loading: state.stories.loading,
        error: state.stories.error,
        selected: state.stories.selected
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<IStoriesProps> {
    return {
        actionCreators: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
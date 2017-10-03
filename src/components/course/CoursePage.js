import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };

        //binding to instance reference instead of context instance of the input that is passed along with event 
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;  //standard practice to pull state object out
        course.title = event.target.value; // update the object with new value
        this.setState({ course: course }); //set state with new value
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));

        // 3 different ways to dispatch actions
        // 1st this.props.dispatch (courseActions.createCourse(this.state.courses));
        //when mapDispatchToProps is not defined, prop dispatch is auto created
    }

    courseRow(course, index) {
        return <div key={index}> {course.title} </div>;
    }

    render() {

        return (
            <div>
                <h1>Course</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses //second courses is determined by the name used in reducer !!! see courseReducer.js and rootReducer import name
        //ownprops used for routing props
        // this is returning a new object with key courses and value as array from redux store 
    };
}
export default connect(mapStateToProps)(CoursePage);
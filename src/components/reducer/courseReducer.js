export default function createCourse(state = [], action) {

    switch (action.type) {

        case 'CREATE_COURSE':
            debugger;
            return [...state,   //expand the array to instance  
                 Object.assign({}, action.course)]; // deep copy of passed in instance and use action.course to create new instance
        default:
            return state;
    }

}
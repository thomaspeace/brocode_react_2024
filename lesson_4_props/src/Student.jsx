import PropTypes from 'prop-types'

function Student({name, age, isStudent}){

    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )

}


// type checking the props
Student.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    isStudent: PropTypes.bool,
}

// Setting default prop values
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: 0
}

export default Student;
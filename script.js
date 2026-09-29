


/* =====================================================
   1. ARRAY OF STUDENT OBJECTS
===================================================== */

/*
    We use an ARRAY because we want to store
    multiple students.

    Each student is an OBJECT because one student
    contains multiple related properties.
*/

const students = [

    {
        name: "Ali",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 6,
        cgpa: 3.45
    },

    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        department: "Computer Science",
        semester: 5,
        cgpa: 2.80
    },

    {
        name: "Sara",
        rollNumber: "BSCS-003",
        department: "Software Engineering",
        semester: 4,
        cgpa: 3.75
    },

    {
        name: "Ayesha",
        rollNumber: "BSCS-004",
        department: "Artificial Intelligence",
        semester: 3,
        cgpa: 2.30
    },

    {
        name: "Hassan",
        rollNumber: "BSCS-005",
        department: "Data Science",
        semester: 2,
        cgpa: 1.80
    },

    {
        name: "Fatima",
        rollNumber: "BSCS-006",
        department: "Computer Science",
        semester: 7,
        cgpa: 3.10
    }

];




function getAcademicStatus(cgpa) {

    if (cgpa >= 3.00) {

        return "Excellent";

    }

    else if (cgpa >= 2.50) {

        return "Good";

    }

    else if (cgpa >= 2.00) {

        return "Satisfactory";

    }

    else {

        return "Academic Warning";

    }

}





/*
    Arrow function checks whether
    student is eligible.

    Ternary operator is a short if/else.

    condition ? trueValue : falseValue
*/

const checkEligibility = (cgpa) =>

    cgpa >= 2.00
        ? "Eligible"
        : "Not Eligible";





let studentCards = "";


/*
    forEach runs once for every student
    inside the students array.
*/

students.forEach(

    function(student) {


        const {

            name,

            rollNumber,

            department,

            semester,

            cgpa

        } = student;



        const academicStatus =
            getAcademicStatus(cgpa);


        
        const eligibility =
            checkEligibility(cgpa);



        

        studentCards += `

            <div class="col-md-6 col-lg-4">

                <div class="card student-card">

                    <div class="card-body">

                        <h3 class="card-title">
                            ${name}
                        </h3>


                        <p>
                            <strong>Roll No:</strong>
                            ${rollNumber}
                        </p>


                        <p>
                            <strong>Department:</strong>
                            ${department}
                        </p>


                        <p>
                            <strong>Semester:</strong>
                            ${semester}
                        </p>


                        <p>
                            <strong>CGPA:</strong>
                            ${cgpa}
                        </p>


                        <p>
                            <strong>Status:</strong>
                            ${academicStatus}
                        </p>


                        <p>
                            <strong>Eligibility:</strong>
                            ${eligibility}
                        </p>

                    </div>

                </div>

            </div>

        `;

    }

);



document.getElementById(
    "studentContainer"
).innerHTML = studentCards;


/* =====================================================
   LAB 04 - TASK 2
   ONLINE COURSE REGISTRATION SYSTEM
===================================================== */




let courses = [

    "Web Development",

    "Database Systems",

    "Artificial Intelligence",

    "Computer Networks",

    "Software Engineering",

    "Data Structures"

];




courses.push(
    "Cloud Computing"
);




courses.pop();



const hasArtificialIntelligence =
    courses.includes(
        "Artificial Intelligence"
    );





function getTotalCourses(courseArray) {

    return courseArray.length;

}




const totalCourses =
    getTotalCourses(courses);


/* arrow or ternary operator   */

const getStudentStatus = (numberOfCourses) =>

    numberOfCourses >= 4
        ? "Full-Time"
        : "Part-Time";



const studentStatus =
    getStudentStatus(totalCourses);






const aiAvailable =

    hasArtificialIntelligence
        ? "Yes"
        : "No";





let simpleCourseList = "";


for (let course of courses) {

    simpleCourseList +=
        course + "<br>";

}





let numberedCourseList = "";


courses.forEach(

    function(course, index) {

        numberedCourseList +=

            (index + 1) +
            ". " +
            course +
            "<br>";

    }

);





let courseResult = `

    <h4 class="mb-3">
        Available Courses
    </h4>


    <p>
        ${numberedCourseList}
    </p>


    <hr>


    <p>
        <strong>
            Total Registered Courses:
        </strong>

        ${totalCourses}
    </p>


    <p>
        <strong>
            Artificial Intelligence Available:
        </strong>

        ${aiAvailable}
    </p>


    <p>
        <strong>
            Student Status:
        </strong>

        ${studentStatus}
    </p>

`;



document.getElementById(
    "courseOutput"
).innerHTML = `

    <div class="card-body">

        ${courseResult}

    </div>

`;




/* =====================================================
   LAB 04 - TASK 3
   STUDENT EXAMINATION AND RESULT PROCESSING SYSTEM
===================================================== */





const examStudents = [

    {
        name: "Ali",
        rollNumber: "BSCS-021",
        assignment: 17,
        midterm: 21,
        finalExam: 38
    },

    {
        name: "Ahmed",
        rollNumber: "BSCS-022",
        assignment: 12,
        midterm: 18,
        finalExam: 29
    },

    {
        name: "Sara",
        rollNumber: "BSCS-023",
        assignment: 18,
        midterm: 22,
        finalExam: 42
    },

    {
        name: "Ayesha",
        rollNumber: "BSCS-024",
        assignment: 15,
        midterm: 19,
        finalExam: 31
    },

    {
        name: "Hassan",
        rollNumber: "BSCS-025",
        assignment: 9,
        midterm: 13,
        finalExam: 22
    }

];




/*
    This function receives three marks
    and returns their total.
*/

function calculateTotal(assignment, midterm, finalExam) {

    return assignment + midterm + finalExam;

}




/*
    Arrow function is a shorter way
    of writing a function.

    We add all marks and divide by 3.
*/

const calculateAverage = (assignment, midterm, finalExam) => {

    return (
        assignment +
        midterm +
        finalExam
    ) / 3;

};



function calculateGrade(total) {

    if (total >= 80) {

        return "A";

    }

    else if (total >= 70) {

        return "B";

    }

    else if (total >= 60) {

        return "C";

    }

    else if (total >= 50) {

        return "D";

    }

    else {

        return "F";

    }

}




let examResultCards = "";




/*
    forEach runs once for every student
    in the examStudents array.
*/

examStudents.forEach(function(student) {


  

    /*
        We extract values from the student object.

        Instead of writing:

        student.name
        student.assignment
        student.midterm

        we can directly use:

        name
        assignment
        midterm
    */

    const {
        name,
        rollNumber,
        assignment,
        midterm,
        finalExam
    } = student;



    

    const total = calculateTotal(
        assignment,
        midterm,
        finalExam
    );



    const average = calculateAverage(
        assignment,
        midterm,
        finalExam
    );



  

    

    const grade =
        calculateGrade(total);



   

    const status =

        total >= 50
            ? "Passed"
            : "Failed";




    examResultCards += `

        <div class="col-md-6 col-lg-4">

            <div class="card student-card">

                <div class="card-body">

                    <h3 class="card-title">
                        ${name}
                    </h3>

                    <p>
                        <strong>Roll No:</strong>
                        ${rollNumber}
                    </p>

                    <hr>

                    <p>
                        <strong>Assignment:</strong>
                        ${assignment}
                    </p>

                    <p>
                        <strong>Midterm:</strong>
                        ${midterm}
                    </p>

                    <p>
                        <strong>Final Exam:</strong>
                        ${finalExam}
                    </p>

                    <hr>

                    <p>
                        <strong>Total:</strong>
                        ${total}
                    </p>

                    <p>
                        <strong>Average:</strong>
                        ${average.toFixed(2)}
                    </p>

                    <p>
                        <strong>Grade:</strong>
                        ${grade}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        ${status}
                    </p>

                </div>

            </div>

        </div>

    `;

});



/* =====================================================
   7. DISPLAY CARDS USING DOM
===================================================== */

/*
    Find the HTML element with id="resultContainer"
    and put all result cards inside it.
*/

document.getElementById(
    "resultContainer"
).innerHTML = examResultCards;




let passedStudents = 0;




for (
    let i = 0;
    i < examStudents.length;
    i++
) {


   

    const total = calculateTotal(

        examStudents[i].assignment,

        examStudents[i].midterm,

        examStudents[i].finalExam

    );


 

    if (total >= 50) {

        passedStudents++;

    }

}



/* =====================================================
   9. CALCULATE TOTAL AND FAILED STUDENTS
===================================================== */



const totalStudents =
    examStudents.length;




const failedStudents =
    totalStudents - passedStudents;




document.getElementById(
    "resultStatistics"
).innerHTML = `

    <div class="card-body">

        <h4>
            Final Dashboard Statistics
        </h4>

        <hr>

        <p>
            <strong>Total Students:</strong>
            ${totalStudents}
        </p>

        <p>
            <strong>Passed Students:</strong>
            ${passedStudents}
        </p>

        <p>
            <strong>Failed Students:</strong>
            ${failedStudents}
        </p>

    </div>

`;



/* =====================================================
   LAB 04 - TASK 4
   UNIVERSITY STUDENT PERFORMANCE DASHBOARD
===================================================== */


class Student {

    constructor(
        name,
        rollNumber,
        department,
        semester,
        cgpa,
        marks
    ) {

        /*
            "this" refers to the current
            Student object being created.
        */

        this.name = name;

        this.rollNumber = rollNumber;

        this.department = department;

        this.semester = semester;

        this.cgpa = cgpa;

        this.marks = marks;

    }

}





/*
    new Student() creates an object
    using our Student class.
*/

const student1 = new Student(
    "Ali",
    "BSCS-001",
    "Computer Science",
    6,
    3.45,
    82
);


const student2 = new Student(
    "Ahmed",
    "BSCS-002",
    "Computer Science",
    5,
    2.80,
    67
);


const student3 = new Student(
    "Sara",
    "BSCS-003",
    "Software Engineering",
    6,
    3.75,
    91
);


const student4 = new Student(
    "Ayesha",
    "BSCS-004",
    "Artificial Intelligence",
    4,
    2.30,
    58
);


const student5 = new Student(
    "Hassan",
    "BSCS-005",
    "Data Science",
    3,
    1.75,
    42
);


const student6 = new Student(
    "Fatima",
    "BSCS-006",
    "Software Engineering",
    7,
    3.20,
    76
);





const dashboardStudents = [

    student1,

    student2,

    student3,

    student4,

    student5,

    student6

];





const departments = [

    "Computer Science",

    "Software Engineering",

    "Artificial Intelligence"

];





departments.push(
    "Data Science"
);





const hasComputerScience =

    departments.includes(
        "Computer Science"
    );



let departmentList = "";


for (let department of departments) {

    departmentList +=

        department +
        "<br>";

}





document.getElementById(
    "departmentOutput"
).innerHTML = `

    <p>
        ${departmentList}
    </p>

    <p>
        <strong>
            Computer Science Available:
        </strong>

        ${
            hasComputerScience
                ? "Yes"
                : "No"
        }

    </p>

`;




function dashboardCalculateGrade(marks) {

    if (marks >= 80) {

        return "A";

    }

    else if (marks >= 70) {

        return "B";

    }

    else if (marks >= 60) {

        return "C";

    }

    else if (marks >= 50) {

        return "D";

    }

    else {

        return "F";

    }

}

const getDashboardStatus = (cgpa) =>

    cgpa >= 2.0
        ? "Eligible"
        : "Academic Warning";





let firstStudentProperties = "";


for (
    let property in dashboardStudents[0]
) {

    firstStudentProperties +=

        property +
        ": " +
        dashboardStudents[0][property] +
        "<br>";

}




document.getElementById(
    "studentPropertiesOutput"
).innerHTML =

    firstStudentProperties;




let dashboardCards = "";




dashboardStudents.forEach(

    function(student) {



        /*
            Extract properties from the
            current student object.
        */

        const {

            name,

            rollNumber,

            department,

            semester,

            cgpa,

            marks

        } = student;



        

        const grade =

            dashboardCalculateGrade(
                marks
            );



        const status =

            getDashboardStatus(
                cgpa
            );



        /* =============================================
           CREATE STUDENT CARD
        ============================================= */

        dashboardCards += `

            <div class="col-md-6 col-lg-4">

                <div class="card student-card">

                    <div class="card-body">

                        <h3 class="card-title">
                            ${name}
                        </h3>


                        <p>
                            <strong>
                                Roll No:
                            </strong>

                            ${rollNumber}
                        </p>


                        <p>
                            <strong>
                                Department:
                            </strong>

                            ${department}
                        </p>


                        <p>
                            <strong>
                                Semester:
                            </strong>

                            ${semester}
                        </p>


                        <p>
                            <strong>
                                CGPA:
                            </strong>

                            ${cgpa}
                        </p>


                        <p>
                            <strong>
                                Marks:
                            </strong>

                            ${marks}
                        </p>


                        <p>
                            <strong>
                                Grade:
                            </strong>

                            ${grade}
                        </p>


                        <p>
                            <strong>
                                Status:
                            </strong>

                            ${status}
                        </p>

                    </div>

                </div>

            </div>

        `;

    }

);



/* =====================================================
   10. DISPLAY DASHBOARD USING DOM
===================================================== */

document.getElementById(
    "performanceDashboard"
).innerHTML =

    dashboardCards;



/* =====================================================
   11. FOR LOOP FOR FINAL STATISTICS
===================================================== */

/*
    We use a traditional for loop
    to count students who passed.

    Marks >= 50 means Passed.
*/

let dashboardPassedStudents = 0;


for (
    let i = 0;
    i < dashboardStudents.length;
    i++
) {

    if (
        dashboardStudents[i].marks >= 50
    ) {

        dashboardPassedStudents++;

    }

}





const dashboardTotalStudents =

    dashboardStudents.length;




const dashboardFailedStudents =

    dashboardTotalStudents -
    dashboardPassedStudents;




document.getElementById(
    "dashboardStatistics"
).innerHTML = `

    <div class="card-body">

        <h4>
            Final Dashboard Statistics
        </h4>

        <hr>


        <p>
            <strong>
                Total Students:
            </strong>

            ${dashboardTotalStudents}
        </p>


        <p>
            <strong>
                Passed Students:
            </strong>

            ${dashboardPassedStudents}
        </p>


        <p>
            <strong>
                Failed Students:
            </strong>

            ${dashboardFailedStudents}
        </p>

    </div>

`;
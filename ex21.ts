/*Q=21

Object
think of something you could store in a Typescript Object,Write a programme that creates
objects containing these items*/

interface itCourse {
    courseName: string;
    location: string;
    onSiteStudents:number
}
let itCourse={
    courseName :"TypeScript ",
    location: "GovernorHouse",
    onSiteStudents: 50000
}
console.log(itCourse);
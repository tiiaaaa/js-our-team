const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
},
{
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
},
];

//! Milestone 1
for (let i = 0; i < team.length; i = i + 1){
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);
};

//!Milestone 2 
let person;

let workRole;

let photo;

const objectWrap = document.getElementsByClassName("object-wrap");
// console.log(objectWrap);

for (let i = 0; i < team.length; i = i + 1){
    person = team[i].name
    console.log(person);
    workRole = team[i].role;
    console.log(workRole);
    photo = team[i].image
    console.log(photo);

    objectWrap[i].innerHTML = person + ", " + workRole + ", " + photo;
};
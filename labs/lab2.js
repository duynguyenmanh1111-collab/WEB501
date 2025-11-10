// bai 1
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// bai 2
const student = {
    name: "Thuy Tien",
    age: "20",
};
student.grade = "A";
student.age = "21";
console.log(student);

// bai 3
const name = "Thuy Tien";
const course = "Javascrip";
const email = `Xin Chào ${name},
Cam ơn bạn đã đăng ký khóa học ${course}.
chúc b học tốt 
`;

console.log(email);

// bai 4

const title = "Gioi thieu ban thân ";
const content = "Minh la Mạnh Duy, sinh vien nam 2.";
const html = `
<div class="card">
  <h2> ${title} </h2> 
  <p> ${content} </p> 
</div>
`;
console.log(html);

// bai 5
const name1 = "Mạnh Duy";
const age = 19;
const student2 = {
    name1,
    age,
    sayHi() {
        console.log(`Xin chao, minh la ${this.name1}`);
    },
};
student2.sayHi();

// bai 6
const propName = "grade";
const student1 = {
    name: "Mạnh Duy",
    age: 21,
    [propName]: "A",
};
console.log(student1.grade);

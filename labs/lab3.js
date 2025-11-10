// funcion 1
const multiply = (a, b) => a * b;
//funcion 2
const isPositive = (number) => number >= 0;
// funcion 3
const getRandomNumber = () => Match.random();
// funcion 4
// document.addEventListener("click", () => console.log("Clicked!"));

//thu thập tất cả tham số
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(3, 1, 3));

//kết hợp vs tham số thông thường
function introduce(name, age, ...hobbies) {
    console.log(`Nam:${name}`);
    console.log(`Age:${age}`);
    console.log(`Hobbies:${hobbies.join(",")}`);
}
introduce("Duy", 19, "Bóng đá", "Cầu lông", "Bơi lội");
createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
    return {
        name,
        age,
        isAdmin,
    };
};
console.log(createUser());
console.log(createUser("hihi", 25, true));

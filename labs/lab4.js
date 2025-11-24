//bai1
function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = rest[rest.length - 1];
    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4]));
//bai2

//object destructuring

//bai1
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const {
        getUserInfo: {
            name,
            contact: { email },
        },
    } = user;
    return { name, email };
}

console.log(getUserInfo(user));
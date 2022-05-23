function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchEmployees = async (searchTerm) => {

    await sleep(500);

    return [0, 1, 2, 3, 4].map(i => {
        return {
            name: `name ${i}`,
            id: `id: ${i} ${searchTerm}`,
            logoUrl: 'https://cook.fnr.sndimg.com/content/dam/images/cook/editorial/shows/man-v-food/cc_man-v-food-showchip.jpg.rend.hgtvcom.616.347.suffix/1561496564015.jpeg'
        };
    });
};

const getEmployee = async (id) => {
    await sleep(500);

    return {
        name: `name${id}`,
        id: `id: ${id}`,
        profilePic: 'https://cook.fnr.sndimg.com/content/dam/images/cook/editorial/shows/man-v-food/cc_man-v-food-showchip.jpg.rend.hgtvcom.616.347.suffix/1561496564015.jpeg',
        fullName: `name${id} Khaled Mohammad Sabateen`,
        dateOfBirth: new Date(),
        username: 'alaa2sabateen',
        password: undefined,
        email: 'alsabateen.alaa@gmail.com',
        phone: '0796442391',
        branchId: `dqwdwqwdq 3`
    };
}

const saveEmployee = async ({id, profilePic, fullName, dateOfBirth, username, password, email, phone, branchId}) => {

    console.log(id + profilePic + fullName + dateOfBirth + username + password + email + phone + branchId);

    return true;
};


const createEmployee = async ({profilePic, fullName, dateOfBirth, username, password, email, phone, branchId, accountType}) => {

    console.log(profilePic + fullName + dateOfBirth + username + password + email + phone + branchId);

    return true;
};


export {fetchEmployees, getEmployee, saveEmployee, createEmployee};

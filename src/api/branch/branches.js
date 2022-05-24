function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


if (!localStorage.hasOwnProperty('location-edit-branch')) {
    localStorage.setItem('location-edit-branch', JSON.stringify({lat: 31.952308, lng: 35.819598}));
}
const branchesFetcher = async () => {

    const branches = [];
    for (let i = 0; i < 30; i++) {
        branches.push({name: 'Amman, Wadi Al-Seer, Al-Hadeel St.', id: `dqwdwqwdq ${i}`});
    }

    await sleep(500);

    return branches;
};


const branchFetcher = async (id) => {

    const queues = [];
    for (let i = 0; i < 30; i++) {
        queues.push({name: `Category ${i}`, id: `dqwdwqwdq ${i}`});
    }

    await sleep(500);

    return {
        queues: queues,
        id: id,
        name: 'Amman, Wadi Al-Seer, Al-Hadeel St.',
        phone: '0790332791',
        location: JSON.parse(localStorage.getItem('location-edit-branch'))
    };
};


const updateBranch = async ({id, location, name, phone}) => {


    await sleep(1000);
    console.log(name);
    localStorage.setItem('location-edit-branch', JSON.stringify(location));
    return true;
};

const createBranch = async ({location, name, phone}) => {

    await sleep(1000);
    return true;
};



export {branchesFetcher, branchFetcher, updateBranch, createBranch};
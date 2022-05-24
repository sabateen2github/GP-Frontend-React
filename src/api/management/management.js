const saveInstituteDetails = async ({logoUrl, name, phone, email}) => {

    return true;
};


const fetchInstituteDetails = async (id) => {
    return {
        logo: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png',
        name: 'McDonald\'s',
        id: id
    };
};


export {fetchInstituteDetails, saveInstituteDetails};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchBusinesses = async (searchTerm) => {

    await sleep(500);

    return [0, 1, 2, 3, 4].map(i => {
        return {
            name: `name ${i}`,
            id: `id: ${i} ${searchTerm}`,
            logoUrl: 'https://cook.fnr.sndimg.com/content/dam/images/cook/editorial/shows/man-v-food/cc_man-v-food-showchip.jpg.rend.hgtvcom.616.347.suffix/1561496564015.jpeg'
        };
    });
};


export {fetchBusinesses};
// fake api data

import Chance from "chance";


const chance = Chance()

export const fakeUserData = () => {
    // return
    // console.log(chance.name({ middle: true }));
    return chance.name({ middle: true })
}

// fakeUserData()
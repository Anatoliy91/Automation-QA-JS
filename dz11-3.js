function makePuppy(mother, father) {
    const { name: motherName, ...motherProps } = mother;
    const { name: fatherName, ...fatherProps } = father;
    const puppyName = `${motherName.substring(0, motherName.length / 2)}${fatherName.substring(fatherName.length / 2)}`;
    return {
        name: puppyName,
        ...motherProps,
        ...fatherProps
    };
}

const mother = {
    name: 'Bella',
    breed: 'Labrador',
    color: 'yellow'
};

const father = {
    name: 'Max',
    breed: 'Golden Retriever',
    size: 'large'
};

const puppy = makePuppy(mother, father);
console.log(puppy);

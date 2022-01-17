

export const makeNewArrayForTable = (
    arr: any,
    value: any,
    newArr: any,
    firstFilterable: any,
    secondFilterable?: any
) => {
    if (typeof value !== 'string') return;

        if (secondFilterable) {
            arr.map((item: any) => {
                let name = `${item[firstFilterable]} ${item[secondFilterable]}`,
                    nameReverse = ` ${item[secondFilterable]} ${item[firstFilterable]}`;
                if (name.toLowerCase().includes(value.toLowerCase()) ||
                    nameReverse.toLowerCase().includes(value.toLowerCase())) {
                    return newArr.push(item);
                }
                return arr;
            });
        };

        if (!secondFilterable) {
            arr.map((item: any) => {
                let name = item[firstFilterable];
                if (name.toLowerCase().includes(value.toLowerCase())) {
                    return newArr.push(item);
                }
                return arr;
            });
        };
<<<<<<< HEAD



=======
>>>>>>> 8a3b689 (added filtering to the Projects table in the Project name column and in the Description column)
};
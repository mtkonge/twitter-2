
export const random = (min: number, max: number) => {

    const random = Math.random();
    const shifted = random * (max - min);
    return shifted + min;


}

export const randInt = (min: number, max: number) => {


    return Math.floor(random(min, max));

}

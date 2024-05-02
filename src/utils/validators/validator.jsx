export const required = value => (value ? undefined : 'Пусто');

export const maxLengthCreator = (maxLength) => value =>{
    if(value.length>=maxLength) return `Максимальная длина больше ${maxLength} символов`;
    return undefined;
}

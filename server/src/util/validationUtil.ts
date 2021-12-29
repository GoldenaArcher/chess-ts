export const isArray = (val: any) => Array.isArray(val);

export const isEmptyArray = (val: any) => isArray(val) && val.length === 0;

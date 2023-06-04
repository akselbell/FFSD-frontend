

export const safeJSON = (toParse: string, receiver?: ((this: any, key: string, value: any) => any) | undefined) => {
    try {
        return JSON.parse(toParse, receiver);
    } catch(_) {
        throw new SyntaxError("Invalid json: " + toParse);
    }
};

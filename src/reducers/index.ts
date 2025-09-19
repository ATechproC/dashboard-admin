export default function reducer(currentState : any, { type, payload }: { type: "handled", payload: any }) {
    switch (type) {
        case "handled": {
            const newArr = [...currentState];
            for (let i = 0; i < newArr.length; i++) {
                let newObject;
                if (i === payload.id - 1) {
                    newObject = { ...newArr[i], isChecked: !newArr[i].isChecked };
                } else {
                    newObject = { ...newArr[i], isChecked: false };
                }
                newArr[i] = newObject;
            }
            return newArr
        }
        default: {
            throw Error("unknown action " + type)
        }
    }
}
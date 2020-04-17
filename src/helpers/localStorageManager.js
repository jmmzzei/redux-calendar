export const saveStateInLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state", serializedState)
    } catch {
        // ignore write errors
    }
};

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}; 

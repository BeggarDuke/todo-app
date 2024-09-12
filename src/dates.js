export const datesMethods = {
    setCreationDate: function() {
        return {
            date: new Intl.DateTimeFormat("en-GB", { dateStyle: "short", }).format(new Date()),
            time: new Intl.DateTimeFormat("en-GB", { timeStyle: "long", }).format(new Date()),
            stamp: new Date().toUTCString(),
        }
    },
    setBeginDate: function(data) {
        if (!data) return undefined;
        return new Intl.DateTimeFormat("en-GB", {dateStyle: "short", timeStyle: "long"}.format(new Date(data)));
    },
    setEndDate: function(data) {
        if (!data) return undefined;
        return new Intl.DateTimeFormat("en-GB", {dateStyle: "short", timeStyle: "long"}.format(new Date(data)));
    },
    setTimeZone: function() {
        //some code
    },
}
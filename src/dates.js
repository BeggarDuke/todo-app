export const datesMethods = {
  setCreationDate: function () {
    return {
      date: new Date(),
      formattedDate: new Intl.DateTimeFormat("en-GB", {
        dateStyle: "short",
        timeStyle: "long",
      }).format(new Date()),
    };
  },
  setBeginDate: function (data) {
    if (!data) return undefined;
    return {
      date: new Date(data),
      formattedDate: new Intl.DateTimeFormat("en-GB", {
        dateStyle: "short",
        timeStyle: "long",
      }).format(new Date(data)),
    };
  },
  setEndDate: function (data) {
    if (!data) return undefined;
    return {
      date: new Date(data),
      formattedDate: new Intl.DateTimeFormat("en-GB", {
        dateStyle: "short",
        timeStyle: "long",
      }).format(new Date(data)),
    };
  },
  setTimeZone: function () {
    //some code
  },
};

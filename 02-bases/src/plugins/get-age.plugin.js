import getAgePlugin from "get-age";

export const getAge = birthdate => {
  if (!birthdate) return new Error("Birthdate is required");
  return getAgePlugin(birthdate);
};

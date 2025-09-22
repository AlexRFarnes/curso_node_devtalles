"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const heroes = [
    {
        id: 1,
        name: "Ironman",
        owner: "Marvel",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Batman",
        owner: "DC",
    },
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(4);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : "Hero not found");
//# sourceMappingURL=app.js.map
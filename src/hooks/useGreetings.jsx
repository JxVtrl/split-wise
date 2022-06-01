import { useData } from "../utils";

export function formatName(name) {
    name = name.split(' ')
    return name[0].charAt(0).toUpperCase() + name[0].slice(1);
}

export function greeting(name) {
    const hour = new Date().getHours()

    const greet = useData.texts.greetings;
    const greeting =
        hour < 12 && hour >= 4
            ? greet.day
            : hour >= 12 && hour < 18 ?
                greet.evening
                : greet.night

    return `${greeting} ${formatName(name)} `
}
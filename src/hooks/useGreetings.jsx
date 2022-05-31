export function formatName(name) {
    name = name.split(' ')
    return name[0].charAt(0).toUpperCase() + name[0].slice(1);
}

export function greeting(name) {
    const hour = new Date().getHours()
    const greeting =
        hour < 12 && hour >= 4 ?
            'Bom dia' :
            hour >= 12 && hour < 18 ?
                'Boa tarde' : 'Boa noite'

    return `${greeting} ${formatName(name)} `
}
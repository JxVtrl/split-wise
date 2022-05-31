export function formatName(name) {
    name = name.slice(' ')
    return name[0][0].toUpperCase() + name.slice(1).toLowerCase();
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
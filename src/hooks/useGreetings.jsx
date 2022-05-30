export function formatName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
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
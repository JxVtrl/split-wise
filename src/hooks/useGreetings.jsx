export function greeting(name) {
    const hour = new Date().getHours()
    const greeting = hour < 12 && hour > 4 ? 'bom dia' : hour > 12 && hour < 18 ? 'boa tarde' : 'boa noite'
    name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    return `Olá ${name}, ${greeting}`
}
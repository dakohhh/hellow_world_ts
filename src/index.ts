export interface User {
    name: string;
    age: number;
}


export function greet(options: { user: string | User }): string {
    if (typeof options.user === 'string') {
        return `Hello World 🌍, from ${options.user}!`;
    }
    return `Hello World 🌍, from ${options.user.name}, who is ${options.user.age} years old.`;
}
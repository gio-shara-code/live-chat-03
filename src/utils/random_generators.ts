export function getRandomUid(text: string):string {
    return `${Math.random()}_${text}_${Math.random()}`
}
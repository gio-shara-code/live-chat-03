export const getRandomUi = (text: string): string => {
  return `${Math.random()}_${text}_${Math.random()}`
}

export const randomNicknameGenerator = (): string => {
  const nicknames = [
    "Glenn",
    "Sebastian",
    "Giorgi",
    "Anna",
    "Josh",
    "Nick",
    "Tim",
    "Adrian",
    "Alex",
    "Alena",
    "Christian"
  ]

  return nicknames[Math.floor(Math.random() * nicknames.length)]
}

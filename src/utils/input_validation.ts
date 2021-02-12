export function nicknameGetError(nickname: string): string {
    if(!nickname || nickname.length === 0) return 'Empty.'
    else if(nickname.split(' ').length > 1) return 'No space between the words'
    else if(nickname.length <= 2 || nickname.length >= 11) return 'Min. 3 or max. 10 characters.'
    return '';
}

export function isNicknameValid(nickNameError: string): boolean {
    if(!nickNameError && nickNameError !== null) return true
    return false;
}


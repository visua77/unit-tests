export const hashtags = (text) => {


    let string = 'Hello #world this is a #string with #hashtags'
    let result = string.match(/(\#\S+\b)/ig)
    text = result


    return text
}
export function minMaxLength(text, minLength, maxLength) {
    let result = !text || text.length < minLength;
    if(maxLength)
        result = result || text.length < minLength;
    return result;
}
 
export function validEmail(text) {
    const regex = RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      );
     
    return regex.test(text);
}
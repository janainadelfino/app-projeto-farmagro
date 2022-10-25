export function limitDescription(description) {
    if(description.length > 10) {
      return description.substring(0, 7) + '...'
    }else{
      return description
    }
}
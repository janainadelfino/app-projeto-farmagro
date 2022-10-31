export function getYoutubeID(url){
  return url.split('v=')[1].split('&list=')[0];
}
const formatImageFromBackend =  (image : string) => {
    if(!image) return "https://picsum.photos/200/300"

    if(image.startsWith('http') || image.startsWith('/static/media/') ) return image
    return "http://localhost:8000" + image;
}

export {formatImageFromBackend}
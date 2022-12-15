

const onUserScrollTopOrEnd = (onUserScrollUp:any,onUserScrollDown : any) => {
    // get the current scroll position
    let previousScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", function (event:any) {
        // get the current scroll position
        let currentScrollPosition = window.scrollY;
    
        // check if the user is scrolling up or down
        if (currentScrollPosition > previousScrollPosition) {
          onUserScrollUp()
        } else {
          onUserScrollDown()
        }
    
        // update the previous scroll position
        previousScrollPosition = currentScrollPosition;
    
            
    });
}

export default onUserScrollTopOrEnd
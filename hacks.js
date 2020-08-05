// Extended version of the createElement

// At this moment, the function creates an element which some properties in {} and able to create parent-child relationships through the third parameter by using arrays. 

export const createElement = (tagName, props, children = []) => {
    const element = document.createElement(tagName);
    Object.assign(element, props);
    children.forEach((child) => {
      element.append(child);
    });
    return element;
  };

  // Create a button with JS that changes variable CSS when being clicked

  const toggleButton = document.querySelector('.toggle')

let isDark = true;

toggleButton.addEventListener("click", () => {
    const rootStyle = document.documentElement.style;

    if (isDark) {
    rootStyle.setProperty('--main-bg-color', "#fff");
    rootStyle.setProperty('--main-font-color', "#000");
    } else {
    rootStyle.setProperty('--main-bg-color', "red");
    rootStyle.setProperty('--main-font-color', "grey");
    }
    isDark = !isDark;
});
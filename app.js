function setGreeting() {
    let curTime = new Date().toLocaleTimeString();
    let milTime = new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
    milTimeArray = milTime.split(':');
    milTime = milTimeArray[0] + milTimeArray[1];

    let greeting;

    if (milTime >= 0000 && milTime <= 1159) {
        greeting = 'Good Morning!';
    } else if (milTime >= 1200 && milTime <= 1700) {
        greeting = 'Good Afternoon!';
    } else if (milTime >= 1701 && milTime <= 2359) {
        greeting = 'Good Evening!';
    }

    return (React.createElement("p", {}, greeting + ' ' + curTime));
}

function setIcon() {
    let milTime = new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
    milTimeArray = milTime.split(':');
    milTime = milTimeArray[0] + milTimeArray[1];

    let imgContainer = document.createElement("img");
    if (milTime >= 0600 && milTime <= 1800) {
        return (ReactDOM.render(React.createElement("img", {
            src: "./photos/sun.svg"
        }, null), document.getElementById("icon-image")));
    } else {
        return (ReactDOM.render(React.createElement("img", {
            src: "./photos/moon.svg"
        }, null), document.getElementById("icon-image")));
    }

}

function setTimeContainer() {
    setIcon();
    ReactDOM.render(React.createElement("div", null, React.createElement(setGreeting, null)),
        document.getElementById("time-container"));
}

setInterval(setTimeContainer, 1000);
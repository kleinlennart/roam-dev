// Docs: https://reimagined-goldfish-qvwxj5j4r67fxwrg.github.dev/


// `onload` receives an object with the [[Roam Depot/Extension API]] in it
function onload({ extensionAPI, ...rest }) {
    console.log(extensionAPI, rest);
    alert(extensionAPI, rest);

    // extensionAPI.settings.panel.create(panelConfig);
    // console.log("Loaded Settings Panel Example");

    // secondary onunload function, called before the other one
    return () => console.log("Secondary onunload");
}

// All state setup in `onload` should be removed in `onunload`
function onunload() {
    console.log("Unloaded Settings Panel Example");
    alert("Unloaded Settings Panel Example");
}

// export default {
//     onload: onload,
//     onunload: onunload
// };

export default {
    onload: ({extensionAPI}) => {},
    onunload: () => {}
  };
function onload({ extensionAPI, ...rest }) {
    console.log(extensionAPI, rest);

    // extensionAPI.settings.panel.create(panelConfig);
    // console.log("Loaded Settings Panel Example");
    
    // secondary onunload function, called before the other one
    return () => console.log("Secondary onunload");
}

function onunload() {
    console.log("Unloaded Settings Panel Example");
}

export default {
    onload: onload,
    onunload: onunload
};
// Docs: https://reimagined-goldfish-qvwxj5j4r67fxwrg.github.dev/

// Example from Autotag, https://github.com/RoamJS/autotag/blob/c9ef187438c5e95dcb4fab621a346124c8ac2635/src/index.ts#L99
// function onload({ extensionAPI }: OnloadArgs) {

function onload() {
	console.log("Unloaded!");
	alert("Loaded!");

	// await Promise to resolve to value
	const uid = await window.roamAlphaAPI.ui.mainWindow.getOpenPageOrBlockUid();

	// pull data
	let data = window.roamAlphaAPI.data.pull("[*]", [":block/uid", uid])

	// window.addEventListener("keydown", keydown);
	// console.log("Current Page/Block:", uid);

	// check if it's a page
	if (data[':node/title'] !== undefined) {
		console.log("Page!");

		let children = data[':block/children']
		let first_block = window.roamAlphaAPI.data.pull("[*]", children[0][':db/id'])

		const regex = /^Tags::/;

		regex.test(first_block[':block/string'])

		// block content 
		if (regex.test(first_block[':block/string'])) {
			console.log("Tags:: already exists!")
		} else {
			console.log("Add Tags::")
			window.roamAlphaAPI.createBlock({
				"location":
				{
					"parent-uid": uid,
					"order": 0
				},
				"block":
					{ "string": "Tags:: " }
			})
		}
	}

}


// All state setup in `onload` should be removed in `onunload`
function onunload() {
	console.log("Unloaded!");
	alert("Unloaded!");
}

export default {
	onload: onload,
	onunload: onunload
};


// ---------------------------------------------------------------------------------------------

// `onload` receives an object with the [[Roam Depot/Extension API]] in it
// function onload({ extensionAPI, ...rest }) {
//     console.log(extensionAPI, rest);
//     alert(extensionAPI, rest);

//     // extensionAPI.settings.panel.create(panelConfig);
//     // console.log("Loaded Settings Panel Example");

//     // secondary onunload function, called before the other one
//     return () => console.log("Secondary onunload");
// }



// Default, https://roamresearch.com/#/app/developer-documentation/page/gjlpVMUA-
// export default {
//     onload: ({extensionAPI}) => onload,
//     onunload: () => onunload
//   };

// document.addEventListener("keyup", dateTagListener)



// const dateTagListener = (e: KeyboardEvent) => {
// 	const target = e.target as HTMLElement;
// 	if (
// 		(e.key === ";" || e.code === "Semicolon") &&
// 		target.tagName === "TEXTAREA" &&
// 		target.classList.contains("rm-block-input")
// 	) {
// 		const { selectionStart, id, value } = target as HTMLTextAreaElement;
// 		const location = window.roamAlphaAPI.ui.getFocusedBlock();
// 		const textToCursor = value.substring(0, selectionStart);
// 		if (/;[^;]+;$/.test(textToCursor)) {
// 			const match = /;[^;]+;$/.exec(textToCursor);
// 			const replace = match[0].slice(1, -1);
// 			const replaced = parseTextForDates(replace);
// 			if (replaced && replaced !== replace) {
// 				blockUpdate(
// 					location["block-uid"],
// 					`${value.slice(0, match.index)}${replaced}${value.slice(
// 						selectionStart
// 					)}`
// 				).then(() => {
// 					window.roamAlphaAPI.ui.setBlockFocusAndSelection({
// 						location,
// 						selection: {
// 							start: selectionStart - replace.length - 2 + replaced.length,
// 						},
// 					});
// 				});
// 			}
// 		}
// 	}
// };

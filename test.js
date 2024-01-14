const uid = await window.roamAlphaAPI.ui.mainWindow.getOpenPageOrBlockUid();

let data = window.roamAlphaAPI.data.pull("[*]", [":block/uid", uid])
// let children = window.roamAlphaAPI.data.pull("[:block/children]", [":block/uid", uid])




// check if page
if (data[':node/title'] !== undefined) {
  console.log("Page!");

  let children = data[':block/children']

  // ':block/string'
  let first_block = window.roamAlphaAPI.data.pull("[*]", children[0][':db/id'])
  // window.roamAlphaAPI.data.pull("[:block/string]", children[0][':db/id'])

  const regex = /^Tags::/;
  
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
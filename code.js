"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
//Page Structure
let pageStructure = [
    "🖼️ Thumbnail",
    "📄 Project Summary",
    "_____________________",
    "🧩 Resources",
    "🚧 Work in Progress",
    "👀 Internal Reviews",
    "_____________________",
    "⚙️ Prototypes",
    "✅ Ready for Dev",
];
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    yield figma.loadFontAsync({
        family: "Inter",
        style: "Bold",
    });
    //the Asyc function is veeery important it breaks everything
    if (msg.type === "create") {
        //Pages Creation
        for (let page of pageStructure.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
            figma.currentPage.name = pageStructure[0];
            //console.log(page);
        }
        //Thumbnail Creation
        let projectThumbnail = figma.createFrame();
        projectThumbnail.resize(1920, 1080);
        projectThumbnail.name = "Thumbnail";
        let thumbText = figma.createText();
        projectThumbnail.appendChild(thumbText);
        thumbText.x = 120;
        thumbText.y = 335;
        thumbText.fontSize = 120;
        thumbText.resize(1097, 435);
        thumbText.fills = [
            { type: "SOLID", color: { r: 46 / 255, g: 124 / 255, b: 47 / 255 } },
        ];
        let placeHolder = "Awesome Thumbnail Title oh Yeah!";
        thumbText.characters = placeHolder;
        thumbText.name = "Thumbnail Title";
        console.log(thumbText.textStyleId);
        // Create Text Styles
        let h1 = figma.createTextStyle();
        h1.fontSize = 120;
        h1.name = "Heading 1";
        let h2 = figma.createTextStyle();
        h2.fontSize = 64;
        h2.name = "Heading 2";
        let h3 = figma.createTextStyle();
        h3.fontSize = 48;
        h3.name = "Heading 3";
        let h4 = figma.createTextStyle();
        h4.fontSize = 32;
        h4.name = "Heading 4";
        let h5 = figma.createTextStyle();
        h5.fontSize = 24;
        h5.name = "Heading 5";
        let h6 = figma.createTextStyle();
        h6.fontSize = 20;
        h6.name = "Heading 6";
        let paragraph = figma.createTextStyle();
        paragraph.fontSize = 16;
        paragraph.name = "paragraph";
        let smallText = figma.createTextStyle();
        smallText.fontSize = 16;
        smallText.name = "Small Text";
        //Create Color Styles
        let primaryCol = figma.createPaintStyle();
        primaryCol.name = "Primary";
        primaryCol.paints = [
            { type: "SOLID", color: { r: 231 / 255, g: 139 / 255, b: 139 / 255 } },
        ];
        let secondaryCol = figma.createPaintStyle();
        secondaryCol.name = "Secondary";
        secondaryCol.paints = [
            { type: "SOLID", color: { r: 207 / 255, g: 209 / 255, b: 144 / 255 } },
        ];
        let tertearyCol = figma.createPaintStyle();
        tertearyCol.name = "Terteary";
        tertearyCol.paints = [
            { type: "SOLID", color: { r: 81 / 255, g: 96 / 255, b: 109 / 255 } },
        ];
        let accentCol = figma.createPaintStyle();
        accentCol.name = "Accent";
        accentCol.paints = [
            { type: "SOLID", color: { r: 54 / 255, g: 185 / 255, b: 181 / 255 } },
        ];
        //Create Shadows Style
        let elevation0 = figma.createEffectStyle();
        elevation0.name = "Elevation 0";
        elevation0.effects = [
            {
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.25 },
                offset: { x: 0, y: 0 },
                radius: 10,
                spread: 0,
                visible: true,
                blendMode: "NORMAL",
            },
        ];
        //Create Shadows Style
        let elevation1 = figma.createEffectStyle();
        elevation1.name = "Elevation 1";
        elevation1.effects = [
            {
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.25 },
                offset: { x: 0, y: 0 },
                radius: 10,
                spread: 0,
                visible: true,
                blendMode: "NORMAL",
            },
        ];
        //Create Shadows Style
        let elevation2 = figma.createEffectStyle();
        elevation2.name = "Elevation 2";
        elevation2.effects = [
            {
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.25 },
                offset: { x: 0, y: 0 },
                radius: 10,
                spread: 0,
                visible: true,
                blendMode: "NORMAL",
            },
        ];
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        const newFontName = { family: "Inter", style: "Bold" };
        yield figma.loadFontAsync(newFontName);
        h1.fontName = newFontName;
        yield thumbText.setTextStyleIdAsync(h1.id);
        //Getting all nodes on page
        const allItems = figma.currentPage.findAll();
        //now finding the title
        for (const child of allItems) {
            if (child.type === "TEXT") {
                child.name = "Renamed";
                if (child.fontSize === 120) {
                    child.textDecorationStyle;
                }
                console.log("Found it");
            }
        }
        //Define Zoom And Scroll
        const viewArea = [projectThumbnail];
        figma.viewport.scrollAndZoomIntoView(viewArea);
    }
    //Add Documentation Page
    const allPagesNodes = figma.root.children;
    let docPage = figma.createFrame();
    docPage.resize(1080, 1920);
    allPagesNodes[1].appendChild(docPage);
    //Add Devices Sizes
    let desktopFrame = figma.createFrame();
    desktopFrame.resize(1920, 1080);
    desktopFrame.x = 0;
    desktopFrame.y = 0;
    desktopFrame.name = "Desktop";
    let smDesktopFrame = figma.createFrame();
    smDesktopFrame.resize(1200, 1080);
    smDesktopFrame.x = desktopFrame.width + 150;
    smDesktopFrame.y = 0;
    smDesktopFrame.name = "Small Desktop";
    let TabletFrame = figma.createFrame();
    TabletFrame.resize(992, 1080);
    TabletFrame.x = desktopFrame.width + 150 + smDesktopFrame.width + 150;
    TabletFrame.y = 0;
    TabletFrame.name = "Tablet";
    allPagesNodes[4].appendChild(desktopFrame);
    allPagesNodes[4].appendChild(smDesktopFrame);
    allPagesNodes[4].appendChild(TabletFrame);
    //Add Style Sheet
    let styleSheet = figma.createFrame();
    styleSheet.resize(1080, 1920);
    styleSheet.fills = [
        {
            type: "SOLID",
            color: { r: 1, g: 0.9686274509803922, b: 0.8745098039215686 },
        },
    ];
    allPagesNodes[3].appendChild(styleSheet);
    //Add items to thumbnail
    figma.notify("Project File Created!!!");
    figma.closePlugin();
});

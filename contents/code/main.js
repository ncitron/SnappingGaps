const width = 1620;
const height = 1250;
const sideOffset = 80;
const topOffset = 80

function snapLeft() {
    const client = workspace.activeClient;
    const g = client.geometry;
    g.x = sideOffset;
    g.y = topOffset;
    g.width = width;
    g.height = height;
    client.geometry = g;
}

function snapRight() {
    const client = workspace.activeClient;
    const g = client.geometry;
    g.x = workspace.displayWidth - width - sideOffset;
    g.y = topOffset;
    g.width = width;
    g.height = height;
    client.geometry = g;
}

registerShortcut("snap left", "snap window to the left", "Meta+Left", snapLeft);
registerShortcut("snap right", "snap window to the right", "Ctrl+Right", snapRight);


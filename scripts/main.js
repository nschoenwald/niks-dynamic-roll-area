const MODULE_ID = "niks-dynamic-roll-area";

/**
 * Helper to get current sidebar width in pixels.
 * Compatible with Foundry V13 & V14.
 * @returns {number}
 */
function getSidebarWidth() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return 0;

    const isExpanded = ui.sidebar?.expanded ?? !sidebar.classList.contains("collapsed");
    if (isExpanded) {
        return sidebar.offsetWidth || sidebar.clientWidth || 300;
    } else {
        const content = document.getElementById("sidebar-content");
        if (content && content.offsetWidth > 0) {
            return content.offsetWidth;
        }
        return sidebar.offsetWidth || sidebar.clientWidth || 0;
    }
}

/**
 * Safely updates DSN boundaries after box initialization.
 * @param {object} dice3d - The Dice3D instance
 */
async function applyPlayAreaUpdate(dice3d) {
    if (!dice3d) return;

    // Wait for DSN box initialization if pending
    if (dice3d._boxReady) {
        await dice3d._boxReady;
    }

    if (dice3d.box?.initialized) {
        dice3d.resizePlayArea();
    }
}

/**
 * Patches Dice3D._computeDimensions to enforce dynamic sidebar exclusion.
 * @param {object} dice3d - The Dice3D instance
 */
function setupDynamicRollArea(dice3d) {
    if (!dice3d || dice3d._niksDynamicRollAreaPatched) return;
    dice3d._niksDynamicRollAreaPatched = true;

    const originalComputeDimensions = dice3d._computeDimensions.bind(dice3d);

    dice3d._computeDimensions = function(rollingArea) {
        const enabled = game.settings.get(MODULE_ID, "enabled");
        if (!enabled) return originalComputeDimensions(rollingArea);

        const sidebarWidth = getSidebarWidth();
        return {
            width: window.innerWidth,
            height: window.innerHeight - 1,
            margin: {
                top: 0,
                bottom: 0,
                left: 0,
                right: sidebarWidth
            }
        };
    };

    applyPlayAreaUpdate(dice3d);
}

Hooks.once("init", () => {
    game.settings.register(MODULE_ID, "enabled", {
        name: "NIKS_DYNAMIC_ROLL_AREA.SettingsEnabledName",
        hint: "NIKS_DYNAMIC_ROLL_AREA.SettingsEnabledHint",
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: () => {
            if (game.dice3d) {
                applyPlayAreaUpdate(game.dice3d);
            }
        }
    });
});

Hooks.on("diceSoNiceReady", (dice3d) => {
    setupDynamicRollArea(dice3d);
});

Hooks.once("ready", () => {
    if (game.dice3d) {
        setupDynamicRollArea(game.dice3d);
    }
});

const triggerUpdate = foundry.utils.debounce(() => {
    if (game.dice3d) {
        applyPlayAreaUpdate(game.dice3d);
    }
}, 100);

Hooks.on("collapseSidebar", () => {
    const sidebarContent = document.getElementById("sidebar-content") || document.getElementById("sidebar");
    if (sidebarContent) {
        sidebarContent.addEventListener("transitionend", triggerUpdate, { once: true });
    }
    triggerUpdate();
});

Hooks.on("renderSidebar", triggerUpdate);
Hooks.on("changeSidebarTab", triggerUpdate);
window.addEventListener("resize", triggerUpdate);

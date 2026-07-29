# Nik's Dynamic Roll Area

A lightweight Foundry VTT module that ensures 3D dice rolled with **Dice So Nice** dynamically exclude the chat log and sidebar area across all screen resolutions, window sizes, and sidebar states.

---

## Compatibility

| | Minimum | Verified |
|---|---|---|
| **Foundry VTT** | V13 | V14 |

This module is **system-agnostic** — it works with any game system.

**Required Dependency:** [Dice So Nice](https://github.com/Simone-Renzo/foundryvtt-dice-so-nice)

---

## Other Modules by Nik

### ⚔️ Combat & Token Tools
* **[Nik's Token Tags](https://github.com/nschoenwald/niks-token-tags)** – Automatically numbers duplicate combatant NPCs (A, B, C…) with color-coded letter overlays.
* **[Nik's Shared NPC Initiative](https://github.com/nschoenwald/niks-shared-npc-initiative)** – Groups NPCs of the same type in combat so they share a single initiative roll.
* **[Nik's Movement Control](https://github.com/nschoenwald/niks-movement-control)** – GM controls to toggle player movement and automatically restrict/allow movement on combat start and end.
* **[Nik's Tiny Change Logs](https://github.com/nschoenwald/niks-tiny-changelogs)** – Compact, single-line chat messages logging token HP and Temp HP changes.
* **[Nik's Retroactive Advantage](https://github.com/nschoenwald/niks-retroactive-advantage)** – Reroll d20 rolls directly from chat cards after the fact.
* **[Nik's Turn Time Tracker](https://github.com/nschoenwald/niks-turn-time-tracker)** – Whispers combat turn and round duration summaries to the GM.

### 🎲 Visuals & Display
* **[Nik's Effects Panel](https://github.com/nschoenwald/niks-effects-panel)** – Modern ApplicationV2 floating active effect tracker with rich tooltips and role permissions.

### ⚙️ Utilities & System Management
* **[Nik's DnD5e Tweaks](https://github.com/nschoenwald/niks-dnd5e-tweaks)** – Consolidated collection of quality-of-life enhancements and combat automation tweaks for DnD5e.
* **[Nik's Settings Locks](https://github.com/nschoenwald/niks-settings-locks)** – Soft-lock and hard-lock client settings and keybindings across all connected players.
* **[Nik's Compendium Search Tweaks](https://github.com/nschoenwald/niks-compendium-search-tweaks)** – Configure which compendium packs are included or excluded from native sidebar search.
* **[Nik's Show & Tell](https://github.com/nschoenwald/niks-show-and-tell)** – Share popout images to chat and paste image files directly into chat messages.
* **[Nik's Zoom / Pan Options](https://github.com/nschoenwald/niks-zoom-pan-options)** – Touchpad and scroll wheel pan/zoom controls and canvas navigation enhancements.
* **[Nik's KTX2 Converter](https://github.com/nschoenwald/niks-ktx2-converter)** – Batch convert scene tiles and textures to GPU-optimized KTX2/Basis format.
* **[Nik's Copy Environment](https://github.com/nschoenwald/niks-copy-environment)** – Copy-paste environment light and sound setups between scenes.
* **[Nik's Wild Magic](https://github.com/nschoenwald/niks-wild-magic)** – Automated wild magic surge checks and surge table rolls for DnD5e Sorcerers.

---

## Features

- **Dynamic Exclusion**: Guarantees that 3D dice physics barriers exclude the right-hand sidebar and chat log.
- **Resolution & Resize Aware**: Responds dynamically to window resizing, display scale changes, and sidebar collapse/expand transitions.
- **Foundry V13 & V14 Compatible**: Built for modern Foundry VTT DOM structures and Application architectures.
- **Client Setting**: Per-client setting in Module Settings to enable or disable dynamic sidebar exclusion.

---

## Installation

### Via Manifest URL

1. In Foundry VTT, go to **Settings → Manage Modules → Install Module**
2. Paste the following manifest URL:
   ```
   https://github.com/nschoenwald/niks-dynamic-roll-area/releases/latest/download/module.json
   ```
3. Click **Install**

### Manual

1. Download the latest release from the [Releases](https://github.com/nschoenwald/niks-dynamic-roll-area/releases) page
2. Extract into your Foundry VTT `Data/modules/niks-dynamic-roll-area` directory
3. Enable the module in **Settings → Manage Modules**

---

## License

This module is licensed under the [MIT License](LICENSE).

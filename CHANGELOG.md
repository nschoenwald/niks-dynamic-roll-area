# Changelog

All notable changes to this project will be documented in this file.

## [14.2.0] - 2026-11-02
### Added
- The module is now available in German, French, Spanish, Italian, Brazilian Portuguese, Japanese, Polish and Czech.

## [14.1.0] - 2026-10-25

### Improved
- **Performance Optimization**: Eliminated redundant boundary recalculations and background physics updates on sidebar tab navigation.
- **Reliable Boundary Updates**: Ensured 3D dice physics barriers reliably and dynamically exclude the chat log and sidebar across all window resolutions, display scales, and sidebar states.

## [14.0.0] - 2026-07-29

### Added
- **Initial Release**.
- **Dynamic Roll Area Exclusion**: Automatically restricts the 3D dice physics rolling boundaries for **Dice So Nice** to exclude the right-hand chat log / sidebar.
- **Responsive Updates**: Dynamically adapts boundaries across all screen resolutions, window resizing, and sidebar collapse/expand transitions.
- **Foundry V13 & V14 Compatibility**: Fully compatible with modern Foundry VTT Application architecture and DOM structures.
- **Module Setting**: Added a client setting to enable or disable dynamic sidebar exclusion per player.

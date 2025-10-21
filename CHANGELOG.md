# Changelog

## [2.8.66] - 2025-10-21

- No changes, just regular checks and tests on Docker Registry and auto-updates for another Docker based project.

## [2.8.60] - 2025-10-02

- Fixed Daily Challenges to aggregate stats from all universes (local + remote), enabling cross-universe challenge completion.
- Fixed Atlas Size calculation to sum storage from all universe archives instead of only the current universe.
- Implemented direct localStorage reading to bypass universe-specific key transformations for global aggregation.

## [2.8.48] - 2025-10-02

- Implemented universe-specific localStorage key system to prevent exploration data overlap between local and remote universes.
- Added automatic node_id suffix to \_\_atlasArchive keys for remote universes while maintaining global keys for spaceship, daily challenges, and locations.
- Updated data export system to include all universe archives (local + all remote) in a single export file with universe metadata.
- Modified data import system to restore archives for all universes simultaneously, preserving exploration progress across multiple universe contexts.
- Enhanced Atlas Size calculation in Spaceship Control to include storage from all universe archives.
- Disabled QR code generation in 4K screenshots when in remote universes, as coordinates are universe-specific and not globally valid.
- Implemented additional planets system with cascade logic allowing up to 10 planets per solar system (6-9 with decreasing probabilities: 35%, 25%, 10%, 5%).
- Additional planets system uses independent derived seeds that do not affect the generation of the first 6 planets, maintaining complete backward compatibility.
- Implemented in the frontend the realistic orbital eccentricity calculation send from the backend using modified Rayleigh distribution (~60% planets with e < 0.1, ~30% with 0.1 < e < 0.3, ~10% with e > 0.3).
- Orbital eccentricity now capped at 0.7 maximum to prevent unstable orbits, with 5% probability of nearly circular orbits (e < 0.05).
- Added stellar composition information (stellar_composition) to planet rendering API for accurate distance calculations from star to planet surface.
- Implemented lightning effect system for planets and planetary atmospheres with realistic electrical discharge visualization based on planet's distance from star in AU.
- Updated planet naming system with support for is_extra parameter to differentiate additional planets.
- Improved lighting and rendering system in ModularPlanetRenderer for better handling of planet hidden faces.
- Fixed bug in name generator affecting planet nomenclature breaking determinism (yes, sorry not sorry, but fixed it).
- Fixed visual seams in Savannah and Rocky terrain 3D Effects through procedural parameter adjustments.
- Fixed seams in Icy terrain by adjusting opacity values in PlanetLayerSystem.
- Improved molten lava rendering with elimination of visible seams on planetary surface.
- Improved lava flows (LavaFlowsEffect.tsx) with seam correction and better visual continuity.
- Fixed Field of View (FOV) across all solar system views (SolarSystem3DViewer, SolarSystem3DViewerFullscreen, SolarSystem3DViewerLeft).
- Added EyeOpenIcon and EyeClosedIcon for visibility controls in planet and system lists.
- Improved user interface in PlanetsList and SystemsList with new visual visibility controls.
- Performance optimizations in 3D rendering system and orbital calculations.

## [2.8.46] - 2025-09-29

- Fixed Multiverse P2P handshake Docker issues by implementing environment variable configuration system for Docker deployments.
- Added `EXTERNAL_P2P_OPEN_PORT` environment variable to properly map external P2P port (42424) for DHT announcements and peer discovery.
- Added `ENABLE_P2P` environment variable to completely disable P2P functionality when set to false, providing deployment flexibility (works as same as --no-p2p flag).
- Resolved Multiverse P2P timeout intrusion errors where nodes could discover each other via BitTorrent DHT but failed Atlas handshake due to port mapping conflicts.
- Enhanced Multiverse P2P system to distinguish between internal container port (previously 5000) and the external accessible port (42424) for DHTP2P Multiverse handshakes and proper peer-to-peer communication.
- Improved docker-compose.yml and Dockerfile with proper environment variable configuration for seamless multiverse networking across Atlas instances.

## [2.8.44] - 2025-09-29

- Updated pip requests to 2.32.4 to address CVE-2024-47081.

## [2.8.44] - 2025-09-29

- Implemented complete multiverse context model allowing exploration of infinite parallel universes through an integrated peer-to-peer seed sharing networking system.
- Added multiverse navigation interface with seamless transitions between different universe contexts, providing users with unprecedented ability to traverse multiple realities.
- Created P2P networking stack with discovery, cryptography, and routing capabilities enabling multi-universe communication and data exchange between different Atlas instances.
- Introduced multiverse layout and UI components including interactive banners, transition canvases, and specialized iconography for enhanced visual experience.
- Enhanced universe detection and seed management system for intelligent context switching when navigating between different universes.
- Integrated flexible startup modes and configuration systems supporting multiple initialization scenarios for different multiverse operation modes.
- Updated API routes and backend infrastructure to support full-stack multiverse operations with dedicated endpoints for multiverse functionality.
- Added multiverse transition animations and glitch effects providing smooth visual feedback during universe switching operations.
- Improved content filtering and sanitization systems for secure cross-universe data exchange and validation.
- Updated build system with new asset generation and optimization for multiverse-compatible caching and performance improvements.
- Comprehensive debug logging cleanup and optimization across all modules resulting in improved overall system performance.
- Enhanced template system supporting multiverse-aware rendering with improved error handling for connection scenarios.
- Added new dependencies for P2P networking functionality including cryptography (46.0.1), aiofiles (24.1.0), bencodepy (0.9.5), requests (2.32.3), and psutil (7.1.0).
- Added dedicated internal_data and p2p_data directories with proper permission handling for secure data storage across container restarts.
- You can disable P2P networking by launching it with --no-p2p flag, just in case but it's a non-sense since the current scope is exactly this, proper multiverse interconnection.

## [2.6.14] - 2025-01-19

- Minor changes on Dockerfile, image and compose to handle properly SSL permissions and settings.

## [2.6.12] - 2025-01-19

- Implemented native SSL/HTTPS support through Hypercorn with automatic certificate detection at `./ssl/` directory (works with self-signed certificates).
- Added SSL certificate information display at startup showing validity period, issuer organization, and certificate version.
- Created modular SSL handling system in `pymodules/__atlas_ssl.py` with certificate validation and info extraction functions.
- Integrated automatic protocol switching where same port serves HTTP when no certificates present or HTTPS when SSL certificates detected.
- Added AsyncioWSGIMiddleware wrapper for improved request handling with 1GB max body size limit.
- Implemented certificate file checking for `cert.pem`, `privkey.pem`, `fullchain.pem`, and `chain.pem` requirements.
- Configured Hypercorn SSL context with certificate chain, private key, and CA certificates when SSL enabled.
- Added protocol detection variable to determine HTTP vs HTTPS operation mode based on certificate availability.
- Simplified server initialization by removing unnecessary signal handlers and HTTP redirector components.
- Updated Docker Compose volume mapping for SSL certificates mounting flexibility.

## [2.6.10] - 2025-09-19

- Fixed Atlas Initialization Protocol broken after `__main__.py` refactor that moved endpoints to `pymodules/universe_routes*.py`, using `pymodules/__universe_routes_uip.py`.
- Added deterministic moon generation using planet-specific seeds derived from the universal seedmaster system and using consistent hashes.
- Introduced sophisticated moon origin classification system such as Co-formation (regular satellites), Giant Impact (like Earth's Moon), and Capture (irregular satellites).
- Created comprehensive moon type system with Icy, Rocky, Asteroidal, and Captured moons with distinct physical properties.
- Implemented Roche limit calculations preventing moon formation too close to planets `d_R ≈ 2.456 × R_p × (ρ_p / ρ_s)^(1/3)`.
- Added Hill sphere calculations for maximum stable moon orbits `r_H = a_p × (M_p / 3M_*)^(1/3)`.
- Implemented complete moon property system including mass, radius, density, composition type, origin classification.
- Added realistic orbital element generation with semi-major axis, eccentricity, inclination, argument of periapsis, longitude of ascending node.
- Implemented complete Keplerian orbital system with eccentric anomaly solving and true anomaly calculations.
- Integrated initial orbital phases for continuous orbital motion across universe age.
- Added full orbital parameter suite with periods, distances, angles, eccentricity, inclination.
- Integrated orbital stability checks using mutual Hill sphere criterion `3.5` mutual Hill radii separation minimum.
- Applied resonance detection and adjustment system to prevent chaotic orbital interactions.
- Created tidal migration effects based on real Moon migration `~3.8 cm/year` scaled for different planetary systems.
- Added comprehensive tidal heating based on Io's reference model, scaling with `eccentricity²`, `mean motion²`, `radius⁵`, and `distance⁻⁶`.
- Created realistic ice viscosity calculations based on internal temperature from tidal heating `1e12` to `1e21 Pa·s` range.
- Implemented Darwin's formula for tidal locking timescales considering moment of inertia, Love numbers, and Q factors.
- Added material-specific Q factors with different dissipation rates for icy `Q=12`, asteroidal `Q=25`, captured `Q=40`, and rocky `Q=80` moons.
- Created progressive tidal locking with exponential approach to synchronous rotation with realistic locking thresholds.
- Added distance-dependent locking / quick tidal locking for close moons `<10 planetary radii` with physics-based acceleration factors.
- Created rotational dynamics system of rotation periods, angular velocity, tidal locking status separated for each moon.
- Implemented physically accurate moon shape evolution using viscosity and shear modulus calculations `τ = η / μ`.
- Integrated cosmic time-based evolution allowing moons to gradually relax from irregular to spherical shapes over geological timescales.
- Added surface characteristics of procedural seeds each type of moons.
- Implemented multi-octave noise-based terrain generation specific to moon types (icy: smooth with subtle features, asteroidal: chaotic irregular terrain, rocky: varied highland/lowland patterns).
- Added dynamic geometry deformation of real-time surface displacement based on current hydrostatic relaxation state.
- Implemented material-based rendering of distinct visual materials for each moon type with appropriate roughness, metalness, and color variations.
- Created efficient orbital line segmentation system with proper depth buffer handling.
- Added elegant orbital line behavior where lines start invisible, fade in smoothly during navigation, fade out when stationary.
- Created professional fade transitions of hybrid opacity/visibility system preventing depth buffer artifacts.
- Added Level-of-Detail (LOD) system for moon rendering based on distance and apparent size.
- Implemented selective update system for surface relaxation (every `30 seconds`) to maintain performance.
- Integrated geometry disposal and material cleanup systems for memory management.
- Added cinematic experience of clean initial views focusing on moon beauty, contextual orbital assistance during navigation.
- Implemented comprehensive debug logging about detailed relaxation physics logging showing viscosity, timescales, cosmic age, and relaxation factors (removed later).
- Fixed critical variable declaration conflicts in hydrostatic relaxation calculations.
- Implemented proper timer cleanup in disposal methods preventing memory leaks.
- Added comprehensive error handling for edge cases in moon generation.
- Created modular architecture allowing future expansion of moon system complexity.
- Implemented fully procedural moon system generation for all planets based on real astrophysical constraints.
- Removed unit tests for different approaches.

## [2.4.86] - 2025-09-17

- Enhanced Save Location button for galaxies, it now shows a pulsing green border when you have that galaxy saved but on a different page, allowing you to save multiple pages of the same galaxy while maintaining visual consistency.
- Added green dot indicators in galaxy pagination to show which pages are saved in your bookmarks, now displays on visible page numbers (current, adjacent, first, last, etc), providing comprehensive visual feedback for saved galaxy pages.
- Enhanced pagination to update green dot indicators in real-time when saving locations, providing instant visual feedback without needing to refresh the page.

## [2.4.84] - 2025-09-17

- Simplified Stargate Links by removing redundant page parameter for systems and planets, page is now automatically calculated from system index for cleaner, shorter URLs.
- Updated QR code generation to exclude page parameter for systems/planets, reducing URL length while maintaining full functionality (galaxy links still include page as it's needed to proper page location).

## [2.4.82] - 2025-09-17

- Fixed pagination issue when navigating to systems via Stargate Links, now correctly calculates and preserves the galaxy page based on system index, ensuring "Back to Galaxy" returns to the correct page instead of page 1, let's say refactors are not my thing...

## [2.4.80] - 2025-09-17

- Fixed 3D coordinate viewer capturing mouse/touch events when hidden, preventing natural scrolling and swipe gestures on the page.
- Fixed missing system numbers in `SystemsList.tsx` component that were lost during the route refactoring in v2.4.62 (backend was not sending the `number` field).

## [2.4.68] - 2025-09-17

- Added a preloader before react loads (2MiB build) to avoid white flashes on slow networks or overwhelmed servers like Koyeb free tier.

## [2.4.66] - 2025-09-17

- Fixed a Universe FAQ route in `__universe_route_pages.py`, such a mess is equal to IQ over 9000.

## [2.4.64] - 2025-09-17

- Fixed a Stargate Links bug introduced in the `__main__.py` refactor which made them not to load anything. Logic at its max (guess what, nope).

## [2.4.62] - 2025-09-17

- Complete `__main__.py` refactor, refactorized routes into `./pymodules/__universe_routes*`. Small GUI improvements on CoordinateSelector.tsx and reduced API requests for Random Location.

## [2.4.60] - 2025-09-16

- Redesigned Random Location button and its behavior to be **actually useful**, fixed the 3D cube viewer disappearing bug, added proper destination preview popup showing exactly where you're going, and improved the entire jump sequence with smoother animations and better matrix effects.

## [2.4.48] - 2025-09-14

- Fixed a bug introduced in v2.4.46 to handle planet view resize while exporting 4K snapshots which made the fullscreen view to get viewed as a square.

## [2.4.46] - 2025-09-14

- Enhanced data display coordinate selector, improved galaxy 3D view with smoother movement and optimized rendering performance, fixed planet 4K export functionality on various devices, changed export format from PNG to JPG with 100% quality to reduce file sizes, and implemented system time travel feature with +100 year functionality.

## [2.4.44] - 2025-09-10

- Minor changes in FAQ

## [2.4.42] - 2025-09-10

- Added comprehensive F.A.Q. section with detailed explanations of The Atlas's mind-bending scale and mechanics, plus an interactive "Did you know...?" component that displays fascinating universe facts with configurable appearance to enhance user understanding of this procedural universe simulation.

## [2.4.40] - 2025-09-08

- Added Flask-Compress to the whole app, there's an almost 2MiB JS bundle which needs to be sent faster.

## [2.4.38] - 2025-09-08

- Completely redesigned initialization sequence with animated starfield on main screen per-device first join showing seeds information and cosmic origin time. Improved initialization protocol to create atlas.ini configuration before animation starts, ensuring proper setup sequence later on starfield animation and disabled enable_cache on the atlas.ini by default since this was a deprecated Pillow option.

## [2.4.36] - 2025-09-06

- Added Arecibo-style analysis images for planetary life forms (with compounds, nucleotides, physical representations, radio telescopes, DNA helices, etc., accessible via each planet’s “Life Forms” banner), enabled closing the Mass Collection modal by clicking outside, and introduced animations to 3D scenes when galaxies, systems, or planets are manually mined.

## [2.4.34] - 2025-09-04

- Removed Daily Streak bonus multiplier, it felt like cheating the exploration and resource "minigame", also it wasn't adding any real value to simulation exploration, so... If you can ditch it, ditch it!

## [2.4.32] - 2025-09-04

- Enhanced data export/import system with SHA-256 integrity verification and cross-platform compatibility between HTTP and HTTPS environments using fallback hashing. Optimized Stargate URL storage to use compact relative paths (/stargate/xxx) instead of full URLs, improving data portability and storage efficiency. Also added retrocompatibility support for existing saved locations with different URL formats while maintaining proper navigation and "Saved" status detection. Improved UI design consistency in Spaceship Control Stats section with unified container styling for Daily Challenges, Saved Locations, and Data Management modules.

## [2.4.30] - 2025-09-03

- Added a way to export / import saved date into other The Atlas instances / URLs.

## [2.4.28] - 2025-09-03

- Fixed copy functionality in Share Modal to work properly in non-HTTPS environments by adding fallback method for clipboard operations. Let's say I'm not good at swearing...

## [2.4.26] - 2025-09-03

- Refactored the Stargate Link button into a component to make it clearer and easier to use, added a share icon right inside the button with options to share the Stargate Links directly on different socials, and included the ability to take a screenshot right from the share modal instead of just from the 3D Scene. Last change this year I swear!

## [2.4.25] - 2025-09-03

- Out now vacation have finished, I have added some key features which were missing and also polished the QR system and screenshot exporting, may fail on mobile devices. Fixed some 3D effects which weren't getting properly showed on screenshots, there may be still artifacts but they're 4K screenshots so... Probably will get over them this next 2026, finished for now!

## [2.4.24] - 2025-09-02

- Now you can download 4K images from any view, complete with copyright info and a QR code that takes you straight to the Stargate link for instant access.

## [2.4.23] - 2025-09-01

- Added manual cooldown progress bars and timings to Saved Locations for proper manual resource collection.

## [2.4.22] - 2025-09-01

- Everything is in 3D now using ThreeJS, from galaxies, systems and planets, expect bugs. Added passive clicker gamification stuff, people found it boring so it's not anymore. Game progress stored and compressed on base64 on Local Storage, to save your game copy the values and keys. Added abstract. Semantic Kernel integration (using your api keys) will be published next year then after more investigation. Done for now on vacation time, back to HomeDock OS again. See you guys!

## [1.0.0] - 2025-08-04

- Integrated our custom Vite-Fusion module to seamlessly connect React and Flask, enabling rich Three.js-powered 3D experiences. This is the foundation for the upcoming Semantic Kernel integration, the dawn of an AI-powered evolution engine designed to reprogram the universe in real time. I usually only work on this during August vacations... But that needs to change!

## [0.9.98sm1] - 2024-09-12

- Fixed an inconsistency in the calculation of the planet's eccentricity. Now, `planet.eccentricity_factor` is used consistently when drawing the system and in the calculation of rotation periods.
- Removed the redundant, empiric and arbitrary recalculation of eccentricity in `__drawer_class_system.py`, ensuring that the eccentricity initialized during planet creation remains constant throughout the simulation.
- Improved the calculation of rotation periods by integrating the planet's eccentricity and orbital distance influence more accurately.
- Planet temperatures now vary based on their **orbital position**, providing a more realistic simulation of temperature changes throughout the planetary year.
- We're using now the **Inverse Square Law of Radiation**, this law governs how the intensity of radiation diminishes as the distance from the star increases. It ensures that planets farther from their star receive less heat, while those closer receive more.
- The eccentricity of the planet's orbit is now fully integrated, meaning that planets with more elliptical orbits will experience greater variations in temperature as they move closer or farther away from their star throughout their orbit.
- The planet's temperature is now dynamically adjusted based on its position in orbit, which is calculated using the time elapsed since the **cosmic origin time** (the time when the universe was initialized, the Bit Bang). This ensures that temperature changes are continuously updated in relation to the planet’s movement around its star.
- Different types of atmospheres are now taken into account, affecting how much heat a planet retains or loses. Planets with dense atmospheres (e.g., rich in carbon dioxide or water vapor) will experience higher temperatures due to the greenhouse effect, while thin or non-existent atmospheres will result in cooler conditions.
- We’ve inadvertently created **seasons** on every planet! Yes, actual seasons. So, if your planet is wandering through a highly eccentric orbit, expect some wild temperature fluctuations—hot summers, freezing winters... you name it!
- This is just the beginning! With these dynamic changes, we’re bringing the universe to life—literally. And things are about to get even crazier. When we integrate **Semantic Kernel** AI into the generation core... Well, let's just say, it’s starting to feel like we’ve got our own little universe brewing. Stay tuned, things are about to get weird!

## [0.9.92r0] - 2024-09-12

- We've updated the key features on the `README.md` file.

## [0.9.92] - 2024-09-12

- We've aligned the rotation behavior of planets and systems to ensure consistent visual representation across both `__drawer_class_planet.py` and `__drawer_class_system.py`.
- In `__drawer_class_planet.py` the planet surface rotation now uses a **negative rotation angle**. This ensures that the planet rotates **clockwise** (as per the PIL coordinate system).
- In `__drawer_class_system.py` we continue using a **positive rotation angle** for the planet's axis rotation. By leveraging PIL’s inverted Y-axis, this results in both the planet surface and its axis rotating in the **same visual direction** on the screen. This ensures that the rotation feels coherent between systems and individual planets. Although one uses a negative angle and the other a positive one, both now rotate **in the same direction** due to how the Y-Axis is inverted in the PIL rendering system.
- We've also inverted the axis of rotation for the rings in `pymodules/__drawer_cplanet_rings.py` to ensure that the rings no longer rotate in the opposite direction to the planet. It would be quite the cosmic faux pas if the rings didn’t follow their planet's lead – space is all about synchronization, right? I'm not sure...
- Improved Infinite Ring Search in `pymodules/__atlas_observer.py` by enhancing the ring search logic to provide **detailed percentage statistics** by planet type. This now prints out cleaner, more insightful statistics about the occurrence of rings across various types of planets, making it easier to assess their distribution in the simulation.
- In reference to the above point, we've noticed that although we **did not intentionally decide** that gas giants should have a higher probability of rings, they are indeed the most likely candidates to have them. This fortuitously confirms the **Roche limit** in our simulation, where large planets like gas giants are more likely to form rings due to tidal forces preventing the formation of moons in close proximity.
- We have updated the logo to better align with the analogy of a simulation within a cosmic-origin-time inside a cube, symbolizing the potential to generate infinite universes.
- Removed some debugging prints, this seems to be a constant... Too.

## [0.9.86] - 2024-09-11

- **(BREAKING)** Both `initial_angle_rotation` and `initial_orbital_angle` are now initialized directly in `__universe_base.py`, affecting all planetary orbits and rotations. This leads to a more accurate simulation of orbital dynamics, but modifies previous orbits. The advantage is that this value is now consistent across the entire simulation.
- Planets now procedurally generate rings based on a scientifically accurate Roche limit calculation, considering orbital radius, planet density, axial tilt, and rotational speed. The probability distribution has been adjusted to ensure a realistic 7% chance of planets having rings.
- Introduced the `VISUAL_DEBUG` flag, enabling visual debugging tools like the drawing of axial tilts and directional lines to the sun (with more features planned for the future). This mode is disabled by default and intended solely for development.
- Orbital and rotational angles are now consistently calculated for each planet, taking into account both its orbital period and rotational period. This improves overall accuracy for planetary dynamics and rotational behavior within solar systems.
- The `depth_gradient` function has been enhanced with an optimized linear gradient algorithm that automatically aligns the shading gradient with the sun(s) of the planet's solar system. Transparency and opacity adjust dynamically based on the planet's position relative to its sun(s), creating more realistic shading effects. A debug feature under `VISUAL_DEBUG` visualizes a line pointing toward the sun for development validation.
- Added the `soft_polar_transform`, which applies subtle polar distortion to planetary surfaces, adding depth and realism to textures. This effect is utilized in various planetary features, such as inner depth rings and terrain formations.
- Significant performance improvements were made to the drawing of planetary rings. These now use static dots with slight variation in size and color, enhancing depth perception without requiring costly dynamic point recalculations.
- In the planet observer module (`pymodules/__atlas_observer.py`), the "Infinite Search (Rings)" mode was added. This mode continuously searches for planets with rings, reporting statistics every 1000 planets, allowing the validation of Roche limit accuracy in the simulation.
- Planet rotation is now fully synchronized with both its rotation period and its orbital period, creating more realistic planetary motion. This change ensures that each planet's rotation and orbit are consistent with its physics-based simulation values, leading to more accurate and dynamic rendering of planet orientations.
- Internal parameters for ring drawing were fine-tuned to improve visual alignment and representation.
- Optimized the performance of Pillow-based drawing functions, leading to faster rendering of planetary features.
- Simplified the random generation process for planetary elements and rings, improving clarity and maintainability.
- Created a `__WIP__` folder for development purposes containing `.wip` files of different versions of methods and modules.

## [0.9.15] - 2024-09-09

- Added the possibility for some planets (7% statistically accurate) to have rings.
- Planets now draw their rings based on the `tilt_factor`, which is calculated through the `axial_tilt`.
- In the future, we will implement rotation and changes to the `tilt_factor`, so that the position of the rings will vary depending on the moment the planets are observed.
- Implemented axial tilt drawing for planets, though it will be removed or changed later, as I currently don't like how it looks.
- Refactored almost the entire drawing codebase using Pillow since it was messy. It’s much more organized now.

## [0.9.14] - 2024-09-07

- Increased planet size by 200%, it's been optimized to better fit screen dimensions, reducing unused space in the rendered images. This change brings more detail and improved graphics.
- Implemented `depth_gradient` function, renders now add realistic depth to the planets, simulating a view from space. This is a breaking change, as the forms of planets (even with the same seed) will differ due to the depth adjustment being applied via their respective `draw_functions`.
- Adjusted drawing functions retweaking the `draw_functions` to adapt to the increased planet size, ensuring a seamless appearance.
- Reordered the layers of the planet images to accommodate the new size, providing better visual consistency.
- Scaled atmosphere by increasing the size of the atmosphere layers to match larger planet generative images.
- Although the orbital axis is now applied correctly, the visual result is unsatisfactory. The feature is currently commented out while I explore better representation methods.
- Refined `generate_rndback` function to make the random background colors less aggressive for a more balanced aesthetic.
- Restored CSS the `border-radius` for `blob_image_container` to better align with the current frontend. Future updates will migrate to VueJS and Vite for further improvements.
- This will be the last version before integrating Semantic Kernel into the core generation system. This addition will allow the simulation to reprogram itself via Python middlewares, transforming it from an initially deterministic simulation into a fully arbitrary and unpredictable one as the Semantic Kernel cycles progress.

## [0.8.221] - 2024-09-06

- Refactored the logic used in gas giants into the `generate_cloud_bands` function, allowing for reuse in other types of gas planets.
- Integrated the `generate_cloud_bands` function into the image generation process for Frozen Gas Giants as well.
- Fixed an issue in the `__the_observer.py` file, where passing the page in sessions stopped working after changes were made to how Stargate links operate.
- Updated the `generate_gradient` function, which was previously not working as expected. The issue stemmed from drawing ellipses starting from the center towards the outer `planet_radius`, causing internal layers to be hidden. The function was rebranded to `generate_rndback`, making it significantly less CPU-intensive while also introducing subtle variations in depth and RGB values, giving planets a more distinct appearance.
- Fixed the inconsistency in the seed used in the previous function by switching to the `shape_seed`, which is determined by various planetary attributes instead of just relying on the planet's name.
- Removed leftover debugging prints from the code... Again lulz

## [0.8.220] - 2024-09-06

- Implementation of `handle_image_generation` to unify image generation for planets, solar systems, and galaxies using `ThreadPoolExecutor`.
- Use of `asyncio.as_completed` to process images as they complete, improving concurrency and user experience under heavy loads.
- Optimized handling of multiple simultaneous users, ensuring images are delivered as they complete without waiting for all to finish.
- Improved concurrency management by utilizing `asyncio` and adjusting the number of workers via `MAX_PILLOW_WORKERS` on the file `pymodules/__fixed.py`.
- Data isolation to prevent procedural generation inconsistencies when processing multiple images in parallel.
- Replaced imports for individual image generation functions (`generate_planet_image`, `generate_solar_system_image`, `generate_galaxy_image`) with the unified `handle_image_generation` function for cleaner and more efficient code.
- Adjusted image generation logic to accept both single objects and lists of objects (planets, solar systems, galaxies).
- Enhanced error handling to ensure the image generation function can handle multiple object types without causing bottlenecks.
- Resolved compatibility issues between `asyncio.run` and `concurrent.futures.as_completed`, switching to `asyncio.as_completed` to avoid `_asyncio.Future` type errors.
- Fixed concurrency issues that could cause the system to wait for all tasks to complete before returning any results.
- Removed useless debug prints on Stargate method and routes.

## [0.8.219] - 2024-09-06

- Removed query strings (e.g. ?page=863378) and key arguments from galaxy navigation URLs. Navigation state is now stored in session, resulting in cleaner and more readable URLs.
- Stargate links now retain galaxy navigation information, resolving the issue where navigating to a high-numbered system via a Stargate would reset the galaxy view to the first page upon returning. Users are now returned to the correct page within the galaxy.
- Added "Start" and "End" navigation buttons for galaxies, allowing users to quickly jump to the beginning or end of a galaxy. This provides easier exploration of the galaxy's expanding boundaries.

## [0.8.218] - 2024-09-05

- Removed `Tornado` in favor of `Hypercorn`, which offers better performance and is an ASGI web server instead of WSGI. While `Tornado` remains one of my favorite options, alongside `CherryPy` (and of course, **Flask** remains king for development), we needed to address the issue of image rendering blocking at runtime. This is something we will continue to refine in future versions.
- Renamed `__config.py` and `__config_helpers.py` to `__atlasconfig.py` and `__atlasconfig_helpers.py`, respectively, as they were conflicting with `Hypercorn`'s config imports.
- Updated `pymodules/__the_observer.py` (run it with the args --observer) to work with `Planet` objects instead of dictionaries, as the observer was not functioning correctly with the old structure. This change improves how planet types and life forms are handled in the observer's search functionality.
- Removed an arbitrary limit on rotation periods. This limit was partly functional but based on empirical and deterministic values. Instead, we've introduced a divisor-based logic. While it may not be as precise as other physics formulas used for calculations, it offers a more realistic approach compared to the unrealistic `rotation_periods` generated by prior versions. The formulas were theoretically sound but eventually resulted in inconsistent artifact values for rotation periods.

## [0.8.217] - 2024-09-04

- **Added Tornado** as the WSGI server for production, replacing Flask. Flask is now relegated to development use only.
- Introduced several static constants in `__fixed.py`, ensuring certain variables are available throughout the entire app. These variables should not be modified via `__config.py` or `atlas.ini`.
- Enhanced the main loop logic to select the web server based on the `RUN` static variable defined in `__fixed.py`, allowing flexible server selection.
- Implemented the `get_local_addresses` function to display local IP addresses in the Atlas Initialization Protocol prompt during the first app startup, guiding users through the setup process.
- Significant updates were made to the **README**, but should this be reflected in the changelog? It might not fit the typical criteria, but it's worth noting.
- Refactored the `__boot_message.py` file into multiple components, improving modularity. The Atlas Initialization Sequence has also been redesigned for a smoother experience when running the Atlas Initialization Protocol.
- Updated the `requirements.txt` to include the Tornado WSGI server. While Tornado isn't ideal for all cases, it's a necessary dependency for production environments.

## [0.8.192] - 2024-09-04

- The `Config` part has been converted into a singleton, ensuring that only one instance of the configuration is created and used across the entire application, improving memory usage and consistency.
- Introduced a method `generate_hex_seed` that generates random 8-digit hexadecimal seeds in the format `0xXXXXXXXX`. These seeds are used for initializing custom universes, providing unique and visually distinct identifiers.
- Added the `setup_universe` method, which allows the creation of either the _default universe_ or a _custom universe_ with random seeds and a cosmic origin time based on the current timestamp.
- Custom universes now generate their own cosmic origin time based on the current system time, further enhancing uniqueness.
- Fixed issues where the configuration initialization did not properly trigger under certain conditions, ensuring a smoother experience when reloading or initializing the `atlas.ini` file.
- Cleaned up the seed-handling logic, allowing for more robust generation and management of seeds in both default and custom universes.
- New Universe Initialization Process, where we added a detailed onboarding flow to allow users to create or explore different universes. Users can now choose between exploring the _Core Continuum_ (default universe) or creating their own universe via the _Design the Multiverse_ option, with a seed-based initialization.
- Users can now input and navigate galaxies using X, Y, and Z coordinates. Each coordinate is customizable via sliders, numerical inputs, and name-based selections.
- Implemented automatic random coordinate generation upon page load and a "Get me somewhere!" button to explore random galaxy locations.
- Resolved issues where coordinate sliders and inputs weren't correctly synchronizing with the name-based selections. All input methods are now fully synchronized across sliders, inputs, and select boxes.
- Improved error handling for when the universe simulation isn't running, providing clear feedback to users.
- Fixed issues where cached images were not properly served, ensuring that all cached images are fetched correctly from the file system.
- Refined the UI to be more consistent and visually appealing, including improvements to form elements, sliders, buttons, and hover effects for a more cohesive experience.
- Cleaned up and refactored code to better separate logic and improve readability. This includes modularizing the universe and system generation, along with the integration of new Flask routes for galaxy, system, and planet viewing.

## [0.7.47] - 2024-09-03

- Introduced a new `Planet` class to represent planets, replacing the previous dictionary-based approach. This class encapsulates all logic and calculations related to the creation and behavior of planets.
- Added methods to the `Planet` class to initialize all relevant attributes, including planet type, atmosphere, elements, temperature, gravity, mass, and more.
- Integrated the logic for calculating the probability of life into the `Planet` class, ensuring it is called once after all attributes are fully initialized.
- Migrated functions and logic from using dictionaries to an object-oriented implementation with the `Planet` class. This conversion improves code structure, facilitates method and attribute reuse, and enhances scalability and maintainability.
- Removed a redundant call to the `calculate_life_probability` function, ensuring that life probability is only calculated after all planet attributes are correctly initialized, preventing inconsistencies in the results.
- Each calculation within the `Planet` class is now separated into its own method, enhancing modularity. These methods will later be refactored into separate files (e.g., `__universe_planet_methods.py`, `__universe_system_methods.py`, etc.) to further organize and streamline the codebase.
- Corrected inconsistencies in the assignment of life types to planets, which were caused by calculations being performed before all attributes were properly initialized.
- The use of a `Planet` class instead of a dictionary to store planet attributes provides a clearer and more modular structure. Classes allow for better data and behavior encapsulation, making the code easier to understand and maintain. Additionally, it reduces the possibility of errors and redundancies, as all calculations related to a specific planet are contained within the same class.

## [0.7.20] - 2024-09-02

- Implemented a critical time threshold mechanism where, if `cosmic_origin_time` exceeds a specific limit relative to the current time (Unix Timestamp: 59999997000000, equivalent to nearly 1.9 million real-life years), all galaxies are marked as "Singularity Void". This ensures that scaling the simulation far into the future results in a universe-wide singularity, preventing any galaxy development.
- Added flexibility to the `cosmic_origin_time` condition, allowing for precise control over galaxy development based on time and proximity factors.
- Corrected an issue where galaxies at the universe's edges (`(0,0,0)` and `(9999999,9999999,9999999)`) would develop systems even when `cosmic_origin_time` should have prevented any development.
- Revised the calculation method to prevent "inverse artifacts" where galaxies might incorrectly develop due to extreme values of `cosmic_origin_time`.
- Introduced `custom_timestamp_to_date` in `__config_helpers.py`, allowing conversion of large timestamps into readable dates, overcoming Python's datetime limitations.
- Introduced a safeguard against user manipulation of `cosmic_origin_time` by establishing a threshold where all galaxies default to "Singularity Void" if the time is advanced too far in the calculations (like time traveling to the beginning of the universe).
- Streamlined galaxy development calculations, ensuring robust behavior even under extreme time advancements.
- Verified that the new conditions and logic perform consistently across different time settings, ensuring stability and accuracy in the simulation.

## [0.7.17] - 2024-09-02

- Introduced a `k_factor` that varies depending on the type of planet, specifically enhancing calculations for gas giants and frozen gas giants. This allows for a more accurate simulation of rotational dynamics based on the planet's classification.
- Further refined the rotation period calculation by integrating the `k_factor` into the moment of inertia and gravitational calculations, ensuring that rotational dynamics are more faithful to real-world physics across different planetary types.
- Updated the tidal effect calculations to better reflect the influence of planetary type on rotational speed, taking into account factors like eccentricity and distance influence, leading to more realistic rotational periods.
- Resolved several inconsistencies in planetary rotation periods and orbital dynamics, particularly for edge cases involving exotic and anomalous planets. These fixes ensure that all generated planets now exhibit behavior consistent with their physical properties.
- Verified that the axial tilt distribution remains realistic across different planetary types, ensuring a natural variety in planet orientations within their respective orbits.
- Continued to ensure that all physical formulas and constants used in the simulation, such as gravity, orbital period, and tidal effects, adhere to real-world astrophysical principles, resulting in a robust and realistic planetary generation system.

## [0.6.157] - 2024-09-01

- Implemented and applied scientifically accurate formulas, such as detailed calculations for `diameter`, `volume`, `density`, `mass`, `gravity`, `surface_temperature`, and `possible_elements`, influenced by planetary type. These include Volume, Mass, Gravity (Newton's law of universal gravitation), Orbital Period (Kepler's third law), Orbital Speed, and Rotation Period (including moment of inertia and tidal effects), ensuring that each generated planet behaves according to realistic astrophysical expectations.
- Developed an enhanced and physically accurate rotation period calculation that integrates axial tilt, tidal effects, eccentricity, and the influence of distance from the star. This method uses the moment of inertia and gravitational forces to provide a realistic and almost-accurate simulation of planetary rotation dynamics, which can be perceived in the system representation too.
- Improved the gravity formula to better reflect the relationship between a planet's mass and its diameter. This update ensures that gravitational forces are calculated in a manner consistent with universal gravitation principles.
- Created a detailed output structure for planetary data, displaying orbital parameters (`orbital_radius`, `orbital_period`, `orbital_speed`), rotation period, gravity, and other key characteristics. The output now includes user-friendly formatting, translating rotational periods into days, months, or years based on their length.
- Expanded the `PhysicalConstants` class to include critical planetary constants such as the tidal dissipation factor (`Q_PLANET`) and the Love number (`K2_PLANET`), enabling more accurate modeling of tidal forces and their impact on planetary rotation.
- Adjusted the range of potential diameters, densities, and surface temperatures across all planet types to reflect more realistic and varied planetary conditions. These changes ensure that the generated planets behave in a manner consistent with scientific observations.
- The rotation period formula has been overhauled to account for extreme variations in planetary characteristics, particularly for anomalous and exotic types, ensuring that even the most unusual planets adhere to "realistic" (cough) rotational dynamics based on their physical properties, or at least it should be that way.
- Corrected the application of the gravitational constant in gravity calculations, ensuring that the results are accurate and consistent across all generated planets, regardless of size or type.
- Resolved issues with the orbital period output, ensuring that the periods are now correctly displayed as days, months, or years, depending on the calculated duration.
- Removed the use of arbitrary limits on tidal effects, replacing them with a scientifically accurate approach that calculates the rotation period based on realistic tidal dissipation and Love number values. This change results in a more natural and physically consistent simulation of tidal braking effects on planetary rotation.

## [0.6.150] - 2024-08-31

- Integrated time-based calculations derived from `cosmic_origin_time` and the current time, accurately representing the real-time rotation of each planet.
- Implemented real-time translation of each planet around its star(s), ensuring that if a planet's orbit takes 10 years to complete, it will now take 10 real years to visually complete its cycle.
- Implemented consistent orbital eccentricity generation using procedural RNG (rng for life props for StringManolo), ensuring that orbits remain stable and consistent across executions.
- Added a dynamic visual representation for planetary rotation by introducing a shaded radius, enhancing the visual effect.
- Changed the white solid orbital line into a smooth dotted orbital path representation to improve the visual aesthetics and clarity of the orbital paths.
- Drawn an additional larger black ellipse beneath each planet to prevent orbital lines from obscuring the planet's visual representation, improving overall clarity.
- Adjusted the visual elements to ensure that smaller planets have a minimum visible size, making them more distinguishable in the system representation.
- Corrected the rendering order of planets and their respective shadows to ensure that the orbit lines no longer obscure the planets, maintaining visual consistency.
- Made minor tweaks to the maximum eccentricity of planetary orbits within each system to refine their visual and physical accuracy.
- RNGed the radial tilt of each planet in the system representation, as well as the original translational position, to ensure procedural uniqueness in planetary orientations and starting positions... Across time!

## [0.6.144] - 2024-08-31

- Removed duplicates suffixes on (`__name_generator.py`) which were affecting the planet and galaxy name procedural generation process.

## [0.6.143] - 2024-08-31

- Enhanced seed handling by deriving the provided seed from `atlas.ini` into a SHA-256 hash and converting it to a base-10 integer, ensuring consistency and eliminating issues related to floating-point precision.
- Added `__boot_messaging.py` to handle and display detailed application boot information in a structured format.
- Implemented a more informative boot message that includes both the raw UNIX timestamp (`cosmic_origin_time`) and its human-readable date-time equivalent.
- Improved the display of cache cleanup time by showing the value in both seconds and minutes for better clarity.

## [0.6.142] - 2024-08-31

- Synchronization of project files.

## [0.6.141] - 2024-08-31

- Repeated commit, no new changes.

## [0.6.140] - 2024-08-31

- Updated versioning information in the README.

## [0.6.139] - 2024-08-31

- Reshaped and refined the structure of the README file.

## [0.6.138] - 2024-08-31

- General updates and improvements to the README content.

## [0.6.137] - 2024-08-31

- Clarified the non-commercial use policy in the README.

## [0.6.136] - 2024-08-31

- Explicitly stated that NFTs and cryptocurrencies fall under commercial purposes and are restricted.

## [0.6.135] - 2024-08-31

- Updated the software license to further restrict commercial use, including NFTs and cryptocurrencies.

## [0.6.131] - 2024-08-30

- Fixed a logic issue where `atlas.ini` was accessed before it was created, preventing potential errors if it wasn't there yet.

## [0.6.130] - 2024-08-30

- Major update: Introduced cosmic_origin_time and a time-based generative process for the universe (2my to fully expand). Added new galaxy type "Singularity Void" for exploring pre-creation states.

## [0.6.12] - 2024-08-30

- Fixed automatic generation of `atlas.ini` if it is missing to ensure proper configuration setup.

## [0.6.5] - 2024-08-30

- Implemented autogeneration of `atlas.ini` and ensured smoother initialization.

## [0.6.2] - 2024-08-30

- Implemented caching system and configuration file (`atlas.ini`). Made minor tweaks to `spaceTravel.js`. Added daemon thread for cache cleanup. Updated versioning.

## [0.6.1] - 2024-08-30

- Updated versioning information. Transitioned from development to production mode. Why is this happening all the time?

## [0.5.54] - 2024-08-30

- Added placeholder image content below stars animation throughout the project for future use.

## [0.5.53] - 2024-08-30

- Revamped the CSS for a more modern and consistent design.

## [0.5.52] - 2024-08-30

- Added stars loading animations to enhance user experience during data processing and image generation.

## [0.5.49] - 2024-08-29

- Updated versioning system. Redesigned the cave structures to eliminate redundancies and improve performance.

## [0.5.48] - 2024-08-29

- Improved readability of planet summary numbers using Jinja2.

## [0.5.42] - 2024-08-29

- Added molten core features and extra layers for procedural functions. Improved versioning consistency.

## [0.5.35] - 2024-08-29

- Enhanced magma type planet effects and refined planet formation logic.

## [0.5.34] - 2024-08-29

- Fixed some \_\_constants.py on summaries, added more planet forms, improved toxic planet representation, and enhanced observer search functionality.

## [0.5.33] - 2024-08-28

- Minor non-development related changes.

## [0.5.30] - 2024-08-28

- Improved element selection for versioning, refined weights, duplicated element removal, enhanced planet statistics and toxic planet representation.

## [0.5.29] - 2024-08-28

- Continued development on toxic planet generation, addressing additional challenges.

## [0.5.26] - 2024-08-28

- Added new metallic forms for planets, improving complexity and super-hyper-2d-realism.

## [0.5.25] - 2024-08-28

- Redesigned cave structures using new design methods for better procedural generation.

## [0.5.24] - 2024-08-28

- Continued versioning improvements and redesigned up to forest environments. Separated and refactored planet formation logic.

## [0.5.21] - 2024-08-28

- Enhanced swamp representation and updated versioning system, one more time.

## [0.5.20] - 2024-08-28

- Improved representation of arid environments and added noise effects for better "realism" lol.

## [0.5.19] - 2024-08-28

- Enhanced lava world design and fixed missing error template in CSS.

## [0.5.17] - 2024-08-27

- Updated versioning and transitioned from development to production mode, ensuring debug mode is disabled... Again.

## [0.5.16] - 2024-08-27

- Added tritium as a new element and made minor tweaks to the Icy planets generation formula.

## [0.5.13] - 2024-08-27

- Added multiseed functionality in `__config.py` to enhance randomness and variety in generated content.

## [0.5.9] - 2024-08-27

- Updated versioning information.

## [0.5.4] - 2024-08-27

- Implemented different image quality settings for various types of images and improved desert representation.

## [0.5.2] - 2024-08-27

- Refined oceanic shapes for better accuracy and visual appeal.

## [0.5.1] - 2024-08-27

- Enhanced the representation of rocky and icy planets for greater "realism".

## [0.4.34] - 2024-08-27

- Minor production-related update with no significant changes.

## [0.4.30] - 2024-08-27

- Added new element "Divinium" (from now on Z-Divinium), improved gas giant and anomaly shapes, fully refactored planet and atmosphere generators, and standardized auxiliary function naming conventions.

## [0.4.29] - 2024-08-27

- Improved WebP image quality for better performance and visual clarity.

## [0.4.27] - 2024-08-26

- Fixed inconsistencies in life form generation due to hashing issues.

## [0.4.26] - 2024-08-26

- Testing new ideas.

## [0.4.25] - 2024-08-26

- Nearly completed refactor of `image_utils` to remove unnecessary GPT code and improve efficiency.

## [0.4.20] - 2024-08-26

- Minor production-related update hehehehe.

## [0.4.19] - 2024-08-26

- Addressed missing version information in project files.

## [0.4.14] - 2024-08-26

- Enhanced naming conventions and added complex drawing patterns linked to derived seed hashes.

## [0.4.12] - 2024-08-26

- Fixed a significant issue where "the observer" module (to scan the universe when launched with the args --observer) was incorrectly interpreted.

## [0.4.11] - 2024-08-25

- Minor CSS fixes to improve overall user interface and styling.

## [0.4.10] - 2024-08-25

- Updated version hash loaded in JS, added more names and suffixes for planets, improved planet type diversity, and ensured consistent seed generation and reseeding.

## [0.4.8] - 2024-08-25

- Synchronized typo fixes across the project.

## [0.4.4] - 2024-08-25

- Fixed naming issues, enhanced seedmaster functionality by using base64 derived seeds, improved representations, and added new names.

## [0.4.3] - 2024-08-23

- Corrected issues with visited links in version history.

## [0.4.2] - 2024-08-23

- Removed unused images and cleaned up project resources.

## [0.4.1] - 2024-08-23

- Major update: Introduced stargate system, improved mapper logic (stargate in new versions), refactored JavaScript code, enhanced content generation stability, and added historical view and session detection.

## [0.3.30] - 2024-08-23

- Fixed URL issues to ensure proper functioning.

## [0.3.29] - 2024-08-22

- Updated Glitch.me URL and project information.

## [0.3.28] - 2024-08-22

- Fixed issues related to version control that were previously overlooked.

## [0.3.26] - 2024-08-22

- Added localization support, enhanced Vanilla JS integration.

## [0.3.24] - 2024-08-22

- Introduced new life forms, improved representations, and enhanced versioning.

## [0.3.21] - 2024-08-22

- Improved storage management, optimizing performance.

## [0.3.20] - 2024-08-22

- Additional improvements to storage capabilities.

## [0.3.19] - 2024-08-22

- Further enhancements to storage systems.

## [0.3.17] - 2024-08-22

- Corrected calculation errors to improve accuracy.

## [0.3.14] - 2024-08-22

- Updated the README to reflect new features and improvements.

## [0.3.11] - 2024-08-22

- Added demo link to Glitch for live testing.

## [0.3.10] - 2024-08-22

- Removed unnecessary placeholder images.

## [0.3.9] - 2024-08-22

- Added favicon partial to Jinja2 for better project branding.

## [0.3.8] - 2024-08-22

- Fixed issues related to pip3 usage, improving dependency management.

## [0.3.7] - 2024-08-22

- Minor README updates to correct information.

## [0.3.4] - 2024-08-22

- Updated project requirements to ensure compatibility with latest dependencies.

## [0.3.3] - 2024-08-22

- Improved Flask session management for better user experience.

## [0.3.1] - 2024-08-22

- Enhanced representation of black holes, quasars, and pulsars. Replaced storage with image blobs for better performance.

## [0.2.37] - 2024-08-21

- New synchronization of project files.

## [0.2.36] - 2024-08-21

- Continued synchronization to ensure all files are up-to-date. I hate this, more.

## [0.2.35] - 2024-08-21

- Final sync to confirm all changes are properly integrated. I hate this.

## [0.2.31] - 2024-08-21

- Test commit using pre-commit hook for code quality assurance.

## [0.2.29] - 2024-08-21

- Further synchronization to align all project files.

## [0.2.22] - 2024-08-21

- Completed synchronization to ensure consistency across the project.

## [0.2.16] - 2024-08-21

- Finished alpha stage, moving towards beta. Improved planet generation accuracy.

## [0.2.15] - 2024-08-21

- Made significant progress on planet generation, ensuring stability and performance.

## [0.2.14] - 2024-08-21

- Captured and added screenshots of generated planets.

## [0.2.12] - 2024-08-21

- There's no 3D yet so... No support due to performance concerns.

## [0.2.4] - 2024-08-21

- Made general improvements and refinements to the project.

## [0.2.1] - 2024-08-21

- Fixed issues related to image generation and display.

## [0.1.3] - 2024-08-21

- Initial updates to the README for better documentation.

## [0.1.2] - 2024-08-21

- Resynchronized files to ensure consistency after initial commit.

## [0.1.1] - 2024-08-21

- Reset the project to resolve previous issues and prepare for further development.

## [0.0.2] - 2024-08-21

- Initial commit to set up the project structure.

## [0.0.1] - 2024-08-21

- Created initial setup files for project initialization.

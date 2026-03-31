

# NBC Accessibility Guidelines — Search App

## Overview
A premium, searchable accessibility reference site for building guidelines. Clean, editorial design with powerful fuzzy search across a rich dataset of 19+ guideline entries.

## Pages
- **Home (Single Page App)** — Search bar, category filters, results grid, suggested searches

## Key Features

### Search Experience
- Large top search bar with live filtering as the user types
- Fuzzy search using Fuse.js for partial matching, synonyms, and related terms
- Results ranked: exact matches first, then related matches
- Matched text highlighted in yellow within results
- Top 6 results shown by default, "Show more" to expand
- Suggested searches row below the search bar (e.g., "ramp slope", "door width", "toilet turning radius")

### Category Filters
- Horizontal pill/chip filters: Ramps, Doors, Toilets, Stairs, Lifts, Parking, Signage, Corridors, Tactile/Braille, Fire & Evacuation
- Can combine with text search

### Guideline Cards
Each result card shows:
- Category badge (colored pill)
- Title (large, bold)
- Short summary
- Key specifications list
- Practical notes
- Related keywords as small tags
- "Copy guideline" button that copies card content to clipboard with toast confirmation

### Empty & No Results States
- Default state: subtle icon + "Search accessibility guidelines" message
- No results: friendly message + clickable suggested search terms

### Dataset
- 19+ entries covering: Ramps, Doors, Toilets, Stairs, Lifts, Parking, Signage, Corridors, Tactile/Braille, Handrails, Accessible Entrance, Accessible Route, Curb Ramps, Tactile Flooring, Emergency Exits, Refuge Areas, Drinking Water Points, Counters/Reception, Accessible Seating

## Design
- Off-white background (#FAFAF9), white cards with soft shadows
- Thin sans-serif typography (Inter)
- Generous whitespace, rounded corners (12px)
- Subtle borders, no loud colors
- Calm accent color for category badges
- Fully mobile responsive
- Section header: "NBC Accessibility Guidelines"

## Tech
- React + TypeScript + Tailwind
- Fuse.js for fuzzy search
- Static JSON dataset (no backend needed)
- Sonner for copy toast notifications


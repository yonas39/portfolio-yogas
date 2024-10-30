---
title: "Assignement-5: Frontend Design & Implementation"
layout: doc
---

# Heuristic Evaluation:

## Discoverability:

- **Observation:**
  The login and signup interface is straightforward, with clearly labeled input fields. However, the functionality of some key elements (e.g., "PrayerMate," "Tracker") might not be immediately apparent to first-time users.
- **Suggestion for Improvement:**
  Adding brief tooltips or introductory hints explaining the purpose of each feature could enhance discoverability.

## Safety:

- **Observation:**
  The interface provides a "Logout" button in the top-right corner, ensuring the user can exit securely, preventing unauthorized access. However, there is no confirmation dialog for critical actions like leaving a prayer group.
- **Suggestion for Improvement:**
  Adding confirmation dialogs for irreversible actions (e.g., "Are you sure you want to leave the group?") would improve safety.

---

# Physical Heuristics:

## Gestalt Principles:

- **Observation:**
  The interface aligns similar elements together, such as organizing events into a calendar view or grouping participants under a prayer session. This structure helps users understand the conceptual grouping at a glance.
- **Suggestion for Improvement:**
  Further improvement could involve adding borders or subtle highlights to separate different sections visually, making navigation even more intuitive.

## Fitt's Law:

- **Observation:**
  The size and spacing of buttons, like "Join Group" and "Start Session," are appropriately large and easy to click, which aligns with Fitt’s Law for faster selection.
- **Suggestion for Improvement:**
  While the buttons are accessible, key actions like “Create New Event” could also be duplicated on the main dashboard to reduce clicks for frequent users.

---

# Linguistic Level:

## Speak a User’s Language:

- **Observation:**
  The use of simple labels like “PrayerMate” and “Event Calendar” aligns with user expectations and avoids technical jargon. However, certain group functions such as "Create Group" could benefit from more descriptive text like “Start a New Prayer Group.”
- **Suggestion for Improvement:**
  Ensure that button and section names are self-explanatory to minimize the learning curve, particularly for new users unfamiliar with the system.

## Consistency:

- **Observation:**
  The interface maintains consistent colors, fonts, and naming conventions across different pages, such as reusing the same icons for user profiles.
- **Suggestion for Improvement:**
  To enhance consistency, ensure all forms follow the same layout (e.g., aligning input labels to the left across all pages).

---

# Tradeoffs in Optimizing for Heuristics:

## Discoverability vs. Efficiency:

While adding more tooltips or guides might help new users, it could slow down experienced users who value efficiency. A possible compromise would be to allow users to disable help features after their first few interactions.

## Safety vs. Speed:

Adding confirmation dialogs improves safety but introduces additional steps, potentially reducing efficiency. Using undo options instead of confirmations could strike a balance between safety and speed.

## Vercel Deployment Link:

https://orthonet-njen2s0mq-yonas39s-projects.vercel.app

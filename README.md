# Limos — Project Website

The project website for **Limos**, a Final Year Project (FYP-26-S3-34, Group 24) building a health and fitness tracking app. This site serves two purposes: it introduces Limos to visitors, and as the team's project record — meeting minutes, weekly diaries, timeline, and documentation, all in one place.

## Pages

| Page | File | What's there |
|---|---|---|
| Home | `index.html` | Product overview — what Limos does, who it's for, and its core features |
| Team | `team.html` | The four team members, linking to each person's weekly diary |
| Meetings | `meeting.html` | Minutes from every team meeting |
| Timeline | `timeline.html` | Project milestones, drawn from `documents/Project_plan.gan` |
| Documentation | `documentation.html` | Requirements, system design, sprint records, and other project artefacts |
| Diaries | `diaries/*.html` | Each member's weekly reflections |

## Design

The visual identity comes from the Limos app's own theme (maroon and cream, Fraunces / Inter / IBM Plex Mono), so the site reads as an extension of the product. The home page (`index.html`, styled by `css/home.css`) is a product landing page; the inner pages use `css/style.css`.

## Tech

- Static HTML5 + CSS3, with a small vanilla JavaScript file (`js/main.js`) for the mobile menu and scroll reveal. No frameworks or build step.
- [Google Fonts](https://fonts.google.com/): Fraunces, Inter, IBM Plex Mono
- `python3 serve.py` previews the site locally at http://localhost:5960.

## Adding real app screenshots

The phone mockups on the home page show built-in preview illustrations. To use real screenshots:

1. Save PNGs in `assets/screens/` as `home.png`, `scan.png`, `review.png`, `recipes.png`, `chat.png`, `progress.png` and `reminders.png` (about 1170 x 2532 px, or any 9:19.5 ratio).
2. List the names you added in `js/screens.js`, for example `window.LIMOS_SCREENS = ["home", "scan"];`.

Screens that are not listed keep their preview illustration.

## Team

- Luo Anrong Augustin — Team Leader
- Marcela Fioneta
- Low Kai Jie
- Lin Shi Ming

**Assessor:** Mr Tian Sion Hui 

**Supervisor:** Mr Terence Chew

# Limos — Project Website

The project website for **Limos**, a Final Year Project (FYP-26-S3-34, Group 24) building a nutrition and fitness tracking app. This site serves two purposes: it introduces Limos to visitors, and it doubles as the team's project record — meeting minutes, weekly diaries, timeline, and documentation, all in one place.

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

The visual identity is pulled directly from the Limos app's own theme rather than a generic template — same color palette (maroon `#7A1E1E`, cream `#F2F1EF`, clay/olive/water accents) and the same three typefaces (Fraunces, Inter, IBM Plex Mono), so the site reads as an extension of the product it's documenting. All shared styling lives in `css/style.css`.

## Running locally

No build step — it's plain HTML/CSS. Open `index.html` directly, or serve it so relative links and fonts resolve exactly as they will when deployed:

```bash
python3 serve.py
```

This starts a local server at `http://localhost:5960`.

## Tech

- HTML5 + CSS3, no framework or build tooling
- [Google Fonts](https://fonts.google.com/): Fraunces, Inter, IBM Plex Mono

## Team

- Luo Anrong Augustin — Team Leader
- Marcela Fioneta
- Low Kai Jie
- Lin Shi Ming

**Supervisors:** Mr Tian Sion Hui, Mr Terence Chew

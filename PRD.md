# Product Requirements Document: Through The Wall

## 1. Product Overview

### 1.1 Product Summary
Through The Wall is a web-based puzzle game where players control a character that must form correct yoga poses to pass through walls of different shapes. The game combines reflex abilities with strategy and puzzle-solving elements.

### 1.2 Market Opportunity
- **Search Volume**: New keyword with growing interest
- **Google Trends**: Slightly exceeds GPTS popularity levels
- **Primary Markets**: North America and Europe
- **Domain**: through-the-wall.com

### 1.3 Business Model
- **Type**: Casual game website
- **Monetization**: Advertising (Google AdSense)
- **Future Options**: Premium features, no-ads subscription

### 1.4 Competitive Analysis
**Reference Game**: iOS app by WEEGOON (4.2★, 168 ratings)
- **Price**: Free with $2.99 no-ads IAP
- **Pain Points**: Excessive ads, limited gameplay depth
- **Opportunity**: Better ad balance, richer gameplay, web accessibility

**Key Differentiators**:
- No app installation required (web-based)
- Optimized ad experience (non-intrusive)
- Progressive difficulty system
- Social sharing features
- Multi-language support from day one

## 2. Target Users

### 2.1 Primary Audience
- **Demographics**: 16-45 years old, global audience
- **Characteristics**:
  - Enjoy casual puzzle games
  - Seek short entertainment sessions (5-15 minutes)
  - Play during commute or breaks
  - Prefer simple controls with progressive challenge

### 2.2 User Scenarios
- Office workers taking breaks
- Students between classes
- Commuters on public transport
- Casual gamers seeking light entertainment

## 3. Core Features

### 3.1 MVP Features (Phase 1)

#### 3.1.1 Gameplay Mechanics
- **Character Control**: Touch/mouse-based pose formation
- **Wall System**:
  - 50+ unique wall shapes in initial release
  - Progressive difficulty curve
  - Visual feedback for correct/incorrect poses
- **Physics Engine**:
  - Smooth character movement
  - Collision detection
  - Pass/fail animation
- **Level System**:
  - 3 difficulty modes: Easy, Medium, Hard
  - 100 levels total (30/40/30 distribution)
  - Star rating system (1-3 stars per level)

#### 3.1.2 Game Modes
- **Classic Mode**: Sequential level progression
- **Time Challenge**: Complete poses within time limit
- **Practice Mode**: Replay any unlocked level

#### 3.1.3 User Experience
- **Onboarding**:
  - Interactive tutorial (first 3 levels)
  - Pose hints for beginners
  - Skip tutorial option
- **Progress Tracking**:
  - Level completion status
  - Total stars collected
  - Best times per level
  - LocalStorage persistence
- **Controls**:
  - Touch/mouse for limb positioning
  - Drag-and-drop interface
  - Preset pose buttons for common shapes

#### 3.1.4 Visual & Audio
- **Graphics**:
  - Minimalist, colorful design
  - Dark/light mode support
  - Smooth animations (60fps target)
- **Sound**:
  - Background music (on/off toggle)
  - Sound effects for interactions
  - Volume controls

#### 3.1.5 Monetization Integration
- **Ad Placement**:
  - Pre-roll ads (every 5 levels)
  - Banner ads (non-intrusive, bottom placement)
  - Rewarded video ads (hints, continues)
  - Maximum 1 ad per 3 minutes of gameplay
- **Analytics**:
  - Google Analytics 4
  - User behavior tracking
  - Conversion funnel analysis

### 3.2 Phase 2 Features (Post-Launch)

#### 3.2.1 Enhanced Gameplay
- **Daily Challenges**: New unique level each day
- **Leaderboards**: Global and friend rankings
- **Achievement System**: 30+ unlockable badges
- **Custom Levels**: Community-created content

#### 3.2.2 Social Features
- **Share Progress**: Social media integration
- **Challenge Friends**: Send specific levels
- **Replay System**: Save and share gameplay clips

#### 3.2.3 Premium Features
- **Ad-Free Mode**: $2.99 one-time purchase
- **Exclusive Skins**: Character customization
- **Bonus Level Packs**: Additional themed content

## 4. Technical Architecture

### 4.1 Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Game Rendering**: HTML5 Canvas / React-Konva
- **State Management**: React Context + useReducer
- **Animations**: Framer Motion
- **Analytics**: Google Analytics 4, Microsoft Clarity
- **Ads**: Google AdSense

### 4.2 Project Structure
```
app/
├── (game)/
│   ├── layout.tsx          # Game-specific layout
│   ├── page.tsx            # Game home/menu
│   ├── play/
│   │   ├── [level]/page.tsx    # Level player
│   │   └── loading.tsx
│   └── levels/page.tsx     # Level selection
├── about/page.tsx          # About/instructions
├── privacy/page.tsx        # Privacy policy
├── api/
│   └── analytics/route.ts  # Analytics endpoints
└── components/
    ├── game/
    │   ├── GameCanvas.tsx      # Main game component
    │   ├── Character.tsx       # Player character
    │   ├── Wall.tsx            # Wall obstacle
    │   ├── Controls.tsx        # Input controls
    │   └── UI/
    │       ├── HUD.tsx         # Game HUD
    │       ├── PauseMenu.tsx
    │       └── ResultScreen.tsx
    ├── layout/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── AdContainer.tsx     # Ad wrapper
    └── ui/                     # Reusable UI components

lib/
├── game/
│   ├── engine.ts           # Game loop & physics
│   ├── levels.ts           # Level data
│   ├── collision.ts        # Collision detection
│   └── scoring.ts          # Score calculation
├── storage.ts              # LocalStorage utilities
├── analytics.ts            # Analytics helpers
└── ads.ts                  # Ad integration

public/
├── assets/
│   ├── images/
│   ├── sounds/
│   └── levels/             # Level JSON files
└── game.webmanifest        # PWA manifest
```

### 4.3 Key Technical Considerations

#### 4.3.1 Performance
- **Code Splitting**: Dynamic imports for game components
- **Asset Optimization**:
  - WebP images with fallbacks
  - Lazy loading for non-critical assets
  - Audio sprite sheets
- **Caching Strategy**:
  - Static assets: immutable cache
  - Level data: stale-while-revalidate
  - Service Worker for offline play

#### 4.3.2 SEO Optimization
- **Meta Tags**: Dynamic per page with metadata API
- **Structured Data**: Game schema markup
- **i18n**: Multi-language support (en, es, fr, de, ja, ko, zh-CN, zh-TW)
- **Sitemap**: Auto-generated with next-sitemap
- **robots.txt**: Proper crawling rules

#### 4.3.3 Responsive Design
- **Mobile-First**: Touch-optimized controls
- **Breakpoints**:
  - Mobile: < 640px (primary)
  - Tablet: 640-1024px
  - Desktop: > 1024px
- **Orientation**: Support both portrait and landscape

#### 4.3.4 Browser Support
- **Target**: Last 2 versions of major browsers
- **Minimum**: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
- **Fallbacks**: Canvas support detection, graceful degradation

## 5. UI/UX Design

### 5.1 Design Principles
- **Minimalist**: Clean interface, focus on gameplay
- **Intuitive**: No learning curve for basic controls
- **Responsive**: Smooth on all devices
- **Accessible**: WCAG 2.1 AA compliance

### 5.2 Key Screens

#### 5.2.1 Home Screen
- Game logo/title
- Play button (CTA)
- Level selection
- Settings icon
- How to play
- Language selector

#### 5.2.2 Game Screen
- Canvas area (full viewport)
- HUD: Level number, stars, timer
- Pause button (top-right)
- Pose hint button (bottom-left)
- Controls area (bottom, mobile-optimized)

#### 5.2.3 Level Complete Screen
- Stars earned animation
- Time taken
- Next level button
- Replay button
- Share button

### 5.3 Color Palette
- **Primary**: #3B82F6 (Blue) - Actions, highlights
- **Secondary**: #10B981 (Green) - Success, correct poses
- **Accent**: #F59E0B (Amber) - Warnings, timer
- **Error**: #EF4444 (Red) - Failed attempts
- **Neutral**: #64748B (Slate) - UI elements
- **Background**: #FFFFFF / #0F172A (Light/Dark mode)

### 5.4 Typography
- **Primary Font**: Geist Sans (already configured)
- **Monospace**: Geist Mono (scores, timers)
- **Hierarchy**:
  - H1: Game title (3xl-4xl)
  - H2: Section headers (2xl-3xl)
  - Body: Interface text (base-lg)
  - Small: Hints, labels (sm-xs)

## 6. SEO & Content Strategy

### 6.1 On-Page SEO
- **Title Template**: "[Level Name] - Through The Wall | Free Online Puzzle Game"
- **Meta Description**: Action-oriented, 150-160 chars
- **Headings**: Proper H1-H6 hierarchy
- **Alt Text**: Descriptive for all images
- **Canonical URLs**: Prevent duplicate content

### 6.2 Content Pages
- **Home Page**: Game introduction, key features, CTA
- **How to Play**: Tutorial, tips, strategies
- **About**: Game story, development, team
- **Blog** (Phase 2):
  - Level walkthroughs
  - Strategy guides
  - Update announcements
  - Community highlights

### 6.3 Internal Linking
- Level pages interlinked (previous/next)
- Difficulty categories
- Achievement guides
- Contextual blog links

### 6.4 Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Through The Wall",
  "genre": "Puzzle",
  "gamePlatform": "Web Browser",
  "playMode": "SinglePlayer",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

## 7. Analytics & Success Metrics

### 7.1 Key Performance Indicators (KPIs)

#### 7.1.1 Engagement Metrics
- **DAU/MAU**: Daily/Monthly Active Users
- **Session Duration**: Target > 8 minutes
- **Sessions per User**: Target > 2/week
- **Level Completion Rate**: Target > 60%
- **Retention**:
  - Day 1: > 40%
  - Day 7: > 20%
  - Day 30: > 10%

#### 7.1.2 Monetization Metrics
- **RPM** (Revenue per Mille): Target > $5
- **Ad Viewability**: > 70%
- **CTR** (Click-Through Rate): Industry baseline 0.5-1%
- **Ad Fill Rate**: > 95%

#### 7.1.3 Technical Metrics
- **Page Load Time**: < 2s (LCP)
- **FPS**: Maintain 60fps during gameplay
- **Error Rate**: < 0.5% of sessions
- **Bounce Rate**: < 40%

### 7.2 Tracking Implementation
- **Google Analytics 4**: Core analytics
- **Microsoft Clarity**: Session recordings, heatmaps
- **Custom Events**:
  - `game_start`: User begins new game
  - `level_complete`: Level completion with metadata
  - `level_fail`: Failed attempts
  - `ad_viewed`: Ad impressions
  - `share_click`: Social share interactions
  - `hint_used`: Hint button clicks

### 7.3 A/B Testing Plan
- Ad frequency variations
- Control schemes (drag vs. click)
- Tutorial length
- Level difficulty curve
- Reward video placement

## 8. Development Roadmap

### 8.1 Phase 1: MVP (Weeks 1-6)

#### Week 1-2: Foundation
- [ ] Project setup and architecture
- [ ] Basic game engine implementation
- [ ] Character and wall component development
- [ ] Level data structure and loader

#### Week 3-4: Core Gameplay
- [ ] Collision detection system
- [ ] Input controls (mouse and touch)
- [ ] Level progression system
- [ ] Tutorial implementation
- [ ] 30 initial levels

#### Week 5-6: UI & Polish
- [ ] Menu systems
- [ ] HUD and feedback
- [ ] Sound integration
- [ ] Ad integration (AdSense)
- [ ] Analytics setup
- [ ] Mobile optimization

### 8.2 Phase 2: Launch (Week 7-8)
- [ ] Beta testing with target users
- [ ] Bug fixes and optimization
- [ ] SEO implementation
- [ ] Content pages (About, How to Play)
- [ ] Domain setup and deployment
- [ ] Submit to game aggregators

### 8.3 Phase 3: Growth (Weeks 9-16)
- [ ] Additional 70 levels
- [ ] Daily challenge system
- [ ] Leaderboards
- [ ] Achievement system
- [ ] Social sharing
- [ ] Premium features
- [ ] Blog content creation
- [ ] Community building

### 8.4 Phase 4: Expansion (Week 17+)
- [ ] Custom level editor
- [ ] Seasonal events
- [ ] Character customization
- [ ] Power-ups and items
- [ ] Mobile app versions (iOS/Android)
- [ ] Multiplayer modes

## 9. Launch Strategy

### 9.1 Pre-Launch (2 weeks before)
- [ ] Beta test with 50-100 users
- [ ] Create social media accounts (Twitter, Instagram, TikTok)
- [ ] Prepare launch announcement
- [ ] Submit to game directories
- [ ] Set up Google Search Console
- [ ] Prepare press kit

### 9.2 Launch Day
- [ ] Deploy to production
- [ ] Social media announcements
- [ ] Submit to aggregators:
  - CrazyGames (iframe: https://games.crazygames.com/fr_FR/through-the-wall/index.html)
  - Poki, Kongregate, Armor Games, Newgrounds
- [ ] Post on Reddit (r/WebGames, r/incremental_games)
- [ ] Product Hunt submission
- [ ] Email gaming bloggers/YouTubers

### 9.3 Post-Launch (First Month)
- [ ] Daily monitoring of analytics
- [ ] Rapid bug fixing
- [ ] Community engagement
- [ ] Content marketing (blog posts, videos)
- [ ] Gather user feedback
- [ ] Iterate on UX pain points

## 10. Risk Management

### 10.1 Technical Risks
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Performance issues on mobile | High | Medium | Extensive mobile testing, fallback rendering |
| Browser compatibility | Medium | Low | Progressive enhancement, polyfills |
| Ad blocker impact | High | High | Detect blockers, request whitelist, alternative revenue |
| Scalability issues | Medium | Low | CDN, serverless architecture, monitoring |

### 10.2 Business Risks
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Low user acquisition | High | Medium | Multi-channel marketing, ASO, aggregator distribution |
| Poor monetization | High | Medium | A/B test ad placement, optimize RPM, premium features |
| Competitive pressure | Medium | High | Unique features, better UX, community focus |
| Regulatory changes (ads) | Medium | Low | Diversify revenue, GDPR/CCPA compliance |

## 11. Budget & Resources

### 11.1 Development Phase
- **Developer Time**: 300-400 hours (6-8 weeks)
- **Design Assets**: $500-1000 (if outsourced)
- **Sound/Music**: $300-500 (royalty-free libraries)
- **Domain**: $15/year
- **Hosting**:
  - Vercel (free tier sufficient for MVP)
  - Upgrade to Pro ($20/month) if needed

### 11.2 Marketing Phase
- **Paid Ads** (optional): $500-2000/month
- **Content Creation**: In-house or $300-500/month
- **Influencer Outreach**: Performance-based or $200-1000

### 11.3 Tools & Services
- **Analytics**: Free (GA4, Clarity)
- **AdSense**: Free (revenue share)
- **Monitoring**: Vercel Analytics + Sentry (free tiers)

## 12. Success Criteria

### 12.1 3-Month Goals
- 10,000+ monthly active users
- 50,000+ page views/month
- $500+ monthly ad revenue
- 4.0+ average user rating
- Featured on 2+ game aggregators

### 12.2 6-Month Goals
- 50,000+ monthly active users
- 250,000+ page views/month
- $2,500+ monthly ad revenue
- Top 10 on CrazyGames in puzzle category
- 1,000+ social media followers

### 12.3 12-Month Goals
- 200,000+ monthly active users
- 1M+ page views/month
- $10,000+ monthly revenue (ads + premium)
- Mobile app launch
- 5,000+ social media followers

## 13. Appendices

### 13.1 References
- Competitor game: https://www.crazygames.com/game/through-the-wall
- Iframe integration: https://games.crazygames.com/fr_FR/through-the-wall/index.html?v=1.344
- Google Trends: https://trends.google.com/trends/explore?date=today%203-m&q=Through%20The%20Wall

### 13.2 Stakeholders
- **Product Owner**: [Name]
- **Lead Developer**: [Name]
- **Designer**: [Name]
- **Marketing**: [Name]

### 13.3 Document History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-11-04 | Claude Code | Initial PRD creation |

---

**Document Status**: Draft
**Last Updated**: 2025-11-04
**Next Review**: After MVP completion

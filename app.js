// ==========================================================================
// UNUSUAL AGO - MBTI & Seasonal Fashion Interactive App Logic
// ==========================================================================

// 1. MBTI 16 Personalities Database
const MBTI_TYPES = [
    { code: 'INTJ', group: 'analysts', title: '용의주도한 전략가', desc: '절제된 미니멀리즘과 샤프한 테일러링 라인', icon: 'fa-brain', tags: ['스마트', '미니멀', '블랙&그레이'] },
    { code: 'INTP', group: 'analysts', title: '논리적인 사색가', desc: '편안한 오버핏 슬랙스와 스마트 캐주얼 믹스', icon: 'fa-lightbulb', tags: ['편안함', '노르딕', '슬랙스'] },
    { code: 'ENTJ', group: 'analysts', title: '대담한 통솔자', desc: '클래식 수트핏과 세련된 파워 드레싱', icon: 'fa-chess-king', tags: ['수트', '파워핏', '네이비'] },
    { code: 'ENTP', group: 'analysts', title: '뜨거운 논쟁을 즐기는 변론가', desc: '위트있는 스트리트 포인트와 볼드한 액세서리', icon: 'fa-bolt', tags: ['스트리트', '볼드', '유니크'] },

    { code: 'INFJ', group: 'diplomats', title: '선의의 옹호자', desc: '서정적인 롱 드레이프 실루엣과 차분한 버건디', icon: 'fa-feather', tags: ['드레이프', '서정적', '빈티지'] },
    { code: 'INFP', group: 'diplomats', title: '열정적인 중재자', desc: '따뜻한 감성의 크로셰, 소프트 톤 레이어드', icon: 'fa-wand-magic-sparkles', tags: ['크로셰', '파스텔', '레이어드'] },
    { code: 'ENFJ', group: 'diplomats', title: '정의로운 사회운동가', desc: '우아한 트렌치코트와 호감도를 높이는 웜 톤', icon: 'fa-heart', tags: ['트렌치', '클래식', '크림'] },
    { code: 'ENFP', group: 'diplomats', title: '재발랄한 활동가', desc: '톡톡 튀는 비비드 컬러 매치와 팝 아티스틱 무드', icon: 'fa-sun', tags: ['비비드', '팝인', '패턴'] },

    { code: 'ISTJ', group: 'sentinels', title: '청렴결백한 논리주의자', desc: '정교한 핏의 셔츠와 정갈한 옥스포드 룩', icon: 'fa-square-check', tags: ['정갈함', '셔츠', '베이지'] },
    { code: 'ISFJ', group: 'sentinels', title: '용감한 수호자', desc: '부드러운 캐시미어 니트와 포근한 파스텔 톤', icon: 'fa-shield-heart', tags: ['캐시미어', '포근함', '소프트'] },
    { code: 'ESTJ', group: 'sentinels', title: '엄격한 관리자', desc: '단정한 체크 킷과 구조적인 숄더 브레이크', icon: 'fa-briefcase', tags: ['체크', '정장', '클린'] },
    { code: 'ESFJ', group: 'sentinels', title: '사교적인 외교관', desc: '세련된 카디건과 러블리한 프렌치 로맨틱', icon: 'fa-users', tags: ['프렌치', '카디건', '모던'] },

    { code: 'ISTP', group: 'explorers', title: '만능 재주꾼', desc: '실용적인 워크웨어 및 유틸리티 자켓 실루엣', icon: 'fa-wrench', tags: ['워크웨어', '카고', '실용성'] },
    { code: 'ISFP', group: 'explorers', title: '호기심 많은 예술가', desc: '자연스러운 빈티지 데님과 감각적인 텍스처', icon: 'fa-palette', tags: ['데님', '내추럴', '어스톤'] },
    { code: 'ESTP', group: 'explorers', title: '모험을 즐기는 사업가', desc: '스포티 레더 자켓과 임팩트 있는 스니커즈', icon: 'fa-motorcycle', tags: ['레더', '스포티', '임팩트'] },
    { code: 'ESFP', group: 'explorers', title: '자유로운 영혼의 연예인', desc: '화려한 글램 룩과 트렌디한 아일렛 키템', icon: 'fa-music', tags: ['글램', '트렌디', '파티'] }
];

// 2. Curated Lookbook Outfit Catalog Database
const LOOKBOOK_DATABASE = [
    {
        id: 'look-1',
        mbti: 'INTJ',
        mbtiGroup: 'analysts',
        season: 'autumn',
        title: 'Architectural Charcoal Tailoring',
        desc: '각진 숄더 라인과 차콜 버진 울 블레이저가 완성하는 샤프하고 단정한 아키텍처 핏',
        bannerGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        colors: ['#0f172a', '#334155', '#94a3b8', '#cbd5e1'],
        items: ['울 테일러드 블레이저', '핀스트라이프 슬랙스', '첼시 부츠', '메탈릭 프레임 글래스'],
        tags: ['스마트', '미니멀', '테일러링']
    },
    {
        id: 'look-2',
        mbti: 'INFP',
        mbtiGroup: 'diplomats',
        season: 'spring',
        title: 'Soft Sage Layered Romance',
        desc: '은은한 세이지 그린 톤의 크로셰 카디건과 시폰 스커트가 주는 몽환적 레트로 감성',
        bannerGradient: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
        colors: ['#065f46', '#34d399', '#fef3c7', '#d97706'],
        items: ['크로셰 시스루 아우터', '시폰 롱 스커트', '어스톤 샌들', '빈티지 로켓 목걸이'],
        tags: ['빈티지', '파스텔', '드림']
    },
    {
        id: 'look-3',
        mbti: 'ENTP',
        mbtiGroup: 'analysts',
        season: 'summer',
        title: 'Neo Cyber Street Contrast',
        desc: '네온 엑센트 메시 탑과 그래픽 커팅 버뮤다 팬츠의 조화로 완성하는 독창적인 위트',
        bannerGradient: 'linear-gradient(135deg, #701a75 0%, #4c1d95 100%)',
        colors: ['#4c1d95', '#ec4899', '#06b6d4', '#18181b'],
        items: ['그래픽 딥 넥 탑', '버뮤다 유틸리티 팬츠', '플랫폼 청키 스니커즈'],
        tags: ['스트리트', '네온', '볼드']
    },
    {
        id: 'look-4',
        mbti: 'ISTJ',
        mbtiGroup: 'sentinels',
        season: 'winter',
        title: 'Minimalist Oxford Wool Trench',
        desc: '흐트러짐 없는 단정한 딥 옥스퍼드 블루 롱코트와 정교한 타탄 체크 머플러',
        bannerGradient: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
        colors: ['#172554', '#3b82f6', '#e2e8f0', '#475569'],
        items: ['더블 브레스티드 롱 코트', '옥스포드 셔츠', '더비 슈즈', '체크 숄'],
        tags: ['클래식', '정갈함', '더블코트']
    },
    {
        id: 'look-5',
        mbti: 'ISFP',
        mbtiGroup: 'explorers',
        season: 'autumn',
        title: 'Earthy Vintage Indigo Denim',
        desc: '자연스러운 워싱 워크웨어 자켓과 코듀로이 텍스처로 완성하는 감각적인 아티스틱 무드',
        bannerGradient: 'linear-gradient(135deg, #78350f 0%, #451a03 100%)',
        colors: ['#451a03', '#92400e', '#f59e0b', '#d97706'],
        items: ['빈티지 데님 자켓', '코듀로이 와이드 팬츠', '스웨이드 몽크 슈즈'],
        tags: ['어스톤', '데님', '아티스틱']
    },
    {
        id: 'look-6',
        mbti: 'ENFP',
        mbtiGroup: 'diplomats',
        season: 'spring',
        title: 'Sunshine Peach Citrus Pop',
        desc: '피치 블라썸과 브라이트 옐로우 포인트가 선사하는 생기발랄하고 통통 튀는 봄 오프숄더',
        bannerGradient: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)',
        colors: ['#ea580c', '#fb923c', '#fef08a', '#ffffff'],
        items: ['피치 컬러 오프숄더 니트', 'A라인 플리츠 스커트', '캔버스 스니커즈'],
        tags: ['비비드', '팝인', '플리츠']
    },
    {
        id: 'look-7',
        mbti: 'ESFP',
        mbtiGroup: 'explorers',
        season: 'summer',
        title: 'Sunset Glam Leather Accent',
        desc: '시원한 크롭 크로셰 탑과 볼드한 버클 벨트 데님의 당당하고 시선집중되는 여름 파티 룩',
        bannerGradient: 'linear-gradient(135deg, #9f1239 0%, #881337 100%)',
        colors: ['#881337', '#e11d48', '#fda4af', '#000000'],
        items: ['글램 크롭 홀터탑', '디스트로이드 진', '볼드 실버 체인 액세서리'],
        tags: ['글램', '여름파티', '볼드액세서리']
    },
    {
        id: 'look-8',
        mbti: 'INFJ',
        mbtiGroup: 'diplomats',
        season: 'winter',
        title: 'Deep Plum Velvet Drapery',
        desc: '고혹적인 딥 플럼 컬러의 벨벳 맥시 로브 코트와 은은한 진주 펜던트 넥클리스',
        bannerGradient: 'linear-gradient(135deg, #581c87 0%, #3b0764 100%)',
        colors: ['#3b0764', '#7e22ce', '#c084fc', '#f3e8ff'],
        items: ['벨벳 드레이프 롱 로브', '터틀넥 터치 드레스', '스웨이드 롱 부츠'],
        tags: ['서정적', '벨벳', '고혹미']
    }
];

// App State Management
let currentMbtiFilter = 'all';
let currentSeasonFilter = 'spring';
let activeMbtiCode = null;
let savedLookbookIds = new Set(JSON.parse(localStorage.getItem('unusual_saved') || '[]'));
let quizState = { step: 1, group: null, season: null, mood: null };

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    initMbtiGrid();
    initSeasonSelector();
    initSearchAndControls();
    renderLookbook();
    updateSavedBadge();
    initThemeToggle();
});

// Render MBTI Selector Grid
function initMbtiGrid() {
    const container = document.getElementById('mbti-grid');
    if (!container) return;

    renderMbtiCards(MBTI_TYPES);

    // Group Tab Click Handlers
    document.querySelectorAll('.group-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const group = tab.dataset.group;
            currentMbtiFilter = group;
            
            if (group === 'all') {
                renderMbtiCards(MBTI_TYPES);
            } else {
                const filtered = MBTI_TYPES.filter(item => item.group === group);
                renderMbtiCards(filtered);
            }
        });
    });
}

function renderMbtiCards(types) {
    const container = document.getElementById('mbti-grid');
    container.innerHTML = types.map(mbti => `
        <div class="mbti-card ${activeMbtiCode === mbti.code ? 'active' : ''}" onclick="selectMbtiType('${mbti.code}')">
            <div class="mbti-header">
                <span class="mbti-code">${mbti.code}</span>
                <div class="mbti-icon"><i class="fa-solid ${mbti.icon}"></i></div>
            </div>
            <div class="mbti-title">${mbti.title}</div>
            <p class="mbti-desc">${mbti.desc}</p>
            <div class="mbti-tags">
                ${mbti.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Select MBTI Type Handler
function selectMbtiType(code) {
    activeMbtiCode = activeMbtiCode === code ? null : code;
    document.querySelectorAll('.mbti-card').forEach(card => {
        card.classList.toggle('active', card.querySelector('.mbti-code').innerText === activeMbtiCode);
    });

    updateFilterTitle();
    renderLookbook();
}

// Season Selector Logic
function initSeasonSelector() {
    document.querySelectorAll('.season-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.season-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentSeasonFilter = card.dataset.season;
            
            updateFilterTitle();
            renderLookbook();
        });
    });
}

// Update Header Titles
function updateFilterTitle() {
    const titleEl = document.getElementById('current-filter-title');
    const descEl = document.getElementById('current-filter-desc');
    
    let mbtiText = activeMbtiCode ? `${activeMbtiCode}` : '전체 MBTI';
    let seasonText = currentSeasonFilter.toUpperCase();
    
    if (titleEl) titleEl.innerText = `현재 큐레이션: ${mbtiText} x ${seasonText}`;
    if (descEl) descEl.innerText = `${mbtiText} 성향을 위한 ${seasonText} 계절 특별 스타일링 컬렉션`;
}

// Render Lookbook Grid
function renderLookbook(searchQuery = '') {
    const container = document.getElementById('lookbook-grid');
    if (!container) return;

    let filtered = LOOKBOOK_DATABASE.filter(item => {
        const matchesMbti = !activeMbtiCode || item.mbti === activeMbtiCode;
        const matchesSeason = !currentSeasonFilter || item.season === currentSeasonFilter;
        
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q || 
            item.mbti.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.tags.some(t => t.toLowerCase().includes(q)) ||
            item.items.some(i => i.toLowerCase().includes(q));

        return matchesMbti && matchesSeason && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
                <i class="fa-solid fa-shirt" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3>조건에 일치하는 룩북 아이템이 없습니다.</h3>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">상단의 MBTI 필터나 검색어를 변경해 보세요.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(look => {
        const isSaved = savedLookbookIds.has(look.id);
        return `
            <div class="look-card">
                <div class="card-banner" style="background-image: ${look.bannerGradient};">
                    <div class="card-banner-overlay"></div>
                    <span class="card-mbti-badge">${look.mbti}</span>
                    <span class="card-season-badge">${look.season.toUpperCase()}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${look.title}</h3>
                    <p class="card-desc">${look.desc}</p>
                    
                    <div class="color-palette-title">Color Palette</div>
                    <div class="color-swatches">
                        ${look.colors.map(c => `<div class="swatch" style="background-color: ${c};" title="${c}"></div>`).join('')}
                    </div>

                    <div class="items-list">
                        <div class="items-title">Key Items</div>
                        ${look.items.map(item => `<span class="item-chip"><i class="fa-solid fa-check" style="font-size:0.65rem; margin-right:3px;"></i>${item}</span>`).join('')}
                    </div>

                    <div class="card-footer">
                        <div class="mbti-tags">
                            ${look.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
                        </div>
                        <button class="bookmark-btn ${isSaved ? 'saved' : ''}" onclick="toggleBookmark('${look.id}')" title="캡슐 저장">
                            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Search Box & Controls
function initSearchAndControls() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderLookbook(e.target.value);
        });
    }
}

// Bookmark & Saved Capsule Logic
function toggleBookmark(lookId) {
    if (savedLookbookIds.has(lookId)) {
        savedLookbookIds.delete(lookId);
    } else {
        savedLookbookIds.add(lookId);
    }
    localStorage.setItem('unusual_saved', JSON.stringify(Array.from(savedLookbookIds)));
    updateSavedBadge();
    renderLookbook();
    renderCapsuleDrawer();
}

function updateSavedBadge() {
    const badge = document.getElementById('saved-count');
    if (badge) badge.innerText = savedLookbookIds.size;
}

// Capsule Drawer Handler
const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
    cartBtn.addEventListener('click', toggleCapsuleDrawer);
}

function toggleCapsuleDrawer() {
    const drawer = document.getElementById('capsule-drawer');
    if (!drawer) return;
    drawer.classList.toggle('hidden');
    if (!drawer.classList.contains('hidden')) {
        renderCapsuleDrawer();
    }
}

function renderCapsuleDrawer() {
    const container = document.getElementById('capsule-items');
    if (!container) return;

    if (savedLookbookIds.size === 0) {
        container.innerHTML = `
            <div style="text-align:center; margin-top:4rem; color: var(--text-secondary);">
                <i class="fa-solid fa-bookmark" style="font-size:2.5rem; margin-bottom:1rem; opacity:0.5;"></i>
                <p>저장된 스타일링 코디가 없습니다.</p>
            </div>
        `;
        return;
    }

    const savedItems = LOOKBOOK_DATABASE.filter(item => savedLookbookIds.has(item.id));
    container.innerHTML = savedItems.map(item => `
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; display:flex; gap:1rem; align-items:center;">
            <div style="width:40px; height:40px; border-radius:var(--radius-sm); background:var(--accent-purple); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800;">
                ${item.mbti}
            </div>
            <div style="flex-grow:1;">
                <h4 style="font-size:0.95rem;">${item.title}</h4>
                <span style="font-size:0.75rem; color:var(--text-secondary);">${item.season.toUpperCase()}</span>
            </div>
            <button class="bookmark-btn saved" onclick="toggleBookmark('${item.id}')">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');
}

function clearCapsule() {
    savedLookbookIds.clear();
    localStorage.removeItem('unusual_saved');
    updateSavedBadge();
    renderLookbook();
    renderCapsuleDrawer();
}

// AI Quiz Modal System
function openQuizModal() {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;
    quizState = { step: 1, group: null, season: null, mood: null };
    showQuizStep(1);
    modal.classList.remove('hidden');
}

function closeQuizModal() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.classList.add('hidden');
}

function showQuizStep(step) {
    document.querySelectorAll('.quiz-step').forEach(el => el.classList.add('hidden'));
    const current = document.getElementById(`quiz-step-${step}`);
    if (current) current.classList.remove('hidden');
}

function selectQuizStep(step, val) {
    if (step === 1) {
        quizState.group = val;
        showQuizStep(2);
    } else if (step === 2) {
        quizState.season = val;
        showQuizStep(3);
    }
}

function finishQuiz(moodVal) {
    quizState.mood = moodVal;
    showQuizStep('result');

    const resultContainer = document.getElementById('result-card-container');
    const matchedLook = LOOKBOOK_DATABASE.find(item => item.mbtiGroup === quizState.group || item.season === quizState.season) || LOOKBOOK_DATABASE[0];

    resultContainer.innerHTML = `
        <div class="look-card" style="margin-bottom:1.5rem;">
            <div class="card-banner" style="background-image: ${matchedLook.bannerGradient};">
                <div class="card-banner-overlay"></div>
                <span class="card-mbti-badge">${matchedLook.mbti}</span>
                <span class="card-season-badge">${matchedLook.season.toUpperCase()}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${matchedLook.title}</h3>
                <p class="card-desc">${matchedLook.desc}</p>
                <div class="items-list">
                    ${matchedLook.items.map(i => `<span class="item-chip">${i}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    // Automatically apply filter
    currentSeasonFilter = matchedLook.season;
    activeMbtiCode = matchedLook.mbti;
    renderLookbook();
}

// Scroll Helper
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Theme Toggle
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const isLight = document.body.classList.contains('theme-light');
        btn.innerHTML = `<i class="fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}"></i>`;
    });
}

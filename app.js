// ==========================================================================
// TYPE:16 — WEAR YOUR TYPE (Y2K MBTI Fashion Studio App Logic)
// ==========================================================================

// 1. 16 MBTI Personality Fashion Matrix Database
const MBTI_MATRIX = {
    INTJ: {
        code: 'INTJ',
        name: 'THE ARCHITECT',
        group: 'analysts',
        mood: 'Dark Minimal',
        examples: '블랙, 구조적 실루엣, 핀스트라이프 블레이저',
        color: '#1e293b',
        swatch: '#0f172a',
        keywords: ['DARK', 'MINIMAL', 'STRUCTURED'],
        desc: '절제된 미니멀리즘과 샤프한 테일러링 라인. 불필요한 장식을 배제한 샤프한 가을 룩.',
        recommendedItems: ['TYPE:16 OVERSIZED BLAZER', 'STRUCTURED CARGO PANTS', 'CYBER MATRIX GLASSES'],
        mixMatch: ['ENFP', 'INTP', 'ENTJ']
    },
    INTP: {
        code: 'INTP',
        name: 'THE THINKER',
        group: 'analysts',
        mood: 'Tech Casual',
        examples: '그래픽 티, 유틸리티 베스트, 커스텀 스니커즈',
        color: '#475569',
        swatch: '#334155',
        keywords: ['TECH', 'UTILITY', 'GRAPHIC'],
        desc: '편안한 오버핏 슬랙스와 스마트 캐주얼 믹스. 해커 무드의 그래픽 티셔츠.',
        recommendedItems: ['CYBERNETIC GRAPHIC TEE', 'UTILITY VEST', 'LOOSE TECH SLACKS'],
        mixMatch: ['ENFJ', 'ENTP', 'INTJ']
    },
    ENTJ: {
        code: 'ENTJ',
        name: 'THE COMMANDER',
        group: 'analysts',
        mood: 'Power Chic',
        examples: '숄더 패드 재킷, 모노톤 셔츠, 가죽 부츠',
        color: '#0f172a',
        swatch: '#1e1b4b',
        keywords: ['POWER', 'CHIC', 'MONOTONE'],
        desc: '클래식 수트핏과 세련된 파워 드레싱. 압도적인 당당함을 선사하는 실루엣.',
        recommendedItems: ['POWER SHOULDER JACKET', 'MONO LEATHER BOOTS', 'CHROME BELT'],
        mixMatch: ['INFP', 'INTJ', 'ESTJ']
    },
    ENTP: {
        code: 'ENTP',
        name: 'THE VISIONARY',
        group: 'analysts',
        mood: 'Experimental',
        examples: '비대칭 커팅, 네온 포인트, 아방가르드 룩',
        color: '#7e22ce',
        swatch: '#6b21a8',
        keywords: ['EXPERIMENTAL', 'NEON', 'ASYMMETRIC'],
        desc: '위트있는 스트리트 포인트와 볼드한 비대칭 액세서리로 유일무이한 카리스마.',
        recommendedItems: ['ASYMMETRIC ZIP HOODIE', 'NEON MESH TOP', 'CHUNKY PLATFORM SHOES'],
        mixMatch: ['INFJ', 'ENFP', 'INTP']
    },

    INFJ: {
        code: 'INFJ',
        name: 'THE ADVOCATE',
        group: 'diplomats',
        mood: 'Quiet Mood',
        examples: '뉴트럴 드레이프, 롱 로브, 세이지 니트',
        color: '#4c0519',
        swatch: '#881337',
        keywords: ['QUIET', 'NEUTRAL', 'DRAPED'],
        desc: '서정적인 롱 드레이프 실루엣과 차분한 버건디 & 딥 플럼의 조화로운 감성.',
        recommendedItems: ['DRAPED VELVET ROBE', 'NEUTRAL CASHMERE SWEATER', 'VINTAGE PEARL LOCKET'],
        mixMatch: ['ENTP', 'INFP', 'ENFJ']
    },
    INFP: {
        code: 'INFP',
        name: 'THE DREAMER',
        group: 'diplomats',
        mood: 'Dreamy Vintage',
        examples: '빈티지 크로셰, 포근한 니트, 파스텔 스커트',
        color: '#065f46',
        swatch: '#047857',
        keywords: ['DREAMY', 'VINTAGE', 'SOFT_LAYER'],
        desc: '따뜻한 감성의 크로셰, 소프트 톤 레이어드로 완성되는 로맨틱 아티스틱 무드.',
        recommendedItems: ['CROC HET OVERSIZED CARDIGAN', 'PASTEL CHIFFON SKIRT', 'EARTHEN SUEDE SANDAL'],
        mixMatch: ['ENTJ', 'ENFP', 'INFJ']
    },
    ENFJ: {
        code: 'ENFJ',
        name: 'THE PROTAGONIST',
        group: 'diplomats',
        mood: 'Warm Elegant',
        examples: '부드러운 크림 트렌치, 실크 셔츠',
        color: '#c2410c',
        swatch: '#ea580c',
        keywords: ['WARM', 'ELEGANT', 'TRENCH'],
        desc: '우아한 트렌치코트와 호감도를 높이는 웜 톤의 따뜻하고 포근한 실루엣.',
        recommendedItems: ['CREAM CLASSIC TRENCH', 'SILK TOUCH SHIRT', 'GOLDEN CHAIN BAG'],
        mixMatch: ['INTP', 'ESFJ', 'ENFP']
    },
    ENFP: {
        code: 'ENFP',
        name: 'THE SPARK',
        group: 'diplomats',
        mood: 'Color Pop',
        examples: '컬러풀 크롭티, 자유로운 팝 그래픽, Y2K 버클',
        color: '#db2777',
        swatch: '#be185d',
        keywords: ['LOUD', 'COLORFUL', 'FREE'],
        desc: '톡톡 튀는 비비드 컬러 매치와 팝 아티스틱 무드로 자유로운 에너지를 표출.',
        recommendedItems: ['Y2K PEACH POP BABY TEE', 'FLARE DENIM PANTS', 'SILVER CYBER BAG'],
        mixMatch: ['INTJ', 'INFJ', 'ENTP']
    },

    ISTJ: {
        code: 'ISTJ',
        name: 'THE INSPECTOR',
        group: 'sentinels',
        mood: 'Essential',
        examples: '기본템, 옥스포드 셔츠, 더블 롱코트',
        color: '#1e3a8a',
        swatch: '#1d4ed8',
        keywords: ['ESSENTIAL', 'CLASSIC', 'CLEAN'],
        desc: '정교한 핏의 셔츠와 정갈한 옥스포드 룩. 흐트러짐 없는 완벽한 클래식.',
        recommendedItems: ['OXFORD WOOL TRENCH', 'POPLIN BUTTON SHIRT', 'DERBY LEATHER SHOES'],
        mixMatch: ['ESFP', 'ESTJ', 'ISFJ']
    },
    ISFJ: {
        code: 'ISFJ',
        name: 'THE PROTECTOR',
        group: 'sentinels',
        mood: 'Soft Classic',
        examples: '베이지 니트, 캐시미어 카디건, 베이지 스랙스',
        color: '#78350f',
        swatch: '#92400e',
        keywords: ['SOFT', 'CLASSIC', 'COZY'],
        desc: '부드러운 캐시미어 니트와 포근한 베이지 파스텔 톤의 아늑한 클래식.',
        recommendedItems: ['BEIGE KNIT CARDIGAN', 'PLEATED SOFT SLACKS', 'COZY BEANIE'],
        mixMatch: ['ESTP', 'ISTJ', 'ESFJ']
    },
    ESTJ: {
        code: 'ESTJ',
        name: 'THE EXECUTIVE',
        group: 'sentinels',
        mood: 'Smart Casual',
        examples: '구조적 셔츠, 체크 재킷, 슬림 타이트 팬츠',
        color: '#365314',
        swatch: '#3f6212',
        keywords: ['SMART', 'STRUCTURED', 'CHECK'],
        desc: '단정한 체크 킷과 구조적인 숄더 라인의 전문적이고 깔끔한 비즈니스 캐주얼.',
        recommendedItems: ['CHECKED TAILORED JACKET', 'SLIM CRISP SHIRT', 'CHROME WATCH'],
        mixMatch: ['ISFP', 'ENTJ', 'ISTJ']
    },
    ESFJ: {
        code: 'ESFJ',
        name: 'THE PROVIDER',
        group: 'sentinels',
        mood: 'Lovely Casual',
        examples: '밝은 파스텔 트위드, 캐주얼 프렌치 룩',
        color: '#9d174d',
        swatch: '#be123c',
        keywords: ['LOVELY', 'CASUAL', 'FRENCH'],
        desc: '세련된 카디건과 러블리한 프렌치 로맨틱 룩으로 친근한 매력을 더함.',
        recommendedItems: ['PASTEL TWEED CARDIGAN', 'WHITE A-LINE SKIRT', 'FRENCH BERET'],
        mixMatch: ['ISTP', 'ENFJ', 'ISFJ']
    },

    ISTP: {
        code: 'ISTP',
        name: 'THE MAKER',
        group: 'explorers',
        mood: 'Utility Street',
        examples: '카고 팬츠, 테크웨어 베스트, 실용 유틸리티',
        color: '#15803d',
        swatch: '#166534',
        keywords: ['UTILITY', 'CARGO', 'STREET'],
        desc: '실용적인 워크웨어 및 유틸리티 카고 자켓 실루엣의 거친 스트리트 핏.',
        recommendedItems: ['HEAVY DUTY CARGO PANTS', 'TACTICAL UTILITY JACKET', 'WORK BOOTS'],
        mixMatch: ['ESFJ', 'ESTP', 'ISFP']
    },
    ISFP: {
        code: 'ISFP',
        name: 'THE ARTIST',
        group: 'explorers',
        mood: 'Art Casual',
        examples: '어스톤 데님, 아트워크 후디, 내추럴 텍스처',
        color: '#a16207',
        swatch: '#854d0e',
        keywords: ['ARTWORK', 'EARTHY', 'VINTAGE_DENIM'],
        desc: '자연스러운 빈티지 데님과 감각적인 텍스처, 자유로운 아티스트의 영상.',
        recommendedItems: ['VINTAGE WASHED DENIM JACKET', 'ARTWORK GRAPHIC HOODIE', 'CANVAS SNEAKERS'],
        mixMatch: ['ESTJ', 'ISFP', 'ISTP']
    },
    ESTP: {
        code: 'ESTP',
        name: 'THE DYNAMO',
        group: 'explorers',
        mood: 'Bold Street',
        examples: '오버핏 레더 자켓, 볼드 그래픽, 스포티 룩',
        color: '#b91c1c',
        swatch: '#991b1b',
        keywords: ['BOLD', 'LEATHER', 'SPORTY'],
        desc: '스포티 레더 자켓과 임팩트 있는 볼드 그래픽으로 주도하는 스트리트 에너지.',
        recommendedItems: ['OVERSIZED LEATHER RACER JACKET', 'GRAPHIC STREET TEE', 'CHUNKY SNEAKERS'],
        mixMatch: ['ISFJ', 'ESFP', 'ESTP']
    },
    ESFP: {
        code: 'ESFP',
        name: 'THE ENTERTAINER',
        group: 'explorers',
        mood: 'Trend Pop',
        examples: 'Y2K 아일렛 크롭, 파티 액세서리, 글램 룩',
        color: '#c026d3',
        swatch: '#a21caf',
        keywords: ['Y2K_POP', 'GLAM', 'PARTY'],
        desc: '화려한 글램 룩과 트렌디한 아일렛 키템으로 무대의 주인공이 되는 인스타 룩.',
        recommendedItems: ['Y2K GLAM HALTER CROP', 'EYELET BUCKLE DENIM', 'SPARKLE ACCESSORY SET'],
        mixMatch: ['ISTJ', 'ESTP', 'ENFP']
    }
};

// 2. Products Database
const PRODUCTS_CATALOG = [
    {
        id: 'prod-1',
        name: 'TYPE:16 OVERSIZED BLAZER',
        category: 'OUTER',
        badge: 'BEST',
        price: 129000,
        img: 'assets/lookbook_darktech.jpg',
        mbtiMatch: { INTJ: 98, ENTJ: 94, ISTP: 87, ESTJ: 82 },
        whyMbti: 'Clean silhouette. No unnecessary details. Quiet but powerful.',
        styleWith: ['STRUCTURED SLACKS', 'CYBER MATRIX GLASSES', 'DERBY LEATHER SHOES'],
        moods: ['MINIMAL', 'TECH', 'STREET']
    },
    {
        id: 'prod-2',
        name: 'Y2K PEACH POP BABY TEE',
        category: 'TOP',
        badge: 'NEW',
        price: 49000,
        img: 'assets/lookbook_colorpop.jpg',
        mbtiMatch: { ENFP: 99, ESFP: 95, ENTP: 91, INFP: 85 },
        whyMbti: 'Vibrant pink accents. High energy expression. Pure Y2K freedom.',
        styleWith: ['FLARE DENIM PANTS', 'SILVER CYBER BAG', 'CHUNKY PLATFORM SNEAKERS'],
        moods: ['Y2K', 'ROMANTIC', 'SPORTY']
    },
    {
        id: 'prod-3',
        name: 'HEAVY DUTY UTILITY CARGO PANTS',
        category: 'BOTTOM',
        badge: 'BEST',
        price: 89000,
        img: 'assets/hero_campaign.jpg',
        mbtiMatch: { ISTP: 97, INTP: 92, ESTP: 88, ISFP: 84 },
        whyMbti: 'Tactical cargo pockets. Unrestricted mobility for urban explorers.',
        styleWith: ['CYBERNETIC GRAPHIC TEE', 'UTILITY VEST', 'WORK BOOTS'],
        moods: ['STREET', 'TECH', 'CASUAL']
    },
    {
        id: 'prod-4',
        name: 'CROC HET DREAMER CARDIGAN',
        category: 'TOP',
        badge: 'NEW',
        price: 79000,
        img: 'assets/lookbook_colorpop.jpg',
        mbtiMatch: { INFP: 98, INFJ: 93, ISFJ: 89, ENFP: 86 },
        whyMbti: 'Soft texture layers. Warm retro nostalgia for poetic souls.',
        styleWith: ['PASTEL CHIFFON SKIRT', 'SUEDE SANDALS'],
        moods: ['VINTAGE', 'ROMANTIC', 'CASUAL']
    },
    {
        id: 'prod-5',
        name: 'CYBER MATRIX GLASSES',
        category: 'ACC',
        badge: 'BEST',
        price: 35000,
        img: 'assets/lookbook_darktech.jpg',
        mbtiMatch: { ENTP: 96, INTJ: 95, ESTP: 91, INTP: 89 },
        whyMbti: 'Futuristic shield frame. Instant cyberpunk statement.',
        styleWith: ['POWER SHOULDER JACKET', 'CHUNKY SNEAKERS'],
        moods: ['Y2K', 'TECH', 'STREET']
    }
];

// App State
let currentQuizMbti = 'INFP';
let quizTraits = [0, 0, 0, 0]; // [E/I, N/S, F/T, P/J]
let cart = JSON.parse(localStorage.getItem('type16_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('type16_wish') || '[]');

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    initGsapAnimations();
    initTypesGrid();
    initTypeMatchSelectors();
    initLookbookTrack();
    renderProducts(PRODUCTS_CATALOG);
    renderCommunityFeed();
    updateBadges();

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('theme-light');
        });
    }
});

// GSAP Animations Engine
function initGsapAnimations() {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Entrance
    gsap.from('.gsap-hero-text', {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.gsap-hero-sub', {
        duration: 1,
        y: 40,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.gsap-hero-cta', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Floating Y2K Stickers Physics
    gsap.to('.sticker-1', { y: '-=15', rotation: '-=4', duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.sticker-2', { y: '+=18', rotation: '+=5', duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.sticker-3', { y: '-=12', rotation: '-=3', duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    // ScrollTrigger Reveals
    gsap.utils.toArray('.section-title-wrap').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// 02. Quiz Toggle Trait Handler
function toggleQuizTrait(index) {
    quizTraits[index] = quizTraits[index] === 0 ? 1 : 0;
    
    const handle = document.getElementById(`handle-${index}`);
    if (handle) handle.classList.toggle('active', quizTraits[index] === 1);

    // Calculate Result MBTI
    const e_i = quizTraits[0] === 0 ? 'E' : 'I';
    const n_s = quizTraits[1] === 0 ? 'N' : 'S';
    const f_t = quizTraits[2] === 0 ? 'F' : 'T';
    const p_j = quizTraits[3] === 0 ? 'P' : 'J';

    currentQuizMbti = `${e_i}${n_s}${f_t}${p_j}`;
    
    const data = MBTI_MATRIX[currentQuizMbti];
    if (!data) return;

    document.getElementById('quiz-result-code').innerText = data.code;
    document.getElementById('quiz-result-title').innerText = `${data.name} (${data.mood})`;
    document.getElementById('quiz-result-desc').innerText = data.desc;
    document.getElementById('quiz-explore-btn').innerText = `Explore ${data.code} Style Archive →`;
}

// 03. Render 16 Types Grid
function initTypesGrid() {
    const grid = document.getElementById('types-grid');
    if (!grid) return;

    renderTypeCards(Object.values(MBTI_MATRIX));

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const grp = btn.dataset.group;
            if (grp === 'all') {
                renderTypeCards(Object.values(MBTI_MATRIX));
            } else {
                const filtered = Object.values(MBTI_MATRIX).filter(m => m.group === grp);
                renderTypeCards(filtered);
            }
        });
    });
}

function renderTypeCards(types) {
    const grid = document.getElementById('types-grid');
    grid.innerHTML = types.map(type => `
        <div class="type-card" onclick="openTypeArchive('${type.code}')">
            <div class="type-header">
                <span class="type-code">${type.code}</span>
                <div class="type-swatch" style="background-color: ${type.swatch};" title="${type.mood}"></div>
            </div>
            <span class="type-mood-badge">${type.mood.toUpperCase()}</span>
            <div class="type-keywords">
                ${type.keywords.map(k => `#${k}`).join(' ')}
            </div>
            <div class="type-footer">
                <span>${type.name}</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

// Open MBTI Style Archive Modal
function openTypeArchive(code) {
    const data = MBTI_MATRIX[code];
    if (!data) return;

    document.getElementById('modal-mbti-code').innerText = `${data.code} — ${data.name} ARCHIVE`;
    
    const body = document.getElementById('archive-modal-body');
    body.innerHTML = `
        <div style="display:flex; gap:2rem; flex-wrap:wrap; align-items:center; margin-bottom:2rem;">
            <div style="width:100px; height:100px; border-radius:50%; background:${data.swatch}; border:4px solid var(--y2k-pink); display:flex; align-items:center; justify-content:center; font-family:var(--font-heading); font-size:1.8rem; font-weight:800;">
                ${data.code}
            </div>
            <div>
                <h3 style="font-family:var(--font-heading); font-size:1.8rem; color:var(--y2k-pink);">${data.mood}</h3>
                <p style="color:var(--text-secondary); font-size:1.05rem;">${data.desc}</p>
                <div style="margin-top:0.6rem; display:flex; gap:0.5rem;">
                    ${data.keywords.map(k => `<span class="kw-tag">#${k}</span>`).join('')}
                </div>
            </div>
        </div>

        <div style="background:rgba(0,0,0,0.3); border:var(--border-dim); border-radius:12px; padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-family:var(--font-y2k); color:var(--y2k-cyan); margin-bottom:0.8rem;">KEY STYLING ITEMS</h4>
            <ul style="list-style:none; padding:0;">
                ${data.recommendedItems.map(item => `<li style="padding:0.4rem 0; border-bottom:1px dashed rgba(255,255,255,0.1);"><i class="fa-solid fa-shirt" style="color:var(--y2k-pink); margin-right:8px;"></i>${item}</li>`).join('')}
            </ul>
        </div>

        <div style="background:rgba(255,0,122,0.08); border:var(--border-y2k); border-radius:12px; padding:1.5rem;">
            <h4 style="font-family:var(--font-y2k); color:var(--y2k-pink); margin-bottom:0.5rem;">RECOMMENDED MIX & MATCH PAIRS</h4>
            <p style="font-size:0.95rem; color:var(--text-secondary);">${data.code}와 최고의 스타일 조화를 이루는 조합: <strong>${data.mixMatch.join(', ')}</strong></p>
        </div>
    `;

    document.getElementById('archive-modal').classList.remove('hidden');
}

// 05. Type Match Logic
function initTypeMatchSelectors() {
    const sel1 = document.getElementById('match-type-1');
    const sel2 = document.getElementById('match-type-2');
    if (!sel1 || !sel2) return;

    const codes = Object.keys(MBTI_MATRIX);
    sel1.innerHTML = codes.map(c => `<option value="${c}">${c} (${MBTI_MATRIX[c].mood})</option>`).join('');
    sel2.innerHTML = codes.map(c => `<option value="${c}">${c} (${MBTI_MATRIX[c].mood})</option>`).join('');

    sel1.value = 'INTJ';
    sel2.value = 'ENFP';
    calculateTypeMatch();
}

function calculateTypeMatch() {
    const code1 = document.getElementById('match-type-1').value;
    const code2 = document.getElementById('match-type-2').value;
    
    const d1 = MBTI_MATRIX[code1];
    const d2 = MBTI_MATRIX[code2];

    const isDirectMatch = d1.mixMatch.includes(code2) || d2.mixMatch.includes(code1);
    const score = isDirectMatch ? 98 : 88;

    document.getElementById('match-score').innerText = `${score}%`;
    document.getElementById('match-combo-title').innerText = `${code1} (${d1.mood}) × ${code2} (${d2.mood})`;
    document.getElementById('match-combo-desc').innerText = `${d1.code}의 ${d1.examples}와 ${d2.code}의 ${d2.examples}가 만나 연출하는 환상의 Y2K 패션 시너지!`;
}

function shareMatchResult() {
    alert('TYPE MATCH 결과가 클립보드에 복사되었습니다! SNS에 #TYPE16 태그와 함께 공유해보세요.');
}

function openShopWithMatch() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// 06. Shop by Mood
function selectMoodFilter(mood) {
    document.querySelectorAll('.mood-pill').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.includes(mood));
    });

    if (mood === 'ALL') {
        renderProducts(PRODUCTS_CATALOG);
        document.getElementById('mapped-mbtis').innerText = 'ALL 16 MBTI TYPES';
        return;
    }

    const filtered = PRODUCTS_CATALOG.filter(p => p.moods.includes(mood));
    renderProducts(filtered);

    const mappedMbtis = Object.values(MBTI_MATRIX)
        .filter(m => m.keywords.some(k => k.includes(mood)))
        .map(m => m.code);

    document.getElementById('mapped-mbtis').innerText = mappedMbtis.length ? mappedMbtis.join(', ') : 'INTJ, ENFP, ISTP...';
}

// 07. Type Lookbook Track Renderer
function initLookbookTrack() {
    const track = document.getElementById('lookbook-track');
    if (!track) return;

    const items = [
        { mbti: 'ENFP', title: 'COLOR POP Y2K STREET', img: 'assets/lookbook_colorpop.jpg', desc: '네온 핑크 크롭티 & 와이드 워크팬츠' },
        { mbti: 'INTJ', title: 'DARK MINIMAL TECH', img: 'assets/lookbook_darktech.jpg', desc: '구조적 파워 블레이저 & 사이버 글래스' },
        { mbti: 'ISTP', title: 'TACTICAL CARGO UTILITY', img: 'assets/hero_campaign.jpg', desc: '유틸리티 베스트 & 청키 바머' }
    ];

    track.innerHTML = items.map(look => `
        <div class="lookbook-card">
            <img src="${look.img}" class="lookbook-card-img" alt="${look.title}">
            <div class="lookbook-overlay">
                <span class="lookbook-mbti-tag">${look.mbti} OUTFIT</span>
                <div class="lookbook-info">
                    <h4>${look.title}</h4>
                    <p>${look.desc}</p>
                    <button class="btn btn-y2k-pink btn-full" onclick="openProductModal('prod-1')">
                        SHOP THE LOOK <i class="fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 08. Render Products Catalog
function filterShopCategory(cat) {
    document.querySelectorAll('.shop-tab').forEach(t => {
        t.classList.toggle('active', t.innerText === cat);
    });

    if (cat === 'ALL') {
        renderProducts(PRODUCTS_CATALOG);
    } else {
        const filtered = PRODUCTS_CATALOG.filter(p => p.category === cat || p.badge === cat);
        renderProducts(filtered);
    }
}

function filterShopByMbti(mbtiCode) {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    const filtered = PRODUCTS_CATALOG.filter(p => p.mbtiMatch[mbtiCode] && p.mbtiMatch[mbtiCode] > 80);
    renderProducts(filtered);
}

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="product-thumb">
                <img src="${p.img}" class="product-img" alt="${p.name}">
                <span class="mbti-match-tag">INTJ 98% MATCH</span>
            </div>
            <div class="product-details">
                <h4 class="product-name">${p.name}</h4>
                <div class="product-price">₩${p.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="btn btn-y2k-pink btn-full" onclick="openProductModal('${p.id}')">
                        VIEW MBTI SPEC <i class="fa-solid fa-sliders"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Product Spec Detail Modal
function openProductModal(prodId) {
    const p = PRODUCTS_CATALOG.find(item => item.id === prodId) || PRODUCTS_CATALOG[0];
    
    document.getElementById('prod-modal-title').innerText = p.name;
    const body = document.getElementById('product-modal-body');
    
    body.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem; align-items:center;">
            <div style="height:320px; border-radius:12px; overflow:hidden; border:var(--border-cyan);">
                <img src="${p.img}" style="width:100%; height:100%; object-fit:cover;" alt="${p.name}">
            </div>
            <div>
                <h3 style="font-family:var(--font-heading); font-size:1.6rem; margin-bottom:0.4rem;">${p.name}</h3>
                <div style="font-family:var(--font-y2k); font-size:1.5rem; color:var(--y2k-pink); font-weight:800; margin-bottom:1.2rem;">₩${p.price.toLocaleString()}</div>

                <div style="margin-bottom:1.5rem;">
                    <h4 style="font-family:var(--font-y2k); color:var(--y2k-cyan); font-size:0.85rem; margin-bottom:0.6rem;">TYPE MATCH ACCURACY</h4>
                    ${Object.entries(p.mbtiMatch).map(([mbti, score]) => `
                        <div style="margin-bottom:0.4rem;">
                            <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-family:var(--font-y2k);">
                                <span>${mbti}</span>
                                <strong>${score}%</strong>
                            </div>
                            <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                                <div style="width:${score}%; height:100%; background:var(--grad-pink-purple);"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="background:rgba(0,0,0,0.3); padding:1rem; border-radius:8px; border:var(--border-dim); margin-bottom:1.5rem;">
                    <strong style="color:var(--y2k-yellow); font-family:var(--font-y2k); font-size:0.8rem;">WHY INTJ / TARGET TYPE?</strong>
                    <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.2rem;">${p.whyMbti}</p>
                </div>

                <button class="btn btn-y2k-pink btn-full" onclick="addToCart('${p.id}')">
                    ADD TO BAG (₩${p.price.toLocaleString()}) <i class="fa-solid fa-bag-shopping"></i>
                </button>
            </div>
        </div>
    `;

    document.getElementById('product-modal').classList.remove('hidden');
}

// 09. Render Community Feed
function renderCommunityFeed() {
    const grid = document.getElementById('community-grid');
    if (!grid) return;

    const feeds = [
        { user: '@cyber_infp', tag: '#INFP #TYPE16', img: 'assets/lookbook_colorpop.jpg' },
        { user: '@matrix_intj', tag: '#INTJ #OOTD', img: 'assets/lookbook_darktech.jpg' },
        { user: '@y2k_enfp', tag: '#ENFP #COLORPOP', img: 'assets/hero_campaign.jpg' }
    ];

    grid.innerHTML = feeds.map(f => `
        <div class="comm-card">
            <img src="${f.img}" class="comm-img" alt="${f.user}">
            <div class="comm-body">
                <div class="comm-user">${f.user}</div>
                <div class="comm-tag">${f.tag}</div>
            </div>
        </div>
    `).join('');
}

function openUploadModal() {
    alert('OOTD 이미지 선택창이 열렸습니다. 당신의 TYPE 착장을 업로드하세요!');
}

// Drawer & Cart Management
function toggleDrawer(type = 'cart') {
    const drawer = document.getElementById('side-drawer');
    if (!drawer) return;

    drawer.classList.toggle('hidden');
    if (!drawer.classList.contains('hidden')) {
        renderDrawerItems();
    }
}

function addToCart(prodId) {
    const item = PRODUCTS_CATALOG.find(p => p.id === prodId) || PRODUCTS_CATALOG[0];
    cart.push(item);
    localStorage.setItem('type16_cart', JSON.stringify(cart));
    updateBadges();
    closeModal('product-modal');
    toggleDrawer('cart');
}

function renderDrawerItems() {
    const container = document.getElementById('drawer-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:4rem 1rem; color:var(--text-secondary);">
                <i class="fa-solid fa-bag-shopping" style="font-size:3rem; margin-bottom:1rem; opacity:0.4;"></i>
                <p>장바구니가 비어 있습니다.</p>
            </div>
        `;
        document.getElementById('drawer-total-price').innerText = '₩0';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, idx) => {
        total += item.price;
        return `
            <div style="display:flex; gap:1rem; align-items:center; background:var(--bg-card); border:var(--border-dim); padding:0.8rem; border-radius:8px; margin-bottom:0.8rem;">
                <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
                <div style="flex-grow:1;">
                    <h5 style="font-size:0.9rem;">${item.name}</h5>
                    <span style="font-family:var(--font-y2k); color:var(--y2k-pink); font-size:0.85rem;">₩${item.price.toLocaleString()}</span>
                </div>
                <button onclick="removeFromCart(${idx})" style="background:none; border:none; color:var(--text-muted); cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
    }).join('');

    document.getElementById('drawer-total-price').innerText = `₩${total.toLocaleString()}`;
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    localStorage.setItem('type16_cart', JSON.stringify(cart));
    updateBadges();
    renderDrawerItems();
}

function updateBadges() {
    document.getElementById('cart-count').innerText = cart.length;
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

function checkoutAlert() {
    alert('TYPE:16 주문결제 페이지로 이동합니다.');
}

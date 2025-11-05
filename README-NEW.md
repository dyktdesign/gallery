# 🎓 학생 포트폴리오 갤러리

학생들의 GitHub Pages 포트폴리오를 구글폼으로 자동 수집하여 한 곳에 모아보는 갤러리 사이트입니다.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ 주요 기능

- 🎯 **구글폼 자동 연동** - 학생들이 폼 제출만 하면 자동으로 갤러리에 표시
- 📊 **실시간 업데이트** - 별도 작업 없이 스프레드시트만 수정하면 즉시 반영
- 🏷️ **그룹별 필터링** - 여러 강좌/학기의 학생들을 그룹으로 관리
- 🔍 **실시간 검색** - 이름이나 GitHub ID로 빠르게 검색
- 📱 **반응형 디자인** - 모바일, 태블릿, PC 모두 지원
- 🎨 **커스터마이징 가능** - 색상, 레이아웃 등 자유롭게 변경

## 🚀 빠른 시작

### 1️⃣ 파일 다운로드

필요한 파일:
- `student-gallery-google-sheets.html` - 메인 갤러리 페이지
- `google-apps-script.js` - Google Apps Script 코드
- `QUICK-START.md` - 5분 설정 가이드 ⭐ 여기서 시작!

### 2️⃣ 5분 설정

**[QUICK-START.md](QUICK-START.md)** 문서를 따라하면 5분 안에 설정 완료!

간단 요약:
1. 구글폼 만들기 (1분)
2. 스프레드시트 연결 (1분)
3. Apps Script 설정 (2분)
4. 웹사이트 배포 (1분)

### 3️⃣ 상세 가이드

더 자세한 설명이 필요하면 **[SETUP-GUIDE.md](SETUP-GUIDE.md)** 참고

## 📋 시스템 흐름

```
학생 입력
    ↓
구글폼 제출
    ↓
구글 스프레드시트 자동 저장
    ↓
Google Apps Script API
    ↓
갤러리 웹사이트 자동 업데이트
```

## 🎯 사용 사례

### 교육 기관
- 웹디자인 강좌 학생 포트폴리오 관리
- 졸업 작품 전시
- 프로젝트 기반 학습 결과물 모음

### 워크샵/부트캠프
- 수강생 결과물 전시
- 과정별 포트폴리오 관리
- 수료생 작품 아카이브

### 커뮤니티
- 스터디 그룹 프로젝트 모음
- 해커톤 결과물 전시
- 오픈소스 기여자 소개

## 📊 데이터 구조

### 구글 스프레드시트 컬럼

| 컬럼명 | 설명 | 필수 | 예시 |
|--------|------|------|------|
| 타임스탬프 | 제출 시간 | ✅ | 2024-11-05 14:30 |
| 이름 | 학생 이름 | ✅ | 김지수 |
| GitHub 아이디 | GitHub 사용자명 | ✅ | dyktdesign |
| GitHub Pages URL | 포트폴리오 주소 | ⭕ | https://dyktdesign.github.io/ |
| 그룹/강좌명 | 소속 그룹 | ✅ | 2024-2학기 웹디자인 |
| 썸네일 이미지 URL | 썸네일 URL | ⭕ | https://example.com/img.png |

💡 **팁**: GitHub Pages URL을 비워두면 자동으로 `https://[GitHub아이디].github.io/`로 생성됩니다.

## 🎨 커스터마이징

### 색상 변경

```css
/* 배경 그라데이션 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 다른 색상 예시 */
/* 블루: linear-gradient(135deg, #667eea 0%, #4fc3f7 100%); */
/* 핑크: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); */
/* 그린: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); */
```

### 제목 변경

```html
<h1>🎓 학생 포트폴리오 갤러리</h1>
<p class="subtitle">웹디자인 수업 결과물 모음</p>
```

### 카드 레이아웃

CSS에서 `grid-template-columns` 값 조정:

```css
/* 현재: 자동 조절 (300px 최소) */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

/* 고정 3열 */
grid-template-columns: repeat(3, 1fr);

/* 고정 4열 */
grid-template-columns: repeat(4, 1fr);
```

## 📁 파일 구조

```
student-gallery/
├── student-gallery-google-sheets.html  # 메인 갤러리 페이지
├── google-apps-script.js               # Apps Script 코드
├── spreadsheet-template.csv            # 스프레드시트 템플릿
├── QUICK-START.md                      # 5분 빠른 시작 가이드
├── SETUP-GUIDE.md                      # 상세 설정 가이드
└── README.md                           # 이 파일
```

## 🔧 문제 해결

### "데이터를 불러올 수 없습니다"

1. HTML 파일의 `GOOGLE_APPS_SCRIPT_URL`이 올바른지 확인
2. 스프레드시트 시트 이름이 "학생정보"인지 확인
3. Apps Script 배포 권한이 "전체 사용자"인지 확인
4. 브라우저 콘솔(F12)에서 에러 메시지 확인

### 새 응답이 표시되지 않음

1. 브라우저 캐시 지우기 (Ctrl + F5)
2. 시크릿 모드에서 테스트
3. 스프레드시트에 데이터가 저장되었는지 확인

### Apps Script 권한 오류

1. Apps Script 에디터에서 **배포 → 배포 관리**
2. ⚙️ 수정 → 액세스 권한 "전체 사용자"로 변경
3. **새 버전** 배포

더 많은 문제 해결 방법: **[SETUP-GUIDE.md](SETUP-GUIDE.md)** 문제 해결 섹션 참고

## 🌟 확장 아이디어

- [ ] 좋아요/조회수 기능 추가
- [ ] 댓글 시스템 연동 (Disqus, Utterances)
- [ ] 카테고리별 세분화 (디자인/개발/기획)
- [ ] 관리자 대시보드
- [ ] GitHub API 연동으로 자동 업데이트
- [ ] 프로젝트 설명 추가
- [ ] 태그 시스템
- [ ] 포트폴리오 평가 기능

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🤝 기여

버그 리포트, 기능 제안, Pull Request 모두 환영합니다!

## 📞 지원

- 📖 문서: [SETUP-GUIDE.md](SETUP-GUIDE.md)
- ⚡ 빠른 시작: [QUICK-START.md](QUICK-START.md)
- 💬 이슈: GitHub Issues

---

Made with ❤️ for educators and students

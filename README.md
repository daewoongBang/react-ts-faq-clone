# FAQ Clone Project

React + TypeScript + Vite 기반의 FAQ Clone Project

## 기술 스택

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- React Router

## 주요 기능

- 반응형 디자인

  - 모바일, 태블릿, 데스크톱 레이아웃
  - 브레이크포인트별 폰트 크기 및 레이아웃 조정
  - 모바일/태블릿에서 햄버거 메뉴 지원

- FAQ 기능

  - 카테고리별 FAQ 조회
  - 아코디언 형태의 FAQ 목록
  - 검색 기능
  - 페이지네이션

## 프로젝트 구조

```
src/
├── assets/         # SVG 아이콘 및 이미지
├── components/     # 재사용 가능한 컴포넌트
│   ├── common/     # 공통 컴포넌트
│   ├── layout/     # 레이아웃 컴포넌트
│   └── section/    # 섹션별 컴포넌트
├── pages/          # 페이지 컴포넌트
├── apis/           # API 서비스
└── styles/         # 전역 스타일
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

> ⚠️ 현재 프로젝트는 mock JSON 데이터를 기준으로 개발되었으며,
> 실제 API 연동 시 요청 파라미터 및 응답 데이터 형식에 따라 로직 수정이 필요할 수 있습니다.

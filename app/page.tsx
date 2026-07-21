const projects = [
  {
    number: "01",
    title: "사내 교재관리 ERP 구축",
    summary: "Excel 거래처 원장을 업무 시스템으로 전환",
    stack: ["React.js", "JavaScript", "Ant Design", "Java", "Spring"],
    work: [
      "기존 Excel로 관리되던 교재 판매 거래처 원장을 ERP 시스템화",
      "거래처별 매출·입금·교재 판매 현황 자동 집계 및 조회 기능 구현",
      "경영지원부와 협업해 실사용자 중심의 UI 설계",
    ],
    result: "수작업을 자동화해 업무 처리 속도와 정확도를 개선했습니다.",
  },
  {
    number: "02",
    title: "TOSEL 명예의 전당 리뉴얼",
    summary: "선정부터 결제·환불·자료 업로드까지 하나의 흐름으로 연결",
    stack: ["React.js", "TypeScript", "Toss Payments", "NCP"],
    work: [
      "시험 종료 후 명예의 전당 등재자 자동 선정 기능 구현",
      "Toss Payments 기반 상품 구매 및 환불 로직 개발",
      "학생 인터뷰 MP4·Word 파일 업로드 기능 및 NCP 연동",
    ],
    result: "반복적인 선정·결제·자료 관리 업무를 줄여 운영팀의 효율을 높였습니다.",
  },
  {
    number: "03",
    title: "사내 디자인 라이브러리",
    summary: "제품 전반의 UI 기준을 하나의 패키지로 통합",
    stack: ["TypeScript", "Tailwind", "npm"],
    work: [
      "TOSEL 홈페이지 리뉴얼을 위한 사내 통합 디자인 시스템 구축·유지보수",
      "@edu-tosel/design 패키지를 npm으로 배포해 설치와 업데이트 지원",
    ],
    result: "일관된 UI/UX를 확보하고 유지보수 효율과 개발자 생산성을 높였습니다.",
  },
  {
    number: "04",
    title: "TOSEL 홈페이지 리뉴얼",
    summary: "접수와 결제를 온라인 중심으로 전면 재설계",
    stack: ["Next.js", "TypeScript", "Toss Payments"],
    work: [
      "기존 홈페이지를 Next.js 기반으로 전면 리뉴얼",
      "Excel 수기 단체접수 방식을 온라인 자동화 흐름으로 개선",
      "Easy Pay를 Toss Payments 연동으로 전환해 결제 시스템 재구축",
    ],
    result: "단체 접수 누락 문제를 해결하고 사용자 경험과 매출 개선에 기여했습니다.",
    href: "https://tosel.org",
  },
  {
    number: "05",
    title: "TOSEL VOCA Check",
    summary: "교사와 학생의 사용 맥락을 분리한 학습 서비스",
    stack: ["React.js", "TypeScript", "Database"],
    work: [
      "기존 단어 데이터베이스를 신규 DB로 이전",
      "교사용·학생용 UI를 분리 설계하고 웹·모바일 서비스 제공",
    ],
    result: "사용자별 맞춤 학습 UX를 제공하고 데이터 이관부터 신규 서비스 출시까지 수행했습니다.",
    href: "https://voca-check.tosel.co.kr",
  },
  {
    number: "06",
    title: "사내 운영팀 Admin",
    summary: "신청 현황과 운영 데이터를 한곳에서 관리",
    stack: ["Next.js", "TypeScript"],
    work: [
      "명예의 전당 물품 신청과 교재·시험 신청 현황 관리 기능 개발",
      "사내 IP 기반 접근 제어로 관리자 시스템 보안 강화",
    ],
    result: "분산된 신청 현황을 통합해 운영팀의 데이터 관리 효율을 개선했습니다.",
  },
  {
    number: "07",
    title: "인사혁신처 연동 시스템",
    summary: "외부 기관 전용 인증과 성적 확인 경험 구축",
    stack: ["Next.js", "API", "Authentication"],
    work: [
      "인사혁신처 전용 계정 시스템과 성적 확인 UI/UX 개발",
      "성적 API 연동 및 인증 관리",
    ],
    result: "TOSEL 시험 성적의 국가 공인 활용을 지원하고 외부 기관 협업 경험을 확보했습니다.",
  },
  {
    number: "08",
    title: "AI 기반 문제 생성 시스템",
    summary: "문제 제작 과정을 AI와 데이터 기반 흐름으로 전환",
    stack: ["API", "AI", "Data"],
    work: [
      "고려대학교 기계학습·빅데이터 연구팀과 AI 기반 문제 생성 시스템 구축에 참여",
      "기존 수작업 교재 문제 제작을 지원하는 문제 데이터 API 개발",
    ],
    result: "AI와 데이터가 운영 효율과 사용자 경험을 개선하는 과정을 실무에서 경험했습니다.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="페이지 상단으로 이동">
          <span className="status-dot" /> LEE JAEGYEOM / PORTFOLIO
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">// FRONTEND DEVELOPER · LEE JAEGYEOM</p>
          <h1>
            이재겸
            <small>Frontend Developer</small>
          </h1>
          <p className="intro">
            사용자 경험을 중심에 두고, 복잡한 요구사항을 누구나 편리하게
            사용할 수 있는 서비스로 구현하는 프론트엔드 개발자입니다.
            에듀토셀에서 ERP, 결제, 학습 서비스와 디자인 시스템을 개발했습니다.
          </p>
          <div className="profile-links" aria-label="연락처 및 프로필">
            <a href="mailto:thfpdhk1@gmail.com">
              <span>EMAIL</span>
              <strong>thfpdhk1@gmail.com</strong>
            </a>
            <a href="https://github.com/jayLrei" target="_blank" rel="noreferrer">
              <span>GITHUB</span>
              <strong>github.com/jayLrei ↗</strong>
            </a>
          </div>
          <div className="hero-meta" aria-label="경력 및 핵심 기술">
            <div><span>EXPERIENCE</span><strong>TOSEL · 2023.04—2025.05</strong></div>
            <div><span>CORE STACK</span><strong>React · Next.js</strong></div>
            <div><span>LANGUAGE</span><strong>TypeScript</strong></div>
          </div>
        </div>

        <div className="project-index" id="projects">
          <p className="section-label">SELECTED PROJECTS</p>
          <ol>
            {projects.map((project) => (
              <li key={project.number}>
                <a href={`#project-${project.number}`}>
                  <span>{project.number}</span>
                  <span className="index-title">{project.title}</span>
                  <span className="index-arrow" aria-hidden="true">↗</span>
                  <small>{project.summary}</small>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="section-label">EXPERIENCE / 01—08</p>
          <h2 id="experience-title">문제 정의부터 출시까지,<br />운영에 남는 개발</h2>
          <p>업무의 병목을 찾고 사용자와 운영팀의 흐름을 함께 설계했습니다.</p>
        </div>

        <div className="project-details">
          {projects.map((project) => (
            <article id={`project-${project.number}`} key={project.number}>
              <div className="article-head">
                <span className="article-number">/{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                {project.href && (
                  <a className="visit-link" href={project.href} target="_blank" rel="noreferrer">
                    VISIT ↗<span className="sr-only"> 새 창에서 열기</span>
                  </a>
                )}
              </div>
              <div className="article-body">
                <div className="stack" aria-label="사용 기술">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <ul>
                  {project.work.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="result"><span>RESULT</span>{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="about">
        <p>이재겸 · FRONTEND DEVELOPER</p>
        <a href="mailto:thfpdhk1@gmail.com">thfpdhk1@gmail.com</a>
        <a href="https://github.com/jayLrei" target="_blank" rel="noreferrer">GITHUB ↗</a>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

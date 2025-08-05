import React from "react";

function Header(props) {
  const getTierinfo = (level) => {
    if (level >= 60) {
      return { name: "전설", className: "tier-legendary" };
    }
    if (level >= 50) {
      return { name: "영웅", className: "tier-heroic" };
    }
    if (level >= 40) {
      return { name: "고급", className: "tier-rare" };
    }
    return { name: "일반", className: "tier-common" };
  };

  return (
    <header className="card-header">
      <div className="character-identity">
        <h2>
          <span className={getTierinfo(props.level)}></span>
          {props.name}
        </h2>
        <span>{props.guild}</span>
      </div>
      <div className="character-meta">
        <span>{props.class}</span>
        <span>{props.level}</span>
        <span className="status-online">{props.status}</span>
      </div>
    </header>
  );
}

function Stats(props) {
  return (
    <section className="card-stats">
      <div className="stat-bar">
        <label htmlFor="health">HP</label>
        <progress id="health" value={props.health.current} max={props.health.max}></progress>
        <span>{`${props.health.current} / ${props.health.max}`}</span>
      </div>
      <div className="stat-bar">
        <label htmlFor="mana">MP</label>
        <progress id="mana" value={props.mana.current} max={props.mana.max}></progress>
        <span>{`${props.mana.current} / ${props.mana.max}`}</span>
      </div>
    </section>
  );
}

function Details(props) {
  return (
    <section className="card-details">
      <div className="character-skills">
        <h3>스킬</h3>
        <ul>
          {props.skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="character-equipment">
        <h3>장비</h3>
        <dl>
          <dt>무기</dt>
          <dd>{props.equipment.weapon}</dd>
          <dt>방어구</dt>
          <dd>{props.equipment.armor}</dd>
          <dt>장신구</dt>
          <dd>{props.equipment.accessory}</dd>
        </dl>
      </div>
    </section>
  );
}

function Achievements(props) {
  return (
    <section className="card-achievements">
      <h3>업적</h3>
      <ul>
        {props.achievements.map((achievement, index) => {
          return <li key={index}>{achievement}</li>;
        })}
      </ul>
    </section>
  );
}

function Footer(props) {
  const lastDate = new Date(props.lastLogin);

  const year = lastDate.getFullYear();
  const month = lastDate.getMonth() + 1;
  const day = lastDate.getDate();

  return (
    <footer className="card-footer">
      <p>{`마지막 로그인: ${year}년 ${month}월 ${day}일`}</p>
    </footer>
  );
}

function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <Header
        name={character.name}
        guild={character.guild}
        class={character.class}
        level={character.level}
        status={character.status}
      />
      <Stats health={character.health} mana={character.mana} />
      <Details skills={character.skills} equipment={character.equipment} />
      <Achievements achievements={character.achievements} />
      <Footer lastLogin={character.lastLogin} />
    </article>
  );
}

function App() {
  const characterData = [
    {
      id: 1,
      name: "드래곤 슬레이어 아리아",
      class: "마법사",
      level: 85,
      health: { current: 450, max: 500 },
      mana: { current: 800, max: 800 },
      skills: ["파이어볼", "아이스 스톰", "텔레포트", "치유의 빛"],
      equipment: {
        weapon: "고대의 지팡이",
        armor: "마법사 로브",
        accessory: "지혜의 반지",
      },
      status: "활성",
      guild: "불꽃의 수호자",
      achievements: ["드래곤 킬러", "마법 마스터", "길드 리더"],
      isOnline: true,
      lastLogin: "2025-08-04T10:30:00Z",
    },
    {
      id: 2,
      name: "강철심장 가렌",
      class: "전사",
      level: 72,
      health: { current: 280, max: 900 },
      mana: { current: 150, max: 200 },
      skills: ["강타", "방어 태세", "돌진"],
      equipment: {
        weapon: "신화급 대검",
        armor: "플레이트 아머",
        accessory: null,
      },
      status: "부상",
      guild: null,
      achievements: ["백전백승", "탱커의 자존심"],
      isOnline: false,
      lastLogin: "2025-08-03T18:45:00Z",
    },
    {
      id: 3,
      name: "바람의 춤꾼 루나",
      class: "궁수",
      level: 45,
      health: { current: 350, max: 350 },
      mana: { current: 0, max: 400 },
      skills: ["연속 사격", "독화살", "은신", "치유의 바람", "폭풍 화살"],
      equipment: {
        weapon: "엘븐 활",
        armor: "가죽 갑옷",
        accessory: "민첩의 목걸이",
      },
      status: "휴식",
      guild: "달빛 사냥꾼",
      achievements: ["명사수"],
      isOnline: true,
      lastLogin: "2025-08-04T09:15:00Z",
    },
  ];

  return (
    <div className="app-container">
      <h1>캐릭터 목록</h1>
      {characterData.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;

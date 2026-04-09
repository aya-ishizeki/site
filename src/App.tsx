import React, { useMemo, useState } from "react";

type NavItem = { key: string; en: string; jp: string };
type PaperLink = { label: string; url: string };
type PaperItem = {
  category: "thesis" | "refereed" | "accepted" | "submitted";
  year: string;
  title: string;
  meta: string;
  venue: string;
  links?: PaperLink[];
};
type TalkItem = { text: string; note?: string };
type TalkBlock = { year: string; items: TalkItem[] };
type ResearchSubsection = { title: string; body: string };
type TimelineItem = { date: string; text: string; subtext?: string };
type LocaleText = {
  affiliation: string;
  headerAffiliation: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHeading: string;
  heroText: string;
  profile: string;
  field: string;
  keywords: string;
  affiliationLabel: string;
  fieldValue: string;
  keywordValue: string;
  researchTitle: string;
  researchBody: string;
  currentThemes: string;
  researchSubsections: ResearchSubsection[];
  relatedLinksTitle: string;
  relatedLinks: { text: string; url: string }[];
  themes: string[];
  papersTitle: string;
  papersLead: string;
  talksTitle: string;
  talksLead: string;
  teachingTitle: string;
  teachingLead: string;
  teachingItems: { text: string; url?: string }[];
  cvTitle: string;
  positions: string;
  education: string;
  grants: string;
  visits: string;
  cvNote: string;
  positionsItems: TimelineItem[];
  educationItems: TimelineItem[];
  grantItems: TimelineItem[];
  visitItems: TimelineItem[];
  quickLinks: string[];
  externalLinks: PaperLink[];
};

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState<"jp" | "en">("jp");

  const nav: NavItem[] = [
    { key: "home", en: "Home", jp: "ホーム" },
    { key: "research", en: "Research", jp: "研究" },
    { key: "papers", en: "Papers", jp: "論文" },
    { key: "talks", en: "Talks", jp: "講演" },
    { key: "teaching", en: "Teaching", jp: "講義情報" },
    { key: "cv", en: "CV", jp: "CV" },
  ];

  const papers: PaperItem[] = [
    {
      category: "thesis",
      year: "2016",
      title: "Decomposition of the Mobius energy: the Mobius invariance and variational formulae of decomposed energies",
      meta:
        lang === "jp"
          ? "博士（理学）（埼玉大学）・取得年月日 2016年3月24日"
          : "Ph.D. in Science, Saitama University, March 24, 2016",
      venue: lang === "jp" ? "学位論文" : "Thesis",
    },
    {
      category: "refereed",
      year: "2014",
      title:
        "A. Ishizeki & T. Nagasawa, A decomposition theorem of the Möbius energy I: Decomposition and Möbius invariance, Kodai Math. J. 37 (3), 737-754, 2014.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.2996/kmj/1414674619" }],
    },
    {
      category: "refereed",
      year: "2015",
      title:
        "A. Ishizeki & T. Nagasawa, A decomposition theorem of the Möbius energy II: variational formulae and estimates, Math. Ann. 363 (1-2), 617-635, 2015.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s00208-015-1175-2" }],
    },
    {
      category: "refereed",
      year: "2016",
      title:
        "A. Ishizeki & T. Nagasawa, The invariance of decomposed Möbius energies under inversions with center on curves, J. Knot Theory Ramifications 25 (2), 1650009, 22 pp., 2016.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1142/S0218216516500097" }],
    },
    {
      category: "refereed",
      year: "2016",
      title:
        "A. Ishizeki & T. Nagasawa, The L2-gradient of decomposed Möbius energies, Calc. Var. Partial Differential Equations 55 (3), Art. 56, 31 pp., 2016.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s00526-016-0993-8" }],
    },
    {
      category: "refereed",
      year: "2021",
      title:
        "A. Ishizeki & T. Nagasawa, Upper and lower bounds and modulus of continuity of decomposed Möbius energies, J. Geom. Anal. 31, 5659-5686, 2021.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s12220-020-00496-x" }],
    },
    {
      category: "refereed",
      year: "2021",
      title:
        "A. Ishizeki & T. Nagasawa, Decomposition of generalized O'Hara's energies, Math. Z. 298, 1049-1076, 2021.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1007/s00209-020-02601-w" }],
    },
    {
      category: "refereed",
      year: "2022",
      title:
        "S. Blatt, A. Ishizeki & T. Nagasawa, A Möbius invariant discretization of O'Hara's Möbius energy, J. Knot Theory Ramifications 31 (3), Paper No. 2250016, 15 pp., 2022.",
      meta: "",
      venue: lang === "jp" ? "査読付き論文" : "Refereed article",
      links: [{ label: "DOI", url: "https://doi.org/10.1142/S021821652250016X" }],
    },
    {
      category: "accepted",
      year: "",
      title:
        "A. Ishizeki & T. Nagasawa, The Möbius energy for knots and links, and wave maps, to appear in the 13th MSJ-JI Proceedings Differential Geometry and Integrable Systems.",
      meta: "",
      venue: lang === "jp" ? "受理済み・近刊" : "Accepted / forthcoming",
    },
    {
      category: "accepted",
      year: "",
      title:
        "A. Ishizeki & T. Nagasawa, Möbius energies for multi-component-links, and their Möbius-invariant decompositions, to appear in Kyushu J. Math.",
      meta: "",
      venue: lang === "jp" ? "受理済み・近刊" : "Accepted / forthcoming",
      links: [{ label: "to appear", url: "https://www2.math.kyushu-u.ac.jp/~kjm/to_appear.html" }],
    },
    {
      category: "accepted",
      year: "",
      title:
        "S. Blatt, A. Ishizeki & T. Nagasawa, A Möbius invariant discretization and decomposition of the Möbius energy, to appear in Saitama Math. J.",
      meta: "",
      venue: lang === "jp" ? "受理済み・近刊" : "Accepted / forthcoming",
    },
    {
      category: "submitted",
      year: "",
      title:
        "A. Ishizeki & T. Nagasawa, Direct expression of Möbius energies and their decomposition via the Gauss map, submitted.",
      meta: "",
      venue: lang === "jp" ? "投稿済み" : "Submitted",
    },
  ];

  const talks: TalkBlock[] = [
    {
      year: "2026",
      items: [
        {
          text:
            lang === "jp"
              ? "さいたま数理解析セミナー『多成分絡み目に対するメビウスエネルギーとメビウス不変分解』"
              : 'Saitama Mathematical Analysis Seminar, "Möbius energies for multi-component links and their Möbius-invariant decompositions"',
          note: lang === "jp" ? "2026年3月28日・埼玉大学" : "March 28, 2026, Saitama University",
        },
      ],
    },
    {
      year: "2018",
      items: [
        {
          text:
            lang === "jp"
              ? "東京大学数値解析セミナー#107『Möbius エネルギーの Möbius 不変な離散化と分解』"
              : 'University of Tokyo Numerical Analysis Seminar #107, "A Möbius invariant discretization and decomposition of Möbius energy"',
          note: lang === "jp" ? "2018年10月15日・東京大学" : "October 15, 2018, The University of Tokyo",
        },
        {
          text:
            lang === "jp"
              ? "研究集会『第16回浜松偏微分方程式研究集会』「一般化された O'Hara エネルギーの分解と帰結」"
              : '16th Hamamatsu Workshop on Partial Differential Equations, "Decomposition of generalized O\'Hara energies and consequences"',
          note: lang === "jp" ? "2018年12月15日・静岡大学浜松キャンパス" : "December 15, 2018, Shizuoka University Hamamatsu Campus",
        },
      ],
    },
    {
      year: "2016",
      items: [
        {
          text:
            lang === "jp"
              ? "第22回さいたま数理解析セミナー『A decomposition of the Möbius energy and consequences』"
              : '22nd Saitama Mathematical Analysis Seminar, "A decomposition of the Möbius energy and consequences"',
          note: lang === "jp" ? "2016年8月16日・埼玉大学サテライトキャンパス" : "August 16, 2016, Saitama University Satellite Campus",
        },
      ],
    },
    {
      year: "2015",
      items: [
        {
          text:
            lang === "jp"
              ? "Geometric Properties for Parabolic and Elliptic PDE's 4th Italian-Japanese Workshop『A decomposition of the Möbius energy and consequences』"
              : 'Geometric Properties for Parabolic and Elliptic PDE\'s 4th Italian-Japanese Workshop, "A decomposition of the Möbius energy and consequences"',
          note: lang === "jp" ? "2015年5月25日–29日・Palinuro, Italy（ポスター発表）" : "May 25-29, 2015, Palinuro, Italy (poster)",
        },
        {
          text:
            lang === "jp"
              ? "北海道大学 PDE セミナー『A decomposition of the Möbius energy and consequences』"
              : 'Hokkaido University PDE Seminar, "A decomposition of the Möbius energy and consequences"',
          note: lang === "jp" ? "2015年7月24日・北海道大学" : "July 24, 2015, Hokkaido University",
        },
        {
          text:
            lang === "jp"
              ? "Geometric Energies with Links to Applications, Topology and Open Problems『A decomposition of the Möbius energy and consequences』"
              : 'Geometric Energies with Links to Applications, Topology and Open Problems, "A decomposition of the Möbius energy and consequences"',
          note: lang === "jp" ? "2015年8月31日–9月3日・Universität Basel（ポスター発表）" : "Aug 31-Sep 3, 2015, Universität Basel (poster)",
        },
        {
          text:
            lang === "jp"
              ? "神戸大学 解析セミナー『A decomposition of the Möbius energy and consequences』"
              : 'Kobe University Analysis Seminar, "A decomposition of the Möbius energy and consequences"',
          note: lang === "jp" ? "2015年12月8日・神戸大学" : "December 8, 2015, Kobe University",
        },
      ],
    },
    {
      year: "2014",
      items: [
        {
          text:
            lang === "jp"
              ? "Workshop on analysis in Kagurazaka『Decomposition of the Möbius energy: Geometric meaning and analytic utility』"
              : 'Workshop on Analysis in Kagurazaka, "Decomposition of the Möbius energy: Geometric meaning and analytic utility"',
          note: lang === "jp" ? "2014年1月25日・東京理科大学 神楽坂キャンパス" : "January 25, 2014, Tokyo University of Science Kagurazaka Campus",
        },
        {
          text:
            lang === "jp"
              ? "Curvature-Application-Knots-Energies『A decomposition theorem of the Möbius energy I: Decomposition and Möbius invariance』"
              : 'Curvature-Application-Knots-Energies, "A decomposition theorem of the Möbius energy I: Decomposition and Möbius invariance"',
          note: lang === "jp" ? "2014年3月26日–28日・Max Planck Institute" : "March 26-28, 2014, Max Planck Institute",
        },
        {
          text:
            lang === "jp"
              ? "Variational Problems and Nonlinear Partial Differential Equations『A decomposition theorem of the Möbius energy I: Decomposition and Möbius invariance』"
              : 'Variational Problems and Nonlinear Partial Differential Equations, "A decomposition theorem of the Möbius energy I: Decomposition and Möbius invariance"',
          note: lang === "jp" ? "2014年9月9日–10日・東京理科大学 野田キャンパス" : "September 9-10, 2014, Tokyo University of Science Noda Campus",
        },
        {
          text:
            lang === "jp"
              ? "日本数学学会 秋季総合分科会『分解されたメビウス・エネルギーの変分公式とその評価』"
              : 'MSJ Annual Meeting, "Variational formulae and estimates for decomposed Möbius energies"',
          note: lang === "jp" ? "2014年9月24日–28日・広島大学" : "September 24-28, 2014, Hiroshima University",
        },
        {
          text:
            lang === "jp"
              ? "Variational Problems and Nonlinear Partial Differential Equations『Variational formulae and estimates for decomposed Möbius energies』"
              : 'Variational Problems and Nonlinear Partial Differential Equations, "Variational formulae and estimates for decomposed Möbius energies"',
          note: lang === "jp" ? "2014年10月28日–31日・東北大学" : "October 28-31, 2014, Tohoku University",
        },
        {
          text:
            lang === "jp"
              ? "東工大数理解析セミナー『分解されたメビウス・エネルギーの変分公式とその評価』"
              : 'Tokyo Tech Mathematical Analysis Seminar, "Variational formulae and estimates for decomposed Möbius energies"',
          note: lang === "jp" ? "2014年11月10日・東京工業大学" : "November 10, 2014, Tokyo Institute of Technology",
        },
      ],
    },
    {
      year: "2012",
      items: [
        {
          text:
            lang === "jp"
              ? "埼玉大学木曜幾何セミナー『Möbius エネルギーの特異性除去と変分公式の絶対可積分性』"
              : 'Saitama University Thursday Geometry Seminar, "Singularity removal and absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年5月9日・埼玉大学" : "May 9, 2012, Saitama University",
        },
        {
          text:
            lang === "jp"
              ? "首都大学幾何セミナー『Möbius エネルギーの特異性除去と変分公式の絶対可積分性』"
              : 'Tokyo Metropolitan University Geometry Seminar, "Singularity removal and absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年6月15日・首都大学東京" : "June 15, 2012, Tokyo Metropolitan University",
        },
        {
          text:
            lang === "jp"
              ? "第34回発展方程式若手セミナー『メビウス・エネルギーの特異性除去と変分公式の絶対可積分性』"
              : '34th Young Seminar on Evolution Equations, "Singularity removal and absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年9月3日・タナベ経営湘南研修センター" : "September 3, 2012, Tanabe Management Shonan Training Center",
        },
        {
          text:
            lang === "jp"
              ? "日本数学会 秋季総合分科会（函数方程式分科会）『The absolute integrability of variational formulae for Möbius energy』"
              : 'MSJ Annual Meeting (Functional Equations), "The absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年9月20日・九州大学" : "September 20, 2012, Kyushu University",
        },
        {
          text:
            lang === "jp"
              ? "東北大学非線形偏微分方程式ワークショップ『The absolute integrability of variational formulae for Möbius energy』"
              : 'Tohoku University Workshop on Nonlinear PDEs, "The absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年9月28日・東北大学" : "September 28, 2012, Tohoku University",
        },
        {
          text:
            lang === "jp"
              ? "研究集会『界面の数理と幾何解析』『メビウス・エネルギーの特異性除去と変分公式の絶対可積分性』"
              : 'Workshop on Mathematics of Interfaces and Geometric Analysis, "Singularity removal and absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年11月29日・芝浦工業大学" : "November 29, 2012, Shibaura Institute of Technology",
        },
        {
          text:
            lang === "jp"
              ? "第10回浜松偏微分方程式研究集会『メビウス・エネルギーの特異性除去と変分公式の絶対可積分性』"
              : '10th Hamamatsu Workshop on Partial Differential Equations, "Singularity removal and absolute integrability of variational formulae for Möbius energy"',
          note: lang === "jp" ? "2012年12月18日・静岡大学" : "December 18, 2012, Shizuoka University",
        },
      ],
    },
  ];

  const t: LocaleText = useMemo(() => {
    if (lang === "jp") {
      return {
        affiliation:
          "埼玉大学 大学院 理工学研究科 数理電子情報系専攻 数学プログラム ／ 理学部 数学科 助教",
        headerAffiliation:
          "埼玉大学 大学院 理工学研究科 数理電子情報系専攻 数学プログラム ／ 理学部 数学科 助教",
        heroTitle: "石関 彩",
        heroSubtitle: "Aya Ishizeki",
        heroHeading: "幾何学的変分問題と非線形解析",
        heroText:
          "曲線や曲面に現れる幾何学的変分問題と、それに関連する偏微分方程式を研究しています。特に、結び目や絡み目に対して定義されるエネルギー汎関数、なかでもメビウス・エネルギーを中心に、その構造解析、変分公式、勾配流を通して解析的・幾何学的性質を調べています。",
        profile: "プロフィール",
        field: "専門",
        keywords: "キーワード",
        affiliationLabel: "所属",
        fieldValue: "非線形解析・幾何解析・偏微分方程式",
        keywordValue:
          "メビウス・エネルギー，結び目エネルギー，幾何解析，非線形解析，偏微分方程式，変分公式，第二変分，勾配流",
        researchTitle: "研究概要",
        researchBody:
          "結び目や絡み目に対して定義されるエネルギー汎関数の構造解析、変分公式、ならびにそれに付随する勾配流を研究しています。とくにメビウス・エネルギーを中心に、分解定理を手がかりとして、非局所的に定義される幾何量の中から局所的な楕円型・放物型構造がどのように現れるかを調べています。最近は、第二変分の主要項が局所的な4階楕円型作用素として現れることや、そのことが勾配流の解析にどのような意味を持つかに関心があります。",
        currentThemes: "現在の関心",
        researchSubsections: [
          {
            title: "研究の背景",
            body:
              "O'Hara によって導入された結び目エネルギーは、結び目の自己交差を防ぎつつ、その幾何学的複雑さを測る量として研究されてきました。とくにメビウス・エネルギーはメビウス変換に対する不変性を持ち、幾何学的にも解析的にも豊かな構造を備えています。",
          },
          {
            title: "主なテーマ",
            body:
              "メビウス・エネルギーの分解定理、第二変分、勾配流を中心に研究しています。非局所的な汎関数の中に現れる局所構造を捉えることに関心があります。",
          },
          {
            title: "解析的な視点",
            body:
              "分解定理を用いて主要項を抽出し、楕円型作用素としての構造や coercivity を調べることで、勾配流の放物型構造の理解につなげることを目指しています。",
          },
        ],
        relatedLinksTitle: "関連リンク",
        relatedLinks: [
          { text: "Jun O'Hara", url: "https://sites.google.com/site/junohara/home?authuser=0" },
          { text: "Simon Blatt", url: "https://simon-blatt.github.io/" },
          { text: "Takeyuki Nagasawa", url: "https://www.saitama-u.ac.jp/sci/math/lab/nagasawa/index.html" },
        ],
        themes: [
          "メビウス・エネルギーの分解定理",
          "第二変分",
          "coercivity と短時間存在への応用",
          "結び目エネルギーの勾配流",
        ],
        papersTitle: "論文",
        papersLead: "査読論文・プレプリント・掲載決定論文をここにまとめる想定です。",
        talksTitle: "講演",
        talksLead: "講演・セミナー発表を年ごとに整理して掲載する想定です。",
        teachingTitle: "講義情報",
        teachingLead: "担当講義・演習を年度ごとに整理して掲載する想定です。",
        teachingItems: [
          { text: "解析概論A演習（埼玉大学，2026年度 第1・第2ターム）", url: "https://webclass.gks.saitama-u.ac.jp/" },
          { text: "解析学序論（埼玉大学，2026年度 第1・第2ターム）", url: "https://webclass.gks.saitama-u.ac.jp/" },
          { text: "解析概論B演習（埼玉大学，2026年度 第3・第4ターム）", url: "https://webclass.gks.saitama-u.ac.jp/" },
        ],
        cvTitle: "履歴書",
        positions: "職歴",
        education: "学位・学歴",
        grants: "研究助成",
        visits: "海外研究滞在",
        cvNote: "公開版では、このページに業績一覧、研究滞在、受賞などを追加できます。",
        positionsItems: [
          {
            date: "2015年4月 – 2016年3月",
            text: "日本学術振興会 特別研究員DC2",
            subtext: "受入研究機関：埼玉大学",
          },
          {
            date: "2016年4月 – 2017年3月",
            text: "日本学術振興会 特別研究員PD",
            subtext: "受入研究機関：埼玉大学、DC2から採用区分変更",
          },
          {
            date: "2017年4月 – 2020年3月",
            text: "日本学術振興会 特別研究員PD",
            subtext: "受入研究機関：千葉大学",
          },
          {
            date: "2020年7月 – 2021年3月",
            text: "埼玉大学 非常勤研究員",
          },
          {
            date: "2021年4月 – 2023年9月",
            text: "埼玉大学 学術研究員",
          },
          {
            date: "2023年10月 – 2026年3月",
            text: "日本学術振興会 特別研究員RPD",
            subtext: "受入研究機関：埼玉大学",
          },
          {
            date: "2026年4月 – 現在",
            text: "埼玉大学 理学部数学科 助教",
          },
        ],
        educationItems: [
          {
            date: "2007年4月",
            text: "埼玉大学理学部数学科 入学",
          },
          {
            date: "2011年3月",
            text: "埼玉大学理学部数学科 卒業",
          },
          {
            date: "2011年4月",
            text: "埼玉大学大学院理工学研究科 博士前期課程 入学",
          },
          {
            date: "2013年3月",
            text: "埼玉大学大学院理工学研究科 博士前期課程 修了",
          },
          {
            date: "2013年4月",
            text: "埼玉大学大学院理工学研究科 博士後期課程 入学",
          },
          {
            date: "2016年3月",
            text: "埼玉大学大学院理工学研究科 博士後期課程 修了",
          },
          {
            date: "2016年3月",
            text: "博士（理学）取得（埼玉大学）",
          },
        ],
        grantItems: [
          {
            date: "2015年度–2016年度",
            text: "特別研究員奨励費（代表）",
            subtext: "『勾配流を用いた結び目のエネルギー最小値の存在と非存在に関する研究』",
          },
          {
            date: "2017年度–2019年度",
            text: "特別研究員奨励費（代表）",
            subtext: "『勾配流による結び目のエネルギーの解析』",
          },
          {
            date: "2023年度–2026年度",
            text: "特別研究員奨励費（代表）",
            subtext: "『結び目と絡み目に対するメビウス不変エネルギーの統一理論の構築』",
          },
        ],
        visitItems: [
          {
            date: "2010年10月 – 2011年1月",
            text: "Scuola Normale Superiore di Pisa, イタリア",
            subtext: "留学",
          },
          {
            date: "2015年3月",
            text: "Karlsruhe Institute of Technology, ドイツ",
            subtext: "共同研究打ち合わせ",
          },
          {
            date: "2015年8月",
            text: "Universität Salzburg, オーストリア",
            subtext: "共同研究打ち合わせ",
          },
          {
            date: "2016年6月 – 7月",
            text: "Universität Freiburg, ドイツ",
            subtext: "研究滞在",
          },
          {
            date: "2016年11月",
            text: "Universität Salzburg, オーストリア",
            subtext: "共同研究打ち合わせ",
          },
          {
            date: "2018年12月",
            text: "Universität Salzburg, オーストリア",
            subtext: "共同研究",
          },
        ],
        quickLinks: ["研究を見る", "論文を見る", "講演を見る", "講義情報を見る", "CVを見る"],
       externalLinks: [
  { label: "researchmap", url: "https://researchmap.jp/aya-ishizeki" },
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=uDeaq1IAAAAJ" },
  { label: "University page", url: "https://www.rimath.saitama-u.ac.jp/staff/" },
],
      };
    }

    return {
      affiliation:
        "Assistant Professor, Graduate School of Science and Engineering / Department of Mathematics, Saitama University",
      headerAffiliation:
        "Assistant Professor, Graduate School of Science and Engineering / Department of Mathematics, Saitama University",
      heroTitle: "Aya Ishizeki",
      heroSubtitle: "石関 彩",
      heroHeading: "Geometric variational problems and nonlinear analysis",
      heroText:
        "I work on geometric variational problems for curves and surfaces and related partial differential equations. In particular, I study knot and link energies, especially Möbius energy, investigating their analytic and geometric properties through structural analysis, variational formulas, and gradient flows from the viewpoint of nonlinear analysis.",
      profile: "Profile",
      field: "Field",
      keywords: "Keywords",
      affiliationLabel: "Affiliation",
      fieldValue: "Geometric analysis / nonlinear analysis / partial differential equations",
      keywordValue:
        "Möbius energy, knot energies, geometric analysis, nonlinear analysis, partial differential equations, variational formulas, second variation, gradient flows",
      researchTitle: "Research",
      researchBody:
        "My research concerns geometric energies for knots and links, their analytic structure, variational formulas, and associated gradient flows. In particular, I study how invariant decompositions of Möbius energy reveal local elliptic or parabolic structures hidden inside a nonlocal geometric functional. More recently, I have been interested in how the principal part of the second variation appears as a local fourth-order elliptic operator and how this viewpoint contributes to the study of gradient flows.",
      currentThemes: "Current themes",
      researchSubsections: [
        {
          title: "Background",
          body:
            "Knot energies introduced by O'Hara have been studied as geometric functionals that penalize self-intersections while measuring the geometric complexity of knots. Among them, Möbius energy is particularly notable for its invariance under Möbius transformations and its rich geometric and analytic structure.",
        },
        {
          title: "Main focus",
          body:
            "My recent work centers on knot energies, especially Möbius energy, with emphasis on invariant decompositions, second variation, and gradient flows. A recurring theme is how local structure emerges from a nonlocal functional.",
        },
        {
          title: "Analytic viewpoint",
          body:
            "By identifying the principal part through decomposition, I study elliptic structure and coercivity, and use this perspective to better understand the parabolic nature of the associated gradient flow.",
        },
      ],
      relatedLinksTitle: "Related Links",
      relatedLinks: [
        { text: "Jun O'Hara", url: "https://sites.google.com/site/junohara/home?authuser=0" },
        { text: "Simon Blatt", url: "https://simon-blatt.github.io/" },
        { text: "Takeyuki Nagasawa", url: "https://www.saitama-u.ac.jp/sci/math/lab/nagasawa/index.html" },
      ],
      themes: [
        "Invariant decomposition of Möbius energy",
        "Second variation",
        "Coercivity and short-time existence",
        "Gradient flows for knot energies",
      ],
      papersTitle: "Papers",
      papersLead: "This page is intended to list published papers, accepted papers, and preprints.",
      talksTitle: "Talks",
      talksLead: "This page is intended to list talks and seminar presentations in reverse chronological order by year.",
      teachingTitle: "Teaching",
      teachingLead: "This page is intended to list courses and recitations by academic year.",
      teachingItems: [
        { text: "Recitation in Calculus A (Saitama University, AY 2026, Terms 1-2)", url: "https://webclass.gks.saitama-u.ac.jp/" },
        { text: "Introduction to Analysis (Saitama University, AY 2026, Terms 1-2)", url: "https://webclass.gks.saitama-u.ac.jp/" },
        { text: "Recitation in Calculus B (Saitama University, AY 2026, Terms 3-4)", url: "https://webclass.gks.saitama-u.ac.jp/" },
      ],
      cvTitle: "Curriculum Vitae",
      positions: "Appointments",
      education: "Degree and Education",
      grants: "Research Funding",
      visits: "International Research Visits",
      cvNote:
        "The published version can later include publications, research visits, and awards on this page.",
      positionsItems: [
        {
          date: "Apr 2015 – Mar 2016",
          text: "JSPS Research Fellow (DC2)",
          subtext: "Host institution: Saitama University",
        },
        {
          date: "Apr 2016 – Mar 2017",
          text: "JSPS Research Fellow (PD)",
          subtext: "Host institution: Saitama University, classification changed from DC2",
        },
        {
          date: "Apr 2017 – Mar 2020",
          text: "JSPS Research Fellow (PD)",
          subtext: "Host institution: Chiba University",
        },
        {
          date: "Jul 2020 – Mar 2021",
          text: "Part-time Researcher, Saitama University",
        },
        {
          date: "Apr 2021 – Sep 2023",
          text: "Researcher, Saitama University",
        },
        {
          date: "Oct 2023 – Mar 2026",
          text: "JSPS Research Fellow (RPD)",
          subtext: "Host institution: Saitama University",
        },
        {
          date: "Apr 2026 – present",
          text: "Assistant Professor, Department of Mathematics, Saitama University",
        },
      ],
      educationItems: [
        {
          date: "Apr 2007",
          text: "Entered the Department of Mathematics, Faculty of Science, Saitama University",
        },
        {
          date: "Mar 2011",
          text: "Graduated from the Department of Mathematics, Faculty of Science, Saitama University",
        },
        {
          date: "Apr 2011",
          text: "Entered the Master's Program, Graduate School of Science and Engineering, Saitama University",
        },
        {
          date: "Mar 2013",
          text: "Completed the Master's Program, Graduate School of Science and Engineering, Saitama University",
        },
        {
          date: "Apr 2013",
          text: "Entered the Doctoral Program, Graduate School of Science and Engineering, Saitama University",
        },
        {
          date: "Mar 2016",
          text: "Completed the Doctoral Program, Graduate School of Science and Engineering, Saitama University",
        },
        {
          date: "Mar 2016",
          text: "Ph.D. in Science, Saitama University",
        },
      ],
      grantItems: [
        {
          date: "FY 2015–FY 2016",
          text: "JSPS Research Fellowship Grant (PI)",
          subtext: "Research on the existence and non-existence of minimizers for knot energies using gradient flows",
        },
        {
          date: "FY 2017–FY 2019",
          text: "JSPS Research Fellowship Grant (PI)",
          subtext: "Analysis of knot energies via gradient flows",
        },
        {
          date: "FY 2023–FY 2026",
          text: "JSPS Research Fellowship Grant (PI)",
          subtext: "Toward a unified theory of Möbius-invariant energies for knots and links",
        },
      ],
      visitItems: [
        {
          date: "Oct 2010 – Jan 2011",
          text: "Scuola Normale Superiore di Pisa, Italy",
          subtext: "Study abroad",
        },
        {
          date: "Mar 2015",
          text: "Karlsruhe Institute of Technology, Germany",
          subtext: "Collaborative research meeting",
        },
        {
          date: "Aug 2015",
          text: "Universität Salzburg, Austria",
          subtext: "Collaborative research meeting",
        },
        {
          date: "Jun 2016 – Jul 2016",
          text: "Universität Freiburg, Germany",
          subtext: "Research visit",
        },
        {
          date: "Nov 2016",
          text: "Universität Salzburg, Austria",
          subtext: "Collaborative research meeting",
        },
        {
          date: "Dec 2018",
          text: "Universität Salzburg, Austria",
          subtext: "Collaborative research",
        },
      ],
      quickLinks: ["Research", "Papers", "Talks", "Teaching", "CV"],
      externalLinks: ["researchmap", "Google Scholar", "University page"],
    };
  }, [lang]);

  function PageButton({ item }: { item: NavItem }) {
    const active = page === item.key;
    return (
      <button
        onClick={() => setPage(item.key)}
        className={
          active
            ? "text-slate-900 font-semibold border-b-2 border-pink-300 pb-1"
            : "text-neutral-700 hover:text-slate-800 pb-1 border-b-2 border-transparent"
        }
      >
        {lang === "jp" ? item.jp : item.en}
      </button>
    );
  }

  function LangSwitch() {
    return (
      <div className="inline-flex rounded-full border border-slate-300 bg-white p-1 shadow-sm">
        <button
          onClick={() => setLang("jp")}
          className={
            lang === "jp"
              ? "px-3 py-1.5 text-sm rounded-full bg-pink-50 text-slate-900"
              : "px-3 py-1.5 text-sm rounded-full text-neutral-600"
          }
        >
          JP
        </button>
        <button
          onClick={() => setLang("en")}
          className={
            lang === "en"
              ? "px-3 py-1.5 text-sm rounded-full bg-pink-50 text-slate-900"
              : "px-3 py-1.5 text-sm rounded-full text-neutral-600"
          }
        >
          EN
        </button>
      </div>
    );
  }

  function SectionHeader({ label, title, lead }: { label: string; title: string; lead?: string }) {
    return (
      <div className="mb-8">
        <p className="text-sm tracking-[0.18em] text-slate-500 mb-3 uppercase">{label}</p>
        <div className="flex items-center gap-3">
          <span className="inline-block h-6 w-1.5 rounded-full bg-pink-200" />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        </div>
        {lead ? <p className="mt-3 text-neutral-600 leading-7">{lead}</p> : null}
      </div>
    );
  }

  function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
    const isGrantSection = title === t.grants;

    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50/50 px-7 py-5 md:px-8 md:py-6">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.date}-${item.text}`} className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start">
                <div className="text-slate-700 font-semibold tracking-tight whitespace-nowrap">
                  {item.date}
                </div>
                <div className="leading-7">
                  <span className="font-semibold text-slate-900">{item.text}</span>
                  {item.subtext && !isGrantSection ? (
                    <span className="text-neutral-600">（{item.subtext}）</span>
                  ) : null}
                  {item.subtext && isGrantSection ? (
                    <div className="mt-1 text-neutral-600 leading-7">{item.subtext}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function HomePage() {
    return (
      <section className="grid md:grid-cols-[1.35fr_1fr] gap-10 items-start">
        <div>
          <p className="text-sm tracking-[0.18em] text-slate-500 mb-4 uppercase">Home</p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-neutral-900">
            {t.heroHeading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700 max-w-3xl">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.quickLinks.map((label: string, i: number) => {
              const ids = ["research", "papers", "talks", "teaching", "cv"];
              return (
                <button
                  key={label}
                  onClick={() => setPage(ids[i])}
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:bg-slate-50 shadow-sm hover:border-pink-200"
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
  {t.externalLinks.map((link: PaperLink) => (
    <a
      key={link.label}
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 hover:border-pink-200"
    >
      {link.label}
    </a>
  ))}
</div>
          </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <div className="mb-4 h-1.5 w-16 rounded-full bg-pink-100" />
            <h3 className="text-base font-semibold text-slate-900">{t.profile}</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-neutral-500">{t.affiliationLabel}</dt>
                <dd className="mt-1">{t.affiliation}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">{t.field}</dt>
                <dd className="mt-1">{t.fieldValue}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">{t.keywords}</dt>
                <dd className="mt-1 leading-7">{t.keywordValue}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    );
  }

  function ResearchPage() {
    return (
      <section>
        <SectionHeader label="Research" title={t.researchTitle} />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="leading-8 text-neutral-700">{t.researchBody}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-7 border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{t.currentThemes}</h3>
            <ul className="mt-4 space-y-3 text-neutral-700 leading-7 list-disc pl-5">
              {t.themes.map((theme: string) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {t.researchSubsections.map((section: ResearchSubsection) => (
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
              <h3 className="text-lg font-semibold text-slate-950">{section.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
          <h3 className="text-lg font-semibold text-slate-950">{t.relatedLinksTitle}</h3>
          <ul className="mt-4 space-y-3 text-neutral-700 leading-7">
            {t.relatedLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="text-slate-900 hover:text-slate-700 underline decoration-slate-300 underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  function PapersPage() {
    const thesis = papers.filter((paper) => paper.category === "thesis");
    const refereed = papers.filter((paper) => paper.category === "refereed");
    const accepted = papers.filter((paper) => paper.category === "accepted");
    const submitted = papers.filter((paper) => paper.category === "submitted");

    const sectionTitle = (kind: string) => {
      if (lang === "jp") {
        if (kind === "thesis") return "１．学位論文";
        if (kind === "refereed") return "２．査読付き論文";
        if (kind === "accepted") return "３．受理済み・近刊";
        return "４．投稿済み";
      }
      if (kind === "thesis") return "1. Thesis";
      if (kind === "refereed") return "2. Refereed Articles";
      if (kind === "accepted") return "3. Accepted / Forthcoming";
      return "4. Submitted";
    };

    const PaperSection = ({ items, kind }: { items: PaperItem[]; kind: string }) => (
      <div className="mt-8 first:mt-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
        <h3 className="text-lg font-semibold text-slate-950">{sectionTitle(kind)}</h3>
        <div className="mt-4 space-y-4 text-neutral-700 leading-7">
          {items.map((paper, i) => (
            <div key={`${kind}-${paper.title}`} className="grid grid-cols-[2rem_1fr] gap-2 items-start">
              <div className="text-slate-700 font-medium">{i + 1})</div>
              <div>
                <div className="font-medium text-neutral-900 leading-7">{paper.title}</div>
                {paper.meta ? <div className="mt-1 text-sm text-neutral-600">{paper.meta}</div> : null}
                {paper.links && paper.links.length > 0 ? (
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {paper.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-900 hover:text-slate-700 underline decoration-slate-300 underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <section>
        <SectionHeader label="Papers" title={t.papersTitle} lead={t.papersLead} />
        <div className="space-y-6">
          <PaperSection items={thesis} kind="thesis" />
          <PaperSection items={refereed} kind="refereed" />
          <PaperSection items={accepted} kind="accepted" />
          <PaperSection items={submitted} kind="submitted" />
        </div>
      </section>
    );
  }

  function TalksPage() {
    const allTalks = talks.flatMap((block) =>
      block.items.slice().reverse().map((item) => ({
        year: block.year,
        text: item.text,
        note: item.note,
      }))
    );

    return (
      <section>
        <SectionHeader label="Talks" title={t.talksTitle} lead={t.talksLead} />
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
          <div className="space-y-5">
            {allTalks.map((item, i) => (
              <div
                key={`${item.year}-${item.text}`}
                className={`grid grid-cols-[2.5rem_1fr] gap-2 items-start ${
                  i !== allTalks.length - 1 ? "border-b border-slate-100 pb-4" : ""
                }`}
              >
                <div className="text-slate-700 font-medium">{i + 1})</div>
                <div>
                  <div className="font-medium text-neutral-900 leading-7">{item.text}</div>
                  {item.note ? <div className="mt-1 text-sm text-neutral-600">{item.note}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function TeachingPage() {
    return (
      <section>
        <SectionHeader label="Teaching" title={t.teachingTitle} lead={t.teachingLead} />
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
          <ul className="space-y-4 text-neutral-700 leading-7">
            {t.teachingItems.map((item) => (
              <li key={item.text} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                <a
                  href={item.url || "#"}
                  className="text-slate-900 hover:text-slate-700 underline decoration-slate-300 underline-offset-4"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
    const isGrantSection = title === t.grants;

    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-4 h-1.5 w-10 rounded-full bg-pink-100" />
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50/50 px-7 py-5 md:px-8 md:py-6">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.date}-${item.text}`} className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-4 items-start">
                <div className="text-slate-700 font-semibold tracking-tight whitespace-nowrap">{item.date}</div>
                <div className="leading-7">
                  <span className="font-semibold text-slate-900">{item.text}</span>
                  {item.subtext && !isGrantSection ? <span className="text-neutral-600">（{item.subtext}）</span> : null}
                  {item.subtext && isGrantSection ? (
                    <div className="mt-1 text-neutral-600 leading-7">{item.subtext}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function CVPage() {
    return (
      <section>
        <SectionHeader label="CV" title={t.cvTitle} lead={t.cvNote} />
        <div className="space-y-8">
          <TimelineSection title={t.education} items={t.educationItems} />
          <TimelineSection title={t.positions} items={t.positionsItems} />
          <TimelineSection title={t.grants} items={t.grantItems} />
          <TimelineSection title={t.visits} items={t.visitItems} />
        </div>
      </section>
    );
  }

  function CurrentPage() {
    if (page === "research") return <ResearchPage />;
    if (page === "papers") return <PapersPage />;
    if (page === "talks") return <TalksPage />;
    if (page === "teaching") return <TeachingPage />;
    if (page === "cv") return <CVPage />;
    return <HomePage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-neutral-900">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                石関 彩 <span className="text-slate-700 font-normal">/ Aya Ishizeki</span>
              </div>
              <div className="text-sm text-neutral-600 mt-1 leading-6 break-words">{t.headerAffiliation}</div>
            </div>
            <div className="shrink-0">
              <LangSwitch />
            </div>
          </div>
          <nav className="mt-4 flex flex-wrap justify-end gap-x-6 gap-y-3 text-sm">
            {nav.map((item) => (
              <PageButton key={item.key} item={item} />
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <CurrentPage />
      </main>
    </div>
  );
}

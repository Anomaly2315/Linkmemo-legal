import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = path.dirname(fileURLToPath(import.meta.url));
const appSourcePath = path.resolve(
  repoDir,
  '..',
  'LinkMemo',
  'lib',
  'core',
  'legal_documents.dart',
);
const source = fs.readFileSync(appSourcePath, 'utf8');

const languages = [
  {
    key: 'english',
    id: 'en',
    lang: 'en',
    label: 'English',
    privacyNav: 'Privacy',
    termsNav: 'Terms',
    deletionNav: 'Delete account',
    versionLabel: 'Document version',
    effectiveLabel: 'Effective date',
    effectiveDisplay: '17 August 2026',
    developerLabel: 'Developer',
    developerDisplay: 'LinkMemo, Hong Kong',
    deletionLink: 'Request account deletion by email',
    deletionSubject: 'LinkMemo account deletion request',
    inAppPath: 'In LinkMemo: Settings → Account → Delete account.',
    fullPolicyLink: 'Read the complete Privacy Policy',
    privacyOverview: 'How LinkMemo handles local data, accounts, Google Play purchases, AI enhancement, and account deletion.',
    termsOverview: 'The rules for local data, LinkMemo accounts, Full, AI Pro subscriptions, and AI results.',
    deletionOverview: 'How to request deletion and what account data is deleted or retained.',
  },
  {
    key: 'simplified',
    id: 'zh-cn',
    lang: 'zh-CN',
    label: '简体中文',
    privacyNav: '隐私政策',
    termsNav: '用户协议',
    deletionNav: '删除账号',
    versionLabel: '文档版本',
    effectiveLabel: '生效日期',
    effectiveDisplay: '2026年8月17日',
    developerLabel: '开发者',
    developerDisplay: 'LinkMemo（香港）',
    deletionLink: '通过电子邮件申请删除账号',
    deletionSubject: 'LinkMemo 账号删除申请',
    inAppPath: '在 LinkMemo 中：设置 → 账号 → 删除账号。',
    fullPolicyLink: '阅读完整隐私政策',
    privacyOverview: '说明 LinkMemo 如何处理本地数据、账号、Google Play 购买、AI 增强与账号删除。',
    termsOverview: '说明本地数据、LinkMemo 账号、完整版、AI Pro 订阅及 AI 结果的使用规则。',
    deletionOverview: '说明如何申请删除，以及哪些账号数据会被删除或保留。',
  },
  {
    key: 'traditional',
    id: 'zh-tw',
    lang: 'zh-Hant',
    label: '繁體中文',
    privacyNav: '私隱政策',
    termsNav: '使用者協議',
    deletionNav: '刪除帳戶',
    versionLabel: '文件版本',
    effectiveLabel: '生效日期',
    effectiveDisplay: '2026年8月17日',
    developerLabel: '開發者',
    developerDisplay: 'LinkMemo（香港）',
    deletionLink: '透過電郵申請刪除帳戶',
    deletionSubject: 'LinkMemo 帳戶刪除申請',
    inAppPath: '在 LinkMemo 中：設定 → 帳戶 → 刪除帳戶。',
    fullPolicyLink: '閱讀完整私隱政策',
    privacyOverview: '說明 LinkMemo 如何處理本機資料、帳戶、Google Play 購買、AI 增強及帳戶刪除。',
    termsOverview: '說明本機資料、LinkMemo 帳戶、完整版、AI Pro 訂閱及 AI 結果的使用規則。',
    deletionOverview: '說明如何申請刪除，以及哪些帳戶資料會被刪除或保留。',
  },
  {
    key: 'japanese',
    id: 'ja',
    lang: 'ja',
    label: '日本語',
    privacyNav: 'プライバシーポリシー',
    termsNav: '利用規約',
    deletionNav: 'アカウント削除',
    versionLabel: '文書バージョン',
    effectiveLabel: '発効日',
    effectiveDisplay: '2026年8月17日',
    developerLabel: '開発者',
    developerDisplay: 'LinkMemo（香港）',
    deletionLink: 'メールでアカウント削除を申請',
    deletionSubject: 'LinkMemo アカウント削除申請',
    inAppPath: 'LinkMemo 内：設定 → アカウント → アカウントを削除。',
    fullPolicyLink: 'プライバシーポリシー全文を読む',
    privacyOverview: 'ローカルデータ、アカウント、Google Play 購入、AI 強化、アカウント削除について説明します。',
    termsOverview: 'ローカルデータ、LinkMemo アカウント、Full、AI Pro 購読、AI 結果の利用条件です。',
    deletionOverview: '削除の申請方法と、削除または保持されるアカウントデータを説明します。',
  },
  {
    key: 'korean',
    id: 'ko',
    lang: 'ko',
    label: '한국어',
    privacyNav: '개인정보 처리방침',
    termsNav: '이용약관',
    deletionNav: '계정 삭제',
    versionLabel: '문서 버전',
    effectiveLabel: '시행일',
    effectiveDisplay: '2026년 8월 17일',
    developerLabel: '개발자',
    developerDisplay: 'LinkMemo (홍콩)',
    deletionLink: '이메일로 계정 삭제 요청',
    deletionSubject: 'LinkMemo 계정 삭제 요청',
    inAppPath: 'LinkMemo에서: 설정 → 계정 → 계정 삭제.',
    fullPolicyLink: '개인정보 처리방침 전체 보기',
    privacyOverview: '로컬 데이터, 계정, Google Play 구매, AI 향상 및 계정 삭제 처리 방식을 설명합니다.',
    termsOverview: '로컬 데이터, LinkMemo 계정, Full, AI Pro 구독 및 AI 결과에 적용되는 규칙입니다.',
    deletionOverview: '삭제 요청 방법과 삭제되거나 보존되는 계정 데이터를 설명합니다.',
  },
];

function decodeDartString(raw) {
  return raw
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, '\\');
}

function readQuoted(text, start) {
  let cursor = start;
  while (/\s/.test(text[cursor] ?? '')) cursor += 1;
  if (text[cursor] !== "'") {
    throw new Error(`Expected a Dart string near: ${text.slice(cursor, cursor + 80)}`);
  }
  cursor += 1;
  let raw = '';
  while (cursor < text.length) {
    const char = text[cursor];
    if (char === '\\') {
      raw += char + (text[cursor + 1] ?? '');
      cursor += 2;
      continue;
    }
    if (char === "'") {
      return { value: decodeDartString(raw), end: cursor + 1 };
    }
    raw += char;
    cursor += 1;
  }
  throw new Error('Unterminated Dart string.');
}

function readField(text, field) {
  const marker = `${field}:`;
  const index = text.indexOf(marker);
  if (index < 0) throw new Error(`Missing ${field}.`);
  return readQuoted(text, index + marker.length).value;
}

function parseSections(text) {
  const result = [];
  let cursor = 0;
  while (true) {
    const start = text.indexOf('LegalSection(', cursor);
    if (start < 0) break;
    const title = readQuoted(text, start + 'LegalSection('.length);
    const comma = text.indexOf(',', title.end);
    const body = readQuoted(text, comma + 1);
    result.push({ title: title.value, body: body.value });
    cursor = body.end;
  }
  return result;
}

function parseLanguage(key) {
  const start = source.indexOf(`static LegalDocument _${key}(`);
  if (start < 0) throw new Error(`Missing language function: ${key}`);
  const next = source.indexOf('static LegalDocument _', start + 1);
  const block = source.slice(start, next < 0 ? source.length : next);
  const privacyMarker = '? const LegalDocument(';
  const termsMarker = ': const LegalDocument(';
  const privacyStart = block.indexOf(privacyMarker);
  const termsStart = block.indexOf(termsMarker, privacyStart + privacyMarker.length);
  if (privacyStart < 0 || termsStart < 0) {
    throw new Error(`Cannot split privacy and terms for ${key}.`);
  }
  const privacyText = block.slice(privacyStart + privacyMarker.length, termsStart);
  const termsText = block.slice(termsStart + termsMarker.length);
  const parseDocument = (text) => ({
    title: readField(text, 'title'),
    versionLine: readField(text, 'versionLine'),
    introduction: readField(text, 'introduction'),
    sections: parseSections(text),
  });
  return { privacy: parseDocument(privacyText), terms: parseDocument(termsText) };
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderText(value) {
  return escapeHtml(value)
    .replaceAll('zengqb2315509134@gmail.com', '<a href="mailto:zengqb2315509134@gmail.com">zengqb2315509134@gmail.com</a>')
    .replaceAll('\n', '<br>');
}

function extractVersion(versionLine) {
  const match = versionLine.match(/(?:版本|Version|version|バージョン|버전)\s*([0-9.]+)/i);
  if (!match) throw new Error(`Cannot determine version from: ${versionLine}`);
  return match[1];
}

function languageSwitcher() {
  return `<nav class="language-switcher" aria-label="Language">${languages
    .map((language) => `<a href="#${language.id}" lang="${language.lang}">${language.label}</a>`)
    .join('')}</nav>`;
}

function pageHeader(current) {
  return `<header class="site-header"><div class="header-inner"><a class="brand" href="index.html">LinkMemo Legal</a><nav class="site-nav" aria-label="Primary navigation"><a href="index.html">Overview</a><a href="privacy.html"${current === 'privacy' ? ' aria-current="page"' : ''}>Privacy</a><a href="terms.html"${current === 'terms' ? ' aria-current="page"' : ''}>Terms</a><a href="delete-account.html"${current === 'deletion' ? ' aria-current="page"' : ''}>Delete account</a></nav></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><span>© 2026 LinkMemo</span><div class="footer-links"><a href="mailto:zengqb2315509134@gmail.com">Contact</a><a href="index.html">Overview</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="delete-account.html">Delete account</a></div></footer>`;
}

function renderDocumentPage(kind, documents) {
  const isPrivacy = kind === 'privacy';
  const pageTitle = isPrivacy ? 'LinkMemo Privacy Policy' : 'LinkMemo Terms of Use';
  const description = isPrivacy
    ? 'LinkMemo Privacy Policy and account deletion instructions.'
    : 'LinkMemo Terms of Use for local features, purchases, subscriptions, and AI enhancement.';
  const articles = languages.map((language) => {
    const document = documents[language.key][kind];
    const version = extractVersion(document.versionLine);
    const sections = document.sections.map((section, index) => {
      const deletion = isPrivacy && index === 8;
      const id = deletion ? ` id="account-deletion-${language.id}"` : '';
      const deletionAction = deletion
        ? `<p class="document-action"><a href="mailto:zengqb2315509134@gmail.com?subject=${encodeURIComponent(language.deletionSubject)}">${language.deletionLink}</a></p>`
        : '';
      return `<section${id} class="legal-section"><h2>${escapeHtml(section.title)}</h2><p>${renderText(section.body)}</p>${deletionAction}</section>`;
    }).join('\n          ');
    return `<article id="${language.id}" class="language-panel" lang="${language.lang}">
          <header class="document-header"><h1>${escapeHtml(document.title)}</h1><p class="document-summary">${escapeHtml(document.introduction)}</p><dl class="document-meta"><div><dt>${language.versionLabel}</dt><dd>${version}</dd></div><div><dt>${language.effectiveLabel}</dt><dd><time datetime="2026-08-17">${language.effectiveDisplay}</time></dd></div><div><dt>${language.developerLabel}</dt><dd>${language.developerDisplay}</dd></div></dl></header>
          ${sections}
        </article>`;
  }).join('\n\n        ');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${description}">
    <title>${pageTitle}</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a class="skip-link" href="#content">Skip to content</a>
    ${pageHeader(kind)}
    <main id="content" class="page-shell">
      ${languageSwitcher()}
      <div class="language-stack">
        ${articles}
      </div>
    </main>
    ${footer()}
  </body>
</html>
`;
}

function renderIndex(documents) {
  const panels = languages.map((language) => {
    const privacy = documents[language.key].privacy;
    const terms = documents[language.key].terms;
    return `<section id="${language.id}" class="language-panel" lang="${language.lang}">
          <div class="overview-grid">
            <a class="overview-link" href="privacy.html#${language.id}"><strong>${language.privacyNav}</strong><span>${language.privacyOverview}</span><small>v${extractVersion(privacy.versionLine)}</small></a>
            <a class="overview-link" href="terms.html#${language.id}"><strong>${language.termsNav}</strong><span>${language.termsOverview}</span><small>v${extractVersion(terms.versionLine)}</small></a>
            <a class="overview-link" href="delete-account.html#${language.id}"><strong>${language.deletionNav}</strong><span>${language.deletionOverview}</span><small>${language.deletionLink}</small></a>
          </div>
        </section>`;
  }).join('\n\n        ');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Official privacy policy, account deletion instructions, and terms for LinkMemo.">
    <title>LinkMemo Legal</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a class="skip-link" href="#content">Skip to content</a>
    <header class="site-header"><div class="header-inner"><a class="brand" href="index.html">LinkMemo Legal</a><nav class="site-nav" aria-label="Primary navigation"><a href="index.html" aria-current="page">Overview</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="delete-account.html">Delete account</a></nav></div></header>
    <main id="content" class="page-shell">
      <div class="page-intro"><h1>Clear terms for a local-first app.</h1><p>LinkMemo keeps its legal documents public, readable, and available without an account or JavaScript.</p></div>
      ${languageSwitcher()}
      <div class="language-stack">
        ${panels}
      </div>
    </main>
    ${footer()}
  </body>
</html>
`;
}

function renderDeletionPage(documents) {
  const articles = languages.map((language) => {
    const privacy = documents[language.key].privacy;
    const section = privacy.sections[8];
    return `<article id="${language.id}" class="language-panel" lang="${language.lang}">
          <header class="document-header"><h1>${escapeHtml(section.title)}</h1><p class="document-summary">${escapeHtml(language.deletionOverview)}</p><dl class="document-meta"><div><dt>${language.versionLabel}</dt><dd>${extractVersion(privacy.versionLine)}</dd></div><div><dt>${language.effectiveLabel}</dt><dd><time datetime="2026-08-17">${language.effectiveDisplay}</time></dd></div><div><dt>${language.developerLabel}</dt><dd>${language.developerDisplay}</dd></div></dl></header>
          <section class="legal-section"><h2>${escapeHtml(language.deletionNav)}</h2><p><strong>${escapeHtml(language.inAppPath)}</strong></p><p>${renderText(section.body)}</p><p class="document-action"><a href="mailto:zengqb2315509134@gmail.com?subject=${encodeURIComponent(language.deletionSubject)}">${language.deletionLink}</a></p><p><a href="privacy.html#${language.id}">${language.fullPolicyLink}</a></p></section>
        </article>`;
  }).join('\n\n        ');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="How to request deletion of a LinkMemo account and what data is deleted or retained.">
    <title>Delete a LinkMemo Account</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a class="skip-link" href="#content">Skip to content</a>
    ${pageHeader('deletion')}
    <main id="content" class="page-shell">
      ${languageSwitcher()}
      <div class="language-stack">
        ${articles}
      </div>
    </main>
    ${footer()}
  </body>
</html>
`;
}

const documents = Object.fromEntries(
  languages.map((language) => [language.key, parseLanguage(language.key)]),
);

for (const language of languages) {
  const { privacy, terms } = documents[language.key];
  if (privacy.sections.length !== 12 || terms.sections.length !== 14) {
    throw new Error(
      `${language.key}: expected 12 privacy and 14 terms sections, got ${privacy.sections.length} and ${terms.sections.length}.`,
    );
  }
}

fs.writeFileSync(path.join(repoDir, 'privacy.html'), renderDocumentPage('privacy', documents));
fs.writeFileSync(path.join(repoDir, 'terms.html'), renderDocumentPage('terms', documents));
fs.writeFileSync(path.join(repoDir, 'index.html'), renderIndex(documents));
fs.writeFileSync(path.join(repoDir, 'delete-account.html'), renderDeletionPage(documents));
console.log('Synced privacy.html, terms.html, delete-account.html, and index.html from LinkMemo legal_documents.dart.');

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import markdocGrammar from "./grammars/markdoc.tmLanguage.json";
import mermaid from "astro-mermaid";
import netlify from "@astrojs/netlify";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, {
  openAPISidebarGroups,
  createOpenAPISidebarGroup,
} from "starlight-openapi";

const demoPetstoreGroup = createOpenAPISidebarGroup();
const demoTrainGroup = createOpenAPISidebarGroup();

export const locales = {
  root: { label: "English", lang: "en" },
  de: { label: "Deutsch", lang: "de" },
  es: { label: "Español", lang: "es" },
  ja: { label: "日本語", lang: "ja" },
  fr: { label: "Français", lang: "fr" },
  it: { label: "Italiano", lang: "it" },
  id: { label: "Bahasa Indonesia", lang: "id" },
  "zh-cn": { label: "简体中文", lang: "zh-CN" },
  "pt-br": { label: "Português do Brasil", lang: "pt-BR" },
  "pt-pt": { label: "Português", lang: "pt-PT" },
  ko: { label: "한국어", lang: "ko" },
  tr: { label: "Türkçe", lang: "tr" },
  ru: { label: "Русский", lang: "ru" },
  hi: { label: "हिंदी", lang: "hi" },
  da: { label: "Dansk", lang: "da" },
  uk: { label: "Українська", lang: "uk" },
  "pig-latin": { label: "Pig Latin", lang: "pig-latin" },
};

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE =
  process.env.CONTEXT !== "production" && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || "https://starlight-eval.netlify.app/";
const ogUrl = new URL("og.jpg?v=1", site).href;
const ogImageAlt = "Make your docs shine with Starlight";

export default defineConfig({
  site,
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      langs: [markdocGrammar],
    },
  },
  integrations: [
    mermaid({
      theme: "default",
    }),
    starlight({
      title: "Starlight",
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/dfinster/starlight-eval/edit/main/",
      },
      //   social: [
      //     {
      //       icon: "github",
      //       label: "GitHub",
      //       href: "https://github.com/withastro/starlight",
      //     },
      //     { icon: "discord", label: "Discord", href: "https://astro.build/chat" },
      //   ],
      head: [
        // {
        //   tag: "script",
        //   attrs: {
        //     src: "https://cdn.usefathom.com/script.js",
        //     "data-site": "EZBHTSIG",
        //     defer: true,
        //   },
        // },
        {
          tag: "meta",
          attrs: { property: "og:image", content: ogUrl },
        },
        {
          tag: "meta",
          attrs: { property: "og:image:alt", content: ogImageAlt },
        },
      ],
      customCss: ["./src/assets/landing.css"],
      locales,
      sidebar: [
        {
          label: "Demo Pages",
          translations: {
            "pig-latin": "Emo-day Ages-pay",
          },
          items: [
            "demos/mermaid",
            "demos/pig_latin_implementation",
            {
              label: "Untranslated Demo",
              autogenerate: { directory: "demos/untranslated" },
            },
          ],
        },
        demoPetstoreGroup,
        demoTrainGroup,
        {
          label: "Start Here",
          translations: {
            de: "Beginne hier",
            es: "Comienza aqui",
            ja: "ここからはじめる",
            fr: "Commencez ici",
            it: "Inizia qui",
            id: "Mulai dari sini",
            "zh-CN": "从这里开始",
            "pt-BR": "Comece Aqui",
            "pt-PT": "Comece Aqui",
            ko: "시작 안내",
            tr: "Buradan Başlayın",
            ru: "Первые шаги",
            hi: "यहाँ से शुरू करे",
            uk: "Почніть звідси",
          },
          items: [
            "getting-started",
            "manual-setup",
            {
              label: "Environmental Impact",
              slug: "environmental-impact",
              translations: {
                de: "Umweltbelastung",
                es: "Documentación ecológica",
                ja: "環境への負荷",
                fr: "Impact environnemental",
                it: "Impatto ambientale",
                id: "Dampak terhadap lingkungan",
                "zh-CN": "环境影响",
                "pt-BR": "Impacto Ambiental",
                "pt-PT": "Impacto Ambiental",
                ko: "환경적 영향",
                tr: "Çevre Etkisi",
                ru: "Влияние на окружающую среду",
                hi: "पर्यावरणीय प्रभाव",
                uk: "Вплив на довкілля",
              },
            },
          ],
        },
        {
          label: "Guides",
          collapsed: true,
          translations: {
            de: "Anleitungen",
            es: "Guías",
            ja: "ガイド",
            fr: "Guides",
            it: "Guide",
            id: "Panduan",
            "zh-CN": "指南",
            "pt-BR": "Guias",
            "pt-PT": "Guias",
            ko: "가이드",
            tr: "Rehber",
            ru: "Руководства",
            hi: "गाइड",
            uk: "Ґайди",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Components",
          collapsed: true,
          translations: {
            de: "Komponenten",
            fr: "Composants",
            ru: "Компоненты",
            ko: "컴포넌트",
            ja: "コンポーネント",
            "zh-CN": "组件",
            uk: "Компоненти",
          },
          autogenerate: { directory: "components" },
        },
        {
          label: "Reference",
          collapsed: true,
          translations: {
            de: "Referenzen",
            es: "Referencias",
            ja: "リファレンス",
            fr: "Référence",
            it: "Riferimenti",
            id: "Referensi",
            "zh-CN": "参考",
            "pt-BR": "Referência",
            ko: "참조",
            tr: "Referanslar",
            ru: "Справочник",
            hi: "संदर्भ",
            uk: "Довідник",
          },
          autogenerate: { directory: "reference" },
        },
        {
          label: "Resources",
          collapsed: true,
          translations: {
            de: "Ressourcen",
            "zh-CN": "资源",
            fr: "Ressources",
            "pt-BR": "Recursos",
            "pt-PT": "Recursos",
            ja: "リソース",
            ru: "Ресурсы",
            ko: "리소스",
            uk: "Ресурси",
          },
          autogenerate: { directory: "resources" },
        },
      ],
      expressiveCode: true,
      plugins: process.env.CHECK_LINKS
        ? [
            starlightLinksValidator({
              errorOnFallbackPages: false,
              errorOnInconsistentLocale: true,
            }),
          ]
        : [
            starlightOpenAPI([
              {
                base: "api/petstore",
                schema: "src/schemas/petstore.yaml",
                sidebar: {
                  label: "Petstore API",
                  collapsed: true,
                  group: demoPetstoreGroup,
                  operations: {
                    badges: true,
                  },
                },
              },
              {
                base: "api/train",
                schema: "src/schemas/train.yaml",
                sidebar: {
                  label: "Train API",
                  collapsed: true,
                  group: demoTrainGroup,
                  operations: {
                    badges: true,
                  },
                },
              },
            ]),
            starlightHeadingBadges(),
			starlightLlmsTxt(),
          ],
    }),
  ],
  adapter: netlify(),
});

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">{t("title")}</h1>

        <p className="mt-3 text-2xl">{t("description")}</p>

        <div className="mt-6">
          <button
            className="mx-2 px-4 py-2 bg-gray-700 text-white rounded  hover:bg-gray-900"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>

          <button
            className="mx-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 border-2"
            onClick={() => changeLanguage("hi")}
          >
            Hindi
          </button>
          <button
            className="mx-2 px-4 py-2 bg-gray-700 text-white rounded  hover:bg-gray-900"
            onClick={() => changeLanguage("gj")}
          >
            Gujarati
          </button>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

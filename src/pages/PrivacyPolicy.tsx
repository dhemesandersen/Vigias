import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";

export function PrivacyPolicy({ lang }: { lang: Language }) {
  return (
    <>
      <SEO
        title="Política de Privacidade - Vigias"
        description="Política de privacidade e proteção de dados das Vigias."
        lang={lang}
      />
      <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen text-brand-ink">
        <div className="max-w-3xl mx-auto font-sans">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 letter-spacing-tight">
            Política de Privacidade
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-brand-ink/80 font-light">
            <p>
              A proteção da sua privacidade é importante para as Vigias. Esta
              Política de Privacidade explica como recolhemos, usamos e
              protegemos os seus dados pessoais.
            </p>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                1. Recolha de Dados
              </h2>
              <p>
                Recolhemos informações quando faz uma reserva, nos contacta ou
                utiliza o nosso website. Isso pode incluir o seu nome, endereço
                de email, número de telefone e detalhes de pagamento necessários
                para confirmar a sua estadia.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                2. Uso da Informação
              </h2>
              <p>Usamos os seus dados para:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Processar as suas reservas e pagamentos;</li>
                <li>Comunicar consigo sobre a sua estadia;</li>
                <li>Melhorar os nossos serviços e website;</li>
                <li>Garantir a segurança e cumprir obrigações legais.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                3. Cookies e Tecnologias de Rastreamento
              </h2>
              <p>
                O nosso website utiliza cookies essenciais para funcionar
                corretamente e cookies analíticos para nos ajudar a entender
                como os visitantes navegam. Pode gerir as suas preferências no
                aviso de cookies.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                4. Partilha de Dados
              </h2>
              <p>
                Não vendemos os seus dados pessoais. Apenas partilhamos
                informações com parceiros estritamente necessários para a
                operação do negócio (por exemplo, processadores de pagamento
                seguros ou software de gestão de reservas), sempre de acordo com
                as normas de proteção de dados (RGPD).
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                5. Os Seus Direitos
              </h2>
              <p>
                Tem o direito de aceder, retificar, apagar ou limitar o uso dos
                seus dados pessoais. Para exercer estes direitos, contacte-nos
                através do email info@vigias.pt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

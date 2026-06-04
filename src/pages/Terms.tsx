import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";

export function Terms({ lang }: { lang: Language }) {
  return (
    <>
      <SEO
        title="Termos e Condições - Vigias"
        description="Termos e condições das Vigias."
        lang={lang}
      />
      <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen text-brand-ink">
        <div className="max-w-3xl mx-auto font-sans">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 letter-spacing-tight">
            Termos e Condições
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-brand-ink/80 font-light">
            <p>
              Bem-vindo às Vigias. Ao aceder ao nosso website e efetuar
              reservas, concorda com os seguintes termos e condições.
            </p>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                1. Reservas e Pagamentos
              </h2>
              <p>
                Para confirmar a sua reserva, poderá ser solicitado o pagamento
                de um sinal. O restante valor deverá ser pago conforme indicado
                no processo de reserva. Os pagamentos são processados de forma
                segura e sujeitos às condições de cancelamento em vigor na
                altura da reserva.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                2. Check-in e Check-out
              </h2>
              <p>
                Os horários normais de check-in são a partir das 16:00 e o
                check-out até às 11:00, salvo indicação em contrário comunicada
                previamente. Acomodações flexíveis podem ser combinadas mediante
                disponibilidade.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                3. Regras das Casas
              </h2>
              <p>
                As Vigias situam-se num espaço focado na tranquilidade, natureza
                (Parque Natural Serra de S. Mamede) e respeito. Esperamos que os
                hóspedes respeitem o ambiente e o silêncio. Danos ou
                comportamentos impróprios fundamentam o términos da estadia sem
                reembolso e eventuais custos de reparação.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                4. Responsabilidade
              </h2>
              <p>
                As Vigias não se responsabilizam por objetos de valor deixados
                nas propriedades nem por acidentes decorrentes de um uso
                negligente das instalações, nomeadamente nas piscinas / tanques.
              </p>
            </section>

            <section>
              <h2 className="font-medium text-brand-ink text-base mb-4 uppercase letter-spacing-wide text-[11px] tracking-widest mt-12">
                5. Alterações aos Termos
              </h2>
              <p>
                Reservamo-nos no direito de atualizar estes Termos e Condições a
                qualquer momento. Quaisquer alterações entrarão em vigor assim
                que publicadas no nosso website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

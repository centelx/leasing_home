export default function VehisCalculator() {
  return (
    <section id="kalkulator" className="w-full bg-gray-50 pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Kalkulator Leasingowy
        </h2>
        <iframe
          id="v-embed"
          src="https://embed.vehis.pl/?embed_client_token=884a3a68-b713-405a-8561-1ad21b721703"
          style={{ width: '100%', minHeight: '700px', border: 'none' }}
          title="Kalkulator VEHIS"
        />
      </div>
    </section>
  );
}

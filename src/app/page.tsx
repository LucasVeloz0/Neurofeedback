import Head from 'next/head';
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Academia do Cérebro | Neurofeedback para TDAH e Ansiedade</title>
        <meta name="description" content="Soluções em Neurofeedback para TDAH e Ansiedade, com foco no equilíbrio emocional e desenvolvimento cognitivo." />
      </Head>

      {/* Header */}
      <div>  <header className="bg-blue-900 text-white p-5">
          <div className="container mx-auto flex justify-between items-center">
           {/* Logo */}
           <div className="flex items-center space-x-4">              
              <h1 className="text-2xl md:text-4xl font-bold">Academia do Cérebro</h1>
           </div>
           <a href="#contato" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300">Pedir Orçamento</a>
         </div>
       </header> </div>

      {/* Banner fixo com efeito parallax 
      <section
        className="relative h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/banner.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'auto',
        }}      >
      </section> */}

      {/* Home Section */}
      <section className="bg-gray-100 py-20">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-2xl md:text-5xl font-bold text-blue-900 mb-4">Treine Seu Cérebro e Melhore Sua Vida com Neurofeedback</h2>
    <p className="text-lg md:text-xl text-gray-600 mb-6">
      Benefícios do Neurofeedback:
    </p>
    <ul className="grid grid-cols-1 md:grid-cols-2 text-left mb-6 gap-x-8 gap-y-4">
      <li className="text-left">● Redução da ansiedade e do estresse</li>
      <li className="text-left">● Melhora da atenção e foco (especialmente em casos de TDAH)</li>
      <li className="text-left">● Controle dos sintomas da depressão</li>
      <li className="text-left">● Aumento da qualidade do sono e redução da insônia</li>
      <li className="text-left">● Alívio de dores crônicas como enxaqueca e fibromialgia</li>
    </ul>
    <a href="#contato" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
      Saiba Mais
    </a>
  </div>
</section>

{/* Banner responsivo centralizado */}
      <section className="relative flex justify-center items-center bg-white py-10">
        <div className="w-full max-w-7xl mx-auto">
          <Image
            src="/assets/banner.jpg"
            alt="Banner Neurofeedback"
            layout="responsive"
            width={1200}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>


      {/* O que é Neurofeedback Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">O que é Neurofeedback?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
          O neurofeedback é uma modalidade terapêutica que utiliza como estratégia a auto-regulação de padrões de atividade cerebral. A atividade cerebral é observada através de parâmetros do eletroencefalograma (EEG), obtido com a disposição de eletrodos em certos pontos da cabeça do paciente. Esses parâmetros são então apresentados ao paciente através de estímulos visuais, auditivos ou tácteis de forma que o paciente voluntariamente altere esses parâmetros em direção a um padrão desejado.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
          Essa terapia se baseia no princípio de neuroplasticidade cerebral e na capacidade de exames como EEG de registrarem a atividade do cérebro. Boa parte dos protocolos de neurofeedback objetivam suprimir padrões indesejáveis observados no EEG ou aumentar a expressão de padrões desejáveis, o que pode ser alcançado através de treinamento. A forma como os eletrodos são dispostos e os parâmetros de EEG avaliados variam, dependendo do objetivo da terapia.
          </p>
          <a href="#contato" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
      Saiba Mais
    </a>
          
          <h2 className='text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 py-10' >Agende uma Sessão e Comece a Transformar sua Vida</h2>
          <p className='text-lg md:text-xl text-gray-600 mb-6' >Nosso tratamento personalizado começa com um mapeamento cerebral completo para criar um protocolo exclusivo para suas necessidades. Entre em contato agora para agendar sua primeira sessão!</p>
          
        </div>
      </section>

        {/* Sobre Mim Section */}
<section className="relative bg-white">
  {/* Parte superior com fundo branco (20%) */}
  <div className="h-20 bg-white"></div>
  
  {/* Parte inferior com fundo verde (80%) */}
  <div className="bg-green-600 h-100 relative">
    <div className="container mx-auto text-center px-4">
      
      {/* Imagem Centralizada */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/assets/happy.png" 
          alt="Sua Foto"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Conteúdo da Seção */}
      <div className="pt-40">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre Mim</h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Sou especialista em Neurofeedback e Psicanálise, com vasta experiência em ajudar pessoas a melhorar suas vidas. Minha abordagem personalizada busca tratar questões de saúde mental, ajudando meus pacientes a alcançar bem-estar e equilíbrio emocional.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Serviços auxiliares */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">Terapias auxiliares</h2>
    <p className='text-lg md:text-xl text-gray-600 mb-6'>
      Para melhorar seus resultados além do Neurofeedback, oferecemos dois tratamentos complementares que podem potencializar seus resultados:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Serviço 1: Laserterapia Sistêmica – ILIB */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Imagem Laserterapia */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src="./assets/happy.png" alt="Laserterapia ILIB" className="rounded-md w-full h-auto object-cover" />
        </div>
        {/* Descrição Laserterapia */}
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-bold text-blue-900">Laserterapia Sistêmica – ILIB</h3>
          <p className="text-gray-600 mt-4">
            A laserterapia sistêmica, também conhecida como ILIB (Intravascular Laser Irradiation of Blood), é uma técnica terapêutica inovadora que utiliza a luz laser para irradiar o sangue, promovendo o bem-estar geral do organismo.
          </p>
          <p className="text-gray-600 mt-4">Durante a terapia, um laser de baixa intensidade é aplicado diretamente sobre um vaso sanguíneo. Isso desencadeia uma série de reações bioquímicas que promovem efeitos benéficos em todo o organismo.</p>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>● Modulação do sistema imunológico;</li>
            <li>● Efeito analgésico e anti-inflamatório;</li>
            <li>● Aumento da oxigenação dos tecidos e da produção de ATP;</li>
            <li>● Redução do risco de trombose;</li>
            <li>● Efeito antioxidante;</li>
          </ul>
          {/* Chama de ação */}
          <a href="https://wa.me/15999999999?text=Olá! Gostaria de saber mais sobre a Laserterapia Sistêmica – ILIB." className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
            Saiba Mais sobre Laserterapia
          </a>
        </div>
      </div>

      {/* Serviço 2: Faixa de Fotobiomodulação */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Imagem Fotobiomodulação */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src="/assets/happy.png" alt="Faixa de Fotobiomodulação" className="rounded-md w-full h-auto object-cover" />
        </div>
        {/* Descrição Fotobiomodulação */}
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-2xl font-bold text-blue-900">Faixa de Fotobiomodulação</h3>
          <p className="text-gray-600 mt-4">
            A faixa de fotobiomodulação intracraniana é um dispositivo inovador que utiliza luz de baixa intensidade para estimular o cérebro de forma não invasiva, promovendo melhorias em diversas funções cerebrais.
          </p>
          <p className="text-gray-600 mt-4">A luz interage com as células cerebrais, estimulando reações bioquímicas benéficas, como aumento de ATP, redução da inflamação e estimulação da neurogênese.</p>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>● Melhora dos sintomas de depressão e ansiedade;</li>
            <li>● Alívio da dor crônica, como enxaqueca;</li>
            <li>● Melhora do desempenho cognitivo;</li>
            <li>● Tratamento de lesões cerebrais;</li>
            <li>● Prevenção do declínio cognitivo;</li>
          </ul>
          {/* Chama de ação */}
          <a href="https://wa.me/15999999999?text=Olá! Gostaria de saber mais sobre a Faixa de Fotobiomodulação." className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
            Saiba Mais sobre Fotobiomodulação
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Serviços Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Neurofeedback para TDAH</h3>
              <p className="text-gray-600 mt-4">
                O tratamento de neurofeedback para TDAH ajuda a regular os padrões de atividade cerebral, melhorando o foco e a atenção. Estudos mostram que o uso contínuo dessa técnica pode reduzir a necessidade de medicamentos, aumentando a qualidade de vida de pacientes com TDAH.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Neurofeedback para Ansiedade</h3>
              <p className="text-gray-600 mt-4">
                O neurofeedback atua diretamente na regulação das ondas cerebrais associadas ao estresse e ansiedade. Ele ajuda o cérebro a encontrar um estado de calma e relaxamento, proporcionando alívio do estresse e reduzindo os sintomas da ansiedade de forma natural.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Treinamento Cognitivo</h3>
              <p className="text-gray-600 mt-4">
                Nosso treinamento cognitivo é um programa estruturado em 5 etapas que visa melhorar a memória, atenção e capacidade de resolver problemas. A cada etapa, o paciente é desafiado com atividades que fortalecem diferentes habilidades cognitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Meus Pacientes Dizem */}
<section className="py-20 bg-white">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">O Que Meus Pacientes Dizem:</h2>
    <p className="text-lg md:text-xl text-center text-gray-600 mb-10">
      Veja as avaliações de pacientes satisfeitos com nossos serviços.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Avaliação 1 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <img src="/assets/happy.png" alt="Avaliação do Google 1" className="w-full h-auto object-cover rounded-md mb-4" />
      </div>

      {/* Avaliação 2 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <img src="/assets/happy.png" alt="Avaliação do Google 2" className="w-full h-auto object-cover rounded-md mb-4" />
      </div>

      {/* Avaliação 3 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <img src="/assets/happy.png" alt="Avaliação do Google 3" className="w-full h-auto object-cover rounded-md mb-4" />
      </div>
    </div>
  </div>
</section>

      {/* Treinamento Cognitivo - 5 Etapas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">Etapas do Treinamento Cognitivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Etapa 1</h3>
              <p className="text-gray-600 mt-4">Avaliação cognitiva inicial para identificar áreas de melhoria.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Etapa 2</h3>
              <p className="text-gray-600 mt-4">Treinamento focado em melhorar a memória de curto prazo.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Etapa 3</h3>
              <p className="text-gray-600 mt-4">Exercícios para aprimorar a concentração e foco.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Etapa 4</h3>
              <p className="text-gray-600 mt-4">Desenvolvimento de habilidades de resolução de problemas.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-blue-900">Etapa 5</h3>
              <p className="text-gray-600 mt-4">Reavaliação e criação de um plano personalizado de manutenção.</p>
            </div>
          </div>
        </div>
      </section>  

      {/* Mapa - Localização */}
<section className="py-20 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Localização</h2>
    <p className="text-lg md:text-xl text-gray-600 mb-6">
      Veja a localização da nossa clínica no mapa abaixo:
    </p>
    
    <div className="flex justify-center">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3658.3630385973415!2d-47.4431076!3d-23.5194416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b0537bf16fb%3A0x8bbb30cf612851b!2sAcademia%20do%20c%C3%A9rebro-Grasiele%20Vaz%20Psicanalista%20%2F%20Neurofeedback!5e0!3m2!1spt-BR!2sbr!4v1729208570692!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="mb-6">Envie uma mensagem para nossa equipe e saiba mais sobre nossos tratamentos.</p>
          <a href="mailto:contato@academiadocerebro.com" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300">Pedir Orçamento</a>
        </div>
      </section>

      {/* Botão flutuante do WhatsApp */}
<a
  href="https://wa.me/5511999999999" // Coloque o número de telefone com o código do país e DDD
  className="fixed bottom-4 right-4  "
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Entre em contato pelo WhatsApp"
>
  {/* Imagem do ícone do WhatsApp */}
  <Image
          src="/assets/whatsapp.svg" // Certifique-se de que o ícone SVG está em public/assets
          alt="WhatsApp"
          width={48} // Largura do ícone
          height={48} // Altura do ícone
        />
</a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Academia do Cérebro - Todos os direitos reservados</p>
      </footer>
    </div>
  );

  
};

export default Home;
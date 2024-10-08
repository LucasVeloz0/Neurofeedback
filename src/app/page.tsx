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

      {/* Home Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Neurofeedback para TDAH e Ansiedade</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A Academia do Cérebro utiliza técnicas de neurofeedback para ajudar no tratamento de TDAH e ansiedade, promovendo um equilíbrio emocional e cognitivo.
          </p>
          <a href="#contato" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">Saiba Mais</a>
        </div>
      </section>

      {/* Seção de Apresentação com imagem de fundo */}
<section className="bg-cover bg-center py-32 flex items-end" style={{ backgroundImage: "url('./assets/background.jpeg')", backgroundRepeat: "no-repeat" , minHeight: "100vh",  backgroundSize: "contain"}}>
  <div className="container mx-auto text-center text-white mb-16">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">Transforme sua Vida com Neurofeedback</h2>
    <p className="text-lg md:text-xl mb-6">
      A Academia do Cérebro oferece tratamentos personalizados para TDAH e Ansiedade, ajudando você a alcançar o equilíbrio mental e emocional.
    </p>
    <a href="#sobre-mim" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">Saiba mais sobre mim</a>
  </div>
</section>

      {/* O que é Neurofeedback Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">O que é Neurofeedback?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            O neurofeedback é uma técnica terapêutica baseada na neuromodulação, onde sensores colocados no couro cabeludo monitoram as ondas cerebrais. Essas informações são processadas e, através de estímulos visuais ou auditivos, o cérebro é incentivado a se autorregular, promovendo melhorias em várias funções cognitivas e emocionais.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Essa técnica é utilizada para tratar uma série de condições, como o Transtorno de Déficit de Atenção e Hiperatividade (TDAH), ansiedade, estresse, insônia, entre outros, ajudando a restaurar o equilíbrio cerebral e a qualidade de vida.
          </p>
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

      {/* Sobre Mim Section */}
<section className="py-20 bg-gray-100" id="sobre-mim">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Sobre Mim</h2>
    <p className="text-lg md:text-xl text-gray-600 mb-4">
      Sou uma especialista em neurofeedback com mais de 10 anos de experiência em ajudar pessoas a alcançarem seu potencial máximo através de técnicas de modulação cerebral.
    </p>
    <p className="text-lg md:text-xl text-gray-600 mb-4">
      Minha missão é proporcionar um ambiente acolhedor e de suporte, onde cada cliente se sinta à vontade para explorar suas capacidades cognitivas e emocionais.
    </p>
    <p className="text-lg md:text-xl text-gray-600">
      Acredito que, através do neurofeedback, é possível transformar vidas, promovendo o bem-estar e a saúde mental de forma duradoura.
    </p>
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
    src="/assets/whatsapp.svg" // Caminho para o seu ícone SVG na pasta public/assets
    alt="WhatsApp"
    className="h-12 w-12"
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
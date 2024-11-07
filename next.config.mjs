/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
  
    // Desabilitar a otimização de imagens para exportar como estático
    images: {
      unoptimized: true,
    },
    
    // trailingSlash: true, // (Opcional) Adicionar barra no final das URLs para exportação
    // distDir: 'dist', // (Opcional) Alterar o diretório de saída
  }
  
  export default nextConfig;
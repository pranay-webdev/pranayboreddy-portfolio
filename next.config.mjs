/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'static/pdf/', // Custom output path
              publicPath: '/_next/static/pdf/',
            },
          },
        ],
      });
  
      return config;
    },
  };
  

export default nextConfig;

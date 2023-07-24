/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {

  webpack: (config, { isServer }) => {
    // Add alias for the '@' symbol to the root of your project
    config.resolve.alias['@'] = path.join(__dirname);

    // Important: Return the modified config
    return config;
  },
  reactStrictMode: false,
  compiler:{
    styledComponents:{
      displayName:true,//enabled bydefault in developement, disabled in production to reduce file size.
      //setting this will override the default for all environments.
      ssr:true,//enabled by default
      fileName:true,//enabled by dafault
      topLevelImportPaths:[],//empty by dafault
      meaninglessFileNames:['index'],//deafult to index
      cssProp:true,//enabled by default
      namespace:'',//empty by default 
      minify:false,//not supported
      transpileTemplateLiterals:false,//not supported
      pure:false,//not supported

    }
  }
}

module.exports = nextConfig
export default {
    css: [
      // Tambahkan bootstrap ke dalam array CSS
      'bootstrap/dist/css/bootstrap.css'
    ],
    plugins: [],
    buildModules: [],
    modules: [],
    build: {
      postcss: null,
      extend(config, ctx) {}
    },
    // Ini untuk memasukkan file JS bootstrap
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        }
      ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
          }
        ]
        }        
      }
  
  
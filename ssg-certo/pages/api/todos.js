// getStaticProps: Executado no servidor Node.js
// isso será executado quando se faz npm run build
export async function getStaticProps() {
    // const resposta = await fetch('https://jsonplaceholder.typicode.com/todos')
     const resposta = await fetch('http://localhost:3001/posts')
     const todos = await resposta.json()
     return {
       props: {
         todos,
       },
       revalidate: 10, // segundos
     }
   }
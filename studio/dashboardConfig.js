export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618c9439640969949ebce87a',
                  title: 'Sanity Studio',
                  name: 'jf-2022-site-studio',
                  apiId: '75dbdfe6-7187-450f-aa73-d55320663a09'
                },
                {
                  buildHookId: '618c943997363cc1d1959963',
                  title: 'Portfolio Website',
                  name: 'jf-2022-site',
                  apiId: '3b1b8675-7439-459a-b766-5dab8a44358c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jessefischer/jf-2022-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jf-2022-site.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

require('dotenv').config();

module.exports = {
  title: 'Diginfra',
  url: 'https://www.diginfra.khulnasoft.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: true,
  favicon: 'img/favicon.png',
  organizationName: 'diginfra',
  projectName: 'docs',
  customFields: {
    diginfraDocsApiToken: process.env.DIGINFRA_DOCS_API_TOKEN,
    diginfraDashboardApiEndpoint: process.env.DIGINFRA_DASHBOARD_API_ENDPOINT,
    diginfraDashboardEndpoint: process.env.DIGINFRA_DASHBOARD_ENDPOINT,
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/integrations',
            to: '/integrations/cicd',
          },
          {
            from: ['/environment_variables', '/integrations/environment_variables'],
            to: '/features/environment_variables',
          },
          {
            from: '/diginfra_api',
            to: '/integrations/diginfra_api',
          },
          {
            from: '/terraform_cloud_enterprise',
            to: '/integrations/terraform_cloud_enterprise',
          },
          {
            from: '/terragrunt',
            to: '/features/terragrunt',
          },
          {
            from: '/config_file',
            to: '/features/config_file',
          },
          {
            from: '/report',
            to: '/features/cli_commands',
          },
          {
            from: '/supported_resources',
            to: '/supported_resources/overview',
          },
          {
            from: '/iac_tools/terraform_cloud_enterprise',
            to: '/integrations/terraform_cloud_enterprise',
          },
          {
            from: '/iac_tools/terragrunt',
            to: '/features/terragrunt',
          },
          {
            from: '/multi_project/config_file',
            to: '/features/config_file',
          },
          {
            from: '/features/config_file_template/',
            to: '/features/config_file',
          },
          {
            from: '/features/cost_policies',
            to: '/integrations/open_policy_agent',
          },
          {
            from: "/usage_based_resources/",
            to: "/features/usage_based_resources/",
          },
          {
            from: '/multi_project/report',
            to: '/features/cli_commands',
          },
          {
            from: '/terraform_modules',
            to: '/features/terraform_modules',
          },
          {
            from: '/guides/terraform_modules',
            to: '/features/terraform_modules',
          },
          {
            from: '/guides/v0.8_migration',
            to: '/',
          },
          {
            from: '/guides/v0.9_migration',
            to: '/',
          },
          {
            from: '/guides/v0.10_migration',
            to: '/',
          },
          {
            from: '/guides/actions_migration',
            to: '/integrations/cicd',
          },
          {
            from: '/guides/azure_devops_migration',
            to: '/integrations/cicd',
          },
          {
            from: '/guides/atlantis_migration',
            to: '/integrations/cicd',
          },
          {
            from: '/guides/gitlab_ci_migration',
            to: '/integrations/cicd',
          },
          {
            from: '/diginfra_cloud/overview',
            to: '/diginfra_cloud/get_started',
          },
          {
            from: '/integrations/jira',
            to: '/diginfra_cloud/jira_integration',
          },
          {
            from: '/integrations/generic_cicd',
            to: '/integrations/cicd/',
          },
          {
            from: '/integrations/vscode',
            to: '/features/vscode/',
          },
          {
            from: '/diginfra_cloud/authentication',
            to: '/diginfra_cloud/key_concepts',
          },
          {
            from: '/diginfra_cloud/sso/overview',
            to: '/diginfra_cloud/sso',
          },
          {
            from: '/diginfra_cloud/cost_policies',
            to: '/diginfra_cloud/finops_policies',
          },
          {
            from: '/cloud_pricing_api/self_hosted',
            to: '/',
          },
          {
            from: '/cloud_pricing_api/overview',
            to: '/supported_resources/cloud_pricing_api',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    image: 'docs/img/social-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'support_us',
      content:
        '<span class="announcement-message">If you like Diginfra, give it a <a target="_blank" rel="noopener noreferrer" href="https://github.com/diginfra/diginfra">star on GitHub</a>!<img src="/docs/img/icons/star-white.svg" class="star-right" alt="Star icon" /></span>',
      backgroundColor: '#2A2A5B',
      textColor: '#EBEBF2',
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['hcl'],
    },
    algolia: {
      appId: 'ERN68FLCI1',
      apiKey: 'e62759e664aae55a8bfef8e93ecf6111',
      indexName: 'diginfra',
      contextualSearch: false,
      searchParameters: {
        facetFilters: [],
      },
      externalUrlRegex: 'diginfra\\.io/blog',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/diginfra/docs/edit/master`,
        },
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-9GFV9Z9NNZ',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-NKN87ZL3',
        },
      },
    ],
  ],
};

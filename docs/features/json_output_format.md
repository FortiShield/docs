---
slug: json_output_format
title: JSON output format
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

See the [CLI commands page](/docs/features/cli_commands/#examples) for details on how to generate the Diginfra JSON output format:

```json
{
  "version": "0.2",
  "currency": "USD",
  // The metadata section is not finalized and is subject to change
  "metadata": {
    // did the config file specify project specific usage files
    "configFileHasUsageFile": false,
    // path to the config file
    "configFilePath": "",
    // can be "breakdown" or "diff" so it's clear how the JSON file was generated
    "diginfraCommand": "breakdown",
    // was as the api used to estimate usage costs
    "usageApiEnabled": true,
    // path to the file that was used to estimate usage costs
    "usageFilePath": "diginfra-usage.yaml",
    // name of the branch that was used to generate the estimate
    "vcsBranch": "change-instance-type",
    // long commit SHA of the branch that was used to generate the estimate
    "vcsCommitSha": "1af413ad15ad6cbdfca667361231231231231231",
    // git author name of the commit
    "vcsCommitAuthorName": "Ali Khajeh-Hosseini",
    // git email of author of commit
    "vcsCommitAuthorEmail": "ali@email.com",
    // timestamp of the commit, ISO 8601 UTC string
    "vcsCommitTimestamp": "2022-06-27T16:03:44Z",
    // the commit message
    "vcsCommitMessage": "enhance: use m5.large",
    // name of the VCS provider (github, gitlab, azure_repos, bitbucket)
    "vcsProvider": "github",
    // link to the repository
    "vcsRepositoryUrl": "https://github.com/diginfra/diginfra",
    // The following metadata are only populated if Diginfra was run as part of a pull request.
    // name of the base branch that the pull request is being merged into
    "vcsBaseBranch": "main",
    // link to the pull request
    "vcsPullRequestUrl": "https://github.com/diginfra/diginfra/pulls/1996",
    // the unique identifier of the pull request for the vcsProvider
    "vcsPullRequestId": "1996",
    // name of the person who opened the pull request, this is probably the same as commitAuthor most of the time but it's helpful to see this if they're different
    "vcsPullRequestAuthor": "alikhajeh1",
    // title of the pull request
    "vcsPullRequestTitle": "Change instance type",
    // labels added to the pull request
    "vcsPullRequestLabels": ["enhancement"],
    // a way to differentiate pipelines that are run within one pull request, this is the top-level pipeline ID, not individual jobs/runs within it
    "vcsPipelineRunId": "2846680866"
  },
  "projects": [
    {
      "name": "diginfra/diginfra/examples/terraform",
      // The metadata section is not finalized and is subject to change
      "metadata": {
        // path that was passed to Diginfra for this project
        "path": "examples/terraform",
        // type of project (terraform_dir, terraform_plan_json)
        "type": "terraform_dir",
        // path of this project relative to the root of the code repository
        "vcsSubPath": "examples/terraform/prod/us-east",
        // path of this project within a Terraform mono-repo
        "terraformModulePath": "prod/us-east",
        // Terraform workspace if specified for this project
        "terraformWorkspace": "prod",
        // HCL parsing warnings that might impact the cost estimate
        "warnings": [
          {
            "code": 1,
            "message": "Missing Terraform vars",
            "data": [
              "variable.instancetype"
            ],
            "isError": false
          }
        ],
        // errors contains critical errors that the project encountered that meant we were not able to produce a breakdown.
        // If errors are present, then the project.breakdown property will be a zero value.
        // It is recommended you filter out errored projects prior to ingestion or comparison.
        "errors": [
          {
            "code": 2,
            "message": "No valid Terraform files found at the given path, try a different directory.",
            // data contains additional metadata about the error if applicable.
            "data": [],
            "isError": true
          }
        ]
      },
      /* When Diginfra is used with a Terraform plan JSON, this contains any
      resources that are in the prior Terraform state.

      When Diginfra is used with a Terraform directory, this contains any
      resources that are found in the `--compare-to` part of
      `diginfra diff --compare-to /code` */
      "pastBreakdown": {
        "resources": [],
        "totalHourlyCost": "0",
        "totalMonthlyCost": "0",
        "totalMonthlyUsageCost": "0"
      },
      /* When Diginfra is used with a Terraform plan JSON, this contains
      the breakdown of resources that are in the planned Terraform state.

      When Diginfra is used with a Terraform directory, this contains the
      breakdown of resources that are found in `--path` part of
      `diginfra breakdown --path /code` */
      "breakdown": {
        "resources": [
          {
            "name": "aws_instance.web_app",
            "metadata": {
              "calls": [
                {
                  "blockName": "aws_instance.web_app",
                  "filename": "main.tf"
                }
              ],
              "filename": "main.tf"
            },
            "hourlyCost": "1.017315068493150679",
            "monthlyCost": "742.64",
            "costComponents": [
              {
                "name": "Instance usage (Linux/UNIX, on-demand, m5.4xlarge)",
                "unit": "hours",
                "hourlyQuantity": "1",
                "monthlyQuantity": "730",
                "price": "0.768",
                "hourlyCost": "0.768",
                "monthlyCost": "560.64"
              }
            ],
            "subresources": [
              {
                "name": "root_block_device",
                "metadata": {},
                "hourlyCost": "0.00684931506849315",
                "monthlyCost": "5",
                "costComponents": [
                  {
                    "name": "Storage (general purpose SSD, gp2)",
                    "unit": "GB",
                    "hourlyQuantity": "0.0684931506849315",
                    "monthlyQuantity": "50",
                    "price": "0.1",
                    "hourlyCost": "0.00684931506849315",
                    "monthlyCost": "5"
                  }
                ]
              },
              {
                "name": "ebs_block_device[0]",
                "metadata": {},
                "hourlyCost": "0.242465753424657529",
                "monthlyCost": "177",
                "costComponents": [
                  {
                    "name": "Storage (provisioned IOPS SSD, io1)",
                    "unit": "GB",
                    "hourlyQuantity": "1.3698630136986301",
                    "monthlyQuantity": "1000",
                    "price": "0.125",
                    "hourlyCost": "0.1712328767123287625",
                    "monthlyCost": "125"
                  },
                  {
                    "name": "Provisioned IOPS",
                    "unit": "IOPS",
                    "hourlyQuantity": "1.0958904109589041",
                    "monthlyQuantity": "800",
                    "price": "0.065",
                    "hourlyCost": "0.0712328767123287665",
                    "monthlyCost": "52"
                  }
                ]
              }
            ]
          },
          {
            "name": "aws_lambda_function.hello_world",
            "metadata": {
              "calls": [
                {
                  "blockName": "aws_lambda_function.hello_world",
                  "filename": "main.tf"
                }
              ],
              "filename": "main.tf"
            },
            "hourlyCost": null,
            "monthlyCost": null,
            "costComponents": [
              {
                "name": "Requests",
                "unit": "1M requests",
                "hourlyQuantity": null,
                "monthlyQuantity": null,
                "price": "0.2",
                "hourlyCost": null,
                "monthlyCost": null,
                "usageBased": true
              },
              {
                "name": "Duration",
                "unit": "GB-seconds",
                "hourlyQuantity": null,
                "monthlyQuantity": null,
                "price": "0.0000166667",
                "hourlyCost": null,
                "monthlyCost": null,
                "usageBased": true
              }
            ]
          }
        ],
        "totalHourlyCost": "1.017315068493150679",
        "totalMonthlyCost": "742.64",
        "totalMonthlyUsageCost": "0",
      },
      // This contains the diff of resources between the pastBreakdown and breakdown
      "diff": {
        "resources": [
          {
            "name": "aws_instance.web_app",
            "metadata": {},
            "hourlyCost": "1.017315068493150679",
            "monthlyCost": "742.64",
            "costComponents": [
              {
                "name": "Instance usage (Linux/UNIX, on-demand, m5.4xlarge)",
                "unit": "hours",
                "hourlyQuantity": "1",
                "monthlyQuantity": "730",
                "price": "0.768",
                "hourlyCost": "0.768",
                "monthlyCost": "560.64"
              }
            ],
            "subresources": [
              {
                "name": "root_block_device",
                "metadata": {},
                "hourlyCost": "0.00684931506849315",
                "monthlyCost": "5",
                "costComponents": [
                  {
                    "name": "Storage (general purpose SSD, gp2)",
                    "unit": "GB",
                    "hourlyQuantity": "0.0684931506849315",
                    "monthlyQuantity": "50",
                    "price": "0.1",
                    "hourlyCost": "0.00684931506849315",
                    "monthlyCost": "5"
                  }
                ]
              },
              {
                "name": "ebs_block_device[0]",
                "metadata": {},
                "hourlyCost": "0.242465753424657529",
                "monthlyCost": "177",
                "costComponents": [
                  {
                    "name": "Storage (provisioned IOPS SSD, io1)",
                    "unit": "GB",
                    "hourlyQuantity": "1.3698630136986301",
                    "monthlyQuantity": "1000",
                    "price": "0.125",
                    "hourlyCost": "0.1712328767123287625",
                    "monthlyCost": "125"
                  },
                  {
                    "name": "Provisioned IOPS",
                    "unit": "IOPS",
                    "hourlyQuantity": "1.0958904109589041",
                    "monthlyQuantity": "800",
                    "price": "0.065",
                    "hourlyCost": "0.0712328767123287665",
                    "monthlyCost": "52"
                  }
                ]
              }
            ]
          },
          {
            "name": "aws_lambda_function.hello_world",
            "metadata": {},
            "hourlyCost": "0",
            "monthlyCost": "0",
            "costComponents": [
              {
                "name": "Requests",
                "unit": "1M requests",
                "hourlyQuantity": "0",
                "monthlyQuantity": "0",
                "price": "0.2",
                "hourlyCost": "0",
                "monthlyCost": "0",
                "usageBased": true
              },
              {
                "name": "Duration",
                "unit": "GB-seconds",
                "hourlyQuantity": "0",
                "monthlyQuantity": "0",
                "price": "0.0000166667",
                "hourlyCost": "0",
                "monthlyCost": "0",
                "usageBased": true
              }
            ]
          }
        ],
        "totalHourlyCost": "1.017315068493150679",
        "totalMonthlyCost": "742.64",
        "totalMonthlyUsageCost": "0",
      },
      // The summary format is not finalized and is subject to change
      "summary": {
        "totalDetectedResources": 2,
        "totalSupportedResources": 2,
        "totalUnsupportedResources": 0,
        "totalUsageBasedResources": 2,
        "totalNoPriceResources": 0,
        "unsupportedResourceCounts": {},
        "noPriceResourceCounts": {}
      }
    }
  ],
  "totalHourlyCost": "1.017315068493150679",
  "totalMonthlyCost": "742.64",
  "totalMonthlyUsageCost": "0",
  "pastTotalHourlyCost": "0",
  "pastTotalMonthlyCost": "0",
  "pastTotalMonthlyUsageCost": "0",
  "diffTotalHourlyCost": "1.017315068493150679",
  "diffTotalMonthlyCost": "742.64",
  "timeGenerated": "2022-05-23T20:11:05.005205-07:00",
  // The summary format is not finalized and is subject to change
  "summary": {
    "totalDetectedResources": 2,
    "totalSupportedResources": 2,
    "totalUnsupportedResources": 0,
    "totalUsageBasedResources": 2,
    "totalNoPriceResources": 0,
    "unsupportedResourceCounts": {},
    "noPriceResourceCounts": {}
  }
}
```

The JSON schema is available [on github](https://github.com/diginfra/diginfra/blob/master/schema/diginfra.schema.json). Additional context such as the operating system, Terraform version, type of CI system, and Diginfra version are also recorded alongside error tracking events so we can identify and fix issues quickly.

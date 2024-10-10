export const pageMap = [{
  name: "blog",
  route: "/blog",
  children: [{
    name: "2023-10-11-oracle-split-read",
    route: "/blog/2023-10-11-oracle-split-read",
    frontMatter: {
      "slug": "oracle-split-read",
      "title": "Oracle大表的并行读取",
      "authors": ["aleafs"],
      "image": "http://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT2211A10520EB41FBA9E95AA892CCEE34/native/rh08-oracle-for-azure-732x372.jpg",
      "tags": ["Oracle", "ROWID", "并行"]
    }
  }, {
    name: "2023-12-29-v2023-released",
    route: "/blog/2023-12-29-v2023-released",
    frontMatter: {
      "slug": "v2023-release-notes",
      "authors": ["aleafs"],
      "image": "/img/v2023-cover.jpeg",
      "tags": ["Release Notes", "v2023"],
      "sidebarTitle": "2023 12 29 V2023 Released"
    }
  }, {
    name: "2024-01-19-v095-released",
    route: "/blog/2024-01-19-v095-released",
    frontMatter: {
      "slug": "v095-release-notes",
      "authors": ["aleafs"],
      "image": "/img/v2023-cover.jpeg",
      "tags": ["Release Notes", "v0.9.5"],
      "sidebarTitle": "2024 01 19 V095 Released"
    }
  }, {
    name: "2024-04-04-sqlplus-tips",
    route: "/blog/2024-04-04-sqlplus-tips",
    frontMatter: {
      "slug": "tips-for-sqlplus",
      "title": "Tips for sqlplus",
      "authors": ["aleafs"],
      "tags": ["Sqlplus", "工具"]
    }
  }, {
    name: "2024-04-23-v010-released",
    route: "/blog/2024-04-23-v010-released",
    frontMatter: {
      "slug": "v0.10.1-release-notes",
      "authors": ["aleafs"],
      "tags": ["Release Notes", "v0.10.1"],
      "sidebarTitle": "2024 04 23 V010 Released"
    }
  }, {
    name: "2024-06-03-v011-released",
    route: "/blog/2024-06-03-v011-released",
    frontMatter: {
      "slug": "v0.11.0-release-notes",
      "authors": ["aleafs"],
      "tags": ["Release Notes", "v0.11.0"],
      "sidebarTitle": "2024 06 03 V011 Released"
    }
  }, {
    name: "2024-06-21-with-lakehouse",
    route: "/blog/2024-06-21-with-lakehouse",
    frontMatter: {
      "slug": "bluepipe-with-lakehouse",
      "authors": ["aleafs"],
      "image": "/img/blog-static/cover-bridge.jpeg",
      "tags": ["lakehouse", "network", "Oracle"],
      "sidebarTitle": "2024 06 21 with Lakehouse"
    }
  }]
}, {
  name: "docs",
  route: "/docs",
  children: [{
    name: "concept",
    route: "/docs/concept",
    children: [{
      name: "01-overview",
      route: "/docs/concept/01-overview",
      frontMatter: {
        "id": "overview",
        "sidebar_position": 1,
        "sidebarTitle": "01 Overview"
      }
    }, {
      name: "02-principle",
      route: "/docs/concept/02-principle",
      frontMatter: {
        "id": "principle",
        "sidebar_position": 2,
        "sidebarTitle": "02 Principle"
      }
    }, {
      name: "03-tech-arch",
      route: "/docs/concept/03-tech-arch",
      frontMatter: {
        "id": "architecture",
        "sidebar_position": 3,
        "sidebarTitle": "03 Tech Arch"
      }
    }, {
      name: "04-roadmap",
      route: "/docs/concept/04-roadmap",
      frontMatter: {
        "id": "roadmap",
        "sidebar_position": 4,
        "sidebarTitle": "04 Roadmap"
      }
    }, {
      name: "05-why-not-others",
      route: "/docs/concept/05-why-not-others",
      frontMatter: {
        "id": "why-not-others",
        "sidebar_position": 4,
        "sidebarTitle": "05 Why Not Others"
      }
    }, {
      name: "11-security",
      route: "/docs/concept/11-security",
      children: [{
        name: "01-system-safety",
        route: "/docs/concept/11-security/01-system-safety",
        frontMatter: {
          "id": "system-safety",
          "sidebar_position": 1,
          "sidebarTitle": "01 System Safety"
        }
      }, {
        name: "02-data-privacy",
        route: "/docs/concept/11-security/02-data-privacy",
        frontMatter: {
          "id": "data-privacy",
          "sidebar_position": 2,
          "sidebarTitle": "02 Data Privacy"
        }
      }, {
        name: "index",
        route: "/docs/concept/11-security",
        frontMatter: {
          "id": "security",
          "sidebar_position": 11,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "12-scheduling",
      route: "/docs/concept/12-scheduling",
      children: [{
        name: "01-edge-cluster",
        route: "/docs/concept/12-scheduling/01-edge-cluster",
        frontMatter: {
          "id": "edge-cluster",
          "sidebar_position": 1,
          "sidebarTitle": "01 Edge Cluster"
        }
      }, {
        name: "02-assignment",
        route: "/docs/concept/12-scheduling/02-assignment",
        frontMatter: {
          "id": "cluster-assignment",
          "sidebar_position": 2,
          "sidebarTitle": "02 Assignment"
        }
      }, {
        name: "03-serverless",
        route: "/docs/concept/12-scheduling/03-serverless",
        frontMatter: {
          "id": "serverless",
          "sidebar_position": 3,
          "sidebarTitle": "03 Serverless"
        }
      }, {
        name: "index",
        route: "/docs/concept/12-scheduling",
        frontMatter: {
          "id": "scheduler",
          "sidebar_position": 12,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "13-execution",
      route: "/docs/concept/13-execution",
      children: [{
        name: "01-job-plan",
        route: "/docs/concept/13-execution/01-job-plan",
        frontMatter: {
          "id": "job-plan",
          "sidebar_position": 1,
          "sidebarTitle": "01 Job Plan"
        }
      }, {
        name: "02-parallelism",
        route: "/docs/concept/13-execution/02-parallelism",
        frontMatter: {
          "id": "parallelism",
          "sidebar_position": 2,
          "sidebarTitle": "02 Parallelism"
        }
      }, {
        name: "03-idempotency",
        route: "/docs/concept/13-execution/03-idempotency",
        frontMatter: {
          "id": "retry-strategy",
          "sidebar_position": 3,
          "sidebarTitle": "03 Idempotency"
        }
      }, {
        name: "04-verification",
        route: "/docs/concept/13-execution/04-verification",
        frontMatter: {
          "id": "data-verification",
          "sidebar_position": 4,
          "sidebarTitle": "04 Verification"
        }
      }, {
        name: "index",
        route: "/docs/concept/13-execution",
        frontMatter: {
          "id": "execution",
          "sidebar_position": 13,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "14-type-system",
      route: "/docs/concept/14-type-system",
      children: [{
        name: "01-field-type",
        route: "/docs/concept/14-type-system/01-field-type",
        frontMatter: {
          "id": "field-type",
          "sidebar_position": 1,
          "sidebarTitle": "01 Field Type"
        }
      }, {
        name: "02-schema-repair",
        route: "/docs/concept/14-type-system/02-schema-repair",
        frontMatter: {
          "id": "schema-repair",
          "sidebar_position": 2,
          "sidebarTitle": "02 Schema Repair"
        }
      }, {
        name: "03-limitation",
        route: "/docs/concept/14-type-system/03-limitation",
        frontMatter: {
          "id": "limitation",
          "sidebar_position": 3,
          "sidebarTitle": "03 Limitation"
        }
      }, {
        name: "index",
        route: "/docs/concept/14-type-system",
        frontMatter: {
          "id": "type-system",
          "sidebar_position": 14,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "15-connectors",
      route: "/docs/concept/15-connectors",
      children: [{
        name: "01-sample-connector",
        route: "/docs/concept/15-connectors/01-sample-connector",
        frontMatter: {
          "id": "sample-connector",
          "sidebar_position": 1,
          "sidebarTitle": "01 Sample Connector"
        }
      }, {
        name: "index",
        route: "/docs/concept/15-connectors",
        frontMatter: {
          "id": "type-system",
          "sidebar_position": 15,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "16-integration",
      route: "/docs/concept/16-integration",
      children: [{
        name: "001-etl-tools",
        route: "/docs/concept/16-integration/001-etl-tools",
        frontMatter: {
          "id": "etl-tools",
          "sidebar_position": 1,
          "sidebarTitle": "001 Etl Tools"
        }
      }, {
        name: "002-observability",
        route: "/docs/concept/16-integration/002-observability",
        frontMatter: {
          "id": "observability",
          "sidebar_position": 2,
          "sidebarTitle": "002 Observability"
        }
      }, {
        name: "index",
        route: "/docs/concept/16-integration",
        frontMatter: {
          "id": "integration",
          "sidebar_position": 16,
          "sidebarTitle": "Index"
        }
      }]
    }]
  }, {
    name: "faq",
    route: "/docs/faq",
    frontMatter: {
      "id": "faq",
      "title": "FAQ",
      "sidebar_label": "FAQ",
      "sidebar_position": 999
    }
  }, {
    name: "getting-started",
    route: "/docs/getting-started",
    children: [{
      name: "11-deploy",
      route: "/docs/getting-started/11-deploy",
      children: [{
        name: "01-docker",
        route: "/docs/getting-started/11-deploy/01-docker",
        frontMatter: {
          "id": "deploy-docker",
          "sidebar_position": 1,
          "sidebarTitle": "01 Docker"
        }
      }, {
        name: "index",
        route: "/docs/getting-started/11-deploy",
        frontMatter: {
          "id": "deploy",
          "sidebar_position": 11,
          "sidebarTitle": "Index"
        }
      }]
    }, {
      name: "index",
      route: "/docs/getting-started",
      frontMatter: {
        "id": "quickstart",
        "sidebar_position": 1,
        "sidebarTitle": "Index"
      }
    }]
  }, {
    name: "support",
    route: "/docs/support",
    children: [{
      name: "01-download",
      route: "/docs/support/01-download",
      frontMatter: {
        "id": "download",
        "title": "配置与下载",
        "sidebar_label": "配置与下载",
        "sidebar_position": 1
      }
    }, {
      name: "02-open-bug",
      route: "/docs/support/02-open-bug",
      frontMatter: {
        "id": "open-bug",
        "sidebar_position": 2,
        "sidebarTitle": "02 Open Bug"
      }
    }, {
      name: "03-promotion",
      route: "/docs/support/03-promotion",
      frontMatter: {
        "id": "promotion",
        "sidebar_position": 3,
        "sidebarTitle": "03 Promotion"
      }
    }, {
      name: "99-faq",
      route: "/docs/support/99-faq",
      children: [{
        name: "index",
        route: "/docs/support/99-faq",
        frontMatter: {
          "id": "faq",
          "sidebar_position": 99,
          "sidebarTitle": "Index"
        }
      }]
    }]
  }, {
    name: "tests",
    route: "/docs/tests",
    children: [{
      name: "testing",
      route: "/docs/tests/testing",
      frontMatter: {
        "id": "testing",
        "title": "Testing"
      }
    }]
  }]
}];

/**
 * Semantic Release Configuration for higher-edu-morocco (.cjs format)
 * Compatible with projects using "type": "module"
 */

module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/anasbehhari/higher-edu-morocco",
  tagFormat: "v${version}",
  initialVersion: "1.0.1",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# 📦 Changelog\n"
      }
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
        tarballDir: "release"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
};

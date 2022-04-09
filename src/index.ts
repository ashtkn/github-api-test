import { Octokit } from '@octokit/core'
import * as dotenv from 'dotenv'

dotenv.config({
  path: '.env.local',
})

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER || ''
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME || ''

const main = async (): Promise<void> => {
  const octokit = new Octokit({ auth: GITHUB_TOKEN })
  const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
    owner: GITHUB_REPO_OWNER,
    repo: GITHUB_REPO_NAME,
  })

  console.log(response.data)
}

main()
  .then()
  .catch((err) => console.error(err))

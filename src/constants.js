export const Pages = {
  landing: 'LANDING',
  accessToken: 'ACCESS_TOKEN',
  issueBranchName: 'ISSUE_BRANCH_NAME',
  main: 'MAIN',
  error: 'ERROR',
  search: 'SEARCH',
  NEW_ISSUE: 'newIssue',
  TODOS: 'todos'
}

export const Gitlab = {
  url: 'https://gitlab.com',
  apiUrl: 'https://gitlab.com/api/v3',
  personalTokenUrl: 'https://gitlab.com/profile/personal_access_tokens'
}

export const GITLAB_URL = 'https://gitlab.com'
export const PROJECT_DROPDOWN_OPTIONS = [
  { id: 'code', text: 'Code', icon: 'code' },
  { id: 'branches', text: 'Branches', icon: 'fork' },
  { id: 'issues', text: 'Issues', icon: 'warning circle' }
]

export const GITLAB_TODO_ACTIONS = {
  ASSIGNED: 'assigned',
  MENTIONED: 'mentioned',
  BUILD_FAILED: 'build_failed',
  MARKED: 'marked',
  APPROVAL_REQUIRED: 'approval_required',
}

export const GITLAB_TODO_TYPES = {
  ISSUE: 'Issue',
  MERGE_REQUEST: 'MergeRequest',
}

export const NOTIFICATION_IMAGE = '/public/images/logo-and-name.png'

export default {
  Pages,
  Gitlab
}

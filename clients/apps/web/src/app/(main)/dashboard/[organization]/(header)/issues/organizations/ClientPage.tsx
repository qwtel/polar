'use client'

import { GitHubAppInstallationUpsell } from '@/components/Dashboard/Upsell'
import { EnableIssuesView } from '@/components/Issues/EnableIssuesView'
import { DashboardBody } from '@/components/Layout/DashboardLayout'
import { useHasLinkedExternalOrganizations } from '@/hooks'
import { useRedirectToGitHubInstallation } from '@/hooks/github'
import { useExternalOrganizations } from '@/hooks/queries/externalOrganizations'
import { MaintainerOrganizationContext } from '@/providers/maintainerOrganization'
import { getGitHubOrganizationInstallationURL } from '@/utils/auth'
import { GitHub } from '@mui/icons-material'
import Button from '@polar-sh/ui/components/atoms/Button'
import ShadowListGroup from '@polar-sh/ui/components/atoms/ShadowListGroup'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

export default function ClientPage() {
  const pathname = usePathname()
  const { organization } = useContext(MaintainerOrganizationContext)
  const hasLinkedExternalOrganizations =
    useHasLinkedExternalOrganizations(organization)
  const externalOrganizations = useExternalOrganizations({
    organization_id: organization.id,
  })
  const redirectToGitHubInstallation =
    useRedirectToGitHubInstallation(organization)

  if (!organization.feature_settings?.issue_funding_enabled) {
    return <EnableIssuesView organization={organization} />
  }

  return (
    <DashboardBody>
      {organization && !hasLinkedExternalOrganizations && (
        <GitHubAppInstallationUpsell organization={organization} />
      )}
      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-center justify-end">
          <Button role="link" onClick={redirectToGitHubInstallation}>
            Link new organization
          </Button>
        </div>
        <ShadowListGroup>
          {externalOrganizations.data?.items.map((externalOrganization) => (
            <ShadowListGroup.Item key={externalOrganization.id}>
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  {externalOrganization.platform === 'github' && <GitHub />}
                  {externalOrganization.name}
                </div>
                <Link
                  href={getGitHubOrganizationInstallationURL(
                    externalOrganization.id,
                    {
                      return_to: pathname,
                    },
                  )}
                >
                  <Button type="button">Manage installation</Button>
                </Link>
              </div>
            </ShadowListGroup.Item>
          ))}
        </ShadowListGroup>
      </div>
    </DashboardBody>
  )
}

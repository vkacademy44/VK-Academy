/**
 * Sanity Studio — mounted at /studio
 * force-static is intentionally removed so the publish button and
 * draft/live document controls work correctly.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
